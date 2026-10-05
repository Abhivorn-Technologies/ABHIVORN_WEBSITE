"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjust state during render — no extra effect pass)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenGroup(null);
  }

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    const lenis = window.__lenis;
    if (mobileOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled || mobileOpen
          ? "border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <nav className="container-custom" aria-label="Main">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
            <Image src={logo} alt={site.name} priority className="h-9 w-auto md:h-10" sizes="160px" />
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenGroup(item.name)}
                onMouseLeave={() => setOpenGroup(null)}
                onFocus={() => item.children && setOpenGroup(item.name)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenGroup(null);
                }}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children ? openGroup === item.name : undefined}
                  className={cn(
                    "relative flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors",
                    isActive(item.href) ? "text-primary" : "text-foreground/75 hover:text-primary",
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      aria-hidden
                      className={cn("h-4 w-4 transition-transform duration-200", openGroup === item.name && "rotate-180")}
                    />
                  )}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openGroup === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-3"
                    >
                      <ul className="w-80 rounded-2xl border border-border bg-background p-2 shadow-xl">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block rounded-xl px-4 py-3 transition-colors hover:bg-muted focus-visible:bg-muted"
                            >
                              <span className="block text-sm font-semibold text-foreground">{c.name}</span>
                              {c.description && (
                                <span className="mt-0.5 block text-xs text-muted-foreground">{c.description}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="lg">
              <Link href="/contact" onClick={() => trackEvent("cta_click", { label: "Header – Get a quote", location: "header" })}>
                Get a Free Quote
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="-mr-2 rounded-lg p-2 text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Scroll progress */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-primary to-accent"
        style={{ scaleX: progress }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-border bg-background lg:hidden"
            data-lenis-prevent
          >
            <ul className="container-custom space-y-1 py-4">
              {mainNav.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.08 }}
                  className="border-b border-border/60 last:border-0"
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-foreground"
                        aria-expanded={openGroup === item.name}
                        onClick={() => setOpenGroup(openGroup === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          aria-hidden
                          className={cn("h-5 w-5 transition-transform", openGroup === item.name && "rotate-180")}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openGroup === item.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pb-3"
                          >
                            <li>
                              <Link href={item.href} className="block py-2.5 pl-3 font-medium text-primary">
                                All {item.name.toLowerCase()}
                              </Link>
                            </li>
                            {item.children.map((c) => (
                              <li key={c.href}>
                                <Link href={c.href} className="block py-2.5 pl-3 text-muted-foreground">
                                  {c.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn("block py-4 text-lg font-semibold", isActive(item.href) ? "text-primary" : "text-foreground")}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="container-custom space-y-3 pb-10">
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link href="/contact" onClick={() => trackEvent("cta_click", { label: "Mobile menu – Get a quote", location: "mobile_menu" })}>
                  Get a Free Quote
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg" className="w-full">
                <a href={site.phoneHref} onClick={() => trackEvent("phone_click", { location: "mobile_menu" })}>
                  Call {site.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
