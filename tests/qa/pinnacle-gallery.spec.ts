import { expect, test } from "@playwright/test";
import { expectNoHorizontalOverflow, openPage } from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.route("https://widgets.tradingview-widget.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: ""
    })
  );
});

test("Pinnacle includes the AT Global Wine and Cheese Session archive", async ({
  page
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/pinnacle");

  const event = page.locator(".pinnacle-gallery__event--at-global-wine-cheese");

  await expect(event).toContainText("AT Global 2024");
  await expect(event).toContainText("Wine and Cheese Session");
  await expect(event).toContainText("Petaling Jaya, Malaysia");
  await expect(event).toContainText("July 2024");
  await expect(event).toContainText("Weems Chan");
  await expect(event).toContainText("Martin Lam");
  await expect(event.locator(".pinnacle-gallery__tile")).toHaveCount(10);
  await expect(event.locator("img")).toHaveCount(10);
  await expectNoHorizontalOverflow(page);
});

test("Pinnacle includes the Malaysia 50+ Expo archive", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/pinnacle");

  const event = page.locator(".pinnacle-gallery__event--malaysia-50-plus-expo");

  await expect(event).toContainText("Malaysia 50+ Expo 2024");
  await expect(event).toContainText("Malaysia 50+ Expo");
  await expect(event).toContainText("Penang Island, Malaysia");
  await expect(event).toContainText("October 2024");
  await expect(event).toContainText(
    "Our very first expo participation and experience with the team."
  );
  await expect(event.locator(".pinnacle-gallery__tile")).toHaveCount(2);
  await expect(event.locator("img")).toHaveCount(2);
  await expectNoHorizontalOverflow(page);
});

test("Pinnacle archive is ordered from latest event to oldest", async ({
  page
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/pinnacle");

  const events = page.locator(".pinnacle-gallery__event");

  await expect(events.locator("h3")).toHaveText([
    "Aeora Trader Development Batch-4",
    "PhilipCapital 16th Investment Conference",
    "Futures Industry Association Forum",
    "Malaysia 50+ Expo",
    "Wine and Cheese Session"
  ]);
  await expect(events.nth(3)).toContainText("October 2024");
  await expect(events.nth(4)).toContainText("July 2024");
});
