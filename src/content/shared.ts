export const repoLayout = `wp-content/
├── themes/
│   └── custom-theme/       # production source
└── plugins/
    └── eval-fixtures/      # dev/test only

tests/
├── e2e/                    # Playwright
├── fixtures/               # edge-case data
├── visual/                 # approved baselines
└── php/                    # PHPUnit

evals/
├── prompts/                # optional
├── tasks/                  # optional for Promptfoo
└── artifacts/              # gitignored

package.json
composer.json
playwright.config.ts`;

export const commandConfig = `{
  "scripts": {
    "eval:fast":
      "npm run lint && composer run eval",
    "eval:browser":
      "playwright test",
    "eval:visual":
      "playwright test --grep @visual",
    "eval:full":
      "npm run eval:fast && npm run eval:browser"
  }
}`;

export const playwrightExample = `test('menu closes on Escape', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const trigger = page.getByRole('button', { name: /menu/i });
  await trigger.click();
  await page.keyboard.press('Escape');

  await expect(trigger).toBeFocused();
  await expect(page.locator('html')).toHaveJSProperty(
    'scrollWidth',
    await page.locator('html').evaluate(el => el.clientWidth)
  );
});`;

export const lighthouseExample = `{
  "ci": {
    "collect": { "numberOfRuns": 3 },
    "assert": {
      "assertions": {
        "categories:performance":
          ["warn", { "minScore": 0.85 }],
        "cumulative-layout-shift":
          ["error", { "maxNumericValue": 0.1 }]
      }
    }
  }
}`;

export const promptfooExample = `description: WordPress coding-agent experiment

prompts:
  - file://prompts/baseline.md
  - file://prompts/candidate.md

providers:
  - id: file://evals/run-agent.ts
    label: isolated-agent

tests:
  - vars:
      task: "Implement accessible mobile navigation"
    assert:
      - type: javascript
        value: file://evals/grade-result.js

outputPath: evals/results/latest.json`;

export const officialLinks = {
  playwright: "https://playwright.dev/docs/writing-tests",
  axe: "https://github.com/dequelabs/axe-core",
  wpcs: "https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/",
  phpstan: "https://phpstan.org/user-guide/getting-started",
  lighthouse: "https://github.com/GoogleChrome/lighthouse-ci",
  visual: "https://playwright.dev/docs/test-snapshots",
  wpcli: "https://developer.wordpress.org/cli/commands/",
  phpunit: "https://developer.wordpress.org/cli/commands/scaffold/theme-tests/",
  themeTesting: "https://developer.wordpress.org/themes/advanced-topics/testing/",
  wpPlaywright:
    "https://developer.wordpress.org/news/2026/05/getting-started-writing-wordpress-e2e-tests-with-playwright/",
  vitals: "https://web.dev/articles/vitals",
  promptfooConfig: "https://www.promptfoo.dev/docs/configuration/guide/",
  promptfooAgents: "https://www.promptfoo.dev/docs/guides/evaluate-coding-agents/",
  mcp: "https://modelcontextprotocol.io/docs/learn/architecture",
} as const;
