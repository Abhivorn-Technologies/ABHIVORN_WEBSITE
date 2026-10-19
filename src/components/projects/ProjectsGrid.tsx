"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projectCategories, projects, type Project } from "@/lib/projects";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const list = useMemo(() => (active === "All" ? projects : projects.filter((p) => p.category === active)), [active]);
  const counts = useMemo(
    () => Object.fromEntries(projectCategories.map((c) => [c, c === "All" ? projects.length : projects.filter((p) => p.category === c).length])),
    [],
  );

  return (
    <LayoutGroup>
      <div role="tablist" aria-label="Filter projects by industry" className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {projectCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => {
              setActive(c);
              trackEvent("project_filter", { category: c });
            }}
            className={cn(
              "relative flex-shrink-0 rounded-md px-4 py-2 text-sm font-medium transition-colors",
              active === c ? "text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {active === c && (
              <motion.span layoutId="project-filter" className="absolute inset-0 rounded-md bg-primary" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">
              {c} <span className="font-normal">({counts[c]})</span>
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectDetail project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}

function ProjectDetail({ project: p }: { project: Project }) {
  return (
    <article id={p.slug} className="flex h-full scroll-mt-28 flex-col rounded-lg border border-border bg-card p-6 transition-shadow md:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="eyebrow">{p.category}</span>
        <span
          className={cn(
            "rounded-md px-2 py-0.5 text-xs font-medium",
            p.status === "Live" ? "bg-emerald-500/10 text-emerald-700" : p.status === "In progress" ? "bg-amber-500/10 text-amber-700" : "bg-primary/10 text-primary",
          )}
        >
          {p.status}
        </span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">{p.name}</h2>
      <p className="text-sm text-muted-foreground">{p.client}</p>
      <p className="mt-3 text-lg font-medium text-foreground/90">{p.headline}</p>

      {p.challenge && p.solution ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="eyebrow">Challenge</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.challenge}</p>
          </div>
          <div>
            <h3 className="eyebrow">What we built</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.solution}</p>
          </div>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
      )}

      <ul className="mt-5 space-y-2">
        {p.highlights?.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-foreground/85">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden /> {h}
          </li>
        ))}
      </ul>

      {p.results && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          {p.results.map((r) => (
            <div key={r.label} className="rounded-xl bg-muted/60 p-4">
              <div className="text-2xl font-semibold text-primary">{r.metric}</div>
              <div className="text-xs text-muted-foreground">{r.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        {p.url && (
          <a
            href={p.url}
            {...(p.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={() => trackEvent("project_visit", { project: p.name })}
            className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
          >
            {p.url.startsWith("http") ? "Visit site" : "View product"} <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
