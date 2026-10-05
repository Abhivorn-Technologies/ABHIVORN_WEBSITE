import Image from "next/image";
import { ArrowRight, BarChart3, CalendarDays, CheckCircle2, Clock, FileCheck2, IndianRupee, Smartphone, Target, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import vornLogo from "@/assets/logo5.png";

export const metadata = pageMetadata({
  title: "VORN HR — HRMS Software for Indian Businesses",
  description:
    "VORN HR is an HRMS for Indian businesses: biometric and geo-fenced attendance, leave, payroll with PF/ESI, performance and an employee self-service app.",
  path: "/products/vorn-hr",
});

const modules = [
  { icon: Users, title: "Core HR", text: "Employee database, org chart, documents and self-service profiles." },
  { icon: Clock, title: "Attendance", text: "Biometric, geo-fenced and mobile check-in with shifts and overtime." },
  { icon: CalendarDays, title: "Leave", text: "Custom leave policies, approvals and live balances." },
  { icon: IndianRupee, title: "Payroll", text: "Salary processing, payslips, PF, ESI and professional tax." },
  { icon: Target, title: "Performance", text: "Goals, OKRs and 360° appraisals." },
  { icon: UserPlus, title: "Recruitment", text: "Openings, candidates and hiring workflows." },
  { icon: BarChart3, title: "HR analytics", text: "Headcount, attendance and leave dashboards." },
  { icon: Smartphone, title: "Mobile app", text: "Employees check in, apply for leave and download payslips on the go." },
];

const reasons = [
  "Built for Indian payroll and statutory compliance",
  "Works for single-office and multi-location teams",
  "Role-based access for HR, managers and employees",
  "Data migration and training included in setup",
  "Integrates with biometric devices and existing tools",
  "Support from our Hyderabad team",
];

const faqs = [
  { question: "How long does it take to get started?", answer: "Most companies are up and running in 2–3 weeks, including data migration, configuration and training." },
  { question: "Is VORN HR suitable for small teams?", answer: "Yes. VORN HR works for small teams and scales as you grow, with modules you can switch on as you need them." },
  { question: "Can it integrate with our existing systems?", answer: "Yes. VORN HR integrates with biometric devices, payroll tools, ERPs and other software through APIs." },
  { question: "Is our employee data secure?", answer: "Yes. We use encrypted connections, role-based access control, audit trails and regular backups." },
  { question: "Can VORN HR be customised?", answer: "Yes. We can adapt workflows, add modules or build integrations specific to your company." },
];

export default function VornHrPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "VORN HR",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Android, iOS",
          url: "https://www.vornhr.com",
          description: "HRMS for Indian businesses: attendance, leave, payroll and employee self-service.",
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <PageHero
        align="left"
        eyebrow="VORN HR · HR management"
        title={
          <>
            HR that runs itself, <span className="text-accent">built for India</span>
          </>
        }
        description="Attendance, leave, payroll and performance in one simple HRMS — so your HR team spends less time on spreadsheets and more time on people."
        breadcrumb={[
          { name: "Products", path: "/products" },
          { name: "VORN HR", path: "/products/vorn-hr" },
        ]}
      >
        <Button asChild variant="hero" size="xl">
          <TrackedLink href="/contact" eventParams={{ label: "VORN HR – Book a demo", location: "vornhr_hero" }}>
            Book a Free Demo <ArrowRight className="ml-1 h-5 w-5" />
          </TrackedLink>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <TrackedLink href="https://www.vornhr.com" event="outbound_click" eventParams={{ product: "vornhr", location: "vornhr_hero" }}>
            Visit vornhr.com
          </TrackedLink>
        </Button>
      </PageHero>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="Modules" title="Everything HR needs, in one place" />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <StaggerItem key={m.title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-card-hover">
                <m.icon className="h-7 w-7 text-accent" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="left">
            <SectionHeading align="left" eyebrow="Why VORN HR" title="Designed around how Indian companies work" className="mb-8 md:mb-8" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex gap-2 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden /> {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="right" className="flex flex-col items-center justify-center rounded-3xl border border-border bg-background p-10 text-center">
            <Image src={vornLogo} alt="VORN HR logo" className="h-auto w-64" sizes="256px" />
            <FileCheck2 className="mt-8 h-10 w-10 text-accent" aria-hidden />
            <p className="mt-3 text-lg font-semibold text-foreground">Plans for every team size</p>
            <p className="mt-1 text-muted-foreground">Tell us about your team and we&apos;ll recommend the right setup.</p>
            <Button asChild variant="hero" className="mt-6">
              <TrackedLink href="/contact" eventParams={{ label: "VORN HR – Talk to us", location: "vornhr_plans" }}>
                Talk to our team
              </TrackedLink>
            </Button>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand location="vornhr" title="See VORN HR in action" description="Book a free 30-minute demo with our team and see how VORN HR fits your company." />
    </>
  );
}
