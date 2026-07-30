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
    tools: "Alati",
    architecture: "Arhitektura",
    start: "Start",
    checklist: "Checklista",
  },
  languageMenu: {
    label: "Izaberi jezik",
    current: "Jezik",
  },
  hero: {
    eyebrow: "Beginner-friendly vodič · 2026",
    titleLine1: "AI piše kod.",
    titleLine2: "Evali dokazuju da radi.",
    lede:
      "Kako da uvedeš Eval-Driven Development u izradu custom WordPress teme — bez pravljenja novog frameworka, bez MCP-a tamo gde nije potreban i bez oslanjanja na „deluje dobro“.",
    primaryCta: "Vidi preporučenu arhitekturu",
    secondaryCta: "Otvori primere",
    notePrefix: "Preporuka u jednoj rečenici:",
    noteStrong: "testovi uz projekat",
    noteSuffix:
      ", jedan lokalni eval command i opcioni Promptfoo tek za poređenje agenata.",
    visualLabel: "Tok Eval-Driven Development procesa",
    flowCards: [
      { number: "01", title: "Zadatak", text: "jasan intent" },
      { number: "02", title: "AI agent", text: "menja temu" },
      { number: "03", title: "Eval harness", text: "pokreće gradere" },
      { number: "04", title: "Dokaz", text: "pass / fail + artifacts" },
    ],
    core: "EDD",
    coreText: "merljivo\n„gotovo“",
    caption: "Implementiraj → proveri → popravi → ponovi",
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
        title: "Agent ne menja kriterijum",
        text: "eval ostaje nezavisan",
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
    ladder: [
      "assertion",
      "postojeći alat",
      "custom skripta",
      "model rubrika",
    ],
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
        notFor:
          "Prolazak standarda ne znači da je poslovna logika ispravna.",
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
    kicker: "03 · Arhitektura",
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
    kicker: "04 · Promptfoo",
    title: "Eksperimentalni sloj, ne WordPress grader",
    intro:
      "Promptfoo pokreće matricu promptova, providera i test slučajeva, primenjuje assertions i poredi rezultate. Tvoji WordPress alati i dalje dokazuju da tema radi.",
    flowLabel: "Uloga Promptfoo-a u eval sistemu",
    inputs: ["prompt A", "prompt B", "model / agent"],
    coreOverline: "experiment runner",
    coreText: "isti zadaci · kontrolisana promena",
    graders: ["Playwright", "PHPCS", "axe", "custom assertion"],
    resultOverline: "odluka",
    resultTitle: "baseline vs candidate",
    resultText: "kvalitet · cena · trajanje",
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
      ", bez produkcionih kredencijala i stvarnih klijentskih podataka. Promptfoo dokumentacija izričito upozorava da coding agenti izvršavaju proizvoljan kod.",
    cautionLink: "Zvanični vodič za coding-agent evale",
  },
  mcp: {
    kicker: "05 · MCP",
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
    kicker: "06 · Minimalni setup",
    title: "Uz source teme — ali ne u production ZIP-u",
    intro:
      "Repo je prava granica. Testovi ostaju vezani za commit teme, dok isporučeni ZIP sadrži samo runtime fajlove.",
    repoPanelTitle: "Preporučeni repo layout",
    repoPanelMeta: "project-repo/",
    repoAria: "Primer strukture repozitorijuma",
    commandPanelTitle: "Jedan ulaz za agenta i CI",
    commandPanelMeta: "package.json",
    commandAria: "Primer npm eval komandi",
    commandCalloutBefore: "Agent tokom rada pokreće",
    commandCalloutMiddle: ", a pre završetka",
    commandCalloutAfter: ".",
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
    kicker: "07 · Faze implementacije",
    title: "Šest koraka, bez „framework projekta“",
    intro:
      "Svaka faza ostavlja nešto upotrebljivo. Ako se zaustaviš posle treće, već imaš vredan lokalni eval sistem.",
    items: [
      {
        number: "01",
        title: "Jedan stvarni tok",
        text: "Postavi Playwright smoke test za homepage i jedan kritičan flow, na primer mobilnu navigaciju.",
        deliverable: "npm run eval:browser",
      },
      {
        number: "02",
        title: "Brzi guardrails",
        text: "Dodaj PHPCS/WPCS, PHPStan i postojeće JS/CSS lint komande. Ovaj sloj se pokreće često.",
        deliverable: "npm run eval:fast",
      },
      {
        number: "03",
        title: "Edge-case sadržaj",
        text: "Uvedi WP-CLI fixture za dug naslov, prazna polja, neobičnu sliku i dugačak meni.",
        deliverable: "tests/fixtures/",
      },
      {
        number: "04",
        title: "A11y i vizuelni dokaz",
        text: "Dodaj axe na ključnim stanjima interfejsa i mali broj stabilnih screenshot baseline-a.",
        deliverable: "npm run eval:full",
      },
      {
        number: "05",
        title: "CI kao kapija",
        text: "Iste komande pokreni na pull requestu. Sačuvaj screenshot, trace i log kada test padne.",
        deliverable: "evidence artifacts",
      },
      {
        number: "06",
        title: "Promptfoo tek kad zatreba",
        text: "Kada zaista porediš promptove, modele ili agente na više ponovljivih zadataka, dodaj eksperimentalni sloj.",
        deliverable: "baseline vs candidate",
      },
    ],
    thresholdLabel: "Prag za centralizaciju:",
    threshold:
      "izdvoji shared paket tek kada se isto pravilo ili helper ponovi na najmanje nekoliko stvarnih tema i razlika među projektima postane jasna.",
  },
  pitfalls: {
    kicker: "08 · Zamke",
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
  checklist: {
    kicker: "Praktičan starter",
    title: "Prvih 10 evala za custom temu",
    intro:
      "Počni ovde. Checklista je namerno mala i fokusirana na kvarove koje AI najlakše uvede, a postojeći alati jasno detektuju.",
    resourcesCta: "Otvori zvanične resurse",
    items: [
      "Tema se aktivira bez PHP fatal, warning i notice grešaka.",
      "Homepage, single, archive, search i 404 vraćaju očekivan odgovor.",
      "Mobilni meni radi tastaturom i Escape vraća fokus na trigger.",
      "Nema horizontalnog overflowa na 320, 375, 768 i 1440 px.",
      "Axe nema dogovorene blocking violations na ključnim stanjima.",
      "Post bez featured slike i sa praznim opcionim poljima ne lomi layout.",
      "Dug naslov i neprekinut URL ne izlaze iz sadržajnog kontejnera.",
      "PHPCS/WPCS i PHPStan prolaze na dogovorenom nivou.",
      "Ključni template-i prolaze odobrene visual regression baseline-e.",
      "Full suite čuva jasan evidence artifact za svaki blocking fail.",
    ],
  },
  resources: {
    kicker: "09 · Izvori",
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
            label: "Promptfoo konfiguracija",
            href: officialLinks.promptfooConfig,
          },
          {
            label: "Promptfoo coding-agent evals",
            href: officialLinks.promptfooAgents,
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
