import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSolution, solutions } from "@/data/solutions";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return { title: `${s.title} — Solutions`, description: s.deck };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="mb-6 text-sm text-cream/40">
        <Link href="/solutions" className="hover:text-cream">
          Solutions
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cream/70">{s.title}</span>
      </p>
      <PageIntro eyebrow={s.intent} title={s.title} deck={s.deck} />

      <div className="grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Approach</h2>
          <ol className="mt-4 space-y-4">
            {s.approach.map((step, i) => (
              <li key={step} className="flex gap-4 text-cream/75">
                <span className="font-display text-amber-light/80">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Outcomes</h2>
          <ul className="mt-4 space-y-3">
            {s.outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-cream/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-14">
        <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Capabilities involved</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {s.capabilityHrefs.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="inline-block rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/70 transition hover:border-amber-light hover:text-amber-light"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Start a ${s.title} conversation`} />
    </div>
  );
}
