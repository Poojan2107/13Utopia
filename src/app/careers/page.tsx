import type { Metadata } from "next";
import Link from "next/link";
import { careers } from "@/data/careers";
import { site } from "@/data/site";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.deck,
};

export default function CareersPage() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 amber-glow opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <PageIntro eyebrow="Careers" title={careers.title} deck={careers.deck} />
        <p className="max-w-2xl text-base leading-relaxed text-cream/55">{careers.intro}</p>

        <ul className="mt-14 divide-y divide-cream/10 border-y border-cream/10">
          {careers.openRoles.map((role, i) => (
            <li key={role.slug}>
              <Reveal delay={i * 50}>
                <div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-display text-2xl text-cream">{role.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-cream/50">{role.blurb}</p>
                  </div>
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-amber-light/70">{role.type}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="relative mt-14 max-w-xl overflow-hidden rounded-[1.35rem] border hairline p-7 sm:p-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow opacity-40" />
          <div className="relative space-y-4">
            <h2 className="font-display text-xl text-cream">How to apply</h2>
            <p className="text-sm leading-relaxed text-cream/55">{careers.howToApply}</p>
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
      </div>
    </div>
  );
}
