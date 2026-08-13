# Homepage visual spec

Companion to [HOME-BRIEF.md](./HOME-BRIEF.md). Tokens stay in `src/app/globals.css`.

## 1. Composition
- Hero = one `dvh` stage. Mark fills the field (`object-cover`, oversized inset). Type is an editorial layer on the void, not a sibling column.
- Desktop: type sits in the dark upper field; mark occupies depth (foreground letters, receding 13).
- Mobile: mark crops toward the upper mass; type sits on a bottom void wash so it never rides cream-on-cream.
- Header is persistent. One Talk in the header. Scroll cue is utility, not a second CTA.

## 2. Typography
| Role | Face | Rule |
| --- | --- | --- |
| Hero display | Instrument Serif | *Be Unreal* roman, *Be Unreasonable* italic; clamp, tracking tight, no wrap on desktop |
| Section titles | Instrument Serif | Work client, capability names, solution titles |
| Nav / labels / CTA | Instrument Sans | Uppercase tracking for labels; never compete with display |
| Numbers | Mono / serif tabular | Index only, not chrome |

Do not introduce a third display family.

## 3. Palette
Void field · cream primary type · amber/gold for light, italic emphasis, active index. Utility text at cream/40–50. No new hues.

## 4. Shape
Soft radii only where already in tokens (buttons, header Talk). Work stage is full-bleed, not a rounded card. No blobs, orbits, or decorative geometry on home.

## 5. Grid
`max-w-[1600px]` for hero/work; `1400px` for quieter bands. Horizontal pad `px-5 / sm:px-8 / lg:px-12`. Work pin = `lg+` only; `<lg` = snap cards.

## 6. Media
- Hero: `/brand/13utopia-wordmark-3d.png` (`priority`, `sizes=100vw`)
- Work: `CasePlaceholder` + `LOCKED_MEDIA` — ghost first-name, no legacy covers
- Proof: testimonials JSON + `site.metrics` + `site.metricsNote` (caveat required)

## 7. Motion (existing GSAP only)
| Moment | Behavior | Guard |
| --- | --- | --- |
| Hero reveal | Mark + type + cue staged in | Never `autoAlpha` leftover if reduced-motion |
| Hero ambient | Mark `yPercent` ≤ 10, scrub | Transforms only |
| Work pin | Desktop pin through 4 stories | Off below `lg`; hover/focus wins over scrub |
| Work hover/focus | Active index + stage swap | Keyboard + touch equivalents |
| Connect | `data-pin-scale` settle | Must not cover Talk |
| Else | `data-fade` / `data-stagger` | Reduced-motion = no-op |

No WebGL. No second animation library.
