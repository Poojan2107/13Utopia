import Image from "next/image";
import Link from "next/link";
import { processSteps, site } from "@/data/site";
import { capabilities } from "@/data/capabilities";
import { solutions } from "@/data/solutions";
import { caseStories } from "@/data/case-stories";
import clients from "@/data/clients.json";
import testimonials from "@/data/testimonials.json";
import { HeroStage } from "@/components/home/HeroStage";
import { WorkIndex } from "@/components/home/WorkIndex";
import { MagneticLink } from "@/components/home/MagneticLink";
import { SectionIntro } from "@/components/home/SectionIntro";
import { HomeMotion } from "@/components/home/HomeMotion";

export default function HomePage() {
  const work = caseStories;
  const logoLoop = [...clients, ...clients];

  return (
    <HomeMotion>
      <HeroStage />
      <WorkIndex stories={work} />

      <section className="relative overflow-hidden border-y border-cream/10 py-12" aria-label="Clients">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent z-10" />
        <p className="mb-8 text-center text-[0.65rem] uppercase tracking-[0.34em] text-cream/40">
          Selected partners & enterprise clients ({clients.length} brands)
        </p>
        <div className="marquee-track items-center gap-16 px-8 opacity-75">
          {logoLoop.map((c, idx) => (
            <div key={`${c.slug}-${idx}`} className="flex h-12 w-32 shrink-0 items-center justify-center rounded-lg border border-cream/5 bg-cream/[0.02] p-2 transition-all hover:border-cream/20 hover:bg-cream/5">
              <Image
                src={c.file}
                alt={c.name}
                width={112}
                height={40}
                className="h-7 w-auto max-w-[7rem] object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div data-fade className="panel-cream mx-auto max-w-[1200px] px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber">02 — Perspective</p>
              <p className="mt-6 font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.12] tracking-tight text-void">
                Brands deserve execution
                <span className="italic text-amber"> as sharp as their ambition.</span>
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-void/70">
                We sequence growth, craft, and systems in one studio — so strategy doesn&apos;t die in handoff.
              </p>
              <div className="mt-8">
                <MagneticLink href="/perspective" className="btn-void group">
                  <span>Read perspective</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </MagneticLink>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-void/10 pt-8 sm:grid-cols-3">
            <div>
              <span className="font-mono text-xs font-bold text-amber">01</span>
              <h4 className="mt-1 font-serif text-xl text-void">Strategy & Narrative</h4>
              <p className="mt-2 text-xs leading-relaxed text-void/65">Positioning that defines market authority before code or pixels are placed.</p>
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-amber">02</span>
              <h4 className="mt-1 font-serif text-xl text-void">Craft & Interface</h4>
              <p className="mt-2 text-xs leading-relaxed text-void/65">Bespoke design systems, motion, and visual clarity built for distinction.</p>
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-amber">03</span>
              <h4 className="mt-1 font-serif text-xl text-void">Engineering & Scale</h4>
              <p className="mt-2 text-xs leading-relaxed text-void/65">Next.js, performance optimization, SEO/AEO, and robust cloud pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div data-fade>
            <SectionIntro index="03 — Capabilities" title="Six pillars." italic="One studio." />
          </div>
        </div>
        <ul className="mt-14" data-stagger>
          {capabilities.map((p, i) => (
            <li key={p.slug} data-stagger-item className="border-t border-cream/10 last:border-b transition-colors hover:bg-cream/[0.02]">
              <Link
                href={`/capabilities/${p.slug}`}
                className="group mx-auto grid max-w-[1400px] gap-4 px-5 py-8 sm:px-8 lg:grid-cols-[7rem_1fr_auto] lg:items-center lg:gap-10 lg:px-10 lg:py-12"
              >
                <span className="font-serif text-2xl tabular-nums text-cream/20 transition group-hover:text-amber-light/70 lg:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(1.8rem,3.4vw,3.1rem)] tracking-tight text-cream transition group-hover:text-amber-light">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/50">{p.blurb}</p>
                </div>
                <div className="flex items-center gap-4 lg:justify-end">
                  <span className="btn-ghost text-[0.62rem] group-hover:border-amber-light group-hover:text-amber-light transition-all">
                    Enter Pillar →
                  </span>
                </div>
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
        </div>
        <ul className="mt-14" data-stagger>
          {solutions.map((s, i) => (
            <li key={s.slug} data-stagger-item className="border-t border-cream/10 last:border-b transition-colors hover:bg-cream/[0.02]">
              <Link
                href={`/solutions/${s.slug}`}
                className="group mx-auto grid max-w-[1400px] gap-3 px-5 py-8 sm:px-8 lg:grid-cols-[7rem_minmax(0,0.7fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-12"
              >
                <span className="font-serif text-2xl tabular-nums text-cream/20 transition group-hover:text-amber-light/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-light/25 bg-amber/10 px-2.5 py-0.5 text-[0.58rem] uppercase tracking-[0.2em] text-amber-light">
                    {s.intent}
                  </span>
                  <h3 className="mt-2 font-serif text-[clamp(1.8rem,3.4vw,3.1rem)] tracking-tight text-cream transition group-hover:text-amber-light">
                    {s.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 lg:items-end">
                  <p className="text-sm leading-relaxed text-cream/50 lg:text-right max-w-lg">{s.deck}</p>
                  <span className="text-[0.62rem] uppercase tracking-[0.2em] text-cream/40 group-hover:text-amber-light transition-colors">
                    Explore Solution Path →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div data-fade>
            <SectionIntro index="05 — Process" title="How we" italic="work" />
          </div>
          <ol className="mt-14 grid gap-0 border-t border-cream/10 sm:grid-cols-5" data-stagger>
            {processSteps.map((s, i) => {
              const durations = ["W1", "W2-3", "W4-6", "Launch", "Ongoing"];
              return (
                <li
                  key={s.n}
                  data-stagger-item
                  className={`relative border-cream/10 py-8 sm:border-t-0 sm:px-5 sm:py-10 ${
                    i === 0 ? "sm:pl-0" : "sm:border-l"
                  } ${i === processSteps.length - 1 ? "border-b-0" : "border-b sm:border-b-0"}`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-sm font-semibold text-amber-light">{s.n}</p>
                    <span className="rounded-full border border-cream/10 bg-cream/5 px-2 py-0.5 text-[0.55rem] font-mono text-cream/50">
                      {durations[i]}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/45">{s.blurb}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div data-fade className="mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3">
            <div className="relative h-4 w-20 grayscale opacity-90">
              <Image
                src="/legacy/reviews/rating.png"
                alt="5 Stars Rating"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-[0.65rem] uppercase tracking-[0.24em] text-amber-light">Client Trust</span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.id} className="surface-rich rounded-2xl border border-cream/10 p-6 flex flex-col justify-between">
                <div>
                  <p aria-hidden className="font-serif text-4xl leading-none text-amber-light/45">“</p>
                  <blockquote className="mt-2 text-sm leading-relaxed text-cream/80">
                    &quot;{t.quote}&quot;
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-cream/10 pt-4">
                  <p className="font-serif text-base text-cream">{t.name}</p>
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-cream/40">{t.role}, {t.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <dl className="mt-16 grid gap-6 sm:grid-cols-3">
            {site.metrics.map((m) => (
              <div key={m.label} className="surface-rich rounded-2xl border border-cream/10 p-6 shadow-lg">
                <dd className="font-serif text-4xl tracking-tight text-cream sm:text-5xl">{m.value}</dd>
                <dt className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-amber-light">{m.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-[0.65rem] text-cream/35">{site.metricsNote}</p>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div data-fade className="panel-cream mx-auto max-w-[1200px] px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24 shadow-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber">Connect</p>
          <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.6rem,6.5vw,5.4rem)] leading-[0.94] tracking-[-0.03em] text-void">
            Ready when you <span className="italic text-amber">are.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticLink href="/connect" className="btn-void group">
              <span>Let&apos;s talk</span>
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </MagneticLink>
            <MagneticLink href={site.whatsapp} external className="btn-ghost-void">
              WhatsApp
            </MagneticLink>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-void/10 pt-8 text-xs text-void/70">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] font-semibold text-amber">Email HQ</p>
              <a href={`mailto:${site.email}`} className="font-mono hover:text-void transition-colors">{site.email}</a>
            </div>
            <div className="h-6 w-px bg-void/15 hidden sm:block" />
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] font-semibold text-amber">Direct Line</p>
              <a href={`tel:${site.phoneTel}`} className="font-mono hover:text-void transition-colors">{site.phone}</a>
            </div>
            <div className="h-6 w-px bg-void/15 hidden sm:block" />
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] font-semibold text-amber">Studio Address</p>
              <p className="font-mono">{site.address.lines[0]}, {site.address.locality}</p>
            </div>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
