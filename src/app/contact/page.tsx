import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import TrackedLink from "@/components/TrackedLink";
import { Reveal } from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import FaqSection from "@/components/sections/FaqSection";
import ContactForm from "@/components/contact/ContactForm";
import { offices, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact Abhivorn Technologies in Hyderabad for websites, apps, custom software, HRMS, healthcare and AI projects. Call, WhatsApp or send your requirements for a free quote.",
  path: "/contact",
});

const faqs = [
  {
    question: "How soon will you reply?",
    answer: "We reply to every enquiry within one business day. For anything urgent, call or WhatsApp us directly.",
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
    { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref, event: "phone_click" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "Chat with our team", href: site.whatsappHref, event: "whatsapp_click" },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, event: "email_click" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-accent">great together</span>
          </>
        }
        description="Share your idea and we'll get back within one business day with next steps — the first consultation is free."
        breadcrumb={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="section-padding pt-6 md:pt-10">
        <div className="container-custom grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal from="left" className="space-y-8 lg:col-span-2">
            <div className="space-y-3">
              {channels.map((c) => (
                <TrackedLink
                  key={c.label}
                  href={c.href}
                  event={c.event}
                  eventParams={{ location: "contact_page" }}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-accent/40 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent">
                    <c.icon className="h-5 w-5 text-accent transition-colors group-hover:text-accent-foreground" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">{c.label}</span>
                    <span className="block font-semibold text-foreground">{c.value}</span>
                  </span>
                </TrackedLink>
              ))}
              <div className="flex items-center gap-4 rounded-2xl bg-muted/50 p-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-background">
                  <Clock className="h-5 w-5 text-accent" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Business hours</span>
                  <span className="block font-semibold text-foreground">{site.hours}</span>
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
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
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

            <div className="rounded-2xl border border-border p-5 text-sm text-muted-foreground">
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

      <FaqSection faqs={faqs} className="bg-muted/40" title="Before you reach out" />
    </>
  );
}
