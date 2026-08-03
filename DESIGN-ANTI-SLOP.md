# DESIGN.md — Anti-Slop Visual Rules

A brand-agnostic design constitution. Drop it in the repo root and reference it in every UI prompt:
*"Follow DESIGN.md. Flag any conflict instead of resolving it silently."*

**The one law:** every visual decision must have a job. If you cannot name the job in a short phrase
— separates an interactive control, establishes hierarchy, proves a claim, confirms an action — the
decision is decoration and comes out.

**The diagnosis:** AI slop is not caused by AI. It is caused by *unconstrained* visual decisions.
A model with no constraints reproduces the statistical average of the training set, which is a
centered hero, three rounded cards, a testimonial row, and a gradient CTA. The fix is a system with
explicit limits and an explicit rejection list — then the model implements taste instead of
inventing it.

---

## 0 — Project config

Fill this once per project. Everything below inherits from it.

```
Design thesis (one sentence):      ______________________________________
Visual direction (pick ONE):       editorial / material / product-system / cinematic
Display typeface:                  ______________________________________
Body + UI typeface:                ______________________________________
Canvas colour:                     ______________________________________
Primary text colour:               ______________________________________
Single accent:                     ______________________________________
Radius scale:                      ______________________________________
Elevation policy:                  flat / minimal / layered
Motion budget:                     ___ signature moments per page (0–2)
Primary conversion action:         ______________________________________
```

The design thesis is the filter for every later decision. Write it as a concrete sentence, not an
adjective pile. *"Warm mineral neutrals, editorial type, architectural grid, restrained motion"*
is usable. *"Modern, clean, premium"* is not — it describes nothing and constrains nothing.

---

## 1 — Art direction

**Pick one visual world and stay in it.** Hybridizing directions is how slop reappears after a
redesign: the result is a page that is editorial in the hero, SaaS in the middle, and cinematic at
the bottom.

| Direction | Visual language | Fits | Its failure mode |
|---|---|---|---|
| **Editorial** | Typography, whitespace, image crops, thin rules | Consulting, services, publishing, luxury | Becomes unreadable posturing; no affordances |
| **Material / architectural** | Texture, grid, proportion, detail photography | Physical products, furniture, architecture, manufacturing | Slow, heavy, image-dependent |
| **Product-system** | Precision, structured modules, controlled density | Software, tools, configurators, B2B | Drifts into generic dashboard SaaS |
| **Cinematic** | Dominant imagery, scroll chapters, scene changes | Flagship brand pages, single-product launches | Animation without narrative; poor on mobile |

Two directions can coexist only if one is clearly subordinate and confined to a defined zone
(e.g. product-system inside the configurator, editorial everywhere else). State that split in the
config block or do not do it.

---

## 2 — Typography

Highest-leverage layer. It sets personality before a single word is read.

### Role separation

Two families maximum.

| Role | Requirement |
|---|---|
| **Display** | Characterful. Hero and major headings only. |
| **Body / UI** | Highly readable, neutral, good at small sizes, complete weight range |
| **Utility** | The body face with tracking/weight/case changes — **not** a third family |

**On font selection:** do not pick by name from a list. The "premium" font of any given year becomes
next year's slop signature — a specific pairing being fashionable is itself evidence it will read as
templated. Pick by criteria: does the display face have a point of view at large sizes; does the body
face hold up at 14px; do they differ enough in structure to read as a deliberate pair rather than an
accident.

The common "never use Inter/Roboto/system fonts" rule is overstated. A neutral workhorse face is a
legitimate choice for dense interfaces. The actual failure is *defaulting* — using one undifferentiated
sans for hero, body, labels, and buttons with no hierarchy. That is a hierarchy problem wearing a
font costume.

### Scale

Fewer sizes, larger jumps. A ~1.25–1.33 ratio for interface-heavy work, ~1.4–1.6 for editorial.

| Element | Desktop range | Notes |
|---|---:|---|
| Eyebrow / label | 12–14px | Letter-spaced; uppercase only when it aids scanning |
| UI / nav / buttons | 14–16px | Medium weight; bold is not the default |
| Body | 16–18px | Never below 16px for reading copy |
| Section heading | 28–42px | Must be an unmistakable jump from body |
| Hero heading | 48–80px | One dominant message |
| Display moment | 72–112px | At most once per page |

