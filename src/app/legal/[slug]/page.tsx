import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalPage, legalPages } from "@/data/legal";
import { BreadcrumbJsonLd } from "@/components/site/JsonLd";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.deck,
    alternates: { canonical: `/legal/${page.slug}` },
  };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: page.title, href: `/legal/${page.slug}` },
        ]}
      />
      <p className="mb-6 text-sm text-cream/40">
        <Link href="/" className="hover:text-cream">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-cream/70">{page.title}</span>
      </p>
      <header className="mb-10 space-y-4">
        <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">Legal</p>
        <h1 className="font-display text-4xl tracking-tight text-cream sm:text-5xl">{page.title}</h1>
        <p className="text-base leading-relaxed text-cream/60">{page.deck}</p>
        <p className="text-xs text-cream/40">Last updated {page.updated}</p>
      </header>
      <div className="space-y-10">
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-xl text-cream">{s.heading}</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-cream/65">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="mt-14 border-t hairline pt-8 text-sm text-cream/45">
        Questions?{" "}
        <a href={`mailto:${site.email}`} className="text-cream/70 hover:text-amber-light">
          {site.email}
        </a>
      </p>
    </div>
  );
}
