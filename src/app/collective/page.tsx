import type { Metadata } from "next";
import Link from "next/link";
import { collectiveHub, collectivePages } from "@/data/collective";
import { studioPeople } from "@/data/people";
import { CtaBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { PeopleGrid } from "@/components/site/People";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Collective",
  description: collectiveHub.deck,
};

export default function CollectiveHubPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Collective</p>
        <p className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-cream/30">{site.tagline}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
            The rooms
            <br />
            inside.
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-cream/50 lg:text-right">{collectiveHub.deck}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <p className="mb-8 text-[0.65rem] uppercase tracking-[0.24em] text-cream/35">Seats</p>
        <PeopleGrid people={studioPeople} />
      </div>

      <ul className="mt-20">
        {collectivePages.map((p, i) => (
          <li key={p.slug} className="border-t border-cream/10">
            <Reveal delay={i * 40}>
              <Link
                href={`/collective/${p.slug}`}
                className="group mx-auto grid max-w-[1400px] gap-4 px-5 py-10 sm:px-8 lg:grid-cols-[8rem_1fr_auto] lg:items-baseline lg:px-10"
              >
                <span className="font-display text-4xl tabular-nums text-cream/15 transition group-hover:text-amber-light/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-3xl tracking-tight text-cream transition group-hover:text-amber-light sm:text-4xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-cream/45">{p.deck}</p>
                </div>
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/30 transition group-hover:text-amber-light">
                  Enter →
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <CtaBand title="Join the collective" href="/careers" cta="Careers" />
    </div>
  );
}
