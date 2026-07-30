import { officialLinks } from "./shared";
import type { GuideCopy } from "./types";

export const ru = {
  locale: "ru",
  htmlLang: "ru",
  languageName: "Русский",
  shortLanguageName: "RU",
  meta: {
    title: "Eval-Driven Development для AI-assisted WordPress-тем",
    description:
      "Практическое руководство по надёжным evals для AI-assisted разработки custom WordPress-тем.",
  },
  skipLink: "Перейти к содержимому",
  brand: {
    name: "EDD для WordPress",
    subtitle: "Практическое руководство",
    homeLabel: "EDD для WordPress — главная",
  },
  nav: {
    label: "Основная навигация",
    basics: "Основы",
    example: "Первый eval",
    tools: "Инструменты",
    promptfoo: "Promptfoo",
    checklist: "Чек-лист",
  },
  languageMenu: { label: "Язык", current: "Русский" },
  hero: {
    eyebrow: "Для WordPress-разработчиков, внедряющих AI-агентов · 2026",
    titleLine1: "AI может изменить вашу тему.",
    titleLine2: "Evals решают, что безопасно оставить.",
    lede: "Практическое введение в Eval-Driven Development для опытных WordPress-разработчиков, которые только начинают работать с AI evals: определите failure, воспроизведите его локально и требуйте от агента pass с независимым evidence.",
    primaryCta: "Посмотреть первый полный eval",
    secondaryCta: "Собрать локальный harness",
    notePrefix: "Рекомендуемая отправная точка:",
    noteStrong: "держите тесты, специфичные для проекта, рядом с темой",
    noteSuffix:
      ", локально создавайте контролируемый WordPress-контент и дайте агенту одну команду, которую он обязан пройти, прежде чем считать работу завершённой.",
    visualLabel: "Схема процесса Eval-Driven Development",
    flowCards: [
      {
        number: "01",
        title: "Запрос на изменение",
        text: "наблюдаемое поведение",
      },
      {
        number: "02",
        title: "AI-агент",
        text: "редактирует изолированную копию",
      },
      {
        number: "03",
        title: "Локальный harness",
        text: "запускает независимые проверки",
      },
      { number: "04", title: "Evidence", text: "pass / fail + причина" },
    ],
    core: "EDD",
    coreText: "измеримое\n«готово»",
    caption: "Определи → реализуй → проверь → исправь → повтори",
  },
  signals: {
    label: "Ключевые принципы",
    items: [
      {
        title: "Сначала детерминированные проверки",
        text: "наиболее стабильный сигнал",
      },
      {
        title: "Evidence для каждого failure",
        text: "trace, log или screenshot",
      },
      { title: "Защищайте критерий", text: "агент не должен менять цель" },
    ],
  },
  basics: {
    kicker: "01 · Основы",
    title: "Что такое eval — без магии?",
    intro:
      "Eval — это воспроизводимая проверка, которая при известном входе измеряет, достигла ли система заранее определённого результата. В AI-assisted разработке он измеряет результат агента, а не то, насколько убедительно звучит его ответ.",
    cards: [
      {
        letter: "A",
        title: "Вход",
        text: "Задача, исходный репозиторий, данные fixture, viewport и все разрешённые инструменты.",
      },
      {
        letter: "B",
        title: "Ожидание",
        text: "Конкретный критерий: меню закрывается по Escape, нет PHP-ошибок и нет overflow.",
      },
      {
        letter: "C",
        title: "Grader",
        text: "Самый простой надёжный способ измерения: assertion, linter, browser-тест или узкая rubric.",
      },
      {
        letter: "D",
        title: "Evidence",
        text: "Статус pass/fail, фактическое значение, log, trace, screenshot и версии окружения.",
      },
    ],
    loopLabel: "Цикл EDD: от критерия до исправления",
    loop: [
      { number: "1", text: "Определи «готово»" },
      { number: "2", text: "Запусти baseline" },
      { number: "3", text: "AI реализует" },
      { number: "4", text: "Eval измеряет" },
      { number: "5", text: "Исправь первопричину" },
    ],
  },
  glossary: {
    kicker: "До добавления новых инструментов",
    title: "Восемь терминов, которые упрощают остальное руководство",
    intro:
      "Код WordPress остаётся знакомым. Эти слова описывают, как изменение от AI измеряется, сравнивается и объясняется.",
    analogyLabel: "Аналогия в WordPress:",
    items: [
      {
        term: "Eval",
        definition:
          "Воспроизводимая проверка определённого результата при известном начальном состоянии.",
        analogy: "acceptance test с явным сценарием и набором evidence.",
      },
      {
        term: "Case",
        definition:
          "Один сценарий в suite: маршрут, fixture, viewport, состояние пользователя и ожидание.",
        analogy:
          "один test method или аккуратно ограниченное воспроизведение для QA.",
      },
      {
        term: "Fixture",
        definition:
          "Контролируемый контент или конфигурация, которые делают failure воспроизводимым.",
        analogy:
          "post, menu, user, option или пустое ACF-состояние, созданные через WP-CLI.",
      },
      {
        term: "Grader",
        definition:
          "Независимый механизм, который определяет pass, fail или ограниченную оценку.",
        analogy:
          "Playwright assertion, exit code PHPCS, правило axe или проверенный diff.",
      },
      {
        term: "Evidence",
        definition:
          "Факт, объясняющий результат: фактическое значение, trace, log, screenshot или отчёт.",
        analogy:
          "artifact, который открывает reviewer, чтобы понять failure в CI.",
      },
      {
        term: "Baseline",
        definition:
          "Известный исходный результат или неизменённая конфигурация для сравнения.",
        analogy: "утверждённый screenshot или текущая комбинация prompt/model.",
      },
      {
        term: "Harness",
        definition:
          "Тонкая обёртка проекта, которая готовит состояние, запускает существующие инструменты и собирает результаты.",
        analogy:
          "npm scripts плюс настройка WP-CLI — не замена самим инструментам.",
      },
      {
        term: "Контролируемый эксперимент",
        definition:
          "Сравнение, где задачи и graders не меняются, а изменяется только одна переменная.",
        analogy:
          "измените prompt или model, но не оба одновременно, прежде чем сравнивать результат.",
      },
    ],
  },
  workedExample: {
    kicker: "Разобранный пример · одно поведение, один путь доказательства",
    title:
      "Превратите «сделайте мобильное меню доступным» в воспроизводимый eval",
    intro:
      "Этот пример охватывает PHP/HTML-вывод, JavaScript-поведение, адаптивный layout и доступность с клавиатуры. WordPress готовит состояние, Playwright выполняет сценарий, а browser создаёт evidence.",
    scenarioLabel: "Задача",
    scenario:
      "Реализовать мобильную навигацию, которая открывается кнопкой, работает с клавиатурой, закрывается по Escape, корректно возвращает фокус и не создаёт горизонтальную прокрутку.",
    steps: [
      {
        number: "A",
        title: "Зафиксируйте вход",
        text: "Используйте homepage, viewport 375 × 812, незалогиненного пользователя и созданное меню с длинной меткой второго уровня.",
        detail: "fixture: mobile-menu-edge-case",
      },
      {
        number: "B",
        title: "Сформулируйте ожидание",
        text: "У кнопки есть доступное имя; меню открывается; Escape его закрывает; фокус возвращается на trigger; не появляется новая console error или overflow.",
        detail: "expected: семь наблюдаемых условий",
      },
      {
        number: "C",
        title: "Выберите grader",
        text: "Используйте сфокусированные Playwright assertions и небольшой DOM helper для overflow. Добавляйте axe после стабилизации самого взаимодействия.",
        detail: "grader: Playwright + DOM assertion",
      },
      {
        number: "D",
        title: "Сохраняйте полезное evidence",
        text: "При failure оставляйте assertion, trace, screenshot, console log, viewport, имя fixture и версии runtime.",
        detail: "evidence: объяснимое, а не только красное",
      },
    ],
    codeTitle: "Сфокусированный browser case",
    codeMeta: "tests/e2e/mobile-navigation.spec.ts",
    codeAria: "Пример Playwright для мобильной навигации",
    firstRunLabel: "BASELINE",
    firstRunTitle: "Известный failure воспроизводится",
    firstRunText:
      "Первый запуск должен упасть на реально сломанном поведении. Если он не видит bug, eval ещё не готов.",
    finalRunLabel: "CANDIDATE",
    finalRunTitle: "Сфокусированный case и полный suite проходят",
    finalRunText:
      "Проверьте реальное browser evidence, затем запустите более широкий suite, прежде чем принять изменение.",
    evidenceLabel: "Сохранять при failure",
    evidence: [
      "значение assertion",
      "Playwright trace",
      "screenshot failure",
      "console log",
      "fixture + viewport",
    ],
    takeawayLabel: "Главная мысль:",
    takeaway:
      "eval — это не только файл Playwright; это контролируемый вход, сформулированное ожидание, независимый grader и evidence вместе.",
  },
  graders: {
    kicker: "Правило выбора",
    title: "Самый дешёвый grader, который надёжно видит failure",
    intro:
      "LLM-as-a-judge полезен, но не должен решать задачу, которую DOM-проверка, parser, exit code или browser assertion решают точнее.",
    deterministic: {
      overline: "Первый выбор",
      title: "Детерминированный grader",
      text: "Одно и то же состояние даёт одинаковый объяснимый результат. Он быстрый, недорогой и идеален как CI gate.",
      tagsLabel: "Примеры детерминированных проверок",
      tags: [
        "HTTP 200",
        "ровно один H1",
        "нет overflow",
        "PHPCS exit 0",
        "Escape закрывает меню",
        "порог pixel diff",
      ],
      exampleLabel: "Пример",
      example: "scrollWidth > clientWidth → FAIL",
    },
    model: {
      overline: "Только когда нужно",
      title: "Модельный grader",
      text: "Для нюансов, которые нельзя разумно свести к правилу. Rubric должна быть узкой, привязанной к референсу и заранее откалиброванной.",
      tagsLabel: "Примеры модельных оценок",
      tags: [
        "соответствие Figma",
        "визуальная иерархия",
        "понятность UX редактора",
        "архитектурная оценка",
      ],
      exampleLabel: "Хорошая rubric",
      example: "Оценивайте только spacing и alignment по шкале от 0 до 5.",
    },
    ladderLabel: "Порядок выбора grader",
    ladder: [
      "assertion",
      "существующий инструмент",
      "custom script",
      "модельная rubric",
    ],
  },
  tools: {
    kicker: "02 · Инструменты",
    title: "Какой инструмент видит какой вид failure?",
    intro:
      "Вам не нужен один «супероценщик». Соберите небольшие специализированные graders и используйте каждый только там, где его сигнал надёжен.",
    boundaryLabel: "Граница",
    items: [
      {
        mark: "PW",
        name: "Playwright",
        tone: "mint",
        use: "Критические пользовательские сценарии, адаптивное поведение, мобильная навигация, формы, console errors и горизонтальный overflow.",
        notFor: "Не заменяет unit tests; не проверяйте им каждую мелочь.",
        link: officialLinks.playwright,
        linkLabel: "Документация Playwright",
      },
      {
        mark: "AX",
        name: "axe-core",
        tone: "violet",
        use: "Автоматически обнаруживаемые проблемы accessibility: имена контролов, контраст, ARIA и часть правил WCAG.",
        notFor:
          "Автоматизация не доказывает доступность всего сайта; нужны также ручные проверки с клавиатурой и screen reader.",
        link: officialLinks.axe,
        linkLabel: "Документация axe-core",
      },
      {
        mark: "CS",
        name: "PHPCS + WPCS",
        tone: "amber",
        use: "Соглашения WordPress по коду, предупреждения об escaping, интернационализация и повторяемые PHP-проверки.",
        notFor:
          "Соответствие стандартам не означает, что бизнес-логика корректна.",
        link: officialLinks.wpcs,
        linkLabel: "Стандарты PHP для WordPress",
      },
      {
        mark: "PS",
        name: "PHPStan",
        tone: "blue",
        use: "Статический анализ: неизвестные классы и методы, неверные типы, мёртвые ветви и подозрительные вызовы до runtime.",
        notFor:
          "Динамический WordPress-код требует поэтапной настройки и подходящих stubs или extensions.",
        link: officialLinks.phpstan,
        linkLabel: "Руководство PHPStan",
      },
      {
        mark: "LH",
        name: "Lighthouse CI",
        tone: "coral",
        use: "Бюджеты производительности, размера ресурсов и выбранных Lighthouse audit результатов в контролируемой среде.",
        notFor:
          "Один lab-результат — не то же самое, что реальные данные Core Web Vitals.",
        link: officialLinks.lighthouse,
        linkLabel: "Lighthouse CI",
      },
      {
        mark: "VR",
        name: "Visual regression",
        tone: "pink",
        use: "Сравнение screenshots ключевых templates и компонентов для поиска неожиданных визуальных изменений.",
        notFor:
          "Не обновляйте baseline только ради pass: различие сначала должен проверить человек.",
        link: officialLinks.visual,
        linkLabel: "Визуальные сравнения Playwright",
      },
      {
        mark: "WP",
        name: "WP-CLI fixtures",
        tone: "green",
        use: "Воспроизводимое создание posts, menus, users, options и content edge cases перед browser test.",
        notFor:
          "Данные fixture — не production content и не должны попасть в production package темы.",
        link: officialLinks.wpcli,
        linkLabel: "Команды WP-CLI",
      },
      {
        mark: "PU",
        name: "PHPUnit / WP test suite",
        tone: "slate",
        use: "Детерминированная PHP-логика, filters, helpers и integrations, которые быстрее проверять без browser.",
        notFor:
          "Не подтверждает реальный layout, focus или browser interaction.",
        link: officialLinks.phpunit,
        linkLabel: "WordPress theme test scaffold",
      },
    ],
  },
  architecture: {
    kicker: "05 · Общая архитектура",
    title: "Начните локально. Централизуйте только то, что повторяется.",
    intro:
      "Для первого проекта достаточно repo-local harness. Центральный registry, Promptfoo и MCP — дополнительные слои, а не условия работы evals.",
    local: {
      badge: "Обязательно",
      title: "Локальный execution plane",
      intro:
        "Здесь находятся код, WordPress, browser и фактическое runtime evidence.",
      items: [
        { number: "01", title: "Theme source", text: "AI изменяет реализацию" },
        {
          number: "02",
          title: "Fixture setup",
          text: "WP-CLI или небольшой dev-only plugin",
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
    bridge: ["версионированный bundle", "структурированные результаты"],
    central: {
      badge: "Позже, при необходимости",
      title: "Центральный control plane",
      intro: "Здесь находятся общие правила, история и защищённые gates.",
      items: [
        {
          number: "A",
          title: "Shared standards",
          text: "company WPCS · accessibility · performance",
        },
        {
          number: "B",
          title: "Project bundle",
          text: "точная зафиксированная версия eval",
        },
        {
          number: "C",
          title: "Hidden / release evals",
          text: "проверки edge case и policy",
        },
        {
          number: "D",
          title: "Run history",
          text: "тренды · сравнения · решения",
        },
      ],
    },
    ruleLabel: "Воспроизводимость:",
    rule: "source commit + версия eval bundle + версия fixture + версия runtime = воспроизводимый eval run.",
  },
  promptfoo: {
    kicker: "06 · Promptfoo",
    title:
      "Promptfoo сравнивает AI-конфигурации. Инструменты WordPress доказывают результат.",
    intro:
      "Promptfoo — open-source CLI и eval framework для запуска заданных комбинаций prompt, provider и tests. Он полезен, когда набор задач стабилен и нужно принять реальное решение о prompt, model, настройке reasoning или runtime агента.",
    flowLabel: "Роль Promptfoo в eval-системе",
    inputs: ["prompt A", "prompt B", "model / agent"],
    coreOverline: "experiment runner",
    coreText: "те же задачи · контролируемое изменение",
    graders: ["Playwright", "PHPCS", "axe", "custom assertion"],
    resultOverline: "решение",
    resultTitle: "baseline vs candidate",
    resultText: "качество · стоимость · длительность",
    facts: [
      {
        title: "Запускает матрицу сравнений",
        text: "Promptfoo объединяет prompts, providers и test cases, применяет assertions и сохраняет сопоставимые результаты.",
      },
      {
        title: "Provider — это адаптер",
        text: "Для coding agent provider или custom wrapper запускает изолированный прогон агента и возвращает структурированный output.",
      },
      {
        title: "Ваш harness остаётся судьёй продукта",
        text: "PHPCS, PHPStan, Playwright, axe, fixtures и Lighthouse по-прежнему определяют, работает ли результат WordPress.",
      },
    ],
    quickstartTitle: "Запустите официальный пример локально",
    quickstartIntro:
      "Пример создаёт promptfooconfig.yaml, запускает матрицу prompt/provider/test и открывает локальный viewer результатов.",
    quickstartAria: "Команды локального быстрого старта Promptfoo",
    localViewerTitle: "Локальный viewer результатов",
    localViewerText:
      "Запустите `promptfoo view`, чтобы изучать outputs, assertions, failures, сравнения, комментарии и графики на своей машине.",
    cloudTitle: "promptfoo.app",
    cloudText:
      "Облачное приложение необязательно. Используйте его, только если закрытые для организации ссылки на результаты или cloud-функции подходят для данных проекта.",
    gettingStartedLink: "Начало работы",
    viewerLink: "Документация web viewer",
    appLink: "Открыть promptfoo.app",
    githubLink: "Promptfoo на GitHub",
    controlledTitle: "Меняйте одну переменную за раз.",
    controlledText:
      "Сохраняйте задачи, версию fixture, graders и runtime неизменными; меняйте prompt, model, настройку reasoning или runtime агента — но не несколько сразу. Повторяйте показательные недетерминированные cases и сравнивайте стоимость и длительность наряду с pass rate.",
    yesLabel: "ДА, когда…",
    yes: [
      "сравниваете два prompts на одних и тех же задачах;",
      "измеряете несколько models или конфигураций reasoning;",
      "у вас есть 20+ повторяемых задач coding-agent;",
      "нужны история результатов и матрица без создания собственного UI.",
    ],
    noLabel: "ПОКА НЕТ, когда…",
    no: [
      "вы только добавляете первый Playwright test;",
      "не сравниваете agents или prompts;",
      "нужна всего одна надёжная local-команда;",
      "среда WordPress fixture пока нестабильна.",
    ],
    cautionLabel: "Песочница",
    cautionBefore: "Запускайте coding-agent evals в ",
    cautionStrong: "disposable workspace",
    cautionAfter:
      ", без production credentials, реальных клиентских данных и ненужного network access. Coding agents выполняют произвольный код: начинайте с read-only и давайте только те capabilities, которые должен проверить case.",
    cautionLink: "Официальное руководство по coding-agent evals",
  },
  mcp: {
    kicker: "07 · MCP",
    title: "MCP — слой доступа, а не test runner",
    intro:
      "MCP стандартизирует, как AI-приложение обнаруживает и вызывает tools, читает resources и использует prompts. Он не предписывает, как должны быть реализованы Playwright, WordPress или CI.",
    yesTitle: "MCP имеет смысл для",
    yes: [
      "получения project eval bundle;",
      "чтения центральных standards и известных regressions;",
      "отправки структурированных результатов и artifact metadata;",
      "сравнения предыдущих runs из нескольких проектов;",
      "авторизованного доступа к центральному model grader.",
    ],
    noTitle: "MCP не нужен для",
    no: [
      "локального запуска `npx playwright test`;",
      "PHPCS, PHPStan и build commands, которые агент уже может вызвать;",
      "хранения project-specific tests рядом с кодом;",
      "WP-CLI seeding и reset в локальном instance;",
      "первой версии eval harness.",
    ],
    sourcePrefix: "Читайте:",
    sourceLink: "официальный обзор архитектуры MCP",
  },
  setup: {
    kicker: "03 · Минимальный локальный harness",
    title: "Соберите простой локальный harness до любой централизации",
    intro:
      "Держите его в одном репозитории с темой: запускайте известное локальное состояние WordPress, создавайте контролируемый контент, выполняйте существующие инструменты и сохраняйте полезное evidence. Для этого не нужны database, dashboard, общий framework или MCP server.",
    repoPanelTitle: "Рекомендуемая структура репозитория",
    repoPanelMeta: "project-repo/",
    repoAria: "Пример структуры репозитория",
    commandPanelTitle: "Единая точка входа для агента и CI",
    commandPanelMeta: "package.json",
    commandAria: "Пример npm eval-команд",
    commandCalloutBefore: "Во время реализации агент запускает ",
    commandCalloutMiddle: ", а перед завершением — ",
    commandCalloutAfter:
      ". Тесты остаются рядом с source, но ничего из этого не должно попадать в production ZIP темы.",
    examplesLabel: "Примеры конфигураций eval",
    examples: {
      playwrightTitle: "Playwright: мобильная навигация",
      deterministic: "детерминированный",
      playwrightNote:
        "В реальном тесте лучше создать отдельный helper для overflow, чтобы сообщение о failure было понятнее.",
      lighthouseTitle: "Lighthouse CI: осторожный budget",
      labSignal: "lab signal",
      lighthouseNote:
        "Числа — пример начальной политики, а не универсальный рецепт. Откалибруйте их для проекта и отделяйте lab results от field metrics.",
      promptfooTitle: "Promptfoo: необязательный эксперимент",
      later: "позже, при необходимости",
      promptfooNote:
        "Это каркас: custom provider должен подготовить изолированную копию проекта, запустить агента и вернуть структурированный результат, который grader умеет прочитать.",
    },
  },
  phases: {
    kicker: "04 · Последовательность первой недели",
    title: "Семь шагов от одного failure к надёжному циклу обратной связи",
    intro:
      "Не добавляйте всё сразу. Каждый шаг должен оставлять полезное улучшение, которое можно запускать независимо.",
    items: [
      {
        number: "01",
        title: "Выберите один наблюдаемый failure",
        text: "Возьмите критическое взаимодействие, которое можно описать одним предложением: мобильное меню, search form, modal или другое реальное поведение темы.",
        deliverable: "одно предложение acceptance-критерия",
      },
      {
        number: "02",
        title: "Зафиксируйте вход",
        text: "Запишите route, viewport, состояние пользователя и plugins, а также WP-CLI fixture, нужный для воспроизведения.",
        deliverable: "fixture + окружение",
      },
      {
        number: "03",
        title: "Напишите сфокусированный browser case",
        text: "Пусть известное сломанное поведение упадёт на точном assertion и оставит полезный trace или screenshot.",
        deliverable: "npm run eval:browser",
      },
      {
        number: "04",
        title: "Подключите быстрые проверки",
        text: "Объедините существующий linting, PHPCS/WPCS и PHPStan в команду, которую агент может часто запускать.",
        deliverable: "npm run eval:fast",
      },
      {
        number: "05",
        title: "Добавьте один агрессивный content case",
        text: "Повторите flow с длинной меткой, пустым необязательным полем, отсутствующим изображением или неразрывным URL.",
        deliverable: "tests/fixtures/",
      },
      {
        number: "06",
        title: "Пусть CI повторяет тот же run",
        text: "Используйте те же команды в pull request и сохраняйте относящиеся к делу log, screenshot, trace или report.",
        deliverable: "artifacts для review",
      },
      {
        number: "07",
        title: "Promptfoo — только когда понадобится",
        text: "Только после стабилизации набора задач и graders сравнивайте одну переменную: prompt, model, reasoning или agent.",
        deliverable: "baseline vs candidate",
      },
    ],
    thresholdLabel: "Порог централизации:",
    threshold:
      "выделяйте shared package только когда одно правило или helper повторяется хотя бы в нескольких реальных темах и различия между проектами стали ясны.",
  },
  pitfalls: {
    kicker: "09 · Подводные камни",
    title: "Как eval-система может навредить сама себе",
    items: [
      {
        title: "Агент меняет test, чтобы пройти его",
        fix: "Считайте evals, fixtures и baselines защищёнными файлами. Изменение критерия требует отдельного review.",
      },
      {
        title: "Всё оценивается LLM",
        fix: "Используйте самый дешёвый grader, который надёжно видит failure. DOM checks, exit codes и pixel diffs имеют приоритет.",
      },
      {
        title: "Только happy-path content",
        fix: "Создавайте пустые поля, длинные titles, проблемные URLs, изображения с разными aspect ratios и глубоко вложенные menus.",
      },
      {
        title: "Screenshot tests нестабильны",
        fix: "Держите baselines и выполнение в одном browser/OS environment и маскируйте только действительно динамичные элементы.",
      },
      {
        title: "Lighthouse score — единственная истина",
        fix: "Установите конкретные budgets, повторяйте lab measurements и отличайте их от field data реальных пользователей.",
      },
      {
        title: "Центральные правила меняются во время run",
        fix: "Фиксируйте версию eval bundle вместе с commit, fixture set и runtime, чтобы можно было повторить тот же run.",
      },
    ],
  },
  safety: {
    kicker: "08 · Границы безопасности",
    title: "Сохраняйте независимость evaluator и одноразовость тестовой среды",
    intro:
      "Eval полезен, только если начальное состояние контролируется, критерий нельзя незаметно ослабить, а агент с правом записи не может достичь реальных систем клиента.",
    items: [
      {
        title: "Сбрасывайте только изолированный test site",
        text: "Защитите fixture commands проверкой environment. Пересоздавайте disposable database или удаляйте только явно помеченные fixture records — никогда не направляйте reset logic на staging или production.",
      },
      {
        title: "Защищайте критерий",
        text: "В рамках одной implementation task агент не должен менять tests, fixtures, expected outputs, visual baselines, grader configuration или eval commands без отдельного review.",
      },
      {
        title: "Считайте WordPress security отдельным путём доказательства",
        text: "Проверяйте validation и sanitization, nonce и capability checks для изменений, контекстное экранирование через esc_html/esc_attr/esc_url/wp_kses, dependencies и committed secrets.",
      },
      {
        title: "Давайте агенту минимум разрешений",
        text: "Используйте изолированную рабочую копию, dummy credentials, mocked integrations, минимальное environment и отсутствие network access, если eval явно не проверяет эту capability.",
      },
    ],
    limitsTitle: "Чего автоматические evals не доказывают",
    limits: [
      "axe не доказывает полное соответствие WCAG; сценарии с клавиатурой и screen reader всё ещё должен проверять человек.",
      "Lighthouse lab budget — не field data Core Web Vitals реальных пользователей.",
      "PHPCS/WPCS и PHPStan не доказывают business logic, authorization или отрендеренное поведение.",
      "Visual regression требует зафиксированных browser, OS и набора fonts, а также human review намеренных изменений.",
    ],
  },
  checklist: {
    kicker: "Практический старт",
    title: "Десять проверок для полезной первой защиты custom-темы",
    intro:
      "Начните с первых трёх на одном route, затем расширяйте набор, когда fixture и локальная среда станут стабильными. Каждый failure должен называть grader и оставлять evidence, которое разработчик может изучить.",
    resourcesCta: "Открыть официальные ресурсы",
    toolLabel: "Grader:",
    evidenceLabel: "Evidence:",
    items: [
      {
        text: "Тема активируется без согласованных PHP-ошибок.",
        tool: "Активация через WP-CLI плюс проверка PHP error log.",
        evidence: "output команды, фрагмент log, версии WordPress и PHP.",
      },
      {
        text: "Основные templates возвращают и отображают ожидаемый тип страницы.",
        tool: "Playwright navigation smoke tests.",
        evidence: "URL, status, main landmark, screenshot и trace.",
      },
      {
        text: "Мобильная навигация работает с клавиатурой.",
        tool: "Сфокусированный Playwright interaction test.",
        evidence: "assertion, viewport, fixture, trace и screenshot.",
      },
      {
        text: "Поддерживаемые viewports не имеют горизонтального overflow.",
        tool: "Playwright DOM dimensions helper.",
        evidence: "route, viewport, clientWidth, scrollWidth и screenshot.",
      },
      {
        text: "Распространённые автоматически обнаруживаемые accessibility regressions блокируются.",
        tool: "axe внутри соответствующих состояний Playwright.",
        evidence: "ID violation, impact, target selector и состояние browser.",
      },
      {
        text: "Пустой необязательный content не ломает layout.",
        tool: "WP-CLI fixture плюс Playwright.",
        evidence: "имя fixture, route, screenshot и trace.",
      },
      {
        text: "Длинные titles и неразрывные URLs остаются в контейнере.",
        tool: "Агрессивный content fixture плюс overflow assertion.",
        evidence: "payload fixture, viewport, dimensions и screenshot.",
      },
      {
        text: "Статические PHP-проверки проходят с закоммиченной конфигурацией.",
        tool: "PHPCS/WPCS и PHPStan.",
        evidence: "отчёт инструмента, revision config, точные файл и строка.",
      },
      {
        text: "Утверждённые ключевые templates не изменяются неожиданно.",
        tool: "Визуальное сравнение Playwright.",
        evidence: "revision baseline, actual/diff images, версии browser и OS.",
      },
      {
        text: "Полный run оставляет проверяемое evidence для каждого blocker.",
        tool: "Project eval runner или CI job.",
        evidence:
          "source commit, revision fixture, версии runtime и сохранённые artifacts.",
      },
    ],
  },
  resources: {
    kicker: "10 · Источники",
    title: "Продолжите с авторитетной документацией",
    intro:
      "Эти ссылки ведут на официальную документацию и первичные проекты. Проверяйте версии инструментов и требования проекта перед внедрением.",
    groups: [
      {
        group: "WordPress",
        links: [
          { label: "Theme testing handbook", href: officialLinks.themeTesting },
          { label: "WordPress Coding Standards", href: officialLinks.wpcs },
          {
            label: "E2E-тестирование с Playwright",
            href: officialLinks.wpPlaywright,
          },
        ],
      },
      {
        group: "Browser и качество",
        links: [
          { label: "Тесты Playwright", href: officialLinks.playwright },
          { label: "axe-core", href: officialLinks.axe },
          { label: "Lighthouse CI", href: officialLinks.lighthouse },
          { label: "Core Web Vitals", href: officialLinks.vitals },
        ],
      },
      {
        group: "Слой AI eval",
        links: [
          {
            label: "Начало работы с Promptfoo",
            href: officialLinks.promptfooGettingStarted,
          },
          {
            label: "Локальный web viewer Promptfoo",
            href: officialLinks.promptfooViewer,
          },
          {
            label: "Облачное приложение Promptfoo",
            href: officialLinks.promptfooApp,
          },
          {
            label: "Конфигурация Promptfoo",
            href: officialLinks.promptfooConfig,
          },
          {
            label: "Promptfoo evals для coding-agent",
            href: officialLinks.promptfooAgents,
          },
          { label: "Promptfoo на GitHub", href: officialLinks.promptfooGithub },
          { label: "Архитектура MCP", href: officialLinks.mcp },
        ],
      },
    ],
  },
  final: {
    kicker: "Итоговая рекомендация",
    title: "Не создавайте eval framework. Создайте путь доказательства.",
    text: "Локальный harness + существующие graders + fixtures + CI. Добавляйте Promptfoo для экспериментов. Добавляйте MCP только когда появится реальный центральный сервис, которым должны пользоваться несколько клиентов.",
  },
  footer: {
    title: "EDD для AI-assisted WordPress-тем",
    text: "Обучающее руководство · рекомендации намеренно поэтапные и vendor-neutral.",
    verified: "Источники проверены 30 июля 2026 г.",
    backToTop: "Наверх ↑",
  },
} satisfies GuideCopy;
