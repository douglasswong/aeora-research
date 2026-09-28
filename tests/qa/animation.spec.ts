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

test("mobile homepage uses observer-driven reveals without the desktop ticker", async ({ page }) => {
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
  await expect(firstPillar).toHaveCSS("animation-name", "home-pillar-block-enter");

  await expect(page.locator(".market-field__candle").first()).toHaveCSS(
    "animation-name",
    "field-candle-pulse"
  );
  await expect(page.locator(".market-context-field__trace")).toHaveCSS(
    "animation-name",
    "context-field-trace"
  );

  const numbers = page.locator(".numbers");
  await numbers.scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      page.locator(".numbers__value-main").first().textContent()
    )
    .not.toBe("0-0");

  await expect(page.locator(".market-ticker")).toHaveCount(0);
  await expect(page.locator(".site-footer")).toHaveCSS("padding-bottom", "0px");

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await expect
    .poll(() =>
      page.locator(".site-header").evaluate((element) =>
        Number.parseFloat(element.style.getPropertyValue("--site-reading-progress"))
      )
    )
    .toBeGreaterThan(0);
});

test("trader development cards use observer-backed entrances", async ({ page }) => {
  await openPage(page, "/pinnacle");

  const pinnacle = page.locator(".pinnacle-page");
  await expect(pinnacle).toHaveAttribute("data-page-motion", "observer");

  const firstCard = page.locator(".pinnacle-why__item").first();
  await firstCard.scrollIntoViewIfNeeded();
  await expect(firstCard).toHaveAttribute("data-page-reveal", "revealed");
  await expectFullyRevealed(firstCard);
  await expect(firstCard).toHaveCSS("animation-name", "why-item-enter");
});

test("event campaign sections use observer-backed entrances", async ({ page }) => {
  await openPage(page, "/atfx-wtc");

  const campaign = page.locator(".wtc-page");
  await expect(campaign).toHaveAttribute("data-page-motion", "observer");

  for (const { selector, animationName } of [
    { selector: ".wtc-region__heading", animationName: "wtc-scroll-reveal" },
    { selector: ".wtc-region__banner", animationName: "wtc-scroll-reveal" },
    { selector: ".wtc-route__stage", animationName: "wtc-stage-enter" },
    { selector: ".wtc-prizes__summary > div", animationName: "wtc-prize-row-enter" }
  ]) {
    const element = page.locator(selector).first();
    await element.scrollIntoViewIfNeeded();
    await expect(element).toHaveAttribute("data-page-reveal", "revealed");
    await expectFullyRevealed(element);
    await expect(element).toHaveCSS("animation-name", animationName);
  }
});

test("motion-reduced campaign content remains visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/atfx-wtc");

  await expect(page.locator(".wtc-page")).toHaveAttribute("data-page-motion", "reduced");
  await expect(page.locator(".wtc-region__heading").first()).toBeVisible();
  await expect(page.locator(".wtc-route__stage").first()).toBeVisible();
});
