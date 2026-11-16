import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import {
  capturePage,
  expectNoBrowserIssues,
  expectNoHorizontalOverflow,
  openPage,
  watchBrowserIssues
} from "./helpers";

const articlePath = "/research/silver-below-50-gold-silver-ratio-outlook";

test("gold-silver research note is published with the approved photo cover and complete metadata", async ({
  page,
  request
}, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, articlePath);

  await expect(page.getByText("Editorial draft / not published")).toHaveCount(0);
  await expect(page.getByText("Published", { exact: true })).toBeVisible();
  await expect(page.getByText("Research note 10")).toBeVisible();
  await expect(page.getByText("Gold-Silver Ratio and Silver Accumulation Outlook")).toBeVisible();
  await expect(page.locator("#article-cover")).toContainText("78.1");
  await expect(page.locator("#article-cover img")).toHaveAttribute(
    "src",
    /gold-silver-relative-value-photo-2026\.png/
  );
  await expect(page.locator(".gold-silver-framework")).toContainText("Hypothetical watch threshold");
  await expect(page.locator(".silver-structure-map")).toContainText("$40-45");
  await expect(page.locator(".gold-silver-matrix__target")).toHaveCount(2);
  await expect(page.locator(".gold-silver-matrix")).toContainText("$4,200");
  await expect(page.locator(".silver-scenarios__item")).toHaveCount(3);
  await expect(page.getByText("7.4-times bullion result")).toBeVisible();

  const titleLineCount = await page.locator(".research-article__header h1").evaluate((element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    return Array.from(range.getClientRects()).filter((rect) => rect.width > 0).length;
  });
  expect(titleLineCount).toBeLessThanOrEqual(3);

  const articleResponse = await request.get(articlePath);
  expect(articleResponse.ok()).toBeTruthy();
  const articleHtml = await articleResponse.text();
  expect(articleHtml).not.toContain("noindex");
  expect(articleHtml).toContain("/research/gold-silver-relative-value-photo-2026.png");

  const hubResponse = await request.get("/research");
  expect(hubResponse.ok()).toBeTruthy();
  expect(await hubResponse.text()).toContain(articlePath);

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();
  expect(await sitemapResponse.text()).toContain(articlePath);

  const socialImageResponse = await request.get(
    "/research/gold-silver-relative-value-photo-2026.png"
  );
  expect(socialImageResponse.ok()).toBeTruthy();
  expect(socialImageResponse.headers()["content-type"]).toContain("image/png");

  await capturePage(page, testInfo, "gold-silver-relative-value-desktop");
  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);
});

test("research hub features the published gold-silver note with its own cover", async ({
  page
}, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, "/research");

  const feature = page.locator(".research-feature");
  await expect(feature).toHaveAttribute("href", articlePath);
  await expect(feature.getByRole("heading", { name: "Silver Below $50" })).toBeVisible();
  await expect(feature.locator(".gold-silver-cover")).toContainText("78.1");
  await expect(feature.locator(".gold-silver-cover img")).toHaveAttribute(
    "src",
    /gold-silver-relative-value-photo-2026\.png/
  );
  await capturePage(page, testInfo, "gold-silver-relative-value-hub-desktop");
  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);
});

test("gold-silver research note remains readable on mobile", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, articlePath);

  await expect(page.locator(".gold-silver-cover")).toBeVisible();
  await expect(page.locator(".gold-silver-framework")).toBeVisible();
  await expect(page.locator(".silver-structure-map")).toBeVisible();
  await expect(page.locator(".gold-silver-matrix")).toBeVisible();
  await expect(page.locator(".silver-preparation")).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await capturePage(page, testInfo, "gold-silver-relative-value-mobile");
  expectNoBrowserIssues(issues);
});

test("research hub keeps the gold-silver feature legible on mobile", async ({
  page
}, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, "/research");

  const feature = page.locator(".research-feature");
  await expect(feature).toHaveAttribute("href", articlePath);
  await expect(feature.locator(".gold-silver-cover")).toBeVisible();
  await capturePage(page, testInfo, "gold-silver-relative-value-hub-mobile");
  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);
});

test("gold-silver research note has no serious or critical WCAG 2 A/AA issues", async ({
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
