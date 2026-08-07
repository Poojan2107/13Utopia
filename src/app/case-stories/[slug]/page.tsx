import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStories, getCaseStory } from "@/data/case-stories";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";
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
      <div className="relative border-b hairline">
        <div className="relative mx-auto aspect-[21/9] max-h-[420px] w-full max-w-6xl overflow-hidden sm:aspect-[2.4/1]">
          <Image
            src={c.cover}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-90"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <p className="mb-6 text-sm text-cream/40">
          <Link href="/case-stories" className="hover:text-cream">
            Case Stories
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cream/70">{c.client}</span>
        </p>

        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start">
          {c.logo && (
            <div className="relative h-16 w-16 shrink-0 rounded-xl border hairline bg-void-soft p-2 sm:mt-2">
              <Image src={c.logo} alt={`${c.client} logo`} fill className="object-contain p-2" sizes="64px" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cream/40">
              {c.sector}
              {c.year ? ` · ${c.year}` : ""}
            </p>
            <PageIntro eyebrow="Case Story" title={c.client} deck={c.summary} />
          </div>
        </div>

        {c.outcomes && c.outcomes.length > 0 && (
          <ul className="mb-12 flex flex-wrap gap-3">
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

        <div className="grid gap-12 lg:grid-cols-2">
          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Challenge</h2>
            <p className="mt-4 leading-relaxed text-cream/70">{c.challenge}</p>
          </section>
          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Result</h2>
            <p className="mt-4 leading-relaxed text-cream/70">{c.result}</p>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">What we did</h2>
          <ul className="mt-4 space-y-3">
            {c.work.map((w) => (
              <li key={w} className="flex gap-3 text-cream/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
                {w}
              </li>
            ))}
          </ul>
        </section>

        {c.gallery && c.gallery.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-amber-light/80">Selected frames</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {c.gallery.map((src) => (
                <li key={src} className="relative aspect-[16/10] overflow-hidden rounded-2xl border hairline">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 560px" />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 flex flex-wrap gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Services</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
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
              <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Related solution</h2>
              <Link
                href={c.solutionHref}
                className="mt-3 inline-block text-sm text-cream/70 underline-offset-4 hover:text-amber-light hover:underline"
              >
                View path →
              </Link>
            </div>
          )}
        </section>

        {others.length > 0 && (
          <section className="mt-16 border-t hairline pt-12">
            <h2 className="mb-6 font-display text-2xl text-cream">More stories</h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/case-stories/${o.slug}`}
                    className="group block overflow-hidden rounded-2xl border hairline transition hover:border-amber/40"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={o.cover}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-cream/40">{o.sector}</p>
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
