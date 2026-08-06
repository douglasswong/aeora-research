import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { MarketsRallyCover } from "@/components/MarketsRallyCover";
import { ResearchCover } from "@/components/ResearchCover";
import { RESEARCH_ARTICLES } from "@/lib/research";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research | Aeora Research Market Intelligence",
  description:
    "Aeora Research approaches financial markets through macro context, market structure, liquidity, positioning and disciplined risk frameworks.",
  alternates: {
    canonical: "/research"
  },
  openGraph: {
    url: `${SITE_URL}/research`
  }
};

export default function ResearchPage() {
  const researchArticles = [...RESEARCH_ARTICLES].sort(
    (first, second) =>
      new Date(second.publishedAt).getTime() -
      new Date(first.publishedAt).getTime()
  );
  const latestArticle = researchArticles[0];
  const earlierArticles = researchArticles.slice(1);

  return (
    <EditorialPage
      kicker="Research"
      title="Context before conviction."
      intro="Clear market structure, without unnecessary complexity."
      compactHero
    >
      <section className="research-index section section--ruled">
        <div className="section__inner">
          <div className="research-index__heading">
            <div>
              <p className="section-kicker">Latest research</p>
              <h2>Current research note</h2>
            </div>
            <p className="research-index__count">Newest first</p>
          </div>

          <Link
            className="research-feature"
            href={`/research/${latestArticle.slug}`}
            aria-label={`Read ${latestArticle.title}`}
          >
            <div className="research-feature__content">
              <div className="research-feature__meta">
                <span>{latestArticle.category}</span>
                <time dateTime={latestArticle.publishedAt}>
                  {latestArticle.displayDate}
                </time>
              </div>
              <h3>{latestArticle.title}</h3>
              <p>{latestArticle.excerpt}</p>
              <div className="research-feature__footer">
                <span>{latestArticle.author}</span>
                <span>{latestArticle.readingTime}</span>
                <strong>Read the note</strong>
              </div>
            </div>
            {latestArticle.slug === "why-markets-rally-despite-bad-news" ? (
              <MarketsRallyCover articleCover={false} />
            ) : (
              <ResearchCover articleNumber={latestArticle.noteNumber} />
            )}
          </Link>

          {earlierArticles.length > 0 ? (
            <section className="research-archive" aria-labelledby="earlier-research-title">
              <div className="research-archive__heading">
                <p className="section-kicker">Earlier research</p>
                <h2 id="earlier-research-title">Published notes</h2>
              </div>
              <ol>
                {earlierArticles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/research/${article.slug}`}>
                      <span className="research-archive__number">
                        Note {article.noteNumber}
                      </span>
                      <span className="research-archive__detail">
                        <span>
                          {article.category} / {article.displayDate}
                        </span>
                        <strong>{article.title}</strong>
                      </span>
                      <span className="research-archive__action">
                        {article.readingTime} / Read the note
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </div>
      </section>

      <section className="research-framework-section section section--ruled">
        <div className="section__inner research-framework">
          <div className="research-framework__intro">
            <p className="section-kicker">Research framework</p>
            <h2>Read the market as a system.</h2>
          </div>
          <ol className="research-framework__list">
            <li>
              <span>01</span>
              <div>
                <h3>Macro context</h3>
                <p>
                  Identify the economic conditions and cross-asset forces that
                  shape the broader market environment.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Market structure</h3>
                <p>
                  Examine the conditions, levels and mechanics that influence
                  how a market is behaving.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Liquidity and positioning</h3>
                <p>
                  Consider participation, liquidity and positioning alongside
                  price action rather than in isolation.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Risk and decision quality</h3>
                <p>
                  Frame every decision through risk, invalidation and the
                  quality of the process before execution.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="research-publication-standard section">
        <div className="section__inner editorial-grid">
          <div>
            <p className="section-kicker">Publication standard</p>
            <h2>Useful, dated and accountable.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Research notes identify their author, publication date, relevant
              sources and analytical scope. They are published to inform
              discussion, not to provide investment advice or promise a market
              outcome.
            </p>
            <p>
              This is the foundation for a growing library of market
              intelligence, maintained with the same emphasis on clarity and
              disciplined refinement that informs the broader Aeora ecosystem.
            </p>
            <div className="editorial-links">
              <Link href={`/research/${latestArticle.slug}`}>
                Read the latest research note
              </Link>
              <Link href="/#connect">Research collaboration enquiries</Link>
            </div>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}
