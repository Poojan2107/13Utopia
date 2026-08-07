import type { Metadata } from "next";
import { site } from "@/data/site";
import { connectFaqs } from "@/data/faqs";
import { ConnectForm } from "@/components/site/ConnectForm";
import { FaqJsonLd } from "@/components/site/JsonLd";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Connect",
  description: `Start a project with ${site.name}. Ahmedabad studio — growth, brand, products, AI, and engineering. Email, WhatsApp, or book discovery.`,
  alternates: { canonical: "/connect" },
};

export default function ConnectPage() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-80 amber-glow opacity-55" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-80 stage-grain" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <FaqJsonLd faqs={connectFaqs} />
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-amber-light/85">Connect</p>
              <h1 className="font-display text-4xl tracking-tight text-cream text-balance sm:text-5xl lg:text-6xl">
                Let&apos;s talk business — you first.
              </h1>
              <p className="max-w-md text-base leading-relaxed text-cream/55 sm:text-lg">
                Share a bit about the work. We&apos;ll come back with a discovery path — not a generic pitch deck dump.
              </p>
            </div>
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">Email</p>
                <a href={`mailto:${site.email}`} className="mt-1 inline-block text-cream transition hover:text-amber-light">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">Phone</p>
                <a href={`tel:${site.phoneTel}`} className="mt-1 inline-block text-cream transition hover:text-amber-light">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">WhatsApp</p>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-cream transition hover:text-amber-light"
                >
                  Message us
                </a>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/35">India office</p>
                <address className="mt-1 not-italic leading-relaxed text-cream/60">
                  {site.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>
          <ConnectForm />
        </div>

        <section className="mt-24 border-t hairline pt-16">
          <h2 className="font-display text-3xl tracking-tight text-cream sm:text-4xl">Questions, answered</h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-2">
            {connectFaqs.map((f, i) => (
              <Reveal key={f.question} delay={i * 50}>
                <div className="border-t hairline pt-6">
                  <dt className="text-sm font-medium text-cream">{f.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-cream/55">{f.answer}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
