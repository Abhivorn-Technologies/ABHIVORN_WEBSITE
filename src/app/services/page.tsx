import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Repeat, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import CtaBand from "@/components/sections/CtaBand";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services — Web, Mobile, HRMS, Healthcare & AI",
  description:
    "Explore Abhivorn's services: custom software, website and e-commerce development, iOS and Android apps, HRMS, healthcare software and AI automation in Hyderabad.",
  path: "/services",
});

const models = [
  {
    icon: Layers,
    title: "Fixed-scope project",
    best: "Clear requirements and a defined launch date",
    points: ["Agreed scope, timeline and milestones", "Demo at every milestone", "Bug-fix warranty after launch"],
  },
  {
    icon: Repeat,
    title: "Dedicated team",
    best: "Evolving products and ongoing roadmaps",
    points: ["Developers, QA and DevOps as your extended team", "Flexible priorities sprint by sprint", "Weekly reporting and demos"],
  },
  {
    icon: Wrench,
    title: "Support & maintenance",
    best: "Live products that need care",
    points: ["Bug fixes, updates and monitoring", "Priority response for production issues", "Small enhancements every month"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="text-accent">build and run</span> great software
          </>
        }
        description="From a single website to a full product with web, mobile and admin apps — one team handles design, development, testing, deployment and support."
        breadcrumb={[{ name: "Services", path: "/services" }]}
      >
        <Button asChild variant="hero" size="xl">
          <TrackedLink href="/contact" eventParams={{ label: "Services – Get a quote", location: "services" }}>
            Get a Free Quote <ArrowRight className="ml-1 h-5 w-5" />
          </TrackedLink>
        </Button>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="What we do" title="Our services" />
          <Stagger className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={s.path}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <s.icon className="h-6 w-6 text-accent" aria-hidden />
                    </span>
                    <h2 className="text-2xl font-bold text-foreground">{s.name}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.offerings.slice(0, 4).map((o) => (
                      <li key={o.title} className="flex gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
                        {o.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 font-semibold text-primary">
                    Explore {s.name.toLowerCase()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Ways to work with us"
            title="Flexible engagement models"
            description="Pick what suits your project. Every engagement starts with a free consultation and a written proposal."
          />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {models.map((m) => (
              <StaggerItem key={m.title} className="flex flex-col rounded-3xl border border-border bg-card p-8">
                <m.icon className="h-8 w-8 text-accent" aria-hidden />
                <h3 className="mt-4 text-xl font-bold text-foreground">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Best for: {m.best}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden /> {p}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-7 w-full">
                  <TrackedLink href="/contact" eventParams={{ label: `Engagement – ${m.title}`, location: "services" }}>
                    Discuss your project
                  </TrackedLink>
                </Button>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand location="services" />
    </>
  );
}
