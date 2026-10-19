import { blogPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { SITE_URL, offices, productLinks, site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text summary of the company for AI assistants (ChatGPT, Claude, Perplexity, Gemini).
 * Built from the same data files as the pages, so it never drifts from what the site says.
 */
export function GET() {
  const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
  const lines = [
    `# ${site.legalName}`,
    "",
    `> ${site.shortDescription}`,
    "",
    `- Founded: ${site.foundingYear}`,
    `- Email: ${site.email}`,
    `- Hours: ${site.hours}`,
    ...offices.map((o) => `- ${o.label} (${o.name}): ${o.address}`),
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${url(s.path)}): ${s.summary}`),
    "",
    "## Products",
    ...productLinks.map((p) => `- [${p.name}](${url(p.href)}): ${p.description}`),
    "",
    "## Projects",
    ...projects.map((p) => `- ${p.name}: ${p.summary.replace(/\s+/g, " ").trim()}`),
    "",
    "## Articles",
    ...blogPosts.map((p) => `- [${p.title}](${url(`/blog/${p.slug}`)})`),
    "",
    "## Key pages",
    `- [About](${url("/about")})`,
    `- [Projects](${url("/projects")})`,
    `- [Contact](${url("/contact")})`,
    `- [Privacy Policy](${url("/privacy")})`,
    `- [Terms of Service](${url("/terms")})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
