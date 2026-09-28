import { expect, test } from "@playwright/test";
import {
  expectNoHorizontalOverflow,
  openPage
} from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.route("https://widgets.tradingview-widget.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: ""
    })
  );
});

test("research archive keeps dates prominent and titles on one line at laptop width", async ({
  page
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/research");

  const dateStyles = await page.locator(".research-archive__meta time").evaluateAll((dates) =>
    dates.map((date) => Number.parseInt(getComputedStyle(date).fontWeight, 10))
  );
  const titleWidths = await page.locator(".research-archive__detail strong").evaluateAll((titles) =>
    titles.map((title) => ({
      clientWidth: title.clientWidth,
      scrollWidth: title.scrollWidth
    }))
  );

  expect(dateStyles.length).toBeGreaterThan(0);
  expect(dateStyles.every((weight) => weight >= 700)).toBeTruthy();
  expect(titleWidths.every((title) => title.scrollWidth <= title.clientWidth + 1)).toBeTruthy();
  await expectNoHorizontalOverflow(page);
});
