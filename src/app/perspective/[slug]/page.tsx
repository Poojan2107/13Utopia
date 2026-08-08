import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPerspectivePage, perspectivePages } from "@/data/perspective";
import { Crumb, CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";
import { PeopleGrid } from "@/components/site/People";
import { studioPeople } from "@/data/people";

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
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
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
        {slug === "team" && (
          <div className="mb-16">
            <PeopleGrid people={studioPeople} />
            <p className="mt-6 text-sm text-cream/40">
              Portraits publish as we lock them — see also{" "}
              <Link href="/collective" className="link-underline text-cream/60 hover:text-cream">
                Collective
              </Link>
              .
            </p>
          </div>
        )}
        <div className="max-w-3xl">
          {p.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 60}>
              <section className="grid gap-4 border-t border-cream/10 py-10 sm:grid-cols-[8rem_1fr] sm:gap-10">
                <span className="font-display text-2xl tabular-nums text-cream/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl tracking-tight text-cream sm:text-3xl">{s.heading}</h2>
                  <p className="mt-4 text-base leading-relaxed text-cream/55">{s.body}</p>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-[0.7rem] uppercase tracking-[0.2em] text-cream/40">
          <Link href="/collective" className="transition hover:text-amber-light">
            Collective →
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
