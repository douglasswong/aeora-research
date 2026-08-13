import Image from "next/image";

type SawitEcoThermCoverProps = {
  articleCover?: boolean;
};

export function SawitEcoThermCover({
  articleCover = true
}: SawitEcoThermCoverProps) {
  return (
    <figure
      className={`sawit-cover${articleCover ? " sawit-cover--wide" : ""}`}
      id={articleCover ? "article-cover" : undefined}
    >
      <div className="sawit-cover__image-wrap">
        <Image
          src="/research/sawit-ecotherm-ai-data-centre-fcpo.webp"
          alt="Aeora Research visualising palm-based coolant moving through high-performance data-centre infrastructure"
          fill
          priority={articleCover}
          sizes={articleCover ? "(max-width: 720px) 100vw, 1200px" : "(max-width: 720px) 100vw, 680px"}
        />
        <div className="sawit-cover__label" aria-hidden="true">
          <span>Aeora / Market intelligence</span>
          <strong>
            Palm oil.
            <br />
            AI cooling.
          </strong>
          <small>Innovation / adoption / FCPO relevance</small>
        </div>
      </div>
      <figcaption>
        Sawit EcoTherm places a palm-based coolant at the beginning of a much
        longer commercial and commodity-demand chain.
      </figcaption>
    </figure>
  );
}
