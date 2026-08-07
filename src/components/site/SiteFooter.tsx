import Link from "next/link";
import { site } from "@/data/site";

const social = [
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "Facebook", href: site.social.facebook },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t hairline bg-void-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-2xl tracking-tight text-cream">{site.name}</p>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">{site.tagline}</p>
          <p className="text-sm text-cream/45">Digital moves that matter.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Explore</p>
          <Link href="/perspective" className="block text-cream/75 hover:text-cream">
            Perspective
          </Link>
          <Link href="/collective" className="block text-cream/75 hover:text-cream">
            Collective
          </Link>
          <Link href="/careers" className="block text-cream/75 hover:text-cream">
            Careers
          </Link>
          <Link href="/connect" className="block text-cream/75 hover:text-cream">
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
          <a href={`mailto:${site.email}`} className="block text-cream/75 hover:text-cream">
            {site.email}
          </a>
          <a href={`tel:${site.phoneTel}`} className="block text-cream/75 hover:text-cream">
            {site.phone}
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-cream/55">
            {social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="hover:text-cream">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <Link href="/connect" className="hover:text-cream/70">
            Connect
          </Link>
        </div>
      </div>
    </footer>
  );
}
