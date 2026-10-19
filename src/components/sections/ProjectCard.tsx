import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

/** Compact case-study card used on the home page and service pages. */
export default function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <article className={cn("group flex h-full flex-col border-t border-border pt-6", className)}>
      <p className="eyebrow">
        {project.category} · {project.status}
      </p>
      <h3 className="mt-3 text-2xl font-medium text-foreground">{project.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
      <p className="mt-4 leading-relaxed text-foreground/80">{project.headline}</p>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm text-muted-foreground">
        <span>{project.tech.slice(0, 3).join(" · ")}</span>
        {project.url && (
          <a
            href={project.url}
            {...(project.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="ml-auto inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            aria-label={`Visit ${project.name} website`}
          >
            {project.url.startsWith("http") ? "Visit" : "View"} <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
