import Link from "next/link";
import { site } from "@/data/site";

export function PageIntro({
  eyebrow,
  title,
  deck,
  index,
}: {
  eyebrow: string;
  title: string;
  deck: string;
  index?: string;
}) {
  return (
    <header className="relative mb-16 grid gap-8 pt-8 lg:mb-24 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-16">
      <div className="space-y-5">
        <div className="flex items-baseline gap-4">
          {index && (
            <span className="font-serif text-sm tabular-nums text-amber-light/70">{index}</span>
          )}
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">{eyebrow}</p>
        </div>
        <p className="text-[0.58rem] uppercase tracking-[0.2em] text-cream/28">{site.tagline}</p>
        <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-cream text-balance">
          {title}
        </h1>
      </div>
      <p className="max-w-md text-base leading-relaxed text-cream/50 lg:justify-self-end lg:pb-2 lg:text-right sm:text-lg">
        {deck}
      </p>
    </header>
  );
}

export function CtaBand({
  title = "Ready when you are.",
  href = "/connect",
  cta = "Let's talk",
}: {
  title?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="mx-auto mt-24 max-w-[1200px] px-5 sm:mt-32 sm:px-8 lg:px-10">
      <div className="panel-cream px-8 py-16 sm:px-14 sm:py-20 lg:px-20">
        <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber/80">Connect</p>
        <p className="mt-2 text-[0.58rem] uppercase tracking-[0.2em] text-void/40">{site.tagline}</p>
        <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[0.96] tracking-tight text-void">
          {title}
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={href} className="btn-void">
            {cta}
          </Link>
          {href === "/connect" ? (
            <Link href="/capabilities" className="btn-ghost-void">
              Capabilities
            </Link>
          ) : (
            <Link href="/connect" className="btn-ghost-void">
              Connect
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function RelatedList({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string; note?: string }[];
}) {
  if (!items.length) return null;
  return (
    <section className="mt-16 border-t border-cream/10 pt-14">
      <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">{title}</h2>
      <ul className="mt-5 max-w-xl">
        {items.map((item) => (
          <li key={item.href} className="border-t border-cream/10">
            <Link
              href={item.href}
              className="flex items-baseline justify-between gap-4 py-4 text-sm text-cream/65 transition hover:text-amber-light"
            >
              <span>{item.label}</span>
              <span className="shrink-0 text-[0.62rem] uppercase tracking-[0.16em] text-cream/30">
                {item.note ?? "→"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Crumb({
  items,
}: {
  items: readonly { label: string; href?: string }[];
}) {
  return (
    <p className="mb-10 text-[0.65rem] uppercase tracking-[0.22em] text-cream/35">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`}>
          {i > 0 && <span className="mx-2 text-cream/20">/</span>}
          {item.href ? (
            <Link href={item.href} className="transition hover:text-cream">
              {item.label}
            </Link>
          ) : (
            <span className="text-cream/60">{item.label}</span>
          )}
        </span>
      ))}
    </p>
  );
}
