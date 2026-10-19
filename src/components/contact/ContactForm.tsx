"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isEmailConfigured, sendContactEmail } from "@/lib/emailjs";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";
import { LIMITS, validateContact, type ContactErrors, type ContactFields } from "@/lib/validation";

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

// Spam protection without a CAPTCHA: a hidden honeypot field, a minimum fill time and a resend cooldown.
const MIN_FILL_MS = 3000;
const RESEND_COOLDOWN_MS = 60_000;
const LAST_SENT_KEY = "abhivorn-contact-last-sent";

const fieldOrder: (keyof ContactFields)[] = ["name", "email", "phone", "company", "inquiryType", "message", "consent"];

const selectClass =
  "flex h-11 w-full rounded-lg border border-input bg-background px-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm";

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});
  const startedAt = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!started) {
      setStarted(true);
      startedAt.current = Date.now();
      trackEvent("contact_form_start");
    }
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((f) => ({ ...f, [k]: value }));
    // Clear a field's error as soon as the visitor fixes it
    if (errors[k as keyof ContactErrors]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  // Validate one field when the visitor leaves it, so mistakes show up before submitting
  const check = (k: keyof ContactFields) => () => {
    const message = validateContact(form)[k];
    setErrors((prev) => ({ ...prev, [k]: message }));
  };

  const errorProps = (k: keyof ContactFields) =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${k}-error` } : {};

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateContact(form);
    setErrors(found);
    const firstInvalid = fieldOrder.find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    // Bots fill the hidden field or submit instantly. Show them the normal thank-you screen and send nothing.
    const tooFast = !startedAt.current || Date.now() - startedAt.current < MIN_FILL_MS;
    if (form.website || tooFast) {
      setSent(true);
      setForm(empty);
      return;
    }

    try {
      const last = Number(localStorage.getItem(LAST_SENT_KEY) || 0);
      if (Date.now() - last < RESEND_COOLDOWN_MS) {
        toast.error("We've just received a message from you. Please wait a minute before sending another.");
        return;
      }
    } catch {
      /* storage blocked — skip the cooldown */
    }

    if (!isEmailConfigured()) {
      toast.error(`We couldn't send your message right now. Please email us at ${site.email} or WhatsApp ${site.phone}.`);
      trackEvent("contact_form_error", { reason: "not_configured" });
      return;
    }
    setSubmitting(true);
    try {
      await sendContactEmail({
        ...form,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        message: form.message.trim(),
      });
      try {
        localStorage.setItem(LAST_SENT_KEY, String(Date.now()));
      } catch {
        /* ignore */
      }
      trackEvent("generate_lead", { inquiry_type: form.inquiryType, company_size: form.companySize || "not_given" });
      setSent(true);
      setForm(empty);
      startedAt.current = null;
      setStarted(false);
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
    <form ref={formRef} onSubmit={onSubmit} className="relative space-y-5 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8" noValidate>
      <div>
        <h2 className="text-2xl font-bold text-foreground">Tell us about your project</h2>
        <p className="mt-1 text-sm text-muted-foreground">Fields marked * are required. We reply within one business day.</p>
      </div>

      {/* Honeypot: hidden from people, catches bots */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name *" error={errors.name}>
          <Input
            id="name"
            name="name"
            required
            maxLength={LIMITS.name}
            autoComplete="name"
            className="h-11"
            value={form.name}
            onChange={set("name")}
            onBlur={check("name")}
            {...errorProps("name")}
          />
        </Field>
        <Field id="email" label="Work email *" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={LIMITS.email}
            autoComplete="email"
            className="h-11"
            value={form.email}
            onChange={set("email")}
            onBlur={check("email")}
            {...errorProps("email")}
          />
        </Field>
        <Field id="phone" label="Phone / WhatsApp" error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91"
            maxLength={LIMITS.phone}
            className="h-11"
            value={form.phone}
            onChange={set("phone")}
            onBlur={check("phone")}
            {...errorProps("phone")}
          />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <Input
            id="company"
            name="company"
            maxLength={LIMITS.company}
            autoComplete="organization"
            className="h-11"
            value={form.company}
            onChange={set("company")}
            {...errorProps("company")}
          />
        </Field>
        <Field id="inquiryType" label="What do you need? *" error={errors.inquiryType}>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            className={selectClass}
            value={form.inquiryType}
            onChange={set("inquiryType")}
            onBlur={check("inquiryType")}
            {...errorProps("inquiryType")}
          >
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

      <Field id="message" label="Project details *" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={LIMITS.message}
          onBlur={check("message")}
          {...errorProps("message")}
          placeholder="What would you like to build? Any timeline or features in mind?"
          className="text-base md:text-sm"
          value={form.message}
          onChange={set("message")}
        />
      </Field>

      <div>
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[hsl(var(--accent))]"
          checked={form.consent}
          onChange={set("consent")}
          {...errorProps("consent")}
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          I agree to be contacted by Abhivorn Technologies about my enquiry, as described in the{" "}
          <a href="/privacy" className="font-medium text-primary underline underline-offset-2">
            privacy policy
          </a>
          .
        </label>
      </div>
      <FieldError id="consent" message={errors.consent} />
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

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      <FieldError id={id} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-destructive" role="alert">
      {message}
    </p>
  );
}
