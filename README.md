# FALLBRO

Bradley Fallon's personal site for software, experiments, writing, and strange useful things.

The site is built with [Astro](https://astro.build), TypeScript, native CSS, and repository-managed Markdown. It is based on the [astro-erudite](https://github.com/jktrn/astro-erudite) template and retains its MIT license.

## Local development

Requirements: Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

The repository includes standalone toy source as Git submodules. When cloning
from scratch, use `git clone --recurse-submodules`, or run
`git submodule update --init --recursive` after a normal clone.

Useful commands:

```sh
npm run build
npm run preview
npm run format
npm run format:check
```

The production build is configured for:

`https://bradleyfallon.github.io/fallbro-site/`

## Content

- Articles live in `src/content/writing`.
- Project narratives live in `src/content/projects`.
- Draft articles appear during local development and are excluded from production.
- Images for an article may be stored next to its Markdown file.
- Standalone toy repositories live as Git submodules under `toys`.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the writing and publication workflow. Open questions about biography, social links, projects, advertising, and the eventual custom domain live in [SITE_CONTENT_QUESTIONS.md](SITE_CONTENT_QUESTIONS.md).

## Toy ads

Toy detail pages use a compact `ToyAd` component. It displays a local FALLBRO house ad unless all three public build variables are present:

```sh
PUBLIC_BSA_ENABLED=true
PUBLIC_BSA_ZONE_ID=your-zone-id
PUBLIC_BSA_SCRIPT_SRC=https://example.com/account-generated-ad-script.js
```

Do not enable live advertising until the BuySellAds account, generated script, privacy requirements, and production authorization have been confirmed.

## Deployment

The GitHub Actions workflow builds and deploys `main` to GitHub Pages. Repository Pages settings should use **GitHub Actions** as the source.
