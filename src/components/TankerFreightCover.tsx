import Image from "next/image";

type TankerFreightCoverProps = {
  articleCover?: boolean;
};

export function TankerFreightCover({
  articleCover = true
}: TankerFreightCoverProps) {
  return (
    <figure
      className="tanker-freight-cover"
      id={articleCover ? "article-cover" : undefined}
    >
      <div className="tanker-freight-cover__media">
        <Image
          src="/research/tanker-freight-oil-market-october-2026.png"
          alt="Illustrative crude-oil tanker moving through open water"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="tanker-freight-cover__label">
          <span>Aeora Research / Commodities &amp; Macro</span>
          <strong>The delivered barrel</strong>
          <small>Security / route / cost</small>
        </div>
      </div>
      <figcaption>
        Original illustrative tanker image for this research note. The analysis
        considers how route risk, vessel availability, insurance and refinery
        economics affect the delivered barrel.
      </figcaption>
    </figure>
  );
}
