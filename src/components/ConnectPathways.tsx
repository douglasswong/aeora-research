"use client";

import { useEffect, useRef, useState } from "react";

type ConnectPathwaysProps = {
  pathways: readonly string[];
};

export function ConnectPathways({ pathways }: ConnectPathwaysProps) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [hasSequenced, setHasSequenced] = useState(false);

  useEffect(() => {
    const list = listRef.current;

    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasSequenced(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(list);

    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className="connect__pathways"
      aria-label="Enquiry pathways"
      data-sequenced={hasSequenced || undefined}
    >
      {pathways.map((pathway) => (
        <li key={pathway}>
          <span>{pathway}</span>
        </li>
      ))}
    </ul>
  );
}
