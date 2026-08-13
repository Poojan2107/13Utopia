import type { Metadata } from "next";
import Link from "next/link";
import { perspectiveHub, perspectivePages } from "@/data/perspective";
import { CtaBand } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Perspective",
  description: perspectiveHub.deck,
};

const hubOrder = ["our-story", "vision", "mission", "why-13-utopia", "our-process"] as const;

export default function PerspectiveHubPage() {
  const sections = hubOrder
    .map((slug) => perspectivePages.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Perspective</p>
        <p className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-cream/30">{site.tagline}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
            How we
            <br />
            think.
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-cream/50 lg:text-right">{perspectiveHub.deck}</p>
        </div>
        <nav className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/10 pt-6 text-[0.62rem] uppercase tracking-[0.18em] text-cream/40">
          {sections.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="transition hover:text-amber-light">
              {p.title}
            </a>
          ))}
          <a href="#india" className="transition hover:text-amber-light">
            India office
          </a>
          <Link href="/collective" className="transition hover:text-amber-light">
            Team →
          </Link>
        </nav>
      </div>

      {sections.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className="scroll-mt-28 border-t border-cream/10"
        >
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24">
            <div className="lg:col-span-4">
              <p className="font-display text-sm tabular-nums text-cream/25">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] tracking-tight text-cream">{p.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-cream/45">{p.deck}</p>
            </div>
            <div className="lg:col-span-8">
              {p.sections.map((s, si) => (
                <Reveal key={s.heading} delay={si * 40}>
                  <div className="border-t border-cream/10 py-8 first:border-t-0 first:pt-0">
                    <h3 className="font-display text-xl tracking-tight text-cream sm:text-2xl">{s.heading}</h3>
                    <p className="mt-3 text-base leading-relaxed text-cream/55">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="india" className="scroll-mt-28 border-t border-cream/10">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">India office</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] tracking-tight text-cream">Shyamal HQ</h2>
          <address className="mt-6 max-w-md not-italic leading-relaxed text-cream/55">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/45">
            One studio in Ahmedabad. Work already reaches multiple countries — Canada office UI stays deferred until
            that HQ is real.
          </p>
        </div>
      </section>

      <CtaBand title="Meet the people behind the work" href="/collective" cta="Collective" />
    </div>
  );
}
