import Link from "next/link";
import { Header } from "@/components/Header";
import { AuthorityFieldGraphic } from "@/components/AuthorityFieldGraphic";
import { SiteFooter } from "@/components/SiteFooter";
import type { AuthorityPillar } from "@/lib/seo-authority";
import { SITE_URL } from "@/lib/site";

type AuthorityPillarPageProps = {
  pillar: AuthorityPillar;
};

export function AuthorityPillarPage({ pillar }: AuthorityPillarPageProps) {
  const pillarUrl = `${SITE_URL}/${pillar.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pillar.title,
          item: pillarUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pillar.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell authority-page">
        <Header />
        <main id="main">
          <section className="authority-hero" aria-labelledby="authority-title">
            <div className="section__inner authority-hero__inner">
              <div className="authority-hero__content">
                <nav className="authority-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>
                  <span>{pillar.title}</span>
                </nav>
                <p className="section-kicker">{pillar.kicker}</p>
                <h1 id="authority-title">{pillar.title}</h1>
                <p className="authority-hero__description">{pillar.description}</p>
                <p className="authority-hero__introduction">{pillar.introduction}</p>
              </div>
              <AuthorityFieldGraphic
                label={pillar.fieldLabel}
                tags={pillar.fieldTags}
              />
            </div>
          </section>

          <section className="authority-definition section section--ruled" aria-labelledby="authority-definition-title">
            <div className="section__inner authority-definition__inner">
              <div>
                <p className="section-kicker">Scope and boundary</p>
                <h2 id="authority-definition-title">A clear definition before a claim.</h2>
              </div>
              <p>{pillar.definition}</p>
            </div>
          </section>

          <section className="authority-explainer section" aria-labelledby="authority-explainer-title">
            <div className="section__inner">
              <div className="authority-explainer__heading">
                <p className="section-kicker">The guide</p>
                <h2 id="authority-explainer-title">Build the language around the work.</h2>
              </div>
              <div className="authority-explainer__sections">
                {pillar.sections.map((section) => (
                  <article key={section.title}>
                    <p className="authority-explainer__eyebrow">{section.eyebrow}</p>
                    <h3>{section.title}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="authority-principles section section--ruled" aria-labelledby="authority-principles-title">
            <div className="section__inner">
              <div className="authority-principles__heading">
                <p className="section-kicker">Working principles</p>
                <h2 id="authority-principles-title">A more deliberate trading process.</h2>
              </div>
              <ol className="authority-principles__grid">
                {pillar.principles.map((principle) => (
                  <li key={principle.number}>
                    <span>{principle.number}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="authority-faq section" aria-labelledby="authority-faq-title">
            <div className="section__inner authority-faq__inner">
              <div>
                <p className="section-kicker">FAQ</p>
                <h2 id="authority-faq-title">Questions worth answering plainly.</h2>
              </div>
              <div className="authority-faq__list">
                {pillar.faqs.map((faq, index) => (
                  <details key={faq.question}>
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {faq.question}
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="authority-related section section--ruled" aria-labelledby="authority-related-title">
            <div className="section__inner">
              <div className="authority-related__heading">
                <p className="section-kicker">Continue the reading</p>
                <h2 id="authority-related-title">Useful next references.</h2>
              </div>
              <div className="authority-related__grid">
                {pillar.relatedLinks.map((link, index) => (
                  <Link href={link.href} key={link.href}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{link.label}</h3>
                    <p>{link.description}</p>
                    <strong>Read more</strong>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
