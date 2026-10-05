import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  breadcrumb?: { name: string; path: string }[];
  className?: string;
  align?: "center" | "left";
};

/** Top-of-page hero used by inner pages, with breadcrumb (visible + structured data). */
export default function PageHero({ eyebrow, title, description, children, breadcrumb, className, align = "center" }: Props) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-b from-muted/60 to-background", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="container-custom relative py-14 md:py-24">
        {breadcrumb && (
          <>
            <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
            <nav aria-label="Breadcrumb" className={cn("mb-6 text-sm text-muted-foreground", align === "center" && "flex justify-center")}>
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                {breadcrumb.map((b, i) => (
                  <li key={b.path} className="flex items-center gap-1">
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    {i === breadcrumb.length - 1 ? (
                      <span aria-current="page" className="text-foreground">
                        {b.name}
                      </span>
                    ) : (
                      <Link href={b.path} className="hover:text-primary">
                        {b.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <Reveal>
              <span className="mb-5 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-primary">{eyebrow}</span>
            </Reveal>
          )}
          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">{title}</h1>
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.2}>
              <div className={cn("mt-8 flex flex-col gap-3 sm:flex-row", align === "center" && "sm:justify-center")}>{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