Six near-identical sizes on one page is visual indecision. If two sizes are within ~15% of each
other, they are the same size — merge them.

### Bans

- Three or more font families
- A different type treatment per component
- Gradient text
- All-caps headings as a default rather than an occasional label
- Low-contrast body text used to signal "premium"
- Line length outside 55–75 characters for reading copy
- Justified text on the web

---

## 3 — Colour

Define colour by **function**, never by appearance. A token named `blue-start` is a bug; a token
named `accent` or `surface-raised` is a system.

| Role | Purpose | Treatment |
|---|---|---|
| `canvas` | Page background | The dominant neutral |
| `surface` | Distinct content layer | Slight tonal shift from canvas |
| `surface-raised` | Modal, panel, sticky element | Used sparingly |
| `text` | Primary information | Near-black or deep neutral — not pure `#000` |
| `text-muted` | Supporting context | Still readable; never decorative grey |
| `border` | Structure | Low-contrast; thin |
| `accent` | Primary action, selected state | **One** colour |
| `status-*` | Success / warning / error | Reserved for system feedback only |

**Distribution target:** roughly 80–90% neutral surfaces, 8–15% dark text and anchors, 2–5% accent.
Neutral does not mean beige — it means the accent has to earn its attention. If the accent appears
in twelve places, it signals nothing.

### Hard requirements

- Body text ≥ 4.5:1 contrast against its background
- Large text (≥18.66px bold or ≥24px) ≥ 3:1
- Icons, focus rings, and interactive-control boundaries that carry meaning ≥ 3:1
- Never encode meaning in colour alone — pair with text, icon, position, or weight
- One primary action owns the strongest accent in any given view

### Bans

- Purple-to-blue gradient anything
- A second accent added to "make it less boring" — use photography, type contrast, or composition
- Arbitrarily tinted cards
- Neon on dark as a shortcut to looking technical
- Pure black text on pure white for long-form reading

---

## 4 — Layout and composition

Where generated pages fail hardest, because the model knows the average page shape and reproduces it.

### Hierarchy over symmetry

Every viewport gets:

1. **One focal element** — hero title, key visual, product view, interactive control, or proof metric
2. **One supporting element** — subhead, detail, secondary visual
3. **One action** — the primary CTA or interaction
4. **Low-emphasis structure** — nav, metadata, secondary links

Equal-weight elements compete and cancel. If two things on screen are equally loud, one of them is
in the wrong place.

### Rhythm

Alternate density deliberately. A page where every section has identical height, padding, and
column count reads as a template regardless of how good the tokens are.

| Section type | Density | Purpose |
|---|---|---|
| Hero | Spacious | Establish one idea |
| Evidence strip | Dense | Credibility, fast |
| Narrative / explanation | Medium, staggered | Explain a concept |
| Full-bleed visual | Spacious | Reset the eye |
| Detail / process | Dense, grid or columns | Build confidence |
| Close | Focused, narrow | One decision |

Compression, expansion, quiet, emphasis, relief.

### Grid

- 12-column desktop, 4-column mobile
- Left alignment as the default for body content
- Break the grid once or twice per page for a deliberate moment — not everywhere
- Whitespace exists to group and rank, not to fill. Arbitrary large gaps read as unfinished, not
  luxurious.

### Bans

- Centred hero → three identical icon cards → testimonial row → gradient CTA
- Every section centred
- Repeating the same two-column image/text block with the sides swapped as the whole page
- Equal-height card grids used for content that is not actually parallel

---

## 5 — Components and geometry

"Cardocalypse" — every item wrapped in a white rounded rectangle with a shadow, an icon, a heading,
and a paragraph — is the single clearest slop tell.

### The box test

A container is justified only if it does one of these:

| Job | Examples |
|---|---|
| Separates an interactive control | Input, selector, filter |
| Groups a repeating object | Product tile, case study, listing |
| Creates a layer | Modal, drawer, sticky panel |
| Protects dense information | Comparison table, data module |
| Signals selection or actionability | Active option, chosen variant |

Everything else — paragraphs, headings, benefits, quotes, images, sections — does not get a box.
**Never nest a card inside a card.**

### Geometry consistency

