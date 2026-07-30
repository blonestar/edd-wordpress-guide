import { officialLinks } from "./shared";
import type { GuideCopy } from "./types";

export const srCyrl = {
  locale: "sr-cyrl",
  htmlLang: "sr-Cyrl",
  languageName: "Српски (ћирилица)",
  shortLanguageName: "СР Ћир",
  meta: {
    title: "Eval-Driven Development за AI-assisted WordPress теме",
    description:
      "Практичан водич за локалне evale, Playwright, axe, PHPCS, PHPStan, Lighthouse, Promptfoo и MCP у развоју custom WordPress тема.",
  },
  skipLink: "Прескочи навигацију",
  brand: {
    name: "EDD за WordPress",
    subtitle: "Практичан водич",
    homeLabel: "EDD за WordPress — почетак",
  },
  nav: {
    label: "Главна навигација",
    basics: "Основе",
    example: "Први eval",
    tools: "Алати",
    promptfoo: "Promptfoo",
    checklist: "Чеклиста",
  },
  languageMenu: { label: "Изабери језик", current: "Језик" },
  hero: {
    eyebrow: "За WordPress програмере који уводе AI агенте · 2026",
    titleLine1: "AI може да промени тему.",
    titleLine2: "Евали одлучују шта је безбедно задржати.",
    lede: "Практичан увод у Eval-Driven Development за искусне WordPress програмере који су нови у AI evalима: дефиниши квар, понови га локално и тражи од агента независан доказ пре него што прихватиш измену.",
    primaryCta: "Види први комплетан eval",
    secondaryCta: "Направи локални harness",
    notePrefix: "Препоручени почетак:",
    noteStrong: "project-specific тестове држи уз тему",
    noteSuffix:
      ", локално seedуј контролисан WordPress садржај и дај агенту једну команду коју мора да прође пре него што пријави да је завршио.",
    visualLabel: "Ток Eval-Driven Development процеса",
    flowCards: [
      { number: "01", title: "Захтев за измену", text: "видљиво понашање" },
      { number: "02", title: "AI агент", text: "мења изоловану копију" },
      {
        number: "03",
        title: "Локални harness",
        text: "покреће независне провере",
      },
      { number: "04", title: "Доказ", text: "pass / fail + разлог" },
    ],
    core: "EDD",
    coreText: "мерљиво\n„готово“",
    caption: "Дефиниши → имплементирај → провери → поправи → понови",
  },
  signals: {
    label: "Кључни принципи",
    items: [
      { title: "Детерминистички прво", text: "најстабилнији сигнал" },
      { title: "Доказ уз сваки fail", text: "trace, log или screenshot" },
      { title: "Заштити критеријум", text: "агент не помера циљ" },
    ],
  },
  basics: {
    kicker: "01 · Основе",
    title: "Шта је eval — без магије?",
    intro:
      "Eval је поновљива провера која уз познат улаз мери да ли је систем постигао унапред дефинисан исход. Код AI-assisted развоја мери се резултат агента, а не колико његов одговор звучи уверљиво.",
    cards: [
      {
        letter: "A",
        title: "Улаз",
        text: "Task, почетни repo, fixture подаци, viewport и све дозвољене алатке.",
      },
      {
        letter: "B",
        title: "Очекивање",
        text: "Конкретан критеријум: мени се затвара на Escape, нема PHP грешке, нема overflow-а.",
      },
      {
        letter: "C",
        title: "Grader",
        text: "Најједноставнији поуздан начин мерења: assertion, linter, browser test или уска рубрика.",
      },
      {
        letter: "D",
        title: "Evidence",
        text: "Pass/fail, стварна вредност, log, trace, screenshot и верзије окружења.",
      },
    ],
    loopLabel: "EDD петља од критеријума до поправке",
    loop: [
      { number: "1", text: "Дефиниши „готово“" },
      { number: "2", text: "Покрени baseline" },
      { number: "3", text: "AI имплементира" },
      { number: "4", text: "Eval мери" },
      { number: "5", text: "Поправи узрок" },
    ],
  },
  glossary: {
    kicker: "Пре додатних алата",
    title: "Осам појмова који олакшавају остатак водича",
    intro:
      "WordPress код остаје познат. Ово су нови термини који описују како се AI измена мери, пореди и објашњава.",
    analogyLabel: "WordPress аналогија:",
    items: [
      {
        term: "Eval",
        definition:
          "Поновљива провера дефинисаног исхода из познатог почетног стања.",
        analogy: "acceptance test са експлицитним сценаријем и пакетом доказа.",
      },
      {
        term: "Case",
        definition:
          "Један сценарио у suite-у: рута, fixture, viewport, стање корисника и очекивање.",
        analogy: "једна test метода или пажљиво ограничена QA репродукција.",
      },
      {
        term: "Fixture",
        definition:
          "Контролисан садржај или конфигурација која квар чини поновљивим.",
        analogy:
          "WP-CLI seedован post, мени, корисник, опција или празно ACF стање.",
      },
      {
        term: "Grader",
        definition:
          "Независан механизам који одређује pass, fail или ограничен score.",
        analogy:
          "Playwright assertion, PHPCS exit code, axe правило или одобрен diff.",
      },
      {
        term: "Evidence",
        definition:
          "Чињеница која објашњава резултат: вредност, trace, log, screenshot или извештај.",
        analogy: "artifact који reviewer отвара да разуме зашто је CI пао.",
      },
      {
        term: "Baseline",
        definition:
          "Познат почетни резултат или непромењена конфигурација за поређење.",
        analogy: "одобрен screenshot или тренутна prompt/model комбинација.",
      },
      {
        term: "Harness",
        definition:
          "Танак пројектни слој који припрема стање, покреће постојеће алате и прикупља резултате.",
        analogy: "npm scripts плус WP-CLI setup, а не замена за саме алате.",
      },
      {
        term: "Контролисани експеримент",
        definition:
          "Поређење у коме задаци и graderи остају исти док се мења једна променљива.",
        analogy:
          "промени prompt или model, не оба, па тек онда упореди резултат.",
      },
    ],
  },
  workedExample: {
    kicker: "Worked example · једно понашање, један доказни пут",
    title: "Претвори „направи приступачан мобилни мени” у поновљив eval",
    intro:
      "Овај пример повезује PHP/HTML output, JavaScript понашање, responsive layout и keyboard accessibility. WordPress припрема стање, Playwright извршава понашање, а browser даје доказ.",
    scenarioLabel: "Задатак",
    scenario:
      "Имплементирај мобилну навигацију која се отвара преко дугмета, ради тастатуром, затвара на Escape, правилно враћа фокус и не ствара хоризонтални scroll.",
    steps: [
      {
        number: "A",
        title: "Закључај улаз",
        text: "Користи homepage, viewport 375 × 812, одјављеног корисника и seedован мени са дугом ставком другог нивоа.",
        detail: "fixture: mobile-menu-edge-case",
      },
      {
        number: "B",
        title: "Наведи очекивање",
        text: "Дугме има accessible name; мени се отвара; Escape га затвара; фокус се враћа; нема нових console грешака ни overflow-а.",
        detail: "expected: седам видљивих услова",
      },
      {
        number: "C",
        title: "Изабери grader",
        text: "Користи фокусиране Playwright assertions и мали DOM helper за overflow. Axe додај када је сама интеракција стабилна.",
        detail: "grader: Playwright + DOM assertion",
      },
      {
        number: "D",
        title: "Сачувај користан доказ",
        text: "На fail-у сачувај assertion, trace, screenshot, console log, viewport, fixture и верзије runtime-а.",
        detail: "evidence: објашњив, не само црвен",
      },
    ],
    codeTitle: "Фокусирани browser case",
    codeMeta: "tests/e2e/mobile-navigation.spec.ts",
    codeAria: "Playwright пример за мобилну навигацију",
    firstRunLabel: "BASELINE",
    firstRunTitle: "Познат квар је репродукован",
    firstRunText:
      "Први run треба да падне због стварног поквареног понашања. Ако test не види bug, eval још није спреман.",
    finalRunLabel: "CANDIDATE",
    finalRunTitle: "Фокусирани case и full suite пролазе",
    finalRunText:
      "Прегледај стварни browser доказ, па покрени шири suite пре прихватања измене.",
    evidenceLabel: "Сачувај на fail-у",
    evidence: [
      "assertion вредност",
      "Playwright trace",
      "failure screenshot",
      "console log",
      "fixture + viewport",
    ],
    takeawayLabel: "Кључна идеја:",
    takeaway:
      "eval није само Playwright фајл; чине га контролисан улаз, наведено очекивање, независан grader и доказ.",
  },
  graders: {
    kicker: "Правило избора",
    title: "Најјефтинији grader који поуздано види грешку",
    intro:
      "LLM-as-a-judge је користан, али не треба да решава проблем који DOM, parser, exit code или browser assertion решава прецизније.",
    deterministic: {
      overline: "Први избор",
      title: "Детерминистички grader",
      text: "Исто стање даје исти, објашњив резултат. Брз је, јефтин и идеалан као CI капија.",
      tagsLabel: "Примери детерминистичких провера",
      tags: [
        "HTTP 200",
        "тачно један H1",
        "нема overflow-а",
        "PHPCS exit 0",
        "Escape затвара мени",
        "pixel diff праг",
      ],
      exampleLabel: "Пример",
      example: "scrollWidth > clientWidth → FAIL",
    },
    model: {
      overline: "Само када треба",
      title: "Модел grader",
      text: "За нијансе које није разумно свести на правило. Рубрика мора бити уска, референтна и претходно калибрисана.",
      tagsLabel: "Примери моделских процена",
      tags: [
        "верност Figmi",
        "визуелна хијерархија",
        "јасноћа editor UX-а",
        "архитектонска процена",
      ],
      exampleLabel: "Добра рубрика",
      example: "Оцени само spacing и alignment 0–5.",
    },
    ladderLabel: "Редослед избора grader-а",
    ladder: ["assertion", "постојећи алат", "custom скрипта", "модел рубрика"],
  },
  tools: {
    kicker: "02 · Алати",
    title: "Који алат види коју врсту грешке?",
    intro:
      "Не треба ти један „super evaluator“. Сложи мале, специјализоване graderе и сваки користи само тамо где је његов сигнал поуздан.",
    boundaryLabel: "Граница",
    items: [
      {
        mark: "PW",
        name: "Playwright",
        tone: "mint",
        use: "Критични кориснички токови, responsive понашање, мобилни мени, форме, конзолне грешке и хоризонтални overflow.",
        notFor:
          "Није замена за unit тестове и не треба њиме тестирати сваку ситницу.",
        link: officialLinks.playwright,
        linkLabel: "Playwright документација",
      },
      {
        mark: "AX",
        name: "axe-core",
        tone: "violet",
        use: "Аутоматски препознатљиви accessibility проблеми: имена контрола, контраст, ARIA и део WCAG правила.",
        notFor:
          "Аутоматика не доказује да је цео сајт приступачан; тастатура и screen reader траже и ручну проверу.",
        link: officialLinks.axe,
        linkLabel: "axe-core документација",
      },
      {
        mark: "CS",
        name: "PHPCS + WPCS",
        tone: "amber",
        use: "WordPress coding конвенције, escaping упозорења, интернационализација и поновљиве провере PHP кода.",
        notFor: "Пролазак стандарда не значи да је пословна логика исправна.",
        link: officialLinks.wpcs,
        linkLabel: "WordPress PHP стандарди",
      },
      {
        mark: "PS",
        name: "PHPStan",
        tone: "blue",
        use: "Статичка анализа: непознате класе и методе, погрешни типови, мртве гране и сумњиви позиви пре runtime-а.",
        notFor:
          "За динамичан WordPress код треба постепено подешавање и одговарајуће stub-ове или екстензије.",
        link: officialLinks.phpstan,
        linkLabel: "PHPStan почетни водич",
      },
      {
        mark: "LH",
        name: "Lighthouse CI",
        tone: "coral",
        use: "Буџети за перформансе, величину ресурса и одабране Lighthouse audit резултате у контролисаном окружењу.",
        notFor:
          "Један лабораторијски резултат није исто што и стварни Core Web Vitals подаци корисника.",
        link: officialLinks.lighthouse,
        linkLabel: "Lighthouse CI",
      },
      {
        mark: "VR",
        name: "Visual regression",
        tone: "pink",
        use: "Screenshot поређење кључних template-а и компоненти ради хватања неочекиваних визуелних промена.",
        notFor:
          "Baseline се не ажурира само да би test постао зелен; разлику прво мора прегледати човек.",
        link: officialLinks.visual,
        linkLabel: "Playwright visual comparisons",
      },
      {
        mark: "WP",
        name: "WP-CLI fixtures",
        tone: "green",
        use: "Поновљиво креирање post-ова, менија, корисника, опција и садржајних edge case-ова пре browser теста.",
        notFor:
          "Fixture подаци нису продукциони садржај и не треба да заврше у production пакету теме.",
        link: officialLinks.wpcli,
        linkLabel: "WP-CLI команде",
      },
      {
        mark: "PU",
        name: "PHPUnit / WP test suite",
        tone: "slate",
        use: "Детерминистичка PHP логика, филтери, helper-и и интеграције које је брже проверити без browser-а.",
        notFor:
          "Не може потврдити стварни layout, фокус или интеракцију у browser-у.",
        link: officialLinks.phpunit,
        linkLabel: "WordPress theme test scaffold",
      },
    ],
  },
  architecture: {
    kicker: "05 · Заједничка архитектура",
    title: "Почни локално. Централизуј тек оно што се понавља.",
    intro:
      "За први пројекат довољан је repo-local harness. Централни registry, Promptfoo и MCP су додатни слојеви — не услов да evalи раде.",
    local: {
      badge: "Обавезно",
      title: "Локални execution plane",
      intro: "Ту су код, WordPress, browser и стварни runtime доказ.",
      items: [
        { number: "01", title: "Theme source", text: "AI мења имплементацију" },
        {
          number: "02",
          title: "Fixture setup",
          text: "WP-CLI или мали dev-only plugin",
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
    bridge: ["верзионисани bundle", "структурирани резултати"],
    central: {
      badge: "Касније, по потреби",
      title: "Централни control plane",
      intro: "Ту живе заједничка правила, историја и заштићени gate-ови.",
      items: [
        {
          number: "A",
          title: "Shared standards",
          text: "company WPCS · a11y · performance",
        },
        {
          number: "B",
          title: "Project bundle",
          text: "тачна, закључана верзија evalа",
        },
        {
          number: "C",
          title: "Hidden / release evals",
          text: "edge case и policy провере",
        },
        {
          number: "D",
          title: "Run history",
          text: "трендови · поређења · одлуке",
        },
      ],
    },
    ruleLabel: "Репродуктивност:",
    rule: "source commit + eval bundle верзија + fixture верзија + runtime верзија = поновљив eval run.",
  },
  promptfoo: {
    kicker: "06 · Promptfoo",
    title:
      "Promptfoo пореди AI конфигурације. WordPress алати доказују резултат.",
    intro:
      "Promptfoo је open-source CLI и eval framework за покретање конфигурисаних комбинација prompt-ова, provider-а и test случајева. Постаје користан када имаш стабилан скуп задатака и стварну одлуку о prompt-у, моделу, reasoning нивоу или agent runtime-у.",
    flowLabel: "Улога Promptfoo-а у eval систему",
    inputs: ["prompt A", "prompt B", "model / agent"],
    coreOverline: "experiment runner",
    coreText: "исти задаци · контролисана промена",
    graders: ["Playwright", "PHPCS", "axe", "custom assertion"],
    resultOverline: "одлука",
    resultTitle: "baseline vs candidate",
    resultText: "квалитет · цена · трајање",
    facts: [
      {
        title: "Покреће матрицу поређења",
        text: "Promptfoo комбинује prompt-ове, provider-е и test случајеве, примењује assertions и чува упоредиве резултате.",
      },
      {
        title: "Provider је adapter",
        text: "За coding агента, provider или custom wrapper покреће изоловани agent run и враћа структуриран output.",
      },
      {
        title: "Твој harness остаје судија производа",
        text: "PHPCS, PHPStan, Playwright, axe, fixtures и Lighthouse и даље одређују да ли WordPress резултат ради.",
      },
    ],
    quickstartTitle: "Пробај званични пример локално",
    quickstartIntro:
      "Пример креира promptfooconfig.yaml, покреће prompt/provider/test матрицу и отвара локални преглед резултата.",
    quickstartAria: "Команде за локални Promptfoo quickstart",
    localViewerTitle: "Локални преглед резултата",
    localViewerText:
      "Покрени `promptfoo view` да на својој машини прегледаш outputs, assertions, failures, поређења, коментаре и графиконе.",
    cloudTitle: "promptfoo.app",
    cloudText:
      "Cloud app је опциона. Користи је само када су organization-private линкови или cloud функције примерени подацима пројекта.",
    gettingStartedLink: "Getting started",
    viewerLink: "Документација за web viewer",
    appLink: "Отвори promptfoo.app",
    githubLink: "Promptfoo на GitHub-у",
    controlledTitle: "Мењај једну променљиву.",
    controlledText:
      "Задржи исте задатке, fixture ревизију, graderе и runtime; промени prompt, model, reasoning или agent runtime, не неколико ствари одједном. Понови репрезентативне недетерминистичке случајеве и пореди цену и трајање уз pass rate.",
    yesLabel: "ДА, када…",
    yes: [
      "поредиш два prompt-а над истим задацима;",
      "мериш више модела или reasoning конфигурација;",
      "имаш 20+ поновљивих coding-agent задатака;",
      "желиш историју и матрицу резултата без свог UI-ја.",
    ],
    noLabel: "НЕ ЈОШ, када…",
    no: [
      "тек уводиш први Playwright тест;",
      "не поредиш агенте или prompt-ове;",
      "треба ти само један поуздан local command;",
      "WordPress fixture окружење још није стабилно.",
    ],
    cautionLabel: "Sandbox",
    cautionBefore: "Coding-agent eval покрећи у",
    cautionStrong: "disposable workspace-у",
    cautionAfter:
      ", без продукционих креденцијала, стварних клијентских података и непотребног приступа мрежи. Coding агенти извршавају произвољан код; почни са read-only правима и додај само могућности које case мора да провери.",
    cautionLink: "Званични водич за coding-agent evalе",
  },
  mcp: {
    kicker: "07 · MCP",
    title: "MCP је приступни слој, не test runner",
    intro:
      "MCP стандардизује како AI апликација открива и позива tools, чита resources и користи prompts. Не говори како твој Playwright, WordPress или CI треба да буду имплементирани.",
    yesTitle: "MCP има смисла за",
    yes: [
      "преузимање пројектног eval bundle-а;",
      "читање централних стандарда и познатих регресија;",
      "слање структурираних резултата и artifacts метаподатака;",
      "поређење претходних run-ова из више пројеката;",
      "ауторизован приступ централном model grader-у.",
    ],
    noTitle: "MCP није потребан за",
    no: [
      "покретање npx playwright test локално;",
      "PHPCS, PHPStan и build команде које агент већ може позвати;",
      "чување project-specific тестова уз код;",
      "WP-CLI seed и reset у локалној инстанци;",
      "прву верзију eval harness-а.",
    ],
    sourcePrefix: "Прочитај:",
    sourceLink: "званични преглед MCP архитектуре",
  },
  setup: {
    kicker: "03 · Минимални локални harness",
    title: "Направи досадан локални harness пре било какве централизације",
    intro:
      "Држи га у истом repou као тему: покрени познато локално WordPress стање, seedуј контролисан садржај, изврши постојеће алате и остави користан доказ. За ово ти не требају база резултата, dashboard, генерички framework ни MCP server.",
    repoPanelTitle: "Препоручени repo layout",
    repoPanelMeta: "project-repo/",
    repoAria: "Пример структуре репозиторијума",
    commandPanelTitle: "Један улаз за агента и CI",
    commandPanelMeta: "package.json",
    commandAria: "Пример npm eval команди",
    commandCalloutBefore: "Агент током рада покреће",
    commandCalloutMiddle: ", а пре завршетка",
    commandCalloutAfter:
      ". Тестови остају уз source, али ништа од овога не улази у production ZIP теме.",
    examplesLabel: "Примери eval конфигурација",
    examples: {
      playwrightTitle: "Playwright: мобилни мени",
      deterministic: "детерминистички",
      playwrightNote:
        "У реалном тесту радије направи посебан helper за overflow како би failure порука била јаснија.",
      lighthouseTitle: "Lighthouse CI: опрезан буџет",
      labSignal: "lab signal",
      lighthouseNote:
        "Бројеви су пример почетне политике, не универзални рецепт. Калибриши их на пројекту и одвоји лабораторијске резултате од field метрике.",
      promptfooTitle: "Promptfoo: опциони експеримент",
      later: "тек касније",
      promptfooNote:
        "Ово је костур: custom provider треба да припреми изоловану копију пројекта, покрене агента и врати структуриран резултат који grader уме да прочита.",
    },
  },
  phases: {
    kicker: "04 · Редослед за прву недељу",
    title: "Седам корака од једног квара до поуздане feedback петље",
    intro:
      "Не додај све одједном. Сваки корак треба да остави корисно побољшање које може независно да се покрене.",
    items: [
      {
        number: "01",
        title: "Изабери један видљив квар",
        text: "Одабери критичну интеракцију коју можеш описати у једној реченици: мобилни мени, search форма, modal или друго стварно понашање теме.",
        deliverable: "један acceptance критеријум",
      },
      {
        number: "02",
        title: "Закључај улаз",
        text: "Запиши руту, viewport, стање корисника и plugina, као и WP-CLI fixture потребан за репродукцију.",
        deliverable: "fixture + окружење",
      },
      {
        number: "03",
        title: "Напиши фокусирани browser case",
        text: "Нека познато покварено понашање падне уз прецизан assertion и користан trace или screenshot.",
        deliverable: "npm run eval:browser",
      },
      {
        number: "04",
        title: "Повежи брзе провере",
        text: "Комбинуј постојећи lint, PHPCS/WPCS и PHPStan у команду коју агент често може да покреће.",
        deliverable: "npm run eval:fast",
      },
      {
        number: "05",
        title: "Додај један проблематичан садржај",
        text: "Понови flow са дугим labelом, празним опционим пољем, сликом која недостаје или непрекинутим URL-ом.",
        deliverable: "tests/fixtures/",
      },
      {
        number: "06",
        title: "Нека CI понови исти run",
        text: "Користи исте команде у pull request окружењу и сачувај релевантан log, screenshot, trace или report.",
        deliverable: "reviewable artifacts",
      },
      {
        number: "07",
        title: "Promptfoo тек кад затреба",
        text: "Тек када су task set и graderи стабилни, пореди једну prompt, model, reasoning или agent променљиву.",
        deliverable: "baseline vs candidate",
      },
    ],
    thresholdLabel: "Праг за централизацију:",
    threshold:
      "издвоји shared пакет тек када се исто правило или helper понови на најмање неколико стварних тема и разлика међу пројектима постане јасна.",
  },
  pitfalls: {
    kicker: "09 · Замке",
    title: "Како eval систем сам себе поквари",
    items: [
      {
        title: "Агент мења test да би прошао",
        fix: "Evale, fixture-е и baseline-е третирај као заштићене фајлове. Промена критеријума захтева засебан review.",
      },
      {
        title: "Све се оцењује LLM-ом",
        fix: "Користи најјефтинији grader који поуздано види грешку. DOM, exit code и pixel diff имају предност.",
      },
      {
        title: "Само happy path садржај",
        fix: "Seedуј празна поља, дугачке наслове, проблематичне URL-ове, слике различитих односа и дубоке меније.",
      },
      {
        title: "Screenshot тестови су нестабилни",
        fix: "Baseline и извршавање држи у истом browser/OS окружењу и маскирај само оправдано динамичне делове.",
      },
      {
        title: "Lighthouse score је једина истина",
        fix: "Постави конкретне буџете, понови лабораторијска мерења и одвоји их од field података стварних корисника.",
      },
      {
        title: "Централна правила се мењају усред run-а",
        fix: "Закључај верзију eval bundle-а уз commit, fixture set и runtime да би исти run могао да се понови.",
      },
    ],
  },
  safety: {
    kicker: "08 · Безбедносне границе",
    title: "Evaluator мора бити независан, а test окружење потрошно",
    intro:
      "Eval вреди само ако му је почетно стање контролисано, критеријум не може тихо да ослаби и агент са правом писања не може да досегне стварне клијентске системе.",
    items: [
      {
        title: "Ресетуј само изолован test сајт",
        text: "Заштити fixture команде провером окружења. Рекреирај disposable базу или бриши само јасно означене fixture записе; reset логика никада не сме да циља staging или продукцију.",
      },
      {
        title: "Заштити критеријум",
        text: "Агент не сме да мења тестове, fixtures, очекиване резултате, visual baselines, grader конфигурацију или eval команде у истом задатку без одвојеног review-а.",
      },
      {
        title: "WordPress security има свој доказни пут",
        text: "Провери validation и sanitization, nonce и capability checks за измене, contextual escaping кроз esc_html/esc_attr/esc_url/wp_kses, dependencies и commitоване тајне.",
      },
      {
        title: "Дај агенту минимална права",
        text: "Користи изоловану радну копију, лажне креденцијале, mock интеграције, минимално окружење и без мреже осим када eval баш проверава ту могућност.",
      },
    ],
    limitsTitle: "Шта аутоматски evalи не доказују",
    limits: [
      "axe не доказује потпуну WCAG усклађеност; keyboard и screen-reader токови и даље траже ручну проверу.",
      "Lighthouse lab буџет није исто што и real-user Core Web Vitals field data.",
      "PHPCS/WPCS и PHPStan не доказују business логику, ауторизацију или рендеровано понашање.",
      "visual regression захтева pinован browser, OS, fontове и људски review намерних измена.",
    ],
  },
  checklist: {
    kicker: "Практичан почетак",
    title: "Десет провера које custom теми дају корисну прву сигурносну мрежу",
    intro:
      "Почни са прве три на једној рути, па прошири када fixture и локално окружење постану стабилни. Сваки fail треба да именује grader и остави доказ који програмер може да прегледа.",
    resourcesCta: "Отвори званичне ресурсе",
    toolLabel: "Grader:",
    evidenceLabel: "Доказ:",
    items: [
      {
        text: "Тема се активира без договорених PHP грешака.",
        tool: "WP-CLI активација плус провера PHP error logа.",
        evidence: "output команде, део logа, WordPress и PHP верзије.",
      },
      {
        text: "Основни template-и враћају и рендерују очекивани тип странице.",
        tool: "Playwright navigation smoke тестови.",
        evidence: "URL, status, главни landmark, screenshot и trace.",
      },
      {
        text: "Мобилна навигација ради тастатуром.",
        tool: "Фокусирани Playwright interaction test.",
        evidence: "assertion, viewport, fixture, trace и screenshot.",
      },
      {
        text: "Подржани viewportи немају хоризонтални overflow.",
        tool: "Playwright DOM dimensions helper.",
        evidence: "рута, viewport, clientWidth, scrollWidth и screenshot.",
      },
      {
        text: "Уобичајене машински детектабилне a11y регресије су блокиране.",
        tool: "axe у одговарајућим Playwright стањима.",
        evidence: "violation ID, impact, target selector и browser стање.",
      },
      {
        text: "Празан опциони садржај не ломи layout.",
        tool: "WP-CLI fixture плус Playwright.",
        evidence: "fixture, рута, screenshot и trace.",
      },
      {
        text: "Дуги наслови и непрекинути URL-ови остају у контејнеру.",
        tool: "Проблематичан fixture плус overflow assertion.",
        evidence: "fixture payload, viewport, димензије и screenshot.",
      },
      {
        text: "Статичке PHP провере пролазе са commitованом конфигурацијом.",
        tool: "PHPCS/WPCS и PHPStan.",
        evidence:
          "извештај алата, ревизија конфигурације, тачан фајл и линија.",
      },
      {
        text: "Одобрени кључни template-и немају неочекиван визуелни drift.",
        tool: "Playwright visual comparison.",
        evidence:
          "baseline ревизија, actual/diff слике, верзије browserа и OS-а.",
      },
      {
        text: "Full run оставља прегледан доказ за сваки blocker.",
        tool: "Пројектни eval runner или CI job.",
        evidence:
          "source commit, fixture ревизија, runtime верзије и сачувани artifacts.",
      },
    ],
  },
  resources: {
    kicker: "10 · Извори",
    title: "Настави са ауторитативним документима",
    intro:
      "Линкови воде ка званичној документацији и примарним пројектима. Провери верзије алата и захтеве свог пројекта пре имплементације.",
    groups: [
      {
        group: "WordPress",
        links: [
          { label: "Theme testing handbook", href: officialLinks.themeTesting },
          { label: "WordPress Coding Standards", href: officialLinks.wpcs },
          {
            label: "E2E тестови са Playwright-ом",
            href: officialLinks.wpPlaywright,
          },
        ],
      },
      {
        group: "Browser и квалитет",
        links: [
          { label: "Playwright тестови", href: officialLinks.playwright },
          { label: "axe-core", href: officialLinks.axe },
          { label: "Lighthouse CI", href: officialLinks.lighthouse },
          { label: "Core Web Vitals", href: officialLinks.vitals },
        ],
      },
      {
        group: "AI eval слој",
        links: [
          {
            label: "Promptfoo getting started",
            href: officialLinks.promptfooGettingStarted,
          },
          {
            label: "Promptfoo локални web viewer",
            href: officialLinks.promptfooViewer,
          },
          { label: "Promptfoo Cloud app", href: officialLinks.promptfooApp },
          {
            label: "Promptfoo конфигурација",
            href: officialLinks.promptfooConfig,
          },
          {
            label: "Promptfoo coding-agent evals",
            href: officialLinks.promptfooAgents,
          },
          {
            label: "Promptfoo на GitHub-у",
            href: officialLinks.promptfooGithub,
          },
          { label: "MCP архитектура", href: officialLinks.mcp },
        ],
      },
    ],
  },
  final: {
    kicker: "Коначна препорука",
    title: "Не прави eval framework. Направи доказни пут.",
    text: "Локални harness + постојећи graderи + fixtures + CI. Promptfoo додај за експерименте. MCP додај тек када постоји стварни централни сервис који више клијената треба да користи.",
  },
  footer: {
    title: "EDD за AI-assisted WordPress теме",
    text: "Едукативни водич · препоруке су намерно постепене и vendor-neutral.",
    verified: "Извори проверени 30. јула 2026.",
    backToTop: "Назад на врх ↑",
  },
} satisfies GuideCopy;
