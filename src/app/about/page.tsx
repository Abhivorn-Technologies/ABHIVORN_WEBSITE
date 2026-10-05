import Image from "next/image";
import { Award, Lightbulb, MapPin, Shield, Target } from "lucide-react";
import CountUp from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import CtaBand from "@/components/sections/CtaBand";
import { offices, stats, team } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import aboutOffice from "@/assets/about-office.png";

export const metadata = pageMetadata({
  title: "About Us — Software Company in Hyderabad",
  description:
    "Abhivorn Technologies is an MSME-registered software company founded in 2025 in Hyderabad, with a 15-member team, 3 offices and 50+ projects delivered.",
  path: "/about",
});

const values = [
  { icon: Target, title: "Quality first", text: "Every release is tested by our QA team before it reaches your users." },
  { icon: Lightbulb, title: "Practical innovation", text: "We use new technology where it solves a real problem, not for its own sake." },
  { icon: Shield, title: "Transparency", text: "Clear scope, honest timelines and regular demos — no surprises." },
  { icon: Award, title: "Ownership", text: "We treat your product like our own and stand behind it after launch." },
];

const journey = [
  { when: "2025", title: "Founded in Hyderabad", text: "Abhivorn Technologies Pvt Ltd is established at Cyber Towers, HITEC City, and registered as an MSME." },
  { when: "Products", title: "VORN HR goes live", text: "Our HR management product is deployed with its first enterprise client." },
  { when: "Growth", title: "Branches in KPHB and Karimnagar", text: "We expand to three offices across Telangana to serve more clients." },
  { when: "Today", title: "50+ projects and VORQARD live", text: "VORQARD Doctor and Patient apps launch on Google Play, alongside 50+ client projects delivered." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Abhivorn"
        title={
          <>
            A Hyderabad team building <span className="text-accent">software that works</span>
          </>
        }
        description="Founded in 2025 and MSME-registered, we design, build and support web, mobile and enterprise software for businesses across India."
        breadcrumb={[{ name: "About", path: "/about" }]}
      />

      <section className="section-padding">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="left">
            <h2 className="text-3xl font-bold text-foreground">Our story</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Abhivorn Technologies started with a simple idea: businesses of every size deserve software that fits the way they
                work — built properly, delivered on time and supported after launch.
              </p>
              <p>
                We began with VORN HR, our HR management product, and quickly grew into a full-service development company. Today we
                build websites, e-commerce stores, mobile apps, enterprise systems and AI automation for clients in healthcare, real
                estate, retail, finance and more.
              </p>
              <p>
                We also run VORQARD, our connected healthcare platform, which keeps our team close to the challenges of building and
                operating real products.
              </p>
            </div>
          </Reveal>
          <Reveal from="right" className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={aboutOffice}
                alt="The Abhivorn Technologies office in Hyderabad"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                placeholder="blur"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                <div className="text-white">
                  <div className="text-xl font-bold">Cyber Towers, HITEC City</div>
                  <div className="text-sm opacity-80">Our head office in Hyderabad</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="container-custom py-12">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <CountUp value={s.value} suffix={s.suffix} className="block text-4xl font-bold text-primary sm:text-5xl" />
                <div className="mt-2 font-semibold text-foreground">{s.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our team"
            title="Specialists for every part of your project"
            description="A 15-member delivery team, so design, development, testing and deployment all happen in-house."
          />
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {team.map((t) => (
              <StaggerItem key={t.role} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-accent">{t.count}</div>
                <div className="mt-2 font-medium text-foreground">{t.role}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-custom">
          <SectionHeading eyebrow="What we value" title="How we work with clients" />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title} className="rounded-2xl bg-card p-7 text-center shadow-card">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <v.icon className="h-7 w-7 text-primary" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="Our journey" title="How we've grown" />
          <ol className="relative mx-auto max-w-3xl border-l-2 border-border pl-8">
            {journey.map((j, i) => (
              <Reveal as="li" key={j.title} delay={i * 0.05} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.6rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-background bg-accent" aria-hidden />
                <span className="text-sm font-semibold text-accent">{j.when}</span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{j.title}</h3>
                <p className="mt-1 text-muted-foreground">{j.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-custom">
          <SectionHeading eyebrow="Where we are" title="Three offices across Telangana" />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {offices.map((o) => (
              <StaggerItem key={o.name}>
                <a
                  href={o.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <MapPin className="h-6 w-6 text-accent" aria-hidden />
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{o.label}</span>
                  <span className="mt-1 text-xl font-bold text-foreground">{o.name}</span>
                  <span className="mt-2 text-muted-foreground">{o.address}</span>
                  <span className="mt-4 text-sm font-semibold text-primary group-hover:text-accent">Get directions →</span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand location="about" title="Let's build something together" />
    </>
  );
}
