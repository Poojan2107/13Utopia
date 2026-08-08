import Image from "next/image";
import Link from "next/link";
import { processSteps, site } from "@/data/site";
import { capabilities } from "@/data/capabilities";
import { solutions } from "@/data/solutions";
import { caseStories } from "@/data/case-stories";
import clients from "@/data/clients.json";
import testimonials from "@/data/testimonials.json";
import { Reveal } from "@/components/site/Reveal";

export default function HomePage() {
  const work = caseStories.slice(0, 5);
  const quote = testimonials[0];
  const logoLoop = [...clients.slice(0, 10), ...clients.slice(0, 10)];

  return (
    <>
      {/* HERO — wordmark as stage, type as overlay */}
      <section className="relative min-h-[100dvh] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 amber-glow opacity-80" />
          <div className="absolute inset-0 stage-grain" />
          <div className="absolute left-1/2 top-[42%] h-[min(70vw,640px)] w-[min(92vw,900px)] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/brand/13utopia-wordmark-3d.png"
              alt=""
              fill
              priority
              className="object-contain opacity-90 drop-shadow-[0_40px_100px_rgba(196,165,116,0.25)]"
              sizes="900px"
            />
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 hidden origin-left -translate-y-1/2 -rotate-90 text-[0.6rem] uppercase tracking-[0.5em] text-cream/25 lg:left-8 lg:block"
        >
          Ahmedabad · Studio
        </p>

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20">
          <div className="reveal grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-amber-light/90">Growth · Craft · Systems</p>
              <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,8vw,6.2rem)] leading-[0.92] tracking-tight text-cream">
                {site.headline}
              </h1>
            </div>
            <div className="reveal reveal-delay-1 max-w-sm lg:justify-self-end lg:text-right">
              <p className="text-sm leading-relaxed text-cream/55 sm:text-base">
                Marketing, brand, products, AI, and engineering under one roof. Clarity before craft. Craft before noise.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/connect"
                  className="inline-flex bg-cream px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-void transition hover:bg-cream-dim"
                >
                  Start a project
                </Link>
                <Link
                  href="#work"
                  className="inline-flex border border-cream/30 px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-cream/80 transition hover:border-amber-light hover:text-amber-light"
                >
                  See the work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK — stacked full-bleed rows, not cards */}
      <section id="work" className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-6 px-5 py-14 sm:px-8 lg:px-10">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">01 — Work</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4rem)] tracking-tight text-cream">Proof over promises.</h2>
          </div>
          <Link href="/case-stories" className="hidden text-[0.7rem] uppercase tracking-[0.2em] text-cream/40 transition hover:text-amber-light sm:inline">
            Index →
          </Link>
        </div>

        <ul>
          {work.map((c, i) => (
            <li key={c.slug} className="border-t border-cream/10">
              <Link
                href={`/case-stories/${c.slug}`}
                className="group grid lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative order-2 aspect-[16/10] overflow-hidden lg:order-1 lg:aspect-auto lg:min-h-[380px]">
                  <Image
                    src={c.cover}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div aria-hidden className="absolute inset-0 bg-void/20 transition group-hover:bg-void/5" />
                </div>
                <div className="order-1 flex flex-col justify-between px-5 py-10 sm:px-8 lg:order-2 lg:px-12 lg:py-16">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-sm tabular-nums text-amber-light/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">
                      {c.sector}
                      {c.year ? ` · ${c.year}` : ""}
                    </span>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-tight text-cream transition group-hover:text-amber-light">
                      {c.client}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/50">{c.summary}</p>
                    <p className="mt-8 text-[0.7rem] uppercase tracking-[0.22em] text-cream/40 transition group-hover:text-amber-light">
                      Open story →
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CLIENTS */}
      <section className="overflow-hidden border-y border-cream/10 py-10" aria-label="Clients">
        <div className="marquee-track gap-16 px-8 opacity-60">
          {logoLoop.map((c, idx) => (
            <div key={`${c.slug}-${idx}`} className="flex h-10 w-24 shrink-0 items-center justify-center grayscale">
              <Image src={c.file} alt={c.name} width={96} height={40} className="h-7 w-auto max-w-[6rem] object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO — giant type break */}
      <section className="relative overflow-hidden py-28 sm:py-40">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow opacity-30" />
        <Reveal>
          <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">02 — Perspective</p>
            <p className="mt-8 max-w-5xl font-display text-[clamp(2rem,6.5vw,5.5rem)] leading-[1.02] tracking-tight text-cream">
              Brands deserve execution
              <span className="text-amber-light"> as sharp as their ambition.</span>
            </p>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-relaxed text-cream/45">
                We sequence growth, craft, and systems in one studio — so strategy doesn&apos;t die in handoff.
              </p>
              <Link href="/perspective" className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/50 hover:text-amber-light">
                Read perspective →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CAPABILITIES — giant index */}
      <section id="capabilities" className="border-t border-cream/10">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">03 — Capabilities</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] tracking-tight text-cream">Six pillars. One studio.</h2>
        </div>
        <ul>
          {capabilities.map((p, i) => (
            <li key={p.slug} className="border-t border-cream/10">
              <Reveal delay={i * 30}>
                <Link
                  href={`/capabilities/${p.slug}`}
                  className="group mx-auto grid max-w-[1400px] gap-4 px-5 py-8 sm:px-8 lg:grid-cols-[8rem_1fr_auto] lg:items-baseline lg:gap-10 lg:px-10 lg:py-10"
                >
                  <span className="font-display text-4xl tabular-nums text-cream/[0.12] transition group-hover:text-amber-light/40 lg:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-cream transition group-hover:text-amber-light sm:text-3xl lg:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-cream/45">{p.blurb}</p>
                  </div>
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/25 transition group-hover:text-amber-light">
                    Enter
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* SOLUTIONS — horizontal chips as index strip */}
      <section className="border-t border-cream/10 py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">04 — Solutions</p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4rem)] tracking-tight text-cream">Start with the outcome.</h2>
            </div>
            <Link href="/solutions" className="text-[0.7rem] uppercase tracking-[0.2em] text-cream/40 hover:text-amber-light">
              All paths →
            </Link>
          </div>
          <ul className="flex flex-col">
            {solutions.map((s) => (
              <li key={s.slug} className="border-t border-cream/10">
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-display text-2xl text-cream transition group-hover:text-amber-light sm:text-3xl">
                    {s.title}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">{s.intent}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-cream/10 py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">05 — Process</p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4rem)] tracking-tight text-cream">How we work</h2>
          <ol className="mt-14 grid gap-0 sm:grid-cols-5">
            {processSteps.map((s) => (
              <li key={s.n} className="border-t border-amber/35 pt-6 sm:border-t-0 sm:border-l sm:border-amber/25 sm:pl-5 sm:pt-0 first:sm:border-l-0 first:sm:pl-0">
                <p className="text-[0.65rem] tabular-nums tracking-[0.18em] text-amber-light/70">{s.n}</p>
                <h3 className="mt-3 font-display text-xl text-cream">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/45">{s.blurb}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-t border-cream/10 py-24 sm:py-32">
        <Reveal>
          <figure className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
            <blockquote className="max-w-4xl font-display text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.15] tracking-tight text-cream">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 text-[0.7rem] uppercase tracking-[0.22em] text-cream/40">
              {quote.name} — {quote.role}, {quote.company}
            </figcaption>
            <dl className="mt-16 flex flex-wrap gap-12 border-t border-cream/10 pt-10">
              {site.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-3xl text-cream">{m.value}</dd>
                  <dt className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">{m.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[0.65rem] text-cream/30">{site.metricsNote}</p>
          </figure>
        </Reveal>
      </section>

      {/* CLOSE */}
      <section className="relative border-t border-cream/10 py-28 sm:py-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">Connect</p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
            Ready when you are.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/connect" className="inline-flex bg-cream px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-void transition hover:bg-cream-dim">
              Start a project
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-cream/30 px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-cream/80 transition hover:border-amber-light hover:text-amber-light"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
