export type ProjectCategory = "Healthcare" | "E-commerce" | "Enterprise" | "Finance" | "Websites" | "Community";

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: ProjectCategory;
  status: "Live" | "In progress" | "Delivered";
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  results?: { metric: string; label: string }[];
  tech: string[];
  url?: string;
  featured?: boolean;
};

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Healthcare",
  "E-commerce",
  "Websites",
  "Enterprise",
  "Finance",
  "Community",
];

/** Newest work first. */
export const projects: Project[] = [
  {
    slug: "vorqard",
    name: "VORQARD",
    client: "In-house product",
    category: "Healthcare",
    status: "Live",
    headline: "A connected healthcare ecosystem for patients, doctors and clinics",
    summary:
      "Our own healthcare platform that links patients, doctors, hospitals, labs and pharmacies around one patient identity.",
    challenge:
      "Patient records, prescriptions and reports are scattered across clinics, labs and paper files, so every visit starts from zero.",
    solution:
      "We built VORQARD as an infrastructure layer for healthcare: unified patient identity, records, appointments, prescriptions and reports, with dedicated apps for doctors and patients.",
    highlights: [
      "Doctor and Patient apps live on Google Play, iOS coming soon",
      "Doctor web platform at doctor.vorqard.com",
      "QR-based patient identification and check-in",
      "Appointments, e-prescriptions and digital reports",
    ],
    tech: ["React Native", "React", "Node.js", "PostgreSQL", "AWS"],
    url: "https://www.vorqard.com",
    featured: true,
  },
  {
    slug: "srikari-ati-rudra-mahayagnam",
    name: "Srikari Ati Rudra Mahayagnam",
    client: "Srikari Seva Samiti, Hyderabad",
    category: "Community",
    status: "Live",
    headline: "Booking, donations and live-stream portal for a 28-day Vedic Yagnam",
    summary:
      "The official digital portal for a 28-day event, letting devotees worldwide book sevas, sponsor Annadanam, donate and watch live.",
    challenge:
      "Thousands of seva bookings, donations and priest sankalpam lists had to be collected online from devotees in India and abroad, in three languages.",
    solution:
      "A multilingual Next.js portal with a 4-step booking wizard, Razorpay and UPI payments, printable seva tickets and an admin command centre for the temple team.",
    highlights: [
      "English, Telugu and Hindi",
      "Razorpay cards, net banking and UPI QR payments",
      "Admin centre with bookings, donations, gallery and live-stream control",
      "Priest Sankalpam register and CSV exports",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Razorpay", "Cloudinary"],
    url: "https://srikariatirudram.org",
    featured: true,
  },
  {
    slug: "cinq-by-raghava",
    name: "CINQ by RAGHAVA",
    client: "RAGHAVA, Financial District, Hyderabad",
    category: "Websites",
    status: "Delivered",
    headline: "An ultra-luxury real estate launch site for a 61-floor, 5-tower project",
    summary:
      "A cinematic single-page experience for a luxury residential launch in Nanakramguda, built to turn visits into site-visit enquiries.",
    challenge:
      "The project needed a launch website that felt as premium as the towers themselves and explained 7+ acres of amenities without overwhelming buyers.",
    solution:
      "A 21-section Next.js landing page with an interactive master plan, tower and floor explorers, animated statistics and an enquiry form on every key screen.",
    highlights: [
      "Interactive 5-tower master plan and lounge explorer",
      "Floor-by-floor clubhouse navigator",
      "Animated counters and parallax, reduced-motion friendly",
      "Lead capture for private viewings",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    slug: "sri-rama-cycles",
    name: "Sri Rama Cycles",
    client: "Sri Rama Cycles",
    category: "E-commerce",
    status: "Delivered",
    headline: "An online bicycle store with checkout, order tracking and an admin console",
    summary:
      "A full e-commerce platform for bicycles, gear and accessories, with a store owner console for orders, stock and enquiries.",
    challenge:
      "The store sold only offline and tracked stock and orders by hand, with no way for customers to browse or order online.",
    solution:
      "A Next.js storefront with filters by type, brand and price, a quick address-card checkout with PIN code lookup, COD and online payments, and a secure admin console.",
    highlights: [
      "Catalogue with search and filters by category, brand, price and gears",
      "Saved addresses, COD and online payments",
      "Live order tracking for customers",
      "Admin dashboard with revenue, orders and low-stock alerts",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    featured: true,
  },
  {
    slug: "the-sculpt-aesthetics",
    name: "The Sculpt Aesthetics",
    client: "The Sculpt Aesthetics, Hyderabad",
    category: "Healthcare",
    status: "Live",
    headline: "A premium website for a cosmetic and plastic surgery clinic",
    summary:
      "A refined, consultation-focused website presenting the clinic's surgical and skin treatments.",
    challenge:
      "The clinic needed a site that builds trust with patients researching sensitive procedures and makes booking a consultation effortless.",
    solution:
      "A Next.js website with treatment pages, a consultation pop-up, floating call and WhatsApp actions, and a calm editorial design.",
    highlights: [
      "Treatment-wise pages for face, body, breast and skin",
      "Consultation booking pop-up and floating contact actions",
      "Fast, mobile-first build with optimised images",
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://thesculptaesthetics.com",
  },
  {
    slug: "kolli-graphics",
    name: "Kolli Graphics",
    client: "Kolli Graphics Pvt Ltd",
    category: "Websites",
    status: "Delivered",
    headline: "A corporate website for a printing, packaging and labels manufacturer",
    summary:
      "A modern company website showcasing offset printing, folding cartons, flexo labels and luxury finishing capabilities.",
    challenge:
      "A manufacturer with a long track record needed a website that reflected the quality of its machines and work to brand buyers.",
    solution:
      "A fast React website with clear capability sections, machinery showcases and enquiry paths for packaging buyers.",
    highlights: [
      "Capability pages for printing, cartons, labels and finishing",
      "Brand-quality visual design",
      "SEO-ready metadata and fast loading",
    ],
    tech: ["React", "TypeScript", "Vite"],
  },
  {
    slug: "golfpro",
    name: "GolfPro",
    client: "GolfPro",
    category: "E-commerce",
    status: "Delivered",
    headline: "An e-commerce store for premium golf equipment and apparel",
    summary: "An online store for clubs, bags, shoes and apparel with customer accounts and a persistent cart.",
    challenge: "The brand needed a clean, fast store that works well on mobile for golfers browsing premium equipment.",
    solution: "A Next.js storefront with authentication, cart, product listings and SEO-friendly pages.",
    highlights: ["Customer sign-in and accounts", "Persistent shopping cart", "SEO-friendly product pages"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "donor-management-system",
    name: "Donor Management System",
    client: "Shiva Sakthi",
    category: "Community",
    status: "Delivered",
    headline: "Secure donor records with role-based access and live dashboards",
    summary:
      "A system for coordinators and administrators to collect, manage and track donation records safely.",
    challenge:
      "Multiple coordinators entered donors at the same time, leading to duplicates and no single view of donations.",
    solution:
      "A Next.js app with coordinator and admin roles, duplicate prevention at the database level, fast data entry and analytics dashboards.",
    highlights: [
      "Coordinator and admin roles with isolated data",
      "Duplicate prevention on email and WhatsApp numbers",
      "7-day donation charts and admin data tables",
    ],
    tech: ["Next.js", "MongoDB", "Auth.js", "shadcn/ui", "Zod"],
  },
  {
    slug: "costita",
    name: "Costita",
    client: "Costita",
    category: "Finance",
    status: "Delivered",
    headline: "Cost tracking and budget optimisation platform",
    summary: "A fintech dashboard that brings costs from every department into one real-time view.",
    challenge:
      "A growing enterprise had scattered cost centres and no unified view of real-time spending against budgets.",
    solution:
      "A dashboard that aggregates costs across departments with real-time alerts and predictive budget forecasting.",
    highlights: ["Unified, real-time spend vs budget view", "Alerts on budget overruns", "Predictive forecasting"],
    results: [
      { metric: "15%", label: "Average cost savings" },
      { metric: "Real-time", label: "Spend visibility" },
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    slug: "elevate-rootz",
    name: "Elevate Rootz",
    client: "Elevate Rootz",
    category: "Healthcare",
    status: "Delivered",
    headline: "Patient CRM and online booking for a wellness centre",
    summary: "A custom CRM with online booking, automated reminders and a patient portal.",
    challenge:
      "The wellness centre booked appointments manually and struggled to keep up with patient follow-ups.",
    solution: "A custom CRM with integrated booking, automated reminders and a patient portal.",
    highlights: ["Online appointment booking", "Automated reminders", "Patient portal"],
    results: [
      { metric: "100+", label: "Patients in month one" },
      { metric: "80%", label: "Less time spent booking" },
    ],
    tech: ["React", "Django", "PostgreSQL", "AWS"],
  },
  {
    slug: "mortgage-document-extraction",
    name: "Mortgage Document AI",
    client: "US mortgage processing firm",
    category: "Finance",
    status: "Delivered",
    headline: "OCR-powered data extraction for mortgage documents",
    summary: "Automated capture and validation of data from mortgage applications.",
    challenge: "Manual processing of mortgage documents was slow, error-prone and held up approvals.",
    solution: "An OCR pipeline that automatically extracts and validates key fields from mortgage applications.",
    highlights: ["OCR and field validation", "Serverless processing on AWS", "Review queue for exceptions"],
    results: [
      { metric: "98.5%", label: "Extraction accuracy" },
      { metric: "85%", label: "Less processing time" },
    ],
    tech: ["Python", "OCR", "AWS Lambda", "PostgreSQL"],
  },
  {
    slug: "vorn-hr-insurance",
    name: "VORN HR rollout",
    client: "Insurance company",
    category: "Enterprise",
    status: "Live",
    headline: "HRMS rollout with biometric attendance for an insurance company",
    summary: "VORN HR deployed with biometric integration and HR analytics dashboards.",
    challenge: "Attendance was tracked manually and HR had no analytics on leave, attendance or performance.",
    solution: "We deployed VORN HR with biometric integration, automated attendance and custom HR dashboards.",
    highlights: ["Biometric attendance integration", "Leave and attendance automation", "HR analytics dashboards"],
    results: [{ metric: "70%", label: "Less HR admin time" }],
    tech: ["VORN HR", "Biometric integration", "Power BI"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
