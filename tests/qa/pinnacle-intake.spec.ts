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

test("Pinnacle separates proposed and completed intake details", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/pinnacle");

  const upcoming = page.locator(".pinnacle-intake--upcoming");
  const history = page.locator(".pinnacle-intake--history");
  const registerInterest = page.locator(".pinnacle-programme__interest-button");

  await expect(upcoming).toContainText("Upcoming intake");
  await expect(upcoming).toContainText("Q4 2026");
  await expect(upcoming).toContainText("Early November 2026");
  await expect(upcoming).toContainText("Kuala Lumpur, Malaysia");
  await expect(upcoming).toContainText("Small Class, Training Room");
  await expect(history).toContainText("Latest intake");
  await expect(history).toContainText("Ended");
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
