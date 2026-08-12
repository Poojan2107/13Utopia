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
  const work = caseStories.slice(0, 5);
  const quote = testimonials[0];
  const quoteLead = `${quote.quote.split(". ")[0]}.`;
  const logoLoop = [...clients.slice(0, 12), ...clients.slice(0, 12)];

  return (
    <HomeMotion>
      <HeroStage />
      <WorkIndex stories={work} />

      <section className="overflow-hidden border-y border-cream/10 py-12" aria-label="Clients">
        <p className="mb-8 text-center text-[0.65rem] uppercase tracking-[0.34em] text-cream/35">
          Selected partners
        </p>
        <div className="marquee-track items-center gap-16 px-8 opacity-70">
          {logoLoop.map((c, idx) => (
            <div key={`${c.slug}-${idx}`} className="flex h-10 w-28 shrink-0 items-center justify-center grayscale">
              <Image
                src={c.file}
                alt={c.name}
                width={112}
                height={40}
                className="h-7 w-auto max-w-[7rem] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div data-fade className="panel-cream mx-auto max-w-[1200px] px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber/80">02 — Perspective</p>
              <p className="mt-6 font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.12] tracking-tight text-void">
                Brands deserve execution
                <span className="italic text-amber"> as sharp as their ambition.</span>
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-void/55">
                We sequence growth, craft, and systems in one studio — so strategy doesn&apos;t die in handoff.
              </p>
              <div className="mt-8">
                <MagneticLink href="/perspective" className="btn-void">
                  Read perspective
                </MagneticLink>
              </div>
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
            <li key={p.slug} data-stagger-item className="border-t border-cream/10 last:border-b">
              <Link
                href={`/capabilities/${p.slug}`}
                className="group mx-auto grid max-w-[1400px] gap-3 px-5 py-8 sm:px-8 lg:grid-cols-[7rem_1fr_auto] lg:items-baseline lg:gap-10 lg:px-10 lg:py-12"
              >
                <span className="font-serif text-2xl tabular-nums text-cream/20 transition group-hover:text-amber-light/50 lg:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(1.8rem,3.4vw,3.1rem)] tracking-tight text-cream transition group-hover:text-amber-light">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/45">{p.blurb}</p>
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/30 transition group-hover:text-amber-light lg:text-right">
                  Enter →
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
        </div>
        <ul className="mt-14" data-stagger>
          {solutions.map((s, i) => (
            <li key={s.slug} data-stagger-item className="border-t border-cream/10 last:border-b">
              <Link
                href={`/solutions/${s.slug}`}
                className="group mx-auto grid max-w-[1400px] gap-3 px-5 py-8 sm:px-8 lg:grid-cols-[7rem_minmax(0,0.7fr)_minmax(0,1fr)] lg:items-baseline lg:gap-10 lg:px-10 lg:py-12"
              >
                <span className="font-serif text-2xl tabular-nums text-cream/20 transition group-hover:text-amber-light/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-amber-light/80">{s.intent}</p>
                  <h3 className="mt-2 font-serif text-[clamp(1.8rem,3.4vw,3.1rem)] tracking-tight text-cream transition group-hover:text-amber-light">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-cream/45 lg:text-right">{s.deck}</p>
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
            {processSteps.map((s, i) => (
              <li
                key={s.n}
                data-stagger-item
                className={`border-cream/10 py-8 sm:border-t-0 sm:px-5 sm:py-10 ${
                  i === 0 ? "sm:pl-0" : "sm:border-l"
                } ${i === processSteps.length - 1 ? "border-b-0" : "border-b sm:border-b-0"}`}
              >
                <p className="font-serif text-sm text-amber-light/80">{s.n}</p>
                <h3 className="mt-4 font-serif text-2xl text-cream">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/45">{s.blurb}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <figure data-fade className="mx-auto max-w-[1200px]">
          <p aria-hidden className="font-serif text-6xl leading-none text-amber-light/45 sm:text-7xl">
            “
          </p>
          <blockquote className="mt-2 max-w-4xl font-serif text-[clamp(1.6rem,3.4vw,2.8rem)] leading-[1.2] tracking-tight text-cream">
            {quoteLead}
          </blockquote>
          <figcaption className="mt-8 text-[0.7rem] uppercase tracking-[0.22em] text-cream/40">
            {quote.name} — {quote.role}, {quote.company}
          </figcaption>
          <dl className="mt-16 grid gap-8 border-t border-cream/10 pt-10 sm:grid-cols-3">
            {site.metrics.map((m) => (
              <div key={m.label}>
                <dd className="font-serif text-4xl tracking-tight text-cream sm:text-5xl">{m.value}</dd>
                <dt className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">{m.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-[0.65rem] text-cream/28">{site.metricsNote}</p>
        </figure>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div data-fade className="panel-cream mx-auto max-w-[1200px] px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-amber/80">Connect</p>
          <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.6rem,6.5vw,5.4rem)] leading-[0.94] tracking-[-0.03em] text-void">
            Ready when you <span className="italic text-amber">are.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticLink href="/connect" className="btn-void">
              Let&apos;s talk
            </MagneticLink>
            <MagneticLink href={site.whatsapp} external className="btn-ghost-void">
              WhatsApp
            </MagneticLink>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
