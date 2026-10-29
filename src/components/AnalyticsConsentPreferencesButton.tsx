"use client";

import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  ANALYTICS_PREFERENCES_EVENT
} from "@/lib/analytics-consent";

type AnalyticsConsentPreferencesButtonProps = {
  className?: string;
};

const analyticsEnabled =
  process.env.NEXT_PUBLIC_AEORA_ANALYTICS_ENABLED === "true";

export function AnalyticsConsentPreferencesButton({
  className
}: AnalyticsConsentPreferencesButtonProps) {
  if (!analyticsEnabled) {
    return null;
  }

  const openPreferences = () => {
    try {
      window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
    } catch {
      // The consent panel still works for browsers that block local storage.
    }

    window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT));
  };

  return (
    <button className={className} onClick={openPreferences} type="button">
      Cookie preferences
    </button>
  );
}
