import { expect, test } from "@playwright/test";

const unpublishedComparisonPath =
  "/research/crude-oil-crossroads-visual-briefing-v2";

test("the temporary V2 comparison URL is not deployed as a second public article", async ({
  request
}) => {
  const articleResponse = await request.get(unpublishedComparisonPath);
  expect(articleResponse.status()).toBe(404);

  const hubResponse = await request.get("/research");
  expect(hubResponse.ok()).toBeTruthy();
  expect(await hubResponse.text()).not.toContain(unpublishedComparisonPath);

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();
  expect(await sitemapResponse.text()).not.toContain(unpublishedComparisonPath);
});
