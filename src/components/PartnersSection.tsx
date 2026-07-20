import Image from "next/image";
import { PARTNER_GROUPS } from "@/lib/site";

export function PartnersSection() {
  return (
    <section
      className="partners section"
      aria-labelledby="partners-title"
    >
      <div className="section__inner partners__inner">
        <h2 id="partners-title" className="sr-only">
          Aeora Research partners
        </h2>
        {PARTNER_GROUPS.map((group) => (
          <section
            className={`partner-group partner-group--${group.id} reveal`}
            key={group.title}
          >
            <h3>{group.title}</h3>
            <ul className="partner-group__logos" aria-label={`${group.title} logos`}>
              {group.partners.map((partner) => {
                const logo = (
                  <Image
                    className="partner-logo__image"
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={44}
                    sizes="(max-width: 720px) 28vw, 14vw"
                  />
                );

                return (
                  <li
                    className={`partner-logo partner-logo--${partner.variant}`}
                    key={partner.name}
                  >
                    {"href" in partner ? (
                      <a
                        className="partner-logo__link"
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${partner.name} partner link in a new tab`}
                      >
                        {logo}
                      </a>
                    ) : (
                      logo
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
