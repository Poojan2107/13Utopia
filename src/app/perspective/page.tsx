import type { Metadata } from "next";
import Link from "next/link";
import { perspectiveHub, perspectivePages } from "@/data/perspective";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Perspective",
  description: perspectiveHub.deck,
};

export default function PerspectiveHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <PageIntro eyebrow="Perspective" title={perspectiveHub.title} deck={perspectiveHub.deck} />
      <ul className="divide-y divide-cream/10 border-y border-cream/10">
        {perspectivePages.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/perspective/${p.slug}`}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <h2 className="font-display text-xl text-cream group-hover:text-amber-light sm:text-2xl">
                {p.title}
              </h2>
              <p className="max-w-md text-sm text-cream/50 sm:text-right">{p.deck}</p>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand title="Meet the people behind the work" />
    </div>
  );
}
