"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/site";
import { BrandLockup } from "@/components/BrandLockup";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="site-header__inner">
        <BrandLockup asLink compact />
        <nav className="site-nav" aria-label="Primary navigation">
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a
            className="site-nav__cta"
            href="#connect"
            aria-label="Go to Aeora Research contact section"
          >
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
