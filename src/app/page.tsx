import Image from "next/image";
import Link from "next/link";
import { processSteps, site } from "@/data/site";
import { capabilities } from "@/data/capabilities";
import { solutions } from "@/data/solutions";
import { caseStories } from "@/data/case-stories";
import clients from "@/data/clients.json";
import testimonials from "@/data/testimonials.json";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b hairline">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-8 h-[28rem] w-[28rem] opacity-[0.06] sm:opacity-[0.09]"
        >
          <Image src="/brand/13-monogram-ghost.png" alt="" fill className="object-contain" sizes="448px" priority />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
          <div className="reveal space-y-8">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-light/90">Ahmedabad · Growth & technology</p>
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-cream text-balance sm:text-5xl lg:text-[3.4rem]">
              {site.headline}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
              {site.tagline} Marketing, brand, products, AI, and engineering — under one roof.
            </p>
            <p className="max-w-lg border-l border-amber/40 pl-4 text-sm leading-relaxed text-cream/50">
              We believe brands deserve execution as sharp as their ambition — clarity before craft, craft before noise.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/connect" className="btn-primary">
                Start a project
              </Link>
              <Link href="/capabilities" className="btn-ghost">
                Explore capabilities
              </Link>
            </div>
            <dl className="flex flex-wrap gap-8 pt-4">
              {site.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-display text-2xl text-cream">{m.value}</dd>
                  <p className="text-xs uppercase tracking-[0.18em] text-cream/45">{m.label}</p>
                </div>
              ))}
            </dl>
          </div>
          <div className="reveal reveal-delay-1 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="float-soft relative aspect-[4/3] w-full">
              <Image
                src="/brand/13utopia-wordmark-3d.png"
                alt={`${site.name} wordmark`}
                fill
                priority
                className="object-contain drop-shadow-[0_20px_60px_rgba(196,165,116,0.18)]"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline py-14 sm:py-16" aria-label="Clients">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-8 text-xs uppercase tracking-[0.24em] text-cream/40">Selected clients</p>
          <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 md:gap-8">
            {clients.slice(0, 18).map((c) => (
              <li
                key={c.slug}
                className="flex items-center justify-center opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={c.file}
                  alt={c.name}
                  width={120}
                  height={64}
                  className="h-10 w-auto max-w-[7rem] object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="capabilities" className="border-b hairline py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">Capabilities</p>
            <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">Six pillars. One studio.</h2>
            <p className="text-cream/60">
              From demand and brand to product, AI, cloud, and advisory — pick a path or start a conversation.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((p, i) => (
              <li key={p.slug}>
                <Link href={`/capabilities/${p.slug}`} className="surface surface-lift block h-full p-6">
                  <p className="mb-3 text-xs tabular-nums text-amber-light/60">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-xl text-cream">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">{p.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">Solutions</p>
              <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">Start with the outcome.</h2>
            </div>
            <Link href="/solutions" className="text-sm text-cream/50 transition hover:text-amber-light">
              All solutions →
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="surface surface-lift block px-5 py-4">
                  <p className="font-display text-lg text-cream">{s.title}</p>
                  <p className="mt-1 text-xs text-cream/45">{s.intent}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">Case Stories</p>
              <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">Selected work.</h2>
            </div>
            <Link href="/case-stories" className="text-sm text-cream/50 transition hover:text-amber-light">
              All stories →
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {caseStories.slice(0, 3).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/case-stories/${c.slug}`}
                  className="surface surface-lift group flex h-full flex-col overflow-hidden !p-0"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.cover}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 360px"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-cream/40">{c.sector}</p>
                    <h3 className="mt-1 font-display text-lg text-cream">{c.client}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-cream/50">{c.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b hairline py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">Process</p>
            <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">How we work</h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-5">
            {processSteps.map((s) => (
              <li key={s.n} className="space-y-2 border-t border-amber/25 pt-4">
                <p className="text-xs tabular-nums text-amber-light/80">{s.n}</p>
                <h3 className="font-display text-lg text-cream">{s.title}</h3>
                <p className="text-sm leading-relaxed text-cream/50">{s.blurb}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b hairline py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">Proof</p>
            <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">What clients say</h2>
          </div>
          <ul className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.id} className="surface flex flex-col p-6">
                <p className="font-display text-3xl leading-none text-amber-light/40" aria-hidden>
                  “
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">{t.quote}</p>
                <div className="mt-6 border-t hairline pt-4">
                  <p className="text-sm text-cream">{t.name}</p>
                  <p className="text-xs text-cream/45">
                    {t.role}, {t.company}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 amber-glow opacity-50" />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-cream text-balance sm:text-4xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/55">
            Tell us what you&apos;re building. We&apos;ll reply with a clear next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/connect" className="btn-primary">
              Connect
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
