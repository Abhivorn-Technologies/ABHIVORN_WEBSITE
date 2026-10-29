import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnniversaryBar from "@/components/anniversary/AnniversaryBar";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Analytics from "@/components/analytics/Analytics";
import JsonLd from "@/components/seo/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";
import { CONSENT_KEY } from "@/lib/consent";
import { GTAG_IDS, GTM_ID } from "@/lib/tags";
import "./globals.css";

// Self-hosted Inter (variable weight) — no request to Google Fonts, faster first paint.
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Custom Software, Web & Mobile App Development Company in Hyderabad | Abhivorn",
    template: "%s | Abhivorn Technologies",
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: { siteName: site.name, locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image" },
  other: { "geo.region": "IN-TG", "geo.placename": "Hyderabad" },
};

export const viewport: Viewport = {
  themeColor: "#003A75",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        {/*
          Google tag (GA4 / Ads) and Google Tag Manager with Consent Mode v2. Both load on every page so Google can
          detect them, but consent defaults to "denied": Google tags set no cookies until the visitor clicks Accept,
          and the Analytics component then sends a consent "update".
        */}
        {GTAG_IDS.length > 0 && <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_IDS[0]}`} />}
        <script
          id="google-tags"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
(function(){var c;try{c=localStorage.getItem('${CONSENT_KEY}')==='granted'?'granted':'denied';}catch(e){c='denied';}
gtag('consent','default',{ad_storage:c,ad_user_data:c,ad_personalization:c,analytics_storage:c,wait_for_update:500});
gtag('js',new Date());
${GTAG_IDS.map((id) => `gtag('config','${id}');`).join("")}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <SmoothScroll />
        <Header />
        <main id="main" className="flex-1 pt-16 md:pt-20">
          <AnniversaryBar />
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
