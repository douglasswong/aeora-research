import { mkdir } from "node:fs/promises";
import path from "node:path";
import { expect, type Page, type TestInfo } from "@playwright/test";

export const responsivePages = [
  { label: "home", path: "/" },
  { label: "trader-development", path: "/pinnacle" },
  { label: "event", path: "/atfx-wtc" },
  { label: "research", path: "/research" },
  { label: "trader-readiness", path: "/trader-readiness" }
] as const;

export const viewports = [
  { label: "mobile-small", width: 375, height: 812 },
  { label: "mobile-standard", width: 390, height: 844 },
  { label: "tablet", width: 768, height: 1024 },
  { label: "laptop", width: 1280, height: 800 },
  { label: "desktop", width: 1440, height: 1000 },
  { label: "large-desktop", width: 1920, height: 1080 }
] as const;

type BrowserIssues = {
  consoleErrors: string[];
  pageErrors: string[];
  failedRequests: string[];
};

export function watchBrowserIssues(page: Page): BrowserIssues {
  const issues: BrowserIssues = {
    consoleErrors: [],
    pageErrors: [],
    failedRequests: []
  };

  page.on("console", (message) => {
    if (message.type() === "error") {
      issues.consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    issues.pageErrors.push(error.message);
  });

  page.on("requestfailed", (request) => {
    const url = new URL(request.url());
    const failure = request.failure();

    if (
      url.origin === new URL(page.url()).origin &&
      failure?.errorText !== "net::ERR_ABORTED"
    ) {
      issues.failedRequests.push(`${request.method()} ${url.pathname}`);
    }
  });

  return issues;
}

export async function openPage(page: Page, path: string) {
  const response = await page.goto(path, { waitUntil: "domcontentloaded" });

  expect(response, `${path} returned a response`).not.toBeNull();
  expect(response?.ok(), `${path} should return a successful response`).toBeTruthy();
  await expect(page.locator("main")).toBeVisible();
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });
  });
}

export async function expectNoHorizontalOverflow(page: Page) {
  const measurements = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));

  expect(
    measurements.scrollWidth,
    `page width ${measurements.scrollWidth}px exceeds viewport ${measurements.clientWidth}px`
  ).toBeLessThanOrEqual(measurements.clientWidth + 1);
}

export function expectNoBrowserIssues(issues: BrowserIssues) {
  expect(issues.consoleErrors, "browser console errors").toEqual([]);
  expect(issues.pageErrors, "uncaught page errors").toEqual([]);
  expect(issues.failedRequests, "failed same-origin browser requests").toEqual([]);
}

export async function capturePage(
  page: Page,
  testInfo: TestInfo,
  label: string
) {
  const screenshotDirectory = path.join(
    process.cwd(),
    process.env.QA_SCREENSHOT_DIR ?? "qa-screenshots"
  );
  const screenshotPath = path.join(screenshotDirectory, `${label}.png`);

  await page.locator("img").evaluateAll(async (images) => {
    const imageElements = images as HTMLImageElement[];

    for (const image of imageElements) {
      image.loading = "eager";
      image.scrollIntoView({ block: "center" });
      await new Promise<void>((resolve) => window.setTimeout(resolve, 50));
    }
  });

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);

  const unloadedImages = await page.locator("img").evaluateAll((images) =>
    (images as HTMLImageElement[])
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src)
  );
  expect(unloadedImages, "all rendered images should load before screenshot review").toEqual([]);

  await mkdir(screenshotDirectory, { recursive: true });
  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });
  await testInfo.attach(label, { path: screenshotPath, contentType: "image/png" });
}
