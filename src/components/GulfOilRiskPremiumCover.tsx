import Image from "next/image";

type GulfOilRiskPremiumCoverProps = {
  articleCover?: boolean;
};

export function GulfOilRiskPremiumCover({
  articleCover = true
}: GulfOilRiskPremiumCoverProps) {
  return (
    <figure
      className="gulf-oil-cover"
      id={articleCover ? "article-cover" : undefined}
    >
      <div className="gulf-oil-cover__media">
        <Image
          src="/research/gulf-exports-brent-risk-premium-september-2026.png"
          alt="Illustrative aerial view of a crude-oil tanker moving through open Gulf waters"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="gulf-oil-cover__label">
          <span>Aeora Research / Commodities &amp; Macro</span>
          <strong>Crude flow / resilience risk</strong>
          <small>Gulf export recovery, September 2026</small>
        </div>
      </div>
      <figcaption>
        Illustrative tanker photograph. The research note focuses on the
        market mechanisms behind reported export, refining and shipping risk.
      </figcaption>
    </figure>
  );
}
