import type { Metadata } from "next";
import Link from "next/link";
import { careers } from "@/data/careers";
import { site } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.deck,
};

export default function CareersPage() {
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Careers</p>
        <p className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-cream/30">{site.tagline}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
            {careers.title}
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-cream/50 lg:text-right">{careers.deck}</p>
        </div>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-cream/55">{careers.intro}</p>
      </div>

      <ul>
        {careers.openRoles.map((role, i) => (
          <li key={role.slug} className="border-t border-cream/10">
            <Reveal delay={i * 40}>
              <div className="mx-auto grid max-w-[1400px] gap-4 px-5 py-10 sm:px-8 lg:grid-cols-[6rem_1fr_auto] lg:items-baseline lg:px-10">
                <span className="font-display text-3xl tabular-nums text-cream/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">{role.title}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/50">{role.blurb}</p>
                </div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-amber-light/70">{role.type}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <section className="border-t border-cream/10">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">What we look for</h2>
            <ul className="mt-6">
              {careers.lookFor.map((item, i) => (
                <li
                  key={item}
                  className="grid gap-3 border-t border-cream/10 py-5 text-cream/70 sm:grid-cols-[4rem_1fr] sm:items-baseline"
                >
                  <span className="font-display text-lg tabular-nums text-cream/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">How we hire</h2>
            <ul className="mt-6">
              {careers.howWeHire.map((item, i) => (
                <li
                  key={item}
                  className="grid gap-3 border-t border-cream/10 py-5 text-cream/70 sm:grid-cols-[4rem_1fr] sm:items-baseline"
                >
                  <span className="font-display text-lg tabular-nums text-cream/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="relative mt-4 overflow-hidden border-y border-cream/10 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-1/2 font-display text-[clamp(5rem,18vw,12rem)] leading-none text-cream/[0.03] -translate-y-1/2 select-none"
        >
          Hire
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-tight text-cream">
                How to apply
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/50">{careers.howToApply}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Careers — application")}`}
                className="btn-primary"
              >
                Email us
              </a>
              <Link href="/collective" className="btn-ghost">
                See the collective
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
