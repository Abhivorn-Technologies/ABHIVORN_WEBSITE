"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isEmailConfigured, sendContactEmail } from "@/lib/emailjs";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

const inquiryTypes = [
  "New website",
  "Web application / custom software",
  "Mobile app (iOS / Android)",
  "E-commerce store",
  "HRMS / VORN HR demo",
  "Healthcare / VORQARD",
  "AI & automation",
  "Support for an existing product",
  "Partnership",
  "Something else",
];

const companySizes = ["Just me / startup", "2–10 people", "11–50 people", "51–200 people", "200+ people"];

const empty = { name: "", email: "", phone: "", company: "", companySize: "", inquiryType: "", message: "", consent: false, website: "" };

const selectClass =
  "flex h-11 w-full rounded-lg border border-input bg-background px-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm";

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [started, setStarted] = useState(false);

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!started) {
      setStarted(true);
      trackEvent("contact_form_start");
    }
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((f) => ({ ...f, [k]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // spam bot filled the hidden field
    if (!form.consent) {
      toast.error("Please agree to be contacted so we can reply to you.");
      return;
    }
    if (!isEmailConfigured()) {
      toast.error(`We couldn't send your message right now. Please email us at ${site.email} or WhatsApp ${site.phone}.`);
      trackEvent("contact_form_error", { reason: "not_configured" });
      return;
    }
    setSubmitting(true);
    try {
      await sendContactEmail(form);
      trackEvent("generate_lead", { inquiry_type: form.inquiryType, company_size: form.companySize || "not_given" });
      setSent(true);
      setForm(empty);
    } catch {
      trackEvent("contact_form_error", { reason: "send_failed" });
      toast.error(`Sorry, your message didn't go through. Please try again, or email ${site.email}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-10 text-center" role="status">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" aria-hidden />
        <h2 className="mt-4 text-2xl font-bold text-foreground">Thank you — message received!</h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          Our team will get back to you within one business day. For anything urgent, call or WhatsApp us on {site.phone}.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8" noValidate={false}>
      <div>
        <h2 className="text-2xl font-bold text-foreground">Tell us about your project</h2>
        <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required. We reply within one business day.</p>
      </div>

      {/* Honeypot: hidden from people, catches bots */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name *">
          <Input id="name" name="name" required autoComplete="name" className="h-11" value={form.name} onChange={set("name")} />
        </Field>
        <Field id="email" label="Work email *">
          <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" value={form.email} onChange={set("email")} />
        </Field>
        <Field id="phone" label="Phone / WhatsApp">
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91"
            className="h-11"
            value={form.phone}
            onChange={set("phone")}
          />
        </Field>
        <Field id="company" label="Company">
          <Input id="company" name="company" autoComplete="organization" className="h-11" value={form.company} onChange={set("company")} />
        </Field>
        <Field id="inquiryType" label="What do you need? *">
          <select id="inquiryType" name="inquiryType" required className={selectClass} value={form.inquiryType} onChange={set("inquiryType")}>
            <option value="">Select one</option>
            {inquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="companySize" label="Team size">
          <select id="companySize" name="companySize" className={selectClass} value={form.companySize} onChange={set("companySize")}>
            <option value="">Select one</option>
            {companySizes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Project details *">
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to build? Any timeline or features in mind?"
          className="text-base md:text-sm"
          value={form.message}
          onChange={set("message")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[hsl(var(--accent))]"
          checked={form.consent}
          onChange={set("consent")}
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          I agree to be contacted by Abhivorn Technologies about my enquiry, as described in the{" "}
          <a href="/privacy" className="font-medium text-primary underline underline-offset-2">
            privacy policy
          </a>
          .
        </label>
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            Send message <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
