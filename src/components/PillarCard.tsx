import type { PILLARS } from "@/lib/site";

type Pillar = (typeof PILLARS)[number];

type PillarCardProps = {
  pillar: Pillar;
};

export function PillarCard({ pillar }: PillarCardProps) {
  return (
    <article className="pillar-card reveal">
      <div className="pillar-card__topline">
        <span>{pillar.eyebrow}</span>
        <span className="pillar-card__rule" aria-hidden="true" />
      </div>
      <h3>{pillar.title}</h3>
      <p>{pillar.copy}</p>
    </article>
  );
}
