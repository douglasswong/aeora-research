import type { Metadata } from "next";
import Link from "next/link";
import { AnalyticsConsentPreferencesButton } from "@/components/AnalyticsConsentPreferencesButton";
import { EditorialPage } from "@/components/EditorialPage";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const lastUpdated = "29 October 2026";

export const metadata: Metadata = {
  title: "Privacy & Cookies | Aeora Research",
  description:
    "How Aeora Research handles website inquiries, optional analytics and cookie preferences.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "Privacy & Cookies | Aeora Research",
    description:
      "How Aeora Research handles website inquiries, optional analytics and cookie preferences.",
    url: SITE_URL + "/privacy"
  }
};

const sections = [
  {
    id: "scope",
    title: "Scope",
    body: (
      <p>
        This notice explains how Aeora Research handles information connected
        with this website, including optional analytics and inquiries submitted
        through linked forms or contact channels.
      </p>
    )
  },
  {
    id: "inquiries",
    title: "Information you choose to provide",
    body: (
      <p>
        When you contact us or submit an interest form, we may use the details
        you provide to respond to your request and administer the relevant
        programme, event or collaboration. Please do not include sensitive
        financial, identity or account information in a general website inquiry.
      </p>
    )
  },
  {
    id: "analytics",
    title: "Optional analytics and cookies",
    body: (
      <>
        <p>
          We use Google Analytics only after you select &quot;Allow analytics&quot; in
          the website consent control. Before that choice, the Google Analytics
          script is not loaded. If enabled, analytics helps us understand page
          visits and a limited set of navigation-intent actions, such as
          selecting a programme, course, registration form or contact route.
        </p>
        <p>
          Our custom analytics events do not include form fields, names, email
          addresses, telephone numbers or full external destination URLs. Google
          processes analytics data under its own terms and privacy policies.
          You can read Google&apos;s{" "}
          <a
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>{" "}
          for more information.
        </p>
        <AnalyticsConsentPreferencesButton className="terms__preference-button" />
      </>
    )
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: (
      <p>
        The website may link to third-party services such as Google Forms,
        Google Calendar, social platforms, maps and partner websites. Those
        services have their own privacy practices, which apply when you leave
        the Aeora Research website or interact with their services.
      </p>
    )
  },
  {
    id: "changes",
    title: "Updates to this notice",
    body: (
      <p>
        We may update this notice when our website or data practices change.
        The latest version and date will be published on this page.
      </p>
    )
  }
] as const;

export default function PrivacyPage() {
  return (
    <EditorialPage
      compactHero
      kicker="Legal"
      title="Privacy & Cookies"
      intro="How Aeora Research handles website inquiries, optional analytics and your privacy choices."
    >
      <section className="terms section" aria-labelledby="privacy-content-title">
        <div className="section__inner terms__inner">
          <aside className="terms__aside" aria-label="Privacy information">
            <p className="section-kicker">Website privacy</p>
            <p>
              Last updated: <time dateTime="2026-10-29">{lastUpdated}</time>
            </p>
            <Link href="/#connect">Contact Aeora Research</Link>
          </aside>

          <article className="terms__content">
            <h2 id="privacy-content-title">Your information and choices</h2>
            {sections.map((section, index) => (
              <section className="terms__section" id={section.id} key={section.id}>
                <p className="terms__index">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3>{section.title}</h3>
                  {section.body}
                </div>
              </section>
            ))}
            <section className="terms__section terms__section--contact" id="contact">
              <p className="terms__index">06</p>
              <div>
                <h3>Contact</h3>
                <p>
                  For questions about this notice, contact us at{" "}
                  <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </EditorialPage>
  );
}
