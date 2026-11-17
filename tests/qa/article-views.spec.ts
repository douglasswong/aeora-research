import { expect, test } from "@playwright/test";
import {
  ARTICLE_VIEW_INCREMENT_LUA,
  buildArticleViewKeys,
  getArticleViewCounterConfig,
  getArticleViewCounts,
  recordArticleView
} from "../../src/lib/article-views";
import { RESEARCH_ARTICLES } from "../../src/lib/research";
import {
  capturePage,
  expectNoHorizontalOverflow,
  openPage,
  watchBrowserIssues,
  expectNoBrowserIssues
} from "./helpers";

const COUNTER_CONFIG = {
  redisUrl: "https://example.upstash.io",
  redisToken: "server-only-token",
  rateLimitSecret: "a".repeat(32)
} as const;

function jsonResponse(payload: unknown) {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

test("counter configuration stays disabled outside explicitly enabled production", () => {
  expect(
    getArticleViewCounterConfig({
      VERCEL_ENV: "preview",
      ARTICLE_VIEW_COUNTER_ENABLED: "true",
      UPSTASH_REDIS_REST_URL: COUNTER_CONFIG.redisUrl,
      UPSTASH_REDIS_REST_TOKEN: COUNTER_CONFIG.redisToken,
      ARTICLE_VIEW_COUNTER_RATE_LIMIT_SECRET: COUNTER_CONFIG.rateLimitSecret
    })
  ).toBeNull();

  expect(
    getArticleViewCounterConfig({
      VERCEL_ENV: "production",
      ARTICLE_VIEW_COUNTER_ENABLED: "false",
      UPSTASH_REDIS_REST_URL: COUNTER_CONFIG.redisUrl,
      UPSTASH_REDIS_REST_TOKEN: COUNTER_CONFIG.redisToken,
      ARTICLE_VIEW_COUNTER_RATE_LIMIT_SECRET: COUNTER_CONFIG.rateLimitSecret
    })
  ).toBeNull();

  expect(
    getArticleViewCounterConfig({
      VERCEL_ENV: "production",
      ARTICLE_VIEW_COUNTER_ENABLED: "true",
      UPSTASH_REDIS_REST_URL: COUNTER_CONFIG.redisUrl,
      UPSTASH_REDIS_REST_TOKEN: COUNTER_CONFIG.redisToken,
      ARTICLE_VIEW_COUNTER_RATE_LIMIT_SECRET: COUNTER_CONFIG.rateLimitSecret
    })
  ).toEqual(COUNTER_CONFIG);

  expect(
    getArticleViewCounterConfig({
      VERCEL_ENV: "production",
      ARTICLE_VIEW_COUNTER_ENABLED: "true",
      UPSTASH_REDIS_REST_KV_REST_API_URL: COUNTER_CONFIG.redisUrl,
      UPSTASH_REDIS_REST_KV_REST_API_TOKEN: COUNTER_CONFIG.redisToken,
      ARTICLE_VIEW_COUNTER_RATE_LIMIT_SECRET: COUNTER_CONFIG.rateLimitSecret
    })
  ).toEqual(COUNTER_CONFIG);
});

test("counter uses one atomic Redis script per concurrent qualified-view attempt", async () => {
  const commands: unknown[][] = [];
  let total = 0;
  const clientAddress = "203.0.113.42";
  const userAgent = "Mozilla/5.0 (qualified-reader)";

  const results = await Promise.all(
    Array.from({ length: 12 }, () =>
      recordArticleView(
        COUNTER_CONFIG,
        {
          viewId: "research-010",
          clientAddress,
          userAgent
        },
        async (_url, init) => {
          const command = JSON.parse(String(init.body)) as unknown[];
          commands.push(command);
          total += 1;

          return jsonResponse({ result: [1, total, 1] });
        }
      )
    )
  );

  expect(results.every((result) => result.recorded)).toBeTruthy();
  expect(commands).toHaveLength(12);
  expect(ARTICLE_VIEW_INCREMENT_LUA).toContain("SET");
  expect(ARTICLE_VIEW_INCREMENT_LUA).toContain("INCR");

  for (const command of commands) {
    expect(command[0]).toBe("EVAL");
    expect(command[1]).toBe(ARTICLE_VIEW_INCREMENT_LUA);
    expect(command[2]).toBe(3);
    expect(JSON.stringify(command)).not.toContain(clientAddress);
    expect(JSON.stringify(command)).not.toContain(userAgent);
  }

  const keys = buildArticleViewKeys("research-010", "derived-value");
  expect(keys.total).toBe("aeora:research:views:v1:research-010");
  expect(keys.dedupe).not.toContain("203.0.113.42");
});

test("counter batches read-only totals and every public research article has a stable view id", async () => {
  const commands: unknown[][] = [];
  const counts = await getArticleViewCounts(
    COUNTER_CONFIG,
    ["research-010", "field-guide-g01"],
    async (_url, init) => {
      commands.push(JSON.parse(String(init.body)) as unknown[]);
      return jsonResponse({ result: ["126", "4"] });
    }
  );

  expect(counts).toEqual({
    "research-010": 126,
    "field-guide-g01": 4
  });
  expect(commands).toHaveLength(1);
  expect(commands[0][0]).toBe("MGET");
  expect(commands[0]).not.toContain("EVAL");

  const viewIds = RESEARCH_ARTICLES.map((article) => article.viewId);
  expect(viewIds.every(Boolean)).toBeTruthy();
  expect(new Set(viewIds).size).toBe(viewIds.length);
  expect(
    RESEARCH_ARTICLES.filter((article) => article.contentType === "guide").length
  ).toBeGreaterThan(0);
});

test("disabled API is inert and rejects malformed or cross-origin write attempts", async ({
  request
}) => {
  const read = await request.get(
    "/api/research/views?slugs=silver-below-50-gold-silver-ratio-outlook"
  );
  expect(read.ok()).toBeTruthy();
  expect(await read.json()).toEqual({ enabled: false, counts: {} });

  const malformed = await request.get("/api/research/views?slugs=bad_slug");
  expect(malformed.status()).toBe(400);

  const crossOrigin = await request.post("/api/research/views", {
    headers: {
      Origin: "https://not-aeora.example"
    },
    data: {
      slug: "silver-below-50-gold-silver-ratio-outlook"
    }
  });
  expect(crossOrigin.status()).toBe(403);
});

test("Research listing makes one batched count request and displays accessible compact counts", async ({
  page
}, testInfo) => {
  const requests: string[] = [];

  await page.route("**/api/research/views**", async (route) => {
    requests.push(route.request().url());
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        enabled: true,
        counts: {
          "silver-below-50-gold-silver-ratio-outlook": 1234,
          "prop-firm-vs-prop-desk-malaysia": 87
        }
      })
    });
  });

  await page.setViewportSize({ width: 1280, height: 800 });
  await openPage(page, "/research");

  await expect(
    page.getByLabel("1,234 qualified article views")
  ).toBeVisible();
  await expect(page.locator(".research-feature .article-view-count")).toContainText(
    "1.2K views"
  );
  await expect(page.getByLabel("87 qualified article views")).toBeVisible();
  expect(requests).toHaveLength(1);
  expect(decodeURIComponent(requests[0])).toContain(
    "silver-below-50-gold-silver-ratio-outlook"
  );
  await expectNoHorizontalOverflow(page);
  await capturePage(page, testInfo, "article-view-counter-research-laptop");
});

