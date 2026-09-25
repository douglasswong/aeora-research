import { expect, test } from "@playwright/test";
import {
  capturePage,
  expectNoBrowserIssues,
  openPage,
  watchBrowserIssues
} from "./helpers";

test("homepage internal navigation targets remain healthy", async ({ page, request }) => {
  const issues = watchBrowserIssues(page);
  await openPage(page, "/");

  const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) =>
    [...new Set(links.map((link) => link.getAttribute("href")))]
  );

  for (const href of hrefs) {
    if (!href) continue;

    const response = await request.get(href.split("#")[0] || "/");
    expect(response.ok(), `${href} should be a healthy internal target`).toBeTruthy();
  }

  expectNoBrowserIssues(issues);
});

test("desktop navigation and core CTAs reach their destinations", async ({ page }) => {
  const issues = watchBrowserIssues(page);
  await page.setViewportSize({ width: 1280, height: 800 });
  const headerNavigation = page.locator(".site-header .site-nav");

  const destinations = [
    { href: "/", url: /\/$/ },
    { href: "/team", url: /\/team$/ },
    { href: "/research", url: /\/research$/ },
    { href: "/pinnacle", url: /\/pinnacle$/ },
    { href: "/dngconsultation", url: /\/dngconsultation$/ }
  ] as const;

  for (const destination of destinations) {
    await openPage(page, "/");
    await headerNavigation.locator(`a[href="${destination.href}"]`).click();
    await expect(page).toHaveURL(destination.url);
  }

  await openPage(page, "/");
  await expect(
    headerNavigation.getByRole("link", { name: "About", exact: true })
  ).toHaveCount(0);
  await expect(
    headerNavigation.getByRole("link", { name: "Event", exact: true })
  ).toHaveCount(0);
  await page
    .getByRole("link", { name: "Go to Aeora Research contact section" })
    .click();
  await expect(page).toHaveURL(/\/#connect$/);

  expectNoBrowserIssues(issues);
});

test("mobile primary navigation remains visible and usable", async ({ page }, testInfo) => {
  const issues = watchBrowserIssues(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await openPage(page, "/");
  const headerNavigation = page.locator(".site-header .site-nav");

  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  const menuToggle = headerNavigation.locator(".site-nav__toggle");
  await expect(menuToggle).toHaveAccessibleName("Open navigation menu");
  await menuToggle.click();
  await expect(menuToggle).toHaveAttribute("aria-expanded", "true");
  await expect(menuToggle).toHaveAccessibleName("Close navigation menu");
  await expect(headerNavigation.locator("#primary-navigation-links")).toHaveClass(
    /site-nav__groups--open/
  );
  await menuToggle.click();
  await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
  await expect(headerNavigation.locator("#primary-navigation-links")).not.toHaveClass(
    /site-nav__groups--open/
  );
  await menuToggle.click();
  await expect(
    headerNavigation.getByRole("link", { name: "Other Services", exact: true })
  ).toBeVisible();
  await expect(
    headerNavigation.getByRole("link", {
      name: "Go to Aeora Research contact section"
    })
  ).toBeVisible();
  await capturePage(page, testInfo, "mobile-navigation-expanded");

  await headerNavigation
    .getByRole("link", { name: "Other Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/dngconsultation$/);

  expectNoBrowserIssues(issues);
});
