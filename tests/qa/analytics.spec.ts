import { expect, test } from "@playwright/test";
import {
  expectNoBrowserIssues,
  openPage,
  watchBrowserIssues
} from "./helpers";

test("analytics stays inactive without explicit production configuration", async ({ page }) => {
  const issues = watchBrowserIssues(page);

  await openPage(page, "/");

  await expect(
    page.locator('script[src*="googletagmanager.com/gtag/js"]')
  ).toHaveCount(0);

  expectNoBrowserIssues(issues);
});
