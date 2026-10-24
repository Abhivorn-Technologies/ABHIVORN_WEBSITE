import BlogList from "@/components/blog/BlogList";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: Web, App, Marketing & Software Guides",
  description:
    "Practical guides from the Abhivorn team in Hyderabad on websites, apps, SEO and AI search, performance marketing, custom software, HRMS and healthcare.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
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
