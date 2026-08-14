# 13UTOPiA — Design system v0.2

**Locked fuse:** FUTURE = spine · RAW = first hit · ART = silence between chapters.  
**Source:** [BRIEF.md](./BRIEF.md) + chosen S8.  
**Not yet:** Figma pages, production UI, code.

Do not average the three directions. Each has a job.

| Mode | Job | Duration / place |
|------|-----|------------------|
| **RAW** | Curiosity. “What the hell is this.” | Load, first 3–8s of hero, CREATE/BUILD/GROW morphs, Normal vs Unreasonable |
| **FUTURE** | Trust. “They can actually build it.” | Default world, proof, capabilities detail, solutions, connect, conversion |
| **ART** | Taste + rest. Makes RAW hit harder. | Between chapters, Perspective, process statements, Collective humanity |

Wall (brief B16):

> Do not make a beautiful website. Make a website people remember.  
> Do not animate everything. Make everything that moves mean something.  
> Be unreal. Be unreasonable. But always be useful.

---

## 01. Brand personality (how the system behaves)

Bold · Intelligent · Playful · Experimental · Precise · Ambitious.

**Playful + precise** is the test for every decision.

- If it’s only playful → RAW with no snap. Reject.  
- If it’s only precise → FUTURE with no hit. Reject.  
- If it’s pretty and empty → ART as the whole site. Reject.

Voice: short, specific, no “passionate / innovative / customer-focused.”  
Tagline is philosophy, not a caption under the logo.

Working category line (public, until a more ownable name exists):

> A creative technology and growth company building brands, products and systems for ambitious organizations.

Collective = people language, not the homepage category.

---

## 02. Visual language (grammar)

Six ingredients, all original — principles from Munich / RPA / KOTA / GSAP, never their assets.

1. **Outlines** — thin geometry that draws, disappears, reconfigures. RAW + FUTURE.  
2. **Organic interrupt** — one curve or blob that breaks the grid. ART, and rare FUTURE transitions.  
3. **Type as object** — display words are images. Body is never.  
4. **Transform** — nothing merely fades in. Shape A becomes B. Section becomes section.  
5. **Controlled break** — something leaves the 12-col grid on purpose, then returns.  
6. **Hidden system** — 12 columns + 13 forms + 13 / nn markers. Chaos is mathematical.

The site is alive (idle / cursor / scroll / hover / click). It is not decorated.

---

## 03. Typography

Fonts are **working candidates** from the existing kit. Direction is locked; faces can still lose a test. Do not add a fourth family until one of these fails.

| Role | Face (test) | Behaves |
|------|-------------|---------|
| **Display grotesque** | Syne | FUTURE: set to the grid. RAW: stretch, outline, fragment, overflow. CREATE / BUILD / GROW. |
| **Body** | Instrument Sans | Always readable. 16–20px. Never distorted. Proof, nav, forms, legal. |
| **Editorial serif** | Instrument Serif | ART only. Crop, cover scale, manifesto lines. Not for UI chrome. |
| **Numerical** | Instrument Sans, tabular | 13 / 07, metrics, process index. Micro 10–13px. |

The 3D cream wordmark is **custom lettering**, not Syne. Don’t fake the mark in a webfont.

If Syne feels like “every 2021 studio” at 200px, replace **only** the display role with a sharper grotesque. If Instrument Serif isn’t high-contrast enough for ART crop, replace **only** the serif. Body stays.

### Scale (desktop)

| Token | Size | Use |
|-------|------|-----|
| display | 120–240px | UNREAL · UNREASONABLE · CREATE · BUILD · GROW · six outcomes |
| section | 60–100px | Chapter statements |
| subhead | 24–40px | Belief lines, case titles |
| body | 16–20px | Readable always |
| micro | 10–13px | 13 / nn, labels, legal |

### Scale (mobile)

Display becomes **one idea per viewport**, not 240px shrunk. Crop harder. Never run three display words at once. Body 16px minimum.

### Rules

- Display may leave the viewport, mask, outline, warp — **RAW and ART only**.  
- FUTURE display stays on the grid, tracking tight, no circus.  
- Buttons and nav are body, never display.  
- One display word can be an image. A paragraph cannot.

---

## 04. Color (working test — look before locking hex forever)

Brief C09 instinct: **mostly monochrome + one signature.**  
The fuse uses **one signature per mode**, never all at once.

