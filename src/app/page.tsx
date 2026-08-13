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

      <section className="border-y border-cream/10">
        <div
          data-fade
          className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:px-8 lg:px-12"
        >
          <p className="max-w-[28ch] font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.15] tracking-[-0.03em] text-cream">
            Brands deserve execution <span className="italic text-amber">as sharp as</span> their ambition.
          </p>
          <Link
            href="/perspective"
            className="shrink-0 text-[0.68rem] uppercase tracking-[0.2em] text-cream/40 transition hover:text-amber-light"
          >
            Perspective →
          </Link>
        </div>
      </section>

      <WorkIndex stories={work} />

      <CapabilitiesIndex />

      <section className="px-5 pb-28 sm:px-8 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <div data-fade className="mb-4 flex items-end justify-between">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-cream/35">Outcomes</p>
            <Link
              href="/solutions"
              className="text-[0.68rem] uppercase tracking-[0.2em] text-cream/40 transition hover:text-amber-light"
            >
              All paths →
            </Link>
          </div>
          <ul data-stagger>
            {solutions.map((s) => (
              <li key={s.slug} data-stagger-item>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex flex-col gap-2 border-t border-cream/10 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                >
                  <h2 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.86] tracking-[-0.05em] text-cream transition group-hover:text-amber-light">
                    {s.title}
                  </h2>
                  <p className="max-w-xs text-sm leading-relaxed text-cream/40 sm:text-right">
                    {s.intent}
                  </p>
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
          className="mx-auto grid min-h-[min(80vh,780px)] max-w-[1400px] content-end gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-10 lg:py-32"
        >
          <div className="lg:col-span-8">
            <h2 className="max-w-[10ch] font-serif text-[clamp(3.4rem,9vw,8rem)] leading-[0.86] tracking-[-0.045em]">
              Ready when you <span className="italic text-amber">are.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
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
