import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import { Button } from "@/components/ui/button";
import { blogPosts, formatDate, getPost, relatedPosts } from "@/lib/blog";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
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
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post);
  const latest = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 5);
  const wordCount = post.content.join(" ").split(/\s+/).length;

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
            inLanguage: "en-IN",
            articleSection: post.category,
            keywords: post.keywords?.join(", "),
            wordCount,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            author: { "@type": "Organization", name: site.legalName, url: SITE_URL },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(post.faqs?.length ? [faqJsonLd(post.faqs)] : []),
        ]}
      />

      <div className="container-custom py-10 md:py-14">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" aria-hidden /> All articles
        </Link>

        <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-16">
          <article className="min-w-0">
            <header>
              <span className="eyebrow block">{post.category}</span>
              <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">{post.title}</h1>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden /> <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden /> {post.readTime}
                </span>
                <span>By the Abhivorn team</span>
              </div>
            </header>

            <Reveal className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-border">
              <Image src={post.image} alt="" fill priority sizes="(min-width: 1280px) 860px, (min-width: 1024px) 65vw, 100vw" className="object-cover" />
            </Reveal>

            {post.takeaways?.length ? (
              <aside aria-label="Key takeaways" className="mt-10 rounded-lg border border-border bg-muted/40 p-6">
                <h2 className="text-base font-semibold text-foreground">Key takeaways</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                  {post.takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </aside>
            ) : null}

            <div className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
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

            {post.faqs?.length ? (
              <section aria-labelledby="faq-heading" className="mt-12 border-t border-border pt-10">
                <h2 id="faq-heading" className="text-2xl font-semibold text-foreground">Frequently asked questions</h2>
                <dl className="mt-6 space-y-6">
                  {post.faqs.map((f) => (
                    <div key={f.question}>
                      <dt className="font-semibold text-foreground">{f.question}</dt>
                      <dd className="mt-2 text-muted-foreground">{f.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
          </article>

          <aside aria-label="More articles" className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="eyebrow">Latest articles</h2>
            <ul className="mt-4 divide-y divide-border">
              {latest.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group flex gap-4 py-4">
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md border border-border">
                      <Image src={p.image} alt="" fill sizes="96px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-muted-foreground">{p.category}</span>
                      <p className="mt-1 line-clamp-2 text-sm font-medium leading-snug text-foreground group-hover:text-primary">{p.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-border bg-muted/40 p-6">
              <p className="font-semibold text-foreground">Planning a project?</p>
              <p className="mt-2 text-sm text-muted-foreground">Tell us what you want to build and get a free quote from our Hyderabad team.</p>
              <Button asChild className="mt-4 w-full">
                <TrackedLink href="/contact" eventParams={{ label: "Blog sidebar – Get a free quote", location: `blog_${post.slug}` }}>
                  Get a Free Quote
                </TrackedLink>
              </Button>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section-padding border-t border-border bg-muted/40">
          <div className="container-custom">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Related articles</h2>
              <Link href="/blog" className="hidden items-center gap-1 text-sm font-semibold text-primary sm:inline-flex">
                View all <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-medium text-muted-foreground">{p.category}</span>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">{p.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
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
