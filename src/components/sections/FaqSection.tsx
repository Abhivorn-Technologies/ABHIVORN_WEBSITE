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
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <SectionHeading eyebrow="FAQ" title={title} description={description} className="mb-0 md:mb-0" />
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={f.question} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
