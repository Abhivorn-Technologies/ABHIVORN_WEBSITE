"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CONSENT_EVENT, captureAttribution, getConsent, type ConsentValue } from "@/lib/analytics";
import ConsentBanner from "./ConsentBanner";

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

// Google Tag Manager container. The ID is public (it ships in every page that uses GTM).
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PSX78PTV";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

const loadedTrackers = () => Boolean(window.gtag || window.clarity || window.google_tag_manager);

/**
 * Visitor analytics.
 * - Vercel Web Analytics (visitors, pages, referrers, countries, devices) and Speed Insights
 *   (real-user loading experience) are cookieless, so they always run.
 * - Google Tag Manager, Google Analytics 4, Google Ads and Microsoft Clarity (heatmaps + session recordings)
 *   can set cookies, so they load only after the visitor clicks "Accept" on the consent banner.
 *   Tags added inside GTM inherit that rule because the whole container waits for consent.
 */
export default function Analytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribe, readConsent, serverConsent);

  useEffect(() => {
    captureAttribution();
  }, []);

  // Page views on client-side navigation (the first page view is sent by the tags themselves on load)
  const firstPath = useRef(pathname);
  useEffect(() => {
    if (consent !== "granted" || pathname === firstPath.current) return;
    firstPath.current = "";
    if (GA_ID && window.gtag) window.gtag("event", "page_view", { page_path: pathname, page_location: window.location.href });
    if (GTM_ID) (window.dataLayer ||= []).push({ event: "virtual_page_view", page_path: pathname, page_location: window.location.href });
  }, [pathname, consent]);

  const googleIds = [GA_ID, ADS_ID].filter(Boolean) as string[];
  const granted = consent === "granted";

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />

      {granted && GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
(function(){function c(){window.dataLayer.push(arguments);}c('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});})();
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

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

      {consent === "unset" && (
        <ConsentBanner
          onChoice={(v) => {
            // Scripts that already loaded can't be unloaded, so a switch from Accept to Decline reloads the page without them.
            if (v === "denied" && loadedTrackers()) window.location.reload();
            else window.dispatchEvent(new Event(CONSENT_EVENT));
          }}
        />
      )}
    </>
  );
}
