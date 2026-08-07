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
    <header className="mb-12 max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">{eyebrow}</p>
      <h1 className="font-display text-4xl tracking-tight text-cream text-balance sm:text-5xl">{title}</h1>
      <p className="text-base leading-relaxed text-cream/60 sm:text-lg">{deck}</p>
    </header>
  );
}

export function CtaBand({ title = "Ready to go deeper?" }: { title?: string }) {
  return (
    <div className="relative mt-16 overflow-hidden rounded-2xl border hairline bg-void-soft/70 px-6 py-12 text-center sm:px-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow opacity-60" />
      <div className="relative">
        <h2 className="font-display text-2xl text-cream sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/55">
          Tell us the outcome you need. We&apos;ll map the right capabilities.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
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
