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
              {group.partners.map((partner) => (
                <li
                  className={`partner-logo partner-logo--${partner.variant}`}
                  key={partner.name}
                >
                  <Image
                    className="partner-logo__image"
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={44}
                    sizes="(max-width: 720px) 28vw, 14vw"
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
