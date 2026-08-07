import type { Metadata } from "next";
import Link from "next/link";
import { collectiveHub, collectivePages } from "@/data/collective";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Collective",
  description: collectiveHub.deck,
};

export default function CollectiveHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <PageIntro eyebrow="Collective" title={collectiveHub.title} deck={collectiveHub.deck} />
      <ul className="grid gap-4 sm:grid-cols-2">
        {collectivePages.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/collective/${p.slug}`}
              className="block h-full rounded-2xl border hairline bg-void-soft/50 p-6 transition hover:border-amber/40"
            >
              <h2 className="font-display text-2xl text-cream">{p.title}</h2>
              <p className="mt-2 text-sm text-cream/55">{p.deck}</p>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand title="Join the collective" />
    </div>
  );
}
