import type { Metadata } from "next";
import Image from "next/image";
import { EditorialPage } from "@/components/EditorialPage";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { SITE_URL, TEAM_MEMBERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team | Aeora Research",
  description:
    "Meet the leadership behind Aeora Research and its research-led approach to financial markets, prop desk development and market intelligence.",
  alternates: {
    canonical: "/team"
  },
  openGraph: {
    url: `${SITE_URL}/team`
  }
};

export default function TeamPage() {
  return (
    <EditorialPage
      kicker="Our Team"
      title="Built around disciplined market practice."
      intro="Aeora Research brings together research, trader development and specialist market practice with a long-term view of professional participation."
    >
      <section className="team-lead section section--ruled" aria-labelledby="leadership-title">
        <div className="section__inner team-lead__inner">
          <div className="team-lead__portrait">
            <span className="team-lead__index" aria-hidden="true">
              01
            </span>
            <Image
              className="team-lead__image"
              src="/team/douglas-wong.png"
              alt="Portrait of Douglas Wong"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 46vw"
            />
          </div>
          <article className="team-lead__content">
            <p className="section-kicker">Leadership</p>
            <p className="team-lead__role">Head of PropDesk &amp; Research</p>
            <h2 id="leadership-title">Douglas Wong</h2>
            <div className="team-lead__experience">
              <p className="team-lead__tenure">14 Years+ Market Experience</p>
              <p className="team-lead__summary">
                Douglas leads the work at the intersection of research, trader
                development and prop desk direction at Aeora Research. His
                experience spans FX, metals and cryptocurrencies, with a
                current focus on institutional volume execution within the
                futures commodities market.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="team-roster section" aria-labelledby="team-roster-title">
        <div className="section__inner">
          <div className="team-roster__heading">
            <p className="section-kicker">Team</p>
            <h2 id="team-roster-title">Distinct roles. Shared standards.</h2>
          </div>
          <div className="team-roster__grid">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard member={member} key={member.slug} />
            ))}
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}
