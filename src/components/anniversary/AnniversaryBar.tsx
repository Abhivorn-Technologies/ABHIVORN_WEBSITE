import Link from "next/link";
import { isAnniversaryActive } from "@/lib/anniversary";

export default function AnniversaryBar() {
  if (!isAnniversaryActive()) return null;
  return (
    <div className="anniversary-navy border-b border-[hsl(var(--gold)/0.35)]">
      <div className="container-custom flex items-center justify-center gap-2 py-2 text-center text-sm text-white/90">
        <span className="gold-text whitespace-nowrap font-semibold">Celebrating 1 year</span>
        <span className="hidden md:inline">of building together. Thank you to our clients, partners and team.</span>
        <span className="md:hidden">of building together</span>
        <Link href="/about" className="gold-text hidden font-medium underline-offset-4 hover:underline sm:inline">
          Our story →
        </Link>
      </div>
    </div>
  );
}
