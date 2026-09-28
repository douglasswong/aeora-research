"use client";

import { useEffect } from "react";

type ScrollRevealControllerProps = {
  rootSelector: string;
  revealSelectors: readonly string[];
  rootDataKey?: string;
  revealDataKey?: string;
  delayVariable?: string;
};

function isInViewport(target: HTMLElement) {
  const bounds = target.getBoundingClientRect();

  return bounds.bottom > 0 && bounds.top < window.innerHeight * 1.06;
}

export function ScrollRevealController({
  rootSelector,
  revealSelectors,
  rootDataKey = "pageMotion",
  revealDataKey = "pageReveal",
  delayVariable = "--page-reveal-delay"
}: ScrollRevealControllerProps) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(rootSelector);

    if (!root) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.dataset[rootDataKey] = "reduced";
      return;
    }

    const targets: HTMLElement[] = [];

    for (const selector of revealSelectors) {
      for (const target of root.querySelectorAll<HTMLElement>(selector)) {
        if (!targets.includes(target)) {
          targets.push(target);
        }
      }
    }

    if (!targets.length) {
      return;
    }

    let observer: IntersectionObserver | undefined;
    let visibilityFrame = 0;

    const reveal = (target: HTMLElement) => {
      if (target.dataset[revealDataKey] !== "revealed") {
        target.dataset[revealDataKey] = "revealed";
      }

      observer?.unobserve(target);
    };

    const revealVisibleTargets = () => {
      for (const target of targets) {
        if (target.dataset[revealDataKey] === "pending" && isInViewport(target)) {
          reveal(target);
        }
      }
    };

    const scheduleVisibilityCheck = () => {
      if (visibilityFrame) {
        return;
      }

      visibilityFrame = window.requestAnimationFrame(() => {
        visibilityFrame = 0;
        revealVisibleTargets();
      });
    };

    const observePendingTargets = () => {
      observer?.disconnect();

      if (!("IntersectionObserver" in window)) {
        scheduleVisibilityCheck();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
            }
          }
        },
        {
          rootMargin: "0px 0px -6% 0px",
          threshold: 0.02
        }
      );

      for (const target of targets) {
        if (target.dataset[revealDataKey] === "pending") {
          observer.observe(target);
        }
      }
    };

    for (const [index, target] of targets.entries()) {
      target.dataset[revealDataKey] = "pending";
      target.style.setProperty(delayVariable, `${(index % 4) * 70}ms`);
    }

    root.dataset[rootDataKey] = "observer";
    observePendingTargets();
    scheduleVisibilityCheck();

    const recoverVisibility = () => {
      observePendingTargets();
      scheduleVisibilityCheck();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        recoverVisibility();
      }
    };

    window.addEventListener("scroll", scheduleVisibilityCheck, { passive: true });
    window.addEventListener("resize", scheduleVisibilityCheck);
    window.addEventListener("pageshow", recoverVisibility);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", scheduleVisibilityCheck);
      window.removeEventListener("resize", scheduleVisibilityCheck);
      window.removeEventListener("pageshow", recoverVisibility);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer?.disconnect();

      if (visibilityFrame) {
        window.cancelAnimationFrame(visibilityFrame);
      }
    };
  }, [delayVariable, revealDataKey, revealSelectors, rootDataKey, rootSelector]);

  return null;
}
