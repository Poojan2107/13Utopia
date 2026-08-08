import Image from "next/image";
import Link from "next/link";
import { processSteps, site } from "@/data/site";
import { capabilities } from "@/data/capabilities";
import { solutions } from "@/data/solutions";
import { caseStories } from "@/data/case-stories";
import { studioPeople } from "@/data/people";
import clients from "@/data/clients.json";
import testimonials from "@/data/testimonials.json";
import { Reveal } from "@/components/site/Reveal";
import { WorkRail } from "@/components/site/WorkRail";
import { PeopleStrip } from "@/components/site/People";

export default function HomePage() {
  const featured = caseStories.slice(0, 4);
  const quote = testimonials[0];
  const logoLoop = [...clients.slice(0, 12), ...clients.slice(0, 12)];

  return (
    <>
      <section className="relative flex min-h-[min(100dvh,920px)] flex-col overflow-hidden border-b hairline">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow" />
        <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-[55%] opacity-[0.07]"
        >
          <Image src="/brand/13-monogram-ghost.png" alt="" fill className="object-contain" sizes="720px" priority />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-10 pt-10 sm:px-8 sm:pb-14 lg:justify-center lg:pb-20 lg:pt-16">
          <div className="reveal float-soft relative mx-auto mb-10 aspect-[2.2/1] w-full max-w-3xl lg:mb-14 lg:max-w-4xl">
            <Image
              src="/brand/13utopia-wordmark-3d.png"
              alt={site.name}
              fill
              priority
              className="object-contain drop-shadow-[0_30px_80px_rgba(196,165,116,0.22)]"
              sizes="(max-width: 1024px) 92vw, 860px"
            />
          </div>

          <div className="reveal reveal-delay-1 mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-amber-light/90">Ahmedabad · Growth & technology</p>
            <h1 className="mt-5 font-display text-[2.15rem] leading-[1.05] tracking-tight text-cream text-balance sm:text-5xl lg:text-[3.35rem]">
              {site.headline}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cream/60 sm:text-lg">
              Marketing, brand, products, AI, and engineering — under one roof. Clarity before craft. Craft before noise.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link href="/connect" className="btn-primary">
                Start a project
              </Link>
              <Link href="/case-stories" className="btn-ghost">
                View the work
              </Link>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-3 relative z-10 flex justify-center pb-6 lg:pb-8">
          <a href="#work" className="scroll-cue flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-cream/40">
            Scroll
            <span aria-hidden className="h-8 w-px bg-gradient-to-b from-amber-light/70 to-transparent" />
          </a>
        </div>
      </section>

      <section id="work" className="border-b hairline py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-light/80">Selected work</p>
                <h2 className="font-display text-4xl tracking-tight text-cream sm:text-5xl">Proof over promises.</h2>
              </div>
              <Link href="/case-stories" className="link-underline text-sm text-cream/55 hover:text-cream">
                All case stories →
              </Link>
            </div>
          </Reveal>

          <ul className="grid gap-5 md:grid-cols-2">
            {featured.map((c, i) => (
              <li key={c.slug} className={i === 0 ? "md:col-span-2" : undefined}>
                <Reveal delay={i * 80}>
                  <Link
                    href={`/case-stories/${c.slug}`}
                    className="group relative block overflow-hidden rounded-[1.35rem] border hairline"
                  >
                    <div className={`relative overflow-hidden ${i === 0 ? "aspect-[21/9] sm:aspect-[2.4/1]" : "aspect-[16/10]"}`}>
                      <Image
                        src={c.cover}
                        alt=""
                        fill
                        className="case-media object-cover"
                        sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent opacity-90"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/45">
                          {c.sector}
                          {c.year ? ` · ${c.year}` : ""}
                        </p>
                        <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">{c.client}</h3>
                        <p className="mt-2 max-w-lg text-sm text-cream/55 line-clamp-2">{c.summary}</p>
                      </div>
                      <span className="hidden shrink-0 rounded-full border border-cream/20 bg-void/40 px-4 py-2 text-xs text-cream/70 backdrop-blur-sm transition group-hover:border-amber-light group-hover:text-amber-light sm:inline-block">
                        View →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline py-14 sm:py-16" aria-label="More work">
        <div className="mx-auto mb-8 max-w-6xl px-5 sm:px-8">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-cream/40">Swipe the reel</p>
        </div>
        <WorkRail />
      </section>

      <section className="overflow-hidden border-b hairline py-12" aria-label="Clients">
        <p className="mb-8 text-center text-[0.65rem] uppercase tracking-[0.28em] text-cream/35">Trusted by teams who ship</p>
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent sm:w-28" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent sm:w-28" />
          <div className="marquee-track px-8">
            {logoLoop.map((c, idx) => (
              <div key={`${c.slug}-${idx}`} className="flex h-12 w-28 shrink-0 items-center justify-center opacity-50 grayscale">
                <Image src={c.file} alt={c.name} width={112} height={48} className="h-8 w-auto max-w-[7rem] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b hairline py-24 sm:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow opacity-40" />
        <Reveal>
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">Perspective</p>
            <p className="mt-8 font-display text-3xl leading-[1.15] tracking-tight text-cream text-balance sm:text-5xl">
              Brands deserve execution as sharp as their ambition.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/50">
              We sequence growth, craft, and systems in one studio — so strategy doesn&apos;t die in handoff.
            </p>
            <Link href="/perspective" className="link-underline mt-8 inline-block text-sm text-cream/60 hover:text-cream">
              Our perspective →
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="capabilities" className="border-b hairline py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-14 max-w-2xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-light/80">Capabilities</p>
              <h2 className="font-display text-4xl tracking-tight text-cream sm:text-5xl">Six pillars. One studio.</h2>
            </div>
          </Reveal>
          <ul className="divide-y divide-cream/10 border-y border-cream/10">
            {capabilities.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={i * 40}>
                  <Link
                    href={`/capabilities/${p.slug}`}
                    className="group grid gap-3 py-7 transition sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-8"
                  >
                    <span className="font-display text-sm tabular-nums text-amber-light/55">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-cream transition group-hover:text-amber-light sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/50">{p.blurb}</p>
                    </div>
                    <span className="text-sm text-cream/30 transition group-hover:text-amber-light">→</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-light/80">Solutions</p>
                <h2 className="font-display text-4xl tracking-tight text-cream sm:text-5xl">Start with the outcome.</h2>
              </div>
              <Link href="/solutions" className="link-underline text-sm text-cream/55 hover:text-cream">
                All solutions →
              </Link>
            </div>
          </Reveal>
          <ul className="flex flex-wrap gap-3">
            {solutions.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={i * 50}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group inline-flex items-center gap-3 rounded-full border hairline bg-void-soft/40 px-5 py-3 transition hover:border-amber/50"
                  >
                    <span className="font-display text-lg text-cream group-hover:text-amber-light">{s.title}</span>
                    <span className="text-[0.65rem] uppercase tracking-[0.16em] text-cream/35">{s.intent}</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-14 max-w-xl space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-light/80">Process</p>
              <h2 className="font-display text-4xl tracking-tight text-cream sm:text-5xl">How we work</h2>
            </div>
          </Reveal>
          <ol className="grid gap-0 md:grid-cols-5">
            {processSteps.map((s, i) => (
              <li key={s.n} className="relative border-t border-amber/30 pt-6 md:border-t-0 md:border-l md:border-amber/25 md:pl-5 md:pt-0 first:md:border-l-0 first:md:pl-0">
                <Reveal delay={i * 60}>
                  <p className="text-xs tabular-nums text-amber-light/70">{s.n}</p>
                  <h3 className="mt-3 font-display text-xl text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/50">{s.blurb}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b hairline py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Collective</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-cream sm:text-5xl">The rooms behind the work.</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-cream/50">
                Seats are live. Portraits drop as we lock them — structure first, faces next.
              </p>
            </div>
          </Reveal>
          <PeopleStrip people={studioPeople} />
          <div className="mt-10 text-center">
            <Link href="/collective" className="link-underline text-sm text-cream/55 hover:text-cream">
              Meet the collective →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b hairline py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <blockquote className="font-display text-2xl leading-snug tracking-tight text-cream text-balance sm:text-4xl">
                &ldquo;{quote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm text-cream/45">
                <span className="text-cream/75">{quote.name}</span> — {quote.role}, {quote.company}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto mt-16 max-w-2xl border-t hairline pt-10">
              <dl className="flex flex-wrap justify-center gap-10 sm:gap-16">
                {site.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="font-display text-3xl text-cream">{m.value}</dd>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-cream/40">{m.label}</p>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-center text-[0.7rem] text-cream/35">{site.metricsNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 sm:py-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow" />
        <div aria-hidden className="pointer-events-none absolute inset-0 stage-grain" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/80">Connect</p>
            <h2 className="mt-6 font-display text-4xl tracking-tight text-cream text-balance sm:text-6xl">
              Ready when you are.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-cream/50">
              Tell us what you&apos;re building. We&apos;ll reply with a clear next step — not a generic deck dump.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/connect" className="btn-primary">
                Start a project
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
