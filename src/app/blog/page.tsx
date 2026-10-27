import BlogList from "@/components/blog/BlogList";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog: Web, App, Marketing & Software Guides",
  description:
    "Practical guides from the Abhivorn team in Hyderabad on websites, apps, SEO and AI search, performance marketing, custom software, HRMS and healthcare.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${SITE_URL}/blog#blog`,
          name: "Abhivorn Technologies Blog",
          url: `${SITE_URL}/blog`,
          inLanguage: "en-IN",
          publisher: { "@id": `${SITE_URL}/#organization` },
          blogPost: blogPosts.slice(0, 10).map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights from <span className="text-muted-foreground">our team</span>
          </>
        }
        description="Practical guides on websites, mobile apps, custom software, HR technology, healthcare and AI for growing businesses."
        breadcrumb={[{ name: "Blog", path: "/blog" }]}
      />
      <BlogList page={1} />
      <CtaBand location="blog" />
    </>
  );
}
