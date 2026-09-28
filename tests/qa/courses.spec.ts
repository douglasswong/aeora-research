import { expect, test } from "@playwright/test";
import {
  expectNoBrowserIssues,
  openPage,
  watchBrowserIssues
} from "./helpers";

const PURCHASE_LINKS = [
  "https://app.doku.com/retail-api/v1/snp/177582384680",
  "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177582351599",
  "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177582359238",
  "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177582368453",
  "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177625723123",
  "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177625730232"
] as const;

test("courses catalogue and enrolment destinations remain complete", async ({ page }) => {
  const issues = watchBrowserIssues(page);

  await openPage(page, "/courses");

  await expect(page).toHaveTitle("Trading & Investing Courses | Aeora Research");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Master Investing and Trading from Anywhere, Anytime."
  );
  await expect(page.locator(".courses-card")).toHaveCount(6);
  await expect(page.locator(".courses-card__signal")).toHaveCount(6);
  await expect(page.locator(".courses-pricing__card")).toHaveCount(6);
  await expect(page.locator(".courses-process__step")).toHaveCount(4);

  const catalogue = page.getByRole("link", { name: "Full catalogue", exact: true });
  await expect(catalogue).toHaveAttribute(
    "href",
    "https://drive.google.com/file/d/1yAIRDcNIlw7Mp0P8Yo1NmlzNGkonSNMb/view"
  );
  await expect(catalogue).toHaveAttribute("target", "_blank");
  await expect(catalogue).toHaveAttribute("rel", /noopener/);

  const enrol = page.getByRole("link", { name: "Enrol now", exact: true });
  await expect(enrol).toHaveAttribute("href", "#pricing");

  const subscription = page.getByRole("link", { name: "Subscription", exact: true });
  await expect(subscription).toHaveAttribute(
    "href",
    "https://app.doku.com/bill-collection-web/subscriptions/pricing/177625987965"
  );
  await expect(subscription).toHaveAttribute("target", "_blank");
  await expect(subscription).toHaveAttribute("rel", /noopener/);

  const purchaseLinks = page.getByRole("link", { name: "Purchase", exact: true });
  await expect(purchaseLinks).toHaveCount(PURCHASE_LINKS.length);

  for (const [index, href] of PURCHASE_LINKS.entries()) {
    const purchase = purchaseLinks.nth(index);
    await expect(purchase).toHaveAttribute("href", href);
    await expect(purchase).toHaveAttribute("target", "_blank");
    await expect(purchase).toHaveAttribute("rel", /noopener/);
  }

  const registerInterest = page.getByRole("link", {
    name: "Register interest",
    exact: true
  });
  await expect(registerInterest).toHaveAttribute(
    "href",
    "https://forms.gle/5JtxMrrjjSH7bHj18"
  );
  await expect(registerInterest).toHaveAttribute("target", "_blank");
  await expect(registerInterest).toHaveAttribute("rel", /noopener/);

  const previewBooking = page.getByRole("link", {
    name: "Book 30-min preview",
    exact: true
  });
  await expect(previewBooking).toHaveAttribute(
    "href",
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30hoptFH1Jzhk-ASb6rYvUbpNmWVLLdlZ__WDRRsC9nMCLgSBdNKqYtasXWzmQYWGz1RREssGD"
  );
  await expect(previewBooking).toHaveAttribute("target", "_blank");
  await expect(previewBooking).toHaveAttribute("rel", /noopener/);

  const footerNav = page.getByRole("navigation", { name: "Footer navigation" });
  const footerCourses = footerNav.getByRole("link", {
    name: "Courses",
    exact: true
  });
  await expect(footerCourses).toHaveAttribute("href", "/courses");
  await expect(
    footerNav.getByRole("link", { name: "KF Onboarding", exact: true })
  ).toHaveAttribute("href", "/guides/kenanga-futures-account-opening#before-you-begin");
  await expect(footerNav.getByRole("link", { name: "About", exact: true })).toHaveCount(0);
  await expect(footerNav.getByRole("link", { name: "Connect", exact: true })).toHaveCount(0);

  await expect(
    page.getByRole("heading", { name: "Programme and payment information" })
  ).toBeVisible();

  expectNoBrowserIssues(issues);
});
