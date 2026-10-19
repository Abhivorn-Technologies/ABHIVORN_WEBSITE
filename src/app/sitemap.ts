import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

/** Generated automatically from the real routes, so it can never point at pages that don't exist. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9, "monthly"),
    ...services.map((s) => page(s.path, 0.9)),
    page("/projects", 0.8, "weekly"),
    page("/products", 0.8),
    page("/products/vorqard", 0.8),
    page("/products/vorn-hr", 0.8),
    page("/about", 0.7),
    page("/contact", 0.8),
    page("/blog", 0.7, "weekly"),
    ...blogPosts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
