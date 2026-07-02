# Caio Oliveira — Portfolio (v2)

A full rebrand of the personal site: Next.js 14 (App Router) + TypeScript + Tailwind + React Three Fiber, built as a visual, interaction-first experience rather than a résumé rehash.

## What changed in v2

- **Fixed the Moon.** The original `moon.glb` had a 200-unit bounding sphere and a deprecated `KHR_materials_pbrSpecularGlossiness` material that three.js's loader can't parse — that's what rendered as a flat gray square. Converted it to metal/rough PBR and recentered it with `gltf-transform`, and added a runtime auto-fit hook (`lib/useAutoFit.ts`) so any model — regardless of native scale — gets normalized and centered automatically.
- **Real interactivity**, matching the references (logartis.info, wodniack.dev, landonorris.com, musee.barvian.me, getcoleman.com, animejs.com):
  - Lenis smooth scroll on the whole page.
  - A custom cursor that scales up over links/buttons (desktop only).
  - Drag-to-rotate on both 3D models (OrbitControls, autoRotate when idle, no zoom/pan).
  - Magnetic buttons (CTA + email) that pull toward the cursor.
  - Scroll-linked "moon phase" lighting in the hero — the terminator sweeps across the Moon as you scroll.
  - Scroll-triggered reveal animations throughout (`components/Reveal.tsx`).
- **Less résumé, more portfolio.** Experience and Skills were merged into one interactive `Work` section: a role switcher (click a company, the summary and tech icons crossfade in) plus an icon-only Toolbox grid — no more walls of bullet points.
- **New type system.** Dropped the serif (`Fraunces`) for `Space Grotesk` (display) + `Inter` (body) + `IBM Plex Mono` (labels/eyebrows) — a more contemporary, technical feel.
- **Centered, logo-free nav.** A floating pill with just the section links, centered.
- **Fully translated to English.**

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first build fetches Google Fonts (Space Grotesk, Inter, IBM Plex Mono) — internet access is required at that point.

## Production build

```bash
npm run build
npm run start
```

## Deploy

Ready for Vercel (zero-config) or any Next.js 14 host.

## Before publishing

- [ ] Swap `https://caiooliveira.dev` for the final domain in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts`.
- [ ] Double-check the email/LinkedIn/GitHub links in `src/lib/data.ts`.
- [ ] Generate a dedicated Open Graph image (1200×630) if you want something more custom than the GCP badge.
- [ ] Re-read the copy in `src/lib/data.ts` — it was written from your résumé and LinkedIn post, but it's worth your own pass.

## Structure

```
src/
  app/                → layout, page, metadata, sitemap/robots
  components/
    Navbar, Hero, About, Work, Projects, Community, Contact, Footer
    MoonScene.tsx      → hero Moon: auto-fit, drag-to-rotate, scroll-linked light
    ArcherScene.tsx    → community statue: auto-fit, drag-to-rotate
    SmoothScroll.tsx   → Lenis wrapper
    Cursor.tsx         → custom cursor
    Magnetic.tsx       → magnetic-hover wrapper for CTAs
    Reveal.tsx         → scroll-triggered fade-up wrapper
    InView.tsx         → lazy-mounts 3D canvases only when visible
  lib/
    data.ts            → all site copy (experience, projects, toolbox, community)
    icons.tsx          → maps toolbox/stack keys to react-icons
    useAutoFit.ts       → normalizes any GLTF model's scale/position
    useScrollProgressRef.ts
public/
  models/              → moon.glb (422 KB) and elven-archer.glb (767 KB), Draco-compressed
  images/, docs/
```

## Technical notes

- **Performance**: 3D scenes mount only once in the viewport (`InView.tsx`) and load via `next/dynamic({ ssr: false })`. No external HDRI/environment fetches — lighting is fully manual, which also avoids a class of "asset failed to load, canvas renders gray" bugs.
- **Accessibility**: custom cursor and Lenis both respect `prefers-reduced-motion`; focus rings are preserved; all images have alt text.
- **SEO**: full metadata (Open Graph, Twitter Card, JSON-LD Person schema), dynamic `sitemap.ts` / `robots.ts`.

