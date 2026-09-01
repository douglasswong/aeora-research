import Image from "next/image";

type WarshFedQ42026CoverProps = {
  articleCover?: boolean;
};

export function WarshFedQ42026Cover({
  articleCover = true
}: WarshFedQ42026CoverProps) {
  return (
    <figure
      className="warsh-fed-cover"
      id={articleCover ? "article-cover" : undefined}
    >
      <div className="warsh-fed-cover__media">
        <Image
          src="/research/warsh-fed-usd-policy-repricing-q4-2026-v2.png"
          alt="Overlapping U.S. 100-dollar banknotes on a dark surface"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 1200px"
        />
        <div className="warsh-fed-cover__label">
          <span>Aeora Research</span>
          <strong>USD / policy repricing</strong>
          <small>Cross-asset outlook / Q4 2026</small>
        </div>
      </div>
      <figcaption>
        Dollar strength, rate expectations and liquidity conditions are back at
        the centre of the Q4 cross-asset discussion.
      </figcaption>
    </figure>
  );
}
