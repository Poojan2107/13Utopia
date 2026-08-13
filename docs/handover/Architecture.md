# Architecture

## Stack
Next.js App Router · React 19 · Tailwind 4 · GSAP + ScrollTrigger (`src/lib/gsap.ts`)

## Layout
`src/app/layout.tsx` — header, footer, AmbientLight, StudioCursor, WhatsApp FAB, JSON-LD

## Home (this lock)
- `src/app/page.tsx` — section order
- `src/components/home/HeroStage.tsx` — L/R hero
- `src/components/home/WorkIndex.tsx` — 4 featured cases, pin on lg
- `src/components/home/WorkStageMedia.tsx` — placeholder stage (no mismatched images)
- `src/components/home/CapabilitiesIndex.tsx` · `ProcessRail.tsx` · `ProofStrip.tsx` · `HomeMotion.tsx`

## Data
`src/data/site.ts` · `capabilities.ts` · `solutions.ts` · `case-stories.ts` · `people.ts` · JSON clients/testimonials

## Tokens
`src/app/globals.css` — void / cream / amber, square `btn-*`
