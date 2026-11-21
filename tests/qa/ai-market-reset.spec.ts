import { expect, test } from "@playwright/test";
import {
  capturePage,
  expectNoBrowserIssues,
  expectNoHorizontalOverflow,
  openPage,
  watchBrowserIssues
} from "./helpers";

const articlePath = "/research/ai-bubble-or-market-reset-us-equity-selloff";

test.beforeEach(async ({ page }) => {
  await page.route("https://widgets.tradingview-widget.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: ""
    })
  );
});

test("AI market-reset article keeps its desktop title within three lines", async ({
  page
}, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, articlePath);

  await expect(page.locator(".research-article__draft-status")).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
  const coverWidth = await page
    .locator(".ai-market-cover img")
    .evaluate((image) => (image as HTMLImageElement).naturalWidth);
  expect(coverWidth).toBeGreaterThan(0);
  await expect(page.locator(".ai-capex-figure")).toBeVisible();
  await expect(page.locator(".ai-capex-figure__company-mark")).toHaveCount(2);
  await expect(page.getByText("Options-expiration context")).toBeVisible();

  const titleLineCount = await page.locator(".research-article__header h1").evaluate((title) => {
    const styles = getComputedStyle(title);
    const lineHeight = Number.parseFloat(styles.lineHeight);
    return Math.ceil(title.getBoundingClientRect().height / lineHeight - 0.05);
  });

  expect(titleLineCount).toBeLessThanOrEqual(3);
  await expectNoHorizontalOverflow(page);
  await capturePage(page, testInfo, "ai-market-reset-desktop");
  expectNoBrowserIssues(issues);
});

test("AI market-reset article stays readable on mobile", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, articlePath);

  await expect(page.locator(".ai-market-cover")).toBeVisible();
  await expect(page.locator(".ai-capex-figure__plot article")).toHaveCount(2);
  await expect(page.getByText("24,895.1 to 25,205.8")).toBeVisible();
  await expect(page.locator(".ai-market-scenarios__item")).toHaveCount(3);
  await expectNoHorizontalOverflow(page);
  await capturePage(page, testInfo, "ai-market-reset-mobile");
  expectNoBrowserIssues(issues);
});

test("Research hub features the published AI market-reset note with its cover", async ({
  page
}, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  const issues = watchBrowserIssues(page);

  await openPage(page, "/research");

  const feature = page.locator(".research-feature");
  await expect(feature).toHaveAttribute("href", articlePath);
  await expect(feature.locator(".ai-market-cover")).toBeVisible();
  await expect(feature.locator(".ai-market-cover img")).toHaveAttribute(
    "alt",
    /data-centre aisle/
  );
  await expectNoHorizontalOverflow(page);
  await capturePage(page, testInfo, "ai-market-reset-research-hub-mobile");
  expectNoBrowserIssues(issues);
});
