import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import TrackedLink from "@/components/TrackedLink";
import { offices, productLinks, serviceLinks, site } from "@/lib/site";
import logo from "@/assets/logo.png";

const company = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="inline-block" aria-label={`${site.name} home`}>
              <Image src={logo} alt={site.name} className="h-10 w-auto brightness-0 invert" sizes="160px" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Custom software, web and mobile apps, HRMS, healthcare and AI solutions — designed, built and supported by
              our team in Hyderabad.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <TrackedLink
                  href={`mailto:${site.email}`}
                  event="email_click"
                  eventParams={{ location: "footer" }}
                  className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden /> {site.email}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  href={site.phoneHref}
                  event="phone_click"
                  eventParams={{ location: "footer" }}
                  className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" aria-hidden /> {site.phone}
                </TrackedLink>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abhivorn on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition hover:scale-110 hover:bg-[#0A66C2]"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abhivorn on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition hover:scale-110 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737]"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterCol title="Services" className="lg:col-span-3" links={serviceLinks} />

          <div className="space-y-10 lg:col-span-2">
            <FooterCol title="Company" links={company} />
            <FooterCol title="Products" links={productLinks} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 text-base font-semibold">Our Offices</h2>
            <ul className="space-y-4">
              {offices.map((o) => (
                <li key={o.name}>
                  <a
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
                    <span>
                      <span className="block font-medium text-primary-foreground">
                        {o.name} <span className="font-normal text-primary-foreground/60">· {o.label}</span>
                      </span>
                      {o.address}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/70 md:flex-row">
          <p className="text-center md:text-left">
            © {year} {site.legalName}. All rights reserved. Startup India certified.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { name: string; href: string }[]; className?: string }) {
  return (
    <div className={className}>
      <h2 className="mb-5 text-base font-semibold">{title}</h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
