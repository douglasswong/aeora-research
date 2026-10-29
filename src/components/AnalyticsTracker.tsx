"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  ANALYTICS_PREFERENCES_EVENT,
  type AnalyticsConsent
} from "@/lib/analytics-consent";

type AnalyticsEventName =
  | "trader_development_click"
  | "course_interest_click"
  | "registration_interest_click"
  | "contact_click"
  | "consultation_interest_click";

type TrackedDestination = {
  eventName: AnalyticsEventName;
  parameters: Record<string, string>;
};

type AnalyticsTrackerProps = {
  enabled: boolean;
  measurementId?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

const UTM_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content"
] as const;

function isMeasurementId(value: string | undefined): value is string {
  return Boolean(value && /^G-[A-Z0-9]+$/i.test(value.trim()));
}

function getLinkLocation(anchor: HTMLAnchorElement) {
  const declaredLocation = anchor.dataset.analyticsLocation?.trim();

  if (declaredLocation && /^[a-z0-9_-]{1,40}$/i.test(declaredLocation)) {
    return declaredLocation.toLowerCase();
  }

  if (anchor.closest("header")) {
    return "header";
  }

  if (anchor.closest("footer")) {
    return "footer";
  }

  return "body";
}

function getCampaignParameters() {
  const searchParameters = new URLSearchParams(window.location.search);
  const campaignParameters: Record<string, string> = {};

  for (const parameter of UTM_PARAMETERS) {
    const value = searchParameters.get(parameter)?.trim().toLowerCase();

    if (value && /^[a-z0-9_-]{1,80}$/.test(value)) {
      campaignParameters[parameter] = value;
    }
  }

  return campaignParameters;
}

function getTrackedDestination(anchor: HTMLAnchorElement): TrackedDestination | null {
  const destination = new URL(anchor.href, window.location.href);
  const host = destination.hostname.toLowerCase();

  if (
    host === "forms.gle" ||
    (host === "docs.google.com" && destination.pathname.startsWith("/forms/"))
  ) {
    return {
      eventName: "registration_interest_click",
      parameters: { form_provider: "google_forms" }
    };
  }

  if (host === "calendar.google.com") {
    return {
      eventName: "consultation_interest_click",
      parameters: { booking_provider: "google_calendar" }
    };
  }

  if (destination.protocol === "mailto:") {
    return {
      eventName: "contact_click",
      parameters: { contact_method: "email" }
    };
  }

  if (destination.protocol === "tel:") {
    return {
      eventName: "contact_click",
      parameters: { contact_method: "telephone" }
    };
  }

  if (destination.origin !== window.location.origin) {
    return null;
  }

  if (
    destination.pathname === "/pinnacle" ||
    destination.pathname === "/trader-readiness"
  ) {
    return {
      eventName: "trader_development_click",
      parameters: { destination_path: destination.pathname }
    };
  }

  if (
    destination.pathname === "/courses" ||
    destination.pathname.startsWith("/courses/")
  ) {
    return {
      eventName: "course_interest_click",
      parameters: { destination_path: destination.pathname }
    };
  }

  if (destination.pathname === "/" && destination.hash === "#connect") {
    return {
      eventName: "contact_click",
      parameters: { contact_method: "contact_section" }
    };
  }

  return null;
}

function ensureGoogleTag() {
  window.dataLayer ??= [];
  window.gtag ??= (command: string, ...args: unknown[]) => {
    window.dataLayer?.push([command, ...args]);
  };

  return window.gtag;
}

function readStoredConsent(): AnalyticsConsent | null {
  try {
    const storedConsent = window.localStorage.getItem(
      ANALYTICS_CONSENT_STORAGE_KEY
    );

    if (storedConsent === "granted" || storedConsent === "denied") {
      return storedConsent;
    }
  } catch {
    // Visitors can still decide for the current page view when storage is blocked.
  }

  return null;
}

function storeConsent(consent: AnalyticsConsent) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch {
    // The tracker uses the in-memory decision when storage is unavailable.
  }
}

function disableGoogleAnalytics() {
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
}

function AnalyticsPageTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const gtag = ensureGoogleTag();

    gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.origin + pathname
    });
  }, [measurementId, pathname]);

  return null;
}

function AnalyticsClickTracker({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    const gtag = ensureGoogleTag();

    gtag("consent", "update", { analytics_storage: "granted" });
    gtag("js", new Date());
    gtag("config", measurementId, { send_page_view: false });

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");

      if (!(anchor instanceof HTMLAnchorElement) || anchor.hasAttribute("download")) {
        return;
      }

      const destination = getTrackedDestination(anchor);

      if (!destination) {
        return;
      }

      gtag("event", destination.eventName, {
        page_path: window.location.pathname,
        link_location: getLinkLocation(anchor),
        ...getCampaignParameters(),
        ...destination.parameters
      });
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [measurementId]);

  return null;
}

type AnalyticsConsentBannerProps = {
  onChoose: (consent: AnalyticsConsent) => void;
};

function AnalyticsConsentBanner({ onChoose }: AnalyticsConsentBannerProps) {
  return (
    <section
      aria-describedby="analytics-consent-copy"
      aria-labelledby="analytics-consent-title"
      className="analytics-consent"
      role="dialog"
    >
      <div className="analytics-consent__content">
        <p className="analytics-consent__kicker">Privacy choice</p>
        <h2 id="analytics-consent-title">Optional website analytics</h2>
        <p id="analytics-consent-copy">
          We use optional analytics to understand navigation and improve the
          Aeora Research website. No analytics script loads unless you allow it.
        </p>
        <Link href="/privacy#analytics">Privacy &amp; cookies</Link>
      </div>
      <div className="analytics-consent__actions">
        <button
          className="analytics-consent__button analytics-consent__button--secondary"
          onClick={() => onChoose("denied")}
          type="button"
        >
          Use essential only
        </button>
        <button
          className="analytics-consent__button"
          onClick={() => onChoose("granted")}
          type="button"
        >
          Allow analytics
        </button>
      </div>
    </section>
  );
}

export function AnalyticsTracker({ enabled, measurementId }: AnalyticsTrackerProps) {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [hasReadStoredConsent, setHasReadStoredConsent] = useState(false);
  const isConfigured = enabled && isMeasurementId(measurementId);

  useEffect(() => {
    if (!isConfigured) {
      return;
    }

    const syncPreferences = () => {
      const storedConsent = readStoredConsent();

      if (storedConsent !== "granted") {
        disableGoogleAnalytics();
      }

      setConsent(storedConsent);
      setHasReadStoredConsent(true);
    };

    syncPreferences();
    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, syncPreferences);

    return () => {
      window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, syncPreferences);
    };
  }, [isConfigured]);

  if (!isConfigured || !isMeasurementId(measurementId)) {
    return null;
  }

  const normalizedMeasurementId = measurementId.trim();

  const chooseConsent = (nextConsent: AnalyticsConsent) => {
    storeConsent(nextConsent);

    if (nextConsent === "denied") {
      disableGoogleAnalytics();
    }

    setConsent(nextConsent);
    setHasReadStoredConsent(true);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            id="aeora-google-tag"
            src={"https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(normalizedMeasurementId)}
            strategy="afterInteractive"
          />
          <AnalyticsClickTracker measurementId={normalizedMeasurementId} />
          <AnalyticsPageTracker measurementId={normalizedMeasurementId} />
        </>
      ) : null}
      {hasReadStoredConsent && consent === null ? (
        <AnalyticsConsentBanner onChoose={chooseConsent} />
      ) : null}
    </>
  );
}