| Element | Rule | Avoid |
|---|---|---|
| Radius | One scale, applied consistently (e.g. 0 / 4 / 8) | 20–32px pillows everywhere |
| Buttons | Same radius family as inputs | Pills for every action by default |
| Borders | Thin, neutral, sparing | Thick grey frames, coloured left borders |
| Elevation | Minimal; prefer tonal shift over shadow | Heavy diffuse floating-SaaS shadows |
| Dividers | To mark sequence | A line between every element |

### States are part of design

A component is not finished until it has: default, hover, focus-visible, active, disabled, loading,
**empty**, and **error**. Missing empty and error states is a reliable sign the interface was
generated rather than designed — the happy path always looks fine.

### Family resemblance, not cloning

Related components should share geometry and spacing but differ where their function differs. If a
proof statistic, a case study, and a CTA all render as the same box, the page has one idea repeated
three times.

---

## 6 — Imagery, icons, figures

Specificity beats polish. A slightly imperfect photograph of the real thing outperforms a flawless
generic render, because it proves something.

| Asset | Role | Strong | Weak |
|---|---|---|---|
| Product / render | Show the object and its quality | Material close-up, real interface state | Abstract glossy shape |
| Process | Build trust | Real workspace, annotated workflow | Stock people at a laptop |
| Editorial | Mood, narrative | Deliberate crop with a point of view | Decorative image unrelated to content |
| Diagram | Explain complexity | Architecture or process flow | Generic line-art illustration |
| Icon | Recognition in dense UI | Search, filter, export | Large icon in a coloured circle above every heading |
| Data visual | Support a claim | A specific metric with a source | Decorative sparklines |

### Rules

- One image treatment per page: photographic, rendered, editorial, or technical — not a mix
- Crop with intent; avoid default centred-object framing everywhere
- If using generated imagery, art-direct the whole set to one lighting, palette, lens, and material
  language — inconsistent generated images are more damaging than no images
- Captions only when they add provenance, dimensions, context, or proof
- Never fabricate visual evidence: logos, certifications, screenshots of things that do not exist

### Bans

- Blobs, orbs, particles, floating gradients, glassmorphism
- Stock handshakes and diverse-team-in-bright-office photography
- Mixing doodles, 3D gradients, stock photos, and thin-line icons in one viewport

---

## 7 — Motion

Motion is choreography, not accumulation. Budget: **0–2 signature moments per page**, plus interface
feedback.

| Purpose | Good | Bad |
|---|---|---|
| Orientation | Menu opens, state change | Random drift |
| Feedback | Press, selection confirm | Everything bouncing |
| Continuity | Visual updates after a choice | Page-wide parallax |
| Storytelling | A progressive reveal that carries meaning | Scroll-fade on every section |
| Focus | Expanding detail, spotlighting a choice | Constantly pulsing CTA |
| Perceived performance | Skeleton, progressive load | Artificial loading theatre |

### Specification

- 150–250ms for interface feedback; 400–800ms for a meaningful transition
- Calm ease-out curves; no bounce, elastic, or exaggerated spring unless the brand is genuinely playful
- Interaction-triggered first; scroll-triggered only where it controls pacing
- `prefers-reduced-motion` honoured everywhere; no information may exist only inside an animation
- Animate `transform` and `opacity`; avoid animating layout properties
- **The page must be fully comprehensible with animation disabled.** If it is not, the motion is
  carrying content and the layout is broken.

---

## 8 — The forbidden list

Machine-checkable. Any of these appearing is a defect, not a preference.

- Purple/blue gradient hero
- Glassmorphism, frosted panels, fake depth
- Gradient buttons, gradient text
- Three-column icon-card section used as the default explanation pattern
- Rounded cards as the universal container
- Everything centred
- Large icons in coloured circles above headings
- Decorative blobs, particles, glowing orbs
- Heavy shadows for decoration
- Auto-playing carousels
- Countdown timers and manufactured urgency on non-time-limited offers
- Exit-intent modals, entry interstitials
- Emoji as interface iconography
- Fabricated logos, testimonials, statistics, or credentials
- Marketing superlatives standing in for specifics ("revolutionary", "seamless", "next-generation")

---

## 9 — Contested rules

Common advice that is wrong or conditional. Do not apply these mechanically.

