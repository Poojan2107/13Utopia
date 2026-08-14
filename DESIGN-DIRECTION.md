# 13UTOPiA — Design Direction

> **Superseded as the brief.** Active: [docs/strategy/DESIGN-DNA.md](./docs/strategy/DESIGN-DNA.md).  
> This file remains useful for **existing brand-kit files** in `public/brand/`.  
> Synthesized from the inspiration list (2026-08-07). Greek gods / statues: **scrapped**.

---

## Brand essence (locked)

| Signal | From the marks |
| --- | --- |
| Field | Pure void black |
| Form | Soft-rounded, geometric, heavy sans — pill terminals, tactile |
| Flat color | Cream / white lockup on void |
| Dimensional | Matte cream 3D letters + warm amber–gold cast light |
| Monogram | Ghosted “13” (near-black on black) for stealth / favicon / watermark |
| Mood | Premium, minimal, CGI-capable, calm confidence |
| Hierarchy | Brand is the hero object |

**Implication:** Site = dark stage + cream type + amber light. Soft radii echo the glyphs. Distinctive **“i”** in UTOPIA (rounded stem + circular dot) must stay recognizable in any type adaptation. No purple, no lime, no Greek-statue default.

### Logo system

| Asset | File | Use |
| --- | --- | --- |
| Flat lockup | `public/brand/13utopia-lockup-flat.png` | Nav, footer, default identity |
| 3D wordmark | `public/brand/13utopia-wordmark-3d.png` | Home hero / brand moments |
| Ghost monogram | `public/brand/13-monogram-ghost.png` | Favicon, watermark, loading, subtle chrome |

Clear space: treat “13” as the dominant mass; never crowd the lockup. Don’t recolor the 3D mark casually — cream + amber light is the dimensional expression.

---

## North star

Build a site that feels like a **serious creative–technology studio**: clear POV, editorial type, proof-forward, motion with purpose — while remaining **fast, SEO/AEO-friendly, and fully responsive**.

We are **not** cloning any single URL. We extract patterns, then invent a 13UTOPiA-native system grounded in the wordmark.

---

## Inspiration clusters (what each group teaches)

