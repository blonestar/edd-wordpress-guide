import { officialLinks } from "./shared";
import type { GuideCopy } from "./types";

export const en = {
  locale: "en",
  htmlLang: "en",
  languageName: "English",
  shortLanguageName: "EN",
  meta: {
    title: "Eval-Driven Development for AI-Assisted WordPress Themes",
    description:
      "A practical guide to building reliable evals for AI-assisted custom WordPress theme development.",
  },
  skipLink: "Skip navigation",
  brand: {
    name: "EDD for WordPress",
    subtitle: "A practical guide",
    homeLabel: "EDD for WordPress — home",
  },
  nav: {
    label: "Main navigation",
    basics: "Basics",
    tools: "Tools",
    architecture: "Architecture",
    start: "Start",
    checklist: "Checklist",
  },
  languageMenu: {
    label: "Language",
    current: "English",
  },
  hero: {
    eyebrow: "A beginner-friendly guide · 2026",
    titleLine1: "AI writes the code.",
    titleLine2: "Evals prove that it works.",
    lede:
      "How to introduce Eval-Driven Development into custom WordPress theme development—without building a new framework, without using MCP where it is not needed, and without relying on “it seems fine.”",
    primaryCta: "See the recommended architecture",
    secondaryCta: "Open the examples",
    notePrefix: "One-sentence recommendation:",
    noteStrong: "keep tests with the project",
    noteSuffix:
      ", use one local eval command, and add Promptfoo only when comparing agents.",
    visualLabel: "Eval-Driven Development process flow",
    flowCards: [
      { number: "01", title: "Task", text: "clear intent" },
      { number: "02", title: "AI agent", text: "changes the theme" },
      { number: "03", title: "Eval harness", text: "runs graders" },
      { number: "04", title: "Evidence", text: "pass / fail + artifacts" },
    ],
    core: "EDD",
    coreText: "measurable\n“done”",
    caption: "Implement → verify → fix → repeat",
  },
  signals: {
    label: "Key principles",
    items: [
      { title: "Deterministic first", text: "the most stable signal" },
      { title: "Evidence for every failure", text: "trace, log, or screenshot" },
      { title: "The agent does not change the criterion", text: "the eval remains independent" },
    ],
  },
  basics: {
    kicker: "01 · Basics",
    title: "What is an eval—without the magic?",
    intro:
      "An eval is a repeatable check that uses a known input to measure whether a system achieved a predefined outcome. In AI-assisted development, it measures the agent’s result—not how convincing its answer sounds.",
    cards: [
      {
        letter: "A",
        title: "Input",
        text: "The task, the starting repository, fixture data, the viewport, and every permitted tool.",
      },
      {
        letter: "B",
        title: "Expectation",
        text: "A concrete criterion: the menu closes on Escape, there are no PHP errors, and there is no overflow.",
      },
      {
        letter: "C",
        title: "Grader",
        text: "The simplest reliable way to measure it: an assertion, linter, browser test, or narrow rubric.",
      },
      {
        letter: "D",
        title: "Evidence",
        text: "Pass/fail status, the actual value, a log, trace, screenshot, and environment versions.",
      },
    ],
    loopLabel: "EDD loop from criterion to fix",
    loop: [
      { number: "1", text: "Define “done”" },
      { number: "2", text: "Run the baseline" },
      { number: "3", text: "AI implements" },
      { number: "4", text: "Eval measures" },
      { number: "5", text: "Fix the root cause" },
    ],
  },
  graders: {
    kicker: "Selection rule",
    title: "The cheapest grader that can reliably see the failure",
    intro:
      "LLM-as-a-judge is useful, but it should not solve a problem that a DOM check, parser, exit code, or browser assertion can solve more precisely.",
    deterministic: {
      overline: "First choice",
      title: "Deterministic grader",
      text: "The same state produces the same explainable result. It is fast, inexpensive, and ideal as a CI gate.",
      tagsLabel: "Examples of deterministic checks",
      tags: [
        "HTTP 200",
        "exactly one H1",
        "no overflow",
        "PHPCS exit 0",
        "Escape closes the menu",
        "pixel-diff threshold",
      ],
      exampleLabel: "Example",
      example: "scrollWidth > clientWidth → FAIL",
    },
    model: {
      overline: "Only when needed",
      title: "Model grader",
      text: "For nuances that cannot reasonably be reduced to a rule. The rubric must be narrow, anchored to a reference, and calibrated beforehand.",
      tagsLabel: "Examples of model-based evaluations",
      tags: [
        "fidelity to Figma",
        "visual hierarchy",
        "clarity of the editor UX",
        "architectural assessment",
      ],
      exampleLabel: "A good rubric",
      example: "Score only spacing and alignment from 0 to 5.",
    },
    ladderLabel: "Grader selection order",
    ladder: ["assertion", "existing tool", "custom script", "model rubric"],
  },
  tools: {
    kicker: "02 · Tools",
    title: "Which tool sees which kind of failure?",
    intro:
      "You do not need one “super evaluator.” Assemble small, specialized graders, and use each only where its signal is reliable.",
    boundaryLabel: "Boundary",
    items: [
      {
        mark: "PW",
        name: "Playwright",
        tone: "mint",
        use: "Critical user flows, responsive behavior, mobile navigation, forms, console errors, and horizontal overflow.",
        notFor:
          "It is not a replacement for unit tests, and it should not be used to test every small detail.",
        link: officialLinks.playwright,
        linkLabel: "Playwright documentation",
      },
      {
        mark: "AX",
        name: "axe-core",
        tone: "violet",
        use: "Automatically detectable accessibility issues: control names, contrast, ARIA, and some WCAG rules.",
        notFor:
          "Automation does not prove that an entire site is accessible; keyboard and screen-reader use also require manual testing.",
        link: officialLinks.axe,
        linkLabel: "axe-core documentation",
      },
      {
        mark: "CS",
        name: "PHPCS + WPCS",
        tone: "amber",
        use: "WordPress coding conventions, escaping warnings, internationalization, and repeatable PHP code checks.",
        notFor: "Passing the standard does not mean the business logic is correct.",
        link: officialLinks.wpcs,
        linkLabel: "WordPress PHP standards",
      },
      {
        mark: "PS",
        name: "PHPStan",
        tone: "blue",
        use: "Static analysis: unknown classes and methods, incorrect types, dead branches, and suspicious calls before runtime.",
        notFor:
          "Dynamic WordPress code needs incremental configuration and suitable stubs or extensions.",
        link: officialLinks.phpstan,
        linkLabel: "PHPStan getting-started guide",
      },
      {
        mark: "LH",
        name: "Lighthouse CI",
        tone: "coral",
        use: "Budgets for performance, resource size, and selected Lighthouse audit results in a controlled environment.",
        notFor: "A single lab result is not the same as real-user Core Web Vitals data.",
        link: officialLinks.lighthouse,
        linkLabel: "Lighthouse CI",
      },
      {
        mark: "VR",
        name: "Visual regression",
        tone: "pink",
        use: "Screenshot comparison of key templates and components to catch unexpected visual changes.",
        notFor:
          "Do not update a baseline merely to make a test pass; a person must review the difference first.",
        link: officialLinks.visual,
        linkLabel: "Playwright visual comparisons",
      },
      {
        mark: "WP",
        name: "WP-CLI fixtures",
        tone: "green",
        use: "Repeatable creation of posts, menus, users, options, and content edge cases before a browser test.",
        notFor:
          "Fixture data is not production content and must not end up in the theme’s production package.",
        link: officialLinks.wpcli,
        linkLabel: "WP-CLI commands",
      },
      {
        mark: "PU",
        name: "PHPUnit / WP test suite",
        tone: "slate",
        use: "Deterministic PHP logic, filters, helpers, and integrations that are faster to verify without a browser.",
        notFor: "It cannot confirm real layout, focus, or browser interaction.",
        link: officialLinks.phpunit,
        linkLabel: "WordPress theme test scaffold",
      },
    ],
  },
  architecture: {
    kicker: "03 · Architecture",
    title: "Start locally. Centralize only what repeats.",
    intro:
      "For the first project, a repo-local harness is enough. A central registry, Promptfoo, and MCP are additional layers—not requirements for evals to work.",
    local: {
      badge: "Required",
      title: "Local execution plane",
      intro: "This is where the code, WordPress, browser, and real runtime evidence live.",
      items: [
        { number: "01", title: "Theme source", text: "AI changes the implementation" },
        { number: "02", title: "Fixture setup", text: "WP-CLI or a small dev-only plugin" },
        {
          number: "03",
          title: "Eval commands",
          text: "PHPCS · PHPStan · Playwright · axe",
        },
        { number: "04", title: "Evidence", text: "JSON · log · trace · screenshot" },
      ],
    },
    bridge: ["versioned bundle", "structured results"],
    central: {
      badge: "Later, when needed",
      title: "Central control plane",
      intro: "This is where shared rules, history, and protected gates live.",
      items: [
        {
          number: "A",
          title: "Shared standards",
          text: "company WPCS · accessibility · performance",
        },
        {
          number: "B",
          title: "Project bundle",
          text: "the exact, pinned eval version",
        },
        {
          number: "C",
          title: "Hidden / release evals",
          text: "edge-case and policy checks",
        },
        {
          number: "D",
          title: "Run history",
          text: "trends · comparisons · decisions",
        },
      ],
    },
    ruleLabel: "Reproducibility:",
    rule:
      "source commit + eval-bundle version + fixture version + runtime version = a repeatable eval run.",
  },
  promptfoo: {
    kicker: "04 · Promptfoo",
    title: "An experimental layer, not a WordPress grader",
    intro:
      "Promptfoo runs a matrix of prompts, providers, and test cases, applies assertions, and compares results. Your WordPress tools still prove that the theme works.",
    flowLabel: "Promptfoo’s role in the eval system",
    inputs: ["prompt A", "prompt B", "model / agent"],
    coreOverline: "experiment runner",
    coreText: "same tasks · controlled change",
    graders: ["Playwright", "PHPCS", "axe", "custom assertion"],
    resultOverline: "decision",
    resultTitle: "baseline vs candidate",
    resultText: "quality · cost · duration",
    yesLabel: "YES, when…",
    yes: [
      "you compare two prompts on the same tasks;",
      "you measure multiple models or reasoning configurations;",
      "you have 20+ repeatable coding-agent tasks;",
      "you want result history and a result matrix without building your own UI.",
    ],
    noLabel: "NOT YET, when…",
    no: [
      "you are only introducing your first Playwright test;",
      "you are not comparing agents or prompts;",
      "you only need one reliable local command;",
      "the WordPress fixture environment is not stable yet.",
    ],
    cautionLabel: "Sandbox",
    cautionBefore: "Run coding-agent evals in a ",
    cautionStrong: "disposable workspace",
    cautionAfter:
      ", without production credentials or real client data. Promptfoo’s documentation explicitly warns that coding agents execute arbitrary code.",
    cautionLink: "Official guide to coding-agent evals",
  },
  mcp: {
    kicker: "05 · MCP",
    title: "MCP is an access layer, not a test runner",
    intro:
      "MCP standardizes how an AI application discovers and calls tools, reads resources, and uses prompts. It does not prescribe how your Playwright, WordPress, or CI should be implemented.",
    yesTitle: "MCP makes sense for",
    yes: [
      "retrieving the project eval bundle;",
      "reading central standards and known regressions;",
      "submitting structured results and artifact metadata;",
      "comparing previous runs across multiple projects;",
      "authorized access to a central model grader.",
    ],
    noTitle: "MCP is not needed for",
    no: [
      "running `npx playwright test` locally;",
      "PHPCS, PHPStan, and build commands that the agent can already call;",
      "keeping project-specific tests alongside the code;",
      "WP-CLI seeding and reset in a local instance;",
      "the first version of an eval harness.",
    ],
    sourcePrefix: "Read:",
    sourceLink: "official overview of MCP architecture",
  },
  setup: {
    kicker: "06 · Minimal setup",
    title: "With the theme source—but not in the production ZIP",
    intro:
      "The repository is the right boundary. Tests remain tied to the theme commit, while the delivered ZIP contains only runtime files.",
    repoPanelTitle: "Recommended repository layout",
    repoPanelMeta: "project-repo/",
    repoAria: "Example repository structure",
    commandPanelTitle: "One entry point for the agent and CI",
    commandPanelMeta: "package.json",
    commandAria: "Example npm eval commands",
    commandCalloutBefore: "During implementation, the agent runs ",
    commandCalloutMiddle: ", and before completion it runs ",
    commandCalloutAfter: ".",
    examplesLabel: "Example eval configurations",
    examples: {
      playwrightTitle: "Playwright: mobile navigation",
      deterministic: "deterministic",
      playwrightNote:
        "In a real test, prefer a dedicated overflow helper so that the failure message is clearer.",
      lighthouseTitle: "Lighthouse CI: a cautious budget",
      labSignal: "lab signal",
      lighthouseNote:
        "The numbers are an example of a starting policy, not a universal recipe. Calibrate them for the project and separate lab results from field metrics.",
      promptfooTitle: "Promptfoo: an optional experiment",
      later: "later, when needed",
      promptfooNote:
        "This is a skeleton: the custom provider must prepare an isolated copy of the project, run the agent, and return a structured result that the grader can read.",
    },
  },
  phases: {
    kicker: "07 · Implementation phases",
    title: "Six steps, without a “framework project”",
    intro:
      "Each phase leaves behind something useful. If you stop after the third, you already have a valuable local eval system.",
    items: [
      {
        number: "01",
        title: "One real flow",
        text: "Add a Playwright smoke test for the homepage and one critical flow, such as mobile navigation.",
        deliverable: "npm run eval:browser",
      },
      {
        number: "02",
        title: "Fast guardrails",
        text: "Add PHPCS/WPCS, PHPStan, and the existing JS/CSS lint commands. Run this layer frequently.",
        deliverable: "npm run eval:fast",
      },
      {
        number: "03",
        title: "Edge-case content",
        text: "Add WP-CLI fixtures for a long title, empty fields, an unusual image, and a long menu.",
        deliverable: "tests/fixtures/",
      },
      {
        number: "04",
        title: "Accessibility and visual evidence",
        text: "Add axe checks for key interface states and a small number of stable screenshot baselines.",
        deliverable: "npm run eval:full",
      },
      {
        number: "05",
        title: "CI as the gate",
        text: "Run the same commands on every pull request. Keep the screenshot, trace, and log when a test fails.",
        deliverable: "evidence artifacts",
      },
      {
        number: "06",
        title: "Promptfoo only when needed",
        text: "Add an experimental layer only when you are genuinely comparing prompts, models, or agents across multiple repeatable tasks.",
        deliverable: "baseline vs candidate",
      },
    ],
    thresholdLabel: "Threshold for centralization:",
    threshold:
      "extract a shared package only when the same rule or helper recurs across at least several real themes and the differences between projects are clear.",
  },
  pitfalls: {
    kicker: "08 · Pitfalls",
    title: "How an eval system can undermine itself",
    items: [
      {
        title: "The agent changes the test to pass",
        fix: "Treat evals, fixtures, and baselines as protected files. Changing a criterion requires a separate review.",
      },
      {
        title: "Everything is graded by an LLM",
        fix: "Use the cheapest grader that can reliably see the failure. DOM checks, exit codes, and pixel diffs take priority.",
      },
      {
        title: "Only happy-path content",
        fix: "Seed empty fields, long titles, problematic URLs, images with varied aspect ratios, and deeply nested menus.",
      },
      {
        title: "Screenshot tests are unstable",
        fix: "Keep baselines and execution in the same browser/OS environment, and mask only genuinely dynamic elements.",
      },
      {
        title: "Lighthouse score is the only truth",
        fix: "Set concrete budgets, repeat lab measurements, and distinguish them from real-user field data.",
      },
      {
        title: "Central rules change during a run",
        fix: "Pin the eval-bundle version alongside the commit, fixture set, and runtime so that the same run can be reproduced.",
      },
    ],
  },
  checklist: {
    kicker: "Practical starter",
    title: "The first 10 evals for a custom theme",
    intro:
      "Start here. The checklist is intentionally small and focuses on failures AI is most likely to introduce and existing tools can clearly detect.",
    resourcesCta: "Open official resources",
    items: [
      "The theme activates without PHP fatal errors, warnings, or notices.",
      "Homepage, single-post, archive, search, and 404 pages return the expected response.",
      "The mobile navigation works with a keyboard, and Escape returns focus to the trigger.",
      "There is no horizontal overflow at 320, 375, 768, and 1440 px.",
      "Axe reports no agreed blocking violations in key states.",
      "A post without a featured image and with empty optional fields does not break the layout.",
      "A long title and an unbroken URL do not escape the content container.",
      "PHPCS/WPCS and PHPStan pass at the agreed level.",
      "Key templates pass the approved visual-regression baselines.",
      "The full suite retains a clear evidence artifact for every blocking failure.",
    ],
  },
  resources: {
    kicker: "09 · Sources",
    title: "Continue with authoritative documentation",
    intro:
      "These links lead to official documentation and primary projects. Verify tool versions and your project’s requirements before implementation.",
    groups: [
      {
        group: "WordPress",
        links: [
          { label: "Theme testing handbook", href: officialLinks.themeTesting },
          { label: "WordPress Coding Standards", href: officialLinks.wpcs },
          { label: "E2E testing with Playwright", href: officialLinks.wpPlaywright },
        ],
      },
      {
        group: "Browser and quality",
        links: [
          { label: "Playwright tests", href: officialLinks.playwright },
          { label: "axe-core", href: officialLinks.axe },
          { label: "Lighthouse CI", href: officialLinks.lighthouse },
          { label: "Core Web Vitals", href: officialLinks.vitals },
        ],
      },
      {
        group: "AI eval layer",
        links: [
          { label: "Promptfoo configuration", href: officialLinks.promptfooConfig },
          { label: "Promptfoo coding-agent evals", href: officialLinks.promptfooAgents },
          { label: "MCP architecture", href: officialLinks.mcp },
        ],
      },
    ],
  },
  final: {
    kicker: "Final recommendation",
    title: "Do not build an eval framework. Build an evidence path.",
    text: "Local harness + existing graders + fixtures + CI. Add Promptfoo for experiments. Add MCP only when there is a real central service that multiple clients need to use.",
  },
  footer: {
    title: "EDD for AI-assisted WordPress themes",
    text: "Educational guide · the recommendations are intentionally incremental and vendor-neutral.",
    verified: "Sources checked on July 30, 2026",
    backToTop: "Back to top ↑",
  },
} satisfies GuideCopy;
