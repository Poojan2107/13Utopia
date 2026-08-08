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
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
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
        <ul className="border-y border-cream/10">
          {pillar.services.map((s, i) => (
            <li key={s.slug} className="border-t border-cream/10 first:border-t-0">
              <Reveal delay={i * 40}>
                <Link
                  href={`/capabilities/${pillar.slug}/${s.slug}`}
                  className="group grid gap-3 py-8 transition lg:grid-cols-[5rem_1fr_1.1fr] lg:items-baseline lg:gap-10"
                >
                  <span className="font-display text-2xl tabular-nums text-cream/15 transition group-hover:text-amber-light/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl text-cream transition group-hover:text-amber-light sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-cream/50 lg:text-right">{s.deck}</p>
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
