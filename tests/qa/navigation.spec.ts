import { expect, test } from "@playwright/test";
import {
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
  await openPage(page, "/");
  const headerNavigation = page.locator(".site-header .site-nav");

  await headerNavigation.getByRole("link", { name: "Research", exact: true }).click();
  await expect(page).toHaveURL(/\/research$/);

  await page.getByRole("link", { name: "Aeora Research home" }).click();
  await expect(page).toHaveURL(/\/#top$/);

  await page
    .getByRole("link", { name: "Go to Aeora Research contact section" })
    .click();
  await expect(page).toHaveURL(/\/#connect$/);

  expectNoBrowserIssues(issues);
});

test("mobile primary navigation remains visible and usable", async ({ page }) => {
  const issues = watchBrowserIssues(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await openPage(page, "/");
  const headerNavigation = page.locator(".site-header .site-nav");

  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await expect(headerNavigation.getByRole("link", { name: "Research", exact: true })).toBeVisible();
  await expect(
    headerNavigation.getByRole("link", {
      name: "Go to Aeora Research contact section"
    })
  ).toBeVisible();

  await headerNavigation.getByRole("link", { name: "Research", exact: true }).click();
  await expect(page).toHaveURL(/\/research$/);

  expectNoBrowserIssues(issues);
});
