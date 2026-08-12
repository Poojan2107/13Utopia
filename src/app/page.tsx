import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { capabilities } from "@/data/capabilities";
import { solutions } from "@/data/solutions";
import { caseStories } from "@/data/case-stories";
import clients from "@/data/clients.json";
import { HeroStage } from "@/components/home/HeroStage";
import { WorkIndex } from "@/components/home/WorkIndex";
import { MagneticLink } from "@/components/home/MagneticLink";
import { SectionIntro } from "@/components/home/SectionIntro";
import { HomeMotion } from "@/components/home/HomeMotion";
import { ProcessRail } from "@/components/home/ProcessRail";
import { ProofStrip } from "@/components/home/ProofStrip";

const povLines = [
  {
    n: "01",
    title: "Strategy & Narrative",
    blurb: "Positioning that defines market authority before code or pixels are placed.",
  },
  {
    n: "02",
    title: "Craft & Interface",
    blurb: "Bespoke design systems, motion, and visual clarity built for distinction.",
  },
  {
    n: "03",
    title: "Engineering & Scale",
    blurb: "Next.js, performance optimization, SEO/AEO, and robust cloud pipelines.",
  },
] as const;

export default function HomePage() {
  const work = caseStories.slice(0, 6);
  const logoLoop = [...clients, ...clients];

  return (
    <HomeMotion>
      <HeroStage />
      <WorkIndex stories={work} />

      <section className="relative overflow-hidden py-12" aria-label="Clients">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-void to-transparent" />
        <p className="mb-8 text-center text-[0.62rem] uppercase tracking-[0.34em] text-cream/30">
          Selected partners
        </p>
        <div className="marquee-track items-center gap-16 px-8">
          {logoLoop.map((c, idx) => (
            <div
              key={`${c.slug}-${idx}`}
              className="flex h-9 w-28 shrink-0 items-center justify-center opacity-35 brightness-0 invert transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src={c.file}
                alt={c.name}
                width={112}
                height={40}
                className="h-6 w-auto max-w-[7rem] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-10">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow opacity-35" />
        <div className="relative mx-auto max-w-[1400px]">
          <div data-fade className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-24">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber-light/80">02 — Perspective</p>
              <p className="mt-6 max-w-[14ch] font-serif text-[clamp(2.8rem,7.2vw,6.4rem)] leading-[0.9] tracking-[-0.035em] text-cream">
                Brands deserve execution
                <span className="italic text-amber-light"> as sharp as their ambition.</span>
              </p>
            </div>
            <div className="max-w-md lg:justify-self-end lg:pb-2">
              <p className="text-base leading-relaxed text-cream/52">
                We sequence growth, craft, and systems in one studio — so strategy doesn&apos;t die in handoff.
              </p>
              <div className="mt-8">
                <MagneticLink href="/perspective" className="btn-primary group">
                  <span>Read perspective</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </MagneticLink>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-0 border-t border-cream/10 sm:grid-cols-3" data-stagger>
            {povLines.map((line, i) => (
              <div
                key={line.n}
                data-stagger-item
                className={`border-cream/10 py-10 ${
                  i === 0 ? "sm:pr-10" : "border-t sm:border-t-0 sm:border-l sm:px-10"
                } ${i === povLines.length - 1 ? "sm:pr-0" : ""}`}
              >
                <span className="font-mono text-xs text-amber-light">{line.n}</span>
                <h3 className="mt-4 font-serif text-[1.65rem] tracking-tight text-cream">{line.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/42">{line.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div data-fade>
            <SectionIntro index="03 — Capabilities" title="Six pillars." italic="One studio." />
          </div>
        </div>
        <ul className="mt-8" data-stagger>
          {capabilities.map((p, i) => (
            <li key={p.slug} data-stagger-item className="border-t border-cream/10 last:border-b">
              <Link
                href={`/capabilities/${p.slug}`}
                className="group mx-auto grid max-w-[1400px] items-center gap-3 px-5 py-8 sm:px-8 lg:grid-cols-[10rem_1fr_auto] lg:gap-10 lg:px-10 lg:py-10 transition-colors duration-500 hover:bg-cream/[0.02]"
              >
                <span className="font-serif text-[clamp(3.2rem,7vw,5.8rem)] leading-none tracking-[-0.06em] text-cream/[0.12] tabular-nums transition duration-500 group-hover:text-amber-light/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-[clamp(1.85rem,3.8vw,3.4rem)] tracking-tight text-cream transition duration-500 group-hover:translate-x-1.5 group-hover:text-amber-light">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/40 transition-colors duration-500 group-hover:text-cream/60">
                    {p.blurb}
                  </p>
                </div>
                <span className="hidden font-serif text-2xl text-cream/20 transition duration-500 group-hover:text-amber-light lg:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div data-fade>
            <SectionIntro
              index="04 — Solutions"
              title="Start with the"
              italic="outcome."
              action={{ href: "/solutions", label: "All paths →" }}
            />
          </div>

          <ul className="mt-16" data-stagger>
            {solutions.map((s) => (
              <li key={s.slug} data-stagger-item className="border-t border-cream/10 last:border-b">
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group grid gap-4 py-10 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-14"
                >
                  <h3 className="font-serif text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.04em] text-cream transition duration-500 group-hover:text-amber-light lg:col-span-5">
                    {s.title}
                  </h3>
                  <div className="lg:col-span-6">
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cream/38">{s.intent}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/50 lg:text-base">{s.deck}</p>
                  </div>
                  <span className="text-[0.62rem] uppercase tracking-[0.2em] text-cream/28 transition group-hover:text-amber-light lg:col-span-1 lg:mb-1 lg:text-right">
                    Path →
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
          className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-36"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber">Connect</p>
          <h2 className="mt-6 max-w-[12ch] font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em]">
            Ready when you <span className="italic text-amber">are.</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
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

          <div className="mt-16 grid gap-8 border-t border-void/10 pt-10 text-sm text-void/65 sm:grid-cols-3">
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
