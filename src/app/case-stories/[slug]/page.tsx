import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStories, getCaseStory } from "@/data/case-stories";
import { CtaBand } from "@/components/site/PageIntro";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";
import { CaseFrameBento, CaseMediaNote } from "@/components/site/CaseMedia";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStory(slug);
  if (!c) return {};
  return {
    title: `${c.client} — Case Story`,
    description: c.summary,
    openGraph: { images: [{ url: c.cover, alt: c.client }] },
  };
}

export default async function CaseStoryPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStory(slug);
  if (!c) notFound();

  const others = caseStories.filter((s) => s.slug !== c.slug).slice(0, 3);

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Case Stories", href: "/case-stories" },
          { name: c.client, href: `/case-stories/${c.slug}` },
        ]}
      />

      <header className="relative min-h-[min(88dvh,860px)] overflow-hidden border-b border-cream/10">
        <Image src={c.cover} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/20" />
        <div aria-hidden className="absolute inset-0 stage-grain opacity-40" />
        <div className="relative z-10 mx-auto flex min-h-[min(88dvh,860px)] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/45">
              <Link href="/case-stories" className="hover:text-cream">
                Case Stories
              </Link>
              <span className="mx-2 text-cream/25">/</span>
              <span className="text-cream/70">{c.client}</span>
            </p>
            <CaseMediaNote status={c.mediaStatus} />
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/85">
            {c.sector}
            {c.year ? ` · ${c.year}` : ""}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-tight text-cream">
            {c.client}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">{c.summary}</p>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {c.outcomes && c.outcomes.length > 0 && (
          <ul className="mb-16 grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {c.outcomes.map((o) => (
              <li key={o} className="bg-void px-5 py-6 text-sm leading-snug text-amber-light/90">
                {o}
              </li>
            ))}
          </ul>
        )}

        <div className="grid gap-16 border-t border-cream/10 pt-14 lg:grid-cols-2 lg:gap-24">
          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Challenge</h2>
            <p className="mt-6 font-display text-2xl leading-snug tracking-tight text-cream/85 sm:text-3xl">
              {c.challenge}
            </p>
          </section>
          <section>
            <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Result</h2>
            <p className="mt-6 font-display text-2xl leading-snug tracking-tight text-cream/85 sm:text-3xl">
              {c.result}
            </p>
          </section>
        </div>

        <section className="mt-20 border-t border-cream/10 pt-14">
          <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">What we did</h2>
          <ul className="mt-8">
            {c.work.map((w, i) => (
              <li
                key={w}
                className="grid gap-3 border-t border-cream/10 py-5 text-cream/70 sm:grid-cols-[4rem_1fr] sm:items-baseline"
              >
                <span className="font-display text-lg tabular-nums text-cream/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed sm:text-lg">{w}</span>
              </li>
            ))}
          </ul>
        </section>

        <CaseFrameBento frames={c.frames} />

        <section className="mt-20 grid gap-12 border-t border-cream/10 pt-14 sm:grid-cols-2">
          <div>
            <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Services</h2>
            <ul className="mt-5 flex flex-col">
              {c.services.map((s) => (
                <li key={s.href} className="border-t border-cream/10">
                  <Link
                    href={s.href}
                    className="flex items-center justify-between py-4 text-sm text-cream/65 transition hover:text-amber-light"
                  >
                    <span>{s.label}</span>
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {c.solutionHref && (
            <div>
              <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Related solution</h2>
              <Link
                href={c.solutionHref}
                className="btn-ghost mt-5"
              >
                View path →
              </Link>
            </div>
          )}
        </section>

        {others.length > 0 && (
          <section className="mt-24 border-t border-cream/10 pt-14">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-tight text-cream">More stories</h2>
              <Link href="/case-stories" className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/40 hover:text-amber-light">
                All →
              </Link>
            </div>
            <ul className="grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug} className="bg-void">
                  <Link href={`/case-stories/${o.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={o.cover}
                        alt=""
                        fill
                        className="case-media object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="border-t border-cream/10 px-5 py-5">
                      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-cream/40">{o.sector}</p>
                      <p className="mt-2 font-display text-xl text-cream transition group-hover:text-amber-light">
                        {o.client}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <CtaBand title="Want work like this?" />
      </div>
    </article>
  );
}
