import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSolution, solutions } from "@/data/solutions";
import { Crumb, CtaBand, PageIntro, RelatedList } from "@/components/site/PageIntro";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";
import { Reveal } from "@/components/site/Reveal";
import { casesUsingSolution } from "@/data/relations";

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
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
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
        <p className="-mt-8 mb-12 max-w-xl text-sm leading-relaxed text-cream/45 lg:-mt-16">
          {s.whoFor}
        </p>

        <div className="grid gap-16 border-t border-cream/10 pt-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <section>
              <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Approach</h2>
              <ol className="mt-6">
                {s.approach.map((step, i) => (
                  <li
                    key={step}
                    className="grid gap-3 border-t border-cream/10 py-5 text-cream/70 sm:grid-cols-[4rem_1fr] sm:items-baseline"
                  >
                    <span className="font-display text-lg tabular-nums text-cream/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
          <Reveal delay={80}>
            <section>
              <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Outcomes</h2>
              <ul className="mt-6">
                {s.outcomes.map((o, i) => (
                  <li
                    key={o}
                    className="grid gap-3 border-t border-cream/10 py-5 text-cream/70 sm:grid-cols-[4rem_1fr] sm:items-baseline"
                  >
                    <span className="font-display text-lg tabular-nums text-cream/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <section className="mt-16 border-t border-cream/10 pt-14">
          <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Capabilities involved</h2>
          <ul className="mt-5 max-w-xl">
            {s.capabilityHrefs.map((c) => (
              <li key={c.href} className="border-t border-cream/10">
                <Link
                  href={c.href}
                  className="flex items-center justify-between py-4 text-sm text-cream/65 transition hover:text-amber-light"
                >
                  <span>{c.label}</span>
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <RelatedList
          title="Related case stories"
          items={casesUsingSolution(s.slug).map((c) => ({
            label: c.client,
            href: `/case-stories/${c.slug}`,
            note: c.sector,
          }))}
        />
        <CtaBand title={`Start a ${s.title} conversation`} />
      </div>
    </div>
  );
}
