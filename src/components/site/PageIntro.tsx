import Link from "next/link";

export function PageIntro({
  eyebrow,
  title,
  deck,
}: {
  eyebrow: string;
  title: string;
  deck: string;
}) {
  return (
    <header className="relative mb-14 max-w-3xl space-y-5 sm:mb-16">
      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-amber-light/85">{eyebrow}</p>
      <h1 className="font-display text-4xl tracking-tight text-cream text-balance sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="max-w-2xl text-base leading-relaxed text-cream/55 sm:text-lg">{deck}</p>
    </header>
  );
}

export function CtaBand({ title = "Ready to go deeper?" }: { title?: string }) {
  return (
    <div className="relative mt-20 overflow-hidden rounded-[1.5rem] border hairline px-6 py-14 text-center sm:mt-24 sm:px-12 sm:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-void-soft/80" />
      <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />
      <div className="relative">
        <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/55">
          Tell us the outcome you need. We&apos;ll map the right capabilities.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/connect" className="btn-primary">
            Start a project
          </Link>
          <Link href="/capabilities" className="btn-ghost">
            All capabilities
          </Link>
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
    <p className="mb-8 text-sm text-cream/40">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`}>
          {i > 0 && <span className="mx-2">/</span>}
          {item.href ? (
            <Link href={item.href} className="transition hover:text-cream">
              {item.label}
            </Link>
          ) : (
            <span className="text-cream/70">{item.label}</span>
          )}
        </span>
      ))}
    </p>
  );
}
