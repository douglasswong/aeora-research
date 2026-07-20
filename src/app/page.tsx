import { Header } from "@/components/Header";
import { MarketField } from "@/components/MarketField";
import { NumbersSection } from "@/components/NumbersSection";
import { ParallaxSlider } from "@/components/ParallaxSlider";
import { PartnersSection } from "@/components/PartnersSection";
import { PillarCard } from "@/components/PillarCard";
import { SiteFooter } from "@/components/SiteFooter";
import {
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  CONTACT_EMAIL,
  ENQUIRY_PATHWAYS,
  OFFICE_PHONE,
  PILLARS,
  SOCIAL_CHANNELS,
  SITE_URL
} from "@/lib/site";

const heroSubtitleLetters = "RESEARCH".split("");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Aeora Research",
  alternateName: "AEORA",
  legalName: COMPANY_NAME,
  identifier: COMPANY_REGISTRATION,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/aeora-logo-dark.svg`,
  description:
    "Aeora Research PLT is a research-led financial markets company in Malaysia focused on market intelligence, trader development and disciplined market participation.",
  email: CONTACT_EMAIL,
  telephone: OFFICE_PHONE.href.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "30A (1st Floor), Jalan Merak 4A",
    addressLocality: "Puchong",
    addressRegion: "Selangor",
    postalCode: "47100",
    addressCountry: "MY"
  },
  sameAs: SOCIAL_CHANNELS.map((channel) => channel.href)
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Aeora Research",
  alternateName: ["AEORA", "aeora-research.com"],
  publisher: {
    "@id": `${SITE_URL}/#organization`
  }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
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
                  <span>Markets reward preparation,</span>
                  <span>not prediction.</span>
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

          <PartnersSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
