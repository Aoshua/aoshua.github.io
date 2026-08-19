# Forsyte Studios

A simple single page application (build with vite + vue 3) that serves as a support site for my published applications.

## Notes

### Brand Colors:

- #8FDE5D - light green
- #3CA370 - dark green

## Deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds on every push to `main` (`npm ci && npm run build`) and publishes `dist/` to GitHub Pages. There is no staging environment or preview deploy — pushing to `main` ships to production.
