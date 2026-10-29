import { Reveal } from "@/components/motion/Reveal";
import { isAnniversaryActive } from "@/lib/anniversary";

const highlights = ["Amazing clients", "Meaningful projects", "Continuous growth", "A supportive team"];

export default function AnniversarySection() {
  if (!isAnniversaryActive()) return null;
  return (
    <section aria-labelledby="anniversary-heading" className="section-padding">
      <div className="container-custom">
        <Reveal className="anniversary-navy relative overflow-hidden rounded-2xl px-6 py-12 sm:px-12 md:py-16">
          <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div aria-hidden className="gold-text gold-glow select-none text-[9rem] font-bold leading-none sm:text-[11rem]">
              1
            </div>
            <div>
              <p className="gold-text text-sm font-semibold uppercase tracking-[0.2em]">Our first anniversary</p>
              <h2 id="anniversary-heading" className="mt-3 text-balance text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
                1 year of building together.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
                Thank you to our clients, partners, team and well-wishers for being part of Abhivorn&apos;s journey. Your trust and
                support made our first year truly special. Here&apos;s to more ideas and a brighter future together.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <li key={h} className="rounded-full border border-[hsl(var(--gold)/0.45)] px-4 py-1.5 text-sm text-white/85">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
