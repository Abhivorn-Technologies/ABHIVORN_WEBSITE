import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl md:mb-16", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-medium text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