| Mode | Field | Type | Accent | Never |
|------|--------|------|--------|--------|
| **FUTURE** | `#0a0a0a` near-black + hairline grid | Cream `#f5ebd2` | Amber as **light** (`#c4a574` catch, `#7c653d` shadow) | Amber as paint-bucket fills, cards, buttons everywhere |
| **RAW** | `#000000` void | Cream | Cream / amber outline only | A second accent. **Lime deferred** |
| **ART** | Paper cream `#f5ebd2` | Ink `#111111` | None. Crop is the accent | Second colour |

Existing `public/brand/` cream 3D + amber light **is** the kit. Lime is deferred. RAW uses the same colours, louder.

Interactive states (FUTURE): cream at 100% / 70% / 40%. Focus = amber-light hairline.  
ART links = underline ink, no color shift.  
RAW has almost no chrome; if a control must exist, it appears after the snap to FUTURE.

Selection, focus, errors: FUTURE tokens only. Don’t invent a third accent for forms.

---

## 05. Shape language — 13 forms (internal)

Not named to visitors. Recurring so the site is recognizable without a logo on every section.

| # | Form | Personality | Default mode | Typical job |
|---|------|-------------|--------------|-------------|
| 01 | **Orbit** | Attention, cycles | FUTURE | Idle; growth expanding |
| 02 | **Loop** | Return, systems | FUTURE | Automation; process |
| 03 | **Grid** | Discipline | FUTURE | Default field; modernize (then break) |
| 04 | **Wave** | Energy, organic | ART | Silence interrupt |
| 05 | **Void** | Pause, load | RAW | Empty hero start; black after “TOO DIFFICULT” |
| 06 | **Node** | Intelligence, AI | FUTURE | Automate; AI cases |
| 07 | **Fold** | Unfolding idea | RAW→FUTURE | Cube unfolds in hero |
| 08 | **Core** | 13, the mark | FUTURE | Load resolve; final collapse |
| 09 | **Flow** | Growth, content | FUTURE | Grow outcome |
| 10 | **Frame** | Brand, crop | ART | Perspective; case stills |
| 11 | **Signal** | Launch, go | RAW | Launch; CTA charge |
| 12 | **Fragment** | Break | RAW | Tagline shatter; then reassemble |
| 13 | **Utopia** | The whole | All | End state; system collapses into the mark |

Physics (brief C10): idle slow → cursor reacts → scroll transforms → transition becomes the next section → hover state change → click reconfigures.

A form that appears on Home in CREATE must be allowed to return, transformed, on a service or case page later. That’s brand recognition through motion.

**13 mythology (selective):** load, form IDs, rare corner `13 / 07`. Never a scoreboard on every chapter.

---

## 06. Grid

**Desktop:** 12 columns. Max content ~1440px. Outer margin ~48–64px. Gutter ~16–24px.  
**Tablet:** 8 columns, tighter margin.  
**Mobile:** 4 columns. Most “unreasonable” bleeds become full-bleed vertical.

FUTURE lives **on** the grid.  
RAW may **ignore** it for 3–8s, then **snap** onto it (that snap is the trust moment).  
ART uses the grid as **margins for silence** — type can crop off the top/left, but body copy stays in columns 2–11.

Unreasonable breaks (allowed):

- Display type bleeds 1–2 columns or off-canvas  
- A form sits between columns  
- One image overlaps a statement  

Then reassemble. Permanent mess is not the brand.

---

## 07. Image / CGI

No stock handshakes. No generic office. No gods.

| Family | What | Where |
|--------|------|--------|
| **Real** | Team, studio, real work, real environments | Collective, some cases |
| **Art directed** | Made for 13UTOPiA | Perspective, campaigns |
| **Synthetic** | CGI / 3D / abstract worlds | Hero forms, AI/build cases, load |

On-brand combo: **real human + impossible environment.**

Placeholders are valid until locked media. Ghost first-name / mesh is fine. Don’t pair random Unsplash.

Case stories: each project gets its **own** visual language (identity explode / UI construct / nodes / graphs) — still inside this system’s motions and modes.

---

## 08. Motion principles

**Nothing moves without a reason.**  
If it moves, it communicates, reveals, connects two ideas, or advances the story.

Stack: **GSAP + ScrollTrigger + SVG + CSS**. WebGL/3D only when the idea requires it (hero mark, not wallpaper).  
No fade-in + slide-up + parallax template stack.  
No 20 styles.

Reduced motion: no distort, no morph loops. Instant mode change. Content still there.

Performance is a design constraint. Every wow has a budget. No giant looping hero video.

---

## 09. Interaction library — seven verbs

