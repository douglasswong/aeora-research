import { expect, test } from "@playwright/test";
import {
  expectNoBrowserIssues,
  expectNoHorizontalOverflow,
  openPage,
  watchBrowserIssues
} from "./helpers";

const pillars = [
  {
    path: "/prop-desk-malaysia",
    title: "Prop Desk & Professional Trader Development in Malaysia",
    metaTitle: "Prop Desk & Professional Trader Development in Malaysia"
  },
  {
    path: "/institutional-trading-malaysia",
    title: "Institutional Trading in Malaysia: Market Structure, Access and Risk",
    metaTitle: "Institutional Trading in Malaysia: Market Structure & Risk"
  },
  {
    path: "/professional-trader-career-malaysia",
    title: "How to Become a Professional Trader in Malaysia",
    metaTitle: "How to Become a Professional Trader in Malaysia"
  }
] as const;

const fieldGuides = [
  "/research/prop-firm-vs-prop-desk-malaysia",
  "/research/professional-trader-roadmap-malaysia",
  "/research/trading-career-malaysia",
  "/research/market-making-explained",
  "/research/direct-market-access-explained",
  "/research/retail-vs-institutional-trading",
  "/research/trading-desk-risk-management",
  "/research/order-flow-and-volume-profile"
] as const;

async function getSchemaTypes(page: Parameters<typeof openPage>[0]) {
  return page.locator('script[type="application/ld+json"]').evaluateAll((nodes) =>
    nodes.flatMap((node) => {
      try {
        const parsed = JSON.parse(node.textContent ?? "");
        const entries = Array.isArray(parsed) ? parsed : [parsed];
        return entries.map((entry) => entry["@type"]);
      } catch {
        return [];
      }
    })
  );
}

test("Malaysia authority pillars publish accurate metadata and structured data", async ({
  page
}) => {
  const issues = watchBrowserIssues(page);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const pillar of pillars) {
    await openPage(page, pillar.path);

    await expect(page).toHaveTitle(`${pillar.metaTitle} | Aeora Research`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://aeora-research.com${pillar.path}`
    );
    await expect(page.locator("h1")).toHaveText(pillar.title);
    await expect(page.locator(".authority-field")).toBeVisible();
    await expectNoHorizontalOverflow(page);

    const schemaTypes = await getSchemaTypes(page);
    expect(schemaTypes).toContain("BreadcrumbList");
    expect(schemaTypes).toContain("FAQPage");
  }

  expectNoBrowserIssues(issues);
});

test("Malaysia field guides are indexed through research with article metadata", async ({
  page,
  request
}) => {
  const issues = watchBrowserIssues(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });

  await openPage(page, "/research");
  const guideLinks = page.locator(".research-authority__grid > a");
  await expect(guideLinks).toHaveCount(fieldGuides.length);
  await expectNoHorizontalOverflow(page);

  for (const path of fieldGuides) {
    const response = await request.get(path);
    expect(response.ok(), `${path} should return successfully`).toBeTruthy();
  }

  await openPage(page, fieldGuides[0]);
  await expect(page.locator("h1")).toContainText("Prop Firm vs Prop Desk");
  await expect(page.getByText("Field guide G01", { exact: true })).toBeVisible();
  await expect(page.locator(".authority-research-cover")).toBeVisible();
  await expectNoHorizontalOverflow(page);

  const schemaTypes = await getSchemaTypes(page);
  expect(schemaTypes).toContain("Article");
  expect(schemaTypes).toContain("BreadcrumbList");
  expectNoBrowserIssues(issues);
});
