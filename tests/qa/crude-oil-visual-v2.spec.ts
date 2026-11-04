import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import {
  capturePage,
  expectNoBrowserIssues,
  expectNoHorizontalOverflow,
  openPage,
  watchBrowserIssues
} from "./helpers";

const articlePath = "/research/crude-oil-crossroads-brent-curve-physical-markets";

test.beforeEach(async ({ page }) => {
  await page.route("https://widgets.tradingview-widget.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: ""
    })
  );
});

test("oil visual briefing is published with sourced market graphics", async ({
  page,
  request
}, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, articlePath);

  await expect(page.getByText("Editorial draft / not published")).toHaveCount(0);
  await expect(page.getByText("Published", { exact: true })).toBeVisible();
  await expect(page.getByText("Research note 09")).toBeVisible();
  await expect(
    page.getByText("Barclays Commodities Research Intel Study", { exact: true })
  ).toBeVisible();
  await expect(page.locator("#article-cover")).toBeVisible();
  await expect(page.locator("#article-cover")).toContainText(
    "Visual briefing / market structure"
  );
  await expect(page.locator(".oil-v2-flow-figure li")).toHaveCount(3);
  await expect(page.locator(".oil-v2-flow-figure")).toContainText("13.9");
  await expect(page.locator(".oil-v2-flow-figure")).toContainText("10.9");
  await expect(page.locator(".oil-v2-flow-figure")).toContainText("5.6");
  await expect(page.locator(".oil-v2-signal-board li")).toHaveCount(4);
  await expect(page.locator(".oil-v2-source-study__plate")).toHaveCount(3);
  await expect(page.locator(".oil-v2-source-study__plate img")).toHaveCount(3);
  await expect(page.locator(".oil-v2-source-study")).toContainText("Source note");
  await expect(page.locator(".oil-v2-spread-figure__leg")).toHaveCount(2);
  await expect(page.locator(".oil-v2-scenarios li")).toHaveCount(3);
  await expect(page.locator(".oil-v2-local-grid article")).toHaveCount(3);
  await expect(page.getByText("V2 note explains what to read")).toHaveCount(0);

  const titleLineCount = await page.locator(".research-article__header h1").evaluate((element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    return Array.from(range.getClientRects()).filter((rect) => rect.width > 0).length;
  });
  expect(titleLineCount).toBeLessThanOrEqual(3);

  const articleResponse = await request.get(articlePath);
  expect(articleResponse.ok()).toBeTruthy();
  expect(await articleResponse.text()).not.toContain("noindex");

  const hubResponse = await request.get("/research");
  expect(hubResponse.ok()).toBeTruthy();
  const hubHtml = await hubResponse.text();
  expect(hubHtml).toContain(articlePath);
  expect(hubHtml).toContain("Visual briefing / market structure");

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();
  expect(await sitemapResponse.text()).toContain(articlePath);

  await capturePage(page, testInfo, "crude-oil-visual-briefing-desktop");
  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);
});

test("research hub features the published visual briefing with its own cover", async ({
  page
}, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, "/research");

  const featuredArticle = page.locator(".research-feature");
  await expect(featuredArticle).toHaveAttribute("href", articlePath);
  await expect(featuredArticle.getByRole("heading", { name: "Oil Visual Briefing" })).toBeVisible();
  await expect(featuredArticle).toContainText("Visual briefing / market structure");
  await expect(featuredArticle.locator("img")).toHaveAttribute(
    "src",
    /crude-oil-crossroads-physical-markets-november-2026\.png/
  );
  await capturePage(page, testInfo, "crude-oil-visual-briefing-hub-desktop");
  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);
});

test("research hub keeps the visual briefing cover legible on mobile", async ({
  page
}, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, "/research");

  const featuredArticle = page.locator(".research-feature");
  await expect(featuredArticle).toHaveAttribute("href", articlePath);
  await expect(featuredArticle.locator(".crude-oil-crossroads-cover")).toBeVisible();
  await capturePage(page, testInfo, "crude-oil-visual-briefing-hub-mobile");
  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);
});

test("oil visual briefing remains legible on mobile", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, articlePath);

  await expect(page.locator(".oil-v2-flow-figure")).toBeVisible();
  await expect(page.locator(".oil-v2-signal-board")).toBeVisible();
  await expect(page.locator(".oil-v2-source-study")).toBeVisible();
  await expect(page.locator(".oil-v2-spread-figure")).toBeVisible();
  await expect(page.locator(".oil-v2-scenarios")).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await capturePage(page, testInfo, "crude-oil-visual-briefing-mobile");
  expectNoBrowserIssues(issues);
});

test("oil visual briefing has no serious or critical WCAG 2 A/AA issues", async ({
  page
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await openPage(page, articlePath);

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  const blockingViolations = results.violations.filter(
    (violation) => violation.impact === "critical" || violation.impact === "serious"
  );

  expect(blockingViolations).toEqual([]);
});
