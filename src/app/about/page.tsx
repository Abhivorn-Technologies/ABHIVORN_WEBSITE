import { Award, Lightbulb, MapPin, Shield, Target } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollMe } from "@/components/motion/ScrollMe";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import CtaBand from "@/components/sections/CtaBand";
import { offices, team } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us — Software Company in Hyderabad",
  description:
    "Abhivorn Technologies is a Startup India certified software company founded in 2025 in Hyderabad, with a 15-member team, 3 offices and 50+ projects delivered.",
  path: "/about",
});

const values = [
  { icon: Target, title: "Quality first", text: "Every release is tested by our QA team before it reaches your users." },
  { icon: Lightbulb, title: "Practical innovation", text: "We use new technology where it solves a real problem, not for its own sake." },
  { icon: Shield, title: "Transparency", text: "Clear scope, honest timelines and regular demos — no surprises." },
  { icon: Award, title: "Ownership", text: "We treat your product like our own and stand behind it after launch." },
];

const journey = [
  { when: "2025", title: "Founded in Hyderabad", text: "Abhivorn Technologies Pvt Ltd is established at Cyber Towers, HITEC City, and certified under Startup India." },
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
            A Hyderabad team building <span className="text-muted-foreground">software that works</span>
          </>
        }
        description="Founded in 2025 and Startup India certified, we design, build and support web, mobile and enterprise software for businesses across India."
        breadcrumb={[{ name: "About", path: "/about" }]}
      />

      <section className="section-padding">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-in-up [animation-fill-mode:both]">
            <h2 className="text-3xl font-semibold text-foreground">Our story</h2>
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
          </div>
          {/* Real office photos can go here once available — the previous AI-generated "office" image was removed so nothing on the page misrepresents the company. */}
          <ScrollMe from={{ y: 48, scale: 0.97, opacity: 0.25 }}>
            <div className="rounded-lg border border-border bg-card p-8 sm:p-10">
              <p className="eyebrow">Head office</p>
              <h2 className="mt-3 text-2xl font-medium text-foreground sm:text-3xl">{offices[0].address}</h2>
              <p className="mt-4 text-muted-foreground">
                Branch offices: {offices
                  .slice(1)
                  .map((o) => o.name)
                  .join(" and ")}
                .
              </p>
              <a
                href={offices[0].mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 hover:underline"
              >
                <MapPin className="h-5 w-5" aria-hidden /> Get directions
                <span className="sr-only"> (opens Google Maps)</span>
              </a>
            </div>
          </ScrollMe>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our team"
            title="Specialists for every part of your project"
            description="A 15-member delivery team, so design, development, testing and deployment all happen in-house."
          />
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {team.map((t) => (
              <StaggerItem key={t.role} className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="text-4xl font-semibold text-accent">{t.count}</div>
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
              <StaggerItem key={v.title} className="rounded-lg bg-card p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-md border border-border">
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
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 transition"
                >
                  <MapPin className="h-6 w-6 text-accent" aria-hidden />
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{o.label}</span>
                  <span className="mt-1 text-xl font-semibold text-foreground">{o.name}</span>
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
