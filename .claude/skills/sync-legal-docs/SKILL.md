---
name: sync-legal-docs
description: Update / resync the Territor.io legal docs published by this site (Privacy Policy, Terms of Service, Account & Data Deletion) by copying them from the Runio repo's docs/guides into src/content/. Use when asked to update, resync, refresh, or recopy the legal docs.
---

# Sync legal docs from the Runio repo

The legal documents this site publishes are authored in a **different** repo, `Runio`
(the app this site supports), under `docs/guides/`. This skill pulls the current versions
into this repo's `src/content/`, overwriting them in place.

## What to copy

Mapping is **1:1 by identical filename** — filenames never change in the copy:

| Runio source (`docs/guides/`) | This repo (`src/content/`) | Route |
|---|---|---|
| `PrivacyPolicy.md` | `PrivacyPolicy.md` | `/privacy` |
| `TermsOfService.md` | `TermsOfService.md` | `/terms` |
| `AccountAndDataDeletion.md` | `AccountAndDataDeletion.md` | `/account-deletion` |

Only these three content files change. Do **not** touch views, routes, or `src/site-pages.ts`:
views import content by fixed path (e.g. `PrivacyView.vue` → `@/content/PrivacyPolicy.md?raw`),
so overwriting the file is all that's needed.

## Step 1 — Locate the Runio guides directory

Try in order; use the first that exists:

1. `../Runio/docs/guides/` relative to this repo root (both repos live under `.../source/repos/`).
2. Absolute fallback: `C:\Users\64jos\source\repos\Runio\docs\guides`.

If neither exists, **stop** and tell the user the Runio repo wasn't found — don't guess a path.

## Step 2 — For each of the three files

1. Read the Runio source file.
2. **Strip a leading internal-note block if present:** if the file starts with a
   `<!-- Internal note ... -->` HTML comment, remove that comment and any blank lines
   immediately after it, so the file starts at its `#` heading. Strip **only if present** —
   normally there's no such block and this is a no-op.
3. Write the result over the same-named file in `src/content/`.

## Do NOT modify the markdown otherwise

- **Leave cross-doc links as-is.** Links like `PrivacyPolicy.md` are rewritten to site routes
  at render time by `renderMarkdown` in `src/lib/markdown.ts`. Rewriting them here would break
  that. Copy links verbatim.
- Don't reformat, re-wrap, or "clean up" content. This is a byte-for-byte copy minus the
  optional leading internal-note block.

## Step 3 — Report

Summarize per document: whether it changed, and the `Last updated: ...` line from the new
version (show old → new when the date changed). No build or type-check is needed — the
content is imported as a raw string (`?raw`), so markdown edits can't break `vue-tsc`.

## Out of scope: adding a brand-new legal page

This skill only resyncs the three existing docs. Adding a *new* legal page is the three-edit
process in `CLAUDE.md` (an entry in `src/site-pages.ts`, a new view in `src/views/`, and a
route) — do that manually and run `npm run build` afterward.
