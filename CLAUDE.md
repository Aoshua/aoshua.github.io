# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Forsyte Studios — a small marketing/support site (Vue 3 + Vite + Tailwind CSS 4) for the studio's published apps: a marketing home page plus the Territor.io legal pages. Deployed to GitHub Pages as `aoshua.github.io`.

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

- Standard Vue SPA layout: [src/main.ts](src/main.ts) → [src/App.vue](src/App.vue) (just a `<RouterView />`) → views in [src/views/](src/views/), routed by [src/router/index.ts](src/router/index.ts) in history mode. `/` is `HomeView`; `/privacy`, `/terms`, and `/account-deletion` lazy-load their views so `markdown-it` stays out of the home page bundle. Each route also has a trailing-slash alias, matching the emitted static files and the docs' own cross-links.
- **GitHub Pages has no rewrite rules**, so the `staticRoutePages` plugin in [vite.config.ts](vite.config.ts) emits a copy of the built `index.html` at `dist/privacy/index.html`, `dist/terms/index.html`, and `dist/account-deletion/index.html`, each with its own `<title>`/`<meta name="description">`. That is what makes cold loads of those URLs return **200** instead of needing a `404.html` fallback — the app-store listings link straight to them, so keep it that way.
- Adding a page therefore means three edits: an entry in [src/site-pages.ts](src/site-pages.ts) (title + description, read by both the router and the build plugin), a view in [src/views/](src/views/), and a route.
- `HomeView.vue` is the whole home page: hero, app cards, mission, legal links, contact mailto. Its only child component is [src/components/ProductCarousel.vue](src/components/ProductCarousel.vue), a self-contained auto-advancing (7s interval) carousel with dot navigation; product images live in [public/img/products/](public/img/products/).
- The legal views are thin wrappers around [src/components/DocPage.vue](src/components/DocPage.vue), which renders markdown copied from the Runio repo (`docs/guides/`) into [src/content/](src/content/). To update one, recopy the file and strip its leading `<!-- Internal note ... -->` block — nothing else needs editing. [src/lib/markdown.ts](src/lib/markdown.ts) handles GitHub-style heading anchor ids, rewrites `*.md` cross-links to site routes, and wraps tables in a scrollable container. Content is trusted and injected with `v-html`; `DocPage` intercepts clicks on the resulting internal links so they route instead of reloading.
- Styling is Tailwind CSS 4 utility classes inline in templates (via the `@tailwindcss/vite` plugin); [src/assets/main.css](src/assets/main.css) imports Tailwind, loads the typography plugin used by the doc pages, and defines the brand `@theme` tokens. `tailwind.config.ts` is empty and unused (Tailwind 4 uses CSS-based config).
- The `@/*` import alias maps to `src/*` (configured in both [vite.config.ts](vite.config.ts) and [tsconfig.app.json](tsconfig.app.json)).
- The custom `Sansation` font is loaded from Google Fonts in [index.html](index.html) and applied via the `font-display` Tailwind utility.
- Brand colors: `#8FDE5D` (light green), `#3CA370` (dark green) — see [README.md](README.md).

## Deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds on every push to `main` (`npm ci && npm run build`) and publishes `dist/` to GitHub Pages. There is no staging environment or preview deploy — pushing to `main` ships to production.
