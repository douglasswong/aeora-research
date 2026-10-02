import Link from "next/link";
import type { AuthorityResource } from "@/lib/seo-authority";

type MalaysiaTradingAuthorityArticleProps = {
  resource: AuthorityResource;
};

export function MalaysiaTradingAuthorityArticle({
  resource
}: MalaysiaTradingAuthorityArticleProps) {
  return (
    <>
      <p className="research-article__lede">{resource.excerpt}</p>

      {resource.sections.map((section) => (
        <section key={section.title}>
          <p className="research-article__section-number">{section.eyebrow}</p>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {section.bullets ? (
            <ul className="research-article__checklist authority-article__checklist">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          {section.table ? (
            <div className="authority-article__table-wrap">
              <table className="authority-article__table">
                <caption>{section.table.caption}</caption>
                <thead>
                  <tr>
                    {section.table.headers.map((header) => (
                      <th key={header} scope="col">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.join("-")}>
                      {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {section.callout ? (
            <aside className="research-article__callout authority-article__callout">
              <strong>{section.callout.title}</strong>
              <p>{section.callout.copy}</p>
            </aside>
          ) : null}
        </section>
      ))}

      <section className="authority-article__faq" aria-labelledby="resource-faq-title">
        <p className="research-article__section-number">Further questions</p>
        <h2 id="resource-faq-title">A practical FAQ.</h2>
        <div>
          {resource.faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="authority-article__related" aria-labelledby="resource-related-title">
        <p className="research-article__section-number">Related reading</p>
        <h2 id="resource-related-title">Keep the context connected.</h2>
        <div>
          {resource.relatedLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <span>{link.label}</span>
              <small>{link.description}</small>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
