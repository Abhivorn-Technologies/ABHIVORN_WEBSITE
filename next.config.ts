import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Keep old and mistyped URLs working (301) so existing Google rankings and shared links carry over.
  async redirects() {
    return [
      { source: "/careers", destination: "/contact", permanent: true },
      { source: "/careers/:path*", destination: "/contact", permanent: true },
      { source: "/hrms-development", destination: "/hrms-software-development", permanent: true },
      { source: "/ai-development", destination: "/ai-development-company", permanent: true },
      { source: "/healthcare-software", destination: "/healthcare-software-development", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      // Two near-identical HRMS posts were merged into one.
      { source: "/blog/indian-companies-hrms-2026", destination: "/blog/startups-hrms-2026", permanent: true },
    ];
  },
};

export default nextConfig;
