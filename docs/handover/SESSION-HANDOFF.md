# Session handoff

**Date:** 2026-08-13  
**Lock:** Dual identity — interiors complete; media still deferred  

## Done
- Home + all IA hubs (Perspective, Capabilities, Solutions, Case Stories, Collective, Careers, Connect)
- Service / pillar / solution leaves: audience, FAQs, related solutions + case text links
- Collective rooms including Engineering + people by room
- Careers: roles, what we look for, how we hire
- Home sector strip (names only — no logos)
- Placeholders everywhere UI would show client/case media

## Case Stories craft (this pass)
- Hub is hover theatre (index + studio frame) — home-level, placeholders only
- Detail is L/R: type left, frame right — no doubled client name on the stage

## Media (now)
- Placeholders only. Flag: `LOCKED_MEDIA = false` in `src/lib/media.ts`
- Case hub / detail / home work / WorkRail / people portraits — no legacy images
- Case frames render as studio placeholder tiles

## Not done (wait 2–3 days for assets)
- Real client logos
- Locked case covers/frames (`public/cases/[slug]/` + flip `LOCKED_MEDIA`)

## Next single task
When assets land: set `LOCKED_MEDIA = true` and `mediaStatus: "locked"`. Do not redesign.
