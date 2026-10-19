import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import { ScrollMe } from "@/components/motion/ScrollMe";
import { site } from "@/lib/site";

/** Closing call-to-action shown at the bottom of most pages. */
export default function CtaBand({
  title = "Have a project in mind?",
  description = "Tell us what you want to build. We'll reply within one business day with next steps and a clear plan.",
  location,
}: {
  title?: string;
  description?: string;
  /** Page name for analytics, e.g. "home" */
  location: string;
}) {
  return (
    <section className="border-t border-border">
      <ScrollMe className="container-custom py-20 md:py-32" from={{ y: 32, opacity: 0.3 }}>
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-medium text-foreground sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button asChild variant="hero" size="xl">
              <TrackedLink href="/contact" eventParams={{ label: "CTA band – Get a free quote", location }}>
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </TrackedLink>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <TrackedLink href={`mailto:${site.email}`} event="email_click" eventParams={{ location }}>
                {site.email}
              </TrackedLink>
            </Button>
          </div>
        </div>
      </ScrollMe>
    </section>
  );
}
