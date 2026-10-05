import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import FaqSection from "./FaqSection";
import CtaBand from "./CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/lib/projects";
import { services, type Service } from "@/lib/services";
import { SITE_URL, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export function serviceMetadata(service: Service) {
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.path,
    keywords: service.keywords,
  });
}

/** Shared layout for every service landing page (custom software, web, mobile, HRMS, healthcare, AI). */
export default function ServicePage({ service }: { service: Service }) {
  const related = projects.filter((p) => service.projectCategories.includes(p.category)).slice(0, 4);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url: `${SITE_URL}${service.path}`,
          areaServed: { "@type": "Country", name: "India" },
          provider: { "@id": `${SITE_URL}/#organization`, name: site.legalName },
        }}
      />
      <PageHero
        eyebrow={service.name}
        title={service.h1}
        description={service.intro}
        breadcrumb={[
          { name: "Services", path: "/services" },
          { name: service.name, path: service.path },
        ]}
      >
        <Button asChild variant="hero" size="xl">
          <TrackedLink href="/contact" eventParams={{ label: `${service.name} – Get a quote`, location: service.slug }}>
            Get a Free Quote <ArrowRight className="ml-1 h-5 w-5" />
          </TrackedLink>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <Link href="/projects">See Our Work</Link>
        </Button>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="What we deliver" title={`Our ${service.name.toLowerCase()} services`} />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((o) => (
              <StaggerItem key={o.title} className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <h3 className="text-lg font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 text-muted-foreground">{o.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-custom grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Why Abhivorn" title="Why businesses choose us" className="mb-8 md:mb-8" />
            <Stagger as="ul" className="space-y-4">
              {service.whyUs.map((w) => (
                <StaggerItem as="li" key={w} className="flex gap-3 text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
                  {w}
                </StaggerItem>
              ))}
            </Stagger>
            {service.product && (
              <Reveal className="mt-8 rounded-2xl border border-accent/30 bg-background p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our product</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{service.product.name}</p>
                <p className="mt-1 text-muted-foreground">{service.product.blurb}</p>
                <Link href={service.product.href} className="mt-3 inline-flex items-center gap-1 font-semibold text-primary hover:text-accent">
                  Explore {service.product.name} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            )}
          </div>
          <Reveal from="right" className="rounded-3xl border border-border bg-background p-8">
            <h2 className="text-xl font-semibold text-foreground">Technologies we use</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span key={t} className="rounded-lg bg-muted px-3 py-1.5 text-sm font-medium text-foreground">
                  {t}
                </span>
              ))}
            </div>
            <h2 className="mt-8 text-xl font-semibold text-foreground">How a project runs</h2>
            <ol className="mt-4 space-y-3">
              {["Free consultation & requirements", "Proposal with scope and timeline", "Design, build and weekly demos", "QA testing and launch", "Warranty support and improvements"].map(
                (step, i) => (
                  <li key={step} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ),
              )}
            </ol>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading eyebrow="Related work" title="Projects we've delivered" />
            <Stagger className="grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProjectCard project={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <FaqSection faqs={service.faqs} className="bg-muted/40" />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="More services" title="Other ways we can help" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={o.path}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-accent/40 hover:shadow-card"
              >
                <o.icon className="h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
                <span className="text-sm font-semibold text-foreground group-hover:text-primary">{o.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand location={service.slug} title={`Let's talk about your ${service.name.toLowerCase()} project`} />
    </>
  );
}
