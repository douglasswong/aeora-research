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
      id={wide ? "article-cover" : undefined}
      className={`research-cover${wide ? " research-cover--wide" : ""}`}
    >
      <div className="research-cover__frame" aria-hidden="true">
        <div className="research-cover__topline">
          <span>AEORA / PRODUCT NOTE {articleNumber}</span>
          <span>Independent explainer</span>
        </div>

        <div className="research-cover__headline">
          <div className="research-cover__cme">
            <strong>CME</strong>
            <span>Equity derivatives</span>
          </div>

          <div className="research-cover__title">
            <span>Single Stock Futures</span>
            <strong>A beginner&apos;s guide</strong>
            <small>Market structure / contract mechanics / risk</small>
          </div>
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
          <span>USD financial settlement / quarterly expiry</span>
          <span>Not affiliated with or endorsed by CME Group</span>
        </div>
      </div>
      <figcaption>
        Independent AEORA Research guide to CME Single Stock Futures
      </figcaption>
    </figure>
  );
}
