import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import CountUp from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollMe } from "@/components/motion/ScrollMe";
import SectionHeading from "@/components/sections/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { stats } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import vorqardWordmark from "@/assets/vorqard-wordmark.png";

export const metadata = pageMetadata({
  title: "Web Development & Custom Software Company in Hyderabad | Abhivorn",
  description:
    "Abhivorn Technologies builds websites, web applications, mobile apps and custom software in Hyderabad, and runs VORQARD, a connected healthcare platform.",
  path: "/",
});

const webService = services.find((s) => s.slug === "web-development")!;
const otherServices = services.filter((s) => s.slug !== "web-development");

// From vorqard.com
const vorqardAudiences = ["Hospitals", "Clinics", "Doctors", "Labs", "Pharmacies", "Patients"];

const process = [
  { title: "Discovery", desc: "We understand your goals, users and workflow, and document the requirements." },
  { title: "Design", desc: "Wireframes and UI designs you can click through before any code is written." },
  { title: "Build", desc: "Agile sprints with a working demo at every milestone." },
  { title: "Test", desc: "Functional, regression and cross-device testing by our QA team." },
  { title: "Launch", desc: "Deployment with backups, monitoring and a rollback plan." },
  { title: "Support", desc: "Bug-fix warranty after launch, then ongoing improvements." },
];

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Business websites, e-commerce stores, web applications, iOS and Android apps, HRMS and healthcare systems, and AI automation. Clients range from startups to established companies across India.",
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
    answer: "Yes. Every project includes a bug-fix warranty after launch, and we offer ongoing maintenance and enhancements after that.",
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
      <section className="border-b border-border">
        <div className="container-custom py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl animate-fade-in-up [animation-fill-mode:both]">
            <p className="eyebrow">Software development company · Hyderabad</p>
            <h1 className="mt-6 text-balance text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Websites and software <span className="text-muted-foreground">that businesses run on.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We design, build and support websites, web applications and mobile apps for businesses across India — and we
              run VORQARD, our connected healthcare platform.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="xl">
                <TrackedLink href="/contact" eventParams={{ label: "Hero – Get a free quote", location: "home_hero" }}>
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </TrackedLink>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <TrackedLink href="/projects" eventParams={{ label: "Hero – See our work", location: "home_hero" }}>
                  See our work
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Web services — the lead offer */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Web development"
            title="Websites and web apps, designed and built end to end"
            description={webService.summary}
          />
          <Stagger as="ul" className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {webService.offerings.map((o) => (
              <StaggerItem as="li" key={o.title} className="border-b border-border py-6 text-lg text-foreground sm:pr-10">
                {o.title}
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <Link
              href={webService.path}
              className="inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 hover:underline"
            >
              Web development services <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* VORQARD — featured product */}
      <section className="bg-vorqard-soft">
        <div className="container-custom section-padding">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Image src={vorqardWordmark} alt="Vorqard" className="h-10 w-auto sm:h-12" sizes="220px" />
              <h2 className="mt-8 text-balance text-4xl font-medium text-foreground sm:text-5xl">
                One QR code for your entire medical history.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Scan once, treat better. VORQARD connects hospitals, clinics, doctors, labs, pharmacies and patients around a
                single health record — with no commission on consultations, tests or orders.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" className="bg-vorqard text-white hover:bg-vorqard/90">
                  <TrackedLink href="https://www.vorqard.com" event="outbound_click" eventParams={{ product: "vorqard", location: "home_vorqard" }}>
                    Visit vorqard.com <ArrowUpRight className="h-4 w-4" />
                  </TrackedLink>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link href="/products/vorqard">How it works</Link>
                </Button>
              </div>
            </Reveal>

            <ScrollMe from={{ y: 48, opacity: 0.3 }}>
              <p className="eyebrow mb-4">Built for everyone in the care chain</p>
              <ul className="grid grid-cols-2 border-t border-vorqard/20">
                {vorqardAudiences.map((a) => (
                  <li key={a} className="border-b border-vorqard/20 py-5 text-lg text-foreground">
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">Doctor and Patient apps are available on Google Play.</p>
            </ScrollMe>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="Also from our team" title="Software for the rest of your business" />
          <ul className="border-t border-border">
            {otherServices.map((s) => (
              <li key={s.slug} className="border-b border-border">
                <Link href={s.path} className="group grid gap-2 py-7 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_auto] sm:items-center sm:gap-8">
                  <span className="text-xl font-medium text-foreground">{s.name}</span>
                  <span className="text-muted-foreground">{s.summary}</span>
                  <ArrowRight
                    className="hidden h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground sm:block"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected work */}
      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading className="mb-0 md:mb-0" eyebrow="Selected work" title="Recent projects" />
            <Link href="/projects" className="inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 hover:underline">
              All projects <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <Stagger className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {featuredProjects.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-border">
        <div className="container-custom">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-12 ${i % 2 ? "pl-6 lg:pl-8" : "pr-6 lg:pr-8"} ${i > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`}>
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="mt-2 text-4xl font-medium text-foreground sm:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="How we work" title="A clear process, from first call to launch" />
          <Stagger as="ul" className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <StaggerItem as="li" key={p.title} className="border-t border-border pt-6">
                <span className="text-sm tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FaqSection faqs={faqs} className="border-t border-border" />
      <CtaBand location="home" />
    </>
  );
}
