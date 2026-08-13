import Link from "next/link";
import { site } from "@/data/site";
import { caseStories } from "@/data/case-stories";
import { HeroStage } from "@/components/home/HeroStage";
import { WorkIndex } from "@/components/home/WorkIndex";
import { CapabilitiesIndex } from "@/components/home/CapabilitiesIndex";
import { ProcessRail } from "@/components/home/ProcessRail";
import { ProofStrip } from "@/components/home/ProofStrip";
import { HomeMotion } from "@/components/home/HomeMotion";

const serviceSignals = [
  { number: "01", label: "Brand systems", copy: "Distinctive identities built to move with the business." },
  { number: "02", label: "Digital products", copy: "Websites and platforms that make complexity feel effortless." },
  { number: "03", label: "Growth systems", copy: "Search, content, and automation that compound over time." },
];

export default function HomePage() {
  return (
    <HomeMotion>
      <HeroStage />

      <section id="perspective" className="relative overflow-hidden border-y border-cream/10 bg-void py-28 sm:py-36 lg:py-48">
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
        <div data-fade className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
          <p className="text-[0.62rem] uppercase tracking-[0.3em] text-amber-light lg:col-span-2">Perspective</p>
          <div className="lg:col-span-7">
            <p className="max-w-[12ch] font-serif text-[clamp(3.4rem,8vw,8rem)] leading-[0.82] tracking-[-0.055em] text-cream">
              Make the <em className="text-amber-light">unfamiliar</em> useful.
            </p>
          </div>
          <div className="flex max-w-sm flex-col justify-end gap-8 lg:col-span-3">
            <p className="text-sm leading-7 text-cream/58">
              {site.description ?? "A growth and technology studio for ambitious teams building what comes next."}
            </p>
            <Link href="/perspective" className="group inline-flex w-fit items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.25em] text-cream">
              <span className="border-b border-cream/35 pb-2 transition-colors group-hover:border-amber-light">Enter perspective</span>
              <span className="text-amber-light transition-transform duration-300 group-hover:translate-x-2">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="relative overflow-hidden bg-cream text-void">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div data-fade className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-amber">Selected work</p>
              <h2 className="max-w-[10ch] font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.76] tracking-[-0.06em]">Proof, not promises.</h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-void/60 lg:col-span-3 lg:col-start-10">
              A theatre for the work we make with people who refuse ordinary outcomes.
            </p>
          </div>
          <WorkIndex stories={caseStories.slice(0, 4)} />
        </div>
      </section>

      <section id="capabilities" className="relative overflow-hidden bg-void py-28 sm:py-36 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
          <div data-fade className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="mb-6 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-amber-light">Capabilities</p>
            <h2 className="max-w-[8ch] font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[0.8] tracking-[-0.06em] text-cream">Different on purpose.</h2>
            <p className="mt-8 max-w-xs text-sm leading-7 text-cream/55">Creative instinct, professional discipline, and the systems to carry an idea all the way through.</p>
          </div>
          <div className="lg:col-span-8">
            <CapabilitiesIndex />
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-cream text-void">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div data-fade className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-amber">What we solve</p>
              <h2 className="max-w-[9ch] font-serif text-[clamp(3.6rem,8vw,8rem)] leading-[0.8] tracking-[-0.06em]">Clarity creates momentum.</h2>
            </div>
            <Link href="/solutions" className="btn-ghost-void w-fit">Explore solutions <span className="ml-3">↗</span></Link>
          </div>
          <div className="grid gap-0 border-t border-void/15 md:grid-cols-3">
            {serviceSignals.map((item) => (
              <div key={item.number} data-stagger-item className="group border-b border-void/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <p className="font-mono text-xs text-amber">{item.number}</p>
                <h3 className="mt-14 font-display text-xl uppercase tracking-[0.05em]">{item.label}</h3>
                <p className="mt-4 max-w-[24ch] text-sm leading-7 text-void/60">{item.copy}</p>
                <span className="mt-10 block h-px w-12 bg-void/30 transition-all duration-500 group-hover:w-24 group-hover:bg-amber" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-void text-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div data-fade className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-6 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-amber-light">Process</p>
              <h2 className="max-w-[8ch] font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.76] tracking-[-0.06em]">Less theatre. More traction.</h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-cream/55 lg:col-span-3 lg:col-start-10">A clear path from the first useful question to the thing that ships.</p>
          </div>
          <div className="mt-20"><ProcessRail /></div>
        </div>
      </section>

      <ProofStrip />

      <section id="connect" className="relative overflow-hidden bg-amber-light text-void">
        <div className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-void/15" />
        <div className="pointer-events-none absolute -bottom-12 -right-0 h-48 w-48 rounded-full border border-void/10" />
        <div data-fade className="relative mx-auto grid max-w-[1400px] gap-12 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-48">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-void/55 lg:col-span-2">Connect</p>
          <div className="lg:col-span-8">
            <h2 className="max-w-[10ch] font-serif text-[clamp(4.4rem,10vw,10rem)] leading-[0.75] tracking-[-0.07em]">Let&apos;s make the next thing.</h2>
            <p className="mt-10 max-w-md text-sm leading-7 text-void/65">Bring us the ambitious brief, the half-formed thought, or the problem that keeps moving. We&apos;ll find the shape of it together.</p>
            <Link href="/connect" className="btn-void mt-10">Start a conversation <span className="ml-3">↗</span></Link>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
