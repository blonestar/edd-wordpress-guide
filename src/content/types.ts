export type LocaleCode = "en" | "sr-latn" | "sr-cyrl" | "be" | "ru";

export type Tone =
  | "mint"
  | "violet"
  | "amber"
  | "blue"
  | "coral"
  | "pink"
  | "green"
  | "slate";

export interface ToolCopy {
  mark: string;
  name: string;
  tone: Tone;
  use: string;
  notFor: string;
  link: string;
  linkLabel: string;
}

export interface GuideCopy {
  locale: LocaleCode;
  htmlLang: string;
  languageName: string;
  shortLanguageName: string;
  meta: {
    title: string;
    description: string;
  };
  skipLink: string;
  brand: {
    name: string;
    subtitle: string;
    homeLabel: string;
  };
  nav: {
    label: string;
    basics: string;
    tools: string;
    architecture: string;
    start: string;
    checklist: string;
  };
  languageMenu: {
    label: string;
    current: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    notePrefix: string;
    noteStrong: string;
    noteSuffix: string;
    visualLabel: string;
    flowCards: Array<{ number: string; title: string; text: string }>;
    core: string;
    coreText: string;
    caption: string;
  };
  signals: {
    label: string;
    items: Array<{ title: string; text: string }>;
  };
  basics: {
    kicker: string;
    title: string;
    intro: string;
    cards: Array<{ letter: string; title: string; text: string }>;
    loopLabel: string;
    loop: Array<{ number: string; text: string }>;
  };
  graders: {
    kicker: string;
    title: string;
    intro: string;
    deterministic: {
      overline: string;
      title: string;
      text: string;
      tagsLabel: string;
      tags: string[];
      exampleLabel: string;
      example: string;
    };
    model: {
      overline: string;
      title: string;
      text: string;
      tagsLabel: string;
      tags: string[];
      exampleLabel: string;
      example: string;
    };
    ladderLabel: string;
    ladder: string[];
  };
  tools: {
    kicker: string;
    title: string;
    intro: string;
    boundaryLabel: string;
    items: ToolCopy[];
  };
  architecture: {
    kicker: string;
    title: string;
    intro: string;
    local: {
      badge: string;
      title: string;
      intro: string;
      items: Array<{ number: string; title: string; text: string }>;
    };
    bridge: [string, string];
    central: {
      badge: string;
      title: string;
      intro: string;
      items: Array<{ number: string; title: string; text: string }>;
    };
    ruleLabel: string;
    rule: string;
  };
  promptfoo: {
    kicker: string;
    title: string;
    intro: string;
    flowLabel: string;
    inputs: string[];
    coreOverline: string;
    coreText: string;
    graders: string[];
    resultOverline: string;
    resultTitle: string;
    resultText: string;
    yesLabel: string;
    yes: string[];
    noLabel: string;
    no: string[];
    cautionLabel: string;
    cautionBefore: string;
    cautionStrong: string;
    cautionAfter: string;
    cautionLink: string;
  };
  mcp: {
    kicker: string;
    title: string;
    intro: string;
    yesTitle: string;
    yes: string[];
    noTitle: string;
    no: string[];
    sourcePrefix: string;
    sourceLink: string;
  };
  setup: {
    kicker: string;
    title: string;
    intro: string;
    repoPanelTitle: string;
    repoPanelMeta: string;
    repoAria: string;
    commandPanelTitle: string;
    commandPanelMeta: string;
    commandAria: string;
    commandCalloutBefore: string;
    commandCalloutMiddle: string;
    commandCalloutAfter: string;
    examplesLabel: string;
    examples: {
      playwrightTitle: string;
      deterministic: string;
      playwrightNote: string;
      lighthouseTitle: string;
      labSignal: string;
      lighthouseNote: string;
      promptfooTitle: string;
      later: string;
      promptfooNote: string;
    };
  };
  phases: {
    kicker: string;
    title: string;
    intro: string;
    items: Array<{
      number: string;
      title: string;
      text: string;
      deliverable: string;
    }>;
    thresholdLabel: string;
    threshold: string;
  };
  pitfalls: {
    kicker: string;
    title: string;
    items: Array<{ title: string; fix: string }>;
  };
  checklist: {
    kicker: string;
    title: string;
    intro: string;
    resourcesCta: string;
    items: string[];
  };
  resources: {
    kicker: string;
    title: string;
    intro: string;
    groups: Array<{
      group: string;
      links: Array<{ label: string; href: string }>;
    }>;
  };
  final: {
    kicker: string;
    title: string;
    text: string;
  };
  footer: {
    title: string;
    text: string;
    verified: string;
    backToTop: string;
  };
}
