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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(196,165,116,0.14),transparent_55%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
          <div className="space-y-8">
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
              <Link
                href="/connect"
                className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-void transition hover:bg-cream-dim"
              >
                Start a project
              </Link>
              <Link
                href="/capabilities"
                className="rounded-full border border-cream/25 px-6 py-3 text-sm text-cream/90 transition hover:border-amber-light hover:text-amber-light"
              >
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
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/brand/13utopia-wordmark-3d.png"
                alt={`${site.name} wordmark`}
                fill
                priority
                className="object-contain"
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
            {clients.slice(0, 12).map((c) => (
              <li key={c.slug} className="flex items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
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
                <Link
                  href={`/capabilities/${p.slug}`}
                  className="block h-full rounded-2xl border hairline bg-void-soft/60 p-6 transition hover:border-amber/40"
                >
                  <p className="mb-3 text-xs text-cream/35">{String(i + 1).padStart(2, "0")}</p>
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
            <Link href="/solutions" className="text-sm text-cream/50 hover:text-amber-light">
              All solutions →
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="block rounded-2xl border hairline px-5 py-4 transition hover:border-amber/40"
                >
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
            <Link href="/case-stories" className="text-sm text-cream/50 hover:text-amber-light">
              All stories →
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {caseStories.slice(0, 3).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/case-stories/${c.slug}`}
                  className="flex h-full flex-col rounded-2xl border hairline p-5 transition hover:border-amber/40"
                >
                  {c.logo && (
                    <div className="relative mb-4 h-10 w-10 opacity-80">
                      <Image src={c.logo} alt="" fill className="object-contain" sizes="40px" />
                    </div>
                  )}
                  <h3 className="font-display text-lg text-cream">{c.client}</h3>
                  <p className="mt-2 text-sm text-cream/50">{c.summary}</p>
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
              <li key={s.n} className="space-y-2 border-t border-cream/15 pt-4">
                <p className="text-xs text-amber-light/80">{s.n}</p>
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
              <li key={t.id} className="flex flex-col rounded-2xl border hairline p-6">
                <p className="flex-1 text-sm leading-relaxed text-cream/70">&ldquo;{t.quote}&rdquo;</p>
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

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-cream text-balance sm:text-4xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/55">
            Tell us what you&apos;re building. We&apos;ll reply with a clear next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/connect"
              className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-void transition hover:bg-cream-dim"
            >
              Connect
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/25 px-6 py-3 text-sm text-cream/90 transition hover:border-amber-light hover:text-amber-light"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
