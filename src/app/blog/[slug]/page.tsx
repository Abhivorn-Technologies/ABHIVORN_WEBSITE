import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts, formatDate, getPost } from "@/lib/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: post.image,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            author: { "@type": "Organization", name: site.legalName, url: SITE_URL },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <article>
        <header className="bg-gradient-to-b from-muted/60 to-background">
          <div className="container-custom max-w-3xl py-12 md:py-16">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden /> All articles
            </Link>
            <span className="mt-6 block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-primary">{post.category}</span>
            <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden /> <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden /> {post.readTime}
              </span>
              <span>By the Abhivorn team</span>
            </div>
          </div>
        </header>

        <div className="container-custom max-w-4xl">
          <Reveal className="relative aspect-video overflow-hidden rounded-3xl shadow-xl">
            <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          </Reveal>
        </div>

        <div className="container-custom max-w-3xl py-12 md:py-16">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
            {post.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i}>{block.slice(3)}</h2>
              ) : block.startsWith("### ") ? (
                <h3 key={i}>{block.slice(4)}</h3>
              ) : (
                <p key={i}>{block}</p>
              ),
            )}
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section-padding bg-muted/40">
          <div className="container-custom max-w-5xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Keep reading</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span className="text-xs font-medium text-accent">{p.category}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand location={`blog_${post.slug}`} />
    </>
  );
}
