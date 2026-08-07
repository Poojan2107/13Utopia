import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStories, getCaseStory } from "@/data/case-stories";
import { CtaBand } from "@/components/site/PageIntro";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";

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

      <header className="relative min-h-[min(78dvh,720px)] overflow-hidden border-b hairline">
        <Image
          src={c.cover}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/20" />
        <div aria-hidden className="absolute inset-0 stage-grain opacity-60" />
        <div className="relative z-10 mx-auto flex min-h-[min(78dvh,720px)] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
          <p className="mb-6 text-sm text-cream/50">
            <Link href="/case-stories" className="hover:text-cream">
              Case Stories
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream/75">{c.client}</span>
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
            {c.logo && (
              <div className="relative h-16 w-16 shrink-0 rounded-2xl border hairline bg-void/60 p-2 backdrop-blur-sm">
                <Image src={c.logo} alt={`${c.client} logo`} fill className="object-contain p-2" sizes="64px" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-amber-light/85">
                {c.sector}
                {c.year ? ` · ${c.year}` : ""}
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-tight text-cream text-balance sm:text-6xl">{c.client}</h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/65 sm:text-lg">{c.summary}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
        {c.outcomes && c.outcomes.length > 0 && (
          <ul className="mb-14 flex flex-wrap gap-3">
            {c.outcomes.map((o) => (
              <li
                key={o}
                className="rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-xs tracking-wide text-amber-light"
              >
                {o}
              </li>
            ))}
          </ul>
        )}

        <div className="grid gap-14 lg:grid-cols-2">
          <section>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Challenge</h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/70">{c.challenge}</p>
          </section>
          <section>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Result</h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/70">{c.result}</p>
          </section>
        </div>

        <section className="mt-16">
          <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">What we did</h2>
          <ul className="mt-6 space-y-4">
            {c.work.map((w) => (
              <li key={w} className="flex gap-4 border-t hairline pt-4 text-cream/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
                <span className="text-base leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </section>

        {c.gallery && c.gallery.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-8 text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Selected frames</h2>
            <ul className="grid gap-5 sm:grid-cols-2">
              {c.gallery.map((src) => (
                <li key={src} className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border hairline">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 560px" />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 flex flex-wrap gap-10">
          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Services</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="inline-block rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/70 transition hover:border-amber-light hover:text-amber-light"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {c.solutionHref && (
            <div>
              <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Related solution</h2>
              <Link
                href={c.solutionHref}
                className="link-underline mt-4 inline-block text-sm text-cream/70 hover:text-cream"
              >
                View path →
              </Link>
            </div>
          )}
        </section>

        {others.length > 0 && (
          <section className="mt-24 border-t hairline pt-14">
            <h2 className="mb-8 font-display text-3xl text-cream">More stories</h2>
            <ul className="grid gap-5 sm:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/case-stories/${o.slug}`} className="group block overflow-hidden rounded-[1.25rem] border hairline">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={o.cover}
                        alt=""
                        fill
                        className="case-media object-cover"
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-cream/40">{o.sector}</p>
                      <p className="mt-1 font-display text-lg text-cream">{o.client}</p>
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
