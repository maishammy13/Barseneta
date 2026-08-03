# Task: Scan-Readability & Conversion Audit → Gap-Only Remediation

You are auditing an existing website codebase against a set of evidence-based rules for how people
actually consume web pages (scanning, information scent, progressive persuasion).

**This is not a redesign. This is a gap audit followed by minimal, targeted remediation.**

---

## Rule 0 — Audit before you touch anything

Do not write or modify a single line of production code until you have produced `UX-AUDIT.md`
and I have approved it.

For every rule in Part A, assign exactly one verdict:

| Verdict | Meaning | Action |
|---|---|---|
| `PRESENT` | The site already does this, in substance | **No change.** Record where it lives. |
| `EQUIVALENT` | The site solves the same problem a different way, and it works | **No change.** Record the alternative and why it satisfies the intent. |
| `PARTIAL` | The mechanism exists but fails on a specific, nameable point | Minimal fix to the failing point only |
| `ABSENT` | The underlying logic is not addressed anywhere | Implement |
| `N/A` | Rule does not apply to this site type | Justify in one line |

Bias toward `PRESENT` / `EQUIVALENT`. If you find yourself arguing that something existing is
"technically there but could be better," that is `PRESENT`. Aesthetic preference is not a gap.
A gap means a visitor question goes unanswered or a navigation/decision path is broken.

**Do not restyle, re-theme, re-typeset, or "improve" anything that already works.** Existing
design tokens, colour palette, spacing scale, component library, and copy voice are fixed inputs.

---

## Site context

> Edit this block if you point the prompt at a different site.

- **Site:** ICONIQUE designs — custom concrete/wood/metal manufacturing, Addis Ababa
- **Stack:** React + Vite + Tailwind + shadcn/ui
- **Business model:** quote-driven, **not** e-commerce. No cart, no payments, no prices published.
- **Primary conversion:** "Request Custom Quote" → lead routed to sales Telegram group
- **Secondary conversion:** bespoke intake (client uploads sketch/blueprint for feasibility review)
- **Tertiary:** product configurator (mix materials per component) — currently a 2D proof of concept
- **Buyer:** specifiers and end clients evaluating a workshop they have not met, for a
  high-consideration, made-to-order, non-returnable physical product
- **Dominant buyer anxiety:** *"Can these people actually build what I need, to that quality,
  in a sane time frame, and what happens if it goes wrong?"* — capability and delivery risk,
  not price comparison
- **Design direction (locked):** industrial-luxury. White bg, `#333333` nav/headers,
  `#A80000` accents, `#1A1A1A` text, `#E0E0E0` gray patterns
- **Traffic assumption:** mobile-majority. Treat mobile as the primary layout, not the fallback.

---

## Part A — The rule set

Each rule is tagged with evidence strength:

- **[S] Strong** — supported by eye-tracking and HCI research (Nielsen Norman Group eye-tracking
  corpus, information-foraging theory, WCAG). Treat as near-binding.
- **[M] Moderate** — directionally supported, context-dependent.
- **[P] Practitioner heuristic** — expert practice, not controlled research. Implement only if it
  costs little; never break something working to satisfy a `[P]` rule.

### A1 — Hero section

- **[S]** A first-time visitor must be able to state *what is made, for whom* from the hero alone,
  without scrolling and without inference from imagery.
- **[M]** Default formula: *We help [specific customer] achieve [specific result] through
  [mechanism]*. For a premium/craft manufacturer this may legitimately invert to a category-led or
  material-led headline **with a clarifying subline** — that inversion counts as `EQUIVALENT`,
  a headline with no clarifying subline does not.
- **[S]** Hero must carry: headline, one clarifying sentence, one primary CTA, and at least one
  trust cue. A hero that is image-only or slogan-only is `ABSENT`.
- **[M]** Secondary CTA should be lower-commitment than the primary (e.g. "See what we've built"
  vs "Request a quote"), not a duplicate of it.
- **[P]** Hero image should show the actual product/work, not stock or abstract texture.

### A2 — Navigation and information architecture

- **[S]** Every nav label must predict its destination. Invented or branded labels
  ("Our World", "The Craft", "Studio") are a gap unless paired with a descriptive label.
  Boring wins: Products / Custom Work / Materials / About / Contact.
- **[S]** Descriptive headings and labels are also a WCAG requirement, not only a conversion rule.
- **[M]** Keep top-level nav to roughly 5–7 items. Dropdowns are fine; a mega menu on a catalog of
  this size is optional.
- **[M]** The primary CTA must be reachable from the nav on every page, mobile included.
- **[P]** Sticky nav on scroll; breadcrumbs on deep catalog/product routes.

### A3 — Page sequence (progressive persuasion)

Each major page section must answer **one** visitor question, in an order that does not skip a step.
Reference order for the homepage:

