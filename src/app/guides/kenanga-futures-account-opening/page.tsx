import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import {
  CONTACT_EMAIL,
  HOTLINE_PHONE,
  KENANGA_FUTURES_APPLICATION_URL,
  SITE_URL
} from "@/lib/site";

const PREPARATION_ITEMS = [
  {
    title: "Identification",
    copy: "Keep a current government-issued identification document ready."
  },
  {
    title: "Contact details",
    copy: "Use the email address and mobile number you can access during verification."
  },
  {
    title: "Banking details",
    copy: "Have your personal bank-account information available if requested by Kenanga Futures."
  },
  {
    title: "Supporting documents",
    copy: "Prepare any proof of address, tax residency or other documents requested during the application."
  }
] as const;

const ACCOUNT_STEPS = [
  {
    title: "Open the official application",
    copy: "Start from the verified Kenanga Futures application link. You will complete the application directly with Kenanga Futures.",
    note: "Use a personal device and a secure connection."
  },
  {
    title: "Complete your profile",
    copy: "Provide accurate personal, contact and financial information. Take your time and check each field before proceeding.",
    note: "Your details should match your supporting documents."
  },
  {
    title: "Upload requested documents",
    copy: "Submit clear, legible copies of the identification and supporting documents requested in the application flow.",
    note: "Document requirements can vary by applicant."
  },
  {
    title: "Review suitability and disclosures",
    copy: "Read the product disclosures, terms and risk information before accepting them. Futures and derivatives are not suitable for everyone.",
    note: "Account approval and suitability decisions sit with Kenanga Futures."
  },
  {
    title: "Await verification",
    copy: "Kenanga Futures will review the application and may contact you for additional information or documents.",
    note: "Respond only through verified Kenanga Futures channels."
  },
  {
    title: "Complete account setup",
    copy: "After approval, follow the instructions issued by Kenanga Futures for funding, platform access and account activation.",
    note: "Do not transfer funds until you have received official instructions."
  }
] as const;

export const metadata: Metadata = {
  title: "Kenanga Futures Account Opening Guide | Aeora Research",
  description:
    "A private Aeora Research onboarding guide for prospective Kenanga Futures account applicants.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  },
  alternates: {
    canonical: "/guides/kenanga-futures-account-opening"
  },
  openGraph: {
    title: "Kenanga Futures Account Opening Guide | Aeora Research",
    description:
      "A private onboarding guide for prospective Kenanga Futures account applicants.",
    url: `${SITE_URL}/guides/kenanga-futures-account-opening`
  }
};

export default function KenangaFuturesAccountOpeningGuidePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell account-guide-page">
        <Header />
        <main id="main">
          <article>
            <header className="account-guide-hero section" aria-labelledby="guide-title">
              <div className="section__inner account-guide-hero__inner">
                <div className="account-guide-hero__copy">
                  <p className="section-kicker">Private onboarding guide</p>
                  <p className="account-guide-hero__context">
                    Aeora Research / Futures account onboarding
                  </p>
                  <h1 id="guide-title">
                    Opening a Kenanga Futures account.
                  </h1>
                  <p className="account-guide-hero__lede">
                    A clear, practical guide for traders being onboarded through
                    Aeora Research.
                  </p>
                  <div className="account-guide-hero__actions">
                    <a
                      className="button button--primary"
                      href={KENANGA_FUTURES_APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open official application
                    </a>
                    <a className="button button--secondary" href="#before-you-begin">
                      Read the guide
                    </a>
                  </div>
                </div>

                <aside className="account-guide-hero__notice" aria-label="Guide information">
                  <p>Application route</p>
                  <strong>Kenanga Futures</strong>
                  <span>Direct application and verification</span>
                  <div>
                    <span>Guide type</span>
                    <strong>Private link</strong>
                  </div>
                </aside>
              </div>
            </header>

            <section
              id="before-you-begin"
              className="account-guide-preparation section section--ruled"
              aria-labelledby="preparation-title"
            >
              <div className="section__inner account-guide-preparation__inner">
                <div className="account-guide-preparation__heading">
                  <p className="section-kicker">Before you begin</p>
                  <h2 id="preparation-title">
                    Prepare once.
                    <br />
                    Apply cleanly.
                  </h2>
                  <p>
                    Keeping the following details ready can make the application
                    and verification process easier to complete.
                  </p>
                </div>
                <ul className="account-guide-checklist">
                  {PREPARATION_ITEMS.map((item, index) => (
                    <li key={item.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="account-guide-steps section" aria-labelledby="steps-title">
              <div className="section__inner account-guide-steps__inner">
                <div className="account-guide-steps__heading">
                  <p className="section-kicker">Account opening sequence</p>
                  <h2 id="steps-title">
                    Pathway from
                    <br />
                    application to setup.
                  </h2>
                  <p>
                    Follow the live instructions shown by Kenanga Futures. This
                    guide is there to help you understand the sequence, not to
                    replace their application requirements.
                  </p>
                </div>
                <ol className="account-guide-steps__list">
                  {ACCOUNT_STEPS.map((step, index) => (
                    <li key={step.title}>
                      <span className="account-guide-steps__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="account-guide-steps__content">
                        <h3>{step.title}</h3>
                        <p>{step.copy}</p>
                      </div>
                      <p className="account-guide-steps__note">{step.note}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="account-guide-support section section--ruled" aria-labelledby="support-title">
              <div className="section__inner account-guide-support__inner">
                <div>
                  <p className="section-kicker">Need help?</p>
                  <h2 id="support-title">Keep the process verified.</h2>
                </div>
                <div className="account-guide-support__content">
                  <p>
                    Aeora Research can help you navigate this guide. For
                    application status, document requests, approval and account
                    instructions, use the official communication channels
                    provided by Kenanga Futures.
                  </p>
                  <div className="account-guide-support__actions">
                    <a
                      className="button button--primary"
                      href={KENANGA_FUTURES_APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start application
                    </a>
                    <a className="account-guide-support__contact" href={`mailto:${CONTACT_EMAIL}`}>
                      Ask Aeora Research
                    </a>
                    <a className="account-guide-support__contact" href={HOTLINE_PHONE.href}>
                      Call {HOTLINE_PHONE.label}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer className="account-guide-disclaimer section">
              <div className="section__inner">
                <p className="section-kicker">Important information</p>
                <p>
                  This guide is for general onboarding and educational purposes
                  only. It does not constitute investment advice, a
                  recommendation, an offer, or a guarantee of account approval
                  or trading performance. Futures and derivatives involve
                  substantial risk and may not be suitable for every person.
                </p>
              </div>
            </footer>
          </article>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
