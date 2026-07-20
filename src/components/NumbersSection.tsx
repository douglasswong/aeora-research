"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { NUMBERS } from "@/lib/site";

const DURATION_MS = 4000;

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * Math.pow(progress, 3)
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function formatNumber(item: (typeof NUMBERS)[number], progress: number) {
  if (item.kind === "range") {
    const from = Math.round(item.from * progress);
    const to = Math.round(item.to * progress);

    return { value: `${from}-${to}`, suffix: item.suffix };
  }

  if (item.kind === "decimal") {
    return { value: (item.value * progress).toFixed(1), suffix: item.suffix };
  }

  return { value: `${Math.round(item.value * progress)}`, suffix: item.suffix };
}

export function NumbersSection() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasPlayedRef = useRef(false);
  const displayProgress = useMemo(() => easeInOutCubic(progress), [progress]);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const frameId = requestAnimationFrame(() => setProgress(1));

      return () => cancelAnimationFrame(frameId);
    }

    const animate = () => {
      if (hasPlayedRef.current) {
        return;
      }

      hasPlayedRef.current = true;
      const startedAt = performance.now();

      const frame = (now: number) => {
        const nextProgress = Math.min((now - startedAt) / DURATION_MS, 1);
        setProgress(nextProgress);

        if (nextProgress < 1) {
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="numbers section section--ruled"
      aria-labelledby="numbers-title"
    >
      <div className="section__inner numbers__inner">
        <div className="numbers__intro reveal">
          <p className="section-kicker">Numbers</p>
          <h2 id="numbers-title">Measured growth, disciplined scale.</h2>
        </div>
        <div className="numbers__grid">
          {NUMBERS.map((item) => {
            const formatted = formatNumber(item, displayProgress);

            return (
              <article className="numbers__item reveal" key={item.label}>
                <p>{item.label}</p>
                {"context" in item ? (
                  <span className="numbers__context">{item.context}</span>
                ) : null}
                <strong>
                  <span className="numbers__value-main">
                    {formatted.value}
                  </span>
                  <span className="numbers__value-suffix">
                    {formatted.suffix}
                  </span>
                </strong>
                {"note" in item ? (
                  <span className="numbers__note">{item.note}</span>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
