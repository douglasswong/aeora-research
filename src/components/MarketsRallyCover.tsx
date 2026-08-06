import Image from "next/image";

type MarketsRallyCoverProps = {
  articleCover?: boolean;
};

export function MarketsRallyCover({
  articleCover = true
}: MarketsRallyCoverProps) {
  return (
    <figure
      className="market-rally-cover"
      id={articleCover ? "article-cover" : undefined}
    >
      <div className="market-rally-cover__image-wrap">
        <Image
          src="/research/why-markets-rally-despite-bad-news-aeora-research.webp"
          alt="Equity markets rally despite geopolitical risks, high interest rates and negative economic headlines"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="market-rally-cover__label">
          <span>Aeora / Market Intelligence</span>
          <strong>
            Markets rally.
            <br />
            Risks remain.
          </strong>
          <small>Expectations / earnings / positioning</small>
        </div>
      </div>
      <figcaption>
        Markets react to changes in expectations, not simply to whether the
        latest headline appears positive or negative.
      </figcaption>
    </figure>
  );
}
