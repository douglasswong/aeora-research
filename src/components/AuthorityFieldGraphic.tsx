type AuthorityFieldGraphicProps = {
  label: string;
  tags: readonly string[];
};

export function AuthorityFieldGraphic({
  label,
  tags
}: AuthorityFieldGraphicProps) {
  return (
    <div className="authority-field" aria-hidden="true">
      <div className="authority-field__grid" />
      <div className="authority-field__topline">
        <span>Aeora Research / Field guide</span>
        <span>Malaysia</span>
      </div>
      <div className="authority-field__signal authority-field__signal--one" />
      <div className="authority-field__signal authority-field__signal--two" />
      <div className="authority-field__core">
        <span>01</span>
        <strong>{label}</strong>
        <small>Context before conviction</small>
      </div>
      <ol className="authority-field__tags">
        {tags.map((tag, index) => (
          <li key={tag}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {tag}
          </li>
        ))}
      </ol>
    </div>
  );
}
