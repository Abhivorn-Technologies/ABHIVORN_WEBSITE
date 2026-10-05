import Image from "next/image";
import { ArrowRight, Building2, CalendarCheck, FileText, FlaskConical, Pill, QrCode, ShieldCheck, Smartphone, Stethoscope, UserRound } from "lucide-react";
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
import clinic from "@/assets/vorqard-clinic.png";
import paperless from "@/assets/vorqard-paperless.png";
import tracking from "@/assets/vorqard-tracking.png";
import patient from "@/assets/vorqard-patient.png";

export const metadata = pageMetadata({
  title: "VORQARD — Connected Healthcare Ecosystem for Patients & Doctors",
  description:
    "VORQARD connects patients, doctors, hospitals, labs and pharmacies with one patient identity — records, appointments, prescriptions and reports. Doctor and Patient apps on Google Play.",
  path: "/products/vorqard",
});

const ecosystem = [
  { icon: UserRound, name: "Patients" },
  { icon: Stethoscope, name: "Doctors" },
  { icon: Building2, name: "Hospitals & clinics" },
  { icon: FlaskConical, name: "Labs" },
  { icon: Pill, name: "Pharmacies" },
];

const features = [
  { icon: QrCode, title: "One patient identity", text: "A unique patient ID and QR code that follows the patient across every clinic, lab and pharmacy." },
  { icon: FileText, title: "Unified health records", text: "History, prescriptions and reports in one place — no more lost files or repeated tests." },
  { icon: CalendarCheck, title: "Appointments", text: "Patients book online; clinics manage queues and schedules without phone tag." },
  { icon: Stethoscope, title: "E-prescriptions", text: "Doctors write clear digital prescriptions that patients and pharmacies can read instantly." },
  { icon: Smartphone, title: "Doctor & Patient apps", text: "Native mobile apps for doctors and patients, plus a web platform for doctors." },
  { icon: ShieldCheck, title: "Privacy by design", text: "Encrypted data, role-based access and consent-based sharing of patient records." },
];

const benefits = [
  { title: "Faster front desk", text: "QR check-in replaces long registration forms, so patients spend less time waiting.", image: clinic },
  { title: "Paperless workflows", text: "Digital records, prescriptions and reports remove paper files from the clinic.", image: paperless },
  { title: "Live patient journey", text: "See where every patient is — from check-in to consultation to pharmacy.", image: tracking },
  { title: "Patients stay in control", text: "Patients carry their records on their phone and share them with any provider.", image: patient },
];

const faqs = [
  { question: "What is VORQARD?", answer: "VORQARD is a connected healthcare ecosystem that gives every patient one identity across doctors, hospitals, labs and pharmacies, with records, appointments, prescriptions and reports in one place." },
  { question: "Where can I download the apps?", answer: "The VORQARD Doctor and Patient apps are available on Google Play for Android. iOS apps are launching soon. Doctors can also use the web platform at doctor.vorqard.com." },
  { question: "Is patient data secure?", answer: "Yes. Data is encrypted in transit and at rest, access is role-based, and patient records are shared only with the patient's consent, in line with India's Digital Personal Data Protection Act." },
  { question: "Can my clinic or hospital join?", answer: "Yes. Contact us and our team will help you onboard your doctors, set up your clinic and train your staff." },
];

export default function VorqardPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "VORQARD",
          applicationCategory: "HealthApplication",
          operatingSystem: "Android, Web",
          url: "https://www.vorqard.com",
          description: "Connected healthcare ecosystem for patients, doctors, hospitals, labs and pharmacies.",
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <PageHero
        align="left"
        eyebrow="VORQARD · Healthcare"
        title={
          <>
            One connected <span className="text-accent">healthcare ecosystem</span>
          </>
        }
        description="VORQARD links patients, doctors, hospitals, labs and pharmacies around a single patient identity — records, appointments, prescriptions and reports, all in one place."
        breadcrumb={[
          { name: "Products", path: "/products" },
          { name: "VORQARD", path: "/products/vorqard" },
        ]}
      >
        <Button asChild variant="hero" size="xl">
          <TrackedLink href="https://www.vorqard.com" event="outbound_click" eventParams={{ product: "vorqard", location: "vorqard_hero" }}>
            Visit vorqard.com <ArrowRight className="ml-1 h-5 w-5" />
          </TrackedLink>
        </Button>
        <Button asChild variant="heroOutline" size="xl">
          <TrackedLink href="/contact" eventParams={{ label: "VORQARD – Onboard my clinic", location: "vorqard_hero" }}>
            Onboard my clinic
          </TrackedLink>
        </Button>
      </PageHero>

      <section className="border-y border-border bg-background">
        <div className="container-custom py-10">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Everyone in the care journey, connected</p>
          <Stagger className="flex flex-wrap items-center justify-center gap-4">
            {ecosystem.map((e) => (
              <StaggerItem key={e.name} className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
                <e.icon className="h-5 w-5 text-accent" aria-hidden />
                <span className="font-medium text-foreground">{e.name}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="Features" title="Everything a modern care journey needs" />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title} className="rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <f.icon className="h-6 w-6 text-secondary" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-custom space-y-16 md:space-y-24">
          {benefits.map((b, i) => (
            <div key={b.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Reveal from={i % 2 ? "right" : "left"} className={i % 2 ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                  <Image src={b.image} alt={b.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" placeholder="blur" />
                </div>
              </Reveal>
              <Reveal from={i % 2 ? "left" : "right"}>
                <span className="text-sm font-semibold text-accent">0{i + 1}</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground">{b.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{b.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <CtaBand location="vorqard" title="Bring VORQARD to your clinic" description="Talk to our team about onboarding your doctors, clinic or hospital." />
    </>
  );
}
