import Image from "next/image";

type GoldSilverRelativeValueCoverProps = {
  articleCover?: boolean;
};

export function GoldSilverRelativeValueCover({
  articleCover = true
}: GoldSilverRelativeValueCoverProps) {
  return (
    <figure
      className="gold-silver-cover"
      id={articleCover ? "article-cover" : undefined}
      aria-label="Gold and silver relative-value snapshot"
    >
      <div className="gold-silver-cover__media">
        <Image
          src="/research/gold-silver-relative-value-photo-2026.png"
          alt="Illustrative gold and silver bullion arranged on a dark surface"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="gold-silver-cover__label">
          <span>Aeora Research / Relative value</span>
          <strong>G/S</strong>
          <p>Gold-silver ratio / 78.1</p>
          <small>Research cutoff / 16 Nov 2026</small>
        </div>
      </div>
      <figcaption>
        Original illustrative image for this research note. It does not depict a
        specific holding, venue or market event.
      </figcaption>
    </figure>
  );
}
