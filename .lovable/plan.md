
# Oleeha & Co. — Experience Design Sprint

A single-page, magazine-style offer site. Reading is the interaction. Goal: earn a short fit call.

## Design system

Tokens defined in `src/styles.css` (`@theme` + `:root`):

- Paper `#F7F3EC` (background)
- Ink `#1A1714` (foreground)
- Taupe `#8A7E6F` (muted / metadata)
- Vermilion `#C24A32` (single spot accent — rules, one word, one link underline)
- Radius: 4px (near-square)
- Baseline: 8pt spacing; section padding 120px+ desktop, 72px mobile
- Type:
  - Display: **Fraunces** (ink-trap warmth, opsz + soft mode) — via `<link>` in `__root.tsx`
  - Text: **Fraunces** for body at reading size or a pairing with a humanist body — using Fraunces + **Inter Tight** for labels/metadata (uppercase, tracked, small)
  - Mono/labels: **JetBrains Mono** used sparingly for section numerals ("№ 01") and metadata
- Exclusions enforced in review: no gradients, no glass, no drop shadows, no big rounded cards, no stock hero, no tech-blue, no neon

Load fonts via `<link>` in `src/routes/__root.tsx` head (never `@import` a URL in styles.css).

## Motion & interaction

- Framer Motion for reveal — `y: 8, opacity: 0 → 1`, spring `{ stiffness: 120, damping: 22 }`, staggered by line. Feels like type "setting into place," not sliding.
- Lenis for smooth scroll, mounted once at the root shell.
- Hover: link underline draws left-to-right in vermilion, 300ms ease-out. Section numerals fade taupe → ink on section enter.
- Respect `prefers-reduced-motion`.
- 44px min touch targets on every interactive element.

## Narrative structure (single route: `src/routes/index.tsx`)

Follow the section script exactly. Each section is its own component in `src/components/sections/`:

1. **Hero** (`Hero.tsx`) — 100vh, oceans of cream. One line, Fraunces display, ~clamp(56px, 9vw, 148px), tight leading, ragged right. Copy: *"The world is drowning in content. Almost nothing is unforgettable in a room."* Small metadata top-left: "Oleeha & Co. — Experience Design Sprint / Fixed scope. Weeks, not months." Single quiet cue at bottom (hairline rule + "Begin reading" label, no arrow icon).

2. **The Problem** (`Problem.tsx`) — Section numeral "№ 01 — The Problem". Editorial two-column-ish paragraph (single column on mobile, ~65ch measure on desktop with a wide left margin). Real prose about capital, ambition, a good idea dissolving into a forgettable blur. A pull-quote line in Fraunces italic. No bullets.

3. **The Solved World** (`SolvedWorld.tsx`) — "№ 02 — The Room, Made Unmistakable". Sensory prose walking the reader through invite → arrival → signage → screen → print → lanyard → exit. One-word-per-line vertical list of surfaces on the left rail in mono uppercase; body prose on the right. Vermilion used once on a single word.

4. **The Method** (`Method.tsx`) — "№ 03 — The Method: One System, Many Accents". A horizontal row of four named "treatments" (e.g., *The Mark*, *The Voice*, *The Object*, *The Room*). Each is a small editorial card — thin rule top, label in mono, short paragraph — arranged as a 4-up on desktop, stacked on mobile. Near-square, no shadow, no fill; separated by hairlines only.

5. **Proof** (`Proof.tsx`) — "№ 04 — Pedigree". A single quiet line naming Chick-fil-A, Coca-Cola, Trilith, 29029 in tracked small caps separated by en-dashes. Below: one flagship experience as a magazine feature — large image placeholder (`data-lov-image-placeholder`, warm tactile photograph, print-on-paper feel), title, dek, byline-style metadata, one paragraph of prose.

6. **The Offer** (`Offer.tsx`) — "№ 05 — The Sprint". Laid out like a menu / colophon. Two-column meta list (Scope / Shape / Timeline / Investment). Investment line: **$28–40K** in Fraunces display, framed as investment not cost. Below, a short prose paragraph explaining what's included in prose form (not a checklist).

7. **The Invitation** (`Invitation.tsx`) — "№ 06 — A Short Letter". A signed paragraph inviting a fit call. Signature line "— Oleeha & Co." in Fraunces italic. One vermilion-underlined link: *"Write to us →"* → `mailto:` link. No form. Below, small footer metadata (city, year, set in Fraunces + Inter Tight).

## File plan

- `src/routes/__root.tsx` — update head: title "Oleeha & Co. — Experience Design Sprint", real meta description, og:title/og:description/og:type, twitter:card. Add Google Fonts `<link>` for Fraunces + Inter Tight + JetBrains Mono. Mount Lenis provider inside `RootComponent`.
- `src/styles.css` — replace default shadcn palette with paper/ink/taupe/vermilion tokens (oklch equivalents of the hexes) for both `:root` and `.dark` (dark = same, this is a single-mode paper site). Set `--radius: 0.25rem`. Register `--font-display`, `--font-sans`, `--font-mono`.
- `src/routes/index.tsx` — replace placeholder. Compose sections. Update route `head()` only if we want a leaf-level og:image later.
- `src/components/lenis-provider.tsx` — client Lenis init, respects reduced motion.
- `src/components/reveal.tsx` — Framer Motion "set into place" wrapper (spring, stagger by child).
- `src/components/section-heading.tsx` — numeral + title pattern.
- `src/components/sections/*.tsx` — one per narrative beat above.
- `src/assets/flagship.jpg` — generated warm editorial image for the Proof feature (via image placeholder → generate_image step during build).

## Dependencies to add

- `motion` (Motion for React — Framer Motion successor)
- `lenis`

Both work in the TanStack Start / Cloudflare Worker environment (client-only usage, mounted after mount).

## Copy

All copy written in a warm, literate, editorial voice — real sentences, no lorem, no bullets where prose belongs. Silence test applied: reads like a set spread with the sound off.

## Out of scope (this pass)

- Backend, forms, auth, analytics
- Multiple routes (single page by design)
- Dark mode toggle (paper site — light only)
- CMS / dynamic content
