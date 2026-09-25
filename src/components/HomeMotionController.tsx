"use client";

import { useEffect } from "react";

const REVEAL_SELECTORS = [
  ".positioning__inner",
  ".pillars .section-heading",
  ".pillars .pillar-card",
  ".about .section-heading",
  ".about__body",
  ".connect__intro",
  ".connect__panel",
  ".partner-group"
] as const;

export function HomeMotionController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".home-page");

    if (!root) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.dataset.homeMotion = "reduced";
      return;
    }

    const targets = REVEAL_SELECTORS.flatMap((selector) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector))
    );

    root.dataset.homeMotion = "observer";

    for (const [index, target] of targets.entries()) {
      target.dataset.homeReveal = "pending";
      target.style.setProperty("--home-reveal-delay", `${(index % 4) * 70}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const target = entry.target as HTMLElement;
          target.dataset.homeReveal = "revealed";
          observer.unobserve(target);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
