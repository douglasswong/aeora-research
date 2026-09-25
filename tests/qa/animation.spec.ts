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
    ".connect__pathways span",
    ".connect__cta"
  ]) {
    await expectFullyRevealed(page.locator(selector).first());
  }
});

test("mobile homepage uses observer-driven reveals and a touch-friendly ticker", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await openPage(page, "/");

  const home = page.locator(".home-page");
  await expect(home).toHaveAttribute("data-home-motion", "observer");

  const firstPillar = page.locator(".pillar-card").first();
  await firstPillar.scrollIntoViewIfNeeded();
  await expect(firstPillar).toHaveAttribute("data-home-reveal", "revealed");
  await expect
    .poll(() => firstPillar.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBeGreaterThan(0.98);

  const ticker = page.locator(".market-ticker");
  await expect(ticker).toHaveCSS("position", "fixed");
  await expect(ticker).toHaveCSS("touch-action", "pan-y");
  await expect
    .poll(() => ticker.evaluate((element) => element.getBoundingClientRect().height))
    .toBeLessThanOrEqual(64);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await expect
    .poll(() =>
      page.locator(".site-header").evaluate((element) =>
        Number.parseFloat(element.style.getPropertyValue("--site-reading-progress"))
      )
    )
    .toBeGreaterThan(0);
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
