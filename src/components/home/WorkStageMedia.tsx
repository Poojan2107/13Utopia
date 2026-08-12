"use client";

import Image from "next/image";
import type { CaseStory } from "@/data/case-stories";

export function WorkStageMedia({
  story,
  active,
  priority = false,
}: {
  story: CaseStory;
  active: boolean;
  priority?: boolean;
}) {
  const sample = story.mediaStatus === "sample";

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!active}
    >
      <div className="absolute inset-0 bg-void-soft" />
      <div className="absolute inset-0 mesh-premium opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,165,116,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(124,101,61,0.18),transparent_50%)]" />

      {story.logo ? (
        <div className="absolute inset-0 flex items-center justify-center p-16">
          <div className="relative h-24 w-56 opacity-[0.14] grayscale sm:h-32 sm:w-72">
            <Image src={story.logo} alt="" fill className="object-contain" sizes="288px" />
          </div>
        </div>
      ) : null}

      {sample ? (
        <Image
          src={story.cover}
          alt=""
          fill
          priority={priority}
          className="object-cover opacity-[0.22] saturate-0 mix-blend-luminosity"
          sizes="100vw"
        />
      ) : (
        <Image
          src={story.cover}
          alt={story.client}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/15" />
      <div aria-hidden className="absolute inset-0 stage-grain opacity-[0.06]" />
    </div>
  );
}
