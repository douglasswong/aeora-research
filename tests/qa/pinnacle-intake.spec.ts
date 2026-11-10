import { expect, test } from "@playwright/test";
import {
  expectNoHorizontalOverflow,
  openPage
} from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.route("https://widgets.tradingview-widget.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: ""
    })
  );
});

test("Pinnacle distinguishes a TBC intake from the completed November batch", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/pinnacle");

  const upcoming = page.locator(".pinnacle-intake--upcoming");
  const history = page.locator(".pinnacle-intake--history");
  const registerInterest = page.locator(".pinnacle-programme__interest-button");

  await expect(upcoming).toContainText("Upcoming intake");
  await expect(upcoming).toContainText("TBC");
  await expect(upcoming).not.toContainText("Limited Slots Left");
  await expect(upcoming).toContainText("2027 Onwards");
  await expect(upcoming).not.toContainText("Saturday & Sunday");
  await expect(upcoming).toContainText("Kuala Lumpur, Malaysia");
  await expect(upcoming).toContainText("Small Class, Training Room");
  await expect(upcoming.locator(".pinnacle-intake__availability")).toHaveCount(0);
  await expect(history).toContainText("Latest intake");
  await expect(history).toContainText("Ended");
  await expect(history).toContainText("7-8 November 2026");
  await expect(history).toContainText("Saturday & Sunday");
  await expect(history.locator("dt")).toHaveText([
    "Previous dates",
    "Onboarding rate"
  ]);
  await expect(history).toContainText("100%");
  await expect(history.getByText("Location", { exact: true })).toHaveCount(0);
  await expect(history.getByText("Format", { exact: true })).toHaveCount(0);
  await expect(registerInterest).toHaveText("Register interest");

  const panelHeights = await page.locator(".pinnacle-why__item").evaluateAll((items) =>
    items.map((item) => item.getBoundingClientRect().height)
  );

  expect(panelHeights).toHaveLength(5);
  expect(Math.max(...panelHeights)).toBeLessThanOrEqual(220);
  await expectNoHorizontalOverflow(page);
});

test("FAQ reflects the TBC 2027 intake schedule", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/faq");

  const nextIntake = page
    .locator("details")
    .filter({ hasText: "When and where is the next Aeora Trader Development intake?" });

  await expect(nextIntake).toHaveCount(1);
  await nextIntake.locator("summary").click();
  await expect(nextIntake).toContainText("currently to be confirmed");
  await expect(nextIntake).toContainText("2027 Onwards");
  await expect(nextIntake).not.toContainText("Saturday & Sunday");
  await expectNoHorizontalOverflow(page);
});
