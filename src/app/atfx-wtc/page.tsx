import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

const REGISTRATION_URL =
  "https://login-gm.atfx.com/register?redirect_uri=applyLive&invitationCode=Pg8EBMac47Nn7SQCx2Plb3GK7xAQoIyD3OcUhX%2FAuM4%3D";
const WHATSAPP_URL = "https://wa.me/60198899296";
const CAMPAIGN_ASSET_PATH = "/campaigns/atfx-world-trading-cup";

const STAGES = [
  {
    number: "01",
    name: "Regional Qualifiers",
    dates: "17 Aug - 2 Oct 2026",
    detail:
      "The top three traders by profit percentage return in each sub-region advance to Stage 2."
  },
  {
    number: "02",
    name: "Regional Finals",
    dates: "14 Oct - 13 Nov 2026",
    detail:
      "The top three traders in each region share USD 10,000 and receive a travel package to the World Finals."
  },
  {
    number: "03",
    name: "World Finals",
    dates: "December 2026",
    detail:
      "Five finalists compete for a combined USD 160,000. Exact competition dates will be announced by ATFX."
  }
] as const;

const ENTRY_REQUIREMENTS = [
  "Use the dedicated eligible ATFX live trading account issued for the competition.",
  "Fund the competition account with a minimum deposit of USD 250.",
  "Trade on at least 10 different trading days during Stage 1.",
  "Hold every position for at least three minutes.",
  "Only positions opened and closed during the relevant competition period count.",
  "Use one eligible competition account; account transfers or withdrawals may result in disqualification."
] as const;

const POSTERS = [
  {
    language: "English",
    src: `${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-en.jpg`,
    filename: "ATFX-World-Trading-Cup-2026-English.jpg",
    alt: "English ATFX World Trading Cup 2026 campaign poster"
  },
  {
    language: "Simplified Chinese",
    src: `${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-zh-cn.jpg`,
    filename: "ATFX-World-Trading-Cup-2026-Chinese.jpg",
    alt: "Simplified Chinese ATFX World Trading Cup 2026 campaign poster"
  }
] as const;

export const metadata: Metadata = {
  title: "ATFX World Trading Cup 2026 | Register via Aeora Research",
  description:
    "Register for the ATFX World Trading Cup 2026 through Aeora Research's dedicated trader link. Review competition dates, entry requirements, posters and official terms.",
  alternates: {
    canonical: "/atfx-wtc"
  },
  openGraph: {
    title: "ATFX World Trading Cup 2026 | Aeora Research",
    description:
      "Three stages, regional qualifiers and a world final. Review the official campaign information and register through Aeora Research's dedicated ATFX link.",
    url: `${SITE_URL}/atfx-wtc`,
    type: "website",
    images: [
      {
        url: `${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-en.jpg`,
        width: 2160,
        height: 4580,
        alt: "ATFX World Trading Cup 2026"
      }
    ]
  }
};

