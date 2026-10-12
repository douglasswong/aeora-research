import { expect, test } from "@playwright/test";
import { expectNoBrowserIssues, openPage, watchBrowserIssues } from "./helpers";

const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/aeora-research/";
const pillarDiscoveryLinks = [
  "/prop-desk-malaysia",
  "/institutional-trading-malaysia",
  "/professional-trader-career-malaysia"
] as const;

test("Organization structured data includes the verified LinkedIn company page", async ({ page }) => {
  const issues = watchBrowserIssues(page);
  await openPage(page, "/");

  const organizations = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.flatMap((node) => {
        try {
          const parsed = JSON.parse(node.textContent ?? "");
          return parsed?.["@type"] === "Organization" ? [parsed] : [];
        } catch {
          return [];
        }
      })
    );

  expect(organizations.length).toBeGreaterThan(0);
  for (const organization of organizations) {
    expect(organization.sameAs).toContain(LINKEDIN_COMPANY_URL);
  }

  expectNoBrowserIssues(issues);
});

test("Research hub exposes contextual discovery links to the Malaysia pillars", async ({
  page
}) => {
  const issues = watchBrowserIssues(page);
  await openPage(page, "/research");

  const authorityHeading = page.locator(".research-authority__heading");
  for (const href of pillarDiscoveryLinks) {
    await expect(authorityHeading.locator(`a[href="${href}"]`)).toBeVisible();
  }

  expectNoBrowserIssues(issues);
});
