"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const numberFormatter = new Intl.NumberFormat("en-US");

type PrizeCounterProps = {
  amount: number;
  className?: string;
  delay?: number;
  duration?: number;
  grand?: boolean;
};

export function PrizeCounter({
  amount,
  className = "",
  delay = 0,
  duration = 1200,
  grand = false
}: PrizeCounterProps) {
  const counterRef = useRef<HTMLElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const counter = counterRef.current;

    if (!counter || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;
    let startTimer = 0;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) {
          return;
        }

        hasStarted = true;
        observer.disconnect();
        startTimer = window.setTimeout(() => {
          const startTime = performance.now();
          const value = valueRef.current;

          if (!value) {
            return;
          }

          value.textContent = "0";
          setIsActive(true);

          const updateCounter = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            value.textContent = numberFormatter.format(
              Math.round(amount * easedProgress)
            );

            if (progress < 1) {
              animationFrame = window.requestAnimationFrame(updateCounter);
            }
          };

          animationFrame = window.requestAnimationFrame(updateCounter);
        }, delay);
      },
      { threshold: 0.55 }
    );

    observer.observe(counter);

    return () => {
      observer.disconnect();
      window.clearTimeout(startTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [amount, delay, duration]);

  const classes = [
    "wtc-prize-counter",
    grand ? "wtc-prize-counter--grand" : "",
    isActive ? "is-active" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");
  const style = {
    "--wtc-counter-duration": `${duration}ms`
  } as CSSProperties;

  return (
    <strong
      ref={counterRef}
      className={classes}
      style={style}
      aria-label={`USD ${numberFormatter.format(amount)}`}
    >
      <span className="wtc-prizes__currency" aria-hidden="true">
        USD
      </span>
      <span
        ref={valueRef}
        className="wtc-prize-counter__value"
        aria-hidden="true"
      >
        {numberFormatter.format(amount)}
      </span>
    </strong>
  );
}
