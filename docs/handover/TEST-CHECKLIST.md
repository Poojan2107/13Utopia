# Test checklist — homepage takeover

## Hero (2B)
- [x] Desktop: one scene — mark is the field, tagline in the same frame (not two columns)
- [x] Tagline fully readable: *Be Unreal / Be Unreasonable* + Ahmedabad studio (no clip)
- [x] Header + Let’s talk remain legible on the void
- [ ] Mobile: mark crops high; type sits on a bottom wash, not cream-on-cream — code in; visual pass on a phone still needed
- [x] No second Talk pill in the hero
- [x] LCP: 3D wordmark still `priority`
- [x] Reduced motion: GSAP early-return (no intro / no mark scrub)

## Order
- [x] Hero → Perspective whisper → Work → Capabilities → Solutions → Process → Proof → Connect

## Work
- [x] 4 stories; placeholder stages only (no legacy covers)
- [x] Desktop: pin + hover/focus swaps stage; `aria-pressed` on active
- [x] Mobile: snap cards; each card links to the story
- [x] Open story → `/case-stories/tanyas-dental-house`; All → `/case-stories`

## Rest of home
- [x] Capabilities 2-col; `/capabilities/digital-products` present
- [x] Solutions titles; `/solutions/growth` present
- [x] Process steps keyboard + click (`aria-current`)
- [x] Proof quotes + metrics + caveat (“verified metrics publish when audited”)
- [x] Connect: Talk href `/connect`, WhatsApp, email, phone, Shyamal only
- [x] No Canada copy/UI
- [x] `LOCKED_MEDIA = false`

## Interiors (must still pass — do not regress)
- [x] Routes remain in nav: Perspective, Capabilities, Solutions, Case Stories, Collective, Careers, Connect
