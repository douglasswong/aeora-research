import Image from "next/image";

type CrudeOilCrossroadsCoverProps = {
  articleCover?: boolean;
  visualBrief?: boolean;
};

export function CrudeOilCrossroadsCover({
  articleCover = true,
  visualBrief = false
}: CrudeOilCrossroadsCoverProps) {
  return (
    <figure
      className="crude-oil-crossroads-cover"
      id={articleCover ? "article-cover" : undefined}
    >
      <div className="crude-oil-crossroads-cover__media">
        <Image
          src="/research/crude-oil-crossroads-physical-markets-november-2026.png"
          alt="Original illustrative aerial view of a crude-oil tanker moving through open water"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="crude-oil-crossroads-cover__label">
          <span>Aeora Research / Commodities &amp; Macro</span>
          <strong>
            {visualBrief ? "Visual briefing / market structure" : "Physical market / futures curve"}
          </strong>
          <small>Research cutoff: 3 November 2026</small>
        </div>
      </div>
      <figcaption>
        Original illustrative image for this research note. It does not depict
        a particular vessel, route, terminal or market event.
      </figcaption>
    </figure>
  );
}