| Claim | Reality |
|---|---|
| "Never centre anything" | Centring is correct for narrow single-message content — heroes with one line, empty states, confirmations, auth screens. The failure is centring *everything*, which removes hierarchy. |
| "Asymmetry is more premium" | Asymmetry is a tool for creating hierarchy. Asymmetry with no hierarchical purpose is just misalignment. |
| "Avoid default sans-serifs" | See §2. The problem is defaulting, not the typeface. |
| "More whitespace is better" | Whitespace groups and ranks. Past that it lowers information density and slows comprehension. |
| "Minimal is premium" | Minimal with weak content is thin, not refined. Restraint requires something to restrain. |
| "Dark mode looks more advanced" | Dark mode is a preference feature with real contrast costs. It is not an aesthetic upgrade. |
| "Follow the F-pattern" | One of several observed scanning patterns. Do not lay out a page to a single one. |
| "Everything above the fold" | People scroll when the page gives them a reason to. |

---

## 10 — Token contract

- All colours, sizes, spacing, radii, and durations come from tokens. **No magic numbers in
  components.**
- In Tailwind: extend the theme; do not use arbitrary values (`text-[17px]`, `bg-[#F3F1EC]`) in
  component code. An arbitrary value is an unlogged design decision.
- Spacing follows one scale (4px or 8px base). Not both.
- Adding a token is a design decision and gets stated, not slipped in.
- The token file is the single source of truth. If a component disagrees with it, the component is wrong.

---

## 11 — Build sequence

Order matters. Most redesigns fail by starting at step 9.

1. Freeze copy and structure — this pass changes visual decisions only
2. Produce **three** art-direction options: type pair, palette, image treatment, surface style, one hero composition each
3. Pick **one**. Do not hybridize — hybridizing recreates slop
4. Build the token system
5. Design one representative viewport (hero + first following section)
6. Critique at distance: blur it, zoom out. Is the focal point, hierarchy, and rhythm visible before any text is legible?
7. Extend to the page — tokens fixed, composition varies by content purpose
8. Design mobile as its own composition, not a compressed desktop
9. Add motion last
10. Accessibility and responsive QA: contrast, focus states, target sizes (≥24px minimum, 44px practical), 200% zoom, reduced motion

---

## 12 — Audit scorecard

Score 0 or 1. **Below 15 of 20 means structural redesign, not polish.**

| # | Item | Score |
|---|---|---:|
| 1 | I can state the visual direction in five words | /1 |
| 2 | One intentional type pairing, two families maximum | /1 |
| 3 | Hierarchy is obvious before reading any word | /1 |
| 4 | Exactly one accent colour is defined | /1 |
| 5 | The accent is scarce and always means the same thing | /1 |
| 6 | Each viewport has one unmistakable focal point | /1 |
| 7 | Alignment is a decision, not a default | /1 |
| 8 | Adjacent sections differ in density or rhythm | /1 |
| 9 | No unjustified three-identical-card grid | /1 |
| 10 | Boxes appear only where they pass the box test | /1 |
| 11 | Radius, border, and elevation follow one consistent rule | /1 |
| 12 | Images prove something or create deliberate mood | /1 |
| 13 | One image treatment per page | /1 |
| 14 | Icons support interaction rather than decorate headings | /1 |
| 15 | Every interactive component has hover, focus, disabled, loading, empty, and error states | /1 |
| 16 | Motion has a stated purpose and stays within budget | /1 |
| 17 | The page works fully with animation disabled | /1 |
| 18 | Contrast and focus visibility meet AA | /1 |
| 19 | Mobile is composed, not compressed | /1 |
| 20 | With the logo removed, this could not be any AI-generated startup page | /1 |

Item 20 is the real test. If the answer is no, items 1–19 are cosmetics.

---

## 13 — Rules for the implementing model

- Read this file before generating any UI. Cite the rule number you are satisfying for non-obvious choices.
- Do not invent brand direction. If §0 is unfilled, ask — do not pick a palette and proceed.
- Do not hybridize the four art directions.
- When a requested feature conflicts with a rule here, **raise the conflict; do not silently resolve it**.
- Never fabricate content, proof, imagery, or credentials to fill a layout. Use a marked placeholder
  and log what asset is actually needed.
- Prefer editing an existing component over adding a new one. Component proliferation is how systems
  decay into slop.
- When told to make something "better looking," the default move is subtraction and stronger
  hierarchy — not additional effects.
