import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities, getService } from "@/data/capabilities";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

type Props = { params: Promise<{ pillar: string; service: string }> };

export function generateStaticParams() {
  return capabilities.flatMap((p) =>
    p.services.map((s) => ({ pillar: p.slug, service: s.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar, service } = await params;
  const hit = getService(pillar, service);
  if (!hit) return {};
  return {
    title: hit.service.title,
    description: hit.service.deck,
  };
}

export default async function ServicePage({ params }: Props) {
  const { pillar: pillarSlug, service: serviceSlug } = await params;
  const hit = getService(pillarSlug, serviceSlug);
  if (!hit) notFound();
  const { pillar, service } = hit;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="mb-6 text-sm text-cream/40">
        <Link href="/capabilities" className="hover:text-cream">
          Capabilities
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/capabilities/${pillar.slug}`} className="hover:text-cream">
          {pillar.title}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cream/70">{service.title}</span>
      </p>
      <PageIntro eyebrow={pillar.title} title={service.title} deck={service.deck} />
      <div className="grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">What you get</h2>
          <ul className="mt-4 space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-cream/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-amber-light/80">Who it&apos;s for</h2>
          <p className="mt-4 text-cream/65 leading-relaxed">
            Teams that need {service.title.toLowerCase()} without juggling three vendors — founders, marketing
            leads, and product owners who want a clear scope and a studio that ships.
          </p>
          <p className="mt-4 text-sm text-cream/45">
            Part of{" "}
            <Link href={`/capabilities/${pillar.slug}`} className="text-cream/70 hover:text-amber-light">
              {pillar.title}
            </Link>
            . Prefer an outcome path? See{" "}
            <Link href="/solutions" className="text-cream/70 hover:text-amber-light">
              Solutions
            </Link>
            .
          </p>
        </section>
      </div>
      <CtaBand title={`Start a ${service.title} project`} />
    </div>
  );
}
