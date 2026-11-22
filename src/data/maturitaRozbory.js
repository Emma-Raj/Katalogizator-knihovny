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
  },
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
,

  // book-161: Proces (Franz Kafka)
  "book-161": {
    bookId: "book-161", title: "Proces", author: "Franz Kafka",
    sources: [{ name: "Píšem.cz – Proces: rozbor díla k maturitě", url: "https://www.pisem.cz/proces-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Modernistický a existenciální román", literaryForm: "Próza", timeAndSpace: "Neurčené město, převážně městské interiéry; počátek 20. století." },
    themeAndMotifs: { theme: "Bezmoc jednotlivce před nepochopitelnou mocí, vina, odcizení a nemožnost dobrat se spravedlnosti.", motifs: "Soud, zatčení, byrokracie, labyrint, úzkost, dveře a překážky, autorita." },
    composition: { structure: "Nedokončený román; posmrtně vydané členění do kapitol a fragmentů sestavil Max Brod.", timeline: "Převážně chronologický rámec přibližně jednoho roku, s epizodami a nedokončenými částmi.", dramaticStructure: "Josef K. je zatčen bez vysvětlení, marně hledá pravidla procesu a pomoc, až je nakonec popraven." },
    characters: [
      { name: "Josef K.", role: "Hlavní postava", description: "Bankovní prokurista, který se snaží zachovat sebejistotu, ale postupně ho proces zcela pohltí." },
      { name: "Advokát Huld", role: "Obhájce", description: "Nemocný a vlivný právník, jehož pomoc je neúčinná a klienty spíše udržuje v závislosti." },
      { name: "Leni", role: "Huldova ošetřovatelka", description: "Žena, která se sblíží s Josefem K. a nabízí mu další nejasnou cestu k soudu." },
      { name: "Titorelli", role: "Soudní malíř", description: "Zná prostředí soudu a vysvětluje K. možnosti, které však nevedou ke skutečnému osvobození." },
      { name: "Vězeňský kaplan", role: "Duchovní", description: "Vypráví K. podobenství Před zákonem a zpochybňuje jeho porozumění vlastní situaci." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma s perspektivou omezenou převážně na Josefa K.", languageCharacteristics: "Věcný, střízlivý jazyk, přesné popisy absurdních situací, symbolika a groteskní prvky." },
    summary: "Josef K. je jednoho rána zatčen, přestože mu nikdo nesdělí, z čeho je obviněn. Může dál chodit do práce, ale postupně se stále více zabývá soudem, jehož pravidlům nerozumí. Navštěvuje výslechy, obrací se na advokáta i další osoby, avšak žádná pomoc nevede k vyřešení případu. Soudní moc proniká do běžného života a K. ztrácí jistotu. V předvečer svých jednatřicátých narozenin ho dva muži odvedou za město a popraví.",
    historicalContext: { literaryContext: "Pražská německy psaná literatura a evropský modernismus počátku 20. století; dílo bývá spojováno s existencialismem a absurdní prózou.", authorContext: "Franz Kafka (1883–1924), pražský německy píšící spisovatel. Román vznikal v letech 1914–1915 a vyšel posmrtně roku 1925 zásluhou Maxe Broda." }
  },

  // book-168: Velký Gatsby (F. Scott Fitzgerald)
  "book-168": {
    bookId: "book-168", title: "Velký Gatsby", author: "Francis Scott Fitzgerald",
    sources: [{ name: "Píšem.cz – Velký Gatsby: rozbor díla k maturitě", url: "https://www.pisem.cz/velky-gatsby-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Společenský román s tragickým milostným příběhem", literaryForm: "Próza", timeAndSpace: "Long Island a New York, léto roku 1922, období jazzového věku." },
    themeAndMotifs: { theme: "Nedosažitelnost amerického snu, iluze bohatství, společenské rozdíly a touha vrátit minulost.", motifs: "Zelené světlo, večírky, peníze, automobil, údolí popela, minulost a společenská přetvářka." },
    composition: { structure: "Devět kapitol.", timeline: "Převážně chronologické vyprávění jednoho léta, doplněné vzpomínkami na Gatsbyho minulost.", dramaticStructure: "Nick poznává Gatsbyho, odhaluje jeho minulost a vztah k Daisy; střet mezi Gatsbyho snem a realitou končí tragicky." },
    characters: [
      { name: "Jay Gatsby", role: "Ústřední postava", description: "Zámožný muž, který si vybudoval novou identitu a pořádá večírky v naději, že získá zpět Daisy." },
      { name: "Nick Carraway", role: "Vypravěč a svědek", description: "Gatsbyho soused, který události pozoruje a postupně poznává prázdnotu vyšší společnosti." },
      { name: "Daisy Buchananová", role: "Gatsbyho dávná láska", description: "Půvabná, nerozhodná žena, která zůstává svázána pohodlím a společenským postavením." },
      { name: "Tom Buchanan", role: "Daisyin manžel", description: "Bohatý a arogantní muž, který si nárokuje moc a kontrolu nad ostatními." },
      { name: "Jordan Bakerová", role: "Nickova známá", description: "Golfistka a Daisyina přítelkyně, která zprostředkuje část Gatsbyho minulosti." }
    ],
    narratorAndStyle: { narrativeMethod: "Ich-forma; vypravěčem je Nick Carraway jako účastník a svědek událostí.", languageCharacteristics: "Lyrické a obrazné popisy, symbolika, kontrasty a ironie." },
    summary: "Nick Carraway se přestěhuje na Long Island, kde se seznámí se svým záhadně bohatým sousedem Jayem Gatsbym. Gatsby pořádá velkolepé večírky, ale ve skutečnosti touží znovu navázat vztah s Daisy, kterou miloval před válkou. Nick pomůže jejich setkání a oba obnoví blízkost. Gatsbyho představa, že lze vrátit minulost, však narazí na skutečnost. Po vyhroceném konfliktu dojde k tragické nehodě a Gatsby se stane obětí pomsty. Jeho pohřbu se účastní jen málokdo z lidí, kteří dříve využívali jeho pohostinnost.",
    historicalContext: { literaryContext: "Americká moderní próza 20. let 20. století, ztracená generace a jazzový věk; kritika konzumní společnosti a amerického snu.", authorContext: "F. Scott Fitzgerald (1896–1940), americký spisovatel. Velký Gatsby vyšel roku 1925." }
  },

  // book-170: Cizinec (Albert Camus)
  "book-170": {
    bookId: "book-170", title: "Cizinec", author: "Albert Camus",
    sources: [{ name: "Píšem.cz – Cizinec: rozbor díla k maturitě", url: "https://www.pisem.cz/cizinec-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Filozofický a psychologický román, novela", literaryForm: "Próza", timeAndSpace: "Alžír a okolí ve francouzském Alžírsku, 20. století." },
    themeAndMotifs: { theme: "Absurdita lidské existence a střet jednotlivce se společností, která vyžaduje předstírané emoce.", motifs: "Smrt, slunce, moře, lhostejnost, soud, vina, víra a společenská očekávání." },
    composition: { structure: "Dvě části; první končí vraždou na pláži, druhá se soustředí na vězení a soud.", timeline: "Chronologické vyprávění.", dramaticStructure: "Meursaultův všední život a čin jsou následně posuzovány společností, která ho odsoudí i za jeho netečnost." },
    characters: [
      { name: "Meursault", role: "Hlavní postava a vypravěč", description: "Úředník, který popisuje svět věcně a odmítá předstírat city, jež necítí." },
      { name: "Marie Cardonová", role: "Meursaultova partnerka", description: "Veselá mladá žena, která touží po bližším vztahu, zatímco Meursault zůstává citově zdrženlivý." },
      { name: "Raymond Sintès", role: "Meursaultův soused", description: "Konfliktní muž, který Meursaulta zatáhne do sporu se svou bývalou partnerkou a její rodinou." },
      { name: "Salamano", role: "Starší soused", description: "Osamělý muž, jehož vztah ke psovi odhaluje složitější city, než se na první pohled zdá." }
    ],
    narratorAndStyle: { narrativeMethod: "Ich-forma, vypravěčem je hlavní hrdina Meursault.", languageCharacteristics: "Krátké, úsporné věty, věcný tón, jednoduchá slovní zásoba a kontrast." },
    summary: "Meursault se dozví o smrti své matky a zúčastní se pohřbu bez obvyklých projevů smutku. Po návratu pokračuje v běžném životě a naváže vztah s Marií. Kvůli sousedovi Raymondovi se dostane do konfliktu s několika muži a na pláži jednoho z nich zastřelí. Při soudním procesu se však pozornost soustředí nejen na samotný čin, ale také na jeho chování při matčině pohřbu a na odmítání náboženské útěchy. Meursault je odsouzen a v závěru přijímá absurditu a lhostejnost světa.",
    historicalContext: { literaryContext: "Francouzská literatura 40. let 20. století, filozofie absurdity; Camus bývá spojován s existencialismem, sám toto označení odmítal.", authorContext: "Albert Camus (1913–1960), francouzský spisovatel a filozof narozený v Alžírsku, nositel Nobelovy ceny za literaturu z roku 1957. Cizinec vyšel roku 1942." }
  },

  // book-147: Revizor (Nikolaj Vasiljevič Gogol)
  "book-147": {
    bookId: "book-147", title: "Revizor", author: "Nikolaj Vasiljevič Gogol",
    sources: [{ name: "Píšem.cz – Revizor: rozbor díla k maturitě", url: "https://www.pisem.cz/revizor-rozbor-dila/" }],
    generalInfo: { literaryKind: "Drama", literaryGenre: "Satirická komedie", literaryForm: "Próza", timeAndSpace: "Nejmenované okresní město v Rusku, 19. století." },
    themeAndMotifs: { theme: "Kritika úplatkářství, korupce, strachu z autorit a maloměstské omezenosti.", motifs: "Záměna osob, úplatky, pomluvy, úřednická moc, přetvářka a němá scéna." },
    composition: { structure: "Pět dějství, sevřená a převážně chronologická kompozice.", timeline: "Děj trvá přibližně dva dny.", dramaticStructure: "Úředníci považují Chlestakova za tajného kontrolora, snaží se ho uplácet a pravda vyjde najevo až po jeho odjezdu." },
    characters: [
      { name: "Ivan Alexandrovič Chlestakov", role: "Údajný revizor", description: "Bezvýznamný, lehkomyslný mladík, který si užívá pozornosti a nechá se vtáhnout do role významného úředníka." },
      { name: "Hejtman", role: "Představitel města", description: "Zkorumpovaný a autoritářský úředník, který se bojí odhalení vlastních přečinů." },
      { name: "Osip", role: "Chlestakovův sluha", description: "Praktičtější a zkušenější než jeho pán; chápe nebezpečí situace a doporučí odjezd." },
      { name: "Anna Andrejevna", role: "Hejtmanova manželka", description: "Marnivá žena, kterou láká společenský vzestup a pozornost domnělého revizora." },
      { name: "Bobčinskij a Dobčinskij", role: "Místní statkáři", description: "Dvojice zvědavých mužů, jejichž zpráva spustí nedorozumění." }
    ],
    narratorAndStyle: { narrativeMethod: "Drama bez vypravěče; děj tvoří dialogy, monology a scénické poznámky.", languageCharacteristics: "Hovorové prvky, satira, groteska, situační a charakterová komika." },
    summary: "V okresním městě se rozšíří zpráva, že má přijet tajný revizor. Úředníci, kteří mají co skrývat, začnou panikařit. V hostinci se ubytuje mladý úředníček Chlestakov a místní ho omylem považují za kontrolora. Zahrnují ho poctami, půjčují mu peníze a snaží se získat jeho přízeň. Chlestakov situaci využije, napíše příteli dopis, v němž se úředníkům vysmívá, a odjede. Když dopis dorazí, město zjistí, že naletělo. Vzápětí přijde zpráva o příjezdu skutečného revizora a hra končí slavnou němou scénou.",
    historicalContext: { literaryContext: "Ruská literatura 19. století na přechodu od romantismu k realismu; hra patří k počátkům kritického realismu.", authorContext: "Nikolaj Vasiljevič Gogol (1809–1852), ruský spisovatel ukrajinského původu. Revizor měl premiéru a vyšel roku 1836, konečná verze pochází z roku 1842." }
  },

  // book-143: Povídky malostranské (Jan Neruda)
  "book-143": {
    bookId: "book-143", title: "Povídky malostranské", author: "Jan Neruda",
    sources: [{ name: "Píšem.cz – Povídky malostranské: rozbor díla k maturitě", url: "https://www.pisem.cz/povidky-malostranske-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Soubor realistických povídek", literaryForm: "Próza", timeAndSpace: "Pražská Malá Strana, zejména první polovina 19. století." },
    themeAndMotifs: { theme: "Každodenní život malostranské společnosti, mezilidské vztahy, předsudky, pomluvy a lidské slabosti.", motifs: "Maloměšťáctví, sousedské vztahy, chudoba, pověst, samota, ironie a drobná dobrota." },
    composition: { structure: "Soubor třinácti samostatných próz, které spojuje prostředí Malé Strany.", timeline: "Jednotlivé povídky mají vlastní časovou posloupnost; celek netvoří souvislý románový děj." },
    characters: [
      { name: "Pan Vojtíšek", role: "Postava povídky Přivedla žebráka na mizinu", description: "Oblíbený žebrák, jehož pověst zničí nepravdivé řeči okolí." },
      { name: "Pan Ryšánek a pan Schlegl", role: "Postavy stejnojmenné povídky", description: "Dva muži, kteří spolu dlouho nemluví kvůli dávnému osobnímu sporu." },
      { name: "Pan Rybář (Hastrman)", role: "Postava povídky Hastrman", description: "Starší muž, jehož vztah ke sbírce kamenů odhaluje jeho citlivost a potřebu uznání." },
      { name: "Pan Vorel", role: "Postava povídky Jak si nakouřil pan Vorel pěnovku", description: "Nový obchodník, kterého společenské předsudky připraví o zákazníky." }
    ],
    narratorAndStyle: { narrativeMethod: "Převážně er-forma, vypravěč někdy komentuje dění a přibližuje myšlení postav.", languageCharacteristics: "Realistické detaily, ironie, humor, charakterizační jazyk a místní kolorit." },
    summary: "Soubor zachycuje obyvatele pražské Malé Strany a jejich každodenní starosti, spory i drobné radosti. V jednotlivých povídkách se objevují úředníci, řemeslníci, žebráci, obchodníci a další obyvatelé čtvrti. Autor ukazuje, jak jejich životy ovlivňují pověsti, předsudky, závist i solidarita. Mezi známé příběhy patří osud žebráka Vojtíška, smíření dvou dlouho rozhádaných mužů nebo neúspěch obchodníka Vorla. Malá Strana se stává obrazem širší společnosti.",
    historicalContext: { literaryContext: "Český realismus a generace májovců v 19. století; důraz na současný život a městské prostředí.", authorContext: "Jan Neruda (1834–1891), český básník, prozaik a novinář, člen generace májovců. Povídky malostranské vyšly knižně roku 1878." }
  },

  // book-173: Kdo chytá v žitě (J. D. Salinger)
  "book-173": {
    bookId: "book-173", title: "Kdo chytá v žitě", author: "Jerome David Salinger",
    sources: [{ name: "Píšem.cz – Kdo chytá v žitě: rozbor díla k maturitě", url: "https://www.pisem.cz/kdo-chyta-v-zite-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Psychologický román o dospívání", literaryForm: "Próza", timeAndSpace: "New York a okolí, poválečná Amerika 20. století." },
    themeAndMotifs: { theme: "Dospívání, hledání vlastní identity a konflikt mezi autenticitou a světem dospělých, který hrdina vnímá jako falešný.", motifs: "Samota, odcizení, dětství, nevinnost, škola, město, červená lovecká čepice a kolotoč." },
    composition: { structure: "26 kapitol.", timeline: "Retrospektivní vyprávění; Holden vzpomíná na několik dnů po odchodu ze školy.", dramaticStructure: "Holden opustí školu, toulá se New Yorkem, setkává se s různými lidmi a hledá blízkost, kterou nedokáže snadno přijmout." },
    characters: [
      { name: "Holden Caulfield", role: "Hlavní postava a vypravěč", description: "Citlivý, ironický a rozporuplný dospívající chlapec, který kritizuje přetvářku, ale sám se v sobě nevyzná." },
      { name: "Phoebe", role: "Holdenova mladší sestra", description: "Bystrá a upřímná dívka, která mu rozumí a pomáhá mu znovu navázat vztah s rodinou." },
      { name: "Allie", role: "Holdenův zemřelý bratr", description: "Vzpomínka na něj je pro Holdena důležitým zdrojem smutku a citové zranitelnosti." },
      { name: "D. B.", role: "Holdenův starší bratr", description: "Spisovatel, který pracuje v Hollywoodu; Holden jeho práci vnímá jako ústupek komerčnímu světu." }
    ],
    narratorAndStyle: { narrativeMethod: "Ich-forma, retrospektivní vyprávění hlavního hrdiny.", languageCharacteristics: "Hovorový jazyk, slang, nedokončené věty, opakování, ironie a přímé oslovování čtenáře." },
    summary: "Holden Caulfield je vyloučen ze školy a rozhodne se předčasně odjet do New Yorku, aby se vyhnul nepříjemnému návratu domů. Několik dnů tráví touláním po městě, navštěvuje hotely, bary a známé, ale často se cítí osamělý a nepochopený. Kritizuje dospělé za přetvářku, zároveň však touží po blízkosti a bezpečí. Nejdůležitější je pro něj vztah k mladší sestře Phoebe a vzpomínka na zemřelého bratra Allieho. Setkání s Phoebe mu pomůže uvědomit si, že nemůže zastavit dospívání ani ochránit všechny před změnou.",
    historicalContext: { literaryContext: "Americká poválečná próza 50. let 20. století, literatura dospívání a generačního odcizení.", authorContext: "J. D. Salinger (1919–2010), americký spisovatel. Kdo chytá v žitě vyšlo roku 1951." }
  },

  // book-155: Maryša (Alois a Vilém Mrštíkové)
  "book-155": {
    bookId: "book-155", title: "Maryša", author: "Alois a Vilém Mrštíkové",
    sources: [{ name: "Píšem.cz – Maryša: rozbor díla k maturitě", url: "https://www.pisem.cz/marysa-rozbor-dila/" }],
    generalInfo: { literaryKind: "Drama", literaryGenre: "Realistické vesnické drama s tragickým koncem", literaryForm: "Próza", timeAndSpace: "Moravská vesnice, konec 19. století." },
    themeAndMotifs: { theme: "Konflikt osobní svobody a lásky s rodičovskou autoritou, majetkovými zájmy a společenskými konvencemi.", motifs: "Vynucený sňatek, peníze, rodina, čest, vesnické prostředí, nářečí a bezvýchodnost." },
    composition: { structure: "Pět jednání rozdělených do výstupů.", timeline: "Chronologický děj s časovými skoky mezi jednotlivými jednáními.", dramaticStructure: "Maryša se brání sňatku s bohatým mlynářem Vávrou, ale rodina ji přinutí; po letech se konflikt vyhrotí a končí tragicky." },
    characters: [
      { name: "Maryša", role: "Hlavní postava", description: "Mladá žena, která se snaží rozhodovat o vlastním životě, ale pod tlakem rodiny přijme nechtěné manželství." },
      { name: "Lízal", role: "Maryšin otec", description: "Majetný sedlák, který upřednostňuje hospodářské zájmy a společenské postavení před přáním dcery." },
      { name: "Vávra", role: "Maryšin manžel", description: "Starší mlynář, který je autoritářský a ve vztahu k Maryše hrubý." },
      { name: "Francek", role: "Maryšin milý", description: "Chudý mladík, který se vrací z vojny a chce s Maryšou odejít." },
      { name: "Horačka", role: "Franckova matka", description: "Žena, která Maryše rozumí a upozorňuje na neštěstí vynuceného sňatku." }
    ],
    narratorAndStyle: { narrativeMethod: "Drama bez vypravěče; děj tvoří dialogy a scénické poznámky.", languageCharacteristics: "Moravské nářečí v řeči postav, realistické dialogy, lidové písně a podrobné scénické poznámky." },
    summary: "Maryša miluje chudého Francka, její rodiče však chtějí, aby se provdala za bohatého mlynáře Vávru. Otec Lízal sňatek prosazuje kvůli majetku a rodinným zájmům. Maryša se brání, ale nakonec pod tlakem okolí svolí. Po dvou letech se Francek vrací z vojny a nabízí jí útěk, Maryša však nechce opustit své zásady ani způsobit další skandál. Její manželství je nešťastné a konflikt s Vávrou se vyhrotí do tragického závěru.",
    historicalContext: { literaryContext: "Český realismus a naturalismus konce 19. století; kritika patriarchálních vztahů a majetkových tlaků na venkově.", authorContext: "Alois (1861–1925) a Vilém (1863–1912) Mrštíkové, čeští spisovatelé a dramatici. Maryša měla premiéru a vyšla roku 1894." }
  },

  // book-176: 451 stupňů Fahrenheita (Ray Bradbury)
  "book-176": {
    bookId: "book-176", title: "451 stupňů Fahrenheita", author: "Ray Bradbury",
    sources: [{ name: "Píšem.cz – 451 stupňů Fahrenheita: rozbor díla k maturitě", url: "https://www.pisem.cz/451-stupnu-fahrenheita-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Antiutopický román a science fiction", literaryForm: "Próza", timeAndSpace: "Neurčené americké město v blíže neurčené budoucnosti." },
    themeAndMotifs: { theme: "Nebezpečí cenzury, ztráty svobodného myšlení a společnosti, která upřednostňuje povrchní zábavu před poznáním.", motifs: "Oheň, knihy, obrazovky, paměť, svoboda, konformita a příroda." },
    composition: { structure: "Tři části: Bylo to příjemné, pálit; Síto a písek; Jasný oheň.", timeline: "Chronologický děj sledující proměnu hlavního hrdiny.", dramaticStructure: "Požárník Montag začne pochybovat o pálení knih, hledá pomoc a nakonec se přidá ke skupině, která uchovává literární paměť." },
    characters: [
      { name: "Guy Montag", role: "Hlavní postava", description: "Požárník, který nejprve knihy ničí, ale postupně začne hledat jejich smysl a bránit je." },
      { name: "Clarisse McClellanová", role: "Montagova sousedka", description: "Zvídavá mladá dívka, která ho přiměje klást otázky o štěstí a společnosti." },
      { name: "Mildred", role: "Montagova manželka", description: "Žena pohlcená televizní zábavou, která se vyhýbá hlubším rozhovorům." },
      { name: "Kapitán Beatty", role: "Velitel požárníků", description: "Vzdělaný obhájce systému, který knihy považuje za zdroj neklidu." },
      { name: "Faber", role: "Bývalý profesor", description: "Pomáhá Montagovi porozumět významu literatury a samostatného myšlení." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vyprávění sleduje především Montagovu perspektivu.", languageCharacteristics: "Obrazný jazyk, symboly, metafory, kontrasty a napětí mezi technologií a přírodou." },
    summary: "V budoucí společnosti mají požárníci za úkol vyhledávat a pálit knihy. Guy Montag tuto práci dlouho vykonává bez pochybností, dokud nepotká Clarisse, která ho přiměje přemýšlet o vlastním životě. Po několika událostech začne knihy tajně číst a obrátí se na bývalého profesora Fabera. Jeho jednání je odhaleno a Montag musí uprchnout z města. Přidá se ke skupině lidí, kteří si zapamatovávají celé knihy, aby jejich obsah uchovali pro budoucnost. Město je mezitím zničeno válkou a skupina se vydává k jeho troskám.",
    historicalContext: { literaryContext: "Americká poválečná literatura, antiutopie a science fiction období studené války.", authorContext: "Ray Bradbury (1920–2012), americký spisovatel. Román Fahrenheit 451 vyšel roku 1953." }
  },

  // book-191: Jméno růže (Umberto Eco)
  "book-191": {
    bookId: "book-191", title: "Jméno růže", author: "Umberto Eco",
    sources: [{ name: "Píšem.cz – Jméno růže: rozbor díla k maturitě", url: "https://www.pisem.cz/jmeno-ruze-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Historický detektivní a filozofický román", literaryForm: "Próza", timeAndSpace: "Benediktinské opatství v severní Itálii, sedm dní v listopadu 1327." },
    themeAndMotifs: { theme: "Hledání pravdy a poznání, moc nad informacemi, střet víry a rozumu a nebezpečí fanatismu.", motifs: "Knihovna-labyrint, zakázaná kniha, smích, tajemství, oheň a středověká církev." },
    composition: { structure: "Rámcové vyprávění s úvodem a sedmi dny rozdělenými podle mnišských modliteb.", timeline: "Chronologický týdenní děj, vyprávěný s velkým časovým odstupem.", dramaticStructure: "Vilém z Baskervillu vyšetřuje záhadná úmrtí v opatství; pátrání ho dovede k tajemství knihovny a zakázaného rukopisu." },
    characters: [
      { name: "Vilém z Baskervillu", role: "Hlavní postava", description: "Františkánský mnich a bystrý pozorovatel, který se snaží vysvětlovat události rozumem." },
      { name: "Adso z Melku", role: "Vypravěč a Vilémův žák", description: "Mladý novic, který po letech vzpomíná na společné vyšetřování." },
      { name: "Jorge z Burgosu", role: "Starý slepý mnich", description: "Strážce tradiční autority, který se obává svobodného poznání a smíchu." },
      { name: "Opat", role: "Představený kláštera", description: "Snaží se chránit pověst opatství a udržet kontrolu nad děním." },
      { name: "Bernardo Gui", role: "Inkvizitor", description: "Představuje represivní moc, která hledá viníka spíše než pravdu." }
    ],
    narratorAndStyle: { narrativeMethod: "Ich-forma; Adso vypráví jako starý mnich o událostech svého mládí, rámec doplňuje fiktivní editor rukopisu.", languageCharacteristics: "Učený a místy archaizující jazyk, latinské vsuvky, intertextualita, symboly a parodie detektivního žánru." },
    summary: "Františkán Vilém z Baskervillu přijíždí se svým mladým žákem Adsem do benediktinského opatství, kde došlo k záhadným úmrtím mnichů. Vilém začne pátrat a postupně zjišťuje, že klíčem k případu je rozsáhlá knihovna uspořádaná jako labyrint. Vyšetřování odhaluje spory o víru, poznání a hranice církevní autority. Za událostmi stojí slepý mnich Jorge, který se snaží zabránit přístupu k zakázanému textu. Při závěrečném střetu vypukne požár a knihovna i opatství jsou zničeny.",
    historicalContext: { literaryContext: "Postmodernismus druhé poloviny 20. století; spojení historického románu, detektivky, filozofie a hry s literárními odkazy.", authorContext: "Umberto Eco (1932–2016), italský sémiotik, filozof a spisovatel. Jméno růže vyšlo poprvé roku 1980." }
  },

  // book-188: Hlava XXII (Joseph Heller)
  "book-188": {
    bookId: "book-188", title: "Hlava XXII", author: "Joseph Heller",
    sources: [{ name: "Píšem.cz – Hlava XXII: rozbor díla k maturitě", url: "https://www.pisem.cz/hlava-xxii-rozbor-dila/" }],
    generalInfo: { literaryKind: "Epika", literaryGenre: "Satirický a protiválečný román s černým humorem", literaryForm: "Próza", timeAndSpace: "Vojenská základna na ostrově Pianosa a další místa v Itálii, rok 1944." },
    themeAndMotifs: { theme: "Absurdita války, byrokracie a systému, který podřizuje lidský život vlastní logice.", motifs: "Hlava XXII, vojenské rozkazy, strach ze smrti, moc, peníze, opakování a černý humor." },
    composition: { structure: "42 kapitol řazených podle postav a témat.", timeline: "Nelineární, epizodická kompozice s návraty k důležitým událostem.", dramaticStructure: "Yossarian se snaží uniknout dalším bojovým letům, ale vojenské velení neustále mění pravidla a znemožňuje mu návrat domů." },
    characters: [
      { name: "Yossarian", role: "Hlavní postava", description: "Americký bombardovací pilot, který se snaží přežít a odmítá nesmyslné vojenské požadavky." },
      { name: "Milo Minderbinder", role: "Vojenský podnikatel", description: "Organizuje obchodní syndikát a ukazuje, jak se zisk stává důležitějším než lidské životy." },
      { name: "Plukovník Cathcart", role: "Velitel", description: "Opakovaně zvyšuje počet nutných bojových letů, aby oddálil odchod posádek domů." },
      { name: "Doc Daneeka", role: "Vojenský lékař", description: "Jeho situace ukazuje absurdní důsledky byrokratických pravidel." },
      { name: "Nately", role: "Mladý pilot", description: "Yossarianův přítel, jehož osud posiluje hlavního hrdinu v odporu proti velení." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma s proměnlivým zaměřením na různé postavy.", languageCharacteristics: "Ironie, černý humor, paradox, opakování, absurdní dialogy a groteskní nadsázka." },
    summary: "Kapitán Yossarian slouží jako bombardovací pilot během druhé světové války. Chce se vrátit domů, ale velitelé stále zvyšují počet bojových letů, které musí posádka absolvovat. Vojenské nařízení zvané Hlava XXII vytváří logickou past: kdo žádá o vyřazení z letů kvůli šílenství, dokazuje tím, že je dostatečně příčetný, aby létal dál. Yossarian sleduje, jak jeho přátelé mizí a umírají, a postupně odmítá přijmout pravidla systému. Nakonec se rozhodne hledat vlastní cestu ven.",
    historicalContext: { literaryContext: "Americká poválečná próza 60. let, protiválečná literatura, absurdní a groteskní satira.", authorContext: "Joseph Heller (1923–1999), americký spisovatel a veterán druhé světové války. Hlava XXII vyšla roku 1961." }
  },

  // book-101: Epos o Gilgamešovi
  "book-101": {
    bookId: "book-101", title: "Epos o Gilgamešovi", author: "Neznámý autor",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Hrdinský epos", literaryForm: "Veršovaná epika", timeAndSpace: "Starověká Mezopotámie, město Uruk a krajina za jeho hranicemi; děj vychází ze sumerských a akkadských tradic." },
    themeAndMotifs: { theme: "Přátelství, smrtelnost člověka a hledání smyslu života.", motifs: "Přátelství, cesta, hrdinství, smrt, nesmrtelnost, bohové, příroda a sláva." },
    composition: { structure: "Soubor epizod propojených postavou Gilgameše; dochovaná podoba má dvanáct tabulek.", timeline: "Převážně chronologický sled dobrodružství a putování.", dramaticStructure: "Gilgameš se po setkání s Enkiduem promění, po přítelově smrti hledá nesmrtelnost a nakonec přijímá lidské hranice." },
    characters: [
      { name: "Gilgameš", role: "Hlavní postava", description: "Král Uruku, zčásti božského původu; zpočátku pyšný a bezohledný, postupně poznává cenu přátelství a vlastní smrtelnost." },
      { name: "Enkidu", role: "Gilgamešův přítel", description: "Divoký muž spojený s přírodou, který se stane Gilgamešovým blízkým druhem." },
      { name: "Utnapištim", role: "Nositel tajemství nesmrtelnosti", description: "Přežil potopu a vysvětlí Gilgamešovi, že věčný život není běžnému člověku určen." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vševědoucí epické vyprávění.", languageCharacteristics: "Vznešený styl, opakování, paralelismy, symbolika a mytologické obrazy." },
    summary: "Král Gilgameš vládne Uruku tvrdou rukou, dokud bohové nestvoří Enkidua, který se mu postaví. Z protivníků se stanou přátelé a společně prožijí řadu hrdinských dobrodružství. Po Enkiduově smrti Gilgameše přemůže strach z vlastní smrti a vydá se hledat tajemství věčného života. Utnapištim mu ukáže, že nesmrtelnost člověku nepřísluší. Gilgameš se vrací do Uruku s poznáním, že smysl lidského života spočívá také v činech a díle, které po sobě člověk zanechá.",
    historicalContext: { literaryContext: "Mezopotámská literatura starověku; jeden z nejstarších dochovaných rozsáhlých literárních textů.", authorContext: "Autorství je anonymní. Epos vznikal postupně z ústních a písemných tradic; jeho akkadská podoba se ustálila ve 2. tisíciletí př. n. l." }
  },
  // book-102: Král Oidipus
  "book-102": {
    bookId: "book-102", title: "Král Oidipus", author: "Sofoklés",
    generalInfo: { literaryKind: "Drama", literaryGenre: "Antická tragédie", literaryForm: "Veršované drama", timeAndSpace: "Théby v mytické době; děj se odehrává během krátkého časového úseku před královským palácem." },
    themeAndMotifs: { theme: "Střet lidské vůle s osudem, vina, poznání pravdy a odpovědnost.", motifs: "Věštba, slepota a prozření, mor, rodová kletba, pravda, vina a osud." },
    composition: { structure: "Prolog, párodos, střídání epizod a stasimonů, závěrečná exodos.", timeline: "Jednotný čas a místo; děj respektuje antické zásady jednoty.", dramaticStructure: "Oidipus pátrá po příčině moru, postupně odhaluje vlastní původ a poznává, že naplnil dávnou věštbu." },
    characters: [
      { name: "Oidipus", role: "Hlavní postava", description: "Thébský král, který chce zachránit město a neústupně pátrá po pravdě, i když se týká jeho samotného." },
      { name: "Iokasté", role: "Královna", description: "Oidipova manželka a matka; snaží se zastavit pátrání, protože tuší jeho výsledek." },
      { name: "Kreón", role: "Oidipův příbuzný", description: "Přináší věštbu a později se ujímá vlády v Thébách." },
      { name: "Teiresiás", role: "Slepý věštec", description: "Zná pravdu o Oidipově původu, ale zpočátku ji odmítá vyslovit." }
    ],
    narratorAndStyle: { narrativeMethod: "Přímá dramatická řeč, dialogy a sborové zpěvy.", languageCharacteristics: "Vznešený jazyk, metafory, ironie a tragické napětí založené na postupném odhalování pravdy." },
    summary: "Théby sužuje mor a král Oidipus chce zjistit, jak město očistit. Věštba oznámí, že příčinou neštěstí je nepotrestaná vražda bývalého krále Láia. Oidipus zahájí pátrání, při němž se dostává do konfliktu s věštcem Teiresiem i Kreontem. Svědectví postupně odhalí, že Oidipus je synem Láia a Iokasté, svého současného manželského páru, a že kdysi nevědomky zabil vlastního otce. Iokasté poznání neunese a Oidipus musí čelit následkům naplněné věštby.",
    historicalContext: { literaryContext: "Antické řecké drama klasického období; tragédie vychází z thébského mytologického okruhu.", authorContext: "Sofoklés (asi 496–406 př. n. l.) byl athénský dramatik, autor tragédií Antigona a Král Oidipus." }
  },
  // book-105: Dekameron
  "book-105": {
    bookId: "book-105", title: "Dekameron", author: "Giovanni Boccaccio",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Soubor novel", literaryForm: "Próza", timeAndSpace: "Florencie a venkovské sídlo poblíž města; doba morové epidemie roku 1348." },
    themeAndMotifs: { theme: "Lidské jednání, láska, důvtip a schopnost obstát v proměnlivém světě.", motifs: "Mor, útěk z města, vyprávění, láska, peníze, chytrost, štěstí a společenské rozdíly." },
    composition: { structure: "Rámcová kompozice: deset vypravěčů si během deseti dnů vypráví sto novel.", timeline: "Rámcový děj je časově souvislý, jednotlivé novely se odehrávají v různých dobách.", dramaticStructure: "Skupina mladých lidí opustí zasaženou Florencii a vyplňuje čas vyprávěním příběhů na každý den stanoveného tématu." },
    characters: [
      { name: "Pampinea", role: "Vedoucí skupiny", description: "Jedna ze sedmi žen, která navrhne odchod z Florencie a pomáhá udržovat řád skupiny." },
      { name: "Fiammetta", role: "Vypravěčka", description: "Jedna z deseti mladých lidí, kteří se střídají ve vyprávění novel." },
      { name: "Dioneo", role: "Vypravěč", description: "Vypravěč známý osobitým humorem a příběhy, které se často vymykají dennímu tématu." }
    ],
    narratorAndStyle: { narrativeMethod: "Rámcové vyprávění; jednotlivé novely mají vlastní vypravěče.", languageCharacteristics: "Pestrý realistický jazyk, humor, ironie, satira a živé dialogy." },
    summary: "Během morové epidemie ve Florencii odchází sedm mladých žen a tři muži na venkovské sídlo. Aby překonali čas a udrželi si dobrou náladu, každý den si vyprávějí příběhy. Během deseti dnů zazní sto novel o lásce, chytrosti, nevěře, štěstí, lidské hlouposti i pokrytectví. Jednotlivé příběhy zachycují různé vrstvy společnosti a často ukazují, že důvtip a schopnost jednat mohou člověku pomoci překonat nepříznivé okolnosti.",
    historicalContext: { literaryContext: "Italská renesanční literatura; důraz na člověka, pozemský život, individualitu a realistické pozorování společnosti.", authorContext: "Giovanni Boccaccio (1313–1375), italský humanista a spisovatel. Dekameron vznikal přibližně v letech 1349–1353." }
  },
  // book-110: Důmyslný rytíř don Quijote de la Mancha
  "book-110": {
    bookId: "book-110", title: "Důmyslný rytíř don Quijote de la Mancha", author: "Miguel de Cervantes y Saavedra",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Parodický a dobrodružný román", literaryForm: "Próza", timeAndSpace: "Španělsko, především Kastilie a Mancha; přelom 16. a 17. století." },
    themeAndMotifs: { theme: "Střet ideálů s realitou, síla představivosti a hranice mezi snem a skutečností.", motifs: "Rytířství, čest, spravedlnost, větrné mlýny, cesta, přátelství a svoboda." },
    composition: { structure: "Dvě části vydané v letech 1605 a 1615; epizodická stavba.", timeline: "Převážně chronologické putování doplněné vloženými příběhy.", dramaticStructure: "Chudý šlechtic se považuje za potulného rytíře, vydává se do světa a jeho představy opakovaně narážejí na realitu." },
    characters: [
      { name: "Don Quijote", role: "Hlavní postava", description: "Alonso Quijano, který pod vlivem rytířských románů přijme totožnost potulného rytíře a chce napravovat křivdy." },
      { name: "Sancho Panza", role: "Zbrojnoš", description: "Praktický venkovan, který doprovází Quijota a často představuje zdravý rozum." },
      { name: "Dulcinea z Tobosa", role: "Idealizovaná dáma", description: "Žena, kterou si Quijote ve své představivosti zvolí za vznešenou dámu svého srdce." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma s hrou na nalezený rukopis a fiktivního kronikáře.", languageCharacteristics: "Parodie rytířských románů, humor, ironie, kontrast vznešeného a všedního jazyka." },
    summary: "Chudý venkovský šlechtic Alonso Quijano čte tolik rytířských románů, až začne věřit, že je potulným rytířem. Přijme jméno Don Quijote, vybere si koně Rocinanta, dámu Dulcineu a vydá se napravovat bezpráví. Doprovází ho Sancho Panza, který doufá v odměnu v podobě vlastního ostrova. Quijote si běžné jevy vykládá jako rytířská dobrodružství, například větrné mlýny považuje za obry. Jeho výpravy jsou komické, ale zároveň ukazují napětí mezi idealismem a skutečností. Nakonec se vrací domů, vzdává se rytířských představ a umírá jako Alonso Quijano.",
    historicalContext: { literaryContext: "Španělská literatura zlatého věku; dílo bývá označováno za jeden z prvních moderních románů a parodii rytířské literatury.", authorContext: "Miguel de Cervantes (1547–1616), španělský spisovatel. První část vyšla roku 1605, druhá roku 1615." }
  },
  // book-115: Robinson Crusoe
  "book-115": {
    bookId: "book-115", title: "Robinson Crusoe", author: "Daniel Defoe",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Dobrodružný a realistický román", literaryForm: "Próza", timeAndSpace: "Neobydlený ostrov v Karibiku a Anglie; přibližně 17. století." },
    themeAndMotifs: { theme: "Lidská vytrvalost, práce, víra a schopnost přizpůsobit se neznámým podmínkám.", motifs: "Samota, ostrov, ztroskotání, práce, deník, příroda, víra a přátelství." },
    composition: { structure: "Chronologické vyprávění s deníkovými a vzpomínkovými pasážemi.", timeline: "Dlouhé časové období; Robinson stráví na ostrově 28 let.", dramaticStructure: "Po ztroskotání si Robinson postupně vytváří zázemí, učí se žít v izolaci a po setkání s Pátkem získává společníka." },
    characters: [
      { name: "Robinson Crusoe", role: "Hlavní postava a vypravěč", description: "Anglický námořník, který se po ztroskotání učí samostatnosti a praktickému řešení problémů." },
      { name: "Pátek", role: "Robinsonův společník", description: "Muž, kterého Robinson zachrání a pojmenuje podle dne jejich setkání; stává se jeho přítelem a pomocníkem." },
      { name: "Kapitán portugalské lodi", role: "Vedlejší postava", description: "Pomůže Robinsonovi vrátit se po letech do civilizace." }
    ],
    narratorAndStyle: { narrativeMethod: "Ich-forma, autobiograficky působící vyprávění doplněné deníkem.", languageCharacteristics: "Věcný, popisný a realistický styl, důraz na pracovní postupy, každodennost a vnitřní úvahy." },
    summary: "Robinson Crusoe se navzdory přání rodiny vydává na moře. Po ztroskotání lodi zůstane jako jediný přeživší na opuštěném ostrově. Zachrání vybavení z vraku, vybuduje si obydlí, obstarává potravu a vede si záznamy o každodenním životě. Postupně se vyrovnává se samotou a obrací se k víře. Po letech objeví stopy dalších lidí a zachrání zajatce, kterému dá jméno Pátek. Společně se nakonec dočkají možnosti opustit ostrov a Robinson se vrací do Anglie.",
    historicalContext: { literaryContext: "Anglický osvícenský román 18. století; důraz na individualismus, empirickou zkušenost a praktický rozum.", authorContext: "Daniel Defoe (asi 1660–1731), anglický spisovatel a novinář. Robinson Crusoe vyšel roku 1719." }
  },
  // book-116: Gulliverovy cesty
  "book-116": {
    bookId: "book-116", title: "Gulliverovy cesty", author: "Jonathan Swift",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Satirický a fantastický cestopisný román", literaryForm: "Próza", timeAndSpace: "Fantastické země Liliput, Brobdingnag, Laputa a země Hujhnhnmů; neurčená současnost autora." },
    themeAndMotifs: { theme: "Kritika lidské pýchy, politiky, vědy a společenských poměrů.", motifs: "Cestování, velikost a malost, moc, válka, rozum, věda, lidská povaha a společenské zvyklosti." },
    composition: { structure: "Čtyři části, každá popisuje jednu významnou cestu.", timeline: "Chronologické vyprávění jednotlivých cest.", dramaticStructure: "Gulliver postupně poznává odlišné společnosti, jejichž zvyklosti nastavují zrcadlo evropské civilizaci." },
    characters: [
      { name: "Lemuel Gulliver", role: "Hlavní postava a vypravěč", description: "Lodní lékař a cestovatel, který pozoruje neobvyklé společnosti a srovnává je s Evropou." },
      { name: "Liliputský císař", role: "Vládce Liliputu", description: "Představuje malichernost politické moci a sporů." },
      { name: "Král Brobdingnagu", role: "Vládce země obrů", description: "Získává od Gullivera zprávy o Evropě a kriticky hodnotí její politiku." },
      { name: "Hujhnhnmové", role: "Rozumní koně", description: "Společnost řízená rozumem, která kontrastuje s lidskou chamtivostí a násilím." }
    ],
    narratorAndStyle: { narrativeMethod: "Ich-forma, stylizovaná jako věrohodný cestovní deník.", languageCharacteristics: "Ironie, satira, nadsázka, alegorie a kontrast fantastického světa s reálnou společností." },
    summary: "Lodní lékař Lemuel Gulliver podniká čtyři cesty do neznámých zemí. V Liliputu se setká s drobnými lidmi, jejichž politické spory působí malicherně. V zemi obrů naopak pozná vlastní bezvýznamnost a dozví se, jak kriticky může vypadat evropská společnost zvenčí. Na létajícím ostrově Laputa se setká s učenci odtrženými od praktického života. Poslední cesta ho zavede mezi rozumné koně Hujhnhnmy a tvory podobné lidem, kteří představují jejich opak. Dílo prostřednictvím fantastických cest satiricky kritizuje lidské nedostatky.",
    historicalContext: { literaryContext: "Anglická osvícenská literatura; satira na politiku, vědu, válku a lidskou povahu.", authorContext: "Jonathan Swift (1667–1745), anglo-irský satirik a duchovní. Gulliverovy cesty vyšly roku 1726." }
  },
  // book-122: Oliver Twist
  "book-122": {
    bookId: "book-122", title: "Oliver Twist", author: "Charles Dickens",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Realistický sociální román", literaryForm: "Próza", timeAndSpace: "Anglie, především Londýn; první polovina 19. století." },
    themeAndMotifs: { theme: "Chudoba, sociální nespravedlnost, dětská zranitelnost a možnost lidské dobroty.", motifs: "Sirotčinec, chudobinec, zločin, hlad, rodinný původ, soucit a spravedlnost." },
    composition: { structure: "Kapitoly s postupně odhalovanými souvislostmi a tajemstvím Oliverova původu.", timeline: "Převážně chronologický děj.", dramaticStructure: "Oliver opouští chudobinec, dostává se do londýnského podsvětí a postupně se odhaluje jeho skutečný původ." },
    characters: [
      { name: "Oliver Twist", role: "Hlavní postava", description: "Sirotek, který navzdory nepřízni okolí zůstává citlivý a touží po bezpečném domově." },
      { name: "Fagin", role: "Vůdce zlodějské skupiny", description: "Využívá děti k drobným krádežím a představuje zneužívání chudých." },
      { name: "Bill Sikes", role: "Zločinec", description: "Násilnický muž z londýnského podsvětí." },
      { name: "Nancy", role: "Mladá žena z Faginovy skupiny", description: "Navzdory vlastnímu prostředí projeví soucit a pokusí se Oliverovi pomoci." },
      { name: "Pan Brownlow", role: "Oliverův dobrodinec", description: "Poskytne Oliverovi ochranu a pomáhá odhalit jeho minulost." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vševědoucí vypravěč.", languageCharacteristics: "Realistické popisy, ironie, sociální kritika, kontrast prostředí a výrazná charakterizace postav." },
    summary: "Oliver Twist vyrůstá v chudobinci, kde je s ním zacházeno krutě. Po útěku do Londýna se dostane do skupiny dětí vedených Faginem, který je učí krást. Oliver se však nechce stát zločincem a několikrát se ocitne v nebezpečí. Pomoc najde u pana Brownlowa a dalších lidí, kteří v něm rozpoznají nevinné dítě. Postupně vyjde najevo jeho rodinný původ i okolnosti, které ho připravily o bezpečný domov. Román kritizuje tehdejší zacházení s chudými a sirotky.",
    historicalContext: { literaryContext: "Anglický kritický realismus viktoriánského období; sociální román upozorňující na chudobu a nedostatky sociální péče.", authorContext: "Charles Dickens (1812–1870), anglický romanopisec. Oliver Twist vycházel na pokračování v letech 1837–1839." }
  },
  // book-121: Evžen Oněgin
  "book-121": {
    bookId: "book-121", title: "Evžen Oněgin", author: "Alexandr Sergejevič Puškin",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Veršovaný román", literaryForm: "Poezie; čtrnáctiveršová oněginská strofa", timeAndSpace: "Petrohrad, ruský venkov a Moskva; první desetiletí 19. století." },
    themeAndMotifs: { theme: "Promarněná láska, nuda vyšší společnosti a konflikt mezi city a společenskými konvencemi.", motifs: "Láska, odmítnutí, souboj, přátelství, venkov, společenská nuda a promarněná příležitost." },
    composition: { structure: "Osm kapitol ve veršovaných oněginských strofách.", timeline: "Převážně chronologický děj s autorskými odbočkami.", dramaticStructure: "Oněgin odmítne Taťáninu lásku, později se role obrátí, ale Taťána už nemůže jeho cit opětovat." },
    characters: [
      { name: "Evžen Oněgin", role: "Hlavní postava", description: "Mladý petrohradský šlechtic znuděný společenským životem, který nedokáže včas rozpoznat hodnotu opravdového citu." },
      { name: "Taťána Larinová", role: "Hlavní ženská postava", description: "Citlivá a přemýšlivá dívka, která se Oněginovi otevřeně vyzná z lásky." },
      { name: "Vladimír Lenskij", role: "Oněginův přítel", description: "Mladý romantický básník, jehož vztah k Olze a konflikt s Oněginem vedou k tragédii." },
      { name: "Olga Larinová", role: "Taťánina sestra", description: "Živá a bezstarostná dívka, Lenského snoubenka." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma s výraznou přítomností a komentáři autora-vypravěče.", languageCharacteristics: "Jazyková lehkost, ironie, lyrické pasáže, společenské postřehy a propracovaná veršová forma." },
    summary: "Evžen Oněgin přijíždí na venkov, kde se spřátelí s básníkem Lenským. Seznámí se také s Taťánou, která se do něj zamiluje a napíše mu dopis. Oněgin její city odmítne. Později na plese záměrně věnuje pozornost Olze, což vyvolá konflikt s Lenským a skončí soubojem, v němž Lenskij zahyne. Po letech se Oněgin setká s Taťánou jako s vdanou ženou a zamiluje se do ní. Taťána jeho city opětuje, ale rozhodne se zůstat věrná svému manželství.",
    historicalContext: { literaryContext: "Ruský romantismus s realistickými prvky; obraz takzvaného zbytečného člověka a ruské společnosti.", authorContext: "Alexandr Sergejevič Puškin (1799–1837), ruský básník a prozaik. Román vycházel postupně v letech 1825–1832." }
  },
  // book-141: Babička
  "book-141": {
    bookId: "book-141", title: "Babička", author: "Božena Němcová",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Idylická próza s realistickými a vzpomínkovými prvky", literaryForm: "Próza", timeAndSpace: "Ratibořické údolí a Staré bělidlo; venkov v první polovině 19. století." },
    themeAndMotifs: { theme: "Rodinné vztahy, tradice, lidská moudrost, soucit a soužití člověka s přírodou.", motifs: "Domov, rodina, venkovský život, lidové zvyky, roční období, smrt a vzpomínky." },
    composition: { structure: "Čtyři díly s řadou samostatnějších epizod propojených postavou babičky.", timeline: "Převážně chronologický průběh jednoho roku.", dramaticStructure: "Babička přijíždí na Staré bělidlo, stává se přirozeným středem rodiny i širšího okolí a její přítomnost propojuje jednotlivé příběhy." },
    characters: [
      { name: "Babička", role: "Hlavní postava", description: "Laskavá, pracovitá a moudrá žena, která předává zkušenosti, tradice a úctu k lidem." },
      { name: "Barunka", role: "Dětská postava", description: "Dívka, jejímž pohledem jsou zachyceny mnohé vzpomínkové epizody." },
      { name: "Paní kněžna", role: "Šlechtična", description: "Váží si babičky a představuje svět odlišný od venkovského prostředí." },
      { name: "Viktorka", role: "Tragická postava", description: "Žena poznamenaná nešťastným osudem, jejíž příběh tvoří kontrast k idylickému obrazu venkova." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma, vyprávění s autobiografickými a vzpomínkovými prvky.", languageCharacteristics: "Spisovný jazyk s prvky lidové mluvy, popisy přírody, folklorní motivy a idealizace venkova." },
    summary: "Na Staré bělidlo přijíždí babička, aby pomáhala rodině své dcery. Brzy se stane přirozenou autoritou a oporou nejen pro vnoučata, ale i pro lidi z okolí. Vypráví příběhy, připomíná lidové tradice, účastní se svátků a pomáhá těm, kdo se ocitli v těžké situaci. Vedle každodenního života rodiny se objevují i osudy dalších postav, například tragický příběh Viktorky. Děj vrcholí babiččiným stářím a smrtí; její moudrost a laskavost však zůstávají v paměti blízkých.",
    historicalContext: { literaryContext: "Česká literatura národního obrození; próza spojuje realistické pozorování, idealizaci venkova a zájem o lidovou kulturu.", authorContext: "Božena Němcová (asi 1820–1862), česká spisovatelka a sběratelka lidové slovesnosti. Babička vyšla roku 1855." }
  },
  // book-164: Vražda v Orient expresu
  "book-164": {
    bookId: "book-164", title: "Vražda v Orient expresu", author: "Agatha Christie",
    generalInfo: { literaryKind: "Epika", literaryGenre: "Detektivní román", literaryForm: "Próza", timeAndSpace: "Luxusní vlak Orient expres, který uvízne ve sněhové závěji na Balkáně; 30. léta 20. století." },
    themeAndMotifs: { theme: "Hledání pravdy, spravedlnost a rozdíl mezi zákonem a morálním úsudkem.", motifs: "Vražda, vlak, sníh, uzavřený prostor, falešné stopy, výslechy a kolektivní vina." },
    composition: { structure: "Tři části: fakta, svědectví a Hercule Poirot přemýšlí.", timeline: "Chronologické vyšetřování s retrospektivními výpověďmi cestujících.", dramaticStructure: "Po vraždě ve vlaku Poirot vyslýchá cestující, porovnává jejich výpovědi a odhalí společné tajemství." },
    characters: [
      { name: "Hercule Poirot", role: "Detektiv", description: "Belgický detektiv, který využívá logiku, pozorování a psychologii." },
      { name: "Samuel Ratchett", role: "Oběť", description: "Americký cestující, jehož minulost souvisí se starým zločinem." },
      { name: "M. Bouc", role: "Ředitel železniční společnosti", description: "Poirotův známý, který se podílí na vyšetřování." },
      { name: "Doktor Constantine", role: "Lékař", description: "Pomáhá určit okolnosti smrti a spolupracuje s Poirotem." }
    ],
    narratorAndStyle: { narrativeMethod: "Er-forma s převážným zaměřením na Poirotovo vyšetřování.", languageCharacteristics: "Přehledná detektivní stavba, dialogy, indicie, falešné stopy a logické odhalení." },
    summary: "Hercule Poirot cestuje Orient expresem, který kvůli sněhu uvízne na trati. Během noci je ve svém kupé zavražděn americký cestující Ratchett. Protože vlak nemůže pokračovat a vrah musí být mezi cestujícími, Poirot zahájí vyšetřování. Vyslýchá jednotlivé pasažéry, porovnává jejich výpovědi a nachází souvislosti s dávným únosem dítěte Armstrongových. Nakonec odhalí, že do činu byli zapojeni lidé, kteří měli k oběti osobní důvod. Závěr otevírá otázku, zda může být morální spravedlnost v rozporu se zákonem.",
    historicalContext: { literaryContext: "Klasická detektivní literatura zlatého věku; román typu uzavřeného okruhu podezřelých.", authorContext: "Agatha Christie (1890–1976), britská autorka detektivních románů a her. Vražda v Orient expresu vyšla roku 1934." }
  },

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
