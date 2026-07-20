import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { PinnacleGallery } from "@/components/PinnacleGallery";
import { SiteFooter } from "@/components/SiteFooter";
import {
  SITE_URL,
  TRADER_DEVELOPMENT_INTEREST_URL
} from "@/lib/site";

const WHY_US = [
  {
    slug: "pathways",
    title: "Professional Pathways",
    copy: "A considered introduction to the standards and routines behind serious market participation."
  },
  {
    slug: "structure",
    title: "Structured Practice",
    copy: "Develop a more deliberate process for preparation, execution and review."
  },
  {
    slug: "context",
    title: "Market Context",
    copy: "Connect macro conditions, market structure and liquidity to the decisions you make."
  },
  {
    slug: "risk",
    title: "Risk Discipline",
    copy: "Explore how consistency is supported by clear risk and decision frameworks."
  },
  {
    slug: "execution",
    title: "Execution Practice",
    copy: "Work through professional habits that help turn preparation into repeatable action."
  }
] as const;

export const metadata: Metadata = {
  title: "Aeora Trader Development | Professional Trading Programme",
  description:
    "Aeora Trader Development is an in-person programme exploring market context, risk discipline and professional trading practice.",
  alternates: {
    canonical: "/pinnacle"
  },
  openGraph: {
    title: "Aeora Trader Development | Professional Trading Programme",
    description:
      "An in-person Aeora Research trader development programme exploring market context, risk discipline and professional trading practice.",
    url: `${SITE_URL}/pinnacle`
  }
};

export default function PinnaclePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell pinnacle-page">
        <Header />
        <main id="main">
          <section className="pinnacle-hero" aria-labelledby="pinnacle-title">
            <div className="section__inner pinnacle-hero__inner">
              <div className="pinnacle-hero__cover">
                <Image
                  src="/pinnacle/level-up-your-trading.png"
                  alt="Aeora Research Level-Up your trading environment programme visual"
                  fill
                  priority
                  sizes="(max-width: 800px) calc(100vw - 28px), 46vw"
                />
              </div>
              <div className="pinnacle-hero__content">
                <p className="section-kicker">Aeora Trader Development</p>
                <h1 id="pinnacle-title">Level up your trading environment.</h1>
                <p>
                  An in-person programme for traders developing a more
                  deliberate approach to market preparation, risk and
                  execution.
                </p>
                <div className="pinnacle-intake" aria-label="Next programme intake">
                  <div className="pinnacle-intake__status">
                    <p>Next intake</p>
                    <strong>TBC</strong>
                  </div>
                  <dl>
                    <div>
                      <dt>Possible date</dt>
                      <dd>Q4 2026</dd>
                    </div>
                    <div>
                      <dt>Location</dt>
                      <dd>Kuala Lumpur, Malaysia</dd>
                    </div>
                    <div>
                      <dt>Format</dt>
                      <dd>Physical event. Seats limited.</dd>
                    </div>
                  </dl>
                </div>
                <a className="button button--primary" href="#programme">
                  More info
                </a>
              </div>
            </div>
          </section>

          <section
            id="programme"
            className="pinnacle-programme section"
            aria-labelledby="programme-title"
          >
            <div className="section__inner pinnacle-programme__inner">
              <div className="pinnacle-programme__heading">
                <p className="section-kicker">The programme</p>
                <h2 id="programme-title">
                  <span>A practical introduction to</span>
                  <span>professional market practice.</span>
                </h2>
              </div>
              <div className="pinnacle-programme__content">
                <p>
                  Aeora Trader Development brings together market intelligence,
                  trading process and risk awareness in a focused in-person
                  setting. It is designed for participants who want to build a
                  stronger foundation for disciplined market practice.
                </p>
                <ul>
                  <li>Market context and structured preparation</li>
                  <li>Risk, decision quality and review</li>
                  <li>Professional routines around execution</li>
                </ul>
                <a
                  className="button button--primary"
                  href={TRADER_DEVELOPMENT_INTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Register interest via the Aeora Trader Development Google Form, opens in a new tab"
                >
                  Register interest
                </a>
              </div>
            </div>
          </section>

          <section className="pinnacle-why section" aria-labelledby="why-title">
            <div className="section__inner pinnacle-why__inner">
              <div className="pinnacle-why__heading">
                <p className="section-kicker">Why Us?</p>
                <h2 id="why-title">Built around the work before a trade.</h2>
              </div>
              <div className="pinnacle-why__grid">
                {WHY_US.map((item, index) => (
                  <article
                    className={`pinnacle-why__item pinnacle-why__item--${item.slug}`}
                    data-index={String(index + 1).padStart(2, "0")}
                    key={item.slug}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="pinnacle-gallery section" aria-labelledby="gallery-title">
            <div className="section__inner">
              <div className="pinnacle-gallery__heading">
                <p className="section-kicker">Gallery</p>
                <h2 id="gallery-title">Recent sessions and activities.</h2>
                <p>
                  A visual record of Aeora events, practical discussions and
                  market learning sessions.
                </p>
              </div>
              <PinnacleGallery />
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
