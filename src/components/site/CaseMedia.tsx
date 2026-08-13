import Image from "next/image";
import type { CaseFrame, CaseStory } from "@/data/case-stories";
import { Reveal } from "@/components/site/Reveal";
import { CasePlaceholder } from "@/components/site/CasePlaceholder";
import { showLockedMedia } from "@/lib/media";

export function CaseMediaNote({ status }: { status: CaseStory["mediaStatus"] }) {
  if (showLockedMedia(status)) return null;
  return (
    <p className="border border-cream/15 bg-void/50 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.18em] text-cream/45 backdrop-blur-sm">
      Studio frame
    </p>
  );
}

export function CaseFrameBento({
  frames,
  mediaStatus = "locked",
  label,
}: {
  frames: CaseFrame[];
  mediaStatus?: CaseStory["mediaStatus"];
  label: string;
}) {
  if (!frames.length) return null;
  const locked = showLockedMedia(mediaStatus);
  const [first, ...rest] = frames;

  return (
    <section className="mt-20 border-t border-cream/10 pt-14">
      <h2 className="mb-8 text-[0.65rem] uppercase tracking-[0.28em] text-amber-light/80">Selected frames</h2>
      <div className="grid gap-px border border-cream/10 bg-cream/10 md:grid-cols-2">
        <Reveal>
          <figure className="relative aspect-[16/10] overflow-hidden bg-void md:col-span-2 md:aspect-[2.35/1]">
            {locked ? (
              <Image src={first.src} alt={first.alt} fill className="object-cover" sizes="100vw" />
            ) : (
              <CasePlaceholder
                label={label}
                kicker="01 — Frame"
                ghost="01"
                showLabel={false}
                variant="frame"
                className="absolute inset-0"
              />
            )}
          </figure>
        </Reveal>
        {rest.map((frame, i) => (
          <Reveal key={`${frame.src}-${i}`} delay={i * 70}>
            <figure
              className={`relative overflow-hidden bg-void ${
                frame.layout === "wide" ? "aspect-[16/10] md:col-span-2 md:aspect-[2.2/1]" : "aspect-[4/3]"
              }`}
            >
              {locked ? (
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  className="object-cover"
                  sizes={frame.layout === "wide" ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
              ) : (
                <CasePlaceholder
                  label={`${label}-${i}`}
                  kicker={`${String(i + 2).padStart(2, "0")} — Frame`}
                  ghost={String(i + 2).padStart(2, "0")}
                  showLabel={false}
                  variant="frame"
                  className="absolute inset-0"
                />
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
