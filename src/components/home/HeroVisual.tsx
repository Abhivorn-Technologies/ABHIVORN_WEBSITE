"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, CheckCircle2, Code2, Smartphone, Sparkles, Users } from "lucide-react";

/**
 * Lightweight animated illustration for the home hero (replaces the old 26 MB video).
 * Pure HTML/CSS — loads instantly and stays sharp on every screen.
 */
export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);

  const float = (d: number) =>
    reduce ? {} : { animate: { y: [0, -10, 0] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: d } };

  return (
    <div ref={ref} className="relative mx-auto hidden aspect-[5/4] w-full max-w-xl lg:block" aria-hidden>
      <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-accent/25 via-secondary/10 to-transparent blur-2xl" />

      {/* Main dashboard card */}
      <motion.div
        style={{ y }}
        initial={reduce ? false : { opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute inset-x-4 top-8 rounded-3xl border border-border bg-card p-5 shadow-2xl sm:inset-x-10 sm:p-6"
      >
        <div className="mb-5 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 h-6 flex-1 rounded-md bg-muted" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Projects", value: "50+", icon: Code2 },
            { label: "Team", value: "15", icon: Users },
            { label: "Offices", value: "3", icon: Building2 },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-muted/60 p-3">
              <s.icon className="mb-2 h-4 w-4 text-accent" />
              <div className="text-lg font-bold text-foreground">{s.value}</div>
              <div className="text-[11px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-28 items-end gap-2 rounded-xl bg-muted/40 p-3">
          {[38, 52, 44, 68, 60, 82, 74, 95].map((h, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-accent"
            />
          ))}
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div style={{ y: yFast }} className="absolute -left-1 bottom-16 sm:left-0">
        <motion.div {...float(0)} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15">
            <Smartphone className="h-5 w-5 text-primary" />
          </span>
          <div>
            <div className="text-sm font-semibold text-foreground">iOS &amp; Android</div>
            <div className="text-xs text-muted-foreground">React Native apps</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div style={{ y: yFast }} className="absolute -right-1 top-0 sm:right-0">
        <motion.div {...float(1.2)} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/15">
            <Sparkles className="h-5 w-5 text-secondary" />
          </span>
          <div>
            <div className="text-sm font-semibold text-foreground">AI automation</div>
            <div className="text-xs text-muted-foreground">Chatbots &amp; document AI</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div style={{ y }} className="absolute bottom-2 right-6 sm:right-12">
        <motion.div {...float(2.4)} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          <span className="text-sm font-medium text-foreground">QA-tested before launch</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
