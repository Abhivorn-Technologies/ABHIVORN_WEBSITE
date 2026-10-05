import type { ReactNode } from "react";
import PageHero from "./PageHero";

export default function LegalPage({ title, updated, path, children }: { title: string; updated: string; path: string; children: ReactNode }) {
  return (
    <>
      <PageHero title={title} description={`Last updated: ${updated}`} breadcrumb={[{ name: title, path }]} />
      <section className="pb-20">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
