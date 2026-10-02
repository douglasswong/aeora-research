type AuthorityResearchCoverProps = {
  articleNumber: string;
  category: string;
  title: string;
};

export function AuthorityResearchCover({
  articleNumber,
  category,
  title
}: AuthorityResearchCoverProps) {
  return (
    <figure className="authority-research-cover">
      <div className="authority-research-cover__grid" aria-hidden="true" />
      <div className="authority-research-cover__topline">
        <span>Aeora / Field guide {articleNumber}</span>
        <span>{category}</span>
      </div>
      <div className="authority-research-cover__title">
        <span>Market practice</span>
        <strong>{title}</strong>
      </div>
      <div className="authority-research-cover__matrix" aria-hidden="true">
        <span>Context</span>
        <span>Process</span>
        <span>Risk</span>
        <span>Review</span>
      </div>
      <figcaption>Educational reference from Aeora Research</figcaption>
    </figure>
  );
}