### A — Craft studios (primary references)
[Monolog](https://bymonolog.com/) · [KOTA](https://kota.co.uk/) · [Nothin'](https://www.noth.in/) · [Obscura](https://obscurastudio.webflow.io/) · [2xA](https://2xa.studio/) · [Cinética](https://www.cinetica.studio/) · [Units](https://units.gr/en/homepage/)

**Take:**
- Large, confident display typography
- POV / manifesto language (“perspective,” principles, process)
- Numbered sections & clear frameworks
- Case work as the trust engine
- Multi-city presence without clutter
- Motion that reveals hierarchy (scroll, stagger, hover) — not decoration piles

### B — Product / brand systems (structure & clarity)
[Sui](https://www.sui.io/) · [Hello Up Digital](https://www.helloupdigital.com/) · [Flowty](https://flowty.co/) · [Diamante](https://www.diamante.io/) · [Wembi](https://www.wembi.ai/)

**Take:**
- Capability stacks that scan (cards / modules / pillars)
- Outcome metrics and proof near CTAs
- Clean IA: services → work → contact
- Dark premium + high contrast OK when type is sharp

### C — Motion / portfolio energy (dose carefully)
[Made with GSAP](https://madewithgsap.com/) · [Vivid Motion](https://www.vividmotion.co/) · [Haoqi](https://haoqi.design/) · [Crazy Creative](https://crazycreative.design/) · [RPA](https://rpacomunicacion.com/) · [WIP Workoholics](https://wip.workoholics.es/) · [TEN 375](https://ten.375.studio/en)

**Take:**
- Scroll storytelling, project hover reveals, cinematic case entries  
**Avoid:** shipping a GSAP carnival that tanks LCP / mobile

### D — Editorial / boutique Framer energy
[Coppeliaband](https://coppeliaband.framer.website/) · [Art et Saveur](https://artetsaveur.framer.website/) · [Mr Day](https://mrday.it/) · [Nudot](https://nudot.com.tw/) · [Valeran](https://www.valeran.eu/) · [Iper](https://iper.com.au/) · [Digitalists](https://digitalists.at/) · [Vuna](https://www.vunapartners.co.za/) · [Netcraft](https://netcraft.solutions/) · [Penguin Capital](https://www.penguin-capital.co.jp/en) · [Peachweb FoF](https://futureoffinance.peachweb.io/) · [Ryan Ritzenthaler](https://www.ryanritzenthaler.com/) · [Roshan Sahu](https://www.roshan-sahu.com/) · [K95](https://k95.it/en) · [Flowty](https://flowty.co/) · [Obscura](https://obscurastudio.webflow.io/)

**Take:**
- Asymmetry with discipline
- Strong brand mark as hero signal
- Atmosphere (gradient/texture/light) without fake “dashboard” clutter

---

## Recommended direction for 13UTOPiA

### Positioning feel
**Growth + craft + systems.**  
Studio POV + proof (Monolog/KOTA/Nothin’) on a stage defined by the wordmark: void, cream, amber light.

### Visual system (aligned to wordmark)

| Token | Value | Notes |
| --- | --- | --- |
| Void | `#000000` / `#0A0A0A` | Mark’s stage |
| Cream | `#F5EBD2` / `#EFE5C9` | Letterform fill; primary text on dark |
| Amber | `#7C653D` / `#C4A574` (light cast) | Warm shadow / accent / focus rings |
| Type display | Soft-rounded geometric sans (match mark spirit) | Brand-forward; avoid Inter/Roboto |
| Type body | Clean readable grotesque | Long-form, AEO answers |
| Radius | Generous (echo rounded glyphs) | Buttons/inputs soft; not sharp brutalist |
| Layout | One composition per viewport | No hero card stacks / stat-strip clutter |
| Motion | Lit, physical: fade/lift/shadow | 2–3 signature moves; reduced-motion safe |
| Hero asset | Flat lockup in chrome; 3D wordmark on home hero | See Logo system |
| Imagery | Work, process, people + brand kit | **Greek gods / statues scrapped** |

### Hero rules (first viewport)
- **Left:** *Be Unreal / Be Unreasonable* (editorial type)  
- **Right:** 3D wordmark as creative object  
- **Mobile:** mark → tagline → CTAs  
- One support line + one CTA group  
- No floating badges / promo chips on the hero  

### Page rhythm (home)
Hero → Perspective teaser → Work → Capabilities → Solutions → Process → Proof → Connect  

Matches inspirations that convert (Monolog, KOTA, Up Digital) without copying layouts.

---

## What we deliberately do **not** copy

| Pattern | Why |
| --- | --- |
| Greek gods / classical statue + VR as default identity | Superseded by 3D wordmark brand essence — **team lead can override** |
| WebGL / particle carnival on every route | Conflicts with “fast + SEO” |
| Purple/indigo AI-gradient cliché | Overused; not in brand |
| Dense dashboard-like home | One composition rule |
| Heavy Webflow template tropes | We build a custom Next.js system |

---

## SEO / AEO implications of this craft

- Prefer **HTML-first structure**; enhance with motion, don’t hide copy in canvas-only scenes  
- Every Capability leaf = unique URL + title + H1 + short answer-first intro (AEO)  
- JSON-LD: Organization, Service, FAQ where useful  
- Case stories: indexable pages, not modal-only  
- Images: real alt text; lazy below fold; prioritize LCP hero  

---

## Phase 1 visual deliverables (once signed off)

1. CSS variables (color, type scale, spacing)  
2. Nav / footer / PageHero / CTA patterns  
3. Home composition  
4. Connect conversion layout  
5. Capability leaf template (reusable for all stubs)  

---

## Team-lead decision checklist

Brand mark essence is **in** (void + cream + amber light + soft rounded geometry).

Still confirm:

- [ ] **Approve** UI system above as site-wide default  
- [ ] **Hero** = 3D wordmark primary (recommended) vs type-only adaptation  
- [ ] **Gods/statue** = drop / archive only / keep somewhere  
- [ ] Notes / overrides (exact fonts, corner radius, light sections yes/no)

Once approved, Phase 1 scaffold can use these tokens for real.
