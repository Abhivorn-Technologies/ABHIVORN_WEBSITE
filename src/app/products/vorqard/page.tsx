import { ArrowRight, Building2, CalendarCheck, FileText, FlaskConical, Pill, QrCode, ShieldCheck, Smartphone, Stethoscope, UserRound } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TrackedLink from "@/components/TrackedLink";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollMe } from "@/components/motion/ScrollMe";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import vorqardWordmark from "@/assets/vorqard-wordmark.png";

export const metadata = pageMetadata({
  title: "VORQARD: Connected Healthcare Platform",
  description:
    "VORQARD connects patients, doctors, hospitals, labs and pharmacies with one patient ID for records, appointments, prescriptions and reports.",
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
  { title: "Faster front desk", text: "QR check-in replaces long registration forms, so patients spend less time waiting." },
  { title: "Paperless workflows", text: "Digital records, prescriptions and reports remove paper files from the clinic." },
  { title: "Live patient journey", text: "See where every patient is — from check-in to consultation to pharmacy." },
  { title: "Patients stay in control", text: "Patients carry their records on their phone and share them with any provider." },
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
        logo={<Image src={vorqardWordmark} alt="Vorqard" priority className="h-12 w-auto sm:h-14" sizes="250px" />}
        eyebrow="VORQARD · Healthcare"
        title={
          <>
            One QR code for your <span className="text-muted-foreground">entire medical history.</span>
          </>
        }
        description="Scan once, treat better. VORQARD links patients, doctors, hospitals, labs and pharmacies around a single patient identity — records, appointments, prescriptions and reports in one place, with no commission on consultations, tests or orders."
        breadcrumb={[
          { name: "Products", path: "/products" },
          { name: "VORQARD", path: "/products/vorqard" },
        ]}
      >
        <Button asChild size="xl" className="bg-vorqard text-white hover:bg-vorqard/90">
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

      <section className="bg-vorqard-soft">
        <div className="container-custom py-12">
          <p className="eyebrow mb-6">Everyone in the care journey, connected</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {ecosystem.map((e) => (
              <li key={e.name} className="flex items-center gap-3 text-lg text-foreground">
                <e.icon className="h-5 w-5 text-vorqard" aria-hidden />
                {e.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="Features" title="Everything a modern care journey needs" />
          <Stagger as="ul" className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem as="li" key={f.title} className="border-t border-border pt-6">
                <f.icon className="h-5 w-5 text-vorqard" aria-hidden />
                <h3 className="mt-4 text-lg font-medium text-foreground">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeading eyebrow="Why clinics choose it" title="Less paperwork, shorter queues" className="mb-0 md:mb-0" />
          <ScrollMe from={{ y: 40, opacity: 0.3 }}>
            <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <li key={b.title} className="border-t border-border pt-6">
                  <span className="text-sm tabular-nums text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-medium text-foreground">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{b.text}</p>
                </li>
              ))}
            </ol>
          </ScrollMe>
        </div>
      </section>

      <FaqSection faqs={faqs} className="border-t border-border" />
      <CtaBand location="vorqard" title="Bring VORQARD to your clinic" description="Talk to our team about onboarding your doctors, clinic or hospital." />
    </>
  );
}
