import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import HeroVisual from "@/components/home/HeroVisual";
import CountUp from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { stats, techStack } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import vornLogo from "@/assets/logo5.png";
import vorqardLogo from "@/assets/VORQRD.png";

export const metadata = pageMetadata({
  title: "Custom Software, Web & Mobile App Development Company in Hyderabad | Abhivorn",
  description:
    "Abhivorn Technologies builds custom software, websites, mobile apps, HRMS, healthcare and AI solutions in Hyderabad. 50+ projects delivered by a 15-member team.",
  path: "/",
});

const process = [
  { title: "Discovery", desc: "We understand your goals, users and workflow, and document the requirements." },
  { title: "Design", desc: "Wireframes and UI designs you can click through before any code is written." },
  { title: "Build", desc: "Agile sprints with a working demo at every milestone." },
  { title: "Test", desc: "Functional, regression and cross-device testing by our QA team." },
  { title: "Launch", desc: "Deployment with backups, monitoring and a rollback plan." },
  { title: "Support", desc: "Bug-fix warranty after launch, then ongoing improvements." },
];

const industries = ["Healthcare", "Real estate", "E-commerce & retail", "Finance", "HR & staffing", "Manufacturing", "Non-profit & community", "Education"];

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "We build business websites, e-commerce stores, web applications, iOS and Android apps, HRMS and healthcare systems, and AI automation. Clients range from startups to established companies across India.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A business website usually takes 2–4 weeks, a web or mobile app 6–14 weeks, and larger platforms are delivered in phases. You'll get a clear timeline before we start.",
  },
  {
    question: "How do you price projects?",
    answer:
      "Every project is quoted after we understand the scope, so you only pay for what you need. Share your requirements and we'll send a detailed proposal with timelines.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a bug-fix warranty after launch, and we offer ongoing maintenance and enhancements after that.",
  },
  {
    question: "Where is your team based?",
    answer:
      "Our head office is at Cyber Towers, HITEC City, Hyderabad, with branches in KPHB and Karimnagar. We work with clients across India and overseas.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/60 via-background to-background">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <div className="container-custom relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Startup India certified · Hyderabad
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Software, web &amp; mobile apps <span className="text-accent">built to grow</span> your business
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Abhivorn Technologies is a Hyderabad software company. We design, build and support custom software, websites,
              mobile apps, HRMS, healthcare and AI solutions for businesses across India.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <TrackedLink href="/contact" eventParams={{ label: "Hero – Get a free quote", location: "home_hero" }}>
                  Get a Free Quote <ArrowRight className="ml-1 h-5 w-5" />
                </TrackedLink>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <TrackedLink href="/projects" eventParams={{ label: "Hero – See our work", location: "home_hero" }}>
                  See Our Work
                </TrackedLink>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Free consultation", "Clear timelines", "You own the code"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background">
        <div className="container-custom py-10 md:py-14">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center lg:text-left">
                <CountUp value={s.value} suffix={s.suffix} className="block text-4xl font-bold text-primary sm:text-5xl" />
                <div className="mt-2 font-semibold text-foreground">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.detail}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What we do"
            title="End-to-end software development"
            description="One team for design, development, testing and deployment — so nothing gets lost between vendors."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={s.path}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="h-6 w-6 text-accent transition-colors group-hover:text-accent-foreground" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured work */}
      <section className="section-padding bg-muted/40">
        <div className="container-custom">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              className="mb-0 md:mb-0"
              eyebrow="Recent work"
              title="Projects we've shipped lately"
              description="From a 28-day event booking portal to luxury real estate launches and e-commerce stores."
            />
            <Reveal>
              <Button asChild variant="outline">
                <Link href="/projects">
                  View all projects <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our products"
            title="Software we build and run ourselves"
            description="Running our own products keeps us sharp — the same team builds your project."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal from="left">
              <ProductTile
                href="/products/vorqard"
                logo={vorqardLogo}
                name="VORQARD"
                tag="Healthcare · Live"
                text="A connected healthcare ecosystem linking patients, doctors, hospitals, labs and pharmacies. Doctor and Patient apps are live on Google Play."
              />
            </Reveal>
            <Reveal from="right">
              <ProductTile
                href="/products/vorn-hr"
                logo={vornLogo}
                name="VORN HR"
                tag="HR management"
                text="Attendance, leave, payroll and employee self-service in one HRMS built for Indian businesses."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/40">
        <div className="container-custom">
          <SectionHeading eyebrow="How we work" title="A clear process, from first call to launch" />
          <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <StaggerItem as="li" key={p.title} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="text-4xl font-bold text-accent/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-muted-foreground">{p.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tech + industries */}
      <section className="section-padding">
        <div className="container-custom grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Technology" title="Modern, proven tech stack" className="mb-8 md:mb-8" />
            <Stagger className="flex flex-wrap gap-3">
              {techStack.map((t) => (
                <StaggerItem key={t}>
                  <span className="inline-block rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                    {t}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Industries" title="Experience across sectors" className="mb-8 md:mb-8" />
            <Stagger className="grid grid-cols-2 gap-3">
              {industries.map((t) => (
                <StaggerItem key={t}>
                  <span className="flex items-center gap-2 rounded-xl bg-muted/60 px-4 py-3 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden /> {t}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} className="bg-muted/40" />
      <CtaBand location="home" />
    </>
  );
}

function ProductTile({
  href,
  logo,
  name,
  tag,
  text,
}: {
  href: string;
  logo: typeof vornLogo;
  name: string;
  tag: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col gap-6 rounded-3xl border border-border bg-gradient-to-br from-card to-muted/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-row sm:items-center"
    >
      <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-background p-3 shadow-sm">
        <Image src={logo} alt={`${name} logo`} className="h-auto max-h-20 w-full object-contain" sizes="96px" />
      </div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{tag}</span>
        <h3 className="mt-1 flex items-center gap-2 text-2xl font-bold text-foreground">
          {name}
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </h3>
        <p className="mt-2 text-muted-foreground">{text}</p>
      </div>
    </Link>
  );
}
