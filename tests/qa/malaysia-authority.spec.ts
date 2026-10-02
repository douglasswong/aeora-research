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
    metaTitle: "Prop Desk Development in Malaysia"
  },
  {
    path: "/institutional-trading-malaysia",
    title: "Institutional Trading in Malaysia: Market Structure, Access and Risk",
    metaTitle: "Institutional Trading in Malaysia"
  },
  {
    path: "/professional-trader-career-malaysia",
    title: "How to Become a Professional Trader in Malaysia",
    metaTitle: "Professional Trader Career in Malaysia"
  }
] as const;

const fieldGuides = [
  {
    path: "/research/prop-firm-vs-prop-desk-malaysia",
    title: "Prop Firm vs Prop Desk in Malaysia: What Is the Difference?"
  },
  {
    path: "/research/professional-trader-roadmap-malaysia",
    title: "A Professional Trader Roadmap for Malaysia: Skills Before Scale"
  },
  {
    path: "/research/trading-career-malaysia",
    title: "Trading Careers in Malaysia: Roles, Skills and Questions to Ask"
  },
  {
    path: "/research/market-making-explained",
    title: "Market Making Explained: Quotes, Liquidity and Inventory Risk"
  },
  {
    path: "/research/direct-market-access-explained",
    title: "Direct Market Access Explained: Routing, Controls and Execution"
  },
  {
    path: "/research/retail-vs-institutional-trading",
    title: "Retail vs Institutional Trading: Different Constraints, Not Different Physics"
  },
  {
    path: "/research/trading-desk-risk-management",
    title: "Trading Desk Risk Management: Limits, Review and Decision Quality"
  },
  {
    path: "/research/order-flow-and-volume-profile",
    title: "Order Flow and Volume Profile: Context, Not a Trading Signal"
  }
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
}, testInfo) => {
  testInfo.setTimeout(60_000);
  const issues = watchBrowserIssues(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });

  await openPage(page, "/research");
  const guideLinks = page.locator(".research-authority__grid > a");
  await expect(guideLinks).toHaveCount(fieldGuides.length);
  await expectNoHorizontalOverflow(page);

  for (const guide of fieldGuides) {
    const response = await request.get(guide.path);
    expect(response.ok(), `${guide.path} should return successfully`).toBeTruthy();

    await openPage(page, guide.path);
    await expect(page).toHaveTitle(`${guide.title} | Aeora Research`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://aeora-research.com${guide.path}`
    );
    await expect(page.locator("h1")).toHaveText(guide.title);
    await expect(page.getByText("Aeora Research Team", { exact: true })).toBeVisible();
    await expect(page.locator(".authority-article__related a")).toHaveCount(3);
    await expect(page.locator(".research-article__sources a").first()).toBeVisible();
    await expectNoHorizontalOverflow(page);

    const robots = await page.locator('meta[name="robots"]').evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("content") ?? "").join(" ")
    );
    expect(robots.toLowerCase()).not.toContain("noindex");

    const schemaTypes = await getSchemaTypes(page);
    expect(schemaTypes).toContain("Article");
    expect(schemaTypes).toContain("BreadcrumbList");
  }

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const sitemapXml = await sitemap.text();
  for (const guide of fieldGuides) {
    expect(sitemapXml).toContain(`https://aeora-research.com${guide.path}`);
  }

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain("Sitemap: https://aeora-research.com/sitemap.xml");

  expectNoBrowserIssues(issues);
});
