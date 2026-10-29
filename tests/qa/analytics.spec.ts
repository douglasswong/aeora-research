import { expect, test } from "@playwright/test";
import {
  expectNoBrowserIssues,
  openPage,
  watchBrowserIssues
} from "./helpers";

const analyticsEnabled = process.env.NEXT_PUBLIC_AEORA_ANALYTICS_ENABLED === "true";

test("analytics controls stay hidden without explicit production configuration", async ({ page }) => {
  test.skip(analyticsEnabled, "requires the default disabled analytics build");

  const issues = watchBrowserIssues(page);

  await openPage(page, "/");

  await expect(
    page.locator('script[src*="googletagmanager.com/gtag/js"]')
  ).toHaveCount(0);
  await expect(page.getByRole("dialog", { name: "Optional website analytics" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Cookie preferences" })).toHaveCount(0);

  expectNoBrowserIssues(issues);
});

test("analytics loads only after affirmative visitor consent", async ({ page }) => {
  test.skip(!analyticsEnabled, "requires an enabled analytics QA build");

  await page.route("https://www.googletagmanager.com/**", (route) =>
    route.fulfill({ status: 200, contentType: "application/javascript", body: "" })
  );

  await openPage(page, "/");

  const googleTag = page.locator('script[src*="googletagmanager.com/gtag/js"]');
  const consentDialog = page.getByRole("dialog", {
    name: "Optional website analytics"
  });

  await expect(consentDialog).toBeVisible();
  await expect(googleTag).toHaveCount(0);

  await page.getByRole("button", { name: "Use essential only" }).click();
  await expect(consentDialog).toHaveCount(0);
  await expect(googleTag).toHaveCount(0);

  await page.getByRole("button", { name: "Cookie preferences" }).click();
  await expect(consentDialog).toBeVisible();
  await page.getByRole("button", { name: "Allow analytics" }).click();

  await expect(googleTag).toHaveCount(1);
});
