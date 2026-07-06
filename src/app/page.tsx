import { BrandLockup } from "@/components/BrandLockup";
import { Header } from "@/components/Header";
import { MarketField } from "@/components/MarketField";
import { NumbersSection } from "@/components/NumbersSection";
import { ParallaxSlider } from "@/components/ParallaxSlider";
import { PillarCard } from "@/components/PillarCard";
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_NAME,
  CONTACT_EMAIL,
  ENQUIRY_PATHWAYS,
  HOTLINE_PHONE,
  MAP_EMBED_URL,
  NAV_ITEMS,
  OFFICE_PHONE,
  PILLARS,
  SOCIAL_CHANNELS,
  SITE_URL
} from "@/lib/site";

const currentYear = new Date().getFullYear();
const heroSubtitleLetters = "RESEARCH".split("");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aeora Research",
  url: SITE_URL
};

type SocialChannel = (typeof SOCIAL_CHANNELS)[number];

function SocialIcon({ channel }: { channel: SocialChannel }) {
  if (channel === "Facebook") {
    return (
      <span
        className="social-placeholder"
        aria-label="Facebook profile coming soon"
        title="Coming soon"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M14.2 8.2h2.4V4.4c-.42-.06-1.84-.18-3.5-.18-3.46 0-5.82 2.05-5.82 5.82v3.26H3.5v4.25h3.78V24h4.6v-6.45h3.6l.68-4.25h-4.28V10.46c0-1.23.34-2.26 2.32-2.26Z" />
        </svg>
        <span>{channel}</span>
      </span>
    );
  }

  if (channel === "Instagram") {
    return (
      <span
        className="social-placeholder"
        aria-label="Instagram profile coming soon"
        title="Coming soon"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.2" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.35" cy="6.65" r="1.05" />
        </svg>
        <span>{channel}</span>
      </span>
    );
  }

  return (
    <span
      className="social-placeholder"
      aria-label="YouTube channel coming soon"
      title="Coming soon"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M22 8.25a3.2 3.2 0 0 0-2.25-2.26C17.76 5.45 12 5.45 12 5.45s-5.76 0-7.75.54A3.2 3.2 0 0 0 2 8.25 33.3 33.3 0 0 0 1.45 12 33.3 33.3 0 0 0 2 15.75a3.2 3.2 0 0 0 2.25 2.26c1.99.54 7.75.54 7.75.54s5.76 0 7.75-.54A3.2 3.2 0 0 0 22 15.75 33.3 33.3 0 0 0 22.55 12 33.3 33.3 0 0 0 22 8.25Z" />
        <path d="m10.2 15.3 5.1-3.3-5.1-3.3v6.6Z" />
      </svg>
      <span>{channel}</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell">
        <Header />
        <main id="main">
          <section className="hero section" aria-labelledby="hero-title">
            <div className="section__inner hero__inner">
              <div className="hero__content">
                <p className="eyebrow">Research-led market ecosystem</p>
                <h1 id="hero-title" className="hero-brand">
                  <span className="sr-only">Aeora Research</span>
                  <span className="hero-brand__word" aria-hidden="true">
                    {"\u039bEOR\u039b"}
                  </span>
                  <span className="hero-brand__sub" aria-hidden="true">
                    {heroSubtitleLetters.map((letter, index) => (
                      <span
                        className="hero-brand__sub-letter"
                        key={`${letter}-${index}`}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </h1>
                <p className="hero__positioning">
                  Prop Desk <span>|</span> Market Intelligence <span>|</span>{" "}
                  Edge
                </p>
                <p className="hero__copy">
                  Aeora Research brings together market intelligence, trader
                  development and performance-focused thinking for participants
                  operating across modern financial markets.
                </p>
                <div className="hero__actions" aria-label="Primary actions">
                  <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}`}>
                    Connect with Aeora
                  </a>
                  <a className="button button--secondary" href="#focus">
                    Explore Our Focus
                  </a>
                </div>
              </div>
              <div className="hero__visual">
                <MarketField />
              </div>
            </div>
          </section>

          <section
            id="positioning"
            className="positioning section section--ruled"
            aria-labelledby="positioning-title"
          >
            <div className="section__inner positioning__inner reveal">
              <div className="positioning__copy">
                <p className="section-kicker">Positioning</p>
                <h2 id="positioning-title">
                  Markets reward preparation, not prediction.
                </h2>
                <p>
                  We approach markets through structured research, contextual
                  intelligence and disciplined decision frameworks.
                </p>
              </div>
              <ParallaxSlider />
            </div>
          </section>

          <NumbersSection />

          <section
            id="focus"
            className="pillars section"
            aria-labelledby="pillars-title"
          >
            <div className="section__inner">
              <div className="section-heading reveal">
                <p className="section-kicker">Focus</p>
                <h2 id="pillars-title">Three strategic pillars.</h2>
              </div>
              <div className="pillars__grid">
                {PILLARS.map((pillar) => (
                  <PillarCard pillar={pillar} key={pillar.title} />
                ))}
              </div>
            </div>
          </section>

          <section
            id="philosophy"
            className="philosophy section"
            aria-labelledby="philosophy-title"
          >
            <div className="section__inner philosophy__inner">
              <div className="philosophy__copy reveal">
                <p className="section-kicker section-kicker--dark">
                  Philosophy
                </p>
                <h2 id="philosophy-title">Research First.</h2>
                <p>Every position begins before execution.</p>
              </div>
              <div className="philosophy__terms reveal" aria-label="Core terms">
                <span>Context.</span>
                <span>Structure.</span>
                <span>Risk.</span>
                <span>Conviction.</span>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="about section section--ruled"
            aria-labelledby="about-title"
          >
            <div className="section__inner about__inner">
              <div className="section-heading reveal">
                <p className="section-kicker">About</p>
                <h2 id="about-title">Built for the evolving market landscape.</h2>
              </div>
              <div className="about__body reveal">
                <p>
                  Aeora Research is being built as a research-led market
                  ecosystem connecting intelligence, trader development and
                  professional market participation.
                </p>
                <p>
                  Our long-term direction is centred on creating stronger
                  pathways between research, disciplined trading practice and
                  institutional market participation.
                </p>
              </div>
            </div>
          </section>

          <section
            id="connect"
            className="connect section"
            aria-labelledby="connect-title"
          >
            <div className="section__inner connect__inner">
              <div className="connect__intro reveal">
                <p className="section-kicker">Connect</p>
                <h2 id="connect-title">Build the edge with us.</h2>
                <a
                  className="connect__email"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="connect__panel reveal">
                <ul className="connect__pathways" aria-label="Enquiry pathways">
                  {ENQUIRY_PATHWAYS.map((pathway) => (
                    <li key={pathway}>
                      <span>{pathway}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="button button--primary"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  Connect with Aeora
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer" aria-labelledby="footer-title">
          <div className="section__inner site-footer__inner">
            <div className="site-footer__brand">
              <BrandLockup inverse />
              <h2 id="footer-title" className="sr-only">
                Aeora Research contact information
              </h2>
              <p className="site-footer__pillars">
                Prop Desk | Market Intelligence | Edge
              </p>
              <p className="site-footer__description">
                Research-led market intelligence and professional market
                participation.
              </p>
            </div>

            <div className="site-footer__contact">
              <p className="site-footer__kicker">Company / Contact</p>
              <h3>{COMPANY_NAME}</h3>
              <address>
                <span className="site-footer__label">Address</span>
                {COMPANY_ADDRESS_LINES.map((line) => (
                  <span className="site-footer__address-line" key={line}>
                    {line}
                  </span>
                ))}
                <span className="site-footer__label">Office</span>
                <a href={OFFICE_PHONE.href}>{OFFICE_PHONE.label}</a>
                <span className="site-footer__label">Hotline</span>
                <a href={HOTLINE_PHONE.href}>{HOTLINE_PHONE.label}</a>
                <span className="site-footer__label">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </address>
              <div className="site-footer__map">
                <iframe
                  title="Map to Aeora Research office in Bandar Puchong Jaya"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="site-footer__follow">
              <p className="site-footer__kicker">Follow Us</p>
              <div className="site-footer__socials" aria-label="Social profiles">
                {SOCIAL_CHANNELS.map((channel) => (
                  <SocialIcon channel={channel} key={channel} />
                ))}
              </div>
              <nav className="site-footer__nav" aria-label="Footer navigation">
                {NAV_ITEMS.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a href="#connect">Connect</a>
              </nav>
            </div>
          </div>

          <div className="section__inner site-footer__legal">
            <p className="site-footer__disclaimer">
              Information presented by Aeora Research is for general
              informational, research and educational purposes only. Nothing on
              this website constitutes investment advice, an offer,
              solicitation, recommendation or guarantee of performance.
            </p>
            <p className="site-footer__copyright">
              &copy; {currentYear} Aeora Research. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
