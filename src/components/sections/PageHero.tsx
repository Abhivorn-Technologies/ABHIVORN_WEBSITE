import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

// Above-the-fold content animates with CSS, so it is visible without waiting for JavaScript (faster first paint).
const rise = "animate-fade-in-up [animation-fill-mode:both]";

type Props = {
  eyebrow?: string;
  /** Optional brand mark shown above the eyebrow (e.g. a product logo). */
  logo?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  breadcrumb?: { name: string; path: string }[];
  className?: string;
  align?: "center" | "left";
};

/** Top-of-page hero used by inner pages, with breadcrumb (visible + structured data). */
export default function PageHero({ logo, eyebrow, title, description, children, breadcrumb, className, align = "center" }: Props) {
  return (
    <section className={cn("border-b border-border", className)}>
      <div className="container-custom py-16 md:py-28">
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
          {logo && <div className={cn(rise, "mb-8")}>{logo}</div>}
          {eyebrow && (
            <div className={rise}>
              <p className="eyebrow mb-6">{eyebrow}</p>
            </div>
          )}
          <h1 className="text-balance text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <div className={cn(rise, "[animation-delay:100ms]")}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
            </div>
          )}
          {children && (
            <div className={cn(rise, "[animation-delay:200ms]")}>
              <div className={cn("mt-8 flex flex-col gap-3 sm:flex-row", align === "center" && "sm:justify-center")}>{children}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
