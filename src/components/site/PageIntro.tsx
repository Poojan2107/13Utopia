import Link from "next/link";

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
            <span className="font-display text-sm tabular-nums text-amber-light/70">{index}</span>
          )}
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">{eyebrow}</p>
        </div>
        <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-cream text-balance">
          {title}
        </h1>
      </div>
      <p className="max-w-md text-base leading-relaxed text-cream/50 lg:justify-self-end lg:pb-2 lg:text-right sm:text-lg">
        {deck}
      </p>
    </header>
  );
}

export function CtaBand({ title = "Ready to go deeper?" }: { title?: string }) {
  return (
    <div className="relative mt-24 overflow-hidden border-y border-cream/10 py-20 sm:mt-32 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-10 top-1/2 font-display text-[clamp(6rem,22vw,14rem)] leading-none text-cream/[0.03] -translate-y-1/2 select-none">
        13
      </div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-cream text-balance">
            {title}
          </h2>
          <div className="lg:text-right">
            <p className="text-sm leading-relaxed text-cream/45">
              Tell us the outcome. We&apos;ll map the path — growth, craft, systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/connect"
                className="inline-flex border border-cream bg-cream px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-void transition hover:bg-cream-dim"
              >
                Start a project
              </Link>
              <Link
                href="/capabilities"
                className="inline-flex border border-cream/25 px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-cream/80 transition hover:border-amber-light hover:text-amber-light"
              >
                Capabilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
