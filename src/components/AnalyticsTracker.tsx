"use client";

import { useEffect } from "react";
import Script from "next/script";

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

function AnalyticsClickTracker({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    const gtag = ensureGoogleTag();

    gtag("js", new Date());
    gtag("config", measurementId);

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

export function AnalyticsTracker({ enabled, measurementId }: AnalyticsTrackerProps) {
  if (!enabled || !isMeasurementId(measurementId)) {
    return null;
  }

  const normalizedMeasurementId = measurementId.trim();

  return (
    <>
      <Script
        id="aeora-google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(normalizedMeasurementId)}`}
        strategy="afterInteractive"
      />
      <AnalyticsClickTracker measurementId={normalizedMeasurementId} />
    </>
  );
}
