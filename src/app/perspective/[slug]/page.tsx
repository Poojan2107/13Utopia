import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPerspectivePage, perspectivePages } from "@/data/perspective";
import { Crumb, CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return perspectivePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerspectivePage(slug);
  if (!p) return {};
  return { title: p.title, description: p.deck };
}

export default async function PerspectiveLeafPage({ params }: Props) {
  const { slug } = await params;
  const p = getPerspectivePage(slug);
  if (!p) notFound();

  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-64 amber-glow opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", href: "/" },
            { name: "Perspective", href: "/perspective" },
            { name: p.title, href: `/perspective/${p.slug}` },
          ]}
        />
        <Crumb
          items={[
            { label: "Perspective", href: "/perspective" },
            { label: p.title },
          ]}
        />
        <PageIntro eyebrow="Perspective" title={p.title} deck={p.deck} />
        <div className="max-w-2xl space-y-12">
          {p.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 60}>
              <section className="border-t hairline pt-8">
                <h2 className="font-display text-2xl text-cream">{s.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-cream/60">{s.body}</p>
              </section>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link href="/collective" className="link-underline text-cream/55 hover:text-cream">
            Collective →
          </Link>
          <Link href="/connect" className="link-underline text-cream/55 hover:text-cream">
            Connect →
          </Link>
        </div>
        <CtaBand />
      </div>
    </div>
  );
}
