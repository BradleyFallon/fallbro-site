# FALLBRO content guide

Content is stored in Git as Markdown. There is no CMS or database.

## Writing

Create a Markdown file in `src/content/writing`. Use a directory with an `index.md` file when an article has colocated images.

```yaml
---
title: "Article title"
description: "A short description for lists, search, and link previews."
date: 2026-08-09
updated: 2026-08-10 # optional
tags:
  - example
image: ./cover.png # optional
draft: true
---
```

Drafts appear at `/writing` during `npm run dev`. They are excluded from production routes, RSS, sitemap, tags, and homepage listings. Set `draft: false` only after reviewing the article's title, description, publication date, claims, links, and images.

The initial drafts contain comments and `TODO(BF)` prompts. Remove every AI-draft note and unresolved prompt before publishing.

## Projects

Project narratives live in `src/content/projects`.

```yaml
---
title: "Project title"
summary: "One concise sentence."
status: "prototype" # active, prototype, complete, or paused
featured: true
repository: "https://github.com/example/project" # optional
website: "https://example.com" # optional
startDate: 2026-01-01 # optional
endDate: 2026-06-01 # optional; omit for current work
tags:
  - TypeScript
image: ./project.png # optional
---
```

The body should explain what the project is, why its design matters, its current state, and what was learned. Prefer verifiable descriptions over technology lists.

## Social and profile content

Confirmed public links are defined in `src/consts.ts`. Do not add an unanswered or speculative profile. Use `SITE_CONTENT_QUESTIONS.md` to collect missing information first.

## Toy advertising

`ToyAd.astro` is included only on individual toy pages. Without live network configuration it displays a local house ad. BuySellAds configuration belongs in deployment variables, never in article content or committed secrets.

## Toy source

Standalone toy repositories are included as Git submodules under `toys`. The
8glyph source lives at `toys/8glyph` and its public repository is
`https://github.com/BradleyFallon/8glyph`.

Clone the site with its toy source:

```sh
git clone --recurse-submodules https://github.com/BradleyFallon/fallbro-site.git
```

After a normal clone, initialize or refresh the included repositories with
`git submodule update --init --recursive`.
