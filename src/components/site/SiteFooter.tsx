import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { Capsule } from "@/components/home/Capsule";

const social = [
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "Facebook", href: site.social.facebook },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-void">
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-10 px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/" className="relative block h-8 w-[7.5rem]" aria-label={site.name}>
            <Image
              src="/brand/13utopia-lockup-flat.png"
              alt={site.name}
              fill
              className="object-contain object-left"
              sizes="120px"
            />
          </Link>
          <div className="flex flex-wrap gap-2">
            <Link href="/case-stories" className="no-underline">
              <Capsule>Work</Capsule>
            </Link>
            <Link href="/capabilities" className="no-underline">
              <Capsule>Capabilities</Capsule>
            </Link>
            <Link href="/solutions" className="no-underline">
              <Capsule>Solutions</Capsule>
            </Link>
            <Link href="/perspective" className="no-underline">
              <Capsule>Perspective</Capsule>
            </Link>
            <Link href="/collective" className="no-underline">
              <Capsule>Collective</Capsule>
            </Link>
            <Link href="/connect" className="no-underline">
              <Capsule>Connect</Capsule>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a href={`tel:${site.phoneTel}`} className="no-underline">
            <Capsule>{site.phone}</Capsule>
          </a>
          <a href={`mailto:${site.email}`} className="no-underline">
            <Capsule>{site.email}</Capsule>
          </a>
        </div>
      </div>
      <div className="relative border-t hairline">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-5 text-[0.65rem] uppercase tracking-[0.16em] text-cream/30 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-cream/70">
                {s.label}
              </a>
            ))}
            <Link href="/legal/privacy" className="transition hover:text-cream/70">
              Privacy
            </Link>
            <Link href="/legal/terms" className="transition hover:text-cream/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
