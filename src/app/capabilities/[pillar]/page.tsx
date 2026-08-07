import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities, getPillar } from "@/data/capabilities";
import { Crumb, CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";

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
  const index = capabilities.findIndex((p) => p.slug === pillar.slug);

  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-64 amber-glow opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", href: "/" },
            { name: "Capabilities", href: "/capabilities" },
            { name: pillar.title, href: `/capabilities/${pillar.slug}` },
          ]}
        />
        <Crumb
          items={[
            { label: "Capabilities", href: "/capabilities" },
            { label: pillar.title },
          ]}
        />
        <p className="mb-3 font-display text-sm tabular-nums text-amber-light/55">
          {String(index + 1).padStart(2, "0")} / {String(capabilities.length).padStart(2, "0")}
        </p>
        <PageIntro eyebrow="Pillar" title={pillar.title} deck={pillar.blurb} />
        <ul className="divide-y divide-cream/10 border-y border-cream/10">
          {pillar.services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 40}>
                <Link
                  href={`/capabilities/${pillar.slug}/${s.slug}`}
                  className="group grid gap-2 py-7 transition sm:grid-cols-[1fr_1.1fr] sm:items-baseline sm:gap-10"
                >
                  <h2 className="font-display text-xl text-cream transition group-hover:text-amber-light sm:text-2xl">
                    {s.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-cream/50 sm:text-right">{s.deck}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <CtaBand title={`Talk about ${pillar.title}`} />
      </div>
    </div>
  );
}
