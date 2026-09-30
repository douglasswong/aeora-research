import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { CONTACT_EMAIL, SITE_URL, SOCIAL_CHANNELS } from "@/lib/site";

const SENSITIVE_REQUESTS = [
  "Your banking password",
  "One-Time Passwords (OTP)",
  "Credit or debit card PIN",
  "Cryptocurrency wallet seed phrase or recovery phrase",
  "Email or social-media passwords",
  "Remote access to your computer or mobile device",
  "Authentication codes intended for your personal accounts"
] as const;

const PAYMENT_SAFETY_POINTS = [
  "Use only payment links provided through Aeora's official website or confirmed communication channels.",
  "Check the website domain before entering payment information.",
  "Be cautious of unexpected changes to bank account details.",
  "Be cautious of urgent requests to transfer funds immediately.",
  "Do not send cryptocurrency solely because someone claiming to represent Aeora requests it.",
  "Independently verify unusual or high-value payment requests."
] as const;

const WARNING_SIGNS = [
  "A newly created social-media account claiming to represent Aeora",
  "Slightly misspelled Aeora website domains",
  "Messages promising guaranteed investment returns",
  "Requests to transfer funds urgently",
  "Requests to send cryptocurrency to a personal wallet",
  "Requests for OTP codes, passwords or seed phrases",
  "Unsolicited private investment offers",
  "Requests to install remote-access software",
  "Someone claiming that an opportunity is secret or must not be discussed with Aeora directly",
  "Payment instructions that suddenly change from previous official instructions"
] as const;

const REPORT_DETAILS = [
  "Screenshot of the suspicious message",
  "Website URL",
  "Social-media account URL or username",
  "Email address used",
  "Phone number used",
  "Payment instructions received",
  "Date and approximate time",
  "Brief description of what happened"
] as const;

