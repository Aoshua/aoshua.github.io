# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Forsyte Studios — a single-page marketing/support site (Vue 3 + Vite + Tailwind CSS 4) for the studio's published apps. Deployed to GitHub Pages as `aoshua.github.io`.

## Commands

```
npm run dev           # start Vite dev server
npm run build         # type-check (vue-tsc --build) then production build to dist/
npm run build-only    # production build without type-checking
npm run preview       # preview the production build locally
npm run type-check    # vue-tsc --build only
```

There is no test suite and no linter configured in this repo.

## Architecture

- Entry point is [src/main.ts](src/main.ts), which mounts [src/App.vue](src/App.vue) to `#app`.
- `App.vue` is the entire page: full-bleed background image, a frosted-glass card containing logo, product carousel, mission statement, privacy policy text, and a contact mailto link. There is no router and no additional pages — all content lives in this one component plus [src/components/ProductCarousel.vue](src/components/ProductCarousel.vue).
- `ProductCarousel.vue` is a self-contained auto-advancing (7s interval) image carousel with clickable dot navigation; product images live in [public/img/products/](public/img/products/).
- Styling is Tailwind CSS 4 utility classes inline in templates (via the `@tailwindcss/vite` plugin); [src/assets/main.css](src/assets/main.css) only imports Tailwind. `tailwind.config.ts` is empty (Tailwind 4 uses CSS-based config, not a JS config file).
- The `@/*` import alias maps to `src/*` (configured in both [vite.config.ts](vite.config.ts) and [tsconfig.app.json](tsconfig.app.json)).
- The custom `Sansation` font is loaded from Google Fonts in [index.html](index.html) and applied via a scoped `.sansation-regular` class in `App.vue`.
- Brand colors: `#8FDE5D` (light green), `#3CA370` (dark green) — see [README.md](README.md).

## Deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds on every push to `main` (`npm ci && npm run build`) and publishes `dist/` to GitHub Pages. There is no staging environment or preview deploy — pushing to `main` ships to production.
