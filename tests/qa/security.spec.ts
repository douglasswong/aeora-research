import { expect, test } from "@playwright/test";
import { LINKEDIN_COMPANY_URL } from "../../src/lib/site";
import {
  expectNoBrowserIssues,
  expectNoHorizontalOverflow,
  openPage,
  watchBrowserIssues
} from "./helpers";

test("security page exposes only confirmed Aeora verification channels", async ({
  page,
  request
}) => {
  const issues = watchBrowserIssues(page);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openPage(page, "/security");

  await expect(page).toHaveTitle("Security & Verification | Aeora Research");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://aeora-research.com/security"
  );
  await expect(page.locator("h1")).toHaveText("Verify Aeora Research");

  const channels = page.locator("#official-channels");
  await expect(channels).toContainText("https://aeora-research.com");
  await expect(channels).toContainText("support@aeora-research.com");
  await expect(channels).toContainText(
    "Our confirmed public support and security-reporting address."
  );
  await expect(channels).not.toContainText("LinkedIn: To be set up soon.");
  await expect(channels).toContainText("+603 5626 5777");
  await expect(channels).toContainText("+6019 8899 296");
  await expect(channels).toContainText("+6016 414 5996");
  await expect(channels).toContainText("+6012 211 7180");
  await expect(
    channels.getByRole("link", { name: "https://aeora-research.com" })
  ).toHaveAttribute("href", "https://aeora-research.com");
  await expect(
    channels.getByRole("link", { name: "support@aeora-research.com" })
  ).toHaveAttribute("href", "mailto:support@aeora-research.com");
  await expect(
    channels.getByRole("link", { name: "Our only Instagram" })
  ).toHaveAttribute("href", "https://www.instagram.com/aeoraresearch/");
  await expect(
    channels.getByRole("link", { name: "Facebook: Aeora Research" })
  ).toHaveAttribute(
    "href",
    "https://www.facebook.com/share/1SG2VkQo3J/?mibextid=wwXIfr"
  );
  await expect(channels.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
    "href",
    LINKEDIN_COMPANY_URL
  );
  await expect(
    channels.getByRole("link", { name: "+603 5626 5777" })
  ).toHaveAttribute("href", "tel:+60356265777");
  await expect(
    channels.getByRole("link", { name: "+6019 8899 296" })
  ).toHaveAttribute("href", "tel:+60198899296");

  await page.getByRole("link", { name: "Verify official channels" }).click();
  await expect(page).toHaveURL(/#official-channels$/);
  await expect(
    page.locator("footer").getByRole("link", { name: "Security & Verification" })
  ).toHaveAttribute("href", "/security");

  const securityText = await request.get("/.well-known/security.txt");
  expect(securityText.ok()).toBeTruthy();
  expect(await securityText.text()).toContain(
    "Canonical: https://aeora-research.com/.well-known/security.txt"
  );
  expect(await securityText.text()).toContain(
    "Contact: mailto:support@aeora-research.com"
  );
  expect(await securityText.text()).toContain("Preferred-Languages: en");
  expect(await securityText.text()).not.toContain("security@aeora-research.com");

  await expectNoHorizontalOverflow(page);
  expectNoBrowserIssues(issues);
});
