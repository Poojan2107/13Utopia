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
    <div className="mt-16 rounded-2xl border hairline bg-void-soft/60 px-6 py-10 text-center sm:px-10">
      <h2 className="font-display text-2xl text-cream sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-cream/55">
        Tell us the outcome you need. We&apos;ll map the right capabilities.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/connect"
          className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-void transition hover:bg-cream-dim"
        >
          Start a project
        </Link>
        <Link
          href="/capabilities"
          className="rounded-full border border-cream/25 px-6 py-3 text-sm text-cream/90 transition hover:border-amber-light hover:text-amber-light"
        >
          All capabilities
        </Link>
      </div>
    </div>
  );
}
