import { Clock, Mail, MapPin } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { Reveal } from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import FaqSection from "@/components/sections/FaqSection";
import ContactForm from "@/components/contact/ContactForm";
import { offices, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us: Get a Free Project Quote",
  description:
    "Contact Abhivorn Technologies in Hyderabad for websites, apps, custom software, HRMS, healthcare and AI projects. Send your requirements for a free quote.",
  path: "/contact",
});

const faqs = [
  {
    question: "How soon will you reply?",
    answer: "We reply to every enquiry within one business day.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "A short description of what you want to build, who it's for, any must-have features, and your ideal timeline. Don't worry if it's rough — we'll help shape it in the first call.",
  },
  {
    question: "Do you sign an NDA?",
    answer: "Yes. We're happy to sign an NDA before you share detailed requirements.",
  },
  {
    question: "Can we meet in person?",
    answer: "Yes — visit us at our HITEC City head office or our KPHB and Karimnagar branches. Please book a time in advance.",
  },
];

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, event: "email_click" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-muted-foreground">great together.</span>
          </>
        }
        description="Share your idea and we'll get back within one business day with next steps — the first consultation is free."
        breadcrumb={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="section-padding pt-6 md:pt-10">
        <div className="container-custom grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal from="left" className="space-y-8 lg:col-span-2">
            <div className="border-t border-border">
              {channels.map((c) => (
                <TrackedLink
                  key={c.label}
                  href={c.href}
                  event={c.event}
                  eventParams={{ location: "contact_page" }}
                  className="group flex items-center gap-4 border-b border-border py-4"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border">
                    <c.icon className="h-4 w-4 text-foreground" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">{c.label}</span>
                    <span className="block font-medium text-foreground">{c.value}</span>
                  </span>
                </TrackedLink>
              ))}
              <div className="flex items-center gap-4 border-b border-border py-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border">
                  <Clock className="h-4 w-4 text-foreground" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Business hours</span>
                  <span className="block font-medium text-foreground">{site.hours}</span>
                </span>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold text-foreground">Our offices</h2>
              <ul className="space-y-3">
                {offices.map((o) => (
                  <li key={o.name}>
                    <a
                      href={o.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 rounded-xl p-2 transition hover:bg-muted/60"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden />
                      <span>
                        <span className="block font-medium text-foreground">
                          {o.name} <span className="font-normal text-muted-foreground">· {o.label}</span>
                        </span>
                        <span className="text-sm text-muted-foreground">{o.address}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Product support</p>
              <p className="mt-2">
                VORQARD:{" "}
                <a href="mailto:support@vorqard.com" className="text-primary hover:underline">
                  support@vorqard.com
                </a>
              </p>
              <p className="mt-1">
                VORN HR:{" "}
                <a href="mailto:hr@abhivorn.com" className="text-primary hover:underline">
                  hr@abhivorn.com
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal from="right" className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={faqs} className="border-t border-border" title="Before you reach out" />
    </>
  );
}
