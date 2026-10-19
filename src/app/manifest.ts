import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Lets phones show the logo when the site is saved to the home screen. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: site.shortDescription,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#003A75",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