| # | Verb | Means | Mode | Not for |
|---|------|--------|------|---------|
| 01 | **Morph** | Shape A → Shape B | FUTURE default; RAW hero | Body copy |
| 02 | **Draw** | Outlines draw themselves | FUTURE, RAW | ART (ink is already there) |
| 03 | **Distort** | Type responds to scroll/cursor | RAW | Proof, forms, ART body |
| 04 | **Reveal** | Content through unusual masks | ART, cases | Every card |
| 05 | **Transform** | Section becomes the next (includes collide) | Chapter joins | Random |
| 06 | **Break** | Escapes the grid | RAW, rare FUTURE | Whole page |
| 07 | **Reassemble** | Returns to system | After every break | — |

Collide (brief C12) is Transform: elements meet → something new.

### Signature sequences (use these, don’t invent more)

1. **Enter** — Void → outline circle **draws** → **morphs** to cube → **fold** unfolds → cursor → Distort UNREAL → snap to FUTURE.  
2. **They said** — Oversized words (Don’t / Too big / Too risky / Too difficult) → Void → GOOD → Be Unreal.  
3. **Worlds** — WE CREATE / WE BUILD / WE GROW: form **morphs**, crafts listed, not six cards.  
4. **Outcomes** — Six words at depth; select Automate → nodes; Grow → expand; Modernize → grid **breaks** then **reassembles**.  
5. **Normal / Unreasonable** — two lines; Unreasonable **breaks** then **reassembles** into the better statement.  
6. **Case** — problem → unreasonable idea → build → launch → result; visual language unique, verbs from the seven.  
7. **Exit** — quiet ART or FUTURE → HAVE AN UNREASONABLE IDEA → system **transforms** into Core / Utopia mark.

---

## 10. Homepage experience

Narrative chapters (brief C11): Impossible → Idea → Build → Growth → Proof → Collective → Next.

Homepage chapters (brief C21) mapped to **mode · rhythm · motion** live in [HOME-BLUEPRINT.md](./HOME-BLUEPRINT.md).

Job of Home (A10): **manifesto + proof + invitation.** If a block doesn’t do one of those three, it doesn’t belong.

---

## 11. Navigation behaviour

Primary: **Work · Capabilities · Solutions · Perspective · Collective · Connect**

Persistent CTA: **Start something unreasonable →**  
Secondary: **Schedule discovery**

Hero-only (then gone): **Enter Utopia** · **Start a project**  
Final: **Let’s make it real**

Do not put “I need to / I want to” in the bar. Those journeys live in chapters 03 and 05.

Chrome:

- FUTURE: dark, cream type, hairline, always available after the RAW hit.  
- ART chapters: invert to ink on paper; same six words.  
- RAW hit: chrome can hide or ghost; it must return on snap.  
- Mobile: one menu, same six, CTA sticky at end of drawer — not a second language.

Work = Case Stories (page title). Canonical URL later: `/work`.

---

## 12. Mobile philosophy

Not desktop-shrunk.

| Desktop | Mobile |
|---------|--------|
| Spatial compositions, cursor, horizontal outcome depth | One idea per screen; tap → transform |
| RAW distort + overflow | Crop + one-axis motion; no cursor warp |
| Hybrid scroll for six outcomes | Vertical list of six; tap changes the form |
| Decorative outlines can linger | Kill decoration that costs frames |

Brand stays unreal. It must stay usable. Thumb reach for the CTA. Reduced-motion is a first-class choreography.

---

## 13. SEO / performance rules

HTML is the site. Motion is a layer.

Required skeleton on Home (visible or visually-hidden, but in the document):

```text
H1  Be Unreal. Be Unreasonable.
Supporting line (real line later; example is not final)
CREATE · BUILD · GROW   + semantic links
Six outcomes            + semantic links
Selected case stories
Perspective excerpt
Collective excerpt
CTA
```

Google should understand: **13UTOPiA → CREATE/BUILD/GROW → services → solutions → case stories.**

Service URLs (`/services/...`) only when the page is useful. No thin farms. No fake Canada/location pages.

Entity: Organization schema, consistent NAP (India / Shyamal until Canada is a real operating fact), same company name everywhere.

Core Web Vitals over spectacle. Optimize stills/video. No animation that traps keyboard or screen readers. Honour `prefers-reduced-motion`.

---

## Do not (still)

Gradient blobs · glassmorphism pile-up · random 3D · 20 animation styles · stock handshakes · endless service cards · passionate-innovation copy · giant hero video · inaccessible motion · copying Munich / RPA / KOTA · averaging RAW+FUTURE+ART into one muddy look · inventing Why-copy or a Canada model.

---

## Open (still)

- Exact category name (more ownable than “creative technology & growth company”)  
- Canada operating model  
- Why 13UTOPiA — must be true in their words  
- Final display/serif if kit faces fail the first art-direction test  
- Exact lime hex after seeing it on a real hero still (not a page)
