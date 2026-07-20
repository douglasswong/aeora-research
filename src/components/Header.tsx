"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, TEAM_NAV_ITEM } from "@/lib/site";
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
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href={TEAM_NAV_ITEM.href}>{TEAM_NAV_ITEM.label}</Link>
            </li>
          </ul>
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
