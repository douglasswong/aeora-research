"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ABOUT_NAV_ITEM,
  EVENT_NAV_ITEM,
  HOME_NAV_ITEM,
  OTHER_SERVICES_NAV_ITEM,
  RESEARCH_NAV_ITEM,
  TEAM_NAV_ITEM,
  TRADER_DEVELOPMENT_NAV_ITEM
} from "@/lib/site";
import { BrandLockup } from "@/components/BrandLockup";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div
            id="primary-navigation-links"
            className={`site-nav__groups${isMenuOpen ? " site-nav__groups--open" : ""}`}
          >
            <ul
              className="site-nav__group site-nav__group--company"
              aria-label="Company sections"
            >
              <li>
                <Link href={HOME_NAV_ITEM.href}>{HOME_NAV_ITEM.label}</Link>
              </li>
              <li>
                <Link href={ABOUT_NAV_ITEM.href}>{ABOUT_NAV_ITEM.label}</Link>
              </li>
              <li>
                <Link href={TEAM_NAV_ITEM.href}>{TEAM_NAV_ITEM.label}</Link>
              </li>
            </ul>

            <ul
              className="site-nav__group site-nav__group--development"
              aria-label="Research and trader development"
            >
              <li>
                <Link href={RESEARCH_NAV_ITEM.href}>
                  {RESEARCH_NAV_ITEM.label}
                </Link>
              </li>
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
              className="site-nav__group site-nav__group--event"
              aria-label="Events"
            >
              <li>
                <Link href={EVENT_NAV_ITEM.href}>{EVENT_NAV_ITEM.label}</Link>
              </li>
            </ul>

            <ul
              className="site-nav__group site-nav__group--services"
              aria-label="Other services"
            >
              <li>
                <Link href={OTHER_SERVICES_NAV_ITEM.href}>
                  {OTHER_SERVICES_NAV_ITEM.label}
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="site-nav__toggle"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="primary-navigation-links"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
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
