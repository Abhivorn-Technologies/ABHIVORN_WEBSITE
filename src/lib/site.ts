/**
 * Single source of truth for company facts used across the site.
 * Update numbers, contact details and offices here — every page reads from this file.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.abhivorn.com").replace(/\/$/, "");

export const site = {
  name: "Abhivorn Technologies",
  legalName: "Abhivorn Technologies Pvt Ltd",
  shortDescription:
    "Abhivorn Technologies is a Hyderabad-based software company building custom web apps, mobile apps, HRMS, healthcare and AI solutions for businesses across India.",
  foundingYear: 2025,
  email: "hello@abhivorn.com",
  phone: "+91 99666 29766",
  phoneHref: "tel:+919966629766",
  whatsappHref: "https://wa.me/919966629766?text=Hi%20Abhivorn%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM IST",
  social: {
    linkedin: "https://www.linkedin.com/company/abhivorn-technologies",
    instagram: "https://www.instagram.com/abhivorn_technologies",
  },
} as const;

export type Office = {
  label: string;
  name: string;
  address: string;
  mapUrl: string;
};

export const offices: Office[] = [
  {
    label: "Head Office",
    name: "HITEC City",
    address: "Cyber Towers, HITEC City, Hyderabad, Telangana",
    mapUrl: "https://www.google.com/maps/place/Cyber+Towers+-+HITEC+City/@17.4503676,78.3784705,16z/data=!3m1!4b1!4m6!3m5!1s0x3bcb930036e02df5:0xafd92e6778539645!8m2!3d17.4503676!4d78.3810454!16s%2Fg%2F11xdl26znk",
  },
  {
    label: "Branch Office",
    name: "KPHB",
    address: "KPHB Colony, Kukatpally, Hyderabad, Telangana 500072",
    mapUrl: "https://www.google.com/maps/place/Abhivorn+Technologies/@17.4868787,78.3940046,17z/data=!3m1!4b1!4m6!3m5!1s0x49f364b62c0799dd:0x97e0bc47c22fdf60!8m2!3d17.4868787!4d78.3965795!16s%2Fg%2F11yn9kw_tm",
  },
  {
    label: "Branch Office",
    name: "Karimnagar",
    address: "Karimnagar, Telangana",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Abhivorn+Technologies+Karimnagar",
  },
];

/** Company-level stats shown on the home and about pages. Keep these verifiable. */
export const stats = [
  { value: 50, suffix: "+", label: "Projects delivered", detail: "Web, mobile and enterprise platforms" },
  { value: 15, suffix: "", label: "Member delivery team", detail: "Developers, QA, DevOps and PM" },
  { value: 3, suffix: "", label: "Offices in Telangana", detail: "HITEC City, KPHB and Karimnagar" },
  { value: 2, suffix: "", label: "In-house products", detail: "VORN HR and VORQARD" },
] as const;

export const team = [
  { role: "MERN Stack Developers", count: 3 },
  { role: "Python Developers", count: 3 },
  { role: "QA Engineers", count: 4 },
  { role: "React Native Developers", count: 2 },
  { role: "DevOps Engineers", count: 2 },
  { role: "Project Manager", count: 1 },
] as const;

export type NavItem = { name: string; href: string; description?: string; children?: NavItem[] };

export const serviceLinks: NavItem[] = [
  { name: "Custom Software", href: "/custom-software-development", description: "Business software built around your workflow" },
  { name: "Web Development", href: "/web-development-company-hyderabad", description: "Fast, SEO-ready websites and web apps" },
  { name: "Mobile Apps", href: "/mobile-app-development", description: "iOS and Android apps with React Native" },
  { name: "HRMS Development", href: "/hrms-software-development", description: "HR, attendance and payroll systems" },
  { name: "Healthcare Software", href: "/healthcare-software-development", description: "Clinic, doctor and patient platforms" },
  { name: "AI Development", href: "/ai-development-company", description: "Automation, chatbots and document AI" },
];

export const productLinks: NavItem[] = [
  { name: "VORN HR", href: "/products/vorn-hr", description: "HR management for growing teams" },
  { name: "VORQARD", href: "/products/vorqard", description: "Connected healthcare ecosystem" },
];

export const mainNav: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", children: serviceLinks },
  { name: "Products", href: "/products", children: productLinks },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "AWS",
  "Docker",
] as const;
