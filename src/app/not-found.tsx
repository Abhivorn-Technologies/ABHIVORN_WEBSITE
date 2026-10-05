import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/site";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-gradient-to-b from-muted/60 to-background">
      <div className="container-custom py-20 text-center">
        <p className="text-8xl font-bold text-accent/30 sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">This page doesn&apos;t exist</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          The link may be old or mistyped. Try one of these pages instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="lg">
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden /> Back to home
            </Link>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <Link href="/contact">
              <ArrowLeft className="h-4 w-4" aria-hidden /> Contact us
            </Link>
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {mainNav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-primary">
                {n.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
