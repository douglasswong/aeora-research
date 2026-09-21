"use client";

import { useEffect, useRef, useState } from "react";

type ConnectPathwaysProps = {
  pathways: readonly string[];
  contactHref: string;
};

export function ConnectPathways({ pathways, contactHref }: ConnectPathwaysProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [hasSequenced, setHasSequenced] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

    observer.observe(panel);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={panelRef}
      className="connect__pathway-stack"
      data-sequenced={hasSequenced || undefined}
    >
      <ul className="connect__pathways" aria-label="Enquiry pathways">
        {pathways.map((pathway) => (
          <li key={pathway}>
            <span>{pathway}</span>
          </li>
        ))}
      </ul>
      <a className="button button--primary connect__cta" href={contactHref}>
        Connect with Aeora
      </a>
    </div>
  );
}
