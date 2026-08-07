import type { MetadataRoute } from "next";
import { allCapabilityPaths } from "@/data/capabilities";
import { caseStories } from "@/data/case-stories";
import { collectivePages } from "@/data/collective";
import { perspectivePages } from "@/data/perspective";
import { solutions } from "@/data/solutions";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    entry("/", 1),
    entry("/capabilities", 0.9),
    entry("/solutions", 0.9),
    entry("/case-stories", 0.85),
    entry("/perspective", 0.85),
    entry("/collective", 0.8),
    entry("/careers", 0.75),
    entry("/connect", 0.8),
    ...allCapabilityPaths().map((p) => entry(p, 0.7)),
    ...solutions.map((s) => entry(`/solutions/${s.slug}`, 0.75)),
    ...caseStories.map((c) => entry(`/case-stories/${c.slug}`, 0.7)),
    ...perspectivePages.map((p) => entry(`/perspective/${p.slug}`, 0.7)),
    ...collectivePages.map((p) => entry(`/collective/${p.slug}`, 0.65)),
  ];
}
