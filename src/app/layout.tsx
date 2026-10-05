import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Analytics from "@/components/analytics/Analytics";
import JsonLd from "@/components/seo/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";
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
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: { siteName: site.name, locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image" },
  other: { "geo.region": "IN-TG", "geo.placename": "Hyderabad" },
};

export const viewport: Viewport = {
  themeColor: "#00597F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <SmoothScroll />
        <Header />
        <main id="main" className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