1. What do you make? *(hero)*
2. Is this for someone like me? *(segments / use cases / categories)*
3. What problem does it solve? *(custom fit, materials, spaces standard furniture can't serve)*
4. What do I get? *(benefits, not feature lists)*
5. How does it work? *(process: enquiry → design → feasibility → fabrication → delivery/install)*
6. Why should I trust you? *(workshops, in-house production, years operating, capability)*
7. What proves it? *(portfolio, photography, specs, named projects)*
8. What could go wrong? *(objection handling: lead time, revisions, tolerances, damage, warranty)*
9. What do I do next? *(final CTA)*

- **[M]** Order is more important than section count. Merging two adjacent steps into one section is
  `EQUIVALENT`. **Skipping a step entirely is `ABSENT`** — most commonly skipped here are (5) and (8).
- **[S]** "How it works" matters disproportionately for made-to-order businesses, because the buyer
  is purchasing a process they cannot inspect in advance.

### A4 — Trust and proof

- **[S]** Proof must sit adjacent to the claim it supports, not aggregated in a distant
  "Testimonials" strip.
- **[M]** Strong proof for this business, ranked: photographed finished installations > project
  case studies with constraint/solution/outcome > material and dimensional specs > workshop and
  process imagery > named client references > years-in-operation and workshop count.
- **[M]** Weak/decorative proof: unattributed testimonials, generic star ratings, meaningless
  counters, unnamed logo walls.
- **[HARD CONSTRAINT]** **Never invent proof.** No fabricated testimonials, client names, logos,
  certifications, statistics, project counts, or years. Where a proof slot is warranted but the
  asset does not exist, build the component and fill it with a clearly marked placeholder, then log
  it in `CONTENT-NEEDED.md` with the exact asset required. Fabricated credibility on a real
  business's site is a liability, not a shortcut.

### A5 — Calls to action

- **[S]** One visually dominant primary CTA per page. Multiple *instances* of the same primary CTA
  are fine and expected; multiple *competing* primary CTAs are a gap.
- **[M]** CTA copy states the action and its outcome: "Request a custom quote", "Send us your
  drawing", "Book a workshop visit" — not "Submit", "Learn more", "Click here".
- **[M]** Offer a low-commitment path alongside the high-commitment one, because a buyer who is not
  ready to specify a project still needs somewhere to go.
- **[S]** Every form field must be justified. For a Telegram-routed lead, ask only what sales needs
  to reply. Each additional field costs completions.
- **[P]** Sticky or repeated CTA on long mobile pages.

### A6 — Scannability and hierarchy

- **[S]** **Headings-only test:** stripped of all body copy, the page's headings alone must still
  communicate the argument. If they read as labels ("Our Products", "Quality", "Contact") rather
  than statements, that is `PARTIAL` at minimum.
- **[S]** Semantic heading order (one `h1`, no skipped levels). Do not use heading tags for styling.
- **[M]** Short paragraphs, front-loaded sentences, bold on meaning-bearing phrases only.
- **[M]** Group related content visually (proximity, cards, alignment) so structure is inferable
  before reading.
- **[M]** Watch the failure mode of luxury layouts: oversized type, extreme whitespace, and
  slow reveal animations reduce information density and delay scent. If a section requires
  scrolling past two viewports to deliver one sentence, that is a hierarchy failure regardless of
  how good it looks.

### A7 — Mobile

- **[S]** Primary CTA reachable in the thumb zone without scrolling to a specific point.
- **[M]** Vertical sequencing must preserve the Part A3 order — do not let responsive stacking push
  proof or process below a wall of catalog cards.
- **[M]** Accordions for detail-heavy content (specs, materials, FAQ); never for the core value message.
- **[S]** Tap targets ≥ 44px. No interstitial pop-ups on entry.
- **[S]** Configurator and file-upload (bespoke intake) must be usable one-handed on a phone, or must
  degrade to a clearly signposted alternative path.

### A8 — Accessibility

- **[S]** WCAG AA contrast — verify `#A80000` on white and on `#333333` at the sizes actually used.
- **[S]** Descriptive link text; no bare "read more" links.
- **[S]** Labelled form fields (not placeholder-as-label), visible focus states, full keyboard
  operability of nav, configurator, and upload.
- **[S]** `prefers-reduced-motion` honoured for all scroll and reveal animation.
- **[M]** Plain language. Name materials and processes in words a non-specialist buyer uses.

### A9 — Performance as information scent

- **[M]** Hero LCP and image weight are a conversion issue, not only a technical one: a slow first
  paint is a scent failure. Audit hero and catalog imagery for format, size, and lazy-loading.

---

## Part B — Anti-rules: do not implement these

These are common oversimplifications. If any of them appears in your reasoning, discard that reasoning.

- ❌ "Everything important must be above the fold" — people scroll when scent is strong.
  Do not compress the page to fit one viewport.
- ❌ "Users always follow an F-pattern" — F is one of several patterns (layer-cake, spotted,
  commitment). Do not lay out the page to a single pattern.
- ❌ "Shorter copy always converts" — the variable is *cost of understanding*, not word count.
  Well-structured longer copy beats vague short copy. Do not delete substantive content to hit a
  length target.
- ❌ "Nobody reads" — motivated buyers read deeply. Keep depth available; make it skippable.
- ❌ "One CTA per page" (misread as one CTA *instance*) — repeat the same primary CTA freely.
- ❌ "More whitespace is always better" — see A6.
- ❌ Do not add carousels, auto-playing video, chat widgets, exit-intent modals, or countdown
  urgency devices. None are in scope.

---

## Part C — Audit procedure

Work through this mechanically and show your working in `UX-AUDIT.md`.

1. **Route inventory.** List every route/page and its intended job.
2. **Section map of the homepage.** For each section in DOM order: its heading, the visitor question
   it answers (A3), and its CTA if any. Flag any section answering zero questions or two.
3. **Heading extraction.** Dump the full `h1`–`h3` outline of the homepage and each key page.
   Run the headings-only test (A6). Report the outline verbatim in the audit.
4. **Nav label review.** Every label, its destination, and whether the label predicts it (A2).
5. **CTA inventory.** Every CTA on the site: copy, destination, visual weight, page. Identify
   competing primaries.
6. **Proof inventory.** Every trust/proof element, what claim it supports, and its distance from
   that claim. Mark decorative vs verifiable.
7. **Form audit.** Every field in the quote form and bespoke intake, and whether sales needs it.
8. **Mobile pass.** Re-run steps 2, 5, and 7 against the mobile layout specifically.
9. **Accessibility pass.** A8 checks, mechanically where possible (contrast ratios computed, heading
   order verified, focus states confirmed).
10. **Verdict table.** Every rule in A1–A9, one row, one verdict, one line of evidence
    (file path + line reference or component name).

---

## Part D — Deliverables

Produce, in this order:

1. **`UX-AUDIT.md`**
   - Verdict table (rule → verdict → evidence location → one-line rationale)
   - Counts: how many `PRESENT` / `EQUIVALENT` / `PARTIAL` / `ABSENT` / `N/A`
   - The homepage heading outline, verbatim
   - **Top 5 real gaps**, ranked by likely effect on a quote enquiry — with the reasoning for the ranking
2. **`CONTENT-NEEDED.md`** — every asset the site needs but does not have (photographs, project
   details, lead times, warranty terms, workshop facts). Be specific: not "add testimonials" but
   "one named client project in the kitchen/bath category with brief, constraint, and finished photo."
3. **Update the existing `TODO.md`** — one task per `ABSENT`/`PARTIAL` item, tagged
   `[critical] / [high] / [secondary] / [experiment]`.
4. **Then stop.** Wait for approval before implementing.

On implementation, append to `CHANGELOG.md`: what changed, which rule it satisfies, and why —
in that order.

---

## Part E — Implementation constraints

- Minimal diffs. Modify existing components rather than replacing them.
- No new dependencies without asking.
- No changes to the colour palette, type scale, or component library.
- No copy rewrites outside the sections identified as gaps. Where new copy is needed, write it plain
  and specific; leave `[REVIEW]` on any factual claim about the business you could not verify from
  the codebase or from what I have told you.
- Do not touch the configurator's internal logic. Its UX surface (labels, CTA, mobile reachability,
  keyboard access) is in scope; its state model is not.
- If a fix would conflict with the locked design direction, do not implement it — raise it instead.

---

## Part F — Self-checks before you report done

- Headings-only skim: does the argument survive?
- Five-second test, simulated honestly: from hero alone, what is made, for whom, and what is the
  next step?
- First-click test: for the task "I want a bespoke piece made from my own drawing," is the correct
  first click obvious from the homepage?
- Mobile thumb reach: is the primary CTA reachable at every scroll depth?
- Did I fabricate any proof, statistic, client, or credential? (Must be *no*.)
- Did I change anything I marked `PRESENT` or `EQUIVALENT`? (Must be *no*.)

---

## Part G — Priority order

1. **Critical:** anything blocking the visitor from understanding the offer or reaching the quote
   path — hero clarity, nav predictability, CTA reachability, form friction, WCAG AA failures.
2. **High:** missing steps in the A3 sequence — usually "how it works" and objection handling.
3. **Secondary:** proof adjacency, heading rewrites, mobile refinements, performance.
4. **Experiment:** hero formula variants, CTA copy, section order. Log these; do not implement
   silently.
