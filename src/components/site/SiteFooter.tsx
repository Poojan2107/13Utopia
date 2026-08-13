import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

const social = [
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "Facebook", href: site.social.facebook },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-void">
      <p
        aria-hidden
        className="pointer-events-none select-none px-5 pt-10 font-serif text-[clamp(4.5rem,16vw,14rem)] leading-[0.8] tracking-[-0.07em] text-cream/[0.055] sm:px-8 lg:px-10"
      >
        13UTOPiA
      </p>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div className="space-y-4">
          <Link href="/" className="relative block h-8 w-[7.5rem]" aria-label={site.name}>
            <Image
              src="/brand/13utopia-lockup-flat.png"
              alt={site.name}
              fill
              className="object-contain object-left"
              sizes="120px"
            />
          </Link>
          <p className="max-w-sm font-serif text-xl italic leading-relaxed text-cream/70">{site.tagline}</p>
          <p className="text-sm text-cream/40">Ahmedabad studio — growth, craft, and systems.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Explore</p>
          <Link href="/capabilities" className="block text-cream/75 transition hover:text-cream">
            Capabilities
          </Link>
          <Link href="/solutions" className="block text-cream/75 transition hover:text-cream">
            Solutions
          </Link>
          <Link href="/case-stories" className="block text-cream/75 transition hover:text-cream">
            Case Stories
          </Link>
          <Link href="/perspective" className="block text-cream/75 transition hover:text-cream">
            Perspective
          </Link>
          <Link href="/connect" className="block text-cream/75 transition hover:text-cream">
            Connect
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-light/80">India office</p>
          <address className="not-italic leading-relaxed text-cream/60">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a href={`mailto:${site.email}`} className="block text-cream/75 transition hover:text-cream">
            {site.email}
          </a>
          <a href={`tel:${site.phoneTel}`} className="block text-cream/75 transition hover:text-cream">
            {site.phone}
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-cream/50">
            {social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-cream">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t hairline">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-5 text-[0.65rem] uppercase tracking-[0.16em] text-cream/30 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/legal/privacy" className="transition hover:text-cream/70">
              Privacy
            </Link>
            <Link href="/legal/terms" className="transition hover:text-cream/70">
              Terms
            </Link>
            <Link href="/legal/refund" className="transition hover:text-cream/70">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
