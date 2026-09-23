import { expect, test } from "@playwright/test";
import {
  expectNoBrowserIssues,
  openPage,
  watchBrowserIssues
} from "./helpers";

test("every sitemap route returns successfully", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();

  const locations = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(
    ([, location]) => location
  );
  expect(locations.length).toBeGreaterThan(8);

  for (const location of locations) {
    const response = await request.get(location);
    expect(response.ok(), `${location} should return successfully`).toBeTruthy();
  }
});

test("homepage loads without browser errors", async ({ page }) => {
  const issues = watchBrowserIssues(page);

  await openPage(page, "/");

  const marketTicker = page.locator("tv-ticker-tape");
  await expect(marketTicker).toHaveCount(1);
  await expect(marketTicker).toHaveAttribute("symbols", /FX_IDC:USDMYR/);
  await expect(marketTicker).toHaveAttribute("item-size", "compact");
  const marketTickerContainer = page.locator(".market-ticker");
  await expect(marketTickerContainer).toHaveCSS("position", "fixed");
  await expect(marketTickerContainer).toHaveCSS("bottom", "0px");

  expectNoBrowserIssues(issues);
});
