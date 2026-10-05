import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  invert?: boolean;
}) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className={cn("mb-3 text-sm font-semibold uppercase tracking-wider", invert ? "text-accent" : "text-accent")}>{eyebrow}</p>
      )}
      <h2 className={cn("text-balance text-3xl font-bold sm:text-4xl", invert ? "text-primary-foreground" : "text-foreground")}>{title}</h2>
      {description && (
        <p className={cn("mt-4 text-pretty text-lg", invert ? "text-primary-foreground/80" : "text-muted-foreground")}>{description}</p>
      )}
    </Reveal>
  );
}
