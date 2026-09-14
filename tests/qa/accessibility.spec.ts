import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { openPage, responsivePages } from "./helpers";

test("primary journeys have no serious or critical WCAG 2 A/AA issues", async ({ page }, testInfo) => {
  for (const route of responsivePages) {
    await openPage(page, route.path);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const blockingViolations = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious"
    );

    await testInfo.attach(`${route.label}-axe.json`, {
      body: JSON.stringify(results, null, 2),
      contentType: "application/json"
    });
    expect(blockingViolations, `${route.label} serious accessibility issues`).toEqual([]);
  }
});
