"use strict";
/* ===== «Rincón de lógica» (01-10, Filosofía 1.º · tema 4) =====
   Tres pestañas: tablas de verdad (y validez de argumentos), silogismos (modos, reglas y diagrama de
   Venn) y puertas lógicas (cada puerta, y la fórmula dibujada como circuito). Notación de la teoría:
   ¬ ∧ ∨ → ↔, V/F en las tablas y 1/0 en los circuitos. (07-10) Cuarta pestaña: paradojas (datos en paradojas.js).
   Enlace profundo: #logica/tablas|silogismos|puertas|paradojas|ejercicios|clasicos[/ficha]. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const LOG_TXT = {
  tabTablas: "Waarheidstabellen", tabSilog: "Syllogismen", tabPuertas: "Logische poorten",
  formula: "Formule", borrar: "Wissen", ejemplos: "Voorbeelden:", verCircuito: "Bekijk als circuit",
  ayudaFormula: "Schrijf een formule met de variabelen p, q, r, s, t en de connectieven ¬ ∧ ∨ → ↔ (of met de knoppen).",
  errVacia: "Schrijf een formule.", errCar: "Ik begrijp het symbool ‘{c}’ niet.", errFalta: "Er ontbreekt iets aan het einde van de formule.",
  errParen: "Er moet een haakje worden gesloten.", errSobra: "Er staat iets te veel na ‘{c}’.", errVars: "Maximaal vijf verschillende variabelen.",
  tautologia: "Tautologie: waar in alle rijen, ongeacht de waarde van de variabelen.",
  contradiccion: "Contradictie: onwaar in alle rijen.",
  contingencia: "Contingentie: waar in sommige rijen en onwaar in andere.",
  argTitulo: "Is dit argument geldig?", premisas: "Premissen (gescheiden door puntkomma’s)", conclusion: "Conclusie",
  comprobar: "Controleren", premisa: "Premisse {n}",
  valido: "Geldig: in alle rijen waarin de premissen waar zijn, is de conclusie dat ook.",
  noValido: "Niet geldig: er is minstens één rij met ware premissen en een onware conclusie (rood gemarkeerd). Het is een tegenvoorbeeld.",
  filasPremisas: "De gemarkeerde rijen zijn die waarin alle premissen waar zijn.",
  mp: "Modus ponens", mt: "Modus tollens", ac: "Bevestiging van de consequens (drogreden)", sd: "Disjunctief syllogisme", sh: "Hypothetisch syllogisme",
  demorgan: "Wet van De Morgan", tercero: "Wet van de uitgesloten derde", nocontra: "Tegenstrijdigheid",
  terminos: "Termen (in enkelvoud)", tS: "Subject (S)", tP: "Predicaat (P)", tM: "Middenterm (M)",
  defS: "Athener", defP: "sterfelijk", defM: "mens",
  pMayor: "Majorpremisse", pMenor: "Minorpremisse", concl: "Conclusie", figura: "Figuur",
  figN: "Figuur {n}",
  tipoA: "A · universeel bevestigend", tipoE: "E · universeel ontkennend", tipoI: "I · particulier bevestigend", tipoO: "O · particulier ontkennend",
  fA: "Alle {x} zijn {y}", fE: "Geen {x} is {y}", fI: "Sommige {x} zijn {y}", fO: "Sommige {x} zijn niet {y}",
  modo: "Modus {m}", sinNombre: "Deze modus heeft geen traditionele naam.",
  silValido: "Geldig. Het is de modus {nombre}.", silValidoSin: "Geldig.",
  silTrad: "Alleen geldig als we aannemen dat de “{t}” bestaan (traditionele lezing van Aristoteles). Voor de huidige logica volgt uit twee universele premissen geen particuliere conclusie.",
  silTradNombre: "In de traditionele lezing is het de modus {nombre}.",
  silNoValido: "Niet geldig.", reglasRotas: "Regels die worden overtreden:",
  r1: "De middenterm moet in ten minste één premisse gedistribueerd zijn (in zijn volle omvang genomen).",
  r2P: "Het predicaat is gedistribueerd in de conclusie maar niet in de majorpremisse (onrechtmatige major).",
  r2S: "Het subject is gedistribueerd in de conclusie maar niet in de minorpremisse (onrechtmatige minor).",
  r3: "Uit twee ontkennende premissen volgt niets.",
  r4a: "Als een premisse ontkennend is, moet de conclusie ontkennend zijn.",
  r4b: "Een ontkennende conclusie vereist een ontkennende premisse.",
  r5: "Uit twee particuliere premissen volgt niets.",
  r6: "Als een premisse particulier is, moet de conclusie particulier zijn.",
  venn: "Venndiagram van de premissen", vennAyuda: "Grijs: leeg gebied (er is niets). ✕: er is er minstens één. Een ✕ op een lijn betekent dat we niet weten aan welke kant het is.",
  vennConcl: "Als het diagram van de premissen al laat zien wat de conclusie zegt, is het syllogisme geldig.",
  euler: "Eulerdiagrammen van elke propositie",
  eulerJunto: "De twee premissen samen (Eulerdiagram)",
  eulerJuntoAyuda: "Alleen de gebieden die de premissen mogelijk laten worden getekend: wat een universele premisse leeg verklaart, verschijnt niet. Kijk naar de cirkels van S en P: als ze noodzakelijkerwijs zo zijn als de conclusie zegt, is het syllogisme geldig.",
  termLeyenda: "S = {s} · P = {p} · M = {m}",
  eulerAyuda: "De positie van de cirkels geeft de relatie weer: de een binnen de ander (alle), gescheiden (geen), overlappend (sommige). Het ✕ geeft aan waar we weten dat er minstens één is; bij de overlappingen kan de rest leeg zijn of niet.",
  eulerConcl: "Om het syllogisme te controleren, combineer je de twee diagrammen van de premissen via de middenterm (M) en kijk je of de cirkels van S en P noodzakelijkerwijs, zonder andere mogelijkheid, zo moeten zijn als in de conclusie.",
  figAyuda: "De figuur hangt af van waar de middenterm staat: 1 · M-P, S-M · 2 · P-M, S-M · 3 · M-P, M-S · 4 · P-M, M-S",
  puerta: "Poort", entradas: "Klik op de ingangen om ze te veranderen (1 = stroom loopt, 0 = geen stroom).", salida: "Uitgang",
  gNOT: "NOT (niet): inverteert de ingang. Het is de negatie ¬.",
  gAND: "AND (en): geeft alleen 1 als beide ingangen 1 zijn. Het is de conjunctie ∧.",
  gOR: "OR (of): geeft 1 als minstens één ingang 1 is. Het is de disjunctie ∨.",
  gNAND: "NAND (niet-en): is AND gevolgd door NOT. Met NAND-poorten kan elke schakeling worden gebouwd.",
  gNOR: "NOR (niet-of): is OR gevolgd door NOT.",
  gXOR: "XOR (exclusieve of): geeft 1 als de ingangen verschillend zijn. Het is “of het een of het ander, maar niet beide”.",
  gXNOR: "XNOR: geeft 1 als de ingangen gelijk zijn. Het is de biconditionele ↔.",
  circuito: "De formule als schakeling", circAyuda: "Klik op de variabelen om hun waarde te veranderen. De oplichtende draden voeren een 1. De conditionele p → q wordt opgebouwd als ¬p ∨ q, en de biconditionele met een XNOR-poort.",
  lampara: "Lamp", tablaPuerta: "Tabel van de poort",
  introTablas: "De logica onderzoekt wanneer een redenering correct is. Hier is elke letter (p, q, r…) een zin die waar (W) of onwaar (O) kan zijn, en de connectieven combineren die: ¬ (niet), ∧ (en), ∨ (of), → (als…, dan) en ↔ (dan en slechts dan). Schrijf een formule en de tabel zal alle mogelijke combinaties testen; verderop kun je controleren of een argument geldig is. Begin door op een van de voorbeelden te klikken.", introSilog: "Een syllogisme is een redenering met twee premissen en een conclusie die drie termen met elkaar verbinden: het subject (S) en het predicaat (P) van de conclusie, en de middenterm (M), die in beide premissen voorkomt en ze verbindt. Elke zin is van een van vier typen: A (alle…), E (geen…), I (sommige…) en O (sommige… niet). Verander de typen en de figuur, of klik op een voorbeeld, en de diagrammen laten zien of de conclusie uit de premissen volgt.", introPuertas: "Computers rekenen met dezelfde logica als waarheidstabellen, maar met 1 (stroom loopt) en 0 (stroom loopt niet) in plaats van W en O. Elke logische poort is een kleine schakeling die een bewerking uitvoert: NOT ontkent de invoer, AND gaat alleen aan als beide ingangen aan zijn, OR is genoeg aan één… Klik op de ingangen om ze aan en uit te zetten; verderop wordt elke formule omgezet in een schakeling.", introEjerc: "Elke kaart analyseert een zin met de hulpmiddelen van de andere tabbladen: letters voor de eenvoudige zinnen (p, q, r…), connectieven zoals in de waarheidstabellen, een Euler-diagram (elke cirkel is een groep mensen; ✕ = er is iemand daar; ? = onbekend) en de waarheidstabel, die aangeeft in welke gevallen de zin onwaar zou zijn. Probeer de zin eerst zelf te formaliseren voordat je “Logische vorm” opent.", introClasicos: "Argumenten van klassieke auteurs geanalyseerd met dezelfde hulpmiddelen als de oefeningen: logische vorm, Euler-diagram en waarheidstabel. Lees elke zin in zijn context, probeer te zeggen welke voorwaarde hij stelt (is het noodzakelijk?, is het voldoende?) en vergelijk daarna met de analyse.",
  tabParad: "Paradoxen", tabEjerc: "Oefeningen", tabClasicos: "Klassieke argumenten", parTodas: "Alle", parGrupo: "Weergeven", parProblema: "Waar zit het probleem?", parSalidas: "Voorgestelde oplossingen",
  parForma: "Logische vorm", parEuler: "De zin als Euler-diagram", parConting: "Contingent: een valse rij, een lege zone", parEscala: "De zin op een schaal", parDice: "Wat het zegt, wat het veronderstelt en wat het niet zegt", parPensar: "Om over na te denken:", parTabla: "Bekijk het in de waarheidstabel",
  parIntro: "Een paradox is een redenering die begint bij iets aanvaardbaars en, met stappen die correct lijken, uitkomt bij een onaanvaardbare of tegenstrijdige conclusie. Lees elke paradox en bedenk waar hij fout gaat voordat je de uitleg opent.",
  /* (10-10) pestañas «Cuadrado de oposición» y «Leyes de conjuntos» (tema 4 de Filosofía 1.º, apartados 6-18) */
  tabCuadrado: "Vierkant van de oppositie", tabConjuntos: "Wetten van verzamelingen",
  introCuadrado: "De vier proposities A, E, I en O met hetzelfde subject en hetzelfde predicaat zijn met elkaar verbonden: als je weet of één ervan waar of onwaar is, weet je soms iets over de andere. Kies een propositie, zeg of ze waar of onwaar is en kijk wat er volgt voor de andere. Verander daarna de lezing: met die van de moderne logica, die niet veronderstelt dat er S bestaan, gaan bijna alle relaties verloren.",
  introConjuntos: "Klassen (of verzamelingen) worden gecombineerd met operaties die lijken op connectieven: vereniging (of), doorsnede (en) en complement (niet). Schrijf twee uitdrukkingen en de venndiagrammen tonen in kleur het gebied dat uit elke uitdrukking volgt. Als de twee gebieden samenvallen, zijn de uitdrukkingen equivalent: je hebt een wet gecontroleerd.",
  cuElige: "We weten dat…", cuEsV: "waar is", cuEsF: "onwaar is",
  cuLectura: "Tekst", cuTrad: "Traditioneel: we veronderstellen dat er minstens één S bestaat", cuActual: "Moderne logica: we veronderstellen niet dat er S bestaan",
  cuTerminos: "Voorbeeld:",
  cuEj1: "Sporters en linkshandigen", cuEj1A: "Alle sporters zijn linkshandig.", cuEj1E: "Geen enkele sporter is linkshandig.", cuEj1I: "Sommige sporters zijn linkshandig.", cuEj1O: "Sommige sporters zijn niet linkshandig.",
  cuEj2: "Zoogdieren en gewervelden", cuEj2A: "Alle zoogdieren zijn gewerveld.", cuEj2E: "Geen enkel zoogdier is gewerveld.", cuEj2I: "Sommige zoogdieren zijn gewerveld.", cuEj2O: "Sommige zoogdieren zijn niet gewerveld.",
  cuEj3: "Eenhoorns", cuEj3A: "Alle eenhoorns hebben een hoorn.", cuEj3E: "Geen enkele eenhoorn heeft een hoorn.", cuEj3I: "Sommige eenhoorns hebben een hoorn.", cuEj3O: "Sommige eenhoorns hebben geen hoorn.",
  cuV: "Waar", cuF: "Onwaar", cuQ: "Weet niet", cuDato: "gegeven",
  cuContradictorias: "contradictoir", cuContrarias: "contrair", cuSubcontrarias: "subcontrair", cuSubalternas: "subaltern", cuPerdida: "gaat verloren",
  cuNotaTrad: "Met deze lezing gelden de vier relaties van het vierkant: contradictoir (waarden altijd tegengesteld), contrair (niet beide waar), subcontrair (niet beide onwaar) en subaltern (als de universele waar is, dan ook de particuliere).",
  cuNotaActual: "Met deze lezing blijven alleen de contradictoire relaties over. Als er geen enkele S zou zijn, zouden ‘alle S zijn P’ en ‘geen S is P’ tegelijk waar zijn, en ‘sommige S zijn P’ zou onwaar zijn. Aristoteles vermeed het probleem op een andere manier: voor hem veronderstellen bevestigende proposities dat er S bestaan en ontkennende niet, en O was ‘niet alle S is P’.",
  coIzq: "Eerste uitdrukking", coDer: "Tweede uitdrukking",
  coAyuda: "Gebruik de letters A, B en C, ∪ (vereniging), ∩ (doorsnede), − (verschil), ᶜ achter een letter of een haakje (complement) en haakjes. Ook + voor ∪, · of & voor ∩ en ' voor ᶜ zijn toegestaan.",
  coIguales: "De twee uitdrukkingen geven hetzelfde gebied: ze zijn equivalent.", coDistintas: "De gebieden vallen niet samen: de uitdrukkingen zijn niet equivalent. Kijk naar de zones waarin ze verschillen.",
  coLeyes: "Wetten om te controleren:", coConm: "Commutatieve wet", coAsoc: "Associatieve wet", coDM1: "De Morgan (1)", coDM2: "De Morgan (2)", coDist: "Distributieve wet", coDist2: "Distributieve wet (2)", coComp: "Complementwet", coDif: "Verschilwet", coTrampa: "Eentje die geen wet is",
  coErrCar: "Ik begrijp het symbool ‘{c}’ niet.", coErrFalta: "Er ontbreekt iets in de uitdrukking.", coErrParen: "Er moet een haakje worden gesloten.", coErrVacia: "Schrijf een uitdrukking.",
  /* (12-10) construcción a la vista y comprobación con Euler */
  coCompara: "De twee resultaten, naast elkaar",
  coRayas: "Elke zijde wordt zichtbaar opgebouwd. De eerste verzameling wordt zo gearceerd ⟋, de tweede zo ⟍, en het resultaat krijgt kleur met beide arceringen erbovenop: in de doorsnede (∩) kruisen de twee arceringen elkaar; in de vereniging (∪) is één voldoende; in het verschil (−) alleen de eerste; en het complement (ᶜ) is wat ongearceerd blijft.",
  coEuBtn: "Controleren in de 5 gevallen van Euler", coEuOcultar: "De gevallen van Euler verbergen",
  coEuIntro: "Een eulerdiagram tekent alleen de gebieden die in een concreet geval bestaan. Met twee verzamelingen zijn er vijf mogelijke gevallen, en een wet moet in alle vijf gelden: een losse tekening illustreert de wet, maar bewijst hem niet. Het venndiagram daarentegen heeft alle gebieden tegelijk.",
  coEuSep: "Gescheiden", coEuCorte: "Ze snijden elkaar", coEuAB: "A binnen B", coEuBA: "B binnen A", coEuIg: "A en B gelijk",
  coEuSi: "Ze komen overeen", coEuNo: "Ze komen niet overeen",
  coEuTodos: "Ze komen overeen in alle vijf gevallen: de gelijkheid geldt voor twee willekeurige verzamelingen, zoals het venndiagram laat zien.",
  coEuFalla: "Ze komen niet overeen in {n} van de vijf gevallen, dus het is geen wet.",
  coEuTrampa: "Let op: in het geval «{c}» komen ze wel overeen. Wie alleen dat geval had getekend, zou hebben gedacht dat het een wet is.",
  coEuTres: "De controle met Euler gebeurt met twee verzamelingen (A en B): met drie zijn er te veel mogelijke gevallen. Voor drie verzamelingen is het venndiagram het bewijs.",
  coDifieren: "Zones waarin ze verschillen", coUnivVacio: "U = universum: alles waarover we praten. De kleur markeert het resulterende gebied.",
  /* (20-10) portada de la sección: presenta las familias de herramientas (reutiliza los rótulos de las pestañas) */
  pIntro: "Het Logica-hoekje bundelt hulpmiddelen om te redeneren: probeer ze met je eigen formules en zinnen. Kies waar je wilt beginnen.",
  pPortada: "Home", pEntrar: "Openen",
  pDescClasica: "Syllogismen, het logisch vierkant en de verzamelingswetten, met Euler- en Venn-diagrammen.",
  pDescModerna: "Waarheidstabellen, formalisering, afleidingsregels, de logische wetten, kwantoren en logische poorten.",
  pDescFalacias: "Argumenten die geldig lijken maar het niet zijn: leer ze herkennen en controleer het zelf.",
  pDescParad: "Paradoxen, oefeningen en argumenten van klassieke auteurs, geanalyseerd met deze zelfde hulpmiddelen.",
  pDescLab: "Oefentafels: logisch spreken, waarheidsbomen, natuurlijke deductie, inductie en abductie, figurenwerelden, relaties, begeleide bewijzen, de oordelen van Kant en Spinoza.",
  /* (09-10) guía larga y sencilla de cada pestaña, plegada bajo la introducción */
  guiaTit: "Gids: hoe je hem gebruikt en waarvoor hij dient",
  guiaTablas: "<h3>Waarvoor dient het</h3><p>Wanneer we redeneren, verbinden we zinnen met woorden als “niet”, “en”, “of” of “als…, dan”. De waarheidstabel dient om zonder fouten te zien wanneer een samengestelde zin waar is en wanneer onwaar. En hij dient ook om te controleren of een redenering correct is: als de conclusie <em>waar moet zijn</em> telkens wanneer de premissen waar zijn.</p><h3>Voordat je begint: zinnen vervangen door letters</h3><p>Elke eenvoudige zin wordt vervangen door een letter. Bijvoorbeeld, “het regent” = <em>p</em> en “de grond wordt nat” = <em>q</em>. De woorden die zinnen verbinden, heten connectieven:</p><ul><li><strong>¬</strong> “niet”: ¬p = “het regent niet”.</li><li><strong>∧</strong> “en”: p ∧ q = “het regent en de grond wordt nat”. Is alleen waar als beide delen waar zijn.</li><li><strong>∨</strong> “of”: p ∨ q. Is waar als minstens één van beide waar is.</li><li><strong>→</strong> “als…, dan”: p → q = “als het regent, wordt de grond nat”. Is alleen onwaar in één geval: wanneer het regent en de grond niet nat wordt.</li><li><strong>↔</strong> “dan en slechts dan als”: is waar wanneer beide delen dezelfde waarde hebben (beide W of beide O).</li></ul><h3>Stap voor stap</h3><ol><li>Klik op een van de voorbeelden of typ je formule in het vak “Formule”. De symbolen die niet op het toetsenbord staan, hebben knoppen onder het vak.</li><li>Gebruik haakjes om te groeperen, zoals in de wiskunde: (p ∨ q) ∧ r is niet hetzelfde als p ∨ (q ∧ r).</li><li>De tabel wordt automatisch gemaakt terwijl je typt. Elke rij is een mogelijkheid, een combinatie van W en O voor de letters: met twee letters zijn er 4 rijen; met drie, 8.</li><li>Bekijk de laatste kolom en het bericht eronder. De formule kan een <strong>tautologie</strong> zijn (altijd waar), een <strong>contradictie</strong> (altijd onwaar) of een <strong>contingentie</strong> (afhankelijk van hoe de wereld is).</li><li>Verderop, bij “Is dit argument geldig?”, typ je de premissen gescheiden door puntkomma’s, dan de conclusie, en klik je op “Controleer”. Als er een rij is met alle premissen waar en de conclusie onwaar, wordt die rood weergegeven. Dat is een <strong>tegenvoorbeeld</strong>: het argument is niet geldig.</li></ol><h3>Een test om te beginnen</h3><p>In de voorbeelden van het argument, klik op “Bevestiging van de consequens”: “als het regent, wordt de grond nat; de grond wordt nat; dus het regent”. Het lijkt redelijk, maar de tabel vindt het tegenvoorbeeld: de grond kan nat zijn omdat iemand hem heeft besproeid. Vergelijk het met “Modus ponens”, dat wel geldig is.</p><p class=\"lg-nota\">Let op: dat een argument geldig is, betekent niet dat de conclusie waar is. Het betekent dat, <em>als</em> de premissen waar zijn, de conclusie ook waar is.</p>",
  guiaSilog: "<h3>Waarvoor het dient</h3><p>Veel redeneringen in het dagelijks leven gaan over groepen dingen of personen: “alle…”, “geen…”, “sommige…”. Het syllogisme is de oudste manier om ze te bestuderen: Aristoteles heeft het meer dan 2.300 jaar geleden uitgevonden. Deze tool vertelt je of een redenering van dit type correct is en laat het je zien met tekeningen.</p><h3>De onderdelen</h3><ul><li>Een syllogisme heeft <strong>twee premissen</strong> en een <strong>conclusie</strong>.</li><li>Er zijn drie termen, dat wil zeggen drie groepen. In “Elke mens is sterfelijk; elke athener is mens; dus elke athener is sterfelijk” is <em>athener</em> het onderwerp van de conclusie (S), <em>sterfelijk</em> het predicaat van de conclusie (P) en <em>mens</em> de middenterm (M): die vormt een brug tussen de andere twee en verdwijnt in de conclusie.</li><li>Elke zin is van een van vier typen: <strong>A</strong> “elke S is P”, <strong>E</strong> “geen S is P”, <strong>I</strong> “sommige S zijn P” en <strong>O</strong> “sommige S zijn niet P”. Een trucje om het te onthouden: A en I zijn de klinkers van <em>affirmo</em> (“afirmo”, in het Latijn), en E en O die van <em>nego</em> (“nego”).</li></ul><h3>Stap voor stap</h3><ol><li>Schrijf de drie termen in het enkelvoud, of laat de voorbeeldtermen staan.</li><li>Kies in de dropdownmenu’s het type van elke premisse en van de conclusie.</li><li>Kies de figuur: geef aan op welke plaats in elke premisse de middenterm staat. Als je het niet zeker weet, klik dan op een van de voorbeelden en let op hoe het verandert.</li><li>Lees het resultaat: “Geldig” of “Niet geldig”. Als het niet geldig is, wordt aangegeven welke regel wordt overtreden.</li><li>Bekijk de diagrammen. Elke cirkel is een groep. In het Venn-diagram betekent grijs = lege zone (daar is niets) en ✕ = daar is er minstens één. In het Euler-diagram betekent een cirkel binnen een andere “alle”, gescheiden betekent “geen” en gekruist “sommige”. Als je alleen de premissen tekent en wat de conclusie zegt al verschijnt, is het syllogisme geldig.</li></ol><h3>Een test om te beginnen</h3><p>Schrijf je eigen termen: S = kat, M = zoogdier, P = dier. Probeer eerst AAA in figuur 1 (de modus Barbara): “elk zoogdier is een dier; elke kat is een zoogdier; dus elke kat is een dier”. Verander daarna de kleine premisse in “Sommige…” en kijk wat er met de conclusie gebeurt. En een uitdaging: zoek een syllogisme met ware premissen en een ware conclusie dat toch niet geldig is.</p>",
  guiaPuertas: "<h3>Waarvoor dient dit</h3><p>Mobieltjes en computers “denken” niet: ze doen elke seconde miljoenen heel eenvoudige logische bewerkingen. Elke bewerking wordt uitgevoerd door een logische poort, een piepklein circuit. Dit tabblad laat zien dat de logica van de waarheidstabellen dezelfde is die computers laat werken: alleen wordt V vervangen door 1 (stroom loopt) en F door 0 (geen stroom).</p><h3>Stap voor stap</h3><ol><li>Kies een poort met de knoppen hierboven (NOT, AND, OR…). Daaronder zie je wat hij doet en met welke connectief uit de waarheidstabellen hij overeenkomt.</li><li>Druk op de ingangen om ze te wisselen tussen 0 en 1, en kijk of de uitgang oplicht. De tabel van de poort vat alle mogelijke gevallen samen.</li><li>In “De formule als circuit” typ je een formule, net als bij de waarheidstabellen, en die wordt getekend als een schakeling van poorten. Druk op de letters om hun waarde te veranderen: de brandende draden dragen een 1, en de lamp aan het einde is het resultaat.</li><li>Als je van het tabblad “Waarheidstabellen” komt, brengt de knop “Bekijk als circuit” je hier naar de formule die je aan het gebruiken was.</li></ol><h3>Een test om te beginnen</h3><p>Denk aan het licht in een gang met een schakelaar aan elk uiteinde: welke je ook indrukt, het licht verandert. Welke poort doet dat? Probeer XOR. En nog een: een alarm dat afgaat als de huisdeur open is <em>en</em> het alarm is ingeschakeld. Welke poort is dat?</p><p class=\"lg-nota\">Curieus: met maar één type poort, NAND, vele malen herhaald, kun je elke schakeling bouwen, inclusief een hele computer.</p>",
  guiaParad: "<h3>Waarvoor dient dit?</h3><p>Een paradox is geen raadsel met een truc en ook geen vreemde zin: het is een probleem dat je dwingt om beter na te denken. Hij vertrekt vanuit dingen die bijna iedereen zou accepteren en komt stap voor stap tot iets absurds. Sommige paradoxen zijn opgelost en hebben ons iets nieuws geleerd; bijvoorbeeld dat een som van oneindig veel getallen een eindig resultaat kan opleveren. Andere worden vandaag nog steeds bediscussieerd.</p><h3>Hoe gebruik je de kaarten</h3><ol><li>Gebruik het uitklapmenu “Toon” om één groep te zien, of laat “Alle” staan.</li><li>Lees de titel, de herkomst (wie hem bedacht en wanneer) en de uitspraak in het kader.</li><li>Voordat je iets opent, <strong>probeer zelf te zeggen waar het probleem zit</strong>: welke stap lijkt je twijfelachtig?, welke premisse zou je verwerpen?</li><li>Open “Waar zit het probleem?” en vergelijk het met wat je had bedacht. Op sommige kaarten is er een knop om de paradox in de waarheidstabel te zien.</li><li>Open “Voorgestelde oplossingen”: dit zijn de antwoorden van verschillende filosofen. Je hoeft niet voor de eerste te kiezen; soms spreken ze elkaar tegen.</li><li>Eindig met “Om over na te denken”, dat de paradox toepast op een herkenbare situatie.</li></ol><h3>Een manier om in de klas te werken</h3><p>In tweetallen: de ene persoon verdedigt dat de redenering correct is en de andere zoekt de foute stap. Daarna wisselen jullie van rol. Om te beginnen zijn “De leugenaar”, “Achilles en de schildpad” of “Het schip van Theseus” geschikt.</p>",
  guiaEjerc: "<h3>Waarvoor dient dit?</h3><p>Hier zijn geen paradoxen: er zijn gewone zinnen, zoals die we in een tekst lezen of in een discussie zeggen. Ze analyseren helpt om precies te begrijpen wat ze beweren, wat ze als vanzelfsprekend aannemen en vooral wat ze <em>niet</em> zeggen, ook al lijkt het zo. Dat is wat nodig is om een tekst te becommentariëren zonder er dingen aan toe te schrijven die er niet in staan.</p><h3>Stap voor stap</h3><ol><li>Lees de zin rustig. Zoek de woorden die hem structuur geven: “alle”, “sommige”, “geen”, “alleen”, “als…”, “en”, “of”, “niet”.</li><li>Geef de eenvoudige zinnen letters (bijvoorbeeld <em>p</em> = “is gelukkig”, <em>q</em> = “krijgt wat hij/zij wenst”) en schrijf op papier hoe je denkt dat ze met elkaar samenhangen.</li><li>Open “Logische vorm” en vergelijk. Als er een Euler-diagram is, is elke cirkel een groep mensen: ✕ = daar is zeker iemand; ? = de zin zegt niet of er iemand is.</li><li>Klik op “Bekijk het in de waarheidstabel”: de onware rijen zijn de gevallen die de zin verbiedt. Als er ware en onware rijen zijn, is de zin <strong>contingent</strong>: hij zegt iets over de wereld, dat ook anders had kunnen zijn.</li><li>Open “Wat het zegt, wat het vooronderstelt en wat het niet zegt”, en eindig met “Om over na te denken”.</li></ol><h3>Let op twee veelvoorkomende valkuilen</h3><ul><li>“Als A, dan B” is niet hetzelfde als “als B, dan A”. “Als het regent, word ik nat” zegt niet dat het elke keer dat ik nat word, regent.</li><li>“Alleen wie A is, is B” zegt niet dat iedereen die A is, B is. Het stelt een noodzakelijke voorwaarde (zonder A geen B), geen voldoende voorwaarde (met A is het niet genoeg).</li></ul>",
  guiaClasicos: "<h3>Waarvoor dient dit</h3><p>Filosofen argumenteren met zorgvuldig geformuleerde zinnen, en een woord als “alleen” of “als” verandert volledig wat ze verdedigen. Hier worden zinnen uit klassieke werken geanalyseerd met de hulpmiddelen van de andere tabbladen, om de oorspronkelijke tekst preciezer te lezen.</p><h3>Stap voor stap</h3><ol><li>Lees eerst de inleiding van de groep: die plaatst je in het werk (wie spreekt, op welk moment en wat er wordt besproken).</li><li>Lees de zin en vraag je af welke voorwaarde hij stelt. Is die <strong>noodzakelijk</strong> (zonder die voorwaarde bereik je niet wat je zoekt) of <strong>voldoende</strong> (met die voorwaarde is het genoeg)? Of allebei?</li><li>Open “Logische vorm” en bekijk het Euler-diagram en de waarheidstabel, net als bij “Oefeningen”.</li><li>Vergelijk de kaarten van dezelfde groep: soms zijn het varianten van hetzelfde idee, en een kleine verandering in de zin verandert het diagram.</li><li>Eindig met “Om over na te denken” en, als je kunt, lees de hele passage in “Teksten”.</li></ol><p class=\"lg-nota\">Op dit moment staan de zinnen van Sint-Augustinus in <em>Over het gelukkige leven</em>: wie is gelukkig, degene die heeft wat hij wenst of degene die wenst wat hij niet kan verliezen?</p>"
};
const logT = (k, v) => String(LOG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const logEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const LOG = { parGrupo: "all", tab: "portada", formula: "(p → q) ∧ p → q", prem: "p → q; p", concl: "q",
  sil: { S: "", P: "", M: "", may: "A", men: "A", con: "A", fig: 1 }, cu: { tipo: "A", val: true, trad: true, ej: 1 }, co: { izq: "(A ∪ B)ᶜ", der: "Aᶜ ∩ Bᶜ" }, gate: "AND", gA: 1, gB: 0, circ: {} };
const logGuia = k => '<details class="lg-guia"><summary>' + logT("guiaTit") + "</summary>" + logT(k) + "</details>";
const logBox = () => document.getElementById("logicabox");

/* ---------- fórmulas: lectura, cálculo y escritura ---------- */
function logTokens(s){
  const out = [];
  for (let i = 0; i < s.length;){
    const c = s[i], two = s.slice(i, i + 2), three = s.slice(i, i + 3);
    if (/\s/.test(c)){ i++; continue; }
    if (/[p-t]/.test(c)){ out.push({ k: "var", n: c }); i++; continue; }
    if ("¬~!".includes(c)){ out.push({ k: "not" }); i++; continue; }
    if ("∧&·*".includes(c)){ out.push({ k: "and" }); i++; continue; }
    if ("∨|+".includes(c)){ out.push({ k: "or" }); i++; continue; }
    if (three === "<->" || three === "<=>"){ out.push({ k: "iff" }); i += 3; continue; }
    if (c === "↔"){ out.push({ k: "iff" }); i++; continue; }
    if (two === "->" || two === "=>"){ out.push({ k: "imp" }); i += 2; continue; }
    if (c === "→"){ out.push({ k: "imp" }); i++; continue; }
    if (c === "(" || c === ")"){ out.push({ k: c }); i++; continue; }
    if (c === "[" || c === "]"){ out.push({ k: c === "[" ? "(" : ")" }); i++; continue; }   /* (18-10) corchetes, como en las hojas de leyes */
    throw new Error(logT("errCar", { c }));
  }
  return out;
}
function logParse(s){
  if (!String(s).trim()) throw new Error(logT("errVacia"));
  const tk = logTokens(s); let i = 0;
  const peek = () => tk[i] && tk[i].k;
  const iff = () => { let a = imp(); while (peek() === "iff"){ i++; a = { t: "iff", a, b: imp() }; } return a; };
  const imp = () => { const a = or(); if (peek() === "imp"){ i++; return { t: "imp", a, b: imp() }; } return a; };
  const or = () => { let a = and(); while (peek() === "or"){ i++; a = { t: "or", a, b: and() }; } return a; };
  const and = () => { let a = not(); while (peek() === "and"){ i++; a = { t: "and", a, b: not() }; } return a; };
  const not = () => { if (peek() === "not"){ i++; return { t: "not", a: not() }; } return atom(); };
  const atom = () => {
    const x = tk[i];
    if (!x) throw new Error(logT("errFalta"));
    if (x.k === "var"){ i++; return { t: "var", n: x.n }; }
    if (x.k === "("){ i++; const e = iff(); if (peek() !== ")") throw new Error(logT("errParen")); i++; return e; }
    throw new Error(logT("errFalta"));
  };
  const e = iff();
  if (i < tk.length) throw new Error(logT("errSobra", { c: logStr(e) }));
  return e;
}
const LOG_PREC = { iff: 1, imp: 2, or: 3, and: 4, not: 5, var: 6 };
const LOG_SYM = { iff: "↔", imp: "→", or: "∨", and: "∧" };
function logStr(n, pp){
  let s;
  if (n.t === "var") s = n.n;
  else if (n.t === "not") s = "¬" + logStr(n.a, LOG_PREC.not);
  else s = logStr(n.a, LOG_PREC[n.t] + (n.t === "imp" ? 0.5 : 0)) + " " + LOG_SYM[n.t] + " " + logStr(n.b, LOG_PREC[n.t] + (n.t === "imp" ? 0 : 0.5));
  return (pp != null && LOG_PREC[n.t] < pp) ? "(" + s + ")" : s;
}
function logEval(n, v){
  switch (n.t){
    case "var": return v[n.n];
    case "not": return !logEval(n.a, v);
    case "and": return logEval(n.a, v) && logEval(n.b, v);
    case "or": return logEval(n.a, v) || logEval(n.b, v);
    case "imp": return !logEval(n.a, v) || logEval(n.b, v);
    case "iff": return logEval(n.a, v) === logEval(n.b, v);
  }
}
function logVars(nodes){ const s = new Set(); const go = n => { if (n.t === "var") s.add(n.n); else { go(n.a); if (n.b) go(n.b); } }; nodes.forEach(go); return [...s].sort(); }
function logSubs(n, out, seen){ if (n.t === "var") return; logSubs(n.a, out, seen); if (n.b) logSubs(n.b, out, seen); const k = logStr(n); if (!seen.has(k)){ seen.add(k); out.push(n); } }
function logFilas(vars){
  const rows = [];
  for (let i = 0; i < (1 << vars.length); i++){ const v = {}; vars.forEach((x, j) => { v[x] = !((i >> (vars.length - 1 - j)) & 1); }); rows.push(v); }
  return rows;
}
const logVF = b => '<td class="lg-' + (b ? "v" : "f") + '">' + (b ? "V" : "F") + "</td>";

/* ---------- pestaña 1: tablas de verdad y validez ---------- */
function logTablaHtml(){
  let res;
  try {
    const e = logParse(LOG.formula), vars = logVars([e]);
    if (vars.length > 5) throw new Error(logT("errVars"));
    const subs = []; logSubs(e, subs, new Set());
    const filas = logFilas(vars), vals = filas.map(v => logEval(e, v));
    const veredicto = vals.every(Boolean) ? "tautologia" : (!vals.some(Boolean) ? "contradiccion" : "contingencia");
    res = '<div class="tablewrap"><table class="lg-tabla"><thead><tr>' + vars.map(x => "<th>" + x + "</th>").join("") +
      subs.map((s, k) => '<th class="' + (k === subs.length - 1 ? "lg-main" : "") + '">' + logEsc(logStr(s)) + "</th>").join("") + "</tr></thead><tbody>" +
      filas.map(v => "<tr>" + vars.map(x => logVF(v[x])).join("") + subs.map((s, k) => logVF(logEval(s, v)).replace("<td", k === subs.length - 1 ? '<td data-main="1"' : "<td")).join("") + "</tr>").join("") +
      '</tbody></table></div><p class="lg-veredicto lg-' + veredicto + '">' + logT(veredicto) + "</p>";
  } catch (err){ res = '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  return res;
}
function logArgHtml(){
  try {
    const ps = LOG.prem.split(";").map(x => x.trim()).filter(Boolean).map(logParse), c = logParse(LOG.concl);
    const vars = logVars([...ps, c]);
    if (vars.length > 5) throw new Error(logT("errVars"));
    const filas = logFilas(vars); let valido = true;
    const cuerpo = filas.map(v => {
      const pv = ps.map(p => logEval(p, v)), cv = logEval(c, v), todas = pv.every(Boolean), malo = todas && !cv;
      if (malo) valido = false;
      return '<tr class="' + (malo ? "lg-contra" : (todas ? "lg-ok" : "")) + '">' + vars.map(x => logVF(v[x])).join("") + pv.map(logVF).join("") + logVF(cv) + "</tr>";
    }).join("");
    return '<div class="tablewrap"><table class="lg-tabla"><thead><tr>' + vars.map(x => "<th>" + x + "</th>").join("") +
      ps.map((p, k) => '<th title="' + logEsc(logT("premisa", { n: k + 1 })) + '">' + logEsc(logStr(p)) + "</th>").join("") + '<th class="lg-main">' + logEsc(logStr(c)) + "</th></tr></thead><tbody>" + cuerpo +
      '</tbody></table></div><p class="lg-nota">' + logT("filasPremisas") + '</p><p class="lg-veredicto ' + (valido ? "lg-tautologia" : "lg-contradiccion") + '">' + logT(valido ? "valido" : "noValido") + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
const LOG_EJ_F = [["(p → q) ∧ p → q", "mp"], ["¬(p ∧ q) ↔ ¬p ∨ ¬q", "demorgan"], ["p ∨ ¬p", "tercero"], ["p ∧ ¬p", "nocontra"]];
const LOG_EJ_A = [["p → q; p", "q", "mp"], ["p → q; ¬q", "¬p", "mt"], ["p → q; q", "p", "ac"], ["p ∨ q; ¬p", "q", "sd"], ["p → q; q → r", "p → r", "sh"]];
const LOG_TECLAS = ["p", "q", "r", "s", "t", "¬",   /* t (17-10): el ejercicio de Mónica con cinco letras; logTokens ya admitía p-t */ "∧", "∨", "→", "↔", "(", ")"];
function logTeclado(id){ return '<div class="lg-teclas" data-para="' + id + '">' + LOG_TECLAS.map(k => '<button type="button" class="chip" data-tecla="' + k + '">' + k + "</button>").join("") + "</div>"; }
function logRenderTablas(){
  return '<div class="lg-panel"><label class="lg-label" for="lg-f">' + logT("formula") + '</label><p class="lg-nota">' + logT("ayudaFormula") + '</p>' +
    '<div class="lg-fila"><input id="lg-f" class="lg-input" value="' + logEsc(LOG.formula) + '" autocomplete="off" spellcheck="false"><button type="button" class="btn ghost" data-lg="borrar">' + logT("borrar") + '</button></div>' +
    logTeclado("lg-f") + '<p class="lg-nota">' + logT("ejemplos") + " " + LOG_EJ_F.map(([f, n]) => '<button type="button" class="chip" data-ejf="' + logEsc(f) + '">' + logT(n) + "</button>").join(" ") + '</p>' +
    '<div id="lg-tabla">' + logTablaHtml() + '</div><p><button type="button" class="btn" data-lg="circuito">' + logT("verCircuito") + " →</button></p></div>" +
    '<div class="lg-panel"><h2>' + logT("argTitulo") + '</h2><label class="lg-label" for="lg-p">' + logT("premisas") + '</label><input id="lg-p" class="lg-input" value="' + logEsc(LOG.prem) + '" autocomplete="off" spellcheck="false">' +
    logTeclado("lg-p") + '<label class="lg-label" for="lg-c">' + logT("conclusion") + '</label><div class="lg-fila"><input id="lg-c" class="lg-input" value="' + logEsc(LOG.concl) + '" autocomplete="off" spellcheck="false"><button type="button" class="btn" data-lg="arg">' + logT("comprobar") + "</button></div>" +
    '<p class="lg-nota">' + logT("ejemplos") + " " + LOG_EJ_A.map(([p, c, n]) => '<button type="button" class="chip" data-eja="' + logEsc(p) + '" data-ejc="' + logEsc(c) + '">' + logT(n) + "</button>").join(" ") + '</p><div id="lg-arg">' + logArgHtml() + "</div></div>";
}

/* ---------- pestaña 2: silogismos ---------- */
const LOG_MODOS = { "AAA-1": "Barbara", "EAE-1": "Celarent", "AII-1": "Darii", "EIO-1": "Ferio", "AAI-1": "Barbari", "EAO-1": "Celaront",
  "EAE-2": "Cesare", "AEE-2": "Camestres", "EIO-2": "Festino", "AOO-2": "Baroco", "EAO-2": "Cesaro", "AEO-2": "Camestros",
  "IAI-3": "Disamis", "AII-3": "Datisi", "OAO-3": "Bocardo", "EIO-3": "Ferison", "AAI-3": "Darapti", "EAO-3": "Felapton",
  "AEE-4": "Calemes", "IAI-4": "Dimatis", "EIO-4": "Fresison", "AAI-4": "Bramantip", "EAO-4": "Fesapo", "AEO-4": "Calemos" };
/* términos de cada premisa según la figura: [sujeto, predicado] */
const LOG_FIG = { 1: [["M", "P"], ["S", "M"]], 2: [["P", "M"], ["S", "M"]], 3: [["M", "P"], ["M", "S"]], 4: [["P", "M"], ["M", "S"]] };
const LOG_BIT = { S: 0, P: 1, M: 2 };
const logEn = (r, x) => !!(r & (1 << LOG_BIT[x]));
/* regiones del diagrama 1..7 (bit 0 = S, 1 = P, 2 = M); el 0 (fuera de todo) no cuenta */
const LOG_REG = [1, 2, 3, 4, 5, 6, 7];
function logZona(tipo, x, y){   /* regiones que la proposición vacía (A, E) o en las que afirma que hay algo (I, O) */
  return LOG_REG.filter(r => logEn(r, x) && (tipo === "A" || tipo === "O" ? !logEn(r, y) : logEn(r, y)));
}
function logCumple(m, tipo, x, y){ const z = logZona(tipo, x, y); return tipo === "A" || tipo === "E" ? z.every(r => !m[r]) : z.some(r => m[r]); }
function logSilValido(s, existen){
  const [may, men] = LOG_FIG[s.fig];
  for (let k = 0; k < 128; k++){
    const m = {}; LOG_REG.forEach((r, j) => { m[r] = !!(k & (1 << j)); });
    if (existen && existen.some(x => !LOG_REG.some(r => logEn(r, x) && m[r]))) continue;
    if (logCumple(m, s.may, may[0], may[1]) && logCumple(m, s.men, men[0], men[1]) && !logCumple(m, s.con, "S", "P")) return false;
  }
  return true;
}
function logReglas(s){
  const [may, men] = LOG_FIG[s.fig], dist = (tipo, pos) => pos === 0 ? (tipo === "A" || tipo === "E") : (tipo === "E" || tipo === "O");
  const neg = t => t === "E" || t === "O", part = t => t === "I" || t === "O", rotas = [];
  if (!dist(s.may, may.indexOf("M")) && !dist(s.men, men.indexOf("M"))) rotas.push("r1");
  if (dist(s.con, 1) && !dist(s.may, may.indexOf("P"))) rotas.push("r2P");
  if (dist(s.con, 0) && !dist(s.men, men.indexOf("S"))) rotas.push("r2S");
  if (neg(s.may) && neg(s.men)) rotas.push("r3");
  else if ((neg(s.may) || neg(s.men)) && !neg(s.con)) rotas.push("r4a");
  if (neg(s.con) && !neg(s.may) && !neg(s.men)) rotas.push("r4b");
  if (part(s.may) && part(s.men)) rotas.push("r5");
  else if ((part(s.may) || part(s.men)) && !part(s.con)) rotas.push("r6");
  return rotas;
}
const LOG_CEN = { 1: [86, 92], 2: [234, 92], 3: [160, 78], 4: [160, 236], 5: [112, 166], 6: [208, 166], 7: [160, 136] };
function logVenn(s, nombres){
  const [may, men] = LOG_FIG[s.fig], vacias = new Set(), cruces = [];
  [[s.may, may], [s.men, men]].forEach(([t, xy]) => { if (t === "A" || t === "E") logZona(t, xy[0], xy[1]).forEach(r => vacias.add(r)); });
  [[s.may, may], [s.men, men]].forEach(([t, xy]) => {
    if (t !== "I" && t !== "O") return;
    const z = logZona(t, xy[0], xy[1]).filter(r => !vacias.has(r));
    if (z.length === 1) cruces.push(LOG_CEN[z[0]]);
    else if (z.length === 2) cruces.push([(LOG_CEN[z[0]][0] + LOG_CEN[z[1]][0]) / 2, (LOG_CEN[z[0]][1] + LOG_CEN[z[1]][1]) / 2]);
  });
  const C = { S: [120, 118], P: [200, 118], M: [160, 188] }, R = 74, ids = ["S", "P", "M"];
  let defs = "<defs>" + ids.map(x => '<clipPath id="lgc' + x + '"><circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '"/></clipPath>').join("");
  for (let o = 0; o < 8; o++) defs += '<mask id="lgm' + o + '"><rect width="320" height="300" fill="#fff"/>' + ids.filter((x, j) => o & (1 << j)).map(x => '<circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '" fill="#000"/>').join("") + "</mask>";
  defs += "</defs>";
  let zonas = "";
  vacias.forEach(r => {
    let g = '<rect width="320" height="300" class="lg-vacia" mask="url(#lgm' + (7 & ~r) + ')"/>';
    ids.forEach((x, j) => { if (r & (1 << j)) g = '<g clip-path="url(#lgc' + x + ')">' + g + "</g>"; });
    zonas += g;
  });
  const circ = ids.map(x => '<circle cx="' + C[x][0] + '" cy="' + C[x][1] + '" r="' + R + '" class="lg-circ"/>').join("");
  const etq = '<text x="40" y="40" class="lg-vt">S · ' + logEsc(nombres.S) + '</text><text x="280" y="40" text-anchor="end" class="lg-vt">P · ' + logEsc(nombres.P) + '</text><text x="160" y="288" text-anchor="middle" class="lg-vt">M · ' + logEsc(nombres.M) + "</text>";
  const xs = cruces.map(([x, y]) => '<text x="' + x + '" y="' + (y + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("");
  return '<svg viewBox="0 0 320 300" class="lg-venn" role="img" aria-label="' + logEsc(logT("venn")) + '">' + defs + zonas + circ + etq + xs + "</svg>";
}
/* Euler con los tres términos a la vez: se dibujan solo las zonas que las premisas dejan posibles.
   Las 64 disposiciones (premisa mayor × menor × figura) están precalculadas por tools/logica_euler.js, que busca
   para cada caso la colocación de los círculos que dibuja todas las zonas posibles y ninguna imposible.
   Para regenerarlas: node tools/logica_euler.js */
/* EULER:INICIO */
const LOG_EULER_PRE = {"AA-1":{"c":[[0,0,44],[10,0,82],[0,0,62]],"caja":[-80,-90,100,90],"etq":[[0,-2],[76,-10],[-52,-10]],"x":[]},"AA-2":{"c":[[0,0,44],[40,0,44],[20,0,82]],"caja":[-70,-90,110,90],"etq":[[18,-2],[62,-10],[18,-62]],"x":[]},"AA-3":{"c":[[0,0,82],[40,0,82],[20,0,44]],"caja":[-90,-90,130,90],"etq":[[-62,-2],[102,-2],[18,2]],"x":[]},"AA-4":{"c":[[0,0,82],[10,0,44],[10,0,62]],"caja":[-90,-90,90,90],"etq":[[-66,-10],[14,-2],[-42,-10]],"x":[]},"AE-1":{"c":[[0,0,62],[90,0,82],[120,0,44]],"caja":[-70,-90,180,90],"etq":[[-28.3,1.7],[71.7,-52.5],[121.7,5.8]],"x":[]},"AE-2":{"c":[[0,0,44],[120,0,44],[120,10,62]],"caja":[-52,-60,190,80],"etq":[[0.4,0.5],[121.4,0.5],[109.3,57]],"x":[]},"AE-3":{"c":[[0,0,62],[90,0,82],[120,0,44]],"caja":[-70,-90,180,90],"etq":[[-28.3,1.7],[71.7,-52.5],[121.7,5.8]],"x":[]},"AE-4":{"c":[[0,0,44],[120,0,44],[120,10,62]],"caja":[-52,-60,190,80],"etq":[[0.4,0.5],[121.4,0.5],[109.3,57]],"x":[]},"AI-1":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[5.8,-19.2],[110,14.2]],"x":[[51.1,0]]},"AI-2":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[110,14.2],[5.8,-19.2]],"x":[[30.8,-37.9]]},"AI-3":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[5.8,-19.2],[110,14.2]],"x":[[51.1,0]]},"AI-4":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[110,14.2],[5.8,-19.2]],"x":[[30.8,-37.9]]},"AO-1":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,18.3],[10,30.8],[51.7,-10.8]],"x":[[-2.5,-37.9]]},"AO-2":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[51.7,1.7],[110,14.2],[5.8,-19.2]],"x":[[-31.4,0]]},"AO-3":{"c":[[0,0,82],[70,0,82],[80,0,62]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[5.8,-19.2],[51.7,18.3]],"x":[[102.6,0]]},"AO-4":{"c":[[0,0,82],[80,0,62],[70,0,82]],"caja":[-90,-90,160,90],"etq":[[-44.2,-19.2],[51.7,1.7],[5.8,-19.2]],"x":[[132.9,-31.7]]},"EA-1":{"c":[[0,0,44],[120,0,44],[0,10,62]],"caja":[-70,-60,172,80],"etq":[[-1.4,0.5],[119.6,0.5],[10.7,57]],"x":[]},"EA-2":{"c":[[0,0,44],[120,0,44],[0,10,62]],"caja":[-70,-60,172,80],"etq":[[-1.4,0.5],[119.6,0.5],[10.7,57]],"x":[]},"EA-3":{"c":[[0,0,82],[90,0,62],[-30,0,44]],"caja":[-90,-90,160,90],"etq":[[18.3,-52.5],[118.3,1.7],[-35.8,1.7]],"x":[]},"EA-4":{"c":[[0,0,82],[90,0,62],[-30,0,44]],"caja":[-90,-90,160,90],"etq":[[18.3,-52.5],[118.3,1.7],[-35.8,1.7]],"x":[]},"EE-1":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EE-2":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EE-3":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EE-4":{"c":[[0,0,82],[60,0,82],[-20,150,62]],"caja":[-90,-90,150,220],"etq":[[30,-2],[110,-14],[-22,150]],"x":[]},"EI-1":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EI-2":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EI-3":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EI-4":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-68,87.7]],"x":[[-32,38.6]]},"EO-1":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-29,40],[49,22.7],[-68,87.7]],"x":[[7.8,-12]]},"EO-2":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-29,40],[49,22.7],[-68,87.7]],"x":[[7.8,-12]]},"EO-3":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-33.3,31.3]],"x":[[-65.5,77.6]]},"EO-4":{"c":[[0,0,82],[70,0,62],[-50,60,62]],"caja":[-120,-90,140,130],"etq":[[-24.7,-38],[44.7,1],[-33.3,31.3]],"x":[[-65.5,77.6]]},"IA-1":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,-2.5],[124.2,-19.2],[74.2,-19.2]],"x":[[24.2,57.9]]},"IA-2":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,-2.5],[124.2,-19.2],[74.2,-19.2]],"x":[[24.2,57.9]]},"IA-3":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[-40,14.2]],"x":[[18.9,0]]},"IA-4":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[-40,14.2]],"x":[[18.9,0]]},"IE-1":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"IE-2":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"IE-3":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"IE-4":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[138,87.7]],"x":[[102,38.6]]},"II-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"II-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"II-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"II-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-10]]},"IO-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-22]]},"IO-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[46,6],[106,-30],[6,26]],"x":[[36,74],[-20,-22]]},"IO-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[14,6],[106,-30],[58,-2]],"x":[[36,74],[36,78]]},"IO-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[14,6],[106,-30],[58,-2]],"x":[[36,74],[36,78]]},"OA-1":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,1.7],[124.2,-19.2],[74.2,-19.2]],"x":[[-61.2,-15]]},"OA-2":{"c":[[0,0,62],[80,0,82],[10,0,82]],"caja":[-80,-90,170,90],"etq":[[28.3,1.7],[103.3,51.7],[74.2,-19.2]],"x":[[111.4,0]]},"OA-3":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[18.3,18.3]],"x":[[-32.6,0]]},"OA-4":{"c":[[0,0,82],[70,0,82],[-10,0,62]],"caja":[-90,-90,160,90],"etq":[[64.2,-19.2],[114.2,22.5],[-40,14.2]],"x":[[37.1,-73.3]]},"OE-1":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[103.3,31.3]],"x":[[135.5,77.6]]},"OE-2":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[21,22.7],[99,40],[138,87.7]],"x":[[62.2,-12]]},"OE-3":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[25.3,1],[94.7,-38],[103.3,31.3]],"x":[[135.5,77.6]]},"OE-4":{"c":[[0,0,62],[70,0,82],[120,60,62]],"caja":[-70,-90,190,130],"etq":[[21,22.7],[99,40],[138,87.7]],"x":[[62.2,-12]]},"OI-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[-50,64],[-20,-10]]},"OI-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[36,-74],[-20,-10]]},"OI-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[-50,64],[-20,-10]]},"OI-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[42,22],[106,-30],[30,106]],"x":[[36,-74],[-20,-10]]},"OO-1":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[30,34],[106,-30],[30,106]],"x":[[-50,64],[-20,-22]]},"OO-2":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[30,34],[106,-30],[30,106]],"x":[[36,-74],[-20,-22]]},"OO-3":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[22,6],[106,-30],[90,50]],"x":[[-50,64],[36,78]]},"OO-4":{"c":[[0,0,82],[60,0,82],[30,50,82]],"caja":[-90,-90,150,140],"etq":[[22,6],[106,-30],[-30,50]],"x":[[36,-74],[36,78]]}};
/* EULER:FIN */
function logEulerJunto(s, nom){
  const cf = LOG_EULER_PRE[s.may + s.men + "-" + s.fig];
  if (!cf) return "";
  const ids = ["S", "P", "M"], cruces = cf.x;
  const [x0, y0, x1, y1] = cf.caja, W = x1 - x0, H = y1 - y0;
  const circ = ids.map((x, j) => '<circle cx="' + cf.c[j][0] + '" cy="' + cf.c[j][1] + '" r="' + cf.c[j][2] + '" class="lg-circ lg-e' + (j + 1) + '"/>').join("");
  const etq = ids.map((x, j) => { const p = cf.etq[j]; return '<text x="' + p[0] + '" y="' + (p[1] + 5) + '" text-anchor="middle" class="lg-vt">' + x + "</text>"; }).join("");
  const xs = cruces.map(([x, y]) => '<text x="' + x + '" y="' + (y + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("");
  return '<figure class="lg-euler lg-euler-junto"><svg viewBox="' + x0 + " " + y0 + " " + W + " " + H + '" role="img" aria-label="' + logEsc(logT("eulerJunto")) + '">' + circ + etq + xs + "</svg><figcaption>" + logEsc(logT("termLeyenda", { s: nom.S, p: nom.P, m: nom.M })) + "</figcaption></figure>";
}
/* Euler: una proposición = dos círculos en la posición que expresa (dentro, separados, cruzados) */
function logEuler(tipo, x, y, titulo){
  const c = (cx, cy, r, cls) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="lg-circ ' + cls + '"/>';
  const l = (tx, ty, t) => '<text x="' + tx + '" y="' + ty + '" text-anchor="middle" class="lg-vt">' + t + "</text>";
  const cruz = (cx, cy) => '<text x="' + cx + '" y="' + (cy + 7) + '" text-anchor="middle" class="lg-x">✕</text>';
  const d = {
    A: c(100, 74, 60, "lg-e2") + c(94, 84, 28, "lg-e1") + l(94, 89, x) + l(100, 32, y),
    E: c(56, 74, 40, "lg-e1") + c(144, 74, 40, "lg-e2") + l(56, 79, x) + l(144, 79, y),
    I: c(78, 74, 48, "lg-e1") + c(122, 74, 48, "lg-e2") + l(52, 79, x) + l(148, 79, y) + cruz(100, 74),
    O: c(78, 74, 48, "lg-e1") + c(122, 74, 48, "lg-e2") + l(56, 52, x) + l(148, 79, y) + cruz(52, 84)
  }[tipo];
  return '<figure class="lg-euler"><svg viewBox="0 0 200 148" role="img" aria-label="' + logEsc(titulo) + '">' + d + "</svg><figcaption>" + logEsc(titulo) + " · " + logEsc(logFrase(tipo, x, y)) + "</figcaption></figure>";
}
function logFrase(tipo, x, y){ return logT("f" + tipo, { x, y }); }
function logSilHtml(){
  const s = LOG.sil, nom = { S: s.S || logT("defS"), P: s.P || logT("defP"), M: s.M || logT("defM") }, [may, men] = LOG_FIG[s.fig];
  const clave = s.may + s.men + s.con + "-" + s.fig, nombre = LOG_MODOS[clave];
  let ver;
  if (logSilValido(s)) ver = '<p class="lg-veredicto lg-tautologia">' + (nombre ? logT("silValido", { nombre }) : logT("silValidoSin")) + "</p>";
  else if (logSilValido(s, ["S", "P", "M"])){
    const basta = ["S", "M", "P"].find(x => logSilValido(s, [x])) || "S";
    ver = '<p class="lg-veredicto lg-contingencia">' + logT("silTrad", { t: nom[basta] }) + (nombre ? " " + logT("silTradNombre", { nombre }) : "") + "</p>";
  } else {
    const rotas = logReglas(s);
    ver = '<p class="lg-veredicto lg-contradiccion">' + logT("silNoValido") + "</p>" + (rotas.length ? '<p class="lg-label">' + logT("reglasRotas") + "</p><ul>" + rotas.map(r => "<li>" + logT(r) + "</li>").join("") + "</ul>" : "");
  }
  return '<div class="lg-sil-cuerpo"><ol class="lg-silo"><li><span>' + logT("pMayor") + "</span> " + logEsc(logFrase(s.may, nom[may[0]], nom[may[1]])) + "</li><li><span>" + logT("pMenor") + "</span> " + logEsc(logFrase(s.men, nom[men[0]], nom[men[1]])) +
    '</li><li class="lg-ccl"><span>' + logT("concl") + "</span> " + logEsc(logFrase(s.con, nom.S, nom.P)) + '</li></ol><p class="lg-nota">' + logT("modo", { m: clave }) + (nombre ? " · " + nombre : " · " + logT("sinNombre")) + "</p>" + ver +
    '</div><div class="lg-venn-caja"><div class="fgroup lg-diag">' + [["venn", "Venn"], ["euler", "Euler"]].map(([k, l]) => '<button type="button" class="fbtn" data-diag="' + k + '" aria-pressed="' + ((s.diag || "venn") === k) + '">' + l + "</button>").join("") + "</div>" +
    (s.diag === "euler"
      ? '<p class="lg-label">' + logT("eulerJunto") + "</p>" + logEulerJunto(s, nom) + '<p class="lg-nota">' + logT("eulerJuntoAyuda") + "</p>" +
        '<p class="lg-label">' + logT("euler") + '</p><div class="lg-euler-fila">' +
        logEuler(s.may, may[0], may[1], logT("pMayor")) + logEuler(s.men, men[0], men[1], logT("pMenor")) + logEuler(s.con, "S", "P", logT("concl")) +
        '</div><p class="lg-nota">' + logT("termLeyenda", { s: nom.S, p: nom.P, m: nom.M }) + '</p><p class="lg-nota">' + logT("eulerAyuda") + '</p><p class="lg-nota">' + logT("eulerConcl") + "</p>"
      : '<p class="lg-label">' + logT("venn") + "</p>" + logVenn(s, nom) + '<p class="lg-nota">' + logT("vennAyuda") + '</p><p class="lg-nota">' + logT("vennConcl") + "</p>") + "</div>";
}
function logSelTipo(id, val){ return '<select id="' + id + '" class="lg-sel">' + ["A", "E", "I", "O"].map(t => '<option value="' + t + '"' + (t === val ? " selected" : "") + ">" + logT("tipo" + t) + "</option>").join("") + "</select>"; }
function logRenderSil(){
  const s = LOG.sil;
  return '<div class="lg-panel"><p class="lg-label">' + logT("terminos") + '</p><div class="lg-terminos">' +
    [["S", "tS", "defS"], ["P", "tP", "defP"], ["M", "tM", "defM"]].map(([k, l, d]) => '<label>' + logT(l) + '<input class="lg-input" data-term="' + k + '" value="' + logEsc(s[k]) + '" placeholder="' + logEsc(logT(d)) + '"></label>').join("") +
    '</div><div class="lg-terminos"><label>' + logT("pMayor") + logSelTipo("lg-may", s.may) + "</label><label>" + logT("pMenor") + logSelTipo("lg-men", s.men) + "</label><label>" + logT("concl") + logSelTipo("lg-con", s.con) +
    "</label><label>" + logT("figura") + '<select id="lg-fig" class="lg-sel">' + [1, 2, 3, 4].map(n => '<option value="' + n + '"' + (n === s.fig ? " selected" : "") + ">" + logT("figN", { n }) + "</option>").join("") + "</select></label></div>" +
    '<p class="lg-nota">' + logT("figAyuda") + '</p><p class="lg-nota">' + logT("ejemplos") + " " + ["AAA-1", "EAE-2", "AII-3", "AAI-3", "AEE-1", "IAI-1"].map(k => '<button type="button" class="chip" data-ejs="' + k + '">' + (LOG_MODOS[k] || k) + "</button>").join(" ") +
    '</p></div><div class="lg-panel lg-sil" id="lg-sil">' + logSilHtml() + "</div>" + logSilEj();
}

/* ---------- pestaña 3: puertas lógicas ---------- */
const LOG_GATES = ["NOT", "AND", "OR", "NAND", "NOR", "XOR", "XNOR"];
const LOG_GF = { NOT: (a) => !a, AND: (a, b) => a && b, OR: (a, b) => a || b, NAND: (a, b) => !(a && b), NOR: (a, b) => !(a || b), XOR: (a, b) => a !== b, XNOR: (a, b) => a === b };
/* símbolo de cada puerta (52×40, entradas a la izquierda, salida a la derecha en y=20) */
function logGateShape(g, x, y, on){
  const t = "translate(" + x + "," + (y - 20) + ")", cls = 'class="lg-gate' + (on ? " on" : "") + '"';
  const and = '<path d="M0,0 H26 A20,20 0 0 1 26,40 H0 Z" ' + cls + "/>", or = '<path d="M0,0 Q16,20 0,40 Q34,40 50,20 Q34,0 0,0 Z" ' + cls + "/>";
  const burbuja = cx => '<circle cx="' + cx + '" cy="20" r="4" ' + cls + "/>", extra = '<path d="M-6,0 Q10,20 -6,40" class="lg-wire"/>';
  const d = { NOT: '<path d="M0,2 L40,20 L0,38 Z" ' + cls + "/>" + burbuja(44), AND: and, OR: or, NAND: and + burbuja(50), NOR: or + burbuja(54), XOR: extra + or, XNOR: extra + or + burbuja(54) }[g];
  return '<g transform="' + t + '">' + d + "</g>";
}
const logGateOut = g => (g === "NAND" ? 54 : g === "NOR" || g === "XNOR" ? 58 : g === "NOT" ? 48 : 50);
function logRenderPuertaSola(){
  const g = LOG.gate, una = g === "NOT", a = !!LOG.gA, b = !!LOG.gB, out = una ? LOG_GF[g](a) : LOG_GF[g](a, b);
  const pin = (lbl, val, y, key) => '<g class="lg-pin" data-pin="' + key + '" tabindex="0" role="button" aria-label="' + lbl + " = " + (val ? 1 : 0) + '"><rect x="6" y="' + (y - 14) + '" width="34" height="28" rx="6" class="lg-sw' + (val ? " on" : "") + '"/><text x="23" y="' + (y + 5) + '" text-anchor="middle" class="lg-swt">' + lbl + " " + (val ? 1 : 0) + "</text></g>" +
    '<line x1="40" y1="' + y + '" x2="110" y2="' + y + '" class="lg-wire' + (val ? " on" : "") + '"/>';
  let svg = '<svg viewBox="0 0 300 120" class="lg-circ1">' + (una ? pin("A", a, 60, "A") : pin("A", a, 50, "A") + pin("B", b, 70, "B")) + logGateShape(g, 110, 60, out) +
    '<line x1="' + (110 + logGateOut(g)) + '" y1="60" x2="230" y2="60" class="lg-wire' + (out ? " on" : "") + '"/><circle cx="246" cy="60" r="16" class="lg-lamp' + (out ? " on" : "") + '"/><text x="246" y="100" text-anchor="middle" class="lg-swt">' + logT("salida") + " " + (out ? 1 : 0) + "</text></svg>";
  const filas = una ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
  const tabla = '<table class="lg-tabla lg-mini"><thead><tr><th>A</th>' + (una ? "" : "<th>B</th>") + "<th>" + logT("salida") + "</th></tr></thead><tbody>" +
    filas.map(f => { const o = una ? LOG_GF[g](!!f[0]) : LOG_GF[g](!!f[0], !!f[1]), act = una ? f[0] === +a : f[0] === +a && f[1] === +b; return '<tr class="' + (act ? "lg-ok" : "") + '">' + f.map(x => "<td>" + x + "</td>").join("") + "<td>" + (o ? 1 : 0) + "</td></tr>"; }).join("") + "</tbody></table>";
  return '<div class="lg-puerta">' + svg + '<div><p class="lg-label">' + logT("tablaPuerta") + "</p>" + tabla + "</div></div>";
}
/* la fórmula como circuito: → se convierte en ¬p ∨ q y ↔ en XNOR */
function logACircuito(n){
  if (n.t === "var") return n;
  if (n.t === "not") return { t: "NOT", a: logACircuito(n.a) };
  if (n.t === "imp") return { t: "OR", a: { t: "NOT", a: logACircuito(n.a) }, b: logACircuito(n.b) };
  return { t: { and: "AND", or: "OR", iff: "XNOR" }[n.t], a: logACircuito(n.a), b: logACircuito(n.b) };
}
function logCircuitoHtml(){
  let e;
  try { e = logACircuito(logParse(LOG.formula)); } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  const vars = logVars([logParse(LOG.formula)]);
  vars.forEach(v => { if (LOG.circ[v] == null) LOG.circ[v] = true; });
  const val = n => n.t === "var" ? !!LOG.circ[n.n] : (n.t === "NOT" ? !val(n.a) : LOG_GF[n.t](val(n.a), val(n.b)));
  const prof = n => n.t === "var" ? 0 : 1 + Math.max(prof(n.a), n.b ? prof(n.b) : 0), D = prof(e);
  let hoja = 0; const DX = 96, Y0 = 70, DY = 52, X0 = 70;
  const sit = (n, d) => {   /* d = distancia a la salida */
    if (n.t === "var"){ n.y = Y0 + (hoja++) * DY; n.x = X0; return; }
    sit(n.a, d + 1); if (n.b) sit(n.b, d + 1);
    n.x = X0 + 40 + (D - d - 1) * DX; n.y = n.b ? (n.a.y + n.b.y) / 2 : n.a.y;
  };
  sit(e, 0);
  const W = X0 + 40 + D * DX + 90, H = Y0 + Math.max(1, hoja) * DY;
  let cables = "", puertas = "", pines = "";
  const salidaX = n => n.t === "var" ? n.x : n.x + logGateOut(n.t);
  const dib = n => {
    if (n.t === "var"){ pines += '<text x="' + (n.x - 8) + '" y="' + (n.y + 5) + '" text-anchor="end" class="lg-swt' + (val(n) ? " on" : "") + '">' + n.n + "</text>"; return; }
    const ins = n.b ? [n.y - 10, n.y + 10] : [n.y];
    [n.a, n.b].filter(Boolean).forEach((c, j) => { dib(c); const x1 = salidaX(c), xm = (x1 + n.x) / 2;
      cables += '<polyline points="' + x1 + "," + c.y + " " + xm + "," + c.y + " " + xm + "," + ins[j] + " " + n.x + "," + ins[j] + '" class="lg-wire' + (val(c) ? " on" : "") + '"/>'; });
    puertas += logGateShape(n.t, n.x, n.y, val(n));
  };
  dib(e);
  const sx = salidaX(e), out = val(e);
  const sw = vars.map((v, i) => '<g class="lg-pin" data-var="' + v + '" tabindex="0" role="button" aria-label="' + v + " = " + (LOG.circ[v] ? 1 : 0) + '"><rect x="' + (8 + i * 48) + '" y="8" width="40" height="28" rx="6" class="lg-sw' + (LOG.circ[v] ? " on" : "") + '"/><text x="' + (28 + i * 48) + '" y="27" text-anchor="middle" class="lg-swt">' + v + " " + (LOG.circ[v] ? 1 : 0) + "</text></g>").join("");
  return '<svg viewBox="0 0 ' + W + " " + H + '" class="lg-circ2" style="max-width:' + W + 'px">' + sw + cables + puertas + pines +
    '<line x1="' + sx + '" y1="' + e.y + '" x2="' + (W - 40) + '" y2="' + e.y + '" class="lg-wire' + (out ? " on" : "") + '"/><circle cx="' + (W - 24) + '" cy="' + e.y + '" r="16" class="lg-lamp' + (out ? " on" : "") + '"><title>' + logT("lampara") + "</title></circle></svg>" +
    '<p class="lg-nota">' + logEsc(logStr(logParse(LOG.formula))) + " = " + (out ? "1" : "0") + "</p>";
}
function logRenderPuertas(){
  return '<div class="lg-panel"><div class="fgroup">' + LOG_GATES.map(g => '<button type="button" class="fbtn" data-gate="' + g + '" aria-pressed="' + (g === LOG.gate) + '">' + g + "</button>").join("") +
    '</div><p class="lg-nota">' + logT("g" + LOG.gate) + '</p><p class="lg-nota">' + logT("entradas") + '</p><div id="lg-puerta">' + logRenderPuertaSola() + "</div></div>" +
    '<div class="lg-panel"><h2>' + logT("circuito") + '</h2><p class="lg-nota">' + logT("circAyuda") + '</p><div class="lg-fila"><input id="lg-f2" class="lg-input" value="' + logEsc(LOG.formula) + '" autocomplete="off" spellcheck="false"></div>' + logTeclado("lg-f2") +
    '<div id="lg-circ" class="lg-scroll">' + logCircuitoHtml() + "</div></div>";
}

/* ---------- pestaña 4: paradojas (07-10) ---------- */
/* fórmula que se abre en la pestaña de tablas: p = «la frase es verdadera», «el barbero se afeita», «es heterológica»… */
const LOG_PAR_F = { mentiroso: "p ↔ ¬p", barbero: "p ↔ ¬p", grelling: "p ↔ ¬p", epimenides: "p → ¬p", carroll: "(p ∧ (p → q)) → q", infelices: "(p ∧ q) → ¬r", tanto: "(q ∨ s) → p", monica: "((q ∧ r) → p) ∧ (¬q ∧ r → ¬p)", agustin: "p → q", agustin2: "p → q ∧ r", contrafactico: "q ∧ r → p" };
/* diagrama de Euler de una frase (campo euler de paradojas.js): mismas clases que los de la pestaña de silogismos */
function logParEuler(e){
  const c = e.circulos.filter(k => k.r).map(k => '<circle cx="' + k.cx + '" cy="' + k.cy + '" r="' + k.r + '" class="lg-circ ' + k.cls + '"/>').join("");
  const t = e.circulos.filter(k => k.etq).map(k => '<text x="' + k.ex + '" y="' + k.ey + '" text-anchor="middle" class="lg-vt">' + logEsc(k.etq) + "</text>").join("");
  const x = (e.cruces || []).map(([a, b]) => '<text x="' + a + '" y="' + (b + 7) + '" text-anchor="middle" class="lg-x">✕</text>').join("") +
    (e.dudas || []).map(([a, b]) => '<text x="' + a + '" y="' + (b + 7) + '" text-anchor="middle" class="lg-x lg-duda">?</text>').join("");
  return '<figure class="lg-euler lg-par-euler"><svg viewBox="' + e.vista + '" role="img" aria-label="' + logEsc(logT("parEuler")) + '">' + c + t + x + "</svg></figure>" + (e.lectura || "") +
    (e.contingencia ? '<p class="lg-label">' + (e.contTitulo || logT("parConting")) + "</p>" + e.contingencia : "");
}
/* frases de grados (campo escala de paradojas.js): eje, franja en que la frase es verdadera (borde izquierdo
   discontinuo: el límite vago) y punto de referencia; los textos llevan su posición */
function logParEscala(e){
  const [x1, x2, y] = e.eje, [b1, b2] = e.banda;
  const svg = '<rect x="' + b1 + '" y="' + (y - 14) + '" width="' + (b2 - b1) + '" height="28" class="lg-banda"/>' +
    '<line x1="' + x1 + '" y1="' + y + '" x2="' + x2 + '" y2="' + y + '" class="lg-eje"/>' +
    '<path d="M' + (x2 - 8) + "," + (y - 5) + " L" + x2 + "," + y + " L" + (x2 - 8) + "," + (y + 5) + '" class="lg-eje"/>' +
    '<path d="M' + (x1 + 8) + "," + (y - 5) + " L" + x1 + "," + y + " L" + (x1 + 8) + "," + (y + 5) + '" class="lg-eje"/>' +
    '<line x1="' + b1 + '" y1="' + (y - 30) + '" x2="' + b1 + '" y2="' + (y + 20) + '" class="lg-vago"/>' +
    '<line x1="' + e.marca + '" y1="' + 42 + '" x2="' + e.marca + '" y2="' + y + '" class="lg-eje"/><circle cx="' + e.marca + '" cy="' + y + '" r="6" class="lg-marca"/>' +
    e.textos.map(t => '<text x="' + t.x + '" y="' + t.y + '" text-anchor="' + t.align + '" class="lg-vt">' + logEsc(t.t) + "</text>").join("");
  return '<figure class="lg-euler lg-par-euler lg-par-escala"><svg viewBox="' + e.vista + '" role="img" aria-label="' + logEsc(logT("parEscala")) + '">' + svg + "</svg></figure>" + (e.lectura || "") +
    (e.contingencia ? '<p class="lg-label">' + (e.contTitulo || logT("parConting")) + "</p>" + e.contingencia : "");
}
const LOG_PAR_VISTAS = ["paradojas", "ejercicios", "clasicos"];
/* (07-10) pestañas «Paradojas», «Ejercicios» y «Argumentos clásicos»: los mismos datos, repartidos por el campo view de cada grupo.
   En las dos últimas, los plegables son «Forma lógica» y «Qué dice…»; el desplegable de grupos solo sale si hay más de uno. */
function logRenderParadojas(vista){
  vista = vista || "paradojas";
  const grupos = (typeof PARADOJAS_GRUPOS !== "undefined" ? PARADOJAS_GRUPOS : []).filter(g => (g.view || "paradojas") === vista), todas = typeof PARADOJAS !== "undefined" ? PARADOJAS : [];
  const analisis = vista !== "paradojas";
  /* un desplegable y no una fila de botones: seis grupos con títulos largos serían una nube de chips (regla de diseño) */
  const g0 = grupos.some(g => g.id === LOG.parGrupo) ? LOG.parGrupo : "all", filtro = grupos.length < 2 ? "" : '<label class="lg-label lg-pargrupos">' + logT("parGrupo") + '<select id="lg-pargrupo" class="lg-sel">' + [["all", logT("parTodas")], ...grupos.map(g => [g.id, g.titulo])].map(([k, l]) =>
    '<option value="' + k + '"' + (g0 === k ? " selected" : "") + ">" + l + "</option>").join("") + "</select></label>";
  const tarjeta = p => '<article class="lg-panel lg-par" id="par-' + p.id + '"><h3>' + p.titulo + '</h3><p class="lg-nota">' + p.origen + "</p>" +
    (p.nivel && typeof PARADOJAS_TXT !== "undefined" ? '<p class="lg-nota lg-par-nivel"><a href="#logica/itinerario/' + p.nivel + '">' + logEsc(PARADOJAS_TXT.lineaNivel.replace("{n}", p.nivel)) + "</a></p>" : "") +   /* (22-10, nube) T6 */
    '<p class="lg-enun">' + p.enunciado + "</p>" +
    '<details><summary>' + logT(analisis ? "parForma" : "parProblema") + "</summary>" + (/^<ul>/.test(p.problema) ? p.problema : "<p>" + p.problema + "</p>") +
    (LOG_PAR_F[p.id] ? '<p><button type="button" class="btn ghost" data-parf="' + logEsc(LOG_PAR_F[p.id]) + '">' + logT("parTabla") + " · " + logEsc(LOG_PAR_F[p.id]) + " →</button></p>" : "") +
    (p.euler ? '<p class="lg-label">' + (p.euler.titulo || logT("parEuler")) + "</p>" + logParEuler(p.euler) : "") +
    (p.euler2 ? '<p class="lg-label">' + (p.euler2.titulo || logT("parEuler")) + "</p>" + logParEuler(p.euler2) : "") +
    (p.escala ? '<p class="lg-label">' + logT("parEscala") + "</p>" + logParEscala(p.escala) : "") + "</details>" +
    '<details><summary>' + logT(analisis ? "parDice" : "parSalidas") + "</summary>" + p.salidas + "</details>" +
    '<p class="lg-pensar"><strong>' + logT("parPensar") + "</strong> " + p.pensar + "</p></article>";
  return (vista === "paradojas" ? '<div class="lg-panel"><p class="lg-nota">' + logT("parIntro") + "</p>" + logGuia("guiaParad") + filtro + "</div>" : (filtro ? '<div class="lg-panel">' + filtro + "</div>" : "")) +
    grupos.filter(g => g0 === "all" || g.id === g0).map(g => '<section class="lg-pargrupo"><h2>' + g.titulo + '</h2><p class="lg-nota">' + g.intro + "</p>" +
      todas.filter(p => p.grupo === g.id).map(tarjeta).join("") + "</section>").join("");
}

/* ---------- pestaña: cuadrado de oposición (10-10) ----------
   Se prueba con todos los «mundos» posibles de dos clases: hay o no hay S fuera de P (r10) y S dentro de P (r11).
   La lectura tradicional descarta el mundo sin S. Una proposición se sigue (V/F) si vale lo mismo en todos los
   mundos compatibles con el dato; si no, «no se sabe». */
const LOG_CU_VAL = { A: m => !m.r10, E: m => !m.r11, I: m => m.r11, O: m => m.r10 };
function logCuResultado(cu){
  const mundos = [];
  [false, true].forEach(r10 => [false, true].forEach(r11 => { if (!cu.trad || r10 || r11) mundos.push({ r10, r11 }); }));
  const ok = mundos.filter(m => LOG_CU_VAL[cu.tipo](m) === cu.val), res = {};
  ["A", "E", "I", "O"].forEach(t => { const vs = ok.map(LOG_CU_VAL[t]); res[t] = vs.every(Boolean) ? "V" : (!vs.some(Boolean) ? "F" : "?"); });
  return res;
}
function logCuadradoHtml(){
  const cu = LOG.cu, res = logCuResultado(cu), ej = "cuEj" + cu.ej;
  const esq = t => '<button type="button" class="lg-cu-esq lg-cu-' + t + (t === cu.tipo ? " lg-cu-dato" : "") + ' lg-cu-' + { V: "v", F: "f", "?": "q" }[res[t]] + '" data-cutipo="' + t + '" aria-pressed="' + (t === cu.tipo) + '">' +
    '<span class="lg-cu-letra">' + t + '</span><span class="lg-cu-frase">' + logEsc(logT(ej + t)) + '</span><span class="lg-cu-valor">' + logT({ V: "cuV", F: "cuF", "?": "cuQ" }[res[t]]) + (t === cu.tipo ? " · " + logT("cuDato") : "") + "</span></button>";
  const rel = (k, cls) => '<span class="lg-cu-rel ' + cls + (k !== "cuContradictorias" && !cu.trad ? " lg-cu-perdida" : "") + '">' + logT(k) + (k !== "cuContradictorias" && !cu.trad ? '<span class="lg-cu-sp">' + logT("cuPerdida") + "</span>" : "") + "</span>";
  const linea = (x1, y1, x2, y2, contra) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="lg-cu-l' + (!contra && !cu.trad ? " lg-cu-ld" : "") + '" vector-effect="non-scaling-stroke"/>';
  const svg = '<svg class="lg-cu-lineas" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' + linea(18, 14, 82, 14) + linea(18, 86, 82, 86) + linea(14, 18, 14, 82) + linea(86, 18, 86, 82) + linea(20, 20, 80, 80, true) + linea(80, 20, 20, 80, true) + "</svg>";
  return '<div class="lg-cu">' + svg + esq("A") + rel("cuContrarias", "lg-cu-arriba") + esq("E") + rel("cuSubalternas", "lg-cu-izq") + rel("cuContradictorias", "lg-cu-centro") + rel("cuSubalternas", "lg-cu-der") +
    esq("I") + rel("cuSubcontrarias", "lg-cu-abajo") + esq("O") + '</div><p class="lg-nota">' + logT(cu.trad ? "cuNotaTrad" : "cuNotaActual") + "</p>";
}
function logRenderCuadrado(){
  const cu = LOG.cu, grupo = (attr, pares, actual) => '<div class="fgroup">' + pares.map(([v, l]) => '<button type="button" class="fbtn" data-' + attr + '="' + v + '" aria-pressed="' + (String(actual) === String(v)) + '">' + l + "</button>").join("") + "</div>";
  return '<div class="lg-panel"><p class="lg-label">' + logT("cuTerminos") + "</p>" + grupo("cuej", [1, 2, 3].map(n => [n, logT("cuEj" + n)]), cu.ej) +
    '<p class="lg-label">' + logT("cuElige") + "</p>" + grupo("cutipo", ["A", "E", "I", "O"].map(t => [t, t]), cu.tipo) +
    grupo("cuval", [["1", logT("cuEsV")], ["0", logT("cuEsF")]], cu.val ? "1" : "0") +
    '<p class="lg-label">' + logT("cuLectura") + "</p>" + grupo("cutrad", [["1", logT("cuTrad")], ["0", logT("cuActual")]], cu.trad ? "1" : "0") +
    '</div><div class="lg-panel" id="lg-cu">' + logCuadradoHtml() + "</div>";
}

/* ---------- pestaña: leyes de conjuntos (10-10) ----------
   Expresiones con A, B, C, U y ∅; ∪, ∩, −, ᶜ y paréntesis (∩ liga más que ∪ y −). Cada expresión se calcula
   como el conjunto de regiones del diagrama (bit j = dentro del círculo j; la región 0 es fuera de todos)
   y se dibuja con tvVennSvg (theoryview.js). */
function logCoTokens(s){
  const out = [];
  for (const c of s){
    if (/\s/.test(c)) continue;
    if (/[abcABC]/.test(c)) out.push({ k: "var", j: "ABC".indexOf(c.toUpperCase()) });
    else if (c === "U" || c === "u") out.push({ k: "U" });
    else if ("∅Ø0".includes(c)) out.push({ k: "0" });
    else if ("∪+|".includes(c)) out.push({ k: "or" });
    else if ("∩·&*^".includes(c)) out.push({ k: "and" });
    else if ("−-\\".includes(c)) out.push({ k: "dif" });
    else if ("ᶜ'’".includes(c)) out.push({ k: "c" });
    else if (c === "(" || c === ")") out.push({ k: c });
    else throw new Error(logT("coErrCar", { c }));
  }
  return out;
}
function logCoEval(s){
  if (!String(s).trim()) throw new Error(logT("coErrVacia"));
  const tk = logCoTokens(s); let i = 0, usaC = false;
  const peek = () => tk[i] && tk[i].k, TODO = 255;
  const expr = () => { let a = term(); while (peek() === "or" || peek() === "dif"){ const op = tk[i++].k, b = term(); a = op === "or" ? a | b : a & ~b & TODO; } return a; };
  const term = () => { let a = fac(); while (peek() === "and"){ i++; a &= fac(); } return a; };
  const fac = () => { let a = atom(); while (peek() === "c"){ i++; a = ~a & TODO; } return a; };
  const atom = () => {
    const x = tk[i]; if (!x) throw new Error(logT("coErrFalta"));
    if (x.k === "var"){ i++; if (x.j === 2) usaC = true; let m = 0; for (let r = 0; r < 8; r++) if (r & (1 << x.j)) m |= 1 << r; return m; }
    if (x.k === "U"){ i++; return TODO; }
    if (x.k === "0"){ i++; return 0; }
    if (x.k === "("){ i++; const e = expr(); if (peek() !== ")") throw new Error(logT("coErrParen")); i++; return e; }
    throw new Error(logT("coErrFalta"));
  };
  const m = expr();
  if (i < tk.length) throw new Error(logT("coErrFalta"));
  return { m, usaC };
}
const LOG_CO_EJ = [["A ∪ B", "B ∪ A", "coConm"], ["(A ∪ B) ∪ C", "A ∪ (B ∪ C)", "coAsoc"], ["(A ∪ B)ᶜ", "Aᶜ ∩ Bᶜ", "coDM1"], ["(A ∩ B)ᶜ", "Aᶜ ∪ Bᶜ", "coDM2"],
  ["A ∩ (B ∪ C)", "(A ∩ B) ∪ (A ∩ C)", "coDist"], ["A ∪ (B ∩ C)", "(A ∪ B) ∩ (A ∪ C)", "coDist2"], ["A ∪ Aᶜ", "U", "coComp"], ["A − B", "A ∩ Bᶜ", "coDif"], ["(A ∪ B)ᶜ", "Aᶜ ∪ Bᶜ", "coTrampa"]];
const LOG_CO_TECLAS = ["A", "B", "C", "∪", "∩", "−", "ᶜ", "(", ")", "U", "∅"];
function logCoRegiones(m, n){ const out = []; for (let r = 0; r < (1 << n); r++) if (m & (1 << r)) out.push([...Array(n)].map((_, j) => (r >> j) & 1).join("")); return out.join(","); }
/* (12-10) Cada lado se construye a la vista: «diagrama ∪ diagrama = diagrama» (petición del profesor: no basta poner
   dos veces el mismo diagrama; hacen falta los tres para llegar a la conclusión). Y la comprobación en los cinco casos
   de Euler con dos conjuntos: un dibujo de Euler ilustra una ley, pero solo los cinco juntos la comprueban. */
function logCoArbol(s){
  const tk = logCoTokens(s); let i = 0;
  const peek = () => tk[i] && tk[i].k;
  const expr = () => { let a = term(); while (peek() === "or" || peek() === "dif"){ const k = tk[i++].k; a = { k, a, b: term() }; } return a; };
  const term = () => { let a = fac(); while (peek() === "and"){ i++; a = { k: "and", a, b: fac() }; } return a; };
  const fac = () => { let a = atom(); while (peek() === "c"){ i++; a = { k: "c", a }; } return a; };
  const atom = () => {
    const x = tk[i]; if (!x) throw new Error(logT("coErrFalta"));
    if (x.k === "var" || x.k === "U" || x.k === "0"){ i++; return x; }
    if (x.k === "("){ i++; const e = expr(); if (peek() !== ")") throw new Error(logT("coErrParen")); i++; return e; }
    throw new Error(logT("coErrFalta"));
  };
  const t = expr(); if (i < tk.length) throw new Error(logT("coErrFalta"));
  return t;
}
const LOG_CO_OP = { or: "∪", and: "∩", dif: "−" };
function logCoTxt(n, dentro){
  if (n.k === "var") return "ABC"[n.j];
  if (n.k === "U") return "U";
  if (n.k === "0") return "∅";
  if (n.k === "c"){ const a = logCoTxt(n.a, false); return (n.a.k === "var" || n.a.k === "U" || n.a.k === "0" ? a : "(" + a + ")") + "ᶜ"; }
  const s = logCoTxt(n.a, true) + " " + LOG_CO_OP[n.k] + " " + logCoTxt(n.b, true);
  return dentro ? "(" + s + ")" : s;
}
function logCoMask(n){
  if (n.k === "var"){ let m = 0; for (let r = 0; r < 8; r++) if (r & (1 << n.j)) m |= 1 << r; return m; }
  if (n.k === "U") return 255;
  if (n.k === "0") return 0;
  if (n.k === "c") return ~logCoMask(n.a) & 255;
  const a = logCoMask(n.a), b = logCoMask(n.b);
  return n.k === "or" ? a | b : n.k === "and" ? a & b : a & ~b & 255;
}
/* una «ecuación de diagramas» por lado: operando, operación, operando, =, resultado (cada uno con su color) */
function logCoEcuacion(arbol, n, nom, titulo){
  const todo = (1 << (1 << n)) - 1;
  const reg = nodo => logCoRegiones(logCoMask(nodo) & todo, n);
  /* los operandos van rayados (/ el primero, \ el segundo); el resultado, de color y con los dos rayados encima, para que se vea de dónde sale */
  const fig = (nodo, cls, h1, h2) => '<figure class="tv-venn lg-co-fig ' + cls + '">' + tvVennSvg("c=" + nom + ";sel=" + reg(nodo) + (h1 ? ";h1=" + reg(h1) : "") + (h2 ? ";h2=" + reg(h2) : "")) + "<figcaption>" + logEsc(logCoTxt(nodo, false)) + "</figcaption></figure>";
  const op = t => '<span class="lg-co-op" aria-hidden="true">' + t + "</span>";
  let fila;
  if (arbol.k === "or" || arbol.k === "and" || arbol.k === "dif") fila = fig(arbol.a, "lg-op1") + op(LOG_CO_OP[arbol.k]) + fig(arbol.b, "lg-op2") + op("=") + fig(arbol, "lg-res", arbol.a, arbol.b);
  else if (arbol.k === "c") fila = op("(") + fig(arbol.a, "lg-op1") + op(")ᶜ") + op("=") + fig(arbol, "lg-res", arbol.a);
  else fila = fig(arbol, "lg-res");
  return '<h3 class="lg-co-h">' + logEsc(titulo) + "</h3>" + '<div class="lg-co-ec">' + fila + "</div>";
}
/* Euler con dos conjuntos: las cinco relaciones posibles; cada una dibuja solo las regiones que existen */
const LOG_EU_CASOS = [
  ["coEuSep", [[88, 98, 56], [212, 98, 56]], [[40, 34], [260, 34]]],
  ["coEuCorte", [[118, 98, 64], [182, 98, 64]], [[56, 34], [244, 34]]],
  ["coEuAB", [[128, 112, 40], [150, 98, 82]], [[128, 98], [244, 30]]],
  ["coEuBA", [[150, 98, 82], [172, 112, 40]], [[56, 30], [172, 98]]],
  ["coEuIg", [[150, 98, 70], [150, 98, 70]], [[150, 70], [150, 70]]]
];
let logEuN = 0;
function logEulerSvg(caso, m){
  const [, C, E] = caso, id = "lgeu" + (++logEuN), W = 300, H = 190;
  const circ = (j, extra) => '<circle cx="' + C[j][0] + '" cy="' + C[j][1] + '" r="' + C[j][2] + '"' + (extra || "") + "/>";
  let defs = "<defs>" + C.map((_, j) => '<clipPath id="' + id + "c" + j + '">' + circ(j) + "</clipPath>").join("");
  let zonas = "";
  for (let r = 0; r < 4; r++){
    if (!(m & (1 << r))) continue;
    const dentro = [0, 1].filter(j => r & (1 << j)), fuera = [0, 1].filter(j => !(r & (1 << j))), mid = id + "m" + r;
    defs += '<mask id="' + mid + '"><rect width="' + W + '" height="' + H + '" fill="#fff"/>' + fuera.map(j => circ(j, ' fill="#000"')).join("") + "</mask>";
    let g = '<rect x="6" y="6" width="' + (W - 12) + '" height="' + (H - 12) + '" class="tvv-sel" mask="url(#' + mid + ')"/>';
    dentro.forEach(j => { g = '<g clip-path="url(#' + id + "c" + j + ')">' + g + "</g>"; });
    zonas += g;
  }
  const igual = caso[0] === "coEuIg";
  const etq = igual ? '<text x="150" y="104" text-anchor="middle" class="tvv-t">A = B</text>'
    : ["A", "B"].map((t, j) => '<text x="' + E[j][0] + '" y="' + E[j][1] + '" text-anchor="middle" class="tvv-t">' + t + "</text>").join("");
  return '<svg viewBox="0 0 300 190" role="img" aria-hidden="true">' + defs + '</defs><rect x="6" y="6" width="288" height="178" rx="4" class="tvv-u"/><text x="14" y="26" class="tvv-t tvv-tu">U</text>' + zonas + C.map((_, j) => circ(j, ' class="tvv-c"')).join("") + etq + "</svg>";
}
function logCoEuler(a, b, n){
  if (n === 3) return '<p class="lg-nota">' + logT("coEuTres") + "</p>";
  const ma = logCoMask(a) & 15, mb = logCoMask(b) & 15;
  /* regiones que hay en cada caso (bit r: 0 fuera, 1 solo A, 2 solo B, 3 A y B), en el orden de LOG_EU_CASOS: separados (sin región 3), se cortan (todas), A dentro de B (sin 1), B dentro de A (sin 2), iguales (sin 1 ni 2) */
  const ex = [7, 15, 13, 11, 9];
  let ok = 0, unoBien = null;
  const cartas = LOG_EU_CASOS.map((c, i) => {
    const e = ex[i], va = ma & e, vb = mb & e, si = va === vb; if (si){ ok++; if (!unoBien) unoBien = logT(c[0]); }
    const f = (m, t) => '<figure class="tv-venn lg-co-fig lg-res">' + logEulerSvg(c, m) + "<figcaption>" + logEsc(t) + "</figcaption></figure>";
    return '<div class="lg-eu-caso ' + (si ? "lg-eu-si" : "lg-eu-no") + '"><h4>' + logT(c[0]) + '</h4><div class="lg-eu-par">' + f(va, logCoTxt(a, false)) + f(vb, logCoTxt(b, false)) + '</div><p class="lg-eu-v">' + (si ? "✓ " + logT("coEuSi") : "✗ " + logT("coEuNo")) + "</p></div>";
  }).join("");
  const resumen = ok === 5 ? logT("coEuTodos") : logT("coEuFalla", { n: 5 - ok }) + (unoBien ? " " + logT("coEuTrampa", { c: unoBien }) : "");
  return '<p class="lg-nota">' + logT("coEuIntro") + '</p><div class="lg-eu-casos">' + cartas + '</div><p class="lg-veredicto ' + (ok === 5 ? "lg-tautologia" : "lg-contradiccion") + '">' + resumen + "</p>";
}
function logConjHtml(){
  let a, b, ta, tb;
  try { a = logCoEval(LOG.co.izq); b = logCoEval(LOG.co.der); ta = logCoArbol(LOG.co.izq); tb = logCoArbol(LOG.co.der); } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
  if (typeof tvVennSvg !== "function") return "";
  const n = a.usaC || b.usaC ? 3 : 2, nom = n === 3 ? "A,B,C" : "A,B", todo = (1 << (1 << n)) - 1, ma = a.m & todo, mb = b.m & todo, iguales = ma === mb;
  const fig = (m, tit, cls) => '<figure class="tv-venn' + (cls ? " lg-co-fig " + cls : "") + '">' + tvVennSvg("c=" + nom + ";sel=" + logCoRegiones(m, n)) + "<figcaption>" + logEsc(tit) + "</figcaption></figure>";
  const pat = (id, rot, cls) => '<pattern id="' + id + '" patternUnits="userSpaceOnUse" width="9" height="9" patternTransform="rotate(' + rot + ')"><rect width="3.2" height="9" class="' + cls + '"/></pattern>';
  return '<svg class="lg-co-pats" width="0" height="0" aria-hidden="true" focusable="false"><defs>' + pat("lgCoH1", 45, "lg-co-p1") + pat("lgCoH2", -45, "lg-co-p2") + "</defs></svg>" +
    '<p class="lg-nota">' + logT("coRayas") + "</p>" +
    logCoEcuacion(ta, n, nom, logT("coIzq")) + logCoEcuacion(tb, n, nom, logT("coDer")) +
    '<h3 class="lg-co-h">' + logT("coCompara") + '</h3><div class="lg-co-ec">' + fig(ma, LOG.co.izq, "lg-res") + '<span class="lg-co-op" aria-hidden="true">' + (iguales ? "=" : "≠") + "</span>" + fig(mb, LOG.co.der, "lg-res") + "</div>" +
    '<p class="lg-veredicto ' + (iguales ? "lg-tautologia" : "lg-contradiccion") + '">' + logT(iguales ? "coIguales" : "coDistintas") + "</p>" +
    (iguales ? "" : '<div class="tv-venns">' + fig((ma ^ mb) & todo, logT("coDifieren")) + "</div>") +
    '<p class="lg-nota">' + logT("coUnivVacio") + "</p>" +
    '<p><button type="button" class="btn ghost" data-lg="euler" aria-expanded="' + !!LOG.co.euler + '">' + logT(LOG.co.euler ? "coEuOcultar" : "coEuBtn") + "</button></p>" +
    (LOG.co.euler ? logCoEuler(ta, tb, n) : "");
}
function logRenderConjuntos(){
  const tecl = id => '<div class="lg-teclas" data-para="' + id + '">' + LOG_CO_TECLAS.map(k => '<button type="button" class="chip" data-tecla="' + k + '">' + k + "</button>").join("") + "</div>";
  return '<div class="lg-panel"><p class="lg-nota">' + logT("coAyuda") + '</p><label class="lg-label" for="lg-co1">' + logT("coIzq") + '</label><input id="lg-co1" class="lg-input" value="' + logEsc(LOG.co.izq) + '" autocomplete="off" spellcheck="false">' + tecl("lg-co1") +
    '<label class="lg-label" for="lg-co2">' + logT("coDer") + '</label><input id="lg-co2" class="lg-input" value="' + logEsc(LOG.co.der) + '" autocomplete="off" spellcheck="false">' + tecl("lg-co2") +
    '<p class="lg-nota">' + logT("coLeyes") + " " + LOG_CO_EJ.map(([x, y, k]) => '<button type="button" class="chip" data-ejco1="' + logEsc(x) + '" data-ejco2="' + logEsc(y) + '">' + logT(k) + "</button>").join(" ") + "</p></div>" +
    '<div class="lg-panel" id="lg-co">' + logConjHtml() + "</div>";
}

/* ---------- montaje y eventos ---------- */
const LOG_SUB_SIL = ["silogismos", "cuadrado", "conjuntos"];
/* (12-10) «Lógica moderna»: tablas de verdad, formalizar, reglas de inferencia y puertas lógicas (las dos del medio, en logicamoderna.js) */
const LOG_SUB_MOD = ["tablas", "formalizar", "inferencia", "leyes", "cuantificadores", "puertas"];   /* (18-10) + «Leyes lógicas» */
const LOG_INTRO = { tablas: "introTablas", silogismos: "introSilog", cuadrado: "introCuadrado", conjuntos: "introConjuntos", puertas: "introPuertas", ejercicios: "introEjerc", clasicos: "introClasicos", formalizar: "introFormalizar", inferencia: "introInferencia", leyes: "introLeyes", cuantificadores: "introCuantificadores", falacias: "introFalacias" };
const LOG_GUIA = { tablas: "guiaTablas", silogismos: "guiaSilog", puertas: "guiaPuertas", ejercicios: "guiaEjerc", clasicos: "guiaClasicos" };
/* (20-10) portada de la sección: una tarjeta por familia de herramientas, con enlaces a cada una.
   Los rótulos se reutilizan de las pestañas (logT/lbT); solo las descripciones son texto nuevo. */
function logRenderPortada(){
  const hayLab = typeof labMontar === "function" && typeof LAB !== "undefined";
  const hayMod = typeof logRenderFormalizar === "function";
  const hayFal = typeof logRenderFalacias === "function";
  const rot = l => (hayLab && /^(tabLab|mesa)/.test(l) ? lbT(l) : logT(l));
  const chips = arr => '<div class="lg-pchips">' + arr.map(([k, l]) => '<button type="button" class="chip" data-lgtab="' + k + '">' + rot(l) + "</button>").join("") + "</div>";
  const card = (tit, desc, arr) => '<section class="lg-pcard"><h2>' + rot(tit) + "</h2><p>" + logT(desc) + "</p>" + chips(arr) + "</section>";
  const mod = [["tablas", "tabTablas"]].concat(hayMod ? [["formalizar", "tabFormalizar"], ["inferencia", "tabInferencia"], ["leyes", "tabLeyes"], ["cuantificadores", "tabCuantificadores"]] : []).concat([["puertas", "tabPuertas"]]);
  let html = '<p class="lg-intro">' + logT("pIntro") + '</p><div class="lg-portada">';
  /* (22-10) el itinerario, primero y a lo ancho: es la puerta para quien no sabe por dónde empezar */
  if (typeof LOG_ITIN !== "undefined") html += '<section class="lg-pcard lg-pcard-itin"><h2>' + logEsc(LOG_ITIN.titulo) + "</h2><p>" + logEsc(LOG_ITIN.tarjeta) + '</p><div class="lg-pchips"><a class="chip" href="#logica/itinerario">' + logEsc(LOG_ITIN.abrir) + " →</a></div></section>";
  html += card("tabClasica", "pDescClasica", [["silogismos", "tabSilog"], ["cuadrado", "tabCuadrado"], ["conjuntos", "tabConjuntos"]]);
  html += card("tabModerna", "pDescModerna", mod);
  if (hayFal) html += card("tabFalacias", "pDescFalacias", [["falacias", "pEntrar"]]);
  html += card("tabParad", "pDescParad", [["paradojas", "tabParad"], ["ejercicios", "tabEjerc"], ["clasicos", "tabClasicos"]]);
  if (hayLab) html += card("tabLab", "pDescLab", [["hablamos", "mesaHablamos"], ["arbol", "mesaArbol"], ...(typeof LB_DNU !== "undefined" ? [["deduccion", "mesaDeduccion"]] : []), ...(typeof LB_INU !== "undefined" ? [["induccion", "mesaInduccion"]] : []), ["mundo", "mesaMundo"], ["relaciones", "mesaRelaciones"], ["demos", "mesaDemos"], ["kant", "mesaKant"], ["mundos", "mesaMundos"]]);
  return html + "</div>";
}
/* (22-10) Itinerario «de cero a experto» (logica_itinerario.js, docs/39): ocho niveles en orden, con sus enlaces y su
   punto de control. Solo se enlaza lo que existe en la web en que se abre; el progreso, solo en este navegador. */
const LOG_ITIN_CLAVE = "lgItinerario";
function logItinHechos(){ try { const l = JSON.parse(localStorage.getItem(LOG_ITIN_CLAVE) || "[]"); return Array.isArray(l) ? l : []; } catch (e) { return []; } }
function logItinGuardar(l){ try { localStorage.setItem(LOG_ITIN_CLAVE, JSON.stringify(l)); } catch (e) { /* sin almacenamiento: no se recuerda */ } }
const logItinF = (s, v) => String(s).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
function logItinHay(h){
  const m = /^#([\w-]+)(?:\/(.+))?$/.exec(h || ""); if (!m) return false;
  if (m[1] === "logica") return true;
  const VL = window.VIEW_LOADERS || {}, ld = VL[m[1]];
  if (!ld || typeof window[ld] !== "function") return false;
  if (m[1] === "pistas" && m[2]) return typeof PISTAS !== "undefined" && PISTAS.some(x => x.id === m[2]);   /* ROUTE_KEY_OK no las comprueba */
  const ok = typeof ROUTE_KEY_OK !== "undefined" && ROUTE_KEY_OK[m[1]];
  return !m[2] || !ok || ok(m[2]);
}
/* (22-10, docs/39) Piezas que solo existen en la web de 1.º (tema 4, cuestionarios fil-*, Pistas fil-validez, falacias
   g-fil-* de la nómina): en hf (y en la ESO) no están. En vez de dejarlas sin enlace, se enlazan a la web de 1.º en la
   misma lengua, en pestaña nueva, con la nota «(en la web de 1.º)». La web de 1.º (aula-de-filosofia-web) existe en es,
   eu, fr, en y ar, igual que la de hf; en la propia web de 1.º logItinHay ya es true, así que no se autoenlaza. */
function logItinEs1o(h){ return /^#[\w-]+\/(?:fil|g-fil)-/.test(h || ""); }
function logItin1oUrl(h){
  const lang = (document.documentElement.lang || "es").slice(0, 2);
  return "https://mikagiuri.github.io/aula-de-filosofia-web" + (lang === "es" ? "" : "-" + lang) + "/" + h;
}
function logItinEnlace(p){
  const I = LOG_ITIN, e = logEsc;
  if (!p.h) return e(p.t);
  if (logItinHay(p.h)) return '<a href="' + p.h + '">' + e(p.t) + "</a>";
  if (logItinEs1o(p.h)) return '<a href="' + logItin1oUrl(p.h) + '" target="_blank" rel="noopener">' + e(p.t) + ' <span class="lg-nota">(' + e(I.enLaDe1o) + ")</span></a>";
  return e(p.t) + ' <span class="lg-nota">(' + e(I.noAqui) + ")</span>";
}
function logItinProgreso(){
  const n = logItinHechos().length;
  return n ? logItinF(LOG_ITIN.progreso, { n, t: LOG_ITIN.niveles.length }) : LOG_ITIN.progresoNada;
}
/* La tabla de puentes del nivel 5: la misma ley en enunciados, conjuntos, Boole, números con 0 y 1 y puertas. */
function logItinPuentes(){
  const P = LOG_ITIN.puentes, e = logEsc;
  return '<p class="lg-itin-sub">' + e(LOG_ITIN.puentesTit) + '</p><div class="lg-itin-puentes"><table><thead><tr>' + P.cab.map(c => "<th>" + e(c) + "</th>").join("") + "</tr></thead><tbody>" +
    P.filas.map(f => "<tr>" + f.map(c => "<td>" + e(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>" + '<p class="lg-nota">' + e(P.nota) + "</p>" + logItinPuentesEj();
}
/* (22-10, nube) T2: ejercicio de puentes (logica_ejercicios.js) debajo de la tabla del nivel 5, y del silogismo a Venn en Silogismos */
function logItinPuentesEj(){
  if (typeof LOGX === "undefined") return "";
  const e = logEsc, T = LOGX.t, L = LOGX.lenguajes;
  return '<details class="lg-guia lg-pej"><summary>' + e(T.puentesEjTit) + '</summary><p class="lg-nota">' + e(T.puentesEjIntro) + "</p><ol>" +
    LOGX.puentes.map(x => "<li><p><strong>" + e(x.ley) + "</strong> · " + e(T.puentesDada.replace("{l}", L[x.dada])) + ' <span class="lg-forma">' + e(x.v[x.dada]) + "</span></p>" +
      '<details><summary>' + e(T.puentesVer) + '</summary><ul class="lg-pej-sol">' + x.v.map((v, i) => "<li><b>" + e(L[i]) + ":</b> " + e(v) + "</li>").join("") + "</ul>" +
      (x.nota ? '<p class="lg-nota">' + e(x.nota) + "</p>" : "") + "</details></li>").join("") + "</ol></details>";
}
function logSilEj(){
  if (typeof LOGX === "undefined") return "";
  const e = logEsc, T = LOGX.t, ver = { si: T.silValido, no: T.silNoValido, trad: T.silTrad };
  return '<div class="lg-panel lg-silej"><h2>' + e(T.silEjTit) + '</h2><p class="lg-nota">' + e(T.silEjIntro) + "</p><ol>" +
    LOGX.silogismos.map((x, i) => {
      const [m, f] = x.code.split("-"), [may, men] = LOG_FIG[+f], nom = { S: x.S, P: x.P, M: x.M };
      return '<li><p>' + e(logFrase(m[0], nom[may[0]], nom[may[1]])) + ". " + e(logFrase(m[1], nom[men[0]], nom[men[1]])) + ". → " + e(logFrase(m[2], x.S, x.P)) + '.</p><p><button type="button" class="chip" data-silej="' + i + '">' + e(T.silCargar) + "</button></p>" +
        "<details><summary>" + e(T.silSol) + "</summary><p><b>" + e(T.silMayor) + "</b> " + e(x.mayor) + "</p><p><b>" + e(T.silMenor) + "</b> " + e(x.menor) + "</p><p><b>" + e(T.silCruz) + "</b> " + e(x.cruz) + "</p><p><b>" + e(T.silConcl) + "</b> " + e(x.concl) + "</p>" +
        (x.euler ? "<p><b>" + e(T.silEuler) + "</b> " + e(x.euler) + "</p>" : "") + '<p class="lg-veredicto ' + (x.tipo === "si" ? "lg-tautologia" : x.tipo === "trad" ? "lg-contingencia" : "lg-contradiccion") + '">' + e(ver[x.tipo]) + "</p></details></li>";
    }).join("") + "</ol></div>";
}
function logItinGuia(g){
  const I = LOG_ITIN, e = logEsc;
  return '<details class="lg-guia lg-itin-guia"><summary>' + e(I.guiaTit) + "</summary><p><strong>" + e(I.guiaObj) + "</strong> " + e(g.obj) + "</p>" +
    '<p class="lg-itin-sub">' + e(I.guiaRec) + "</p><ol>" + g.rec.map(x => "<li>" + e(x) + "</li>").join("") + "</ol>" +
    '<p class="lg-itin-sub">' + e(I.guiaPreg) + "</p><ol>" + g.preg.map(x => "<li>" + e(x) + "</li>").join("") + "</ol>" +
    '<p class="lg-itin-sub">' + e(I.guiaRub) + '</p><div class="tablewrap"><table class="lg-tabla lg-itin-rub"><tbody>' + g.rub.map((x, i) => "<tr><th>" + e(I.guiaNiv[i]) + "</th><td>" + e(x) + "</td></tr>").join("") + "</tbody></table></div></details>";
}
/* (22-10) El itinerario ya no se apila: #logica/itinerario es un mapa de casillas por etapas, y cada nivel tiene su
   página, #logica/itinerario/N, con navegación al anterior, al mapa y al siguiente. */
function logItinNivel(v){
  const I = LOG_ITIN, hechos = logItinHechos(), e = logEsc, L = I.niveles, i = L.indexOf(v);
  const enlace = logItinEnlace;
  const lista = ps => "<ol>" + ps.map(p => "<li>" + enlace(p) + "</li>").join("") + "</ol>";
  const ir = (w, k, flecha) => (w ? '<a class="fbtn" href="#logica/itinerario/' + w.n + '">' + (flecha === "<" ? "← " : "") + e(I[k]) + '<span class="lg-itin-navt">: ' + e(w.titulo) + "</span>" + (flecha === ">" ? " →" : "") + "</a>" : "<span></span>");
  const nav = '<nav class="lg-itin-nav" aria-label="' + e(I.titulo) + '">' + ir(L[i - 1], "anterior", "<") + '<a class="fbtn" href="#logica/itinerario">' + e(I.volverMapa) + "</a>" + ir(L[i + 1], "siguiente", ">") + "</nav>";
  return nav + '<section class="lg-itin-nivel lg-itin-pag' + (hechos.includes(v.n) ? " lg-itin-hecho" : "") + '" id="lg-itin-' + v.n + '">' +
    '<h2 class="lg-itin-tit"><span class="lg-itin-n">' + e(logItinF(I.nivel, { n: v.n })) + "</span>" + e(v.titulo) + "</h2>" +
    "<p><strong>" + e(I.meta) + "</strong> " + e(v.meta) + "</p>" + (v.donde ? '<p class="lg-nota">' + e(v.donde) + "</p>" : "") +
    '<p class="lg-itin-sub">' + e(I.pasos) + "</p>" + lista(v.pasos) +
    (v.puentes && I.puentes ? logItinPuentes() : "") +
    "<p><strong>" + e(I.control) + "</strong> " + enlace(v.control) + (v.control.mas ? " · " + v.control.mas.map(enlace).join(" · ") : "") + "</p>" +   /* (22-10, nube) mas: otros controles del mismo nivel */
    (v.guia && I.guiaTit ? logItinGuia(v.guia) : "") +   /* (22-10, nube) T8: guías de los niveles 9-12 */
    (v.limite ? '<p class="lg-itin-lim"><strong>' + e(I.limite) + "</strong> " + e(v.limite) + "</p>" : "") +
    (v.falta ? '<p class="lg-nota"><strong>' + e(I.falta) + "</strong> " + e(v.falta) + "</p>" : "") +
    '<label class="lg-itin-check"><input type="checkbox" data-lgitin="' + v.n + '"' + (hechos.includes(v.n) ? " checked" : "") + "> " + e(I.hecho) + "</label></section>" + nav;
}
function logRenderItinerario(){
  const I = LOG_ITIN, e = logEsc, v = LOG.itinNivel != null && I.niveles.find(x => x.n === LOG.itinNivel);
  const casa = '<div class="fgroup lg-tabs"><button type="button" class="fbtn lg-home" data-lgtab="portada" title="' + logT("pPortada") + '">‹ ' + logT("pPortada") + "</button></div>";
  if (v) return casa + logItinNivel(v);
  const hechos = logItinHechos(), sig = (I.niveles.find(x => !hechos.includes(x.n)) || {}).n;
  const enlace = logItinEnlace;
  const casilla = x => '<a class="lg-itin-tile' + (hechos.includes(x.n) ? " lg-itin-hecho" : "") + (x.n === sig ? " lg-itin-sig" : "") + '" href="#logica/itinerario/' + x.n + '">' +
    '<span class="lg-itin-n">' + e(logItinF(I.nivel, { n: x.n })) + "</span><span class=\"lg-itin-tt\">" + e(x.titulo) + "</span>" +
    (hechos.includes(x.n) ? '<span class="lg-itin-est">✓ ' + e(I.estHecho) + "</span>" : x.n === sig ? '<span class="lg-itin-est">→ ' + e(I.estSig) + "</span>" : "") + "</a>";
  const etapas = (I.etapas || [{ titulo: "", de: 1, a: I.niveles.length }]).map(g => '<section class="lg-itin-etapa">' + (g.titulo ? "<h3>" + e(g.titulo) + "</h3>" : "") +
    '<div class="lg-itin-tiles">' + I.niveles.filter(x => x.n >= g.de && x.n <= g.a).map(casilla).join("") + "</div></section>").join("");
  const rama = r => '<section class="lg-itin-rama"><h4>' + e(r.titulo) + ' <span class="lg-itin-n">' + e(logItinF(I.desde, { n: r.desde })) + "</span></h4><p>" + e(r.txt) + "</p>" +
    '<p class="lg-itin-enl">' + r.pasos.map(enlace).join(" · ") + "</p>" + (r.falta ? '<p class="lg-nota"><strong>' + e(I.falta) + "</strong> " + e(r.falta) + "</p>" : "") + "</section>";
  return casa + '<h2 class="lg-itin-tit">' + e(I.titulo) + '</h2><p class="lg-intro">' + e(I.intro) + "</p>" +
    '<p class="lg-nota" id="lg-itin-prog" aria-live="polite">' + e(logItinProgreso()) + " " + e(I.mapaIntro || "") + "</p>" +
    '<div class="lg-itin-mapa">' + etapas + "</div>" +
    '<h3 class="lg-itin-tit">' + e(I.ramasTit) + '</h3><p class="lg-nota">' + e(I.ramasIntro) + '</p><div class="lg-itin-ramas">' + I.ramas.map(rama).join("") + "</div>";
}
function logRender(){
  const box = logBox(); if (!box) return;
  if (LOG.tab === "portada"){ box.innerHTML = logRenderPortada(); return; }   /* (20-10) estado inicial de la sección */
  if (LOG.tab === "itinerario" && typeof LOG_ITIN !== "undefined"){ box.innerHTML = logRenderItinerario(); return; }   /* (22-10) docs/39: mapa o página de un nivel */
  /* (12-10) arriba: «Lógica clásica» y «Lógica moderna», cada una con sus subpestañas (no más de 6 pestañas arriba) */
  /* (20-10) + «Laboratorio» (laboratorioview.js: cinco mesas); para no pasar de seis arriba, Paradojas · Ejercicios ·
     Argumentos clásicos van juntas como subpestañas de «Paradojas» (las tres ya eran la misma vista: logRenderParadojas) */
  const hayLab = typeof labMontar === "function" && typeof LAB !== "undefined";
  const esLab = hayLab && LB_MESAS.includes(LOG.tab);
  const grupo = LOG_SUB_SIL.includes(LOG.tab) ? "silogismos" : LOG_SUB_MOD.includes(LOG.tab) ? "tablas" : LOG_PAR_VISTAS.includes(LOG.tab) ? "paradojas" : esLab ? "hablamos" : LOG.tab;
  const tabs = [["silogismos", "tabClasica"], ["tablas", "tabModerna"], ...(typeof logRenderFalacias === "function" ? [["falacias", "tabFalacias"]] : []), ["paradojas", "tabParad"], ...(hayLab ? [["hablamos", "tabLab"]] : [])];
  const sub = LOG_SUB_SIL.includes(LOG.tab) ? [["silogismos", "tabSilog"], ["cuadrado", "tabCuadrado"], ["conjuntos", "tabConjuntos"]]
    : LOG_SUB_MOD.includes(LOG.tab) ? [["tablas", "tabTablas"], ["formalizar", "tabFormalizar"], ["inferencia", "tabInferencia"], ["leyes", "tabLeyes"], ["cuantificadores", "tabCuantificadores"], ["puertas", "tabPuertas"]].filter(([k]) => ["tablas", "puertas"].includes(k) || typeof logRenderFormalizar === "function")
    : LOG_PAR_VISTAS.includes(LOG.tab) ? [["paradojas", "tabParad"], ["ejercicios", "tabEjerc"], ["clasicos", "tabClasicos"]]
    : esLab ? [["hablamos", "mesaHablamos"], ["arbol", "mesaArbol"], ...(typeof LB_DNU !== "undefined" ? [["deduccion", "mesaDeduccion"]] : []), ...(typeof LB_INU !== "undefined" ? [["induccion", "mesaInduccion"]] : []), ["mundo", "mesaMundo"], ["relaciones", "mesaRelaciones"], ["demos", "mesaDemos"], ["kant", "mesaKant"], ["mundos", "mesaMundos"]] : null;
  const rotulo = l => (hayLab && /^(tabLab|mesa)/.test(l) ? lbT(l) : logT(l));
  const cuerpo = esLab ? '<div id="lb-box" class="lb-box"></div>' : LOG.tab === "silogismos" ? logRenderSil() : LOG.tab === "cuadrado" ? logRenderCuadrado() + (typeof logmConversion === "function" ? logmConversion() : "") : LOG.tab === "conjuntos" ? logRenderConjuntos() : LOG.tab === "puertas" ? logRenderPuertas()
    : LOG.tab === "formalizar" && typeof logRenderFormalizar === "function" ? logRenderFormalizar() : LOG.tab === "inferencia" && typeof logRenderInferencia === "function" ? logRenderInferencia() : LOG.tab === "leyes" && typeof logRenderLeyes === "function" ? logRenderLeyes() : LOG.tab === "cuantificadores" && typeof logRenderCuantificadores === "function" ? logRenderCuantificadores() : LOG.tab === "falacias" && typeof logRenderFalacias === "function" ? logRenderFalacias()
    : LOG_PAR_VISTAS.includes(LOG.tab) ? logRenderParadojas(LOG.tab) : logRenderTablas();
  box.innerHTML = '<div class="fgroup lg-tabs" role="tablist"><button type="button" class="fbtn lg-home" data-lgtab="portada" title="' + logT("pPortada") + '">‹ ' + logT("pPortada") + '</button>' + tabs.map(([k, l]) => '<button type="button" class="fbtn" data-lgtab="' + k + '" aria-pressed="' + (grupo === k) + '">' + rotulo(l) + "</button>").join("") + "</div>" +
    (sub ? (sub.length > 6 ? '<details class="lg-subfold"><summary>' + rotulo((sub.find(([k]) => k === LOG.tab) || sub[0])[1]) + " · " + sub.length + "</summary>" : "") +   /* (21-10) más de seis subpestañas: plegadas en una línea (docs/35, 4.7) */
      '<div class="fgroup lg-subtabs">' + sub.map(([k, l]) => '<button type="button" class="fbtn" data-lgtab="' + k + '" aria-pressed="' + (LOG.tab === k) + '">' + rotulo(l) + "</button>").join("") + "</div>" + (sub.length > 6 ? "</details>" : "") : "") +
    /* (08-10) una introducción breve en cada pestaña, por si se llega a ella sin contexto (Paradojas ya tiene la suya) */
    (LOG_INTRO[LOG.tab] ? '<p class="lg-intro">' + logT(LOG_INTRO[LOG.tab]) + "</p>" + (LOG_GUIA[LOG.tab] ? logGuia(LOG_GUIA[LOG.tab]) : "") : "") +
    '<div class="lg-cuerpo">' + cuerpo + "</div>";
  if (esLab) labMontar(LOG.tab);
}
function logInsertar(input, txt){
  const a = input.selectionStart != null ? input.selectionStart : input.value.length, b = input.selectionEnd != null ? input.selectionEnd : a;
  input.value = input.value.slice(0, a) + txt + input.value.slice(b); input.focus(); input.setSelectionRange(a + txt.length, a + txt.length);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}
function logRefrescar(id){
  const el = document.getElementById(id); if (!el) return;
  el.innerHTML = id === "lg-tabla" ? logTablaHtml() : id === "lg-arg" ? logArgHtml() : id === "lg-sil" ? logSilHtml() : id === "lg-circ" ? logCircuitoHtml() : id === "lg-cu" ? logCuadradoHtml() : id === "lg-co" ? logConjHtml() : logRenderPuertaSola();
}
function logWire(){
  const box = logBox(); if (!box || box.dataset.lgWired) return;
  box.dataset.lgWired = "1";
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button, .lg-pin"); if (!b) return;
    if (b.dataset.lgtab){ LOG.tab = b.dataset.lgtab; LOG.parGrupo = "all"; logRender(); return; }
    if (b.dataset.tecla){ const inp = document.getElementById(b.parentElement.dataset.para); if (inp) logInsertar(inp, b.dataset.tecla); return; }
    if (b.dataset.ejf != null){ LOG.formula = b.dataset.ejf; logRender(); return; }
    if (b.dataset.eja != null){ LOG.prem = b.dataset.eja; LOG.concl = b.dataset.ejc; logRender(); return; }
    if (b.dataset.ejs){ const [m, f] = b.dataset.ejs.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f }); logRender(); return; }
    if (b.dataset.silej != null && typeof LOGX !== "undefined"){ const x = LOGX.silogismos[+b.dataset.silej], [m, f] = x.code.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f, S: x.S, P: x.P, M: x.M, diag: "venn" }); logRender(); const d = document.getElementById("lg-sil"); if (d) d.scrollIntoView({ block: "start" }); return; }   /* (22-10, nube) T2e */
    if (b.dataset.diag){ LOG.sil.diag = b.dataset.diag; logRefrescar("lg-sil"); return; }
    if (b.dataset.parf){ LOG.formula = b.dataset.parf; LOG.tab = "tablas"; logRender(); const t = document.getElementById("lg-tabla"); if (t) t.scrollIntoView({ block: "center" }); return; }
    if (b.dataset.cuej){ LOG.cu.ej = +b.dataset.cuej; logRender(); return; }
    if (b.dataset.cutipo){ LOG.cu.tipo = b.dataset.cutipo; logRender(); return; }
    if (b.dataset.cuval){ LOG.cu.val = b.dataset.cuval === "1"; logRender(); return; }
    if (b.dataset.cutrad){ LOG.cu.trad = b.dataset.cutrad === "1"; logRender(); return; }
    if (b.dataset.ejco1 != null){ LOG.co.izq = b.dataset.ejco1; LOG.co.der = b.dataset.ejco2; logRender(); return; }
    if (b.dataset.gate){ LOG.gate = b.dataset.gate; logRender(); return; }
    if (b.dataset.pin){ LOG["g" + b.dataset.pin] = LOG["g" + b.dataset.pin] ? 0 : 1; logRefrescar("lg-puerta"); return; }
    if (b.dataset.var){ LOG.circ[b.dataset.var] = !LOG.circ[b.dataset.var]; logRefrescar("lg-circ"); return; }
    if (b.dataset.lg === "borrar"){ LOG.formula = ""; logRender(); const i = document.getElementById("lg-f"); if (i) i.focus(); return; }
    if (b.dataset.lg === "circuito"){ LOG.tab = "puertas"; logRender(); const c = document.getElementById("lg-circ"); if (c) c.scrollIntoView({ block: "center" }); return; }
    if (b.dataset.lg === "euler"){ LOG.co.euler = !LOG.co.euler; logRefrescar("lg-co"); return; }
    if (b.dataset.lg === "arg"){ logRefrescar("lg-arg"); }
  });
  box.addEventListener("keydown", ev => { const p = ev.target.closest(".lg-pin"); if (p && (ev.key === "Enter" || ev.key === " ")){ ev.preventDefault(); p.dispatchEvent(new MouseEvent("click", { bubbles: true })); } });
  box.addEventListener("input", ev => {
    const t = ev.target;
    if (t.id === "lg-f"){ LOG.formula = t.value; logRefrescar("lg-tabla"); }
    else if (t.id === "lg-f2"){ LOG.formula = t.value; logRefrescar("lg-circ"); }
    else if (t.id === "lg-co1" || t.id === "lg-co2"){ LOG.co[t.id === "lg-co1" ? "izq" : "der"] = t.value; logRefrescar("lg-co"); }
    else if (t.id === "lg-p" || t.id === "lg-c"){ LOG[t.id === "lg-p" ? "prem" : "concl"] = t.value; logRefrescar("lg-arg"); }
    else if (t.dataset.term){ LOG.sil[t.dataset.term] = t.value; logRefrescar("lg-sil"); }
  });
  box.addEventListener("change", ev => {
    const t = ev.target, k = { "lg-may": "may", "lg-men": "men", "lg-con": "con", "lg-fig": "fig" }[t.id];
    if (k){ LOG.sil[k] = k === "fig" ? +t.value : t.value; logRefrescar("lg-sil"); }
    else if (t.id === "lg-pargrupo"){ LOG.parGrupo = t.value; logRender(); }
    else if (t.dataset && t.dataset.lgitin != null){   /* (22-10) itinerario: nivel superado, sin volver a pintar (no se cierran los desplegables) */
      const n = +t.dataset.lgitin, l = logItinHechos().filter(x => x !== n);
      if (t.checked) l.push(n);
      logItinGuardar(l.sort((a, b) => a - b));
      const d = t.closest(".lg-itin-nivel"); if (d) d.classList.toggle("lg-itin-hecho", t.checked);
      const pr = document.getElementById("lg-itin-prog"); if (pr) pr.textContent = logItinProgreso();
    }
  });
}
function loadLogica(arg){
  /* (07-10) #logica/<paradojas|ejercicios|clasicos>/<id>: abre la pestaña de esa ficha, en su grupo, y la lleva a la vista */
  const m = /^(?:paradojas|ejercicios|clasicos)\/([\w-]+)$/.exec(arg || ""), ficha = m && typeof PARADOJAS !== "undefined" ? PARADOJAS.find(p => p.id === m[1]) : null;
  const grupo = ficha && typeof PARADOJAS_GRUPOS !== "undefined" ? PARADOJAS_GRUPOS.find(g => g.id === ficha.grupo) : null;
  if (ficha){ LOG.tab = (grupo && grupo.view) || "paradojas"; LOG.parGrupo = ficha.grupo; }
  const mi = /^itinerario(?:\/(\d+))?$/.exec(arg || "");   /* (22-10) #logica/itinerario (mapa) y #logica/itinerario/N (un nivel) */
  LOG.itinNivel = mi && mi[1] ? +mi[1] : null;
  if (mi){ LOG.tab = "itinerario"; LOG.parGrupo = "all"; logRender(); logWire(); const bx = logBox(); if (bx) bx.scrollIntoView({ block: "start" }); return; }
  if (!ficha && (!arg || arg === "portada")){ LOG.tab = "portada"; LOG.parGrupo = "all"; }   /* (20-10) #logica → portada de la sección */
  else if (arg && ["itinerario", "tablas", "silogismos", "cuadrado", "conjuntos", "puertas", "formalizar", "inferencia", "leyes", "cuantificadores", "falacias", ...LOG_PAR_VISTAS, ...(typeof LB_MESAS !== "undefined" ? LB_MESAS : [])].includes(arg)){ LOG.tab = arg; LOG.parGrupo = "all"; }   /* (20-10) #logica/hablamos|arbol|mundo|relaciones|demos */
  logRender(); logWire();
  if (ficha){ const el = document.getElementById("par-" + ficha.id); if (el) el.scrollIntoView({ block: "start" }); }
}
if (logBox()){ logRender(); logWire(); }
