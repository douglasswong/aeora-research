import { expect, test, type Locator } from "@playwright/test";
import { openPage } from "./helpers";

async function expectFullyRevealed(locator: Locator) {
  await locator.scrollIntoViewIfNeeded();
  await expect(locator).toBeVisible();
  await expect
    .poll(() => locator.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBeGreaterThan(0.98);
}

test("homepage scroll-triggered content becomes visible", async ({ page }) => {
  await openPage(page, "/");

  for (const selector of [
    ".pillars__grid .pillar-card",
    ".philosophy__terms span",
    ".connect__panel"
  ]) {
    await expectFullyRevealed(page.locator(selector).first());
  }
});

test("trader development cards become visible when read", async ({ page }) => {
  await openPage(page, "/pinnacle");

  await expectFullyRevealed(page.locator(".pinnacle-why__item").first());
});

test("event campaign sections become visible when read", async ({ page }) => {
  await openPage(page, "/atfx-wtc");

  for (const selector of [
    ".wtc-region__heading",
    ".wtc-region__banner",
    ".wtc-route__stage",
    ".wtc-prizes__summary > div"
  ]) {
    await expectFullyRevealed(page.locator(selector).first());
  }
});
