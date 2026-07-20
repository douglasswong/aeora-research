import Image from "next/image";
import type { TeamMember } from "@/lib/site";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className={`team-member team-member--${member.slug}`}>
      <div className="team-member__portrait">
        <span className="team-member__index" aria-hidden="true">
          {member.index}
        </span>
        <Image
          className="team-member__image"
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 980px) 30vw, 25vw"
        />
      </div>
      <div className="team-member__details">
        <p>{member.role}</p>
        <h3>{member.name}</h3>
      </div>
    </article>
  );
}
