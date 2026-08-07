import type { Metadata } from "next";
import Link from "next/link";
import { careers } from "@/data/careers";
import { site } from "@/data/site";
import { PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.deck,
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <PageIntro eyebrow="Careers" title={careers.title} deck={careers.deck} />
      <p className="max-w-2xl text-cream/65 leading-relaxed">{careers.intro}</p>

      <ul className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
        {careers.openRoles.map((role) => (
          <li key={role.slug} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl text-cream">{role.title}</h2>
              <p className="mt-1 text-sm text-cream/50">{role.blurb}</p>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-amber-light/70">{role.type}</p>
          </li>
        ))}
      </ul>

      <div className="surface mt-12 max-w-xl space-y-4 p-6">
        <h2 className="font-display text-lg text-cream">How to apply</h2>
        <p className="text-sm leading-relaxed text-cream/60">{careers.howToApply}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Careers — application")}`}
            className="btn-primary !px-5 !py-2.5"
          >
            Email us
          </a>
          <Link href="/collective" className="btn-ghost !px-5 !py-2.5">
            See the collective
          </Link>
        </div>
      </div>
    </div>
  );
}
