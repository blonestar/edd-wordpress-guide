import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const base = "/edd-wordpress-guide/";

const pages = [
  {
    path: "index.html",
    lang: "en",
    title: "Eval-Driven Development for AI-Assisted WordPress Themes",
    heading: "AI can change your theme.",
  },
  {
    path: "sr-latn/index.html",
    lang: "sr-Latn",
    title: "Eval-Driven Development za AI-assisted WordPress teme",
    heading: "AI može da promeni temu.",
  },
  {
    path: "sr-cyrl/index.html",
    lang: "sr-Cyrl",
    title: "Eval-Driven Development за AI-assisted WordPress теме",
    heading: "AI може да промени тему.",
  },
  {
    path: "be/index.html",
    lang: "be",
    title: "Eval-Driven Development для WordPress-тэм з дапамогай ШІ",
    heading: "ШІ можа змяніць вашу тэму.",
  },
  {
    path: "ru/index.html",
    lang: "ru",
    title: "Eval-Driven Development для AI-assisted WordPress-тем",
    heading: "AI может изменить вашу тему.",
  },
];

test("build emits five fully localized static pages", async () => {
  for (const page of pages) {
    const html = await readFile(new URL(page.path, dist), "utf8");

    assert.match(html, new RegExp(`<html lang="${page.lang}"`));
    assert.ok(html.includes(`<title>${page.title}</title>`));
    assert.ok(html.includes(page.heading));
    assert.ok(html.includes('<meta name="robots" content="noindex">'));
    assert.ok(html.includes('<meta name="googlebot" content="noindex">'));
    assert.ok(html.includes('hreflang="x-default"'));
    assert.ok(html.includes(`${base}sr-latn/`));
    assert.ok(html.includes(`${base}sr-cyrl/`));
    assert.ok(html.includes(`${base}be/`));
    assert.ok(html.includes(`${base}ru/`));
    assert.ok(html.includes("https://playwright.dev/docs/writing-tests"));
    assert.ok(html.includes("https://www.promptfoo.dev/docs/getting-started/"));
    assert.ok(html.includes("https://www.promptfoo.dev/docs/usage/web-ui/"));
    assert.ok(html.includes("https://promptfoo.app/"));
    assert.ok(
      html.includes("https://modelcontextprotocol.io/docs/learn/architecture"),
    );
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  }
});

test("site remains a zero-client-JavaScript static guide", async () => {
  for (const page of pages) {
    const html = await readFile(new URL(page.path, dist), "utf8");
    assert.doesNotMatch(html, /<script\b/i);
    assert.match(html, /<details class="language-menu">/);
  }
});

test("built stylesheet and favicon exist under the GitHub Pages base path", async () => {
  const html = await readFile(new URL("index.html", dist), "utf8");
  const stylesheet = html.match(
    /<link rel="stylesheet" href="\/edd-wordpress-guide\/([^"]+\.css)">/,
  );

  assert.ok(stylesheet, "Expected a base-aware Astro stylesheet URL");
  await access(new URL(stylesheet[1], dist));
  await access(new URL("favicon.ico", dist));

  const css = await readFile(new URL(stylesheet[1], dist), "utf8");
  assert.match(css, /\.section\{width:100%;max-width:none/);
  assert.match(css, /\.language-menu/);
  assert.match(css, /\.tool-grid\{grid-template-columns:repeat\(3,1fr\)/);
});

test("project no longer depends on Next, Vinext, React, or a custom exporter", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("package.json", root), "utf8"),
  );

  assert.equal(packageJson.dependencies.astro, "7.1.6");
  assert.equal(packageJson.dependencies.next, undefined);
  assert.equal(packageJson.dependencies.react, undefined);
  assert.equal(packageJson.dependencies.vinext, undefined);
  assert.equal(packageJson.scripts["export:static"], undefined);
  await access(
    join(new URL("../", import.meta.url).pathname, "astro.config.mjs"),
  );
});
