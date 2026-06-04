# Tooliva

## Stack

- Framework: Astro v6.4 (static output)
- Styling: Tailwind CSS v4 with custom CSS in `src/styles/globals.css`
- Hosting: Vercel (static)
- Icons/Fonts: Geist Variable, Geist Mono
- Language: TypeScript (strict mode)
- Package manager: npm

## Project structure

- `src/pages/` — Astro routes (file-based routing)
- `src/layouts/` — `MainLayout.astro` (global), `ToolLayout.astro` (tool pages, wraps MainLayout)
- `src/components/` — reusable Astro components
- `src/styles/globals.css` — all global + Tailwind styles
- `src/data/tools.ts` — tool definitions array
- `public/` — static assets (favicons, webmanifest)

## Conventions

- Use `MainLayout` for top-level pages, `ToolLayout` for tool pages
- Tools get their own route under `src/pages/tools/<slug>/index.astro`
- All page scripts use `<script>` (not `is:inline`) for component-based JS
- CSS uses BEM-like naming with `--` separators, defined in globals.css
- Fade-in animations use `.fade-in` class with IntersectionObserver (in MainLayout)
- Tailwind utilities only for simple layout; all other styles in globals.css
- Build before committing: `npm run build`
- Dev server: `npm run dev`

## Design tokens

All tokens live in the `@theme` block in `globals.css`. No inline magic values in components.
