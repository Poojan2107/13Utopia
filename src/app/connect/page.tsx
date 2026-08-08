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
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <FaqJsonLd faqs={connectFaqs} />
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-amber-light/85">Connect</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-tight text-cream">
            Let&apos;s talk
            <br />
            business.
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-cream/50 lg:text-right">
            Share the outcome. We&apos;ll come back with a discovery path — not a generic pitch dump.
          </p>
        </div>
      </div>

      <div className="border-y border-cream/10">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-8 border-cream/10 px-5 py-12 sm:px-8 lg:border-r lg:px-10 lg:py-16">
            {(
              [
                { label: "Email", node: <a href={`mailto:${site.email}`}>{site.email}</a> },
                { label: "Phone", node: <a href={`tel:${site.phoneTel}`}>{site.phone}</a> },
                {
                  label: "WhatsApp",
                  node: (
                    <a href={site.whatsapp} target="_blank" rel="noreferrer">
                      Message us
                    </a>
                  ),
                },
              ] as const
            ).map((row) => (
              <div key={row.label} className="border-t border-cream/10 pt-5">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/35">{row.label}</p>
                <div className="mt-2 text-cream transition [&_a]:hover:text-amber-light">{row.node}</div>
              </div>
            ))}
            <div className="border-t border-cream/10 pt-5">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/35">India office</p>
              <address className="mt-2 not-italic leading-relaxed text-cream/55">
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </aside>
          <div className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <ConnectForm />
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-cream">
          Questions, answered
        </h2>
        <dl className="mt-12">
          {connectFaqs.map((f, i) => (
            <Reveal key={f.question} delay={i * 40}>
              <div className="grid gap-3 border-t border-cream/10 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
                <dt className="font-display text-xl text-cream sm:text-2xl">{f.question}</dt>
                <dd className="text-sm leading-relaxed text-cream/50 sm:text-base">{f.answer}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>
    </div>
  );
}
