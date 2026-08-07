import type { Metadata } from "next";
import { site } from "@/data/site";
import { connectFaqs } from "@/data/faqs";
import { ConnectForm } from "@/components/site/ConnectForm";
import { FaqJsonLd } from "@/components/site/JsonLd";

export const metadata: Metadata = {
  title: "Connect",
  description: `Start a project with ${site.name}. Ahmedabad studio — growth, brand, products, AI, and engineering. Email, WhatsApp, or book discovery.`,
  alternates: { canonical: "/connect" },
};

export default function ConnectPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
      <FaqJsonLd faqs={connectFaqs} />
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-light/80">Connect</p>
            <h1 className="font-display text-4xl tracking-tight text-cream text-balance sm:text-5xl">
              Let&apos;s talk business — you first.
            </h1>
            <p className="max-w-md text-cream/60">
              Share a bit about the work. We&apos;ll come back with a discovery path — not a generic pitch deck dump.
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/40">Email</p>
              <a href={`mailto:${site.email}`} className="text-cream hover:text-amber-light">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/40">Phone</p>
              <a href={`tel:${site.phoneTel}`} className="text-cream hover:text-amber-light">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/40">WhatsApp</p>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="text-cream hover:text-amber-light">
                Message us
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/40">India office</p>
              <address className="not-italic leading-relaxed text-cream/65">
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

      <section className="mt-20 border-t hairline pt-14">
        <h2 className="font-display text-2xl text-cream sm:text-3xl">Questions, answered</h2>
        <dl className="mt-8 grid gap-8 md:grid-cols-2">
          {connectFaqs.map((f) => (
            <div key={f.question}>
              <dt className="text-sm font-medium text-cream">{f.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-cream/55">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