export default function WorldTradingCupPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell wtc-page">
        <Header />
        <main id="main">
          <section className="wtc-hero" aria-labelledby="wtc-title">
            <Image
              className="wtc-hero__image"
              src={`${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-en.jpg`}
              alt=""
              fill
              priority
              loading="eager"
              sizes="100vw"
            />
            <div className="wtc-hero__veil" aria-hidden="true" />
            <div className="section__inner wtc-hero__inner">
              <p className="wtc-kicker">ATFX World Trading Cup 2026</p>
              <h1 id="wtc-title">
                <span className="wtc-hero__title-line wtc-hero__title-line--primary">
                  Trade for your region.
                </span>
                <span className="wtc-hero__title-line wtc-hero__title-line--accent">
                  Advance to the world stage.
                </span>
              </h1>
              <p className="wtc-hero__lead">
                A three-stage global trading competition organised by ATFX.
                Register through AEORA&apos;s dedicated trader link for the
                Southeast Asia region.
              </p>
              <div className="wtc-hero__dates" aria-label="Important dates">
                <p>
                  <span>Pre-registration closes</span>
                  <strong>14 August 2026</strong>
                  <span className="wtc-hero__urgency">
                    <span
                      className="wtc-hero__urgency-dot"
                      aria-hidden="true"
                    />
                    Closing soon
                  </span>
                </p>
                <p>
                  <span>Stage 1 competition</span>
                  <strong>17 Aug - 2 Oct 2026</strong>
                </p>
              </div>
              <div className="wtc-actions">
                <a
                  className="button wtc-button wtc-button--gold"
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register with ATFX
                </a>
                <a
                  className="button wtc-button wtc-button--ghost"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp assistance
                </a>
              </div>
              <p className="wtc-hero__note">
                Registration opens on ATFX&apos;s website. Eligibility and
                account approval are determined by ATFX.
              </p>
            </div>
          </section>

          <aside className="wtc-window" aria-label="Late registration timing">
            <div className="section__inner wtc-window__inner">
              <p className="wtc-window__label">Late entry remains possible</p>
              <p className="wtc-window__date">10 trading days are still required</p>
              <p className="wtc-window__guidance">
                <strong>Example: join on 21 September.</strong> Trading on
                21-25 September and 28 September-2 October provides ten
                separate trading days before Stage 1 closes. Starting later
                simply means a shorter performance window, subject to market
                availability, ATFX account approval and all official rules.
              </p>
            </div>
          </aside>

          <section className="wtc-region" aria-labelledby="region-title">
            <div className="section__inner wtc-region__inner">
              <div className="wtc-region__heading">
                <div>
                  <p className="wtc-kicker">Regional competition</p>
                  <h2 id="region-title">Compete in Southeast Asia.</h2>
                </div>
                <p>
                  AEORA&apos;s dedicated registration pathway is intended for
                  eligible traders entering ATFX&apos;s Southeast Asia regional
                  competition.
                </p>
              </div>
              <figure className="wtc-region__banner">
                <Image
                  src={`${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-regions.png`}
                  alt="ATFX World Trading Cup regions with Southeast Asia highlighted"
                  width={1552}
                  height={488}
                  sizes="(max-width: 720px) calc(100vw - 40px), 1120px"
                />
              </figure>
            </div>
          </section>

          <section className="wtc-section wtc-route" aria-labelledby="route-title">
            <div className="section__inner">
              <div className="wtc-heading">
                <p className="section-kicker">Competition route</p>
                <h2 id="route-title">From regional qualifier to world final.</h2>
                <p>
                  Each stage narrows the field through performance under a
                  defined set of account and trading requirements.
                </p>
              </div>
              <div className="wtc-route__grid">
                {STAGES.map((stage) => (
                  <article className="wtc-route__stage" key={stage.number}>
                    <p className="wtc-route__number">Stage {stage.number}</p>
                    <h3>{stage.name}</h3>
                    <p className="wtc-route__dates">{stage.dates}</p>
                    <p>{stage.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="wtc-section wtc-entry"
            aria-labelledby="entry-title"
          >
            <div className="section__inner wtc-entry__inner">
              <div className="wtc-entry__heading">
                <p className="section-kicker section-kicker--dark">
                  Stage 1 essentials
                </p>
                <h2 id="entry-title">Know the rules before you enter.</h2>
                <p>
                  All times follow GMT+8 / MT5 server time. The English version
                  of the official terms prevails if there is any discrepancy.
                </p>
              </div>
              <ol className="wtc-entry__list">
                {ENTRY_REQUIREMENTS.map((requirement, index) => (
                  <li key={requirement}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{requirement}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="wtc-section wtc-prizes" aria-labelledby="prizes-title">
            <div className="section__inner wtc-prizes__inner">
              <div className="wtc-prizes__heading">
                <p className="section-kicker">Prizes</p>
                <h2 id="prizes-title">Performance carries forward.</h2>
              </div>
              <div className="wtc-prizes__summary">
                <div>
                  <p>Stage 1 / per sub-region</p>
                  <strong>USD 1,000</strong>
                  <span>USD 500 / USD 250</span>
                </div>
                <div>
                  <p>Stage 2 / per region</p>
                  <strong>USD 5,000</strong>
                  <span>USD 3,000 / USD 2,000 + travel package</span>
                </div>
                <div className="wtc-prizes__final">
                  <p>Stage 3 / combined final</p>
                  <strong>USD 160,000</strong>
                  <span>Shared across the top five finalists</span>
                </div>
              </div>
              <p className="wtc-prizes__note">
                Prize eligibility, ranking methodology and payment conditions
                are governed by ATFX&apos;s official promotion terms.
              </p>
            </div>
          </section>

          <section
            className="wtc-section wtc-posters"
            aria-labelledby="posters-title"
          >
            <div className="section__inner">
              <div className="wtc-heading wtc-heading--split">
                <div>
                  <p className="section-kicker">Campaign materials</p>
                  <h2 id="posters-title">View or download the official posters.</h2>
                </div>
                <p>
                  Full campaign information is available in English and
                  Simplified Chinese. Select a poster to inspect the full-size
                  artwork.
                </p>
              </div>
              <div className="wtc-posters__grid">
                {POSTERS.map((poster) => (
                  <figure className="wtc-poster" key={poster.language}>
                    <a
                      className="wtc-poster__image"
                      href={poster.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the full ${poster.language} ATFX World Trading Cup poster`}
                    >
                      <Image
                        src={poster.src}
                        alt={poster.alt}
                        width={2160}
                        height={4580}
                        sizes="(max-width: 720px) calc(100vw - 40px), 48vw"
                      />
                    </a>
                    <figcaption>
                      <div>
                        <span>Official poster</span>
                        <strong>{poster.language}</strong>
                      </div>
                      <div className="wtc-poster__links">
                        <a
                          href={poster.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View full size
                        </a>
                        <a href={poster.src} download={poster.filename}>
                          Download JPG
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="wtc-section wtc-terms" aria-labelledby="terms-title">
            <div className="section__inner wtc-terms__inner">
              <div className="wtc-terms__heading">
                <p className="section-kicker">Official terms</p>
                <h2 id="terms-title">Read the complete promotion terms.</h2>
                <p>
                  This page is a practical summary only. Review the complete
                  ATFX terms and conditions before registering, funding or
                  trading the competition account.
                </p>
                <div className="wtc-actions">
                  <a
                    className="button button--primary"
                    href={`${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-terms.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View full terms
                  </a>
                  <a
                    className="button button--secondary"
                    href={`${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-terms.pdf`}
                    download="ATFX-World-Trading-Cup-2026-Terms.pdf"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
              <div className="wtc-terms__viewer">
                <iframe
                  title="ATFX World Trading Cup 2026 official terms and conditions"
                  src={`${CAMPAIGN_ASSET_PATH}/atfx-world-trading-cup-terms.pdf#view=FitH`}
                />
              </div>
            </div>
          </section>

          <section className="wtc-support" aria-labelledby="support-title">
            <div className="section__inner wtc-support__inner">
              <div>
                <p className="wtc-kicker">Registration support</p>
                <h2 id="support-title">Ready to enter?</h2>
                <p>
                  Use AEORA&apos;s dedicated ATFX registration link. For help
                  with the process, contact Douglas directly on WhatsApp.
                </p>
              </div>
              <div className="wtc-actions">
                <a
                  className="button wtc-button wtc-button--gold"
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register with ATFX
                </a>
                <a
                  className="button wtc-button wtc-button--ghost"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Douglas
                </a>
              </div>
            </div>
          </section>

          <section className="wtc-risk" aria-label="Risk disclosure">
            <div className="section__inner">
              <p>
                <strong>Risk disclosure:</strong> Trading forex and contracts
                for difference is speculative and carries a high level of risk.
                You may lose some or all of your invested capital. Consider
                whether you understand how CFDs work and whether you can afford
                to take the risk. Seek independent professional advice where
                appropriate.
              </p>
              <p>
                The ATFX World Trading Cup is organised and administered by AT
                Global Markets LLC / ATFX. Aeora Research provides a dedicated
                registration pathway and participant support; it does not
                administer the competition, determine eligibility or award
                prizes.
              </p>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