test("article counter waits for a qualified read, updates the count and hides during an outage", async ({
  page
}, testInfo) => {
  const issues = watchBrowserIssues(page);
  let postRequests = 0;

  await page.route("**/api/research/views**", async (route) => {
    if (route.request().method() === "POST") {
      postRequests += 1;
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({ enabled: true, recorded: true, total: 1201 })
      });
      return;
    }

    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        enabled: true,
        counts: {
          "silver-below-50-gold-silver-ratio-outlook": 1200
        }
      })
    });
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.bringToFront();
  await openPage(page, "/research/silver-below-50-gold-silver-ratio-outlook");

  await expect(page.getByLabel("1,200 qualified article views")).toBeVisible();
  expect(postRequests).toBe(0);
  await capturePage(page, testInfo, "article-view-counter-article-mobile");
  await page.waitForTimeout(8_300);
  await expect.poll(() => postRequests).toBe(1);
  await expect(page.getByLabel("1,201 qualified article views")).toBeVisible();
  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);

  await page.unroute("**/api/research/views**");
  await page.route("**/api/research/views**", (route) =>
    route.fulfill({ status: 503, contentType: "application/json", body: "{}" })
  );
  await page.goto("/research/why-markets-rally-despite-bad-news", {
    waitUntil: "domcontentloaded"
  });
  await expect(page.locator(".research-article__view-meta")).toBeHidden();
});
