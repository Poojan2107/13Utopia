import Image from "next/image";
import type { CaseFrame, CaseStory } from "@/data/case-stories";
import { Reveal } from "@/components/site/Reveal";

export function CaseMediaNote({ status }: { status: CaseStory["mediaStatus"] }) {
  if (status === "locked") return null;
  return (
    <p className="rounded-full border border-cream/15 bg-void/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-cream/45 backdrop-blur-sm">
      Studio sample frames · client media pending
    </p>
  );
}

export function CaseFrameBento({ frames }: { frames: CaseFrame[] }) {
  if (!frames.length) return null;
  const [first, ...rest] = frames;

  return (
    <section className="mt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-[0.7rem] uppercase tracking-[0.24em] text-amber-light/80">Selected frames</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] border hairline md:col-span-2 md:aspect-[2.35/1]">
            <Image src={first.src} alt={first.alt} fill className="object-cover" sizes="100vw" />
          </figure>
        </Reveal>
        {rest.map((frame, i) => (
          <Reveal key={frame.src} delay={i * 70}>
            <figure
              className={`relative overflow-hidden rounded-[1.25rem] border hairline ${
                frame.layout === "wide" ? "aspect-[16/10] md:col-span-2 md:aspect-[2.2/1]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                className="object-cover"
                sizes={frame.layout === "wide" ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
