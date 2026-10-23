import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { formatDate, postsForPage, totalPages } from "@/lib/blog";

const pageHref = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

/** One page of the blog grid, with numbered pagination below it. */
export default function BlogList({ page }: { page: number }) {
  return (
  <section className="section-padding pt-6 md:pt-10">
    <div className="container-custom">
      <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {postsForPage(page).map((post, i) => (
          <StaggerItem as="article" key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-"
                  priority={page === 1 && i === 0}
                />
                <span className="absolute left-4 top-4 rounded-md bg-background/95 px-2.5 py-1 text-xs font-medium text-foreground">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground group-hover:text-primary">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
      {totalPages > 1 && <Pagination page={page} />}
    </div>
  </section>
  );
}

function Pagination({ page }: { page: number }) {
  const base = "inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-md border px-3 text-sm font-medium transition-colors";
  const idle = `${base} border-border text-foreground hover:border-primary hover:text-primary`;
  return (
    <nav aria-label="Blog pages" className="mt-14 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={pageHref(page - 1)} rel="prev" className={idle}>
          <ArrowLeft className="h-4 w-4" aria-hidden /> Previous
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
        n === page ? (
          <span key={n} aria-current="page" className={`${base} border-primary bg-primary text-primary-foreground`}>
            {n}
          </span>
        ) : (
          <Link key={n} href={pageHref(n)} className={idle} aria-label={`Page ${n}`}>
            {n}
          </Link>
        ),
      )}
      {page < totalPages && (
        <Link href={pageHref(page + 1)} rel="next" className={idle}>
          Next <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      )}
    </nav>
  );
}
