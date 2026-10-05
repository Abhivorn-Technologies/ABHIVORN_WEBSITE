import type { Metadata } from "next";
import { SITE_URL, offices, site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: string[];
};

/** Builds unique title, description, canonical URL and social-share tags for one page. */
export function pageMetadata({ title, description, path, image, type = "website", publishedTime, keywords }: PageMeta): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    // Home page title is used as-is; other pages get " | Abhivorn Technologies" from the root layout.
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: site.shortDescription,
  foundingDate: String(site.foundingYear),
  email: site.email,
  telephone: "+91-9966629766",
  openingHours: "Mo-Fr 09:00-18:00",
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cyber Towers, HITEC City",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  location: offices.map((o) => ({
    "@type": "Place",
    name: `${site.name} — ${o.name}`,
    address: o.address,
  })),
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-9966629766", email: site.email, contactType: "sales", areaServed: "IN", availableLanguage: ["English", "Telugu", "Hindi"] },
  ],
  sameAs: [site.social.linkedin, site.social.instagram, "https://www.vorqard.com"],
  knowsAbout: ["Custom Software Development", "Web Development", "Mobile App Development", "HRMS Software", "Healthcare Software", "AI Development"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
