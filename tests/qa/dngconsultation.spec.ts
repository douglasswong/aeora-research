import { expect, test } from "@playwright/test";
import { openPage } from "./helpers";

test("D&G consultation keeps its compact desktop opening in view", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.route("https://widgets.tradingview-widget.com/**", (route) =>
    route.fulfill({ status: 200, contentType: "application/javascript", body: "" })
  );
  await page.route(/https:\/\/www\.google\.com\/maps\/embed.*/, (route) =>
    route.fulfill({ status: 200, contentType: "text/html", body: "<!doctype html>" })
  );

  await openPage(page, "/dngconsultation");

  const heroTitle = page.getByRole("heading", {
    level: 1,
    name: "From Market Experience to Structured Wealth"
  });
  const serviceTitle = page.getByRole("heading", {
    level: 2,
    name: "A more structured financial journey."
  });

  await expect(heroTitle.locator("span")).toHaveCount(3);
  await expect(serviceTitle.locator("span")).toHaveCount(2);

  const layout = await page.evaluate(() => {
    const hero = document.querySelector<HTMLElement>(".dng-hero");
    const path = document.querySelector<HTMLElement>(".dng-hero__path");
    const services = document.querySelector<HTMLElement>(".dng-services");
    const servicesKicker = document.querySelector<HTMLElement>(
      ".dng-services__heading .section-kicker"
    );
    const ticker = document.querySelector<HTMLElement>(".market-ticker");

    if (!hero || !path || !services || !servicesKicker || !ticker) {
      throw new Error("D&G consultation layout elements are missing");
    }

    return {
      pathBottom: path.getBoundingClientRect().bottom,
      tickerTop: ticker.getBoundingClientRect().top,
      servicesKickerOffset: servicesKicker.getBoundingClientRect().top - services.getBoundingClientRect().top
    };
  });

  expect(layout.pathBottom).toBeLessThanOrEqual(layout.tickerTop - 16);
  expect(layout.servicesKickerOffset).toBeLessThanOrEqual(120);
});
