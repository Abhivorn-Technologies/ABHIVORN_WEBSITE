import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work — Case Studies & Recent Projects",
  description:
    "Recent projects by Abhivorn Technologies: healthcare apps, e-commerce stores, real estate launch sites, booking portals, HRMS rollouts and AI document extraction.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Real projects, <span className="text-accent">real businesses</span>
          </>
        }
        description="A selection of the 50+ projects we've delivered — from healthcare platforms and online stores to event portals and enterprise systems."
        breadcrumb={[{ name: "Projects", path: "/projects" }]}
      />
      <section className="section-padding pt-6 md:pt-10">
        <div className="container-custom">
          <ProjectsGrid />
        </div>
      </section>
      <CtaBand location="projects" title="Want results like these?" />
    </>
  );
}
