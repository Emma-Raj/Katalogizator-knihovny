// Databáze maturitních rozborů navázaná na ID knih (book.id)
// Struktura odpovídá požadavkům české státní maturitní zkoušky z českého jazyka a literatury (CERMAT / ŠVP).
// Struktura je flexibilní: zobrazují se pouze vyplněné atributy.

export const maturitaRozbory = {
  // book-229: R.U.R. (Karel Čapek)
  "book-229": {
    bookId: "book-229",
    title: "R.U.R. (Rossum's Universal Robots)",
    author: "Karel Čapek",
    sources: [
      {
        name: "Rozbor-díla.cz – R.U.R. rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/r-u-r-rozbor-dila-k-maturite/"
      }
    ],
    generalInfo: {
      literaryKind: "Drama",
      literaryGenre: "Utopické / antiutopické vědeckofantastické drama (tragédie)",
      literaryForm: "Próza (scénický text)",
      timeAndSpace: "Rossumův ostrov (továrna na výrobu robotů), neurčená budoucnost (cca 2. polovina 20. až 21. století)"
    },
    themeAndMotifs: {
      theme: "Varování před zneužitím vědy, technického pokroku a přeceněním lidského rozumu bez morální zodpovědnosti.",
      motifs: "Robot, stvoření člověka, touha po zisku, lenost lidstva, vzpoura strojů, zánik civilizace, láska jako záchrana lidství."
    },
    composition: {
      structure: "Předehra a 3 dějství",
      timeline: "Chronologická kompozice s časovým odstupem (mezi předehrou a 1. dějstvím uplyne 10 let)",
      dramaticStructure: "Expozice (předehra – seznámení s výrobou robotů a příjezd Heleny), Kolize (roboti získávají city a začíná vzpoura), Krize (obklíčení lidí v továrně), Peripetie (vyvraždění lidstva, ušetřen pouze stavitel Alquist), Katastrofa / Katarze (roboti Primus a Helena objevují lásku, naděje na nový počátek)."
    },
    characters: [
      {
        name: "Harry Domin",
        role: "Centrální ředitel R.U.R.",
        description: "Ztělesňuje vizionáře a neomezenou víru v technologický pokrok; chce osvobodit lidstvo od fyzické práce, ale nedomýšlí následky."
      },
      {
        name: "Helena Gloryová",
        role: "Dcera prezidenta, Dominova manželka",
        description: "Reprezentuje lidský cit, empatii a morální svědomí; bojuje za práva robotů a spálí výrobní recepturu, aby zabránila další výrobě."
      },
      {
        name: "Alquist",
        role: "Šéf staveb a konstruktér",
        description: "Hlas autora; věří v hodnotu lidské rukodělné práce a pokoru k Bohu; jediný člověk ušetřený roboty, protože pracuje rukama."
      },
      {
        name: "Dr. Gall",
        role: "Přednosta fyziologického a výzkumného oddělení",
        description: "Na popud Heleny přidá robotům citlivost a zárodky emocí, což urychlí jejich vzpouru."
      },
      {
        name: "Primus a Helena (roboti)",
        role: "Poslední generace robotů",
        description: "Vyvinou se v nich skutečné lidské city, soucit, obětavost a láska. Stanou se novým Adamem a Evou."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Přímá dramatická řeč (dialogy postav), scénické poznámky určující jednání a prostor.",
      languageCharacteristics: "Spisovný, kultivovaný a dynamický jazyk, odborné a novátorské technické termíny (poprvé uvedeno slovo robot, které vymyslel Josef Čapek z původního robota = lopotit/těžce pracovat)."
    },
    summary: "Na odlehlém ostrově vyrábí továrna R.U.R. umělé biologické dělníky – roboty. Příjezd Heleny Gloryové, která hájí lidská práva robotů, promění život ředitelů. Roboti postupně nahradí lidskou práci, lidé ztrácejí schopnost rozmnožování a propadají zahálce. Dr. Gall na přání Heleny modifikuje roboty, aby měli nervy a pociťovali bolest. Roboti se vzbouří, vytvoří celosvětový spolek a vyhladí lidstvo. Jediným přeživším je Alquist. Když však roboti zjistí, že recept na jejich výrobu byl zničen a hrozí jim zkáza opotřebením, nutí Alquista k pitvám. Alquist v zoufalství zjistí, že robot Primus a robotka Helena se milují a jsou ochotni položit za sebe život – lidstvo tímto citem neumírá, ale začíná nanovo.",
    historicalContext: {
      literaryContext: "Česká meziválečná demokratická literatura, sci-fi drama, protiválečný a humanistický proud.",
      authorContext: "Karel Čapek (1890–1938) – prozaik, dramatik, novinář v Lidových novinách, člen pátečníků, humanista. Hra vznikla roku 1920 a vzápětí dosáhla celosvětového úspěchu na světových divadelních scénách (Londýn, New York)."
    }
  },

  // book-107: Romeo a Julie (William Shakespeare)
  "book-107": {
    bookId: "book-107",
    title: "Romeo a Julie",
    author: "William Shakespeare",
    sources: [
      {
        name: "Rozbor-díla.cz – Romeo a Julie rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/romeo-a-julie-rozbor-dila-k-maturite/"
      }
    ],
    generalInfo: {
      literaryKind: "Drama",
      literaryGenre: "Tragédie",
      literaryForm: "Poezie i próza (blankvers – nerýmovaný pětistopý jamb)",
      timeAndSpace: "Italská města Verona a Mantova, 16. století (renesance)"
    },
    themeAndMotifs: {
      theme: "Nešťastná láska dvou mladých lidí narážející na nesmyslnou nenávist a nepřátelství jejich rodů.",
      motifs: "Láska na první pohled, rodová zášť, osud, smrt, tajná svatba, jed, smíření přes hrob."
    },
    composition: {
      structure: "Prolog a 5 dějství",
      timeline: "Chronologický vývoj, celý děj se odehrává v rychlém spádu během necelého týdne.",
      dramaticStructure: "Prolog veršovaný v sonetové formě; Expozice (spor Monteků a Kapuletů, ples); Kolize (tajný sňatek Romea a Julie); Krize (Tybalt zabije Merkucia, Romeo zabije Tybalta a je vyhnán); Peripetie (plán otce Vavřince se spacím lektvarem); Katastrofa (nedoručený dopis, smrt obou milenců a smíření rodů)."
    },
    characters: [
      {
        name: "Romeo Montek",
        role: "Mladý zamilovaný šlechtic",
        description: "Horkokrevný, zpočátku melancholický, po setkání s Julií oddaný, odvážný a ochotný pro lásku zemřít."
      },
      {
        name: "Julie Kapuletová",
        role: "Čtrnáctiletá dcera Kapuleta",
        description: "Nevinná, ale překvapivě vyzrálá, statečná a věrná dívka, která odmítá dohodnutý sňatek s Parisem."
      },
      {
        name: "Merkucio",
        role: "Romeův věrný přítel a příbuzný vévody",
        description: "Vtipný, výřečný a temperamentní provokatér; jeho smrt rozpoutá osudovou vlnu odplaty."
      },
      {
        name: "Tybalt",
        role: "Juliin bratranec",
        description: "Bojovný, agresivní a pyšný Kapulet, který nesnáší Monteky a vyvolává šarvátky."
      },
      {
        name: "Bratr Vavřinec",
        role: "Františkánský mnich",
        description: "Moudrý, rozvážný pomocník zamilovaných; věří, že sňatek ukončí nepřátelství rodů."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Dramatický dialog a monology; slavná balkónová scéna.",
      languageCharacteristics: "Vysoký básnický styl, blankvers, metafory, oxymoróny, kontrasty (světlo x tma, život x smrt)."
    },
    summary: "Ve Veroně zuří nepřátelství mezi rody Monteků a Kapuletů. Romeo Montek se tajně zúčastní plesu Kapuletů, kde se zamiluje do Julie. Z lásky na první pohled uzavřou s pomocí bratra Vavřince tajný sňatek. Zanedlouho však Juliin bratranec Tybalt zabije Romeova přítele Merkucia a Romeo pomstí jeho smrt zabitím Tybalta. Za to je vykázán z Verony. Julie je nucena rodiči ke sňatku s Parisem. Vavřinec jí dá uspávací lektvar simulující smrt. Romeo nedostane včas dopis s vysvětlením a v hrobce v domnění, že je Julie mrtvá, vypije skutečný jed. Julie po probuzení spatří mrtvého Romea a probodne se jeho dýkou. Nad těly dětí uzavírají zdrcené rody smír.",
    historicalContext: {
      literaryContext: "Alžbětinské divadlo, evropská renesance a humanismus (důraz na svobodu člověka a právo na lásku).",
      authorContext: "William Shakespeare (1564–1616) – nejslavnější anglický dramatik a básník, spolumajitel divadla Globe v Londýně."
    }
  },

  // book-138: Kytice (Karel Jaromír Erben)
  "book-138": {
    bookId: "book-138",
    title: "Kytice z pověstí národních",
    author: "Karel Jaromír Erben",
    sources: [
      {
        name: "Rozbor-díla.cz – Kytice rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/kytice-rozbor-dila-k-maturite/"
      }
    ],
    generalInfo: {
      literaryKind: "Lyricko-epika",
      literaryGenre: "Sbírka balad (lidové folklorní balady)",
      literaryForm: "Poezie (veršovaná tvorba, vázaný rým)",
      timeAndSpace: "Venkovské a mytické prostředí české krajiny, časově neukotvené (bezčasí lidových mýtů)"
    },
    themeAndMotifs: {
      theme: "Morální odpovědnost člověka za své činy; konflikt lidského jednání se zákonitostmi přírody a osudu; nezvratnost viny a trestu.",
      motifs: "Vina a trest, mateřská láska, nadpřirozené bytosti (Polednice, Vodník), osudovost, pokání, smrt."
    },
    composition: {
      structure: "Sbírka 13 balad (původně 12 v 1. vydání z roku 1853, Lilie přidána do 2. vydání)",
      timeline: "Zrcadlová (symetrická) kompozice balad: Kytice x Věštkyně (národní téma), Poklad x Dceřina kletba (mateřská vina), Svatební košile x Vrba (proměna člověka a vztah k mrtvým), Polednice x Vodník (nadpřirozené bytosti v konfliktu s matkou), Zlatý kolovrat x Záhořovo lože (odpuštění a pokání), Štědrý den x Holoubek (osudovost a svědomí)."
    },
    characters: [
      {
        name: "Matka (Kytice, Poklad, Polednice)",
        role: "Klíčový archetyp",
        description: "Nositelka bezmezné lásky i lidské slabosti; její pochybení (např. chamtivost v Pokladu, hněv v Polednici) přináší tragédii."
      },
      {
        name: "Vodník",
        role: "Vládce vodní říše",
        description: "Bájná bytost jednající podle neúprosných přírodních zákonů; krutě trestá porušení slibu."
      },
      {
        name: "Polednice",
        role: "Nadpřirozená bytost",
        description: "Děsivé zjevení přivolané neuváženým mateřským klením v polední hodině."
      },
      {
        name: "Dívka (Svatební košile)",
        role: "Dívka toužící po milém",
        description: "Rouchá se Bohu kvůli stesku, ale hlubokou a pokornou modlitbou se zachrání před umrlcem."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Epika v er-formě, rychlý dramatický spád, úsporný děj s minimem popisů.",
      languageCharacteristics: "Baladický rytmus, zvukomalba (onomatopoie – např. 'Bouch, bouch, na dvéře: Otevři!'), refrény, archaismy a apostrofy."
    },
    summary: "Sbírka 13 balad vychází ze slovanského folkloru a mýtů. V jednotlivých básních jedinci překračují základní mravní řád (matka zapomene na dítě v touze po zlatě, neuváženě přivolá Polednici, dcera prokleje matku). Trest přichází nevyhnutelně, avšak tam, kde člověk projeví pokání a pokoru před Bohem a osudem (Svatební košile, Poklad, Záhořovo lože), je trest odpuštěn či zmírněn.",
    historicalContext: {
      literaryContext: "České národní obrození (3. etapa – romantismus a počátky realismu).",
      authorContext: "Karel Jaromír Erben (1811–1870) – básník, folklorista, historik, archivář města Prahy; sbíral lidové písně, pohádky a pověsti."
    }
  },

  // book-166: Malý princ (Antoine de Saint-Exupéry)
  "book-166": {
    bookId: "book-166",
    title: "Malý princ (Le Petit Prince)",
    author: "Antoine de Saint-Exupéry",
    sources: [
      {
        name: "Rozbor-díla.cz – Malý princ rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/maly-princ-rozbor-dila-k-maturite/"
      }
    ],
    generalInfo: {
      literaryKind: "Epika",
      literaryGenre: "Filosofická pohádka / alegorická novela",
      literaryForm: "Próza doplněná autorovými ilustracemi",
      timeAndSpace: "Saharaská poušť na Zemi a různé asteroidy ve vesmíru (asteroid B 612), 20. století"
    },
    themeAndMotifs: {
      theme: "Hledání smyslu života, pravého přátelství a lásky; kritika povrchnosti, chamtivosti a zaslepenosti dospělých.",
      motifs: "Růže, liška, beránek, baobaby, studna v poušti, hvězdy, had, ochočení, zodpovědnost."
    },
    composition: {
      structure: "Věnování Léonu Werthovi a 27 kapitol",
      timeline: "Rámcová a retrospektivní kompozice (pilot vypráví setkání po 6 letech; malý princ vzpomíná na svou pouť planetami)"
    },
    characters: [
      {
        name: "Malý princ",
        role: "Hlavní postava, dítě z asteroidu B 612",
        description: "Čistá, zvídavá a upřímná bytost ztělesňující dětskou nevinnost a schopnost vidět srdcem."
      },
      {
        name: "Pilot (vypravěč)",
        role: "Alter ego autora",
        description: "Dospělý, který si uchoval dětskou duši a porozumění; havaruje se svým letadlem v poušti."
      },
      {
        name: "Květina (Růže)",
        role: "Princova milovaná květina",
        description: "Marnivá, pyšná, ale křehká a zranitelná; princ k ní cítí hlubokou lásku a odpovědnost."
      },
      {
        name: "Liška",
        role: "Princova moudrá průvodkyně na Zemi",
        description: "Učí prince významu 'ochočení' (vytvoření pouta) a předává mu slavné moudro o srdci."
      },
      {
        name: "Obyvatelé asteroidů (Král, Domýšlivec, Pijan, Byznysmen, Lampář, Zeměpisec)",
        role: "Alegorie lidských nešvarů",
        description: "Zobrazují karikatury dospělého světa ustrnulého ve stereotypu, mamonu a touze po moci."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Ich-forma (pilot) střídající se s er-formou při vyprávění o princových cestách.",
      languageCharacteristics: "Jednoduchý, poetický a srozumitelný jazyk plný aforismů, metafor, personifikací a symboliky."
    },
    summary: "Pilot havaruje v saharské poušti s poškozeným letadlem. Zde se nečekaně setká s chlapcem – Malým princem, který přišel z malé planetky B 612. Princ pilotovi vypráví o svém domově, své pyšné růži a své cestě po dalších planetách, kde poznal nesmyslné chování dospělých. Na Zemi se princ setkává s liškou, která mu odhalí tajemství: 'Správně vidíme jen srdcem. Co je důležité, je očím neviditelné.' Princ pochopí svou zodpovědnost za růži a rozhodne se vrátit domů. Nechá se uštknout pouštním hadem, aby opustil své těžké tělo a mohl se vrátit ke své květině.",
    historicalContext: {
      literaryContext: "Světová meziválečná a válečná literatura 20. století, humanistická próza.",
      authorContext: "Antoine de Saint-Exupéry (1900–1944) – francouzský letec, spisovatel a aristokrat; dílo napsal během exilu v USA za 2. světové války."
    }
  },

  // book-201: Krysař (Viktor Dyk)
  "book-201": {
    bookId: "book-201",
    title: "Krysař",
    author: "Viktor Dyk",
    sources: [
      {
        name: "Rozbor-díla.cz – Krysař rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/krysar-rozbor-dila-k-maturite/"
      }
    ],
    generalInfo: {
      literaryKind: "Epika",
      literaryGenre: "Novela (novoromantická próza s prvky symbolismu)",
      literaryForm: "Próza",
      timeAndSpace: "Německé hanzovní město Hameln a hora Koppel, neurčený středověk"
    },
    themeAndMotifs: {
      theme: "Konflikt výjimečného a hrdého jedince s pokryteckou a materialistickou společností; pomsta za zradu slibu a ztrátu lásky.",
      motifs: "Kouzelná píšťala, krysy, peníze a lakomost konšelů, nešťastná láska (Agnes), propast Koppel, nevinné dítě, rybář Sepp Jörgen."
    },
    composition: {
      structure: "26 krátkých kapitol",
      timeline: "Chronologický postup s baladickou gradací"
    },
    characters: [
      {
        name: "Krysař",
        role: "Tajemný cizinec",
        description: "Osamělý samotář s kouzelnou píšťalou; ztělesňuje nezkrotnou hrdost, čest a vnitřní hloubku."
      },
      {
        name: "Agnes",
        role: "Krysařova milenka v Hameln",
        description: "Mladá žena milující Krysaře, která však otěhotní se svým bývalým milencem Kristiánem a v zoufalství zvolí smrt."
      },
      {
        name: "Konšelé (Stier a Frosch)",
        role: "Představitelé města Hameln",
        description: "Symbolizují lakotu, měšťácké pokrytectví a nedodržení daného slova."
      },
      {
        name: "Sepp Jörgen",
        role: "Chudý rybář",
        description: "Prostoduchý mladík, kterému vše dochází až druhý den; díky své opožděnosti unikne vábivému tónu píšťaly a zachrání opuštěné nemluvně."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Er-forma (vševědoucí vypravěč).",
      languageCharacteristics: "Úsečný a rytmizovaný styl, krátké věty, symbolismus, časté opakování motivů a náznaky."
    },
    summary: "Do saského města Hameln přichází tajemný Krysař. Svou píšťalou dokáže vyhnat z města všechny krysy. Konšelé mu však po splnění úkolu odmítnou vyplatit smluvenou odměnu sto rýnských. Krysař by město ušetřil kvůli lásce k dívce Agnes, ta však ze žalu nad svým hříchem a těhotenstvím s Kristiánem skočí do propasti na hoře Koppel. Zoufalý a pomstychtivý Krysař zaduje do píšťaly plným dechem a vábivým tónem odvede všechny obyvatele Hameln do propasti vstříc bájné zemi Sedmihradské. Katastrofu přežije jen prosťáček Sepp Jörgen, který v opuštěném městě najde plačící kojence a vydá se hledat ženu, která by mu dala napít mateřského mléka.",
    historicalContext: {
      literaryContext: "Česká moderna, generace anarchistických buřičů, novoromantismus a symbolismus počátku 20. století.",
      authorContext: "Viktor Dyk (1877–1931) – básník, dramatik, prozaik a politik národnědemokratické strany; dílo vyšlo původně v časopise Květy (1911–1912) a knižně roku 1915."
    }
  },

  // book-230: Bílá nemoc (Karel Čapek)
  "book-230": {
    bookId: "book-230",
    title: "Bílá nemoc",
    author: "Karel Čapek",
    sources: [
      {
        name: "Rozbor-díla.cz – Bílá nemoc rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/bila-nemoc-rozbor-dila-k-maturite/"
      }
    ],
    generalInfo: {
      literaryKind: "Drama",
      literaryGenre: "Protifašistická tragédie (divadelní hra o 3 dějstvích a 14 obrazech)",
      literaryForm: "Próza (scénický text)",
      timeAndSpace: "Neurčená fiktivní země připomínající meziválečné nacistické Německo / fašistickou diktaturu, 30. léta 20. století"
    },
    themeAndMotifs: {
      theme: "Varování před fašismem, fanatismem a rozpoutáním ničivé války; konflikt mezi morální povinností lékaře a politickou mocí diktátora; tragika osamoceného mírového odporu jedince proti davovému šílenství.",
      motifs: "Bílá nemoc (Čengova nemoc, lepra), bílá skvrna na těle, zázračný lék, maršál a zbrojení, fanatický dav, mír x válka."
    },
    composition: {
      structure: "3 jednání, rozděleno do 14 obrazů",
      timeline: "Chronologická kompozice s rychlou gradací napětí",
      dramaticStructure: "Expozice (propuknutí pandemie bílé nemoci mezi lidmi nad 45 let), Kolize (dr. Galén léčí pouze chudé a požaduje světový mír od mocných), Krize (onemocní zbrojař baron Krüg a posléze i samotný diktátor Maršál), Peripetie (Maršál pod nátlakem dcery souhlasí s mírem a volá Galéna), Katastrofa (Galén je cestou k Maršálovi ubit zfanatizovaným davem skandujícím pro válku a lék je zničen)."
    },
    characters: [
      {
        name: "Dr. Galén (Dětina)",
        role: "Mírumilovný lékař, nositel léku",
        description: "Laskavý, skromný a naivní lékař, který objevil sérum proti bílé nemoci; jako žák slavného Lilienthala pevně trvá na Hippokratově přísaze a odmítá léčit mocné, dokud nezastaví zbrojení."
      },
      {
        name: "Maršál",
        role: "Vůdce národa a vojenský diktátor",
        description: "Bezcitný, fanatický velitel, posedlý božským posláním vést svůj národ do války; zlomí se teprve, když sám objeví bílou skvrnu na prsou."
      },
      {
        name: "Baron Krüg",
        role: "Generální ředitel zbrojních závodů",
        description: "Hlavní dodavatel zbraní a Maršálův spojenec; po nákaze nemocí prosí Galéna o lék, a když Maršál odmítne mír, ze strachu před mučivou smrtí se zastřelí."
      },
      {
        name: "Dvorní rada prof. Dr. Sigelius",
        role: "Ředitel Lilienthalovy kliniky",
        description: "Kariéristický, ješitný lékař a přisluhovač režimu; záleží mu více na slávě kliniky a přízni mocných než na skutečné záchraně pacientů."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Přímé dramatické promluvy a živé dialogy charakterizující jednotlivé postavy; kontrasty mezi humanismem a militarismem.",
      languageCharacteristics: "Kultivovaný spisovný jazyk, rétorika diktátorských projevů, lékařská terminologie."
    },
    summary: "Svět zasáhne neznámá a nevyléčitelná epidemie tzv. bílé nemoci, která postihuje lidi nad 45 let. Chudý lékař dr. Galén objeví účinný lék, poskytuje ho však pouze nemajetným pacientům. Podmínkou pro vydání léku vládám je celosvětový slib trvalého míru a zastavení zbrojení. Vládce země, Maršál, připravuje expanzivní útočnou válku a odmítá podmínky přijmout. Když však onemocní šéf zbrojovky baron Krüg a následně i sám Maršál, situace se změní. Maršál pod vlivem dcery ustoupí a povolá Galéna. Galén spěchá s lékem do paláce, před branami se však střetne se zfanatizovaným válečným davem. Protože odmítne provolávat slávu válce, dav ho ubije a ampulky s lékem rozdupe. Válka začíná a lidstvo je odsouzeno k záhubě bílou nemocí.",
    historicalContext: {
      literaryContext: "Česká meziválečná dramatická tvorba 30. let, humanistický a protifašistický proud.",
      authorContext: "Karel Čapek (1890–1938) – drama napsal v roce 1937 v bezprostřední předzvěsti německé agrese a ohrožení Československa fašismem."
    }
  },
  // book-137: Máj (Karel Hynek Mácha)
  "book-137": {
    bookId: "book-137",
    title: "Máj",
    author: "Karel Hynek Mácha",
    sources: [
      {
        name: "Rozbor-díla.cz – Máj: rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/maj-rozbor-dila-k-maturite-8/"
      }
    ],
    generalInfo: {
      literaryKind: "Lyricko-epika",
      literaryGenre: "Romantická lyricko-epická báseň",
      literaryForm: "Veršovaná poezie",
      timeAndSpace: "Okolí jezera a hradu, česká krajina; děj se odehrává během několika dnů na začátku května."
    },
    themeAndMotifs: {
      theme: "Konflikt člověka se společností a osudem, vina, trest, láska, smrt a pomíjivost života.",
      motifs: "Májová příroda, jezero, měsíc, láska, žal, vězení, poprava, poutník a návrat."
    },
    composition: {
      structure: "Dedikace, předzpěv, čtyři zpěvy a dvě intermezza.",
      timeline: "Příběh Viléma je vyprávěn převážně chronologicky; rámec doplňuje závěrečný návrat poutníka.",
      dramaticStructure: "První zpěv představuje májovou krajinu a zprávu o Vilémově popravě; druhý zachycuje vězně před popravou; třetí líčí popravu a doznívající přírodní krásu; čtvrtý přináší návrat poutníka na místo tragédie."
    },
    characters: [
      {
        name: "Vilém",
        role: "Hlavní postava, vězeň odsouzený k popravě",
        description: "Romantický hrdina, který se bouří proti společnosti a prožívá zoufalství nad vlastním osudem. Zjišťuje, že zabil svůdce své milé, aniž věděl, že jde o jeho otce."
      },
      {
        name: "Jarmila",
        role: "Vilémova milá",
        description: "Mladá žena, která čeká na Viléma u jezera. Po zprávě o jeho činu a odsouzení se utopí."
      },
      {
        name: "Poutník",
        role: "Postava závěrečného rámce",
        description: "Vrací se po letech na místo tragédie a v závěru se ztotožňuje s básníkem."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Střídá se lyrický subjekt s epickým vyprávěním v er-formě; v závěru vystupuje poutník.",
      languageCharacteristics: "Bohatá obraznost, metafory, personifikace, kontrasty, zvukomalba, inverze a výrazná práce s rytmem a rýmem."
    },
    summary: "Jarmila čeká u jezera na Viléma, který se má vrátit. Dozví se však, že Vilém byl uvězněn a čeká ho poprava za vraždu muže, jenž svedl jeho milou. Vilém před smrtí vzpomíná na svůj život a přemýšlí o vině, osudu a pomíjivosti. Při popravě se ukáže, že zavražděný byl jeho otec, kterého Vilém nepoznal. Jarmila se utopí a po letech přichází na místo tragédie poutník, který si uvědomuje vlastní blízkost k Vilémovu osudu.",
    historicalContext: {
      literaryContext: "Český romantismus v době národního obrození. Dílo se odklání od vlastenecky a výchovně zaměřené literatury a klade důraz na individualitu, city, přírodu a tragického hrdinu.",
      authorContext: "Karel Hynek Mácha (1810–1836) byl básník a prozaik, nejvýraznější představitel českého romantismu. Máj vyšel roku 1836."
    }
  },
  // book-128: Zločin a trest (Fjodor Michajlovič Dostojevskij)
  "book-128": {
    bookId: "book-128",
    title: "Zločin a trest",
    author: "Fjodor Michajlovič Dostojevskij",
    sources: [
      {
        name: "Rozbor-díla.cz – Zločin a trest: rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/zlocin-a-trest-rozbor-dila-k-maturite-3/"
      }
    ],
    generalInfo: {
      literaryKind: "Epika",
      literaryGenre: "Psychologický a sociálně realistický román s kriminální zápletkou",
      literaryForm: "Próza",
      timeAndSpace: "Petrohrad ve druhé polovině 19. století; závěr se odehrává na Sibiři."
    },
    themeAndMotifs: {
      theme: "Vina a svědomí, hranice mezi dobrem a zlem, morální oprávněnost zločinu, chudoba a možnost vnitřní proměny člověka.",
      motifs: "Vražda, výčitky svědomí, nemoc, chudoba, alkoholismus, oběť, víra, trest a pokání."
    },
    composition: {
      structure: "Šest částí a epilog.",
      timeline: "Převážně chronologický děj, soustředěný na několik týdnů; epilog časově posouvá příběh na Sibiř.",
      dramaticStructure: "Děj sleduje přípravu a spáchání zločinu, následnou psychickou krizi hlavního hrdiny, vyšetřování, přiznání a jeho život ve vyhnanství."
    },
    characters: [
      {
        name: "Rodion Romanovič Raskolnikov",
        role: "Hlavní postava, bývalý student práv",
        description: "Chudý, hrdý a rozporuplný mladík, který si vytvoří teorii o výjimečných lidech stojících nad běžnými morálními pravidly. Po činu ho pronásledují pochybnosti a svědomí."
      },
      {
        name: "Soňa Marmeladovová",
        role: "Dcera Marmeladova, Raskolnikovova blízká osoba",
        description: "Soucitná, obětavá a hluboce věřící dívka, která se snaží pomáhat své rodině a vede Raskolnikova k přiznání."
      },
      {
        name: "Porfirij Petrovič",
        role: "Vyšetřovatel",
        description: "Všímavý a psychologicky zdatný vyšetřovatel, který se snaží odhalit Raskolnikovovu vinu především rozhovory a pozorováním."
      },
      {
        name: "Dmitrij Razumichin",
        role: "Raskolnikovův přítel",
        description: "Upřímný, energický a obětavý mladík, který hlavnímu hrdinovi pomáhá v době nemoci."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Vyprávění v er-formě s častým pronikáním do myšlenek a vnitřních monologů hlavní postavy.",
      languageCharacteristics: "Spisovný jazyk, dialogy, vnitřní monology, psychologické popisy a kontrasty mezi chudobou, morálkou a společenským postavením."
    },
    summary: "Bývalý student Raskolnikov žije v bídě a vytvoří si teorii, podle níž mají výjimeční lidé právo překračovat běžná morální pravidla. Rozhodne se zavraždit lichvářku, ale při činu zabije také její sestru. Přestože se snaží svůj čin rozumově ospravedlnit, propadá nemoci, úzkosti a výčitkám. Vyšetřovatel Porfirij postupně odhaluje rozpory v jeho chování. Raskolnikov se svěří Soně, která ho povzbuzuje k přiznání. Nakonec se udá a je poslán na nucené práce na Sibiř, kde začíná jeho postupná vnitřní proměna.",
    historicalContext: {
      literaryContext: "Ruský realismus druhé poloviny 19. století, zejména psychologický román a kritické zobrazení sociálních poměrů.",
      authorContext: "Fjodor Michajlovič Dostojevskij (1821–1881) byl ruský prozaik. Jeho tvorbu ovlivnily osobní zkušenosti s vězením a vyhnanstvím. Zločin a trest vycházel na pokračování v letech 1866–1867."
    }
  },
  // book-162: Proměna (Franz Kafka)
  "book-162": {
    bookId: "book-162",
    title: "Proměna",
    author: "Franz Kafka",
    sources: [
      {
        name: "Rozbor-díla.cz – Proměna: rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/promena-rozbor-dila-k-maturite-5/"
      }
    ],
    generalInfo: {
      literaryKind: "Epika",
      literaryGenre: "Novela s absurdními a fantastickými prvky",
      literaryForm: "Próza",
      timeAndSpace: "Převážně byt rodiny Samsových, neurčené město; počátek 20. století."
    },
    themeAndMotifs: {
      theme: "Odcizení člověka, osamělost, ztráta identity a podmíněnost rodinných vztahů užitečností a schopností vydělávat.",
      motifs: "Proměna, hmyz, rodina, práce, pokoj, jablko, zavřené dveře a izolace."
    },
    composition: {
      structure: "Tři části.",
      timeline: "Chronologické vyprávění v krátkém časovém úseku, od Gregorova probuzení až po jeho smrt a následnou reakci rodiny."
    },
    characters: [
      {
        name: "Řehoř Samsa",
        role: "Hlavní postava, obchodní cestující",
        description: "Zodpovědný a obětavý člověk, který živí rodinu. Po proměně v obrovský hmyz ztrácí možnost pracovat i běžně komunikovat s okolím."
      },
      {
        name: "Markéta Samsová",
        role: "Řehořova sestra",
        description: "Zpočátku se o bratra stará, postupně se však od něj citově vzdaluje a začne jeho přítomnost vnímat jako zátěž."
      },
      {
        name: "Otec Samsa",
        role: "Řehořův otec",
        description: "Po synově proměně znovu přebírá autoritu v rodině; jeho jednání je tvrdé a odmítavé."
      },
      {
        name: "Matka Samsová",
        role: "Řehořova matka",
        description: "Má k synovi citový vztah, ale zároveň se nedokáže vyrovnat s jeho novou podobou."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Er-forma, vypravěč sleduje dění převážně z perspektivy Řehoře.",
      languageCharacteristics: "Věcný, střízlivý a přesný jazyk kontrastuje s absurdní fantastickou událostí; významnou roli mají symboly a opakující se motivy."
    },
    summary: "Obchodní cestující Řehoř Samsa se jednoho rána probudí proměněný v obrovský hmyz. Zpočátku se více obává zmeškaného vlaku a reakce zaměstnavatele než samotné proměny. Rodina ho postupně uzavře v pokoji a jeho sestra se o něj nejprve stará. Jak se však Řehořův stav stává dlouhodobou zátěží, blízcí ho stále více odmítají. Po zranění a rostoucí izolaci Řehoř umírá. Rodina následně pocítí úlevu a začne plánovat novou budoucnost.",
    historicalContext: {
      literaryContext: "Moderní literatura počátku 20. století, často spojovaná s expresionismem a existenciálními tématy. Kafkova próza zachycuje absurditu, odcizení a bezmoc jednotlivce.",
      authorContext: "Franz Kafka (1883–1924) byl pražský německy píšící spisovatel. Proměna vyšla roku 1915."
    }
  },
  // book-133: Obraz Doriana Graye (Oscar Wilde)
  "book-133": {
    bookId: "book-133",
    title: "Obraz Doriana Graye",
    author: "Oscar Wilde",
    sources: [
      {
        name: "Rozbor-díla.cz – Obraz Doriana Graye: rozbor díla k maturitě",
        url: "https://rozbor-dila.cz/obraz-doriana-graye-rozbor-dila-k-maturite/"
      }
    ],
    generalInfo: {
      literaryKind: "Epika",
      literaryGenre: "Román s filozofickými a fantastickými prvky",
      literaryForm: "Próza",
      timeAndSpace: "Londýn na konci 19. století, zejména prostředí vyšší společnosti a Dorianův dům."
    },
    themeAndMotifs: {
      theme: "Konflikt krásy a morálky, vliv požitkářství, odpovědnost za vlastní činy a rozklad osobnosti.",
      motifs: "Portrét, mládí, krása, svědomí, pokušení, dvojí život, umění a čas."
    },
    composition: {
      structure: "Předmluva a dvacet kapitol.",
      timeline: "Převážně chronologický vývoj, který sleduje proměnu Dorianovy osobnosti v průběhu let."
    },
    characters: [
      {
        name: "Dorian Gray",
        role: "Hlavní postava",
        description: "Mimořádně krásný mladík, který si přeje zachovat věčné mládí. Zatímco jeho vzhled zůstává stejný, portrét zachycuje důsledky jeho činů a morálního úpadku."
      },
      {
        name: "Basil Hallward",
        role: "Malíř portrétu",
        description: "Citlivý a talentovaný umělec, který v Dorianovi vidí ideál krásy a nevinnosti."
      },
      {
        name: "Lord Henry Wotton",
        role: "Dorianův přítel a vlivný společník",
        description: "Ironický aristokrat, který Dorianovi předkládá názory zdůrazňující krásu, mládí a osobní požitek."
      },
      {
        name: "Sibyla Vaneová",
        role: "Mladá herečka",
        description: "Dorianova láska, jejíž osud je ovlivněn jeho povrchním hodnocením a krutým odmítnutím."
      }
    ],
    narratorAndStyle: {
      narrativeMethod: "Er-forma, převážně chronologické vyprávění s rozsáhlými dialogy.",
      languageCharacteristics: "Spisovný a kultivovaný jazyk, ironie, aforismy, kontrasty a symbolika portrétu."
    },
    summary: "Malíř Basil vytvoří portrét mladého Doriana Graye. Pod vlivem lorda Henryho si Dorian začne přát, aby zůstal navždy mladý a aby stárnul místo něj obraz. Jeho přání se naplní: Dorianův vzhled se nemění, zatímco portrét postupně odráží jeho sobeckost a špatné činy. Dorian vede dvojí život, odmítá odpovědnost a snaží se skrýt obraz před ostatními. Když se nakonec pokusí zničit portrét, zničí sám sebe; obraz se vrátí do původní krásy a Dorianovo tělo nese známky jeho skutečného věku a života.",
    historicalContext: {
      literaryContext: "Literatura konce 19. století, estetismus a dekadence. Dílo zároveň zkoumá napětí mezi společenskou morálkou, krásou a osobní svobodou.",
      authorContext: "Oscar Wilde (1854–1900) byl irský dramatik, prozaik a básník, známý vytříbeným stylem, paradoxem a ironií. Román vyšel knižně roku 1891."
    }
  },,

  // book-106: Hamlet (William Shakespeare)
  "book-106": {
    bookId: "book-106", title: "Hamlet", author: "William Shakespeare",
    sources: [{ name: "Rozbor-díla.cz – Hamlet, kralevic dánský", url: "https://rozbor-dila.cz/hamlet-rozbor-dila-k-maturite/" }],
    generalInfo: { literaryKind: "Drama", literaryGenre: "Tragédie", literaryForm: "Veršovaná i prozaická dramatická forma", timeAndSpace: "Dánský královský hrad Elsinor a jeho okolí; neurčená minulost." },
    themeAndMotifs: { theme: "Pomsta, vina, mocenské intriky a hledání pravdy; rozpor mezi morálním přesvědčením a nutností jednat.", motifs: "Duch zemřelého krále, divadlo, šílenství, jed, zrada, smrt a pomsta." },
    composition: { structure: "Pět dějství, členěných do scén.", timeline: "Převážně chronologický děj.", dramaticStructure: "Duch oznámí Hamletovi, že byl zavražděn Claudiem; Hamlet ověřuje jeho slova divadelní hrou, váhá s pomstou a intriky nakonec vedou k tragickému souboji." },
    characters: [
      { name: "Hamlet", role: "Dánský princ", description: "Vzdělaný a přemýšlivý mladík, který se snaží ověřit pravdu o otcově smrti a zápasí s pochybnostmi i odpovědností za pomstu." },
      { name: "Claudius", role: "Král, Hamletův strýc", description: "Touha po moci ho vede k vraždě bratra; svou vinu skrývá za zdánlivě vlídným vystupováním." },
      { name: "Gertruda", role: "Královna, Hamletova matka", description: "Po smrti manžela se provdá za Claudia; nerozumí plně synovu odporu a jeho jednání." },
      { name: "Ofélie", role: "Poloniova dcera", description: "Citlivá mladá žena, která se ocitá mezi poslušností vůči rodině a city k Hamletovi." },
      { name: "Horacio", role: "Hamletův přítel", description: "Věrný a rozvážný Hamletův důvěrník." }
    ],
    narratorAndStyle: { narrativeMethod: "Dramatický text bez vypravěče; děj tvoří dialogy, monology a scénické poznámky.", languageCharacteristics: "Blankvers, metafory, slovní hříčky, kontrasty a filozofické monology." },
    summary: "Po smrti dánského krále se vlády ujme jeho bratr Claudius a ožení se s vdovou Gertrudou. Hamletovi se zjeví duch otce a sdělí mu, že ho Claudius zavraždil. Hamlet se snaží získat jistotu a nechá sehrát hru, která napodobuje vraždu. Claudiova reakce jeho podezření potvrdí, ale Hamlet stále váhá. Série nedorozumění a intrik vyústí v souboj, při němž umírá většina hlavních postav včetně Hamleta.",
    historicalContext: { literaryContext: "Anglická renesance a humanismus; alžbětinské drama přebírá antické i středověké náměty a rozvíjí psychologicky složité postavy.", authorContext: "William Shakespeare (1564–1616), anglický dramatik a básník. Hamlet vznikl kolem let 1600–1601." }
  },

  // book-113: Lakomec (Molière)
  "book-113": {
    bookId: "book-113", title: "Lakomec", author: "Molière",
    sources: [{ name: "Rozbor-díla.cz – Lakomec", url: "https://rozbor-dila.cz/lakomec-rozbor-dila-k-maturite-10/" }],
    generalInfo: { literaryKind: "Drama", literaryGenre: "Klasicistní komedie, satira", literaryForm: "Próza", timeAndSpace: "Měšťanský dům ve Francii, prostředí 17. století." },
    themeAndMotifs: { theme: "Kritika chorobné lakoty a situace, kdy majetek převáží nad rodinnými vztahy a láskou.", motifs: "Peníze, ukrytá pokladnice, sňatek z rozumu, rodinné spory, přetvářka." },
    composition: { structure: "Pět dějství.", timeline: "Chronologický děj během krátkého časového úseku.", dramaticStructure: "Harpagon chce výhodně provdat děti a sám se oženit; milostné vztahy mladých se střetnou s jeho majetnickými plány, které vyvrcholí ztrátou pokladnice." },
    characters: [
      { name: "Harpagon", role: "Hlavní postava, bohatý měšťan", description: "Podezíravý a posedlý šetřením; peníze jsou pro něj důležitější než štěstí vlastních dětí." },
      { name: "Kleant", role: "Harpagonův syn", description: "Miluje Marianu a odmítá otcovy plány na jeho sňatek." },
      { name: "Eliška", role: "Harpagonova dcera", description: "Miluje Valéra a přeje si rozhodovat o svém životě." },
      { name: "Valér", role: "Správce v Harpagonově domě", description: "Vydává se za sluhu, aby mohl být nablízku Elišce." },
      { name: "Mariana", role: "Kleantova milá", description: "Skromná mladá žena, kterou si chce Harpagon vzít." }
    ],
    narratorAndStyle: { narrativeMethod: "Dramatický text tvořený dialogy a monology.", languageCharacteristics: "Spisovná próza, komické situace, nadsázka, ironie a charakterizační dialogy." },
    summary: "Harpagon hromadí peníze a snaží se ovládat i sňatky svých dětí. Syn Kleant miluje Marianu, kterou si však chce vzít sám Harpagon; dcera Eliška miluje Valéra. Když Harpagon zjistí, že mu zmizela pokladnice, propadne zoufalství a podezírá okolí. Nakonec se odhalí rodinné vazby Valéra a Mariany a mladí mohou uzavřít sňatky podle svého přání. Harpagon souhlasí hlavně proto, že získá zpět své peníze.",
    historicalContext: { literaryContext: "Francouzský klasicismus 17. století, který klade důraz na řád, rozum a mravní poučení; komedie zesměšňuje lidské slabosti.", authorContext: "Molière (1622–1673), francouzský dramatik a herec. Lakomec měl premiéru roku 1668." }
  },

  // book-156: Na západní frontě klid (Erich Maria Remarque)
  "book-156": {
    bookId: "book-156", title: "Na západní frontě klid", author: "Erich Maria Remarque",
    sources: [{ name: "Rozbor-díla.cz – Na západní frontě klid", url: "https://rozbor-dila.cz/na-zapadni-fronte-klid-rozbor-dila-k-maturite-3/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Protiválečný román", literaryForm: "Próza", timeAndSpace: "Západní fronta první světové války, především Francie; také Německo." },
    themeAndMotifs: { theme: "Nesmyslnost války a její ničivý dopad na mladou generaci; ztráta iluzí, domova a schopnosti vrátit se do běžného života.", motifs: "Fronta, zákopy, přátelství, strach, smrt, domov, generace ztracená válkou." },
    composition: { structure: "Dvanáct kapitol.", timeline: "Převážně chronologické vyprávění s retrospektivními vzpomínkami.", dramaticStructure: "Sledujeme Pavla Bäumera a jeho spolužáky od vojenského výcviku přes frontové zkušenosti až k postupnému zániku jejich skupiny." },
    characters: [
      { name: "Paul Bäumer", role: "Vypravěč a hlavní postava", description: "Mladý německý voják, který postupně ztrácí představy o hrdinství a poznává válku jako každodenní boj o přežití." },
      { name: "Stanislaus Katczinsky (Kat)", role: "Zkušený voják a Paulův přítel", description: "Praktický, vynalézavý a starostlivý muž, který pomáhá mladším vojákům." },
      { name: "Albert Kropp", role: "Paulův spolužák", description: "Přemýšlivý voják, jeden z Paulových nejbližších přátel." },
      { name: "Kantorek", role: "Bývalý učitel", description: "Svým vlasteneckým přesvědčováním přispěl k tomu, že se studenti dobrovolně přihlásili do armády." }
    ],
    narratorAndStyle: { narrativeMethod: "Ich-forma, vyprávění z pohledu Paula Bäumera.", languageCharacteristics: "Věcný a místy hovorový jazyk, dialogy, vnitřní úvahy a dokumentárně působící popisy." },
    summary: "Student Paul Bäumer narukuje se spolužáky do první světové války, k čemuž je povzbudil jejich učitel. Vojenský výcvik a fronta rychle zničí jejich představy o vlastenectví a hrdinství. Paul zažívá ztráty přátel, krátký návrat domů i stále hlubší odcizení civilnímu životu. Jeho generace přichází o mládí a budoucnost. Na konci války Paul umírá v den, kdy vojenské hlášení stručně oznámí, že na západní frontě byl klid.",
    historicalContext: { literaryContext: "Světová literatura po první světové válce; protiválečná próza a literatura ztracené generace.", authorContext: "Erich Maria Remarque (1898–1970), německý spisovatel a účastník první světové války. Román vyšel roku 1929." }
  },

  // book-159: Stařec a moře (Ernest Hemingway)
  "book-159": {
    bookId: "book-159", title: "Stařec a moře", author: "Ernest Hemingway",
    sources: [{ name: "Rozbor-díla.cz – Stařec a moře", url: "https://rozbor-dila.cz/starec-a-more-rozbor-dila-k-maturite-2/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Novela s alegorickými prvky", literaryForm: "Próza", timeAndSpace: "Karibské moře a kubánská rybářská vesnice; 20. století." },
    themeAndMotifs: { theme: "Vytrvalost, důstojnost člověka a zápas s přírodou i vlastními hranicemi; smysl úsilí i tehdy, když výsledek není podle očekávání.", motifs: "Moře, ryba, rybolov, samota, chlapec, žraloci, sny o lvech." },
    composition: { structure: "Souvislý text členěný do kapitolových odstavců.", timeline: "Lineární, převážně chronologický děj.", dramaticStructure: "Starý rybář vypluje daleko na moře, po dlouhém zápase uloví obrovského marlina a při návratu o něj postupně přichází." },
    characters: [
      { name: "Santiago", role: "Starý kubánský rybář", description: "Zkušený, skromný a vytrvalý muž, který se odmítá vzdát navzdory únavě a nepřízni okolností." },
      { name: "Manolin", role: "Mladý rybářův pomocník", description: "Chlapec, který má Santiaga rád, váží si ho a zůstává mu věrný i přes neúspěšný lov." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma s těsným zaměřením na Santiagovo vnímání; časté vnitřní promluvy.", languageCharacteristics: "Jednoduchý, úsporný jazyk, krátké věty, dialogy a symbolické obrazy." },
    summary: "Starý rybář Santiago už dlouho nic neulovil a ostatní ho považují za nešťastného. Vypluje proto daleko od pobřeží, kde se na jeho udici chytí obrovský marlin. Následuje vyčerpávající několikadenní zápas, během něhož Santiago k rybě získá respekt. Nakonec ji přiváže k loďce a vydá se zpět. Její krev však přiláká žraloky, kteří z úlovku postupně nechají jen kostru. Santiago se vrací vyčerpaný, ale jeho vytrvalost a důstojnost zůstávají nedotčené.",
    historicalContext: { literaryContext: "Americká poválečná próza; novela bývá spojována s Hemingwayovým úsporným stylem a principem ledovce.", authorContext: "Ernest Hemingway (1899–1961), americký spisovatel a nositel Nobelovy ceny za literaturu. Stařec a moře vyšel roku 1952." }
  },

  // book-160: O myších a lidech (John Steinbeck)
  "book-160": {
    bookId: "book-160", title: "O myších a lidech", author: "John Steinbeck",
    sources: [{ name: "Maturita jinak – O myších a lidech", url: "https://www.maturitajinak.cz/wp-content/uploads/2024/10/O-mysich-a-lidech.pdf" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Novela", literaryForm: "Próza", timeAndSpace: "Kalifornský venkov poblíž města Soledad během velké hospodářské krize ve 30. letech 20. století." },
    themeAndMotifs: { theme: "Přátelství, osamělost, lidské sny a jejich střet s tvrdou realitou; zranitelnost lidí na okraji společnosti.", motifs: "Společný sen o farmě, práce na ranči, samota, síla a slabost, zvířata, přátelství." },
    composition: { structure: "Šest kapitol bez názvů.", timeline: "Chronologický děj s krátkými retrospektivními zmínkami.", dramaticStructure: "George a Lennie přicházejí za prací na ranč; jejich sen o vlastním hospodářství se postupně přibližuje a následně tragicky zhroutí." },
    characters: [
      { name: "George Milton", role: "Jeden z hlavních hrdinů", description: "Drobný, pohotový a zodpovědný muž, který se stará o Lennieho a sdílí s ním sen o vlastním hospodářství." },
      { name: "Lennie Small", role: "Jeden z hlavních hrdinů", description: "Fyzicky silný muž s mentálním postižením, který má rád hebké věci, ale nedokáže vždy odhadnout vlastní sílu." },
      { name: "Candy", role: "Starý rančer", description: "Osamělý muž s handicapem, který se chce připojit k plánu na společnou farmu." },
      { name: "Curleyho žena", role: "Žena vedoucího ranče", description: "Nejmenovaná mladá žena, která touží po pozornosti a uniká ze svého osamělého života." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vypravěč sleduje dění zvenčí; důležitou roli mají dialogy.", languageCharacteristics: "Jednoduchý, místy hovorový jazyk, realistické dialogy a úsporné popisy." },
    summary: "George a Lennie putují Kalifornií a hledají práci na farmách. Přestože jsou povahově velmi odlišní, drží spolu a sní o tom, že si jednou koupí vlastní malý statek. Na novém ranči se k jejich plánu chce připojit i starý Candy. Lennie však kvůli své síle a neschopnosti odhadnout následky způsobí tragickou událost. George se musí rozhodnout, jak svého přítele ochránit před krutým davem, a jejich společný sen se rozpadá.",
    historicalContext: { literaryContext: "Americký realismus 20. století; sociálně kritická próza reagující na velkou hospodářskou krizi.", authorContext: "John Steinbeck (1902–1968), americký spisovatel a nositel Nobelovy ceny. Novela vyšla roku 1937." }
  },

  // book-171: 1984 (George Orwell)
  "book-171": {
    bookId: "book-171", title: "1984", author: "George Orwell",
    sources: [{ name: "Píšem.cz – 1984: rozbor díla k maturitě", url: "https://www.pisem.cz/1984-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Antiutopický (dystopický) román s prvky politické satiry", literaryForm: "Próza", timeAndSpace: "Londýn v Oceánii, jedné ze tří totalitních velmocí; děj je zasazen do fiktivního roku 1984." },
    themeAndMotifs: { theme: "Varování před totalitní mocí, manipulací pravdy, dohledem nad jednotlivcem a ovládáním myšlení.", motifs: "Velký bratr, všudypřítomný dohled, newspeak, doublethink, přepisování minulosti, zákaz soukromí." },
    composition: { structure: "Tři části a dodatek o principech newspeaku.", timeline: "Převážně chronologický děj sledující několik měsíců Winstonova života.", dramaticStructure: "Winston nejprve tajně odporuje režimu, naváže vztah s Julií, uvěří falešné naději na odboj a nakonec je zatčen a zlomen." },
    characters: [
      { name: "Winston Smith", role: "Hlavní postava", description: "Úředník Ministerstva pravdy, který si uchovává vzpomínky na minulost a touží po svobodném myšlení." },
      { name: "Julia", role: "Winstonova partnerka", description: "Mladá žena, která se proti režimu bouří spíše osobním a praktickým odporem než politickými úvahami." },
      { name: "O'Brien", role: "Vysoce postavený člen Strany", description: "Inteligentní a manipulativní představitel režimu, který předstírá spojenectví s Winstonem." },
      { name: "Velký bratr", role: "Symbol a tvář Strany", description: "Všudypřítomná autorita zobrazovaná na plakátech a obrazovkách; zosobňuje moc režimu." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vyprávění je omezeno převážně na Winstonovu perspektivu.", languageCharacteristics: "Věcný, úsporný jazyk, politická terminologie, ironie a významotvorné slogany." },
    summary: "Winston Smith žije ve státě, kde Strana kontroluje informace, minulost i soukromý život obyvatel. Pracuje na přepisování starých zpráv, ale tajně pochybuje o oficiální pravdě a začne si vést deník. Naváže vztah s Julií a oba se pokusí najít cestu k odboji. Důvěra v O'Briena se ukáže jako past. Winston je zatčen, podroben nátlaku a nakonec přijme myšlení Strany i jejího vůdce.",
    historicalContext: { literaryContext: "Poválečná literatura reagující na zkušenost nacistické a stalinské totality; antiutopie navazuje mimo jiné na Huxleyho a Zamjatina.", authorContext: "George Orwell (1903–1950), britský spisovatel a novinář. Román Nineteen Eighty-Four vyšel roku 1949." }
  },

  // book-172: Farma zvířat (George Orwell)
  "book-172": {
    bookId: "book-172", title: "Farma zvířat", author: "George Orwell",
    sources: [{ name: "Píšem.cz – Farma zvířat: rozbor díla k maturitě", url: "https://www.pisem.cz/farma-zvirat-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Alegorická novela, bajka a politická satira", literaryForm: "Próza", timeAndSpace: "Panská farma v Anglii, neurčená doba 20. století." },
    themeAndMotifs: { theme: "Zneužití revoluce a ideálů rovnosti; proměna osvobozeneckého hnutí v novou diktaturu.", motifs: "Vzpoura, přikázání, propaganda, práce, moc, strach, zrada a přepisování pravidel." },
    composition: { structure: "Deset kapitol.", timeline: "Chronologický děj zachycující vývoj farmy od vzpoury po upevnění vlády prasat.", dramaticStructure: "Zvířata vyženou majitele, vytvoří vlastní řád, ale prasata postupně soustředí moc a začnou napodobovat lidi." },
    characters: [
      { name: "Napoleon", role: "Prase, které převezme vedení", description: "Mocichtivý a bezohledný vůdce, který si pomocí psů a propagandy upevní diktaturu." },
      { name: "Kuliš", role: "Prase a Napoleonův soupeř", description: "Schopný organizátor, který prosazuje plány na modernizaci farmy; Napoleon ho vyžene." },
      { name: "Pištík", role: "Mluvčí prasat", description: "Manipuluje ostatními zvířaty a ospravedlňuje změny pravidel." },
      { name: "Boxer", role: "Pracovitý kůň", description: "Oddaný a obětavý pracovník, jehož důvěřivost a síla jsou zneužity." },
      { name: "Starý Major", role: "Prase, které inspiruje vzpouru", description: "Představí zvířatům myšlenku osvobození od lidského útlaku." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vypravěč sleduje zvířata a dění na farmě.", languageCharacteristics: "Jednoduchý, srozumitelný jazyk, alegorie, ironie, opakování hesel a bajkové prvky." },
    summary: "Zvířata na farmě se vzbouří proti majiteli Jonesovi a převezmou hospodářství. Zpočátku chtějí vytvořit spravedlivé společenství, v němž budou mít všichni stejná práva. Prasata však postupně získávají výhody a moc, přepisují původní pravidla a ostatní zvířata ovládají propagandou a strachem. Napoleon se stane diktátorem a prasata se začnou podobat lidem, proti nimž se původně vzbouřila.",
    historicalContext: { literaryContext: "Politická alegorie a antiutopie 20. století; novela kritizuje stalinskou diktaturu a zradu revolučních ideálů.", authorContext: "George Orwell (1903–1950), britský spisovatel. Farma zvířat vyšla roku 1945." }
  },

  // book-123: Pýcha a předsudek (Jane Austenová)
  "book-123": {
    bookId: "book-123", title: "Pýcha a předsudek", author: "Jane Austenová",
    sources: [{ name: "Píšem.cz – Pýcha a předsudek: rozbor díla k maturitě", url: "https://www.pisem.cz/pycha-a-predsudek-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Společenský román s milostnou zápletkou", literaryForm: "Próza", timeAndSpace: "Anglický venkov a menší města na přelomu 18. a 19. století." },
    themeAndMotifs: { theme: "Překonávání předsudků a společenských očekávání při hledání lásky a osobního štěstí.", motifs: "Manželství, společenské postavení, peníze, rodina, pověst, první dojem a ironie." },
    composition: { structure: "Tři díly, celkem 61 kapitol.", timeline: "Převážně chronologický děj v průběhu přibližně jednoho roku.", dramaticStructure: "Elizabeth si vytvoří mylný názor na Darcyho, postupně poznává okolnosti jeho jednání a oba hrdinové přehodnocují své postoje." },
    characters: [
      { name: "Elizabeth Bennetová", role: "Hlavní postava", description: "Bystrá, vtipná a samostatná mladá žena, která si cení osobní integrity, ale někdy příliš důvěřuje prvnímu dojmu." },
      { name: "Fitzwilliam Darcy", role: "Elizabethin protějšek", description: "Bohatý a zpočátku odměřený muž, jehož hrdost zakrývá citlivost a schopnost změny." },
      { name: "Jane Bennetová", role: "Elizabethina starší sestra", description: "Laskavá a důvěřivá dívka, která se zamiluje do Bingleyho." },
      { name: "Paní Bennetová", role: "Matka pěti dcer", description: "Soustředí se na výhodné sňatky svých dcer a často jedná zbrkle." },
      { name: "Pan Collins", role: "Příbuzný rodiny", description: "Samolibý duchovní, který se uchází o Elizabeth a později si vezme Charlotte." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma s častým zaměřením na Elizabeth a s prvky volné nepřímé řeči.", languageCharacteristics: "Ironie, společenský humor, kultivované dialogy a přesná charakterizace postav." },
    summary: "Rodina Bennetových má pět dcer a jejich budoucnost závisí na výhodných sňatcích. Elizabeth se setkává s bohatým panem Darcym, kterého kvůli jeho chování považuje za pyšného a nesympatického. Zároveň uvěří pomluvám o jeho minulosti. Postupně však poznává skutečné okolnosti a uvědomuje si vlastní předsudky. Darcy zase překonává svou společenskou pýchu. Po řadě nedorozumění a rodinných komplikací se oba rozhodnou pro společnou budoucnost.",
    historicalContext: { literaryContext: "Anglický román přelomu 18. a 19. století; Austenová předjímá realistické zobrazování společnosti a mezilidských vztahů.", authorContext: "Jane Austenová (1775–1817), anglická prozaička. Pýcha a předsudek vyšla anonymně roku 1813." }
  },

  // book-157: Petr a Lucie (Romain Rolland)
  "book-157": {
    bookId: "book-157", title: "Petr a Lucie", author: "Romain Rolland",
    sources: [{ name: "Píšem.cz – Petr a Lucie: rozbor díla k maturitě", url: "https://www.pisem.cz/petr-a-lucie-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Protiválečná novela s milostným námětem", literaryForm: "Próza", timeAndSpace: "Paříž během první světové války, od ledna do března 1918." },
    themeAndMotifs: { theme: "Láska a touha po obyčejném životě v kontrastu s válkou a ohrožením.", motifs: "Nálet, metro, setkání, umění, jaro, kostel, Velký pátek a smrt." },
    composition: { structure: "Krátké kapitoly, souvislý děj.", timeline: "Chronologický děj od seznámení hlavních postav po tragický závěr.", dramaticStructure: "Petr a Lucie se náhodně setkají během náletu, zamilují se a vytvářejí si vlastní svět, který přeruší válečná katastrofa." },
    characters: [
      { name: "Petr Aubier", role: "Hlavní postava", description: "Mladík z měšťanské rodiny, který se v době války snaží najít smysl života a únik od očekávání okolí." },
      { name: "Lucie", role: "Hlavní postava", description: "Chudá mladá žena, která se živí kopírováním obrazů a Petrovi přináší blízkost a naději." },
      { name: "Filip", role: "Petrův starší bratr", description: "Voják, jehož zkušenosti a postoje představují jiný pohled na válku." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vypravěč sleduje především Petra a Lucii.", languageCharacteristics: "Citový, lyrizovaný jazyk, kontrast intimních okamžiků s válečnou realitou a symbolické motivy." },
    summary: "Petr a Lucie se náhodně setkají v pařížském metru během leteckého náletu. Postupně se do sebe zamilují a během několika týdnů si vytvářejí prostor, v němž mohou zapomenout na válku. Petr pochází z měšťanské rodiny a Lucie žije skromně, jejich vztah však překonává společenské rozdíly. Na Velký pátek roku 1918 se spolu uchýlí do kostela Saint-Gervais, který zasáhne granát. Jejich krátké štěstí končí tragicky.",
    historicalContext: { literaryContext: "Protiválečná literatura reagující na první světovou válku; důraz na lidskost, pacifismus a utrpení civilistů.", authorContext: "Romain Rolland (1866–1944), francouzský spisovatel a nositel Nobelovy ceny za literaturu za rok 1915. Novela vyšla roku 1920." }
  },

  // book-119: Bídníci (Victor Hugo)
  "book-119": {
    bookId: "book-119", title: "Bídníci", author: "Victor Hugo",
    sources: [{ name: "Píšem.cz – Bídníci: rozbor díla k maturitě", url: "https://www.pisem.cz/bidnici-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Sociální, historický a filozofický román", literaryForm: "Próza", timeAndSpace: "Francie, zejména město Paříž; první polovina 19. století." },
    themeAndMotifs: { theme: "Sociální nespravedlnost, chudoba, milosrdenství, vykoupení a možnost člověka změnit svůj život.", motifs: "Galeje, chudoba, zákon a spravedlnost, revoluce, oběť, rodina a soucit." },
    composition: { structure: "Pět dílů rozdělených do knih a kapitol.", timeline: "Převážně chronologický děj s rozsáhlými odbočkami a historickými úvahami.", dramaticStructure: "Jean Valjean se po propuštění z galejí snaží začít nový život; pronásleduje ho Javert, zatímco Valjean chrání Cosettu a hledá možnost dobra." },
    characters: [
      { name: "Jean Valjean", role: "Hlavní postava", description: "Bývalý galejník, který se díky biskupovu milosrdenství promění v člověka usilujícího o dobro." },
      { name: "Javert", role: "Policejní inspektor", description: "Neústupně věří v zákon a nedokáže přijmout, že se člověk může skutečně změnit." },
      { name: "Fantina", role: "Cosettina matka", description: "Chudá žena, která se snaží zajistit dceři lepší život a doplácí na společenské předsudky." },
      { name: "Cosetta", role: "Fantinina dcera", description: "Dívka, kterou Valjean zachrání od krutého zacházení a vychová ji." },
      { name: "Marius", role: "Mladý revolucionář", description: "Zamiluje se do Cosetty a účastní se pařížského povstání." }
    ],
    narratorAndStyle: { narrativeMethod: "Vševědoucí vypravěč v er-formě, který děj doplňuje komentáři a historickými úvahami.", languageCharacteristics: "Romantická obraznost, kontrasty, patos, rozsáhlé popisy a společenská kritika." },
    summary: "Jean Valjean je po letech propuštěn z galejí, ale společnost ho kvůli minulosti odmítá. Setkání s biskupem, který mu projeví nečekané milosrdenství, ho přiměje změnit život. Pod novou identitou se stane váženým mužem, přesto ho pronásleduje inspektor Javert. Valjean se ujme malé Cosetty, dcery Fantiny, a snaží se jí zajistit bezpečí. V Paříži se jejich osudy protnou s mladými revolucionáři a Mariem. Román ukazuje, jak chudoba, předsudky a nespravedlivé zákony ovlivňují lidské životy.",
    historicalContext: { literaryContext: "Francouzský romantismus 19. století s výraznými realistickými a sociálně kritickými prvky.", authorContext: "Victor Hugo (1802–1885), francouzský básník, dramatik a prozaik. Bídníci vyšli roku 1862." }
  }

}

// Pomocná funkce pro získání rozboru podle ID knihy
export function getRozborByBookId(bookId) {
  if (!bookId) return null
  return maturitaRozbory[bookId] || null
}

// Pomocná funkce pro ověření, zda kniha má dostupný rozbor
export function hasRozbor(bookId) {
  return Boolean(maturitaRozbory[bookId])
}