const REPORT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=Security%20%2F%20Impersonation%20Report`;

const OFFICIAL_CONTACT_LINES = [
  {
    label: "Office",
    numbers: [{ display: "+603 5626 5777", href: "tel:+60356265777" }]
  },
  {
    label: "Hotline",
    numbers: [
      { display: "+6019 8899 296", href: "tel:+60198899296" },
      { display: "+6016 414 5996", href: "tel:+60164145996" },
      { display: "+6012 211 7180", href: "tel:+60122117180" }
    ]
  }
] as const;

const SOCIAL_CHANNEL_LABELS = {
  Instagram: "Our only Instagram",
  Facebook: "Facebook: Aeora Research"
} as const;

export const metadata: Metadata = {
  title: "Security & Verification | Aeora Research",
  description:
    "Verify official Aeora Research websites, communication channels and security information. Learn how to identify impersonation, payment fraud and suspicious communications.",
  alternates: {
    canonical: "/security"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Security & Verification | Aeora Research",
    description:
      "Verify official Aeora Research websites, communication channels and security information.",
    url: `${SITE_URL}/security`
  }
};

export default function SecurityPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell site-shell--reading-progress security-page">
        <Header />
        <main id="main">
          <section className="security-hero" aria-labelledby="security-title">
            <div className="section__inner security-hero__inner">
              <div className="security-hero__content">
                <p className="section-kicker">Security &amp; Verification</p>
                <h1 id="security-title">Verify Aeora Research</h1>
                <p className="security-hero__lead">
                  Protect yourself from impersonation, fraudulent websites, fake
                  social-media accounts and unauthorized payment requests.
                </p>
                <p>
                  This page provides the official channels, websites and
                  verification information used by Aeora Research. If you are
                  unsure whether a communication genuinely came from us, verify
                  it here before taking further action.
                </p>
                <div className="security-hero__actions">
                  <a className="button button--primary" href="#official-channels">
                    Verify official channels
                  </a>
                  <a className="button button--secondary" href="#report">
                    Report suspicious activity
                  </a>
                </div>
              </div>
              <div className="security-hero__field" aria-hidden="true">
                <div className="security-hero__field-topline">
                  <span>Official reference</span>
                  <span>01</span>
                </div>
                <div className="security-hero__field-mark">AR</div>
                <div className="security-hero__field-status">
                  <span />
                  <p>Verify before you act</p>
                </div>
                <div className="security-hero__field-key">
                  <span>Domain</span>
                  <span>Channel</span>
                  <span>Payment</span>
                </div>
              </div>
            </div>
          </section>

          <section className="security-notice section section--ruled" aria-labelledby="security-notice-title">
            <div className="section__inner security-notice__inner">
              <div>
                <p className="section-kicker">Security notice</p>
                <h2 id="security-notice-title">Important Security Notice</h2>
              </div>
              <div className="security-notice__content">
                <p>
                  Fraudulent individuals, websites or social-media accounts may
                  attempt to impersonate Aeora Research or members of our team.
                </p>
                <p>
                  Always verify website addresses, contact details and payment
                  instructions through our official channels before sending funds
                  or providing personal information.
                </p>
                <div className="security-notice__checklist">
                  <h3>Aeora Research will never ask you to provide:</h3>
                  <ul>
                    {SENSITIVE_REQUESTS.map((request) => (
                      <li key={request}>{request}</li>
                    ))}
                  </ul>
                </div>
                <p className="security-notice__note">
                  If someone claiming to represent Aeora asks for any of the
                  above, stop communication and verify with us directly.
                </p>
              </div>
            </div>
          </section>

          <section id="official-channels" className="security-channels section" aria-labelledby="official-channels-title">
            <div className="section__inner">
              <div className="security-section-heading">
                <p className="section-kicker">Official reference</p>
                <h2 id="official-channels-title">Official Aeora Channels</h2>
                <p>Only trust information provided through the official channels listed below.</p>
              </div>
              <div className="security-channels__grid">
                <article className="security-channel">
                  <p className="security-channel__index">01</p>
                  <h3>Official Website</h3>
                  <a className="security-channel__link" href={SITE_URL}>
                    {SITE_URL}
                  </a>
                  <p>Our official public website.</p>
                  <p className="security-channel__note">
                    Always check that the domain ends exactly with
                    aeora-research.com. Do not treat similarly spelled domains as
                    official.
                  </p>
                </article>
                <article className="security-channel">
                  <p className="security-channel__index">02</p>
                  <h3>Official Email</h3>
                  <a className="security-channel__link" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  <p>Our confirmed public support and security-reporting address.</p>
                  <p className="security-channel__note">
                    <strong>Security reporting:</strong> Include &quot;Security /
                    Impersonation Report&quot; in the subject line.
                  </p>
                </article>
                <article className="security-channel">
                  <p className="security-channel__index">03</p>
                  <h3>Official Social Media</h3>
                  <ul className="security-channel__socials">
                    {SOCIAL_CHANNELS.map((channel) => (
                      <li key={channel.label}>
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {SOCIAL_CHANNEL_LABELS[channel.label]}
                        </a>
                      </li>
                    ))}
                    <li>
                      <span className="security-channel__social-status">
                        LinkedIn: To be set up soon.
                      </span>
                    </li>
                  </ul>
                  <p className="security-channel__note">
                    Do not rely on accounts or profiles that are not linked from
                    the official Aeora website.
                  </p>
                </article>
                <article className="security-channel">
                  <p className="security-channel__index">04</p>
                  <h3>Official Contact Lines</h3>
                  <ul className="security-channel__phones">
                    {OFFICIAL_CONTACT_LINES.map((line) => (
                      <li key={line.label}>
                        <span>{line.label}</span>
                        {line.numbers.map((number) => (
                          <a key={number.href} href={number.href}>
                            {number.display}
                          </a>
                        ))}
                      </li>
                    ))}
                  </ul>
                  <p className="security-channel__note">
                    Use only contact numbers published here or elsewhere on
                    aeora-research.com.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="security-verify" aria-labelledby="verify-title">
            <div className="section__inner">
              <div className="security-verify__heading">
                <div>
                  <p className="section-kicker section-kicker--dark">Verification guide</p>
                  <h2 id="verify-title">How to Verify a Communication</h2>
                </div>
                <p>Four practical checks before you respond, pay or share information.</p>
              </div>
              <ol className="security-verify__steps">
                <li>
                  <span>01</span>
                  <h3>Check the Domain</h3>
                  <p>
                    Make sure the website address is exactly aeora-research.com.
                    Look carefully for misspellings, additional words, unusual
                    extensions or similar-looking domains.
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <h3>Verify the Person</h3>
                  <p>
                    Verify their identity through our official website or
                    confirmed communication channels. Do not rely only on
                    WhatsApp profile photos, Telegram usernames, LinkedIn names,
                    caller ID, screenshots or business cards.
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <h3>Verify the Payment</h3>
                  <p>
                    Confirm that a payment link or payment instruction matches
                    information provided through Aeora&apos;s official channels. A
                    name, logo or employee name alone does not verify a request.
                  </p>
                </li>
                <li>
                  <span>04</span>
                  <h3>When in Doubt, Stop</h3>
                  <p>
                    Do not send money or disclose sensitive information until the
                    communication has been independently verified.
                  </p>
                  <a href="#report">Report suspicious activity</a>
                </li>
              </ol>
            </div>
          </section>

          <section className="security-payment section section--ruled" aria-labelledby="payment-safety-title">
            <div className="section__inner security-payment__inner">
              <div>
                <p className="section-kicker">Payment verification</p>
                <h2 id="payment-safety-title">Payment Safety</h2>
                <p>
                  Payment fraud is one of the most common forms of business
                  impersonation. Always verify payment instructions before
                  completing a transaction.
                </p>
              </div>
              <ul>
                {PAYMENT_SAFETY_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="security-signs section" aria-labelledby="warning-signs-title">
            <div className="section__inner">
              <div className="security-section-heading">
                <p className="section-kicker">Stay alert</p>
                <h2 id="warning-signs-title">Common Warning Signs</h2>
                <p>
                  These signals do not prove that a message is fraudulent, but
                  they are reasons to pause and independently verify it.
                </p>
              </div>
              <ul className="security-signs__list">
                {WARNING_SIGNS.map((sign, index) => (
                  <li key={sign}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{sign}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="security-guarantee" aria-labelledby="guarantee-title">
            <div className="section__inner security-guarantee__inner">
              <p className="section-kicker section-kicker--dark">Financial scam disclaimer</p>
              <h2 id="guarantee-title">Be Cautious of Guaranteed Return Claims</h2>
              <div>
                <p>
                  Aeora Research does not promote investment opportunities using
                  guaranteed-profit, guaranteed-return or risk-free claims.
                  Financial markets and investments involve risk.
                </p>
                <p>
                  If someone uses the Aeora name to promise guaranteed profits or
                  guaranteed investment returns, independently verify the
                  communication before proceeding.
                </p>
              </div>
            </div>
          </section>

          <section className="security-links section section--ruled" aria-labelledby="official-links-title">
            <div className="section__inner security-links__inner">
              <div>
                <p className="section-kicker">Official service links</p>
                <h2 id="official-links-title">Verify Our Official Links</h2>
              </div>
              <div>
                <p>
                  Official service and payment links should originate from
                  aeora-research.com or from external services linked directly
                  from the official Aeora website.
                </p>
                <div className="security-links__actions">
                  <Link className="button button--primary" href="/">
                    Return to Aeora Research
                  </Link>
                  <Link className="button button--secondary" href="/courses">
                    View Courses
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="security-alerts section" aria-labelledby="alerts-title">
            <div className="section__inner security-alerts__inner">
              <div>
                <p className="section-kicker">Current Security Alerts</p>
                <h2 id="alerts-title">No active public security alerts.</h2>
              </div>
              <p>
                Any confirmed impersonation campaigns, fraudulent domains or
                security notices affecting Aeora Research will be published here.
              </p>
            </div>
          </section>

          <section id="report" className="security-report" aria-labelledby="report-title">
            <div className="section__inner security-report__inner">
              <div>
                <p className="section-kicker section-kicker--dark">Report &amp; verification</p>
                <h2 id="report-title">Report Suspicious Activity</h2>
                <p>
                  If you believe someone is impersonating Aeora Research, using
                  our branding without authorization, or attempting to obtain
                  payment or personal information fraudulently, please report it
                  to us.
                </p>
                <p>
                  For security or impersonation reports, contact
                  {" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and
                  include &quot;Security / Impersonation Report&quot; in your message.
                </p>
                <a className="button" href={REPORT_EMAIL_HREF}>
                  Contact Aeora Research
                </a>
              </div>
              <aside className="security-report__details" aria-labelledby="report-details-title">
                <h3 id="report-details-title">Include what you can</h3>
                <ul>
                  {REPORT_DETAILS.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <p>
                  Do not send passwords, OTP codes, full card details, seed
                  phrases or other sensitive credentials when submitting a report.
                </p>
              </aside>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
