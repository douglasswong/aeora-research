import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const lastUpdated = "20 July 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aeora Research",
  description:
    "Terms and conditions governing access to the Aeora Research website and its general informational, research and educational content.",
  alternates: {
    canonical: "/terms-conditions"
  },
  openGraph: {
    title: "Terms & Conditions | Aeora Research",
    description:
      "Terms governing access to the Aeora Research website and its informational content.",
    url: `${SITE_URL}/terms-conditions`
  }
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <p>
        By accessing or using this website, you agree to these Terms &amp;
        Conditions. If you do not agree, please do not use the website. These
        terms apply to all visitors, users and others who access the site.
      </p>
    )
  },
  {
    id: "information-only",
    title: "Information, research and education only",
    body: (
      <p>
        Content published by Aeora Research is provided for general
        informational, research and educational purposes. It does not
        constitute investment, financial, legal, tax or other professional
        advice, and should not be relied upon as the basis for any investment
        or trading decision.
      </p>
    )
  },
  {
    id: "risk",
    title: "Market risk and independent judgement",
    body: (
      <p>
        Financial markets involve risk and past performance is not a reliable
        indicator of future results. You are responsible for your own research,
        assessment and decisions, and should seek independent professional
        advice where appropriate to your circumstances.
      </p>
    )
  },
  {
    id: "availability",
    title: "Website content and availability",
    body: (
      <p>
        We aim to keep website information accurate and current, but do not
        warrant that it is complete, accurate or available at all times. Aeora
        Research may update, suspend or remove any part of the website without
        notice.
      </p>
    )
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        Unless otherwise stated, the website, its written content, visual
        identity, graphics and other materials are owned by or licensed to
        Aeora Research and are protected by applicable intellectual property
        laws. You may view and use the material for personal, non-commercial
        purposes only. Any other use requires our prior written consent.
      </p>
    )
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <p>
        You must not misuse the website, interfere with its security or
        operation, attempt unauthorised access, introduce harmful code, or use
        its content in a way that is unlawful, misleading or infringes the
        rights of others.
      </p>
    )
  },
  {
    id: "third-party",
    title: "Third-party links and services",
    body: (
      <p>
        The website may include links to third-party websites or services for
        convenience. Aeora Research does not control, endorse or accept
        responsibility for their content, availability or practices. Use of
        third-party websites is subject to their own terms and policies.
      </p>
    )
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by applicable law, Aeora Research will
        not be liable for any loss or damage arising from access to, use of, or
        inability to use this website or its content. Nothing in these terms
        excludes liability that cannot be excluded under applicable law.
      </p>
    )
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may revise these Terms &amp; Conditions from time to time. The latest
        version will be published on this page and takes effect when posted.
        Your continued use of the website after changes are published confirms
        your acceptance of the revised terms.
      </p>
    )
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of Malaysia. Any dispute relating
        to these terms or the website will be subject to the jurisdiction of
        the courts of Malaysia, subject to any mandatory rights available to
        you under applicable law.
      </p>
    )
  }
] as const;

export default function TermsConditionsPage() {
  return (
    <EditorialPage
      kicker="Legal"
      title="Terms & Conditions"
      intro="The terms that govern access to the Aeora Research website and its general informational, research and educational content."
      compactHero
    >
      <section className="terms section" aria-labelledby="terms-content-title">
        <div className="section__inner terms__inner">
          <aside className="terms__aside" aria-label="Terms information">
            <p className="section-kicker">Website terms</p>
            <p>
              Last updated: <time dateTime="2026-07-20">{lastUpdated}</time>
            </p>
            <Link href="/#connect">Contact Aeora Research</Link>
          </aside>

          <article className="terms__content">
            <h2 id="terms-content-title">Using this website</h2>
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
              <p className="terms__index">11</p>
              <div>
                <h3>Contact</h3>
                <p>
                  For questions about these Terms &amp; Conditions, contact us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </EditorialPage>
  );
}
