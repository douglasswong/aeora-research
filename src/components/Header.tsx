"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HEADER_NAV_ITEMS,
  RESEARCH_NAV_ITEM,
  TEAM_NAV_ITEM,
  TRADER_DEVELOPMENT_NAV_ITEM
} from "@/lib/site";
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
          <div className="site-nav__groups">
            <ul
              className="site-nav__group site-nav__group--company"
              aria-label="Company sections"
            >
              {HEADER_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href={TEAM_NAV_ITEM.href}>{TEAM_NAV_ITEM.label}</Link>
              </li>
            </ul>

            <ul
              className="site-nav__group site-nav__group--development"
              aria-label="Trader development"
            >
              <li>
                <Link
                  href={TRADER_DEVELOPMENT_NAV_ITEM.href}
                  aria-label="Aeora Trader Development"
                >
                  <span className="site-nav__label--full">
                    {TRADER_DEVELOPMENT_NAV_ITEM.label}
                  </span>
                  <span className="site-nav__label--compact" aria-hidden="true">
                    {TRADER_DEVELOPMENT_NAV_ITEM.compactLabel}
                  </span>
                  <span className="site-nav__label--narrow" aria-hidden="true">
                    {TRADER_DEVELOPMENT_NAV_ITEM.narrowLabel}
                  </span>
                </Link>
              </li>
            </ul>

            <ul
              className="site-nav__group site-nav__group--research"
              aria-label="Research"
            >
              <li>
                <Link href={RESEARCH_NAV_ITEM.href}>
                  {RESEARCH_NAV_ITEM.label}
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="site-nav__cta"
            href="/#connect"
            aria-label="Go to Aeora Research contact section"
          >
            Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
