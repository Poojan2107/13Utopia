import Link from "next/link";
import { site } from "@/data/site";
import { solutions } from "@/data/solutions";
import { caseStories } from "@/data/case-stories";
import { HeroStage } from "@/components/home/HeroStage";
import { WorkIndex } from "@/components/home/WorkIndex";
import { CapabilitiesIndex } from "@/components/home/CapabilitiesIndex";
import { MagneticLink } from "@/components/home/MagneticLink";
import { HomeMotion } from "@/components/home/HomeMotion";
import { ProcessRail } from "@/components/home/ProcessRail";
import { ProofStrip } from "@/components/home/ProofStrip";

export default function HomePage() {
  const work = caseStories.slice(0, 4);

  return (
    <HomeMotion>
      <HeroStage />

      <section className="px-5 py-28 sm:px-8 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div data-fade className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber-light/80">01 — Perspective</p>
              <p className="mt-6 max-w-[15ch] font-serif text-[clamp(2.6rem,6.8vw,5.8rem)] leading-[0.92] tracking-[-0.035em] text-cream">
                Brands deserve execution
                <span className="italic text-amber-light"> as sharp as their ambition.</span>
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-base leading-relaxed text-cream/50">
                Strategy, craft, and systems in one studio — so handoff doesn&apos;t kill momentum. Be unreal. Be
                unreasonable.
              </p>
              <div className="mt-8 lg:flex lg:justify-end">
                <Link
                  href="/perspective"
                  className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/45 transition hover:text-amber-light"
                >
                  Read perspective →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkIndex stories={work} />

      <CapabilitiesIndex />

      <section className="border-t border-cream/10 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div data-fade className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">04 — Solutions</p>
              <h2 className="mt-4 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-tight text-cream">
                Start with the <span className="italic text-amber-light">outcome.</span>
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex w-fit rounded-[var(--radius-square)] border border-cream/20 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-cream/50 transition hover:border-amber-light hover:text-amber-light"
            >
              All paths →
            </Link>
          </div>

          <ul className="mt-12 divide-y divide-cream/10 border-y border-cream/10" data-stagger>
            {solutions.map((s) => (
              <li key={s.slug} data-stagger-item>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group grid gap-3 py-9 transition-colors hover:bg-cream/[0.015] lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-11"
                >
                  <h3 className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.94] tracking-[-0.04em] text-cream transition group-hover:text-amber-light lg:col-span-4">
                    {s.title}
                  </h3>
                  <div className="lg:col-span-7">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-cream/35">{s.intent}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/48 lg:text-base">{s.deck}</p>
                  </div>
                  <span className="hidden text-[0.62rem] uppercase tracking-[0.2em] text-cream/25 transition group-hover:text-amber-light lg:col-span-1 lg:text-right">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessRail />
      <ProofStrip />

      <section className="bg-cream text-void">
        <div
          data-fade
          data-pin-scale
          className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-10 lg:py-36"
        >
          <div className="lg:col-span-8">
            <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber">Connect</p>
            <h2 className="mt-6 max-w-[11ch] font-serif text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.88] tracking-[-0.04em]">
              Ready when you <span className="italic text-amber">are.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <MagneticLink href="/connect" className="btn-void group">
                <span>Let&apos;s talk</span>
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </MagneticLink>
              <MagneticLink href={site.whatsapp} external className="btn-ghost-void">
                WhatsApp
              </MagneticLink>
            </div>
          </div>

          <div className="grid gap-8 border-t border-void/10 pt-10 text-sm text-void/65 sm:grid-cols-3 lg:col-span-12">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-amber">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block font-mono hover:text-void">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-amber">Phone</p>
              <a href={`tel:${site.phoneTel}`} className="mt-2 block font-mono hover:text-void">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-amber">Studio</p>
              <p className="mt-2 font-mono">
                {site.address.lines[0]}, {site.address.locality}
              </p>
            </div>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
