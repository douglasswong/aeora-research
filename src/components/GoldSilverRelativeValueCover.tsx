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
      <div className="gold-silver-cover__field" aria-hidden="true" />
      <div className="gold-silver-cover__content">
        <div className="gold-silver-cover__eyebrow">
          <span>Aeora Research / Relative value</span>
          <span>Research cutoff / 16 Nov 2026</span>
        </div>

        <div className="gold-silver-cover__headline">
          <span>G</span>
          <i>/</i>
          <span>S</span>
        </div>

        <div className="gold-silver-cover__ratio">
          <span>Gold-silver ratio</span>
          <strong>78.1</strong>
          <small>Spot reference / 13 Nov 2026, 9:50 a.m. ET</small>
        </div>

        <dl className="gold-silver-cover__metrics">
          <div>
            <dt>Gold</dt>
            <dd>$3,898.84</dd>
          </div>
          <div>
            <dt>Silver</dt>
            <dd>$49.91</dd>
          </div>
          <div>
            <dt>January ratio</dt>
            <dd>~43</dd>
          </div>
        </dl>
      </div>
      <figcaption>
        Original Aeora Research cover built from the Reuters spot-price snapshot
        of 13 November 2026 and the Silver Institute&apos;s January ratio context.
      </figcaption>
    </figure>
  );
}
