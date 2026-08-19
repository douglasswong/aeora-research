import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ResearchCover } from "@/components/ResearchCover";
import { SiteFooter } from "@/components/SiteFooter";
import type { ResearchArticle } from "@/lib/research";
import { SITE_URL } from "@/lib/site";

type ResearchSource = {
  label: string;
  href: string;
};

type ResearchArticleLayoutProps = {
  article: ResearchArticle;
  keyPoints: readonly string[];
  sources: readonly ResearchSource[];
  cover?: ReactNode;
  headline?: ReactNode;
  children: ReactNode;
};

export function ResearchArticleLayout({
  article,
  keyPoints,
  sources,
  cover,
  headline,
  children
}: ResearchArticleLayoutProps) {
  const articleUrl = `${SITE_URL}/research/${article.slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedShareText = encodeURIComponent(
    `${article.title} | Aeora Research`
  );
  const sourceSplitIndex = Math.min(6, sources.length);
  const sourceColumns =
    sources.length > sourceSplitIndex
      ? [sources.slice(0, sourceSplitIndex), sources.slice(sourceSplitIndex)]
      : [sources];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell">
        <Header />
        <main id="main" className="research-article">
          <article>
            <header className="research-article__header section">
              <div className="section__inner">
                {article.draft ? (
                  <p className="research-article__draft-status">
                    Editorial draft / not published
                  </p>
                ) : null}
                <nav
                  className="research-breadcrumb"
                  aria-label="Breadcrumb"
                >
                  <Link href="/research">Research</Link>
                  <span aria-hidden="true">/</span>
                  <span>{article.category}</span>
                </nav>

                <p className="section-kicker">Research note {article.noteNumber}</p>
                <h1>{headline ?? article.title}</h1>
                <p className="research-article__description">
                  {article.description}
                </p>

                <dl className="research-article__meta">
                  <div>
                    <dt>{article.draft ? "Draft prepared" : "Published"}</dt>
                    <dd>
                      <time dateTime={article.publishedAt}>
                        {article.displayDate}
                      </time>
                    </dd>
                  </div>
                  <div>
                    <dt>Author</dt>
                    <dd>{article.author}</dd>
                  </div>
                  <div>
                    <dt>Reading time</dt>
                    <dd>{article.readingTime}</dd>
                  </div>
                </dl>
              </div>
            </header>

            <div className="section__inner research-article__visual">
              {cover ?? <ResearchCover articleNumber={article.noteNumber} wide />}
            </div>

            <div className="section__inner research-article__layout">
              <aside className="research-article__summary">
                <p className="section-kicker">In brief</p>
                <ol>
                  {keyPoints.map((point, index) => (
                    <li key={point}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ol>
              </aside>

              <div className="research-article__body">{children}</div>
            </div>

            <section
              className="research-article__sources section section--ruled"
              aria-labelledby="research-sources-title"
            >
              <div className="section__inner research-article__sources-inner">
                <div>
                  <p className="section-kicker">Reference desk</p>
                  <h2 id="research-sources-title">Sources and further reading</h2>
                </div>
                <div
                  className={`research-article__source-lists${
                    sourceColumns.length > 1
                      ? " research-article__source-lists--split"
                      : ""
                  }`}
                >
                  {sourceColumns.map((column, columnIndex) => (
                    <ol key={columnIndex}>
                      {column.map((source, index) => {
                        const sourceNumber =
                          (columnIndex === 0 ? 0 : sourceSplitIndex) + index + 1;

                        return (
                          <li key={source.href}>
                            <a
                              href={source.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span aria-hidden="true">
                                {String(sourceNumber).padStart(2, "0")}
                              </span>
                              <span>{source.label}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  ))}
                </div>
              </div>
            </section>

            <footer className="research-article__footer section">
              <div className="section__inner">
                <div className="research-article__disclaimer">
                  <p className="section-kicker">Important information</p>
                  <p>
                    This article is for general informational, research and
                    educational purposes only. It is not investment advice, a
                    recommendation, a trade signal or a guarantee of
                    performance. Futures and derivatives involve substantial
                    risk and may not be suitable for every individual.
                  </p>
                </div>

                <div className="research-article__actions">
                  <p>Share this research note</p>
                  <div>
                    <a
                      href={`https://wa.me/?text=${encodedShareText}%20${encodedUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Share this research note on WhatsApp"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Share this research note on Facebook"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Share this research note on LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <Link className="research-article__back" href="/research">
                  Return to all research
                </Link>
              </div>
            </footer>
          </article>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
