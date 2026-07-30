import { officialLinks } from "./shared";
import type { GuideCopy } from "./types";

export const be = {
  locale: "be",
  htmlLang: "be",
  languageName: "Беларуская",
  shortLanguageName: "BE",
  meta: {
    title: "Eval-Driven Development для WordPress-тэм з дапамогай ШІ",
    description:
      "Практычны дапаможнік па надзейных эваль для распрацоўкі ўласных WordPress-тэм з дапамогай ШІ.",
  },
  skipLink: "Прапусціць навігацыю",
  brand: {
    name: "EDD для WordPress",
    subtitle: "Практычны дапаможнік",
    homeLabel: "EDD для WordPress — пачатак",
  },
  nav: {
    label: "Асноўная навігацыя",
    basics: "Асновы",
    example: "Першы эваль",
    tools: "Інструменты",
    promptfoo: "Promptfoo",
    checklist: "Кантрольны спіс",
  },
  languageMenu: { label: "Мова", current: "Беларуская" },
  hero: {
    eyebrow: "Для распрацоўшчыкаў WordPress, якія ўкараняюць ШІ-агентаў · 2026",
    titleLine1: "ШІ можа змяніць вашу тэму.",
    titleLine2: "Эвалы вырашаюць, што бяспечна пакінуць.",
    lede: "Практычнае ўвядзенне ў Eval-Driven Development для дасведчаных распрацоўшчыкаў WordPress, новых у ШІ-эвалях: вызначце памылку, прайграйце яе лакальна і няхай агент заслужыць вынік pass незалежнымі доказамі.",
    primaryCta: "Паглядзець першы поўны эваль",
    secondaryCta: "Стварыць лакальны harness",
    notePrefix: "Рэкамендаваны пачатак:",
    noteStrong: "тэсты, спецыфічныя для праекта, трымайце побач з тэмай",
    noteSuffix:
      ", лакальна стварайце кантраляваны кантэнт WordPress і дайце агенту адну каманду, якую ён мусіць прайсці, перш чым лічыць працу завершанай.",
    visualLabel: "Схема працэсу Eval-Driven Development",
    flowCards: [
      {
        number: "01",
        title: "Запыт на змяненне",
        text: "назіральныя паводзіны",
      },
      { number: "02", title: "ШІ-агент", text: "рэдагуе ізаляваную копію" },
      {
        number: "03",
        title: "Лакальны harness",
        text: "запускае незалежныя праверкі",
      },
      { number: "04", title: "Доказ", text: "pass / fail + прычына" },
    ],
    core: "EDD",
    coreText: "вымернае\n«гатова»",
    caption: "Вызнач → рэалізуй → правер → выпраў → паўтары",
  },
  signals: {
    label: "Ключавыя прынцыпы",
    items: [
      { title: "Спачатку дэтэрміністычнае", text: "найбольш стабільны сігнал" },
      { title: "Доказ для кожнага fail", text: "trace, лог або скрыншот" },
      { title: "Абараняйце крытэрый", text: "агент не змяняе правілы на хаду" },
    ],
  },
  basics: {
    kicker: "01 · Асновы",
    title: "Што такое эваль — без магіі?",
    intro:
      "Эваль — гэта паўтаральная праверка, якая пры вядомым уводзе вымярае, ці дасягнула сістэма загадзя вызначанага выніку. У распрацоўцы з дапамогай ШІ ён вымярае вынік агента, а не тое, наколькі пераканаўча гучыць яго адказ.",
    cards: [
      {
        letter: "A",
        title: "Увод",
        text: "Задача, зыходны рэпазіторый, fixture-даныя, viewport і ўсе дазволеныя інструменты.",
      },
      {
        letter: "B",
        title: "Чаканне",
        text: "Канкрэтны крытэрый: меню закрываецца клавішай Escape, няма памылак PHP і няма overflow.",
      },
      {
        letter: "C",
        title: "Грэйдар",
        text: "Найпрасцейшы надзейны спосаб вымярэння: assertion, лінтар, browser-тэст або вузкая рубрыка.",
      },
      {
        letter: "D",
        title: "Доказ",
        text: "Статус pass/fail, фактычнае значэнне, лог, trace, скрыншот і версіі асяроддзя.",
      },
    ],
    loopLabel: "Цыкл EDD ад крытэрыю да выпраўлення",
    loop: [
      { number: "1", text: "Вызнач «гатова»" },
      { number: "2", text: "Запусці baseline" },
      { number: "3", text: "ШІ рэалізуе" },
      { number: "4", text: "Эваль вымярае" },
      { number: "5", text: "Выпраў першапрычыну" },
    ],
  },
  glossary: {
    kicker: "Перад новымі інструментамі",
    title: "Восем тэрмінаў, якія спросцяць астатні дапаможнік",
    intro:
      "Код WordPress застаецца знаёмым. Гэтыя словы апісваюць, як змена ШІ вымяраецца, параўноўваецца і тлумачыцца.",
    analogyLabel: "Аналогія ў WordPress:",
    items: [
      {
        term: "Эваль",
        definition:
          "Паўтаральная праверка вызначанага выніку з вядомым пачатковым станам.",
        analogy: "acceptance-тэст з яўным сцэнарам і пакетам доказаў.",
      },
      {
        term: "Выпадак",
        definition:
          "Адзін сцэнар у наборы: маршрут, fixture, viewport, стан карыстальніка і чаканне.",
        analogy:
          "адзін метад тэсту або ўважліва абмежаванае прайграванне QA-памылкі.",
      },
      {
        term: "Fixture",
        definition:
          "Кантраляваны кантэнт або канфігурацыя, якая робіць памылку паўтаральнай.",
        analogy:
          "допіс, меню, карыстальнік, опцыя або пусты стан ACF, створаныя WP-CLI.",
      },
      {
        term: "Грэйдар",
        definition:
          "Незалежны механізм, які вызначае pass, fail або абмежаваны бал.",
        analogy:
          "assertion Playwright, exit code PHPCS, правіла axe або прагледжаны diff.",
      },
      {
        term: "Доказ",
        definition:
          "Факт, які тлумачыць вынік: фактычнае значэнне, trace, лог, скрыншот або справаздача.",
        analogy:
          "артэфакт, які рэцэнзент адкрывае, каб зразумець, чаму CI не прайшоў.",
      },
      {
        term: "Baseline",
        definition:
          "Вядомы пачатковы вынік або нязменная канфігурацыя для параўнання.",
        analogy: "ухвалены скрыншот або бягучае спалучэнне prompt/мадэлі.",
      },
      {
        term: "Harness",
        definition:
          "Тонкая абгортка праекта, якая рыхтуе стан, запускае наяўныя інструменты і збірае вынікі.",
        analogy:
          "npm-скрыпты плюс наладка WP-CLI, а не замена саміх інструментаў.",
      },
      {
        term: "Кантраляваны эксперымент",
        definition:
          "Параўнанне, у якім задачы і грэйдары фіксаваныя, а змяняецца адна пераменная.",
        analogy:
          "змяніце prompt або мадэль, але не абодва, перш чым параўноўваць вынік.",
      },
    ],
  },
  workedExample: {
    kicker: "Прапрацаваны прыклад · адны паводзіны, адзін шлях доказу",
    title:
      "Пераўтварыце «зрабіце мабільнае меню даступным» у паўтаральны эваль",
    intro:
      "Гэты прыклад ахоплівае вывад PHP/HTML, паводзіны JavaScript, адаптыўную вёрстку і даступнасць з клавіятуры. WordPress рыхтуе стан, Playwright выконвае паводзіны, а browser стварае доказы.",
    scenarioLabel: "Задача",
    scenario:
      "Рэалізуйце мабільную навігацыю, якая адкрываецца кнопкай, працуе з клавіятуры, закрываецца па Escape, правільна вяртае фокус і не стварае гарызантальнай пракруткі.",
    steps: [
      {
        number: "A",
        title: "Зафіксуйце ўвод",
        text: "Выкарыстайце галоўную старонку, viewport 375 × 812, карыстальніка без уваходу і створанае меню з доўгім ярлыком другога ўзроўню.",
        detail: "fixture: mobile-menu-edge-case",
      },
      {
        number: "B",
        title: "Сфармулюйце чаканне",
        text: "Кнопка мае даступную назву; меню адкрываецца; Escape яго закрывае; фокус вяртаецца на trigger; не з’яўляецца новая памылка кансолі або overflow.",
        detail: "expected: сем назіральных умоў",
      },
      {
        number: "C",
        title: "Выберыце грэйдар",
        text: "Выкарыстайце сфакусаваныя assertions Playwright разам з невялікім DOM-helper для overflow. Дадайце axe пасля таго, як само ўзаемадзеянне стала стабільным.",
        detail: "grader: Playwright + DOM assertion",
      },
      {
        number: "D",
        title: "Захоўвайце карысныя доказы",
        text: "Пры fail пакідайце assertion, trace, скрыншот, лог кансолі, viewport, назву fixture і версіі runtime.",
        detail: "evidence: тлумачальнае, а не проста чырвонае",
      },
    ],
    codeTitle: "Сфакусаваны browser-выпадак",
    codeMeta: "tests/e2e/mobile-navigation.spec.ts",
    codeAria: "Прыклад Playwright для мабільнай навігацыі",
    firstRunLabel: "BASELINE",
    firstRunTitle: "Вядомая памылка прайграная",
    firstRunText:
      "Першы запуск мусіць не прайсці на рэальна зламаных паводзінах. Калі ён не бачыць памылку, эваль яшчэ не гатовы.",
    finalRunLabel: "CANDIDATE",
    finalRunTitle: "Сфакусаваны выпадак і поўны набор праходзяць",
    finalRunText:
      "Прагледзьце фактычныя доказы з browser, а затым запусціце шырэйшы набор перад прыняццем змены.",
    evidenceLabel: "Захаваць пры fail",
    evidence: [
      "значэнне assertion",
      "trace Playwright",
      "скрыншот памылкі",
      "лог кансолі",
      "fixture + viewport",
    ],
    takeawayLabel: "Ключавая ідэя:",
    takeaway:
      "эваль — не толькі файл Playwright; гэта разам кантраляваны ўвод, сфармуляванае чаканне, незалежны грэйдар і доказ.",
  },
  graders: {
    kicker: "Правіла выбару",
    title: "Найтаннейшы грэйдар, які надзейна бачыць памылку",
    intro:
      "LLM-as-a-judge карысны, але не павінен вырашаць задачу, якую DOM-праверка, парсер, exit code або browser assertion вырашае дакладней.",
    deterministic: {
      overline: "Першы выбар",
      title: "Дэтэрміністычны грэйдар",
      text: "Адзін і той самы стан дае аднолькавы, вытлумачальны вынік. Ён хуткі, танны і ідэальны як вароты CI.",
      tagsLabel: "Прыклады дэтэрміністычных праверак",
      tags: [
        "HTTP 200",
        "роўна адзін H1",
        "няма overflow",
        "PHPCS exit 0",
        "Escape закрывае меню",
        "парог pixel diff",
      ],
      exampleLabel: "Прыклад",
      example: "scrollWidth > clientWidth → FAIL",
    },
    model: {
      overline: "Толькі калі трэба",
      title: "Мадэльны грэйдар",
      text: "Для нюансаў, якія немэтазгодна зводзіць да правіла. Рубрыка мусіць быць вузкай, прывязанай да эталона і загадзя адкалібраванай.",
      tagsLabel: "Прыклады мадэльных ацэнак",
      tags: [
        "адпаведнасць Figma",
        "візуальная іерархія",
        "зразумеласць UX рэдактара",
        "архітэктурная ацэнка",
      ],
      exampleLabel: "Добрая рубрыка",
      example: "Ацаніце толькі spacing і alignment ад 0 да 5.",
    },
    ladderLabel: "Парадак выбару грэйдара",
    ladder: [
      "assertion",
      "наяўны інструмент",
      "ўласны скрыпт",
      "мадэльная рубрыка",
    ],
  },
  tools: {
    kicker: "02 · Інструменты",
    title: "Які інструмент бачыць які тып памылкі?",
    intro:
      "Вам не патрэбны адзін «супер-ацэншчык». Складзіце невялікія спецыялізаваныя грэйдары і выкарыстоўвайце кожны толькі там, дзе яго сігнал надзейны.",
    boundaryLabel: "Мяжа",
    items: [
      {
        mark: "PW",
        name: "Playwright",
        tone: "mint",
        use: "Крытычныя карыстальніцкія сцэнары, адаптыўныя паводзіны, мабільная навігацыя, формы, памылкі кансолі і гарызантальны overflow.",
        notFor:
          "Гэта не замена unit-тэстам; не варта тэставаць ім кожную дробязь.",
        link: officialLinks.playwright,
        linkLabel: "Дакументацыя Playwright",
      },
      {
        mark: "AX",
        name: "axe-core",
        tone: "violet",
        use: "Аўтаматычна выяўляльныя праблемы даступнасці: назвы элементаў кіравання, кантраст, ARIA і частка правілаў WCAG.",
        notFor:
          "Аўтаматыка не даказвае, што ўвесь сайт даступны; таксама патрэбнае ручное тэставанне клавіятурай і screen reader.",
        link: officialLinks.axe,
        linkLabel: "Дакументацыя axe-core",
      },
      {
        mark: "CS",
        name: "PHPCS + WPCS",
        tone: "amber",
        use: "Канвенцыі кода WordPress, папярэджанні пра escaping, інтэрнацыяналізацыя і паўтаральныя праверкі PHP-кода.",
        notFor:
          "Праходжанне стандарту не азначае, што бізнес-логіка правільная.",
        link: officialLinks.wpcs,
        linkLabel: "Стандарты WordPress PHP",
      },
      {
        mark: "PS",
        name: "PHPStan",
        tone: "blue",
        use: "Статычны аналіз: невядомыя класы і метады, няправільныя тыпы, мёртвыя галіны і падазроныя выклікі да runtime.",
        notFor:
          "Для дынамічнага кода WordPress патрэбныя паступовая наладка і адпаведныя stubs або пашырэнні.",
        link: officialLinks.phpstan,
        linkLabel: "Пачатковы дапаможнік PHPStan",
      },
      {
        mark: "LH",
        name: "Lighthouse CI",
        tone: "coral",
        use: "Бюджэты для прадукцыйнасці, памеру рэсурсаў і выбраных вынікаў аудыту Lighthouse у кантраляваным асяроддзі.",
        notFor:
          "Адзін лабараторны вынік — не тое самае, што рэальныя даныя Core Web Vitals карыстальнікаў.",
        link: officialLinks.lighthouse,
        linkLabel: "Lighthouse CI",
      },
      {
        mark: "VR",
        name: "Visual regression",
        tone: "pink",
        use: "Параўнанне скрыншотаў ключавых шаблонаў і кампанентаў, якое ловіць нечаканыя візуальныя змены.",
        notFor:
          "Не абнаўляйце baseline толькі дзеля праходжання тэсту; розніцу спачатку павінен прагледзець чалавек.",
        link: officialLinks.visual,
        linkLabel: "Візуальныя параўнанні Playwright",
      },
      {
        mark: "WP",
        name: "WP-CLI fixtures",
        tone: "green",
        use: "Паўтаральнае стварэнне допісаў, меню, карыстальнікаў, опцый і кантэнтных edge case перад browser-тэстам.",
        notFor:
          "Fixture-даныя — не вытворчы кантэнт і не павінны трапіць у production-пакет тэмы.",
        link: officialLinks.wpcli,
        linkLabel: "Каманды WP-CLI",
      },
      {
        mark: "PU",
        name: "PHPUnit / WP test suite",
        tone: "slate",
        use: "Дэтэрміністычная PHP-логіка, фільтры, helpers і інтэграцыі, якія хутчэй праверыць без browser.",
        notFor:
          "Не можа пацвердзіць рэальны layout, фокус або ўзаемадзеянне ў browser.",
        link: officialLinks.phpunit,
        linkLabel: "Шаблон тэстаў тэмы WordPress",
      },
    ],
  },
  architecture: {
    kicker: "05 · Агульная архітэктура",
    title: "Пачынайце лакальна. Цэнтралізуйце толькі тое, што паўтараецца.",
    intro:
      "Для першага праекта дастаткова repo-local harness. Цэнтральны registry, Promptfoo і MCP — дадатковыя слаі, а не ўмова працы эвалоў.",
    local: {
      badge: "Абавязкова",
      title: "Лакальны execution plane",
      intro:
        "Тут знаходзяцца код, WordPress, browser і фактычныя доказы runtime.",
      items: [
        {
          number: "01",
          title: "Зыходны код тэмы",
          text: "ШІ змяняе рэалізацыю",
        },
        {
          number: "02",
          title: "Наладка fixture",
          text: "WP-CLI або невялікі dev-only plugin",
        },
        {
          number: "03",
          title: "Каманды eval",
          text: "PHPCS · PHPStan · Playwright · axe",
        },
        { number: "04", title: "Доказ", text: "JSON · лог · trace · скрыншот" },
      ],
    },
    bridge: ["версійны bundle", "структураваныя вынікі"],
    central: {
      badge: "Пазней, пры неабходнасці",
      title: "Цэнтральны control plane",
      intro: "Тут знаходзяцца агульныя правілы, гісторыя і абароненыя gate-ы.",
      items: [
        {
          number: "A",
          title: "Агульныя стандарты",
          text: "карпаратыўныя WPCS · даступнасць · прадукцыйнасць",
        },
        {
          number: "B",
          title: "Bundle праекта",
          text: "дакладная, зафіксаваная версія эвалоў",
        },
        {
          number: "C",
          title: "Схаваныя / release-эвалы",
          text: "праверкі edge case і policy",
        },
        {
          number: "D",
          title: "Гісторыя запускаў",
          text: "трэнды · параўнанні · рашэнні",
        },
      ],
    },
    ruleLabel: "Узнаўляльнасць:",
    rule: "source commit + версія eval bundle + версія fixture + версія runtime = паўтаральны запуск eval.",
  },
  promptfoo: {
    kicker: "06 · Promptfoo",
    title:
      "Promptfoo параўноўвае канфігурацыі ШІ. Інструменты WordPress даказваюць вынік.",
    intro:
      "Promptfoo — open-source CLI і eval framework для запуску зададзеных камбінацый prompt, provider і тэстаў. Ён становіцца карысным, калі ў вас ёсць стабільны набор задач і рэальнае рашэнне пра prompt, мадэль, настройку reasoning або runtime агента.",
    flowLabel: "Роля Promptfoo ў сістэме eval",
    inputs: ["prompt A", "prompt B", "мадэль / агент"],
    coreOverline: "experiment runner",
    coreText: "аднолькавыя задачы · кантраляваная змена",
    graders: ["Playwright", "PHPCS", "axe", "custom assertion"],
    resultOverline: "рашэнне",
    resultTitle: "baseline vs candidate",
    resultText: "якасць · кошт · працягласць",
    facts: [
      {
        title: "Запускае матрыцу параўнання",
        text: "Promptfoo аб’ядноўвае prompt-ы, provider-ы і тэставыя выпадкі, прымяняе assertions і захоўвае вынікі, якія можна параўноўваць.",
      },
      {
        title: "Provider — гэта адаптар",
        text: "Для coding agent provider або custom wrapper запускае ізаляваны сеанс агента і вяртае структураваны вынік.",
      },
      {
        title: "Ваш harness застаецца суддзёй прадукту",
        text: "PHPCS, PHPStan, Playwright, axe, fixtures і Lighthouse па-ранейшаму вызначаюць, ці працуе вынік WordPress.",
      },
    ],
    quickstartTitle: "Паспрабуйце афіцыйны прыклад лакальна",
    quickstartIntro:
      "Прыклад стварае promptfooconfig.yaml, запускае матрыцу prompt/provider/тэст і адкрывае лакальны праглядальнік вынікаў.",
    quickstartAria: "Каманды лакальнага хуткага старту Promptfoo",
    localViewerTitle: "Лакальны праглядальнік вынікаў",
    localViewerText:
      "Запусціце `promptfoo view`, каб прагледзець на сваёй машыне вынікі, assertions, fail, параўнанні, каментарыі і графікі.",
    cloudTitle: "promptfoo.app",
    cloudText:
      "Хмарнае прыкладанне неабавязковае. Выкарыстоўвайце яго толькі тады, калі для даных праекта дапушчальныя агульныя прыватныя спасылкі на вынікі або хмарныя функцыі.",
    gettingStartedLink: "Пачатак працы",
    viewerLink: "Дакументацыя web-праглядальніка",
    appLink: "Адкрыць promptfoo.app",
    githubLink: "Promptfoo на GitHub",
    controlledTitle: "Мяняйце адну пераменную за раз.",
    controlledText:
      "Захоўвайце задачы, рэвізію fixture, грэйдары і runtime нязменнымі; мяняйце prompt, мадэль, настройку reasoning або runtime агента — не некалькі адразу. Паўтарайце прадстаўнічыя недэтэрміністычныя выпадкі і параўноўвайце кошт і працягласць, а не толькі pass rate.",
    yesLabel: "ТАК, калі…",
    yes: [
      "параўноўваеце два prompt-ы на адных і тых жа задачах;",
      "вымяраеце некалькі мадэляў або канфігурацый reasoning;",
      "маеце больш за 20 паўтаральных задач для coding agent;",
      "хочаце гісторыю і матрыцу вынікаў без уласнага UI.",
    ],
    noLabel: "ЯШЧЭ НЕ, калі…",
    no: [
      "толькі ўводзіце першы тэст Playwright;",
      "не параўноўваеце агентаў або prompt-ы;",
      "вам патрэбна толькі адна надзейная лакальная каманда;",
      "асяроддзе WordPress fixture яшчэ не стабільнае.",
    ],
    cautionLabel: "Пясочніца",
    cautionBefore: "Запускайце coding-agent eval у ",
    cautionStrong: "аднаразовым ізаляваным workspace",
    cautionAfter:
      ", без вытворчых уліковых даных, рэальных даных кліента або непатрэбнага доступу да сеткі. Coding agents выконваюць адвольны код; пачынайце з read-only і давайце толькі тыя магчымасці, якія павінен праверыць выпадак.",
    cautionLink: "Афіцыйны дапаможнік па coding-agent eval",
  },
  mcp: {
    kicker: "07 · MCP",
    title: "MCP — слой доступу, а не test runner",
    intro:
      "MCP стандартызуе тое, як ШІ-праграма выяўляе і выклікае tools, чытае resources і выкарыстоўвае prompts. Ён не вызначае, як павінны быць рэалізаваныя вашы Playwright, WordPress або CI.",
    yesTitle: "MCP мае сэнс для",
    yes: [
      "атрымання eval bundle праекта;",
      "чытання цэнтральных стандартаў і вядомых рэгрэсій;",
      "адпраўкі структураваных вынікаў і метаданых артэфактаў;",
      "параўнання папярэдніх запускаў з некалькіх праектаў;",
      "аўтарызаванага доступу да цэнтральнага мадэльнага грэйдара.",
    ],
    noTitle: "MCP не патрэбны для",
    no: [
      "лакальнага запуску `npx playwright test`;",
      "PHPCS, PHPStan і build-каманд, якія агент ужо можа выклікаць;",
      "захоўвання project-specific тэстаў разам з кодам;",
      "WP-CLI seed і reset у лакальным інстансе;",
      "першай версіі eval harness.",
    ],
    sourcePrefix: "Прачытайце:",
    sourceLink: "афіцыйны агляд архітэктуры MCP",
  },
  setup: {
    kicker: "03 · Мінімальны лакальны harness",
    title:
      "Стварыце просты лакальны harness, перш чым што-небудзь цэнтралізаваць",
    intro:
      "Трымайце яго ў тым жа рэпазіторыі, што і тэму: запусціце вядомы лакальны стан WordPress, стварыце кантраляваны кантэнт, запусціце наяўныя інструменты і пакіньце карысныя доказы. Не стварайце базу даных, dashboard, агульны framework або MCP-сервер, каб дайсці да гэтага этапу.",
    repoPanelTitle: "Рэкамендаваная структура рэпазіторыя",
    repoPanelMeta: "project-repo/",
    repoAria: "Прыклад структуры рэпазіторыя",
    commandPanelTitle: "Адна кропка ўваходу для агента і CI",
    commandPanelMeta: "package.json",
    commandAria: "Прыклад npm-каманд eval",
    commandCalloutBefore: "Падчас рэалізацыі агент запускае ",
    commandCalloutMiddle: ", а перад завяршэннем запускае ",
    commandCalloutAfter:
      ". Тэсты застаюцца побач з зыходным кодам, але нічога з гэтага не трапляе ў production ZIP тэмы.",
    examplesLabel: "Прыклады канфігурацый eval",
    examples: {
      playwrightTitle: "Playwright: мабільная навігацыя",
      deterministic: "дэтэрміністычны",
      playwrightNote:
        "У рэальным тэсце лепш стварыць асобны helper для overflow, каб паведамленне пра fail было больш зразумелым.",
      lighthouseTitle: "Lighthouse CI: асцярожны бюджэт",
      labSignal: "лабараторны сігнал",
      lighthouseNote:
        "Лічбы — прыклад пачатковай палітыкі, а не ўніверсальны рэцэпт. Калібруйце іх для праекта і аддзяляйце лабараторныя вынікі ад field-метрык.",
      promptfooTitle: "Promptfoo: дадатковы эксперымент",
      later: "пазней, калі спатрэбіцца",
      promptfooNote:
        "Гэта каркас: custom provider павінен падрыхтаваць ізаляваную копію праекта, запусціць агента і вярнуць структураваны вынік, які грэйдар здольны прачытаць.",
    },
  },
  phases: {
    kicker: "04 · Паслядоўнасць першага тыдня",
    title: "Сем крокаў ад адной памылкі да надзейнага цыклу зваротнай сувязі",
    intro:
      "Не дадавайце ўсё адразу. Кожны крок мусіць пакінуць карыснае паляпшэнне, якое можна запусціць незалежна.",
    items: [
      {
        number: "01",
        title: "Выберыце адну назіральную памылку",
        text: "Абярыце крытычнае ўзаемадзеянне, якое можна апісаць адным сказам: мабільнае меню, форма пошуку, modal або іншыя рэальныя паводзіны тэмы.",
        deliverable: "адзін сказ пра прыёмку",
      },
      {
        number: "02",
        title: "Зафіксуйце ўвод",
        text: "Запішыце маршрут, viewport, стан карыстальніка, стан убудоў і WP-CLI fixture, патрэбныя для прайгравання памылкі.",
        deliverable: "fixture + асяроддзе",
      },
      {
        number: "03",
        title: "Напішыце сфакусаваны browser-выпадак",
        text: "Прымусьце вядомыя зламаныя паводзіны не праходзіць дакладную assertion і пакінуць карысны trace або скрыншот.",
        deliverable: "npm run eval:browser",
      },
      {
        number: "04",
        title: "Падключыце хуткія праверкі",
        text: "Аб’яднайце наяўны lint, PHPCS/WPCS і PHPStan у каманду, якую агент можа запускаць часта.",
        deliverable: "npm run eval:fast",
      },
      {
        number: "05",
        title: "Дадайце адзін варожы выпадак кантэнту",
        text: "Паўтарыце flow з доўгім ярлыком, пустым дадатковым полем, адсутнай выявай або непарыўным URL.",
        deliverable: "tests/fixtures/",
      },
      {
        number: "06",
        title: "Няхай CI паўторыць той самы запуск",
        text: "Выкарыстоўвайце тыя ж каманды ў асяроддзі pull request і захоўвайце адпаведны лог, скрыншот, trace або справаздачу.",
        deliverable: "артэфакты для review",
      },
      {
        number: "07",
        title: "Promptfoo толькі калі спатрэбіцца",
        text: "Толькі пасля стабілізацыі набору задач і грэйдараў параўноўвайце адну пераменную prompt, мадэлі, reasoning або агента.",
        deliverable: "baseline vs candidate",
      },
    ],
    thresholdLabel: "Парог для цэнтралізацыі:",
    threshold:
      "вылучайце агульны пакет толькі тады, калі тое самае правіла або helper паўторыцца як мінімум у некалькіх рэальных тэмах і розніца паміж праектамі стане відавочнай.",
  },
  pitfalls: {
    kicker: "09 · Пасткі",
    title: "Як сістэма eval можа падарваць сама сябе",
    items: [
      {
        title: "Агент змяняе тэст, каб яго прайсці",
        fix: "Ставіцеся да эвалоў, fixture і baseline як да абароненых файлаў. Змена крытэрыю патрабуе асобнага review.",
      },
      {
        title: "Усё ацэньваецца LLM",
        fix: "Выкарыстоўвайце найтаннейшы грэйдар, які надзейна бачыць памылку. DOM-праверкі, exit code і pixel diff маюць перавагу.",
      },
      {
        title: "Толькі кантэнт happy path",
        fix: "Стварайце пустыя палі, доўгія загалоўкі, праблемныя URL, выявы з рознымі суадносінамі бакоў і глыбока ўкладзеныя меню.",
      },
      {
        title: "Тэсты скрыншотаў нестабільныя",
        fix: "Трымайце baseline і выкананне ў адным browser/OS-асяроддзі і маскіруйце толькі сапраўды дынамічныя элементы.",
      },
      {
        title: "Ацэнка Lighthouse — адзіная ісціна",
        fix: "Усталюйце канкрэтныя бюджэты, паўтарайце лабараторныя вымярэнні і аддзяляйце іх ад field-даных рэальных карыстальнікаў.",
      },
      {
        title: "Цэнтральныя правілы змяняюцца падчас запуску",
        fix: "Зафіксуйце версію eval bundle разам з commit, наборам fixture і runtime, каб той самы запуск можна было паўтарыць.",
      },
    ],
  },
  safety: {
    kicker: "08 · Межы бяспекі",
    title:
      "Захоўвайце незалежнасць грэйдара і аднаразовасць тэставага асяроддзя",
    intro:
      "Эваль карысны толькі тады, калі яго пачатковы стан кантралюецца, крытэрый немагчыма ціха аслабіць, а агент з правам запісу не можа дасягнуць рэальных сістэм кліента.",
    items: [
      {
        title: "Reset толькі ізаляванага тэставага сайта",
        text: "Ахоўвайце каманды fixture праверкай асяроддзя. Узнаўляйце аднаразовую базу даных або выдаляйце толькі выразна пазначаныя fixture-запісы — ніколі не скіроўвайце reset-логіку на staging або production.",
      },
      {
        title: "Абараняйце крытэрый",
        text: "Агент не павінен рэдагаваць тэсты, fixture, чаканыя вынікі, візуальныя baseline, канфігурацыю грэйдара або каманды eval у той жа задачы рэалізацыі без асобнага review.",
      },
      {
        title: "Разглядайце бяспеку WordPress як асобны шлях доказу",
        text: "Правярайце validation і sanitization, праверкі nonce і правоў для мутацый, кантэкстнае экраніраванне вываду праз esc_html/esc_attr/esc_url/wp_kses, залежнасці і закомічаныя secrets.",
      },
      {
        title: "Давайце агенту мінімальныя правы",
        text: "Выкарыстоўвайце ізаляваную працоўную копію, фіктыўныя ўліковыя даныя, замаканыя інтэграцыі, мінімальнае асяроддзе і не давайце доступ да сеткі, калі эваль не правярае менавіта гэтую магчымасць.",
      },
    ],
    limitsTitle: "Чаго аўтаматычныя эвалы не даказваюць",
    limits: [
      "axe не даказвае поўную адпаведнасць WCAG; клавіятурныя сцэнары і шляхі screen reader усё яшчэ патрабуюць праверкі чалавекам.",
      "Лабараторны бюджэт Lighthouse — не рэальныя field-даныя Core Web Vitals карыстальнікаў.",
      "PHPCS/WPCS і PHPStan не даказваюць бізнес-логіку, аўтарызацыю або паводзіны візуальнага выніку.",
      "Visual regression патрабуе зафіксаванага набору browser, OS і шрыфтоў, а таксама агляду наўмысных змен чалавекам.",
    ],
  },
  checklist: {
    kicker: "Практычны старт",
    title:
      "Дзесяць праверак, якія даюць уласнай тэме карысную першую сетку бяспекі",
    intro:
      "Пачніце з першых трох на адным маршруце, затым пашырайце набор, калі fixture і лакальнае асяроддзе стануць стабільнымі. Кожны fail мусіць называць свой грэйдар і пакідаць доказ, які распрацоўшчык можа прагледзець.",
    resourcesCta: "Адкрыць афіцыйныя рэсурсы",
    toolLabel: "Грэйдар:",
    evidenceLabel: "Доказ:",
    items: [
      {
        text: "Тэма актывуецца без узгодненых памылак PHP.",
        tool: "Актывацыя WP-CLI плюс праверка логу памылак PHP.",
        evidence: "вывад каманды, фрагмент логу, версіі WordPress і PHP.",
      },
      {
        text: "Асноўныя шаблоны вяртаюць і рэндэраць чаканы тып старонкі.",
        tool: "Smoke-тэсты навігацыі Playwright.",
        evidence: "URL, статус, галоўны landmark, скрыншот і trace.",
      },
      {
        text: "Мабільная навігацыя працуе з клавіятуры.",
        tool: "Сфакусаваны тэст узаемадзеяння Playwright.",
        evidence: "assertion, viewport, fixture, trace і скрыншот.",
      },
      {
        text: "На падтрымліваемых viewport няма гарызантальнага overflow.",
        tool: "Helper памераў DOM у Playwright.",
        evidence: "маршрут, viewport, clientWidth, scrollWidth і скрыншот.",
      },
      {
        text: "Распаўсюджаныя рэгрэсіі даступнасці, што выяўляюцца машынай, блакуюцца.",
        tool: "axe у адпаведных станах Playwright.",
        evidence: "ID парушэння, impact, selector мэты і стан browser.",
      },
      {
        text: "Пусты дадатковы кантэнт не ламае layout.",
        tool: "Fixture WP-CLI плюс Playwright.",
        evidence: "назва fixture, маршрут, скрыншот і trace.",
      },
      {
        text: "Доўгія загалоўкі і непарыўныя URL застаюцца ў кантэйнеры.",
        tool: "Fixture варожага кантэнту плюс assertion overflow.",
        evidence: "payload fixture, viewport, памеры і скрыншот.",
      },
      {
        text: "Статычныя праверкі PHP праходзяць на закомічанай канфігурацыі.",
        tool: "PHPCS/WPCS і PHPStan.",
        evidence:
          "справаздача інструмента, рэвізія канфігурацыі, дакладны файл і радок.",
      },
      {
        text: "Ухваленыя ключавыя шаблоны не змяняюцца нечакана.",
        tool: "Візуальнае параўнанне Playwright.",
        evidence:
          "рэвізія baseline, фактычная/diff-выява, версіі browser і OS.",
      },
      {
        text: "Поўны запуск пакідае доказы для review кожнага blocker.",
        tool: "Eval runner праекта або задача CI.",
        evidence:
          "source commit, рэвізія fixture, версіі runtime і захаваныя артэфакты.",
      },
    ],
  },
  resources: {
    kicker: "10 · Крыніцы",
    title: "Працягвайце з аўтарытэтнай дакументацыяй",
    intro:
      "Гэтыя спасылкі вядуць да афіцыйнай дакументацыі і першасных праектаў. Праверце версіі інструментаў і патрабаванні свайго праекта перад рэалізацыяй.",
    groups: [
      {
        group: "WordPress",
        links: [
          {
            label: "Даведнік па тэставанні тэм",
            href: officialLinks.themeTesting,
          },
          { label: "Стандарты кода WordPress", href: officialLinks.wpcs },
          { label: "E2E-тэсты з Playwright", href: officialLinks.wpPlaywright },
        ],
      },
      {
        group: "Browser і якасць",
        links: [
          { label: "Тэсты Playwright", href: officialLinks.playwright },
          { label: "axe-core", href: officialLinks.axe },
          { label: "Lighthouse CI", href: officialLinks.lighthouse },
          { label: "Core Web Vitals", href: officialLinks.vitals },
        ],
      },
      {
        group: "Слой eval для ШІ",
        links: [
          {
            label: "Пачатак працы з Promptfoo",
            href: officialLinks.promptfooGettingStarted,
          },
          {
            label: "Лакальны web-праглядальнік Promptfoo",
            href: officialLinks.promptfooViewer,
          },
          {
            label: "Хмарнае прыкладанне Promptfoo",
            href: officialLinks.promptfooApp,
          },
          {
            label: "Канфігурацыя Promptfoo",
            href: officialLinks.promptfooConfig,
          },
          {
            label: "Эвалы coding-agent у Promptfoo",
            href: officialLinks.promptfooAgents,
          },
          { label: "Promptfoo на GitHub", href: officialLinks.promptfooGithub },
          { label: "Архітэктура MCP", href: officialLinks.mcp },
        ],
      },
    ],
  },
  final: {
    kicker: "Фінальная рэкамендацыя",
    title: "Не стварайце eval framework. Стварыце шлях даказвання.",
    text: "Лакальны harness + наяўныя грэйдары + fixtures + CI. Дадайце Promptfoo для эксперыментаў. Дадайце MCP толькі тады, калі існуе рэальны цэнтральны сэрвіс, якім павінны карыстацца некалькі кліентаў.",
  },
  footer: {
    title: "EDD для WordPress-тэм з дапамогай ШІ",
    text: "Адукацыйны дапаможнік · рэкамендацыі наўмысна паступовыя і vendor-neutral.",
    verified: "Крыніцы правераны 30 ліпеня 2026",
    backToTop: "Наверх ↑",
  },
} satisfies GuideCopy;
