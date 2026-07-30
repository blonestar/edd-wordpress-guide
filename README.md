# Eval-Driven Development for WordPress

A responsive, beginner-friendly guide to automated evaluation for AI-assisted
custom WordPress theme development.

The site is built with Astro and published as static HTML and CSS. It ships no
client-side JavaScript.

## Languages

- English at `/` (primary)
- Serbian Latin at `/sr-latn/`
- Serbian Cyrillic at `/sr-cyrl/`
- Belarusian at `/be/`
- Russian at `/ru/`

Every version uses the same semantic Astro component and its own typed content
module. The language dropdown is a native HTML disclosure menu, so it works
without JavaScript.

## Search visibility

Every generated page includes:

```html
<meta name="robots" content="noindex">
<meta name="googlebot" content="noindex">
```

`noindex` prevents compliant search engines from listing the pages. It is not
access control: the GitHub Pages site remains public to anyone with its URL.

## What the guide covers

- deterministic graders versus model graders;
- local eval harness architecture;
- Playwright, axe-core, PHPCS/WPCS, PHPStan, Lighthouse CI, visual regression,
  WP-CLI fixtures, and PHPUnit;
- Promptfoo as an optional experiment runner;
- local versus central/shared evals;
- where MCP helps and where it adds unnecessary complexity;
- a minimal repository layout, phased implementation plan, examples, pitfalls,
  and a ten-item starter checklist.

All references link to official documentation or primary projects.

## Run locally

Prerequisite: Node.js `>=22.12.0`.

```bash
npm install
npm run dev
```

Because the production site is a GitHub project page, Astro serves it locally
under:

```text
http://localhost:4321/edd-wordpress-guide/
```

## Validate

```bash
npm test
```

This runs Astro's type/content checks, creates the static production build, and
verifies:

- all five localized pages;
- correct document language and metadata;
- `noindex` on every page;
- base-aware GitHub Pages asset paths;
- all language-switcher destinations;
- zero client-side scripts;
- full-width tinted sections and responsive tool cards.

## Main source files

- `src/components/GuidePage.astro` — shared semantic guide markup
- `src/layouts/BaseLayout.astro` — metadata, `noindex`, and alternate languages
- `src/content/*.ts` — typed copy for all five languages
- `src/styles/global.css` — visual system and responsive layout
- `tests/site-output.test.mjs` — static-output regression checks
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment

The production build is generated in `dist/`.
