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
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
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
        <ul className="max-w-xl space-y-0">
          {p.points.map((point, i) => (
            <li key={point}>
              <Reveal delay={i * 50}>
                <div className="flex gap-4 border-t hairline py-5 text-cream/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
                  <span className="text-base leading-relaxed">{point}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/careers" className="link-underline text-cream/55 hover:text-cream">
            Careers →
          </Link>
          <Link href="/perspective/team" className="link-underline text-cream/55 hover:text-cream">
            Team →
          </Link>
        </div>
        <CtaBand />
      </div>
    </div>
  );
}
