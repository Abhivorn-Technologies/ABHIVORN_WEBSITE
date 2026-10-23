import { notFound } from "next/navigation";
import BlogList from "@/components/blog/BlogList";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import { totalPages } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ page: string }> };

// Page 1 lives at /blog, so this route only serves pages 2 and up.
export function generateStaticParams() {
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { page } = await params;
  return pageMetadata({
    title: `Blog — Page ${page}`,
    description: `More articles from the Abhivorn team on websites, mobile apps, custom software, HRMS, healthcare technology and AI (page ${page}).`,
    path: `/blog/page/${page}`,
  });
}

export default async function BlogPageN({ params }: Props) {
  const n = Number((await params).page);
  if (!Number.isInteger(n) || n < 2 || n > totalPages) notFound();
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights from <span className="text-muted-foreground">our team</span>
          </>
        }
        description={`Page ${n} of ${totalPages}`}
        breadcrumb={[
          { name: "Blog", path: "/blog" },
          { name: `Page ${n}`, path: `/blog/page/${n}` },
        ]}
      />
      <BlogList page={n} />
      <CtaBand location="blog" />
    </>
  );
}
