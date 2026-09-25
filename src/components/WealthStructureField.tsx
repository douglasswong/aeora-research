const STAGES = [
  { index: "01", label: "Earn", detail: "Experience" },
  { index: "02", label: "Preserve", detail: "Discipline" },
  { index: "03", label: "Allocate", detail: "Structure" },
  { index: "04", label: "Build", detail: "Capability" }
] as const;

export function WealthStructureField() {
  return (
    <div className="wealth-structure-field" aria-hidden="true">
      <div className="wealth-structure-field__grid" />
      <div className="wealth-structure-field__header">
        <span>D&amp;G / consultation</span>
        <span>Founded 2020</span>
      </div>
      <div className="wealth-structure-field__path">
        {STAGES.map((stage, index) => (
          <div className={`wealth-structure-field__stage wealth-structure-field__stage--${index + 1}`} key={stage.index}>
            <span>{stage.index}</span>
            <strong>{stage.label}</strong>
            <em>{stage.detail}</em>
          </div>
        ))}
      </div>
      <div className="wealth-structure-field__axis" />
      <div className="wealth-structure-field__allocation">
        <span>Experience</span>
        <i />
        <span>Structure</span>
        <i />
        <span>Capability</span>
        <i />
        <span>Long term</span>
      </div>
      <span className="wealth-structure-field__signal wealth-structure-field__signal--one" />
      <span className="wealth-structure-field__signal wealth-structure-field__signal--two" />
    </div>
  );
}
