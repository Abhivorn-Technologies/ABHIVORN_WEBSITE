import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  Live: "bg-emerald-500/10 text-emerald-700",
  Delivered: "bg-primary/10 text-primary",
  "In progress": "bg-amber-500/10 text-amber-700",
};

/** Compact case-study card used on the home page and service pages. */
export default function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover md:p-7",
        className,
      )}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-primary">{project.category}</span>
        <span className={cn("rounded-full px-3 py-1 text-xs font-medium", statusStyles[project.status])}>{project.status}</span>
      </div>
      <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
      <p className="mt-4 text-foreground/80">{project.headline}</p>
      <ul className="mt-5 space-y-2">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent"
            aria-label={`Visit ${project.name} website`}
          >
            Visit <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
