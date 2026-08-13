# Flow

```
Request /
  → layout.tsx (chrome + AmbientLight + cursor)
  → page.tsx (HomeMotion)
      → HeroStage (GSAP intro + scrub on mark)
      → Perspective teaser (static)
      → WorkIndex (ScrollTrigger pin lg; WorkStageMedia placeholders)
      → CapabilitiesIndex
      → Solutions list
      → ProcessRail (scroll-linked active step)
      → ProofStrip
      → Connect cream band (data-pin-scale)
```

Interior routes: `src/app/<section>/page.tsx` + `src/data/*`. Do not rewrite interiors in the surgical home pass.
