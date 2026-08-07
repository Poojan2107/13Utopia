import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities, getService } from "@/data/capabilities";
import { Crumb, CtaBand, PageIntro } from "@/components/site/PageIntro";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";

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
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-64 amber-glow opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", href: "/" },
            { name: "Capabilities", href: "/capabilities" },
            { name: pillar.title, href: `/capabilities/${pillar.slug}` },
            { name: service.title, href: `/capabilities/${pillar.slug}/${service.slug}` },
          ]}
        />
        <Crumb
          items={[
            { label: "Capabilities", href: "/capabilities" },
            { label: pillar.title, href: `/capabilities/${pillar.slug}` },
            { label: service.title },
          ]}
        />
        <PageIntro eyebrow={pillar.title} title={service.title} deck={service.deck} />
        <div className="grid gap-14 lg:grid-cols-2">
          <section>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">What you get</h2>
            <ul className="mt-6 space-y-0">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 border-t hairline py-4 text-cream/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-light" aria-hidden />
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Who it&apos;s for</h2>
            <p className="mt-6 text-base leading-relaxed text-cream/60">
              Teams that need {service.title.toLowerCase()} without juggling three vendors — founders, marketing
              leads, and product owners who want a clear scope and a studio that ships.
            </p>
            <p className="mt-5 text-sm text-cream/40">
              Part of{" "}
              <Link href={`/capabilities/${pillar.slug}`} className="link-underline text-cream/65 hover:text-cream">
                {pillar.title}
              </Link>
              . Prefer an outcome path? See{" "}
              <Link href="/solutions" className="link-underline text-cream/65 hover:text-cream">
                Solutions
              </Link>
              .
            </p>
          </section>
        </div>
        <CtaBand title={`Start a ${service.title} project`} />
      </div>
    </div>
  );
}
