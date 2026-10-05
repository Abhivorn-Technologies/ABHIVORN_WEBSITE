import {
  Brain,
  Code2,
  Globe,
  HeartPulse,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ProjectCategory } from "./projects";

export type Service = {
  slug: string;
  path: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  offerings: { title: string; description: string }[];
  whyUs: string[];
  tech: string[];
  projectCategories: ProjectCategory[];
  product?: { name: string; href: string; blurb: string };
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    path: "/custom-software-development",
    name: "Custom Software Development",
    icon: Code2,
    summary: "Business software built around how your team actually works — portals, dashboards, ERPs and internal tools.",
    metaTitle: "Custom Software Development Company in Hyderabad",
    metaDescription:
      "Abhivorn builds custom business software in Hyderabad — portals, dashboards, ERP and CRM systems, integrations and internal tools. 50+ projects delivered.",
    keywords: ["custom software development company Hyderabad", "custom software India", "business software development", "ERP CRM development"],
    h1: "Custom Software Development Company in Hyderabad",
    intro:
      "Off-the-shelf tools force your team to work around them. We design and build software that fits your process — from customer portals and admin dashboards to ERP, CRM and workflow automation — and support it after launch.",
    offerings: [
      { title: "Business portals & dashboards", description: "Role-based portals for customers, staff and partners with real-time dashboards and reports." },
      { title: "ERP & CRM systems", description: "Inventory, orders, billing, sales pipelines and approvals in one system tailored to your business." },
      { title: "Workflow automation", description: "Replace spreadsheets and manual steps with automated approvals, alerts and scheduled jobs." },
      { title: "APIs & integrations", description: "Connect payment gateways, WhatsApp, SMS, accounting tools, biometrics and third-party systems." },
      { title: "Cloud & DevOps", description: "Secure deployment on AWS or your cloud with CI/CD, backups and monitoring from our DevOps team." },
      { title: "Support & maintenance", description: "Bug-fix warranty after launch, then ongoing enhancements and support as your needs grow." },
    ],
    whyUs: [
      "Dedicated MERN, Python, React Native, QA and DevOps specialists under one roof",
      "Requirements documented and signed off before development starts",
      "QA sign-off is mandatory before anything goes live",
      "Milestone demos so you see progress, not just status reports",
    ],
    tech: ["React", "Next.js", "Node.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "AWS", "Docker"],
    projectCategories: ["Enterprise", "Community", "Finance"],
    faqs: [
      {
        question: "How long does a custom software project take?",
        answer:
          "Most projects take 6–12 weeks for a first release, depending on scope. We break work into phases with a demo at each milestone, so you can start using the core features early.",
      },
      {
        question: "Will we own the source code?",
        answer: "Yes. Once the project is complete, the source code and deployment belong to you.",
      },
      {
        question: "Do you support the software after launch?",
        answer:
          "Every project includes a bug-fix warranty after launch. After that, we offer ongoing support and enhancements, scoped to what you need.",
      },
      {
        question: "Can you work with our existing systems?",
        answer: "Yes. We regularly integrate with payment gateways, accounting tools, biometric devices, ERPs and custom APIs.",
      },
    ],
  },
  {
    slug: "web-development",
    path: "/web-development-company-hyderabad",
    name: "Web Development",
    icon: Globe,
    summary: "Fast, SEO-ready websites, e-commerce stores and web apps built with Next.js and React.",
    metaTitle: "Web Development Company in Hyderabad — Websites, E-commerce & Web Apps",
    metaDescription:
      "Web development company in Hyderabad building fast, SEO-friendly websites, e-commerce stores and web applications with Next.js and React. See our recent projects.",
    keywords: ["web development company Hyderabad", "website development Hyderabad", "ecommerce website development", "Next.js development India"],
    h1: "Web Development Company in Hyderabad",
    intro:
      "Your website is often the first conversation with a customer. We build fast, mobile-first websites, online stores and web applications that rank well on Google, load instantly and turn visitors into enquiries.",
    offerings: [
      { title: "Business & corporate websites", description: "Modern websites that explain what you do clearly and make it easy to get in touch." },
      { title: "E-commerce stores", description: "Catalogues, carts, checkout with Razorpay/UPI/COD, order tracking and an admin console." },
      { title: "Landing pages", description: "High-converting launch and campaign pages with lead capture built in." },
      { title: "Web applications & SaaS", description: "Booking systems, portals and SaaS platforms with secure logins and dashboards." },
      { title: "SEO & performance", description: "Server-rendered pages, structured data, sitemaps and Core Web Vitals tuned from day one." },
      { title: "Multilingual sites", description: "English, Telugu and Hindi versions for audiences across India." },
    ],
    whyUs: [
      "Built on Next.js for speed and search visibility",
      "Every page tested on phones, tablets and desktops before launch",
      "Analytics and lead tracking set up so you can see what's working",
      "Recent launches for real estate, healthcare, retail and community organisations",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL", "Razorpay"],
    projectCategories: ["Websites", "E-commerce"],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "A business website usually takes 2–4 weeks. E-commerce stores and web applications typically take 6–10 weeks depending on features.",
      },
      {
        question: "Will my website be mobile-friendly and SEO-ready?",
        answer:
          "Yes. Every site we build is mobile-first, server-rendered for search engines, and ships with page titles, descriptions, a sitemap and structured data.",
      },
      {
        question: "Can I update the content myself?",
        answer: "Yes. We can add an admin panel or CMS so your team can update products, pages and blog posts without a developer.",
      },
      {
        question: "Do you provide hosting and domain setup?",
        answer: "We handle deployment, domain connection, SSL and analytics setup as part of the launch.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    path: "/mobile-app-development",
    name: "Mobile App Development",
    icon: Smartphone,
    summary: "iOS and Android apps built with React Native — one codebase, native feel, faster launch.",
    metaTitle: "Mobile App Development Company in Hyderabad — iOS & Android",
    metaDescription:
      "Mobile app development company in Hyderabad building iOS and Android apps with React Native. From idea and design to Play Store and App Store launch.",
    keywords: ["mobile app development company Hyderabad", "React Native app development", "Android app development", "iOS app development India"],
    h1: "Mobile App Development Company in Hyderabad",
    intro:
      "We design and build iOS and Android apps with React Native, so you launch on both stores from one codebase. Our team takes your app from idea to Play Store and App Store — and keeps it running after launch.",
    offerings: [
      { title: "Cross-platform apps", description: "One React Native codebase for iOS and Android with a native look and feel." },
      { title: "UI/UX design", description: "Clickable prototypes before development so you can test the flow with real users." },
      { title: "Backend & APIs", description: "Secure APIs, admin dashboards, push notifications and real-time features." },
      { title: "Payments & integrations", description: "Razorpay, UPI, maps, OTP login, WhatsApp and third-party services." },
      { title: "Store launch", description: "Play Store and App Store submission, listings and release management." },
      { title: "Maintenance & updates", description: "OS updates, bug fixes and new features after launch." },
    ],
    whyUs: [
      "Dedicated React Native developers and QA engineers",
      "Our own healthcare apps (VORQARD Doctor and Patient) are live on Google Play",
      "Testing on real devices across screen sizes before release",
      "Backend, web admin and app built by one team",
    ],
    tech: ["React Native", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "MongoDB", "AWS"],
    projectCategories: ["Healthcare", "E-commerce"],
    faqs: [
      {
        question: "Do you build native or cross-platform apps?",
        answer:
          "We specialise in React Native, which gives you one codebase for both iOS and Android with near-native performance. It's faster to build and easier to maintain.",
      },
      {
        question: "How long does it take to build an app?",
        answer: "A first version (MVP) typically takes 8–14 weeks, including design, development, testing and store submission.",
      },
      {
        question: "Will you publish the app to the stores?",
        answer: "Yes. We handle Play Store and App Store submission under your developer accounts.",
      },
    ],
  },
  {
    slug: "hrms-software-development",
    path: "/hrms-software-development",
    name: "HRMS Development",
    icon: Users,
    summary: "HR, attendance, leave and payroll systems built for Indian compliance — ready-made or fully custom.",
    metaTitle: "HRMS Software Development Company in Hyderabad",
    metaDescription:
      "HRMS software for Indian businesses — attendance, leave, payroll with PF/ESI, employee self-service and HR analytics. VORN HR or a custom HRMS built by Abhivorn.",
    keywords: ["HRMS software Hyderabad", "HRMS development company India", "payroll software India", "attendance management system"],
    h1: "HRMS Software Development Company in Hyderabad",
    intro:
      "Running HR on spreadsheets breaks as you grow. We offer VORN HR, our ready-to-use HRMS for Indian businesses, and build fully custom HR systems when your policies and workflows need something unique.",
    offerings: [
      { title: "Attendance & shifts", description: "Biometric, geo-fenced and mobile check-in with shift and overtime rules." },
      { title: "Leave management", description: "Custom leave policies, approvals and balances employees can see on their phone." },
      { title: "Payroll & compliance", description: "Salary processing with PF, ESI, professional tax and payslips." },
      { title: "Employee self-service", description: "Profiles, documents, payslips and requests in a web and mobile app." },
      { title: "Performance", description: "Goals, reviews and appraisals that managers actually complete." },
      { title: "HR analytics", description: "Headcount, attendance and leave trends in clear dashboards." },
    ],
    whyUs: [
      "We build and run our own HRMS product, VORN HR",
      "Designed for Indian payroll, statutory rules and multi-location teams",
      "Data migration and training included in setup",
      "Integrates with biometric devices and existing payroll tools",
    ],
    tech: ["React", "Django", "PostgreSQL", "React Native", "AWS"],
    projectCategories: ["Enterprise"],
    product: { name: "VORN HR", href: "/products/vorn-hr", blurb: "Our ready-to-use HRMS for growing Indian teams." },
    faqs: [
      {
        question: "Should we use VORN HR or a custom HRMS?",
        answer:
          "VORN HR covers attendance, leave, payroll and self-service out of the box and can be set up in 2–3 weeks. If you have unusual policies or need deep integration with other systems, we build a custom HRMS instead.",
      },
      {
        question: "Does it handle PF, ESI and professional tax?",
        answer: "Yes. Payroll is designed for Indian statutory requirements including PF, ESI and state professional tax.",
      },
      {
        question: "Can it work with our biometric devices?",
        answer: "Yes. We integrate with common biometric attendance devices and also support geo-fenced mobile check-in.",
      },
    ],
  },
  {
    slug: "healthcare-software-development",
    path: "/healthcare-software-development",
    name: "Healthcare Software",
    icon: HeartPulse,
    summary: "Clinic, doctor and patient platforms — appointments, digital records, prescriptions and apps.",
    metaTitle: "Healthcare Software Development Company in Hyderabad",
    metaDescription:
      "Healthcare software development in Hyderabad — clinic management, patient apps, e-prescriptions and digital records. Builders of the VORQARD healthcare ecosystem.",
    keywords: ["healthcare software development Hyderabad", "clinic management software India", "hospital management system", "patient app development"],
    h1: "Healthcare Software Development Company in Hyderabad",
    intro:
      "We build software for clinics, hospitals, labs and wellness centres — and we run our own healthcare platform, VORQARD. That means we understand patient flow, records and the day-to-day reality of healthcare teams.",
    offerings: [
      { title: "Clinic & hospital management", description: "Appointments, queues, billing and patient records for single clinics or multi-specialty hospitals." },
      { title: "Doctor & patient apps", description: "Mobile apps for appointments, prescriptions, reports and reminders." },
      { title: "QR-based check-in", description: "Faster front-desk flow with QR patient identification." },
      { title: "E-prescriptions & reports", description: "Digital prescriptions and lab reports patients can access anytime." },
      { title: "Clinic websites", description: "Trust-building websites with consultation booking for clinics and specialists." },
      { title: "Integrations", description: "Labs, pharmacies, payment gateways and existing hospital systems." },
    ],
    whyUs: [
      "Builders of VORQARD — Doctor and Patient apps live on Google Play",
      "Patient data protected with encryption and role-based access",
      "Experience with clinics, wellness centres and specialist practices",
      "Web, mobile and backend from one team",
    ],
    tech: ["React Native", "React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    projectCategories: ["Healthcare"],
    product: { name: "VORQARD", href: "/products/vorqard", blurb: "Our connected healthcare ecosystem for patients, doctors and clinics." },
    faqs: [
      {
        question: "Is patient data secure?",
        answer:
          "Yes. We use encrypted connections and storage, role-based access, audit logs and regular backups, and design systems in line with India's Digital Personal Data Protection Act.",
      },
      {
        question: "Can you build a custom system instead of using VORQARD?",
        answer: "Yes. Many clinics start with VORQARD, but we also build fully custom healthcare software when the workflow needs it.",
      },
      {
        question: "Do you build websites for clinics?",
        answer: "Yes — for example The Sculpt Aesthetics, a cosmetic surgery clinic in Hyderabad, with consultation booking built in.",
      },
    ],
  },
  {
    slug: "ai-development",
    path: "/ai-development-company",
    name: "AI Development",
    icon: Brain,
    summary: "Practical AI — chatbots, document extraction, automation and smart analytics for real business problems.",
    metaTitle: "AI Development Company in Hyderabad — Chatbots, Automation & Document AI",
    metaDescription:
      "AI development company in Hyderabad building chatbots, document extraction (OCR), workflow automation and predictive analytics that solve real business problems.",
    keywords: ["AI development company Hyderabad", "AI chatbot development India", "OCR document extraction", "AI automation services"],
    h1: "AI Development Company in Hyderabad",
    intro:
      "We use AI where it saves real time or money — reading documents, answering customer questions, routing work and spotting trends. Our Python team builds AI into your existing systems, not as a disconnected experiment.",
    offerings: [
      { title: "AI chatbots & assistants", description: "Website and WhatsApp assistants trained on your products, policies and FAQs." },
      { title: "Document AI & OCR", description: "Extract and validate data from invoices, forms and applications automatically." },
      { title: "Workflow automation", description: "Classify, prioritise and route tickets, leads and requests without manual sorting." },
      { title: "Predictive analytics", description: "Forecast demand, budgets and trends from your own data." },
      { title: "AI-powered features", description: "Smart search, summaries and recommendations inside your apps." },
      { title: "Integration", description: "Connect AI models to your CRM, ERP, databases and communication tools." },
    ],
    whyUs: [
      "Delivered OCR extraction with 98.5% accuracy for a US mortgage processor",
      "Python, data and DevOps engineers in-house",
      "We start with a small proof of value before scaling",
      "Your data stays protected and under your control",
    ],
    tech: ["Python", "FastAPI", "Django", "OCR", "LLMs", "AWS Lambda", "PostgreSQL"],
    projectCategories: ["Finance", "Enterprise"],
    faqs: [
      {
        question: "Where should a business start with AI?",
        answer:
          "Start with one repetitive, high-volume task — like reading documents or answering common questions. We build a small proof of value first, measure the time saved, then scale.",
      },
      {
        question: "Can AI work with our existing software?",
        answer: "Yes. We integrate AI into your CRM, ERP, website, WhatsApp or internal tools through APIs.",
      },
      {
        question: "Is our data safe?",
        answer: "Yes. We design AI solutions so your data stays within your control and is never used to train public models.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
