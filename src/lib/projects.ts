export type ProjectCategory = "Healthcare" | "E-commerce" | "Enterprise" | "Finance" | "Import & Export" | "Websites" | "Community";

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
  "Import & Export",
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
      "A multilingual Next.js portal with a step-by-step seva booking flow, Razorpay and UPI payments, printable seva tickets and an admin command centre for the temple team.",
    highlights: [
      "Multilingual, with Telugu spiritual content",
      "Razorpay cards, net banking and UPI QR payments",
      "Admin centre with bookings, donations, gallery and live-stream control",
      "Priest Sankalpam register and CSV exports",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Razorpay", "Cloudinary"],
    url: "https://www.srikariatirudram.com/en",
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
    slug: "sculpt-aesthetic-plastic-surgery",
    name: "Sculpt Aesthetic & Plastic Surgery Hospital",
    client: "Sculpt, Madhapur, Hyderabad",
    category: "Healthcare",
    status: "Live",
    headline: "A premium website for a cosmetic, plastic surgery and hair transplant hospital",
    summary:
      "A refined, consultation-focused website presenting the hospital's surgical, hair transplant and non-surgical treatments.",
    challenge:
      "The hospital needed a site that builds trust with patients researching sensitive procedures and makes booking a consultation effortless.",
    solution:
      "A Next.js website with treatment pages, doctor profiles, appointment booking and floating call and WhatsApp actions, in a calm editorial design.",
    highlights: [
      "Treatment pages for face, body, breast, hair and skin",
      "Appointment booking with floating call and WhatsApp actions",
      "Fast, mobile-first build with optimised images",
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://thesculpt.co.in/",
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
    slug: "lorven-golf",
    name: "Lorven Golf",
    client: "Lorven Golf, Hyderabad",
    category: "E-commerce",
    status: "Live",
    headline: "An online store for premium golf equipment and apparel",
    summary:
      "Lorven Golf's e-commerce store for clubs, shoes, apparel, bags, balls and accessories from leading golf brands.",
    challenge: "The retailer needed a clean, fast store that works well on mobile for golfers browsing premium equipment.",
    solution:
      "A Next.js storefront with six product categories, deals and new arrivals, customer accounts with order tracking, and secure online checkout.",
    highlights: [
      "Shop by clubs, shoes, apparel, bags, balls and accessories",
      "Customer accounts with order tracking",
      "Secure online checkout with Razorpay",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Razorpay"],
    url: "https://lorvengolf.com/",
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
    category: "Import & Export",
    status: "Live",
    headline: "A B2B sourcing platform connecting global buyers with Indian manufacturers",
    summary:
      "Costita's platform for factory-direct sourcing from India, covering product discovery, quality inspection and global logistics.",
    challenge:
      "International buyers needed one trustworthy place to find verified Indian manufacturers, see order terms and request quotes for bulk orders.",
    solution:
      "A B2B website with a product catalogue across 10+ categories showing MOQs and dispatch timelines, custom quote requests, and clear logistics and buyer-protection pages.",
    highlights: [
      "Product catalogue with MOQs and dispatch timelines",
      "Custom quote request form for bulk and custom orders",
      "Logistics, shipping and buyer-protection information",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://costita.com/",
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
    slug: "vorn-hr",
    name: "VORN HR",
    client: "In-house product",
    category: "Enterprise",
    status: "Live",
    headline: "A complete HRMS for Indian businesses",
    summary: "Our own HR management software covering the full employee lifecycle in one place.",
    challenge: "Growing companies juggle spreadsheets and separate tools for attendance, leave, payroll and employee records.",
    solution: "We built VORN HR as one complete HRMS: employee records, attendance, leave, payroll, performance and self-service, with HR analytics.",
    highlights: [
      "Employee records and self-service",
      "Attendance with biometric integration, and leave workflows",
      "Payroll, payslips and HR analytics",
    ],
    tech: ["React", "Django", "PostgreSQL", "AWS"],
    url: "https://www.vornhr.com/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
