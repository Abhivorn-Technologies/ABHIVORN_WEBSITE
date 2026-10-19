import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
import type { Service } from "@/lib/services";
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
  // Fully written-up case studies first, so each service page shows its strongest work.
  const related = projects
    .filter((p) => service.projectCategories.includes(p.category))
    .sort((a, b) => Number(!!b.solution) - Number(!!a.solution))
    .slice(0, 4);

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
          <Stagger as="ul" className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((o) => (
              <StaggerItem as="li" key={o.title} className="border-b border-border py-8 sm:pr-10">
                <h3 className="text-lg font-medium text-foreground">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{o.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-custom grid items-start gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <SectionHeading eyebrow="Why Abhivorn" title={`What you get with our ${service.name.toLowerCase()} team`} className="mb-0 md:mb-0" />
          <div>
            <Stagger as="ul" className="border-t border-border">
              {service.whyUs.map((w) => (
                <StaggerItem as="li" key={w} className="border-b border-border py-5 text-lg text-foreground">
                  {w}
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-6 text-sm text-muted-foreground">Built with {service.tech.join(", ")}.</p>
            {service.product && (
              <Reveal className="mt-8 border-t border-border pt-6">
                <p className="eyebrow">Our product</p>
                <p className="mt-2 text-lg font-medium text-foreground">{service.product.name}</p>
                <p className="mt-1 text-muted-foreground">{service.product.blurb}</p>
                <Link href={service.product.href} className="mt-3 inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline">
                  Explore {service.product.name} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container-custom">
            <SectionHeading eyebrow="Related work" title="Projects we've delivered" />
            <Stagger className="grid gap-x-12 gap-y-14 md:grid-cols-2">
              {related.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProjectCard project={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <FaqSection faqs={service.faqs} className="border-t border-border" />

      <CtaBand location={service.slug} title={`Let's talk about your ${service.name.toLowerCase()} project`} />
    </>
  );
}
