import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectivePages, getCollectivePage } from "@/data/collective";
import { Crumb, CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collectivePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getCollectivePage(slug);
  if (!p) return {};
  return { title: p.title, description: p.deck };
}

export default async function CollectiveLeafPage({ params }: Props) {
  const { slug } = await params;
  const p = getCollectivePage(slug);
  if (!p) notFound();

  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-64 amber-glow opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", href: "/" },
            { name: "Collective", href: "/collective" },
            { name: p.title, href: `/collective/${p.slug}` },
          ]}
        />
        <Crumb
          items={[
            { label: "Collective", href: "/collective" },
            { label: p.title },
          ]}
        />
        <PageIntro eyebrow="Collective" title={p.title} deck={p.deck} />
        <ul className="max-w-3xl border-t border-cream/10">
          {p.points.map((point, i) => (
            <li key={point}>
              <Reveal delay={i * 50}>
                <div className="grid gap-3 border-t border-cream/10 py-6 text-cream/70 sm:grid-cols-[4rem_1fr] sm:items-baseline">
                  <span className="font-display text-lg tabular-nums text-cream/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed sm:text-lg">{point}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-6 text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">
          <Link href="/careers" className="transition hover:text-amber-light">
            Careers →
          </Link>
          <Link href="/perspective/team" className="transition hover:text-amber-light">
            Team →
          </Link>
        </div>
        <CtaBand />
      </div>
    </div>
  );
}
