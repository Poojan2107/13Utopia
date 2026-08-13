"use client";

import type { CaseStory } from "@/data/case-stories";
import { CasePlaceholder } from "@/components/site/CasePlaceholder";

export function WorkStageMedia({
  story,
  active,
  index,
}: {
  story: CaseStory;
  active: boolean;
  index?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!active}
    >
      <CasePlaceholder
        label={story.client}
        kicker={story.sector}
        ghost={index}
        showLabel={false}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
