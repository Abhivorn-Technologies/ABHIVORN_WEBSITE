"use client";

import { track as vercelTrack } from "@vercel/analytics";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

export const CONSENT_KEY = "abhivorn-consent";
export type ConsentValue = "granted" | "denied";

export function getConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Send one event to every analytics tool that is switched on.
 * - Vercel Web Analytics: cookieless, always on
 * - Google Analytics 4 / Google Ads: only after the visitor accepts cookies
 * - Microsoft Clarity: tags the session so recordings can be filtered by event
 */
export function trackEvent(name: string, params: Params = {}) {
  const clean = Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined)) as Record<
    string,
    string | number | boolean
  >;
  try {
    vercelTrack(name, clean);
  } catch {
    /* analytics must never break the page */
  }
  try {
    window.gtag?.("event", name, clean);
  } catch {
    /* ignore */
  }
  try {
    window.clarity?.("event", name);
  } catch {
    /* ignore */
  }
}

/* ---------- First-touch attribution (where a lead came from) ---------- */

const ATTR_KEY = "abhivorn-attribution";

export type Attribution = {
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  firstVisit: string;
};

/** Saves where the visitor first arrived from, once per browser session. */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return;
    const url = new URL(window.location.href);
    const ref = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : "";
    const data: Attribution = {
      landingPage: url.pathname,
      referrer: ref || "Direct",
      utmSource: url.searchParams.get("utm_source") || "",
      utmMedium: url.searchParams.get("utm_medium") || "",
      utmCampaign: url.searchParams.get("utm_campaign") || "",
      firstVisit: new Date().toISOString(),
    };
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(data));
  } catch {
    /* storage can be blocked — that's fine */
  }
}

export function getAttribution(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(ATTR_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}
