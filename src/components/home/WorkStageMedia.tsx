"use client";

import type { CaseStory } from "@/data/case-stories";
import { CasePlaceholder } from "@/components/site/CasePlaceholder";

/** Home work theatre — placeholders until mediaStatus is locked. */
export function WorkStageMedia({
  story,
  active,
}: {
  story: CaseStory;
  active: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!active}
    >
      <CasePlaceholder label={story.client} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
