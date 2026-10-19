/** Google tag IDs. These are public: they ship in the page source of every site that uses them. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-PSX78PTV";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-T85PQHQ4C6";
export const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/** IDs configured through gtag.js (Google Analytics 4, Google Ads). */
export const GTAG_IDS = [GA_ID, ADS_ID].filter(Boolean) as string[];
