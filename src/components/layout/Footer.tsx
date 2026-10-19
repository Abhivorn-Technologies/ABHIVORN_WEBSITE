import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import TrackedLink from "@/components/TrackedLink";
import CookieSettingsButton from "@/components/analytics/CookieSettingsButton";
import { offices, productLinks, serviceLinks, site } from "@/lib/site";
import logo from "@/assets/logo.png";

const company = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-block" aria-label={`${site.name} home`}>
              <Image src={logo} alt={site.name} className="h-8 w-auto" sizes="160px" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Websites, web applications and software for growing businesses — designed, built and supported in Hyderabad.
            </p>
            <TrackedLink
              href={`mailto:${site.email}`}
              event="email_click"
              eventParams={{ location: "footer" }}
              className="inline-block text-sm text-foreground underline-offset-4 hover:underline"
            >
              {site.email}
            </TrackedLink>
            <div className="flex gap-2">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abhivorn on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abhivorn on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Services" className="lg:col-span-3" links={serviceLinks} />

          <div className="space-y-10 lg:col-span-2">
            <FooterCol title="Products" links={productLinks} />
            <FooterCol title="Company" links={company} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow mb-5">Offices</h2>
            <ul className="space-y-4">
              {offices.map((o) => (
                <li key={o.name}>
                  <a
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="block text-foreground">{o.name}</span>
                    {o.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">
            © {year} {site.legalName}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <CookieSettingsButton className="transition-colors hover:text-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { name: string; href: string }[]; className?: string }) {
  return (
    <div className={className}>
      <h2 className="eyebrow mb-5">{title}</h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
