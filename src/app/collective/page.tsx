import type { Metadata } from "next";
import Link from "next/link";
import { collectiveHub, collectivePages } from "@/data/collective";
import { studioPeople } from "@/data/people";
import { CtaBand, PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { PeopleGrid } from "@/components/site/People";

export const metadata: Metadata = {
  title: "Collective",
  description: collectiveHub.deck,
};

export default function CollectiveHubPage() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 amber-glow opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <PageIntro eyebrow="Collective" title={collectiveHub.title} deck={collectiveHub.deck} />

        <Reveal>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-amber-light/80">Seats</p>
              <h2 className="mt-2 font-display text-3xl text-cream">Who owns the rooms</h2>
            </div>
            <p className="max-w-sm text-sm text-cream/45">
              Initials until portraits land in <code className="text-cream/55">public/team/</code>.
            </p>
          </div>
        </Reveal>
        <PeopleGrid people={studioPeople} />

        <ul className="mt-20 grid gap-4 sm:grid-cols-2">
          {collectivePages.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 60}>
                <Link
                  href={`/collective/${p.slug}`}
                  className="group flex h-full flex-col justify-between rounded-[1.35rem] border hairline p-7 transition hover:border-amber/40 sm:p-8"
                >
                  <div>
                    <p className="font-display text-sm tabular-nums text-amber-light/55">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 font-display text-3xl text-cream transition group-hover:text-amber-light">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-cream/50">{p.deck}</p>
                  </div>
                  <p className="mt-8 text-sm text-cream/35 transition group-hover:text-amber-light">Enter →</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <CtaBand title="Join the collective" />
      </div>
    </div>
  );
}
