import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPerspectivePage, perspectivePages } from "@/data/perspective";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

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
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="mb-6 text-sm text-cream/40">
        <Link href="/perspective" className="hover:text-cream">
          Perspective
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cream/70">{p.title}</span>
      </p>
      <PageIntro eyebrow="Perspective" title={p.title} deck={p.deck} />
      <div className="max-w-2xl space-y-10">
        {p.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-xl text-cream">{s.heading}</h2>
            <p className="mt-3 text-cream/65 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
      <CtaBand />
    </div>
  );
}
