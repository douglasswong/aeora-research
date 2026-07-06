const SLIDES = [
  { index: "01", label: "Prop Desk", meta: "Discipline" },
  { index: "02", label: "Market Intelligence", meta: "Context" },
  { index: "03", label: "Edge", meta: "Process" }
] as const;

export function ParallaxSlider() {
  return (
    <div className="parallax-slider" aria-hidden="true">
      <div className="parallax-slider__axis">
        <span />
        <span />
      </div>
      <div className="parallax-slider__track">
        {SLIDES.map((slide) => (
          <div className="parallax-slider__panel" key={slide.index}>
            <span>{slide.index}</span>
            <strong>{slide.label}</strong>
            <em>{slide.meta}</em>
          </div>
        ))}
      </div>
    </div>
  );
}
