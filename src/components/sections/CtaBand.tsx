import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import { Reveal } from "@/components/motion/Reveal";
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
    <section className="relative overflow-hidden bg-primary">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" />
      </div>
      <Reveal className="container-custom relative py-16 text-center md:py-24">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">{description}</p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
            <TrackedLink href="/contact" eventParams={{ label: "CTA band – Start a project", location }}>
              Start a Project <ArrowRight className="ml-1 h-5 w-5" />
            </TrackedLink>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <TrackedLink href={site.whatsappHref} event="whatsapp_click" eventParams={{ location }}>
              Chat on WhatsApp
            </TrackedLink>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
