type ResearchCoverProps = {
  articleNumber: string;
  wide?: boolean;
};

export function ResearchCover({
  articleNumber,
  wide = false
}: ResearchCoverProps) {
  return (
    <figure
      className={`research-cover${wide ? " research-cover--wide" : ""}`}
    >
      <div className="research-cover__frame" aria-hidden="true">
        <div className="research-cover__topline">
          <span>AEORA / PRODUCT NOTE {articleNumber}</span>
          <span>SSF / 2026</span>
        </div>

        <div className="research-cover__signal">
          <span className="research-cover__signal-label">
            Single-name exposure
          </span>
          <span className="research-cover__signal-line" />
          <span className="research-cover__signal-code">01 / CME</span>
        </div>

        <div className="research-cover__matrix">
          <div>
            <span>Standard</span>
            <strong>100x</strong>
            <small>Underlying share exposure</small>
          </div>
          <div>
            <span>Micro</span>
            <strong>10x</strong>
            <small>Underlying share exposure</small>
          </div>
        </div>

        <div className="research-cover__footer">
          <span>USD financial settlement</span>
          <span>Quarterly expiry</span>
        </div>
      </div>
      <figcaption>Standard and Micro contract structure</figcaption>
    </figure>
  );
}
