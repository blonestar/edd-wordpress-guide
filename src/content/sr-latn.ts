import { officialLinks } from "./shared";
import type { GuideCopy } from "./types";

export const srLatn = {
  locale: "sr-latn",
  htmlLang: "sr-Latn",
  languageName: "Srpski (latinica)",
  shortLanguageName: "SR Lat",
  meta: {
    title: "Eval-Driven Development za AI-assisted WordPress teme",
    description:
      "Beginner-friendly vodič za lokalne evale, Playwright, axe, PHPCS, PHPStan, Lighthouse, Promptfoo i MCP u razvoju custom WordPress tema.",
  },
  skipLink: "Preskoči navigaciju",
  brand: {
    name: "EDD za WordPress",
    subtitle: "Praktičan vodič",
    homeLabel: "EDD za WordPress — početak",
  },
  nav: {
    label: "Glavna navigacija",
    basics: "Osnove",
    example: "Prvi eval",
    tools: "Alati",
    promptfoo: "Promptfoo",
    checklist: "Checklista",
  },
  languageMenu: {
    label: "Izaberi jezik",
    current: "Jezik",
  },
  hero: {
    eyebrow: "Za WordPress developere koji uvode AI agente · 2026",
    titleLine1: "AI može da promeni temu.",
    titleLine2: "Evali odlučuju šta je bezbedno zadržati.",
    lede: "Praktičan uvod u Eval-Driven Development za iskusne WordPress developere koji su novi u AI evalima: definiši kvar, ponovi ga lokalno i traži od agenta nezavisan dokaz pre nego što prihvatiš izmenu.",
    primaryCta: "Vidi prvi kompletan eval",
    secondaryCta: "Napravi lokalni harness",
    notePrefix: "Preporučeni početak:",
    noteStrong: "project-specific testove drži uz temu",
    noteSuffix:
      ", lokalno seeduj kontrolisan WordPress sadržaj i daj agentu jednu komandu koju mora da prođe pre nego što prijavi da je završio.",
    visualLabel: "Tok Eval-Driven Development procesa",
    flowCards: [
      { number: "01", title: "Zahtev za izmenu", text: "vidljivo ponašanje" },
      { number: "02", title: "AI agent", text: "menja izolovanu kopiju" },
      {
        number: "03",
        title: "Lokalni harness",
        text: "pokreće nezavisne provere",
      },
      { number: "04", title: "Dokaz", text: "pass / fail + razlog" },
    ],
    core: "EDD",
    coreText: "merljivo\n„gotovo“",
    caption: "Definiši → implementiraj → proveri → popravi → ponovi",
  },
  signals: {
    label: "Ključni principi",
    items: [
      {
        title: "Deterministički prvo",
        text: "najstabilniji signal",
      },
      {
        title: "Dokaz uz svaki fail",
        text: "trace, log ili screenshot",
      },
      {
        title: "Zaštiti kriterijum",
        text: "agent ne pomera cilj",
      },
    ],
  },
  basics: {
    kicker: "01 · Osnove",
    title: "Šta je eval — bez magije?",
    intro:
      "Eval je ponovljiva provera koja uz poznat ulaz meri da li je sistem postigao unapred definisan ishod. Kod AI-assisted razvoja meri se rezultat agenta, a ne koliko njegov odgovor zvuči uverljivo.",
    cards: [
      {
        letter: "A",
        title: "Ulaz",
        text: "Task, početni repo, fixture podaci, viewport i sve dozvoljene alatke.",
      },
      {
        letter: "B",
        title: "Očekivanje",
        text: "Konkretan kriterijum: meni se zatvara na Escape, nema PHP greške, nema overflowa.",
      },
      {
        letter: "C",
        title: "Grader",
        text: "Najjednostavniji pouzdan način merenja: assertion, linter, browser test ili uska rubrika.",
      },
      {
        letter: "D",
        title: "Evidence",
        text: "Pass/fail, stvarna vrednost, log, trace, screenshot i verzije okruženja.",
      },
    ],
    loopLabel: "EDD petlja od kriterijuma do popravke",
    loop: [
      { number: "1", text: "Definiši „gotovo“" },
      { number: "2", text: "Pokreni baseline" },
      { number: "3", text: "AI implementira" },
      { number: "4", text: "Eval meri" },
      { number: "5", text: "Popravi uzrok" },
    ],
  },
  glossary: {
    kicker: "Pre dodatnih alata",
    title: "Osam pojmova koji olakšavaju ostatak vodiča",
    intro:
      "WordPress kod ostaje poznat. Ovo su novi termini koji opisuju kako se AI izmena meri, poredi i objašnjava.",
    analogyLabel: "WordPress analogija:",
    items: [
      {
        term: "Eval",
        definition:
          "Ponovljiva provera definisanog ishoda iz poznatog početnog stanja.",
        analogy: "acceptance test sa eksplicitnim scenarijem i paketom dokaza.",
      },
      {
        term: "Case",
        definition:
          "Jedan scenario u suite-u: ruta, fixture, viewport, stanje korisnika i očekivanje.",
        analogy: "jedna test metoda ili pažljivo ograničena QA reprodukcija.",
      },
      {
        term: "Fixture",
        definition:
          "Kontrolisan sadržaj ili konfiguracija koja kvar čini ponovljivim.",
        analogy:
          "WP-CLI seedovan post, meni, korisnik, opcija ili prazno ACF stanje.",
      },
      {
        term: "Grader",
        definition:
          "Nezavisan mehanizam koji određuje pass, fail ili ograničen score.",
        analogy:
          "Playwright assertion, PHPCS exit code, axe pravilo ili odobren diff.",
      },
      {
        term: "Evidence",
        definition:
          "Činjenica koja objašnjava rezultat: vrednost, trace, log, screenshot ili izveštaj.",
        analogy: "artifact koji reviewer otvara da razume zašto je CI pao.",
      },
      {
        term: "Baseline",
        definition:
          "Poznat početni rezultat ili nepromenjena konfiguracija za poređenje.",
        analogy: "odobren screenshot ili trenutna prompt/model kombinacija.",
      },
      {
        term: "Harness",
        definition:
          "Tanak projektni sloj koji priprema stanje, pokreće postojeće alate i prikuplja rezultate.",
        analogy: "npm scripts plus WP-CLI setup, a ne zamena za same alate.",
      },
      {
        term: "Kontrolisani eksperiment",
        definition:
          "Poređenje u kome zadaci i graderi ostaju isti dok se menja jedna promenljiva.",
        analogy:
          "promeni prompt ili model, ne oba, pa tek onda uporedi rezultat.",
      },
    ],
  },
  workedExample: {
    kicker: "Worked example · jedno ponašanje, jedan dokazni put",
    title: "Pretvori „napravi pristupačan mobilni meni” u ponovljiv eval",
    intro:
      "Ovaj primer povezuje PHP/HTML output, JavaScript ponašanje, responsive layout i keyboard accessibility. WordPress priprema stanje, Playwright izvršava ponašanje, a browser daje dokaz.",
    scenarioLabel: "Zadatak",
    scenario:
      "Implementiraj mobilnu navigaciju koja se otvara preko dugmeta, radi tastaturom, zatvara na Escape, pravilno vraća fokus i ne stvara horizontalni scroll.",
    steps: [
      {
        number: "A",
        title: "Zaključaj ulaz",
        text: "Koristi homepage, viewport 375 × 812, odjavljenog korisnika i seedovan meni sa dugom stavkom drugog nivoa.",
        detail: "fixture: mobile-menu-edge-case",
      },
      {
        number: "B",
        title: "Navedi očekivanje",
        text: "Dugme ima accessible name; meni se otvara; Escape ga zatvara; fokus se vraća; nema novih console grešaka ni overflowa.",
        detail: "expected: sedam vidljivih uslova",
      },
      {
        number: "C",
        title: "Izaberi grader",
        text: "Koristi fokusirane Playwright assertions i mali DOM helper za overflow. Axe dodaj kada je sama interakcija stabilna.",
        detail: "grader: Playwright + DOM assertion",
      },
      {
        number: "D",
        title: "Sačuvaj koristan dokaz",
        text: "Na fail-u sačuvaj assertion, trace, screenshot, console log, viewport, fixture i verzije runtime-a.",
        detail: "evidence: objašnjiv, ne samo crven",
      },
    ],
    codeTitle: "Fokusirani browser case",
    codeMeta: "tests/e2e/mobile-navigation.spec.ts",
    codeAria: "Playwright primer za mobilnu navigaciju",
    firstRunLabel: "BASELINE",
    firstRunTitle: "Poznat kvar je reprodukovan",
    firstRunText:
      "Prvi run treba da padne zbog stvarnog pokvarenog ponašanja. Ako test ne vidi bug, eval još nije spreman.",
    finalRunLabel: "CANDIDATE",
    finalRunTitle: "Fokusirani case i full suite prolaze",
    finalRunText:
      "Pregledaj stvarni browser dokaz, pa pokreni širi suite pre prihvatanja izmene.",
    evidenceLabel: "Sačuvaj na fail-u",
    evidence: [
      "assertion vrednost",
      "Playwright trace",
      "failure screenshot",
      "console log",
      "fixture + viewport",
    ],
    takeawayLabel: "Ključna ideja:",
    takeaway:
      "eval nije samo Playwright fajl; čine ga kontrolisan ulaz, navedeno očekivanje, nezavisan grader i dokaz.",
  },
  graders: {
    kicker: "Pravilo izbora",
    title: "Najjeftiniji grader koji pouzdano vidi grešku",
    intro:
      "LLM-as-a-judge je koristan, ali ne treba da rešava problem koji DOM, parser, exit code ili browser assertion rešava preciznije.",
    deterministic: {
      overline: "Prvi izbor",
      title: "Deterministički grader",
      text: "Isto stanje daje isti, objašnjiv rezultat. Brz je, jeftin i idealan kao CI kapija.",
      tagsLabel: "Primeri determinističkih provera",
      tags: [
        "HTTP 200",
        "tačno jedan H1",
        "nema overflowa",
        "PHPCS exit 0",
        "Escape zatvara meni",
        "pixel diff prag",
      ],
      exampleLabel: "Primer",
      example: "scrollWidth > clientWidth → FAIL",
    },
    model: {
      overline: "Samo kada treba",
      title: "Model grader",
      text: "Za nijanse koje nije razumno svesti na pravilo. Rubrika mora biti uska, referentna i prethodno kalibrisana.",
      tagsLabel: "Primeri modelskih procena",
      tags: [
        "vernost Figmi",
        "vizuelna hijerarhija",
        "jasnoća editor UX-a",
        "arhitektonska procena",
      ],
      exampleLabel: "Dobra rubrika",
      example: "Oceni samo spacing i alignment 0–5.",
    },
    ladderLabel: "Redosled izbora gradera",
    ladder: ["assertion", "postojeći alat", "custom skripta", "model rubrika"],
  },
  tools: {
    kicker: "02 · Alati",
    title: "Koji alat vidi koju vrstu greške?",
    intro:
      "Ne treba ti jedan „super evaluator“. Složi male, specijalizovane gradere i svaki koristi samo tamo gde je njegov signal pouzdan.",
    boundaryLabel: "Granica",
    items: [
      {
        mark: "PW",
        name: "Playwright",
        tone: "mint",
        use: "Kritični korisnički tokovi, responsive ponašanje, mobilni meni, forme, konzolne greške i horizontalni overflow.",
        notFor:
          "Nije zamena za unit testove i ne treba njime testirati svaku sitnicu.",
        link: officialLinks.playwright,
        linkLabel: "Playwright dokumentacija",
      },
      {
        mark: "AX",
        name: "axe-core",
        tone: "violet",
        use: "Automatski prepoznatljivi accessibility problemi: imena kontrola, kontrast, ARIA i deo WCAG pravila.",
        notFor:
          "Automatika ne dokazuje da je ceo sajt pristupačan; tastatura i screen reader traže i ručnu proveru.",
        link: officialLinks.axe,
        linkLabel: "axe-core dokumentacija",
      },
      {
        mark: "CS",
        name: "PHPCS + WPCS",
        tone: "amber",
        use: "WordPress coding konvencije, escaping upozorenja, internacionalizacija i ponovljive provere PHP koda.",
        notFor: "Prolazak standarda ne znači da je poslovna logika ispravna.",
        link: officialLinks.wpcs,
        linkLabel: "WordPress PHP standardi",
      },
      {
        mark: "PS",
        name: "PHPStan",
        tone: "blue",
        use: "Statička analiza: nepoznate klase i metode, pogrešni tipovi, mrtve grane i sumnjivi pozivi pre runtime-a.",
        notFor:
          "Za dinamičan WordPress kod treba postepeno podešavanje i odgovarajuće stubove ili ekstenzije.",
        link: officialLinks.phpstan,
        linkLabel: "PHPStan početni vodič",
      },
      {
        mark: "LH",
        name: "Lighthouse CI",
        tone: "coral",
        use: "Budžeti za performanse, veličinu resursa i odabrane Lighthouse audit rezultate u kontrolisanom okruženju.",
        notFor:
          "Jedan laboratorijski rezultat nije isto što i stvarni Core Web Vitals podaci korisnika.",
        link: officialLinks.lighthouse,
        linkLabel: "Lighthouse CI",
      },
      {
        mark: "VR",
        name: "Visual regression",
        tone: "pink",
        use: "Screenshot poređenje ključnih template-a i komponenti radi hvatanja neočekivanih vizuelnih promena.",
        notFor:
          "Baseline se ne ažurira samo da bi test postao zelen; razliku prvo mora pregledati čovek.",
        link: officialLinks.visual,
        linkLabel: "Playwright visual comparisons",
      },
      {
        mark: "WP",
        name: "WP-CLI fixtures",
        tone: "green",
        use: "Ponovljivo kreiranje postova, menija, korisnika, opcija i sadržajnih edge case-ova pre browser testa.",
        notFor:
          "Fixture podaci nisu produkcioni sadržaj i ne treba da završe u production paketu teme.",
        link: officialLinks.wpcli,
        linkLabel: "WP-CLI komande",
      },
      {
        mark: "PU",
        name: "PHPUnit / WP test suite",
        tone: "slate",
        use: "Deterministička PHP logika, filteri, helperi i integracije koje je brže proveriti bez browsera.",
        notFor:
          "Ne može potvrditi stvarni layout, fokus ili interakciju u browseru.",
        link: officialLinks.phpunit,
        linkLabel: "WordPress theme test scaffold",
      },
    ],
  },
  architecture: {
    kicker: "05 · Shared arhitektura",
    title: "Počni lokalno. Centralizuj tek ono što se ponavlja.",
    intro:
      "Za prvi projekat dovoljan je repo-local harness. Centralni registry, Promptfoo i MCP su dodatni slojevi — ne uslov da evali rade.",
    local: {
      badge: "Obavezno",
      title: "Lokalni execution plane",
      intro: "Tu su kod, WordPress, browser i stvarni runtime dokaz.",
      items: [
        {
          number: "01",
          title: "Theme source",
          text: "AI menja implementaciju",
        },
        {
          number: "02",
          title: "Fixture setup",
          text: "WP-CLI ili mali dev-only plugin",
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
    bridge: ["verzionisani bundle", "strukturirani rezultati"],
    central: {
      badge: "Kasnije, po potrebi",
      title: "Centralni control plane",
      intro: "Tu žive zajednička pravila, istorija i zaštićeni gate-ovi.",
      items: [
        {
          number: "A",
          title: "Shared standards",
          text: "company WPCS · a11y · performance",
        },
        {
          number: "B",
          title: "Project bundle",
          text: "tačna, zaključana verzija evala",
        },
        {
          number: "C",
          title: "Hidden / release evals",
          text: "edge case i policy provere",
        },
        {
          number: "D",
          title: "Run history",
          text: "trendovi · poređenja · odluke",
        },
      ],
    },
    ruleLabel: "Reproduktivnost:",
    rule: "source commit + eval bundle verzija + fixture verzija + runtime verzija = ponovljiv eval run.",
  },
  promptfoo: {
    kicker: "06 · Promptfoo",
    title:
      "Promptfoo poredi AI konfiguracije. WordPress alati dokazuju rezultat.",
    intro:
      "Promptfoo je open-source CLI i eval framework za pokretanje konfigurisanih kombinacija promptova, providera i test slučajeva. Postaje koristan kada imaš stabilan skup zadataka i stvarnu odluku o promptu, modelu, reasoning nivou ili agent runtime-u.",
    flowLabel: "Uloga Promptfoo-a u eval sistemu",
    inputs: ["prompt A", "prompt B", "model / agent"],
    coreOverline: "experiment runner",
    coreText: "isti zadaci · kontrolisana promena",
    graders: ["Playwright", "PHPCS", "axe", "custom assertion"],
    resultOverline: "odluka",
    resultTitle: "baseline vs candidate",
    resultText: "kvalitet · cena · trajanje",
    facts: [
      {
        title: "Pokreće matricu poređenja",
        text: "Promptfoo kombinuje promptove, providere i test slučajeve, primenjuje assertions i čuva uporedive rezultate.",
      },
      {
        title: "Provider je adapter",
        text: "Za coding agenta, provider ili custom wrapper pokreće izolovani agent run i vraća strukturisan output.",
      },
      {
        title: "Tvoj harness ostaje sudija proizvoda",
        text: "PHPCS, PHPStan, Playwright, axe, fixtures i Lighthouse i dalje određuju da li WordPress rezultat radi.",
      },
    ],
    quickstartTitle: "Probaj zvanični primer lokalno",
    quickstartIntro:
      "Primer kreira promptfooconfig.yaml, pokreće prompt/provider/test matricu i otvara lokalni pregled rezultata.",
    quickstartAria: "Komande za lokalni Promptfoo quickstart",
    localViewerTitle: "Lokalni pregled rezultata",
    localViewerText:
      "Pokreni `promptfoo view` da na svojoj mašini pregledaš outputs, assertions, failures, poređenja, komentare i grafikone.",
    cloudTitle: "promptfoo.app",
    cloudText:
      "Cloud app je opciona. Koristi je samo kada su organization-private linkovi ili cloud funkcije primereni podacima projekta.",
    gettingStartedLink: "Getting started",
    viewerLink: "Dokumentacija za web viewer",
    appLink: "Otvori promptfoo.app",
    githubLink: "Promptfoo na GitHub-u",
    controlledTitle: "Menjaj jednu promenljivu.",
    controlledText:
      "Zadrži iste zadatke, fixture reviziju, gradere i runtime; promeni prompt, model, reasoning ili agent runtime, ne nekoliko stvari odjednom. Ponovi reprezentativne nedeterminističke slučajeve i poredi cenu i trajanje uz pass rate.",
    yesLabel: "DA, kada…",
    yes: [
      "porediš dva prompta nad istim zadacima;",
      "meriš više modela ili reasoning konfiguracija;",
      "imaš 20+ ponovljivih coding-agent zadataka;",
      "želiš istoriju i matricu rezultata bez svog UI-ja.",
    ],
    noLabel: "NE JOŠ, kada…",
    no: [
      "tek uvodiš prvi Playwright test;",
      "ne porediš agente ili promptove;",
      "treba ti samo jedan pouzdan local command;",
      "WordPress fixture okruženje još nije stabilno.",
    ],
    cautionLabel: "Sandbox",
    cautionBefore: "Coding-agent eval pokreći u",
    cautionStrong: "disposable workspace-u",
    cautionAfter:
      ", bez produkcionih kredencijala, stvarnih klijentskih podataka i nepotrebnog pristupa mreži. Coding agenti izvršavaju proizvoljan kod; počni sa read-only pravima i dodaj samo mogućnosti koje case mora da proveri.",
    cautionLink: "Zvanični vodič za coding-agent evale",
  },
  mcp: {
    kicker: "07 · MCP",
    title: "MCP je pristupni sloj, ne test runner",
    intro:
      "MCP standardizuje kako AI aplikacija otkriva i poziva tools, čita resources i koristi prompts. Ne govori kako tvoj Playwright, WordPress ili CI treba da budu implementirani.",
    yesTitle: "MCP ima smisla za",
    yes: [
      "preuzimanje projektnog eval bundle-a;",
      "čitanje centralnih standarda i poznatih regresija;",
      "slanje strukturiranih rezultata i artifacts metapodataka;",
      "poređenje prethodnih run-ova iz više projekata;",
      "autorizovan pristup centralnom model graderu.",
    ],
    noTitle: "MCP nije potreban za",
    no: [
      "pokretanje npx playwright test lokalno;",
      "PHPCS, PHPStan i build komande koje agent već može pozvati;",
      "čuvanje project-specific testova uz kod;",
      "WP-CLI seed i reset u lokalnoj instanci;",
      "prvu verziju eval harness-a.",
    ],
    sourcePrefix: "Pročitaj:",
    sourceLink: "zvanični pregled MCP arhitekture",
  },
  setup: {
    kicker: "03 · Minimalni lokalni harness",
    title: "Napravi dosadan lokalni harness pre bilo kakve centralizacije",
    intro:
      "Drži ga u istom repou kao temu: pokreni poznato lokalno WordPress stanje, seeduj kontrolisan sadržaj, izvrši postojeće alate i ostavi koristan dokaz. Za ovo ti ne trebaju baza rezultata, dashboard, generički framework ni MCP server.",
    repoPanelTitle: "Preporučeni repo layout",
    repoPanelMeta: "project-repo/",
    repoAria: "Primer strukture repozitorijuma",
    commandPanelTitle: "Jedan ulaz za agenta i CI",
    commandPanelMeta: "package.json",
    commandAria: "Primer npm eval komandi",
    commandCalloutBefore: "Agent tokom rada pokreće",
    commandCalloutMiddle: ", a pre završetka",
    commandCalloutAfter:
      ". Testovi ostaju uz source, ali ništa od ovoga ne ulazi u production ZIP teme.",
    examplesLabel: "Primeri eval konfiguracija",
    examples: {
      playwrightTitle: "Playwright: mobilni meni",
      deterministic: "deterministički",
      playwrightNote:
        "U realnom testu radije napravi poseban helper za overflow kako bi failure poruka bila jasnija.",
      lighthouseTitle: "Lighthouse CI: oprezan budžet",
      labSignal: "lab signal",
      lighthouseNote:
        "Brojevi su primer početne politike, ne univerzalni recept. Kalibriši ih na projektu i odvoji laboratorijske rezultate od field metrike.",
      promptfooTitle: "Promptfoo: opcioni eksperiment",
      later: "tek kasnije",
      promptfooNote:
        "Ovo je kostur: custom provider treba da pripremi izolovanu kopiju projekta, pokrene agenta i vrati strukturiran rezultat koji grader ume da pročita.",
    },
  },
  phases: {
    kicker: "04 · Redosled za prvu nedelju",
    title: "Sedam koraka od jednog kvara do pouzdane feedback petlje",
    intro:
      "Ne dodaj sve odjednom. Svaki korak treba da ostavi korisno poboljšanje koje može nezavisno da se pokrene.",
    items: [
      {
        number: "01",
        title: "Izaberi jedan vidljiv kvar",
        text: "Odaberi kritičnu interakciju koju možeš opisati u jednoj rečenici: mobilni meni, search forma, modal ili drugo stvarno ponašanje teme.",
        deliverable: "jedan acceptance kriterijum",
      },
      {
        number: "02",
        title: "Zaključaj ulaz",
        text: "Zapiši rutu, viewport, stanje korisnika i plugina, kao i WP-CLI fixture potreban za reprodukciju.",
        deliverable: "fixture + okruženje",
      },
      {
        number: "03",
        title: "Napiši fokusirani browser case",
        text: "Neka poznato pokvareno ponašanje padne uz precizan assertion i koristan trace ili screenshot.",
        deliverable: "npm run eval:browser",
      },
      {
        number: "04",
        title: "Poveži brze provere",
        text: "Kombinuj postojeći lint, PHPCS/WPCS i PHPStan u komandu koju agent često može da pokreće.",
        deliverable: "npm run eval:fast",
      },
      {
        number: "05",
        title: "Dodaj jedan problematičan sadržaj",
        text: "Ponovi flow sa dugim labelom, praznim opcionim poljem, slikom koja nedostaje ili neprekinutim URL-om.",
        deliverable: "tests/fixtures/",
      },
      {
        number: "06",
        title: "Neka CI ponovi isti run",
        text: "Koristi iste komande u pull request okruženju i sačuvaj relevantan log, screenshot, trace ili report.",
        deliverable: "reviewable artifacts",
      },
      {
        number: "07",
        title: "Promptfoo tek kad zatreba",
        text: "Tek kada su task set i graderi stabilni, poredi jednu prompt, model, reasoning ili agent promenljivu.",
        deliverable: "baseline vs candidate",
      },
    ],
    thresholdLabel: "Prag za centralizaciju:",
    threshold:
      "izdvoji shared paket tek kada se isto pravilo ili helper ponovi na najmanje nekoliko stvarnih tema i razlika među projektima postane jasna.",
  },
  pitfalls: {
    kicker: "09 · Zamke",
    title: "Kako eval sistem sam sebe pokvari",
    items: [
      {
        title: "Agent menja test da bi prošao",
        fix: "Evale, fixture-e i baseline-e tretiraj kao zaštićene fajlove. Promena kriterijuma zahteva zaseban review.",
      },
      {
        title: "Sve se ocenjuje LLM-om",
        fix: "Koristi najjeftiniji grader koji pouzdano vidi grešku. DOM, exit code i pixel diff imaju prednost.",
      },
      {
        title: "Samo happy path sadržaj",
        fix: "Seeduj prazna polja, dugačke naslove, problematične URL-ove, slike različitih odnosa i duboke menije.",
      },
      {
        title: "Screenshot testovi su nestabilni",
        fix: "Baseline i izvršavanje drži u istom browser/OS okruženju i maskiraj samo opravdano dinamične delove.",
      },
      {
        title: "Lighthouse score je jedina istina",
        fix: "Postavi konkretne budžete, ponovi laboratorijska merenja i odvoji ih od field podataka stvarnih korisnika.",
      },
      {
        title: "Centralna pravila se menjaju usred run-a",
        fix: "Zaključaj verziju eval bundle-a uz commit, fixture set i runtime da bi isti run mogao da se ponovi.",
      },
    ],
  },
  safety: {
    kicker: "08 · Bezbednosne granice",
    title: "Evaluator mora biti nezavisan, a test okruženje potrošno",
    intro:
      "Eval vredi samo ako mu je početno stanje kontrolisano, kriterijum ne može tiho da oslabi i agent sa pravom pisanja ne može da dosegne stvarne klijentske sisteme.",
    items: [
      {
        title: "Resetuj samo izolovan test sajt",
        text: "Zaštiti fixture komande proverom okruženja. Rekreiraj disposable bazu ili briši samo jasno označene fixture zapise; reset logika nikada ne sme da cilja staging ili produkciju.",
      },
      {
        title: "Zaštiti kriterijum",
        text: "Agent ne sme da menja testove, fixtures, očekivane rezultate, visual baselines, grader konfiguraciju ili eval komande u istom zadatku bez odvojenog review-a.",
      },
      {
        title: "WordPress security ima svoj dokazni put",
        text: "Proveri validation i sanitization, nonce i capability checks za mutacije, contextual escaping kroz esc_html/esc_attr/esc_url/wp_kses, dependencies i commitovane tajne.",
      },
      {
        title: "Daj agentu minimalna prava",
        text: "Koristi izolovanu radnu kopiju, lažne kredencijale, mock integracije, minimalno okruženje i bez mreže osim kada eval baš proverava tu mogućnost.",
      },
    ],
    limitsTitle: "Šta automatski evali ne dokazuju",
    limits: [
      "axe ne dokazuje potpunu WCAG usklađenost; keyboard i screen-reader tokovi i dalje traže ručnu proveru.",
      "Lighthouse lab budžet nije isto što i real-user Core Web Vitals field data.",
      "PHPCS/WPCS i PHPStan ne dokazuju business logiku, autorizaciju ili renderovano ponašanje.",
      "visual regression zahteva pinovan browser, OS, fontove i ljudski review namernih izmena.",
    ],
  },
  checklist: {
    kicker: "Praktičan starter",
    title: "Deset provera koje custom temi daju korisnu prvu sigurnosnu mrežu",
    intro:
      "Počni sa prve tri na jednoj ruti, pa proširi kada fixture i lokalno okruženje postanu stabilni. Svaki fail treba da imenuje grader i ostavi dokaz koji developer može da pregleda.",
    resourcesCta: "Otvori zvanične resurse",
    toolLabel: "Grader:",
    evidenceLabel: "Dokaz:",
    items: [
      {
        text: "Tema se aktivira bez dogovorenih PHP grešaka.",
        tool: "WP-CLI aktivacija plus provera PHP error loga.",
        evidence: "output komande, deo loga, WordPress i PHP verzije.",
      },
      {
        text: "Osnovni template-i vraćaju i renderuju očekivani tip stranice.",
        tool: "Playwright navigation smoke testovi.",
        evidence: "URL, status, glavni landmark, screenshot i trace.",
      },
      {
        text: "Mobilna navigacija radi tastaturom.",
        tool: "Fokusirani Playwright interaction test.",
        evidence: "assertion, viewport, fixture, trace i screenshot.",
      },
      {
        text: "Podržani viewporti nemaju horizontalni overflow.",
        tool: "Playwright DOM dimensions helper.",
        evidence: "ruta, viewport, clientWidth, scrollWidth i screenshot.",
      },
      {
        text: "Uobičajene mašinski detektabilne a11y regresije su blokirane.",
        tool: "axe u odgovarajućim Playwright stanjima.",
        evidence: "violation ID, impact, target selector i browser stanje.",
      },
      {
        text: "Prazan opcioni sadržaj ne lomi layout.",
        tool: "WP-CLI fixture plus Playwright.",
        evidence: "fixture, ruta, screenshot i trace.",
      },
      {
        text: "Dugi naslovi i neprekinuti URL-ovi ostaju u kontejneru.",
        tool: "Problematičan fixture plus overflow assertion.",
        evidence: "fixture payload, viewport, dimenzije i screenshot.",
      },
      {
        text: "Statičke PHP provere prolaze sa commitovanom konfiguracijom.",
        tool: "PHPCS/WPCS i PHPStan.",
        evidence:
          "izveštaj alata, revizija konfiguracije, tačan fajl i linija.",
      },
      {
        text: "Odobreni ključni template-i nemaju neočekivan vizuelni drift.",
        tool: "Playwright visual comparison.",
        evidence:
          "baseline revizija, actual/diff slike, verzije browsera i OS-a.",
      },
      {
        text: "Full run ostavlja pregledan dokaz za svaki blocker.",
        tool: "Projektni eval runner ili CI job.",
        evidence:
          "source commit, fixture revizija, runtime verzije i sačuvani artifacts.",
      },
    ],
  },
  resources: {
    kicker: "10 · Izvori",
    title: "Nastavi sa autoritativnim dokumentima",
    intro:
      "Linkovi vode ka zvaničnoj dokumentaciji i primarnim projektima. Proveri verzije alata i zahteve svog projekta pre implementacije.",
    groups: [
      {
        group: "WordPress",
        links: [
          {
            label: "Theme testing handbook",
            href: officialLinks.themeTesting,
          },
          {
            label: "WordPress Coding Standards",
            href: officialLinks.wpcs,
          },
          {
            label: "E2E testovi sa Playwrightom",
            href: officialLinks.wpPlaywright,
          },
        ],
      },
      {
        group: "Browser i kvalitet",
        links: [
          {
            label: "Playwright testovi",
            href: officialLinks.playwright,
          },
          { label: "axe-core", href: officialLinks.axe },
          { label: "Lighthouse CI", href: officialLinks.lighthouse },
          { label: "Core Web Vitals", href: officialLinks.vitals },
        ],
      },
      {
        group: "AI eval sloj",
        links: [
          {
            label: "Promptfoo getting started",
            href: officialLinks.promptfooGettingStarted,
          },
          {
            label: "Promptfoo lokalni web viewer",
            href: officialLinks.promptfooViewer,
          },
          {
            label: "Promptfoo Cloud app",
            href: officialLinks.promptfooApp,
          },
          {
            label: "Promptfoo konfiguracija",
            href: officialLinks.promptfooConfig,
          },
          {
            label: "Promptfoo coding-agent evals",
            href: officialLinks.promptfooAgents,
          },
          {
            label: "Promptfoo na GitHub-u",
            href: officialLinks.promptfooGithub,
          },
          { label: "MCP arhitektura", href: officialLinks.mcp },
        ],
      },
    ],
  },
  final: {
    kicker: "Konačna preporuka",
    title: "Ne pravi eval framework. Napravi dokazni put.",
    text: "Lokalni harness + postojeći graderi + fixtures + CI. Promptfoo dodaj za eksperimente. MCP dodaj tek kada postoji stvarni centralni servis koji više klijenata treba da koristi.",
  },
  footer: {
    title: "EDD za AI-assisted WordPress teme",
    text: "Edukativni vodič · preporuke su namerno postepene i vendor-neutral.",
    verified: "Izvori provereni 30. jula 2026.",
    backToTop: "Nazad na vrh ↑",
  },
} satisfies GuideCopy;
