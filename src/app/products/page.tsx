import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import PageHero from "@/components/sections/PageHero";
import CtaBand from "@/components/sections/CtaBand";
import { pageMetadata } from "@/lib/seo";
import vornLogo from "@/assets/logo5.png";
import vorqardLogo from "@/assets/VORQRD.png";

export const metadata = pageMetadata({
  title: "Our Products — VORQARD Healthcare & VORN HR",
  description:
    "Software products built and run by Abhivorn: VORQARD, a connected healthcare ecosystem with Doctor and Patient apps, and VORN HR, HR management for Indian businesses.",
  path: "/products",
});

const products = [
  {
    name: "VORQARD",
    tag: "Healthcare · Live on Google Play",
    logo: vorqardLogo,
    href: "/products/vorqard",
    accent: "from-pink-500 to-rose-500",
    text: "A connected healthcare ecosystem that links patients, doctors, hospitals, labs and pharmacies around a single patient identity.",
    features: ["Doctor & Patient mobile apps", "Unified patient records", "Appointments & e-prescriptions", "QR-based check-in"],
  },
  {
    name: "VORN HR",
    tag: "HR management",
    logo: vornLogo,
    href: "/products/vorn-hr",
    accent: "from-primary to-accent",
    text: "An HRMS designed for Indian businesses — attendance, leave, payroll and employee self-service in one place.",
    features: ["Biometric & geo-fenced attendance", "Leave policies & approvals", "Payroll with PF / ESI", "Employee mobile app"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Software we <span className="text-accent">build and run</span>
          </>
        }
        description="Alongside client projects, we build our own products. Running them every day keeps our engineering, design and support sharp."
        breadcrumb={[{ name: "Products", path: "/products" }]}
      />
      <section className="section-padding pt-6 md:pt-10">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className={`h-1.5 bg-gradient-to-r ${p.accent}`} />
                <div className="flex flex-1 flex-col p-8 lg:p-10">
                  <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/60 p-3">
                      <Image src={p.logo} alt={`${p.name} logo`} className="h-auto max-h-16 w-full object-contain" sizes="80px" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                      <h2 className="text-3xl font-bold text-foreground">{p.name}</h2>
                    </div>
                  </div>
                  <p className="mt-6 text-lg text-muted-foreground">{p.text}</p>
                  <ul className="mt-6 grid flex-1 gap-3 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" size="lg" className="mt-8 self-start">
                    <Link href={p.href}>
                      Explore {p.name} <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand location="products" title="Want a product like this for your business?" description="We can customise our products or build something entirely new around your workflow." />
    </>
  );
}
