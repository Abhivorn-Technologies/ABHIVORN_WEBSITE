"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { captureAttribution, getConsent, type ConsentValue } from "@/lib/analytics";
import ConsentBanner from "./ConsentBanner";

const CONSENT_EVENT = "abhivorn-consent-change";
const subscribe = (cb: () => void) => {
  window.addEventListener(CONSENT_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CONSENT_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};
// "pending" on the server and before hydration, so the banner never flashes for people who already chose.
const readConsent = (): ConsentValue | "unset" => getConsent() ?? "unset";
const serverConsent = (): "pending" => "pending";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

/**
 * Visitor analytics.
 * - Vercel Web Analytics (visitors, pages, referrers, countries, devices) and Speed Insights
 *   (real-user loading experience) are cookieless, so they always run.
 * - Google Analytics 4, Google Ads and Microsoft Clarity (heatmaps + session recordings) set cookies,
 *   so they load only after the visitor clicks "Accept" on the consent banner.
 */
export default function Analytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribe, readConsent, serverConsent);

  useEffect(() => {
    captureAttribution();
  }, []);

  // GA4 page views on client-side navigation
  useEffect(() => {
    if (consent !== "granted" || !GA_ID || !window.gtag) return;
    window.gtag("event", "page_view", { page_path: pathname, page_location: window.location.href });
  }, [pathname, consent]);

  const googleIds = [GA_ID, ADS_ID].filter(Boolean) as string[];
  const granted = consent === "granted";

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />

      {granted && googleIds.length > 0 && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleIds[0]}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${googleIds.map((id) => `gtag('config', '${id}', { send_page_view: true });`).join("\n")}`}
          </Script>
        </>
      )}

      {granted && CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}

      {consent === "unset" && <ConsentBanner onChoice={() => window.dispatchEvent(new Event(CONSENT_EVENT))} />}
    </>
  );
}
