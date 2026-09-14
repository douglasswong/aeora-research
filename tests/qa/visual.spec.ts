import { expect, test } from "@playwright/test";
import {
  capturePage,
  expectNoBrowserIssues,
  expectNoHorizontalOverflow,
  openPage,
  responsivePages,
  viewports,
  watchBrowserIssues
} from "./helpers";

for (const viewport of viewports) {
  test(`${viewport.label} pages are aligned without horizontal overflow`, async ({ page }, testInfo) => {
    test.setTimeout(90_000);
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });

    for (const route of responsivePages) {
      const issues = watchBrowserIssues(page);
      await openPage(page, route.path);
      await expectNoHorizontalOverflow(page);
      await capturePage(page, testInfo, `${route.label}-${viewport.label}`);
      expectNoBrowserIssues(issues);
    }
  });
}

test("homepage remains complete with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/");

  await expect(page.locator("h1")).toBeVisible();
  await expectNoHorizontalOverflow(page);
});
