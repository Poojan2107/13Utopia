import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStories, getCaseStory } from "@/data/case-stories";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStory(slug);
  if (!c) return {};
  return { title: `${c.client} — Case Story`, description: c.summary };
}

export default async function CaseStoryPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStory(slug);
  if (!c) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="mb-6 text-sm text-cream/40">
        <Link href="/case-stories" className="hover:text-cream">
          Case Stories
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cream/70">{c.client}</span>
      </p>

      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start">
        {c.logo && (
          <div className="relative h-16 w-16 shrink-0 sm:mt-8">
            <Image src={c.logo} alt={`${c.client} logo`} fill className="object-contain" sizes="64px" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <PageIntro eyebrow={c.sector} title={c.client} deck={c.summary} />
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Challenge</h2>
          <p className="mt-4 text-cream/70">{c.challenge}</p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Result</h2>
          <p className="mt-4 text-cream/70">{c.result}</p>
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

      <section className="mt-12 flex flex-wrap gap-4">
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

      <CtaBand />
    </div>
  );
}
