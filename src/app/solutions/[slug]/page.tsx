import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSolution, solutions } from "@/data/solutions";
import { Crumb, CtaBand, PageIntro } from "@/components/site/PageIntro";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";
import { Reveal } from "@/components/site/Reveal";

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
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 amber-glow opacity-45" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", href: "/" },
            { name: "Solutions", href: "/solutions" },
            { name: s.title, href: `/solutions/${s.slug}` },
          ]}
        />
        <Crumb
          items={[
            { label: "Solutions", href: "/solutions" },
            { label: s.title },
          ]}
        />
        <PageIntro eyebrow={s.intent} title={s.title} deck={s.deck} />

        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <section>
              <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Approach</h2>
              <ol className="mt-6 space-y-5">
                {s.approach.map((step, i) => (
                  <li key={step} className="flex gap-4 border-t hairline pt-5 text-cream/75">
                    <span className="font-display text-amber-light/80">{String(i + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
          <Reveal delay={80}>
            <section>
              <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Outcomes</h2>
              <ul className="mt-6 space-y-4">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 border-t hairline pt-4 text-cream/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
                    <span className="leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <section className="mt-16">
          <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Capabilities involved</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
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
    </div>
  );
}
