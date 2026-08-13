import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectivePages, getCollectivePage } from "@/data/collective";
import { peopleByRoom } from "@/data/people";
import { Crumb, CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";
import { PeopleGrid } from "@/components/site/People";

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
  const people = p.room ? peopleByRoom(p.room) : [];
  const craft = slug === "creative-studio";

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
        <p className="-mt-8 mb-12 max-w-2xl text-base leading-relaxed text-cream/50 lg:-mt-16">
          {p.body}
        </p>
        <p className="mb-12 text-sm text-cream/35">
          {craft
            ? "Craft room — distinctive work, still 13UTOPiA."
            : "Practice room — clarity, ownership, and accountable delivery."}
        </p>
        {people.length > 0 && (
          <div className="mb-16">
            <p className="mb-6 text-[0.65rem] uppercase tracking-[0.24em] text-cream/35">Seats</p>
            <PeopleGrid people={people} />
          </div>
        )}
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
          <Link href="/connect" className="transition hover:text-amber-light">
            Connect →
          </Link>
        </div>
        <CtaBand />
      </div>
    </div>
  );
}
