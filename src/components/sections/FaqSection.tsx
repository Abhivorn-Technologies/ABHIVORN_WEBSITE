import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import SectionHeading from "./SectionHeading";
import { faqJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export type Faq = { question: string; answer: string };

/** FAQ accordion that also tells Google about the questions (FAQPage structured data). */
export default function FaqSection({
  faqs,
  title = "Frequently asked questions",
  description,
  className,
}: {
  faqs: Faq[];
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("section-padding", className)}>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="container-custom">
        <SectionHeading eyebrow="FAQ" title={title} description={description} />
        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.question} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
