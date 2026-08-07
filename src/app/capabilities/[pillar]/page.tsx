import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities, getPillar } from "@/data/capabilities";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

type Props = { params: Promise<{ pillar: string }> };

export function generateStaticParams() {
  return capabilities.map((p) => ({ pillar: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar: slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return {};
  return {
    title: pillar.title,
    description: pillar.blurb,
  };
}

export default async function PillarPage({ params }: Props) {
  const { pillar: slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="mb-6 text-sm text-cream/40">
        <Link href="/capabilities" className="hover:text-cream">
          Capabilities
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cream/70">{pillar.title}</span>
      </p>
      <PageIntro eyebrow="Pillar" title={pillar.title} deck={pillar.blurb} />
      <ul className="divide-y divide-cream/10 border-y border-cream/10">
        {pillar.services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/capabilities/${pillar.slug}/${s.slug}`}
              className="group flex flex-col gap-2 py-6 transition sm:flex-row sm:items-baseline sm:justify-between"
            >
              <h2 className="font-display text-xl text-cream group-hover:text-amber-light sm:text-2xl">
                {s.title}
              </h2>
              <p className="max-w-md text-sm text-cream/50 sm:text-right">{s.deck}</p>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand title={`Talk about ${pillar.title}`} />
    </div>
  );
}
