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
    example: "First eval",
    tools: "Tools",
    promptfoo: "Promptfoo",
    checklist: "Checklist",
  },
  languageMenu: {
    label: "Language",
    current: "English",
  },
  hero: {
    eyebrow: "For WordPress developers adopting AI agents · 2026",
    titleLine1: "AI can change your theme.",
    titleLine2: "Evals decide what is safe to keep.",
    lede: "A practical introduction to Eval-Driven Development for experienced WordPress developers who are new to AI evals: define the failure, reproduce it locally, and make the agent earn a passing result with independent evidence.",
    primaryCta: "See the first complete eval",
    secondaryCta: "Build the local harness",
    notePrefix: "Recommended starting point:",
    noteStrong: "keep project-specific tests beside the theme",
    noteSuffix:
      ", seed controlled WordPress content locally, and give the agent one command it must pass before calling work complete.",
    visualLabel: "Eval-Driven Development process flow",
    flowCards: [
      { number: "01", title: "Change request", text: "observable behavior" },
      { number: "02", title: "AI agent", text: "edits an isolated copy" },
      { number: "03", title: "Local harness", text: "runs independent checks" },
      { number: "04", title: "Evidence", text: "pass / fail + reason" },
    ],
    core: "EDD",
    coreText: "measurable\n“done”",
    caption: "Define → implement → verify → repair → repeat",
  },
  signals: {
    label: "Key principles",
    items: [
      { title: "Deterministic first", text: "the most stable signal" },
      {
        title: "Evidence for every failure",
        text: "trace, log, or screenshot",
      },
      {
        title: "Protect the criterion",
        text: "the agent does not move the goalposts",
      },
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
  glossary: {
    kicker: "Before more tooling",
    title: "Eight terms that make the rest of the guide easier",
    intro:
      "The WordPress code is still familiar. These are the new words that describe how an AI change is measured, compared, and explained.",
    analogyLabel: "WordPress analogy:",
    items: [
      {
        term: "Eval",
        definition:
          "A repeatable check of a defined outcome, using a known starting state.",
        analogy:
          "an acceptance test with an explicit scenario and evidence package.",
      },
      {
        term: "Case",
        definition:
          "One scenario in a suite: a route, fixture, viewport, user state, and expectation.",
        analogy: "one test method or one carefully scoped QA reproduction.",
      },
      {
        term: "Fixture",
        definition:
          "Controlled content or configuration that makes a failure reproducible.",
        analogy:
          "a WP-CLI-seeded post, menu, user, option, or empty ACF state.",
      },
      {
        term: "Grader",
        definition:
          "The independent mechanism that decides pass, fail, or a bounded score.",
        analogy:
          "a Playwright assertion, PHPCS exit code, axe rule, or reviewed diff.",
      },
      {
        term: "Evidence",
        definition:
          "The fact that explains a result: an actual value, trace, log, screenshot, or report.",
        analogy: "the artifact a reviewer opens to understand why CI failed.",
      },
      {
        term: "Baseline",
        definition:
          "The known starting result or unchanged configuration used for comparison.",
        analogy: "the approved screenshot or current prompt/model combination.",
      },
      {
        term: "Harness",
        definition:
          "A thin project wrapper that prepares state, runs existing tools, and collects outputs.",
        analogy:
          "npm scripts plus WP-CLI setup—not a replacement for the tools themselves.",
      },
      {
        term: "Controlled experiment",
        definition:
          "A comparison where tasks and graders stay fixed while one variable changes.",
        analogy:
          "change the prompt or model, not both, before comparing the result.",
      },
    ],
  },
  workedExample: {
    kicker: "Worked example · one behavior, one proof path",
    title: "Turn “make the mobile menu accessible” into a repeatable eval",
    intro:
      "This example crosses PHP/HTML output, JavaScript behavior, responsive layout, and keyboard accessibility. WordPress prepares the state, Playwright performs the behavior, and the browser produces evidence.",
    scenarioLabel: "Task",
    scenario:
      "Implement a mobile navigation that opens from its button, works with a keyboard, closes on Escape, returns focus correctly, and creates no horizontal scrolling.",
    steps: [
      {
        number: "A",
        title: "Freeze the input",
        text: "Use the homepage, a 375 × 812 viewport, a logged-out user, and a seeded menu with a long second-level label.",
        detail: "fixture: mobile-menu-edge-case",
      },
      {
        number: "B",
        title: "State the expectation",
        text: "The button has an accessible name; the menu opens; Escape closes it; focus returns to the trigger; no new console error or overflow appears.",
        detail: "expected: seven observable conditions",
      },
      {
        number: "C",
        title: "Choose the grader",
        text: "Use focused Playwright assertions plus a small DOM overflow helper. Add axe after the interaction itself is stable.",
        detail: "grader: Playwright + DOM assertion",
      },
      {
        number: "D",
        title: "Keep useful evidence",
        text: "On failure, retain the assertion, trace, screenshot, console log, viewport, fixture name, and runtime versions.",
        detail: "evidence: explainable, not only red",
      },
    ],
    codeTitle: "Focused browser case",
    codeMeta: "tests/e2e/mobile-navigation.spec.ts",
    codeAria: "Playwright example for mobile navigation",
    firstRunLabel: "BASELINE",
    firstRunTitle: "The known failure is reproduced",
    firstRunText:
      "The first run should fail for the real broken behavior. If it cannot see the bug, the eval is not ready.",
    finalRunLabel: "CANDIDATE",
    finalRunTitle: "The focused case and full suite pass",
    finalRunText:
      "Inspect the actual browser evidence, then run the broader suite before the change is accepted.",
    evidenceLabel: "Retain on failure",
    evidence: [
      "assertion value",
      "Playwright trace",
      "failure screenshot",
      "console log",
      "fixture + viewport",
    ],
    takeawayLabel: "Key idea:",
    takeaway:
      "the eval is not just the Playwright file; it is the controlled input, stated expectation, independent grader, and evidence together.",
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
        notFor:
          "Passing the standard does not mean the business logic is correct.",
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
        notFor:
          "A single lab result is not the same as real-user Core Web Vitals data.",
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
    kicker: "05 · Shared architecture",
    title: "Start locally. Centralize only what repeats.",
    intro:
      "For the first project, a repo-local harness is enough. A central registry, Promptfoo, and MCP are additional layers—not requirements for evals to work.",
    local: {
      badge: "Required",
      title: "Local execution plane",
      intro:
        "This is where the code, WordPress, browser, and real runtime evidence live.",
      items: [
        {
          number: "01",
          title: "Theme source",
          text: "AI changes the implementation",
        },
        {
          number: "02",
          title: "Fixture setup",
          text: "WP-CLI or a small dev-only plugin",
        },
        {
          number: "03",
          title: "Eval commands",
          text: "PHPCS · PHPStan · Playwright · axe",
        },
        {
          number: "04",
          title: "Evidence",
          text: "JSON · log · trace · screenshot",
        },
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
    rule: "source commit + eval-bundle version + fixture version + runtime version = a repeatable eval run.",
  },
  promptfoo: {
    kicker: "06 · Promptfoo",
    title:
      "Promptfoo compares AI configurations. WordPress tools prove the result.",
    intro:
      "Promptfoo is an open-source CLI and eval framework for running configured prompt, provider, and test combinations. It becomes useful when you have a stable task set and a real decision about a prompt, model, reasoning setting, or agent runtime.",
    flowLabel: "Promptfoo’s role in the eval system",
    inputs: ["prompt A", "prompt B", "model / agent"],
    coreOverline: "experiment runner",
    coreText: "same tasks · controlled change",
    graders: ["Playwright", "PHPCS", "axe", "custom assertion"],
    resultOverline: "decision",
    resultTitle: "baseline vs candidate",
    resultText: "quality · cost · duration",
    facts: [
      {
        title: "It runs a comparison matrix",
        text: "Promptfoo combines prompts, providers, and test cases, applies assertions, and records comparable results.",
      },
      {
        title: "A provider is the adapter",
        text: "For a coding agent, a provider or custom wrapper starts the isolated agent run and returns a structured output.",
      },
      {
        title: "Your harness remains the product judge",
        text: "PHPCS, PHPStan, Playwright, axe, fixtures, and Lighthouse still determine whether the WordPress result works.",
      },
    ],
    quickstartTitle: "Try the official example locally",
    quickstartIntro:
      "The example creates a promptfooconfig.yaml, runs the prompt/provider/test matrix, and opens the local result viewer.",
    quickstartAria: "Promptfoo local quickstart commands",
    localViewerTitle: "Local result viewer",
    localViewerText:
      "Run `promptfoo view` to inspect outputs, assertions, failures, comparisons, comments, and charts on your machine.",
    cloudTitle: "promptfoo.app",
    cloudText:
      "The cloud app is optional. Use it only when organization-private shared result links or cloud-backed features are appropriate for the project data.",
    gettingStartedLink: "Getting started",
    viewerLink: "Web viewer documentation",
    appLink: "Open promptfoo.app",
    githubLink: "Promptfoo on GitHub",
    controlledTitle: "Change one variable at a time.",
    controlledText:
      "Keep the tasks, fixture revision, graders, and runtime fixed; change the prompt, model, reasoning setting, or agent runtime—not several at once. Repeat representative non-deterministic cases and compare cost and duration as well as pass rate.",
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
      ", without production credentials, real client data, or unnecessary network access. Coding agents execute arbitrary code; start read-only and grant only the capabilities the case must exercise.",
    cautionLink: "Official guide to coding-agent evals",
  },
  mcp: {
    kicker: "07 · MCP",
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
    kicker: "03 · Minimal local harness",
    title: "Build a boring local harness before centralizing anything",
    intro:
      "Keep it in the same repository as the theme: start a known local WordPress state, seed controlled content, run existing tools, and leave useful evidence. Do not build a database, dashboard, generic framework, or MCP server to reach this point.",
    repoPanelTitle: "Recommended repository layout",
    repoPanelMeta: "project-repo/",
    repoAria: "Example repository structure",
    commandPanelTitle: "One entry point for the agent and CI",
    commandPanelMeta: "package.json",
    commandAria: "Example npm eval commands",
    commandCalloutBefore: "During implementation, the agent runs ",
    commandCalloutMiddle: ", and before completion it runs ",
    commandCalloutAfter:
      ". Tests stay beside the source, but none of this belongs in the production theme ZIP.",
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
    kicker: "04 · First-week sequence",
    title: "Seven steps from one failure to a reliable feedback loop",
    intro:
      "Do not add everything at once. Each step should leave behind a useful, independently runnable improvement.",
    items: [
      {
        number: "01",
        title: "Choose one observable failure",
        text: "Pick a critical interaction you can describe in one sentence: mobile menu, search form, modal, or another real theme behavior.",
        deliverable: "one acceptance sentence",
      },
      {
        number: "02",
        title: "Freeze the input",
        text: "Record the route, viewport, user state, plugin state, and WP-CLI fixture needed to reproduce it.",
        deliverable: "fixture + environment",
      },
      {
        number: "03",
        title: "Write the focused browser case",
        text: "Make the known broken behavior fail with a precise assertion and useful trace or screenshot evidence.",
        deliverable: "npm run eval:browser",
      },
      {
        number: "04",
        title: "Wire the fast checks",
        text: "Combine existing linting, PHPCS/WPCS, and PHPStan in a command the agent can run frequently.",
        deliverable: "npm run eval:fast",
      },
      {
        number: "05",
        title: "Add one hostile content case",
        text: "Re-run the flow with a long label, empty optional field, missing image, or unbroken URL.",
        deliverable: "tests/fixtures/",
      },
      {
        number: "06",
        title: "Make CI repeat the same run",
        text: "Use the same commands in the pull request environment and retain the relevant log, screenshot, trace, or report.",
        deliverable: "reviewable artifacts",
      },
      {
        number: "07",
        title: "Promptfoo only when needed",
        text: "Only after the task set and graders are stable, compare one prompt, model, reasoning, or agent variable.",
        deliverable: "baseline vs candidate",
      },
    ],
    thresholdLabel: "Threshold for centralization:",
    threshold:
      "extract a shared package only when the same rule or helper recurs across at least several real themes and the differences between projects are clear.",
  },
  pitfalls: {
    kicker: "09 · Pitfalls",
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
  safety: {
    kicker: "08 · Safety boundaries",
    title:
      "Keep the evaluator independent—and keep the test environment disposable",
    intro:
      "An eval is useful only when its starting state is controlled, its criterion cannot be silently weakened, and a write-capable agent cannot reach real client systems.",
    items: [
      {
        title: "Reset only an isolated test site",
        text: "Guard fixture commands with an environment check. Recreate a disposable database or delete only clearly tagged fixture records—never point reset logic at staging or production.",
      },
      {
        title: "Protect the criterion",
        text: "The agent must not edit tests, fixtures, expected outputs, visual baselines, grader configuration, or eval commands in the same implementation task without separate review.",
      },
      {
        title: "Treat WordPress security as its own proof path",
        text: "Check validation and sanitization, nonce and capability checks for mutations, contextual escaping with esc_html/esc_attr/esc_url/wp_kses, dependencies, and committed secrets.",
      },
      {
        title: "Grant the minimum agent permissions",
        text: "Use an isolated working copy, dummy credentials, mocked integrations, a minimal environment, and no network access unless the eval explicitly needs to test that capability.",
      },
    ],
    limitsTitle: "What automated evals do not prove",
    limits: [
      "axe does not prove complete WCAG conformance; keyboard and screen-reader journeys still need human testing.",
      "a Lighthouse lab budget is not real-user Core Web Vitals field data.",
      "PHPCS/WPCS and PHPStan do not prove business logic, authorization, or rendered behavior.",
      "visual regression needs a pinned browser, OS, font set, and human review of intentional changes.",
    ],
  },
  checklist: {
    kicker: "Practical starter",
    title: "Ten checks that give a custom theme a useful first safety net",
    intro:
      "Start with the first three on one route, then expand as the fixture and local environment become stable. Every failure should name its grader and leave evidence a developer can inspect.",
    resourcesCta: "Open official resources",
    toolLabel: "Grader:",
    evidenceLabel: "Evidence:",
    items: [
      {
        text: "The theme activates without agreed PHP errors.",
        tool: "WP-CLI activation plus PHP error-log check.",
        evidence: "command output, log excerpt, WordPress and PHP versions.",
      },
      {
        text: "Core templates return and render the expected page type.",
        tool: "Playwright navigation smoke tests.",
        evidence: "URL, status, main landmark, screenshot, and trace.",
      },
      {
        text: "The mobile navigation works with a keyboard.",
        tool: "Focused Playwright interaction test.",
        evidence: "assertion, viewport, fixture, trace, and screenshot.",
      },
      {
        text: "Supported viewports have no horizontal overflow.",
        tool: "Playwright DOM dimensions helper.",
        evidence: "route, viewport, clientWidth, scrollWidth, and screenshot.",
      },
      {
        text: "Common machine-detectable accessibility regressions are blocked.",
        tool: "axe inside the relevant Playwright states.",
        evidence: "violation ID, impact, target selector, and browser state.",
      },
      {
        text: "Empty optional content does not break the layout.",
        tool: "WP-CLI fixture plus Playwright.",
        evidence: "fixture name, route, screenshot, and trace.",
      },
      {
        text: "Long titles and unbroken URLs stay inside their container.",
        tool: "Hostile-content fixture plus overflow assertion.",
        evidence: "fixture payload, viewport, dimensions, and screenshot.",
      },
      {
        text: "Static PHP checks pass at the committed configuration.",
        tool: "PHPCS/WPCS and PHPStan.",
        evidence: "tool report, config revision, exact file and line.",
      },
      {
        text: "Approved key templates do not drift unexpectedly.",
        tool: "Playwright visual comparison.",
        evidence:
          "baseline revision, actual/diff images, browser and OS versions.",
      },
      {
        text: "A full run leaves reviewable evidence for every blocker.",
        tool: "The project eval runner or CI job.",
        evidence:
          "source commit, fixture revision, runtime versions, and retained artifacts.",
      },
    ],
  },
  resources: {
    kicker: "10 · Sources",
    title: "Continue with authoritative documentation",
    intro:
      "These links lead to official documentation and primary projects. Verify tool versions and your project’s requirements before implementation.",
    groups: [
      {
        group: "WordPress",
        links: [
          { label: "Theme testing handbook", href: officialLinks.themeTesting },
          { label: "WordPress Coding Standards", href: officialLinks.wpcs },
          {
            label: "E2E testing with Playwright",
            href: officialLinks.wpPlaywright,
          },
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
          {
            label: "Promptfoo getting started",
            href: officialLinks.promptfooGettingStarted,
          },
          {
            label: "Promptfoo local web viewer",
            href: officialLinks.promptfooViewer,
          },
          { label: "Promptfoo Cloud app", href: officialLinks.promptfooApp },
          {
            label: "Promptfoo configuration",
            href: officialLinks.promptfooConfig,
          },
          {
            label: "Promptfoo coding-agent evals",
            href: officialLinks.promptfooAgents,
          },
          { label: "Promptfoo on GitHub", href: officialLinks.promptfooGithub },
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
