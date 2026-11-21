import Image from "next/image";

type AiMarketResetCoverProps = {
  articleCover?: boolean;
};

export function AiMarketResetCover({
  articleCover = true
}: AiMarketResetCoverProps) {
  return (
    <figure
      className="ai-market-cover"
      id={articleCover ? "article-cover" : undefined}
      aria-label="Data-centre infrastructure and market-repricing editorial image"
    >
      <div className="ai-market-cover__media">
        <Image
          src="/research/ai-market-reset-data-centre-cover-november-2026.png"
          alt="Editorial image of a data-centre aisle with server racks and a subtle market display reflection"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="ai-market-cover__label">
          <span>Aeora Research / Market reset</span>
          <strong>AI / CAPEX</strong>
          <p>Investment cycle, valuation and cash-flow test</p>
          <small>Research cutoff / 21 Nov 2026</small>
        </div>
      </div>
      <figcaption>
        Original editorial image for this research note. It is illustrative and
        does not depict a specific company, facility or market event.
      </figcaption>
    </figure>
  );
}
