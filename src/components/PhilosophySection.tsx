"use client";

import { useEffect, useRef, useState } from "react";

const PRINCIPLES = ["Context.", "Structure.", "Risk.", "Conviction."];

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasSequenced, setHasSequenced] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasSequenced(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="philosophy section"
      aria-labelledby="philosophy-title"
      data-sequenced={hasSequenced || undefined}
    >
      <div className="section__inner philosophy__inner">
        <div className="philosophy__copy">
          <p className="section-kicker section-kicker--dark">Philosophy</p>
          <h2 id="philosophy-title">Research First.</h2>
          <p>Every position begins before execution.</p>
        </div>
        <div className="philosophy__terms" aria-label="Core principles">
          {PRINCIPLES.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
