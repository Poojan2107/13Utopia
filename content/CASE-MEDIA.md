# Case media — swap guide

> How to replace studio sample frames with **client-approved** project media.  
> Last updated: 2026-08-07

---

## Status today

All case stories ship with `mediaStatus: "sample"`.  
Frames come from `public/legacy/portfolio/` — atmospheric / craft stills, **not** locked client deliverables.  
Case pages show a small “Studio sample frames” note until media is locked.

---

## Drop folder convention

```
public/cases/[slug]/
  cover.webp          # hero / card cover (≈ 2400×1350 or wider)
  01.webp             # gallery frame
  02.webp
  03.webp
  04.webp             # optional
```

Slug must match `src/data/case-stories.ts` (e.g. `tanyas-dental-house`).

---

## Wire-up checklist (per case)

1. Export approved stills (no drafts, no other-client marks in-frame unless cleared).
2. Drop files under `public/cases/[slug]/`.
3. In `src/data/case-stories.ts` for that case:
   - Set `cover` → `/cases/[slug]/cover.webp`
   - Set `frames` → `/cases/[slug]/01.webp` …
   - Set real `alt` text (client + what the frame shows)
   - Set `mediaStatus: "locked"`
4. Smoke-check `/case-stories/[slug]` + home “Selected work”.
5. Commit + deploy.

---

## Specs (keep presence sharp)

| Asset | Prefer |
| --- | --- |
| Cover | 16:9 or wider, dark-friendly, subject readable at mobile crop |
| Gallery | 3–5 frames; mix wide + square |
| Format | WebP (or AVIF); under ~400KB each when possible |
| Alt | Specific: “Tanya's Dental House — homepage hero” not “image1” |

**Do not** use `public/legacy/gods-archive/` on cases.

---

## Current sample map

See `src/data/case-stories.ts` — each case lists `cover` + `frames` and `mediaStatus`.
