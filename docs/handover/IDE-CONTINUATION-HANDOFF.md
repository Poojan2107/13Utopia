# 13Utopia Premium Redesign - IDE Continuation Handoff

Mission: continue 13Utopia toward the finish, cinematic control, material depth, and responsive art direction of https://15th.plus-ex.com/. Use Plus Ex as an experience benchmark, not a visual template. Preserve 13Utopia void black, cream, amber light, editorial restraint, Create / Build / Grow, and the chapter-film homepage.

## Repository

Repository: https://github.com/Poojan2107/13Utopia
Branch: main
Latest pushed commit: 4ed5777 - Push 13Utopia toward premium Plus Ex benchmark
Workspace: D:\\13utopia
Stack: Next.js 15.5.9, React 19, TypeScript, Tailwind v4, GSAP, Vercel Analytics, Speed Insights.
Build: npm run build; currently passes and generates 92 pages. Never commit .freebuff, build output, secrets, logs, or temporary screenshots.

## Homepage order

HeroStage; ChallengeSilence; WorldsMorph; UnreasonableDevice; OutcomesSolve; CaseStoriesHome; PerspectiveQuiet; ProcessChain; CollectiveHome; FinalChallenge. Home components are in src/components/home. Shared chrome is in src/components/site. Global styling is in src/app/globals.css. Content models are in src/data.

## Already implemented

Original art: public/brand/13utopia-hero-art.png plus create/build/grow world PNGs. GSAP pinned chapter-film behavior. Active world image opacity, scale, amber edge emphasis, mobile cropping, and reduced-motion fallbacks. Case cards with lift, amber border, image zoom, contrast, gradient reveal, and keyboard focus. Accessible mobile nav label. Shared section separators, CTA/capsule motion, link underline behavior, and lower-section art direction.

## Do not do

Do not replace the brand with a generic black-orange agency template. Do not copy Plus Ex exact compositions, typography, copy, or assets. Do not flatten the chapter film into a normal page. Do not add random gradients, excessive cards, stock imagery, or hero-only polish. Preserve semantics, keyboard access, reduced motion, mobile readability, and performance.

## Priority work

P0 cinematic motion: storyboard every full-screen section as a shot with entry, focal object, text entrance, hold, scroll transformation, exit, and reduced-motion fallback. Improve hero reveal, one signature light/depth movement, calm hold, and exit into ChallengeSilence. Make Create/Build/Grow feel like material worlds changing.

P0 responsive art direction: inspect 1440x900, 1280x800, 1024x768, 768x1024, 390x844, and 375x812. Tune headline wraps, crops, section heights, nav density, capsule placement, safe text zones, and scroll timing.

P1 lower-half balance: give OutcomesSolve, PerspectiveQuiet, ProcessChain, CollectiveHome, and FinalChallenge one authored visual/compositional idea each. Use material shifts, diagrams, proof fragments, typographic interruptions, editorial numbering, or controlled crops.

P1 content authority: replace generic explanations with sharper points of view, concrete outcomes, proof, and memorable case narratives.

P1 navigation/conversion: refine header transitions, active cues, mobile menu choreography, CTA hierarchy, footer, WhatsApp placement, and hover/focus consistency.

P2 technical cleanup: remove the remaining malformed amber arbitrary shadow utility that emits a CSS optimizer warning; replace it with a named token. Compress new PNGs, check dimensions/loading, preserve alt text.

P2 verification: run npm run build and probe /, /capabilities, /solutions, /case-stories, /collective, /perspective, /connect, /careers. Test links, console/runtime errors, menu open/close, focus visibility, and reduced-motion behavior.

## Definition of done

Coherent cinematic motion across the full homepage; art-directed compositions at all six viewports; balanced richness from hero through footer; stronger proof/content; accessible mobile and reduced-motion behavior; no production warnings or broken routes; clean commit pushed to main.

## Commit discipline

Before pushing run npm run build, git diff --check, git status --short, and confirm .freebuff is not staged. Use descriptive commits and include the latest SHA plus remaining gaps.

References: https://15th.plus-ex.com/ and https://github.com/Poojan2107/13Utopia
