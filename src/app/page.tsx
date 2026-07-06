import { BrandLockup } from "@/components/BrandLockup";
import { Header } from "@/components/Header";
import { MarketField } from "@/components/MarketField";
import { PillarCard } from "@/components/PillarCard";
import {
  CONTACT_EMAIL,
  ENQUIRY_PATHWAYS,
  NAV_ITEMS,
  PILLARS,
  SITE_URL
} from "@/lib/site";

const currentYear = new Date().getFullYear();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aeora Research",
  url: SITE_URL
};

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
                    Research
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
            id="focus"
            className="positioning section section--ruled"
            aria-labelledby="positioning-title"
          >
            <div className="section__inner positioning__inner reveal">
              <p className="section-kicker">Positioning</p>
              <h2 id="positioning-title">
                Markets reward preparation, not prediction.
              </h2>
              <p>
                We approach markets through structured research, contextual
                intelligence and disciplined decision frameworks.
              </p>
            </div>
          </section>

          <section
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

        <footer className="site-footer">
          <div className="section__inner site-footer__inner">
            <div className="site-footer__brand">
              <BrandLockup compact />
              <p>Prop Desk | Market Intelligence | Edge</p>
            </div>
            <nav className="site-footer__nav" aria-label="Footer navigation">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#connect">Connect</a>
            </nav>
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
