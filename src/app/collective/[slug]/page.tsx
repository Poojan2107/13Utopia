import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectivePages, getCollectivePage } from "@/data/collective";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

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
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="mb-6 text-sm text-cream/40">
        <Link href="/collective" className="hover:text-cream">
          Collective
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cream/70">{p.title}</span>
      </p>
      <PageIntro eyebrow="Collective" title={p.title} deck={p.deck} />
      <ul className="max-w-xl space-y-4">
        {p.points.map((point) => (
          <li key={point} className="flex gap-3 text-cream/75">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <Link href="/careers" className="text-cream/60 hover:text-amber-light">
          Careers →
        </Link>
        <Link href="/perspective/team" className="text-cream/60 hover:text-amber-light">
          Team →
        </Link>
      </div>
      <CtaBand />
    </div>
  );
}
