# Portfolio Site

[![Open in Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&repo=Muhunami%2FMy-Portfolio&ref=cursor/portfolio-site-design-1fa3&devcontainer_path=.devcontainer%2Fdevcontainer.json)

Structured, achievement-focused personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Run in GitHub Codespaces

1. Click the "Open in Codespaces" badge above.
2. Wait for the container to finish setup (dependencies install automatically).
3. Start the dev server:

```bash
npm run dev
```

## GitHub Pages (static export)

This project uses a static export for GitHub Pages. The deployment workflow is configured
to publish from the `cursor/portfolio-site-design-1fa3` branch.

If you rename the repo or deploy from another branch, update:
- `.github/workflows/deploy.yml` (branch and repo name)
- `NEXT_PUBLIC_BASE_PATH` (e.g. `"/My-Portfolio"`)

## Production build

```bash
npm run build
npm run start
```

## Customization

Update content in `src/data/portfolio.ts` to add achievements, timeline entries, and contact links.
