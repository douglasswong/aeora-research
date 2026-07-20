import { BrandLockup } from "@/components/BrandLockup";
import Link from "next/link";
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  CONTACT_EMAIL,
  FOOTER_NAV_ITEMS,
  HOTLINE_PHONE,
  MAP_EMBED_URL,
  OFFICE_PHONE,
  SOCIAL_CHANNELS
} from "@/lib/site";

const currentYear = new Date().getFullYear();

type SocialChannel = (typeof SOCIAL_CHANNELS)[number];

function SocialIcon({ channel }: { channel: SocialChannel }) {
  return (
    <a
      className="social-link"
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Aeora Research on ${channel.label} (opens in a new tab)`}
    >
      {channel.label === "Instagram" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.2" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.35" cy="6.65" r="1.05" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M14.2 8.2h2.4V4.4c-.42-.06-1.84-.18-3.5-.18-3.46 0-5.82 2.05-5.82 5.82v3.26H3.5v4.25h3.78V24h4.6v-6.45h3.6l.68-4.25h-4.28V10.46c0-1.23.34-2.26 2.32-2.26Z" />
        </svg>
      )}
      <span>{channel.label}</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="section__inner site-footer__inner">
        <div className="site-footer__brand">
          <BrandLockup inverse />
          <h2 id="footer-title" className="sr-only">
            Aeora Research contact information
          </h2>
          <p className="site-footer__pillars">
            Prop Desk | Market Intelligence | Edge
          </p>
          <p className="site-footer__description">
            Research-led market intelligence and professional market
            participation.
          </p>
        </div>

        <div className="site-footer__contact">
          <p className="site-footer__kicker">Company / Contact</p>
          <h3>{COMPANY_NAME}</h3>
          <p className="site-footer__registration">{COMPANY_REGISTRATION}</p>
          <address>
            <span className="site-footer__label">Address</span>
            {COMPANY_ADDRESS_LINES.map((line) => (
              <span className="site-footer__address-line" key={line}>
                {line}
              </span>
            ))}
            <span className="site-footer__label">Office</span>
            <a href={OFFICE_PHONE.href}>{OFFICE_PHONE.label}</a>
            <span className="site-footer__label">Hotline</span>
            <a href={HOTLINE_PHONE.href}>{HOTLINE_PHONE.label}</a>
            <span className="site-footer__label">Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </address>
          <div className="site-footer__map">
            <iframe
              title="Map to Aeora Research office in Bandar Puchong Jaya"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="site-footer__follow">
          <p className="site-footer__kicker">Follow Us</p>
          <div className="site-footer__socials" aria-label="Social profiles">
            {SOCIAL_CHANNELS.map((channel) => (
              <SocialIcon channel={channel} key={channel.label} />
            ))}
          </div>
          <nav className="site-footer__nav" aria-label="Footer navigation">
            {FOOTER_NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/#connect">Connect</Link>
          </nav>
        </div>
      </div>

      <div className="section__inner site-footer__legal">
        <p className="site-footer__disclaimer">
          Information presented by Aeora Research is for general informational,
          research and educational purposes only. Nothing on this website
          constitutes investment advice, an offer, solicitation, recommendation
          or guarantee of performance.
        </p>
        <div className="site-footer__legal-meta">
          <Link className="site-footer__terms" href="/terms-conditions">
            Terms &amp; Conditions
          </Link>
          <p className="site-footer__copyright">
            &copy; {currentYear} Aeora Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
