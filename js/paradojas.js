// Generado por web_i18n/i18n_rebuild.js (nl) a partir de web/js/paradojas.js. No editar a mano: editar la memoria tm/nl.json y regenerar.
const PARADOJAS_TXT = {
 "lineaNivel": "Route: niveau {n}"
};
const PARADOJAS_GRUPOS = [
 {
  "id": "autorref",
  "view": "paradojas",
  "titulo": "Zinnen die over zichzelf gaan",
  "intro": "Paradoxen van de zelfreferentie: een zin, een verzameling of een regel die op zichzelf wordt toegepast en uiteindelijk tegelijk iets en het tegendeel ervan zegt."
 },
 {
  "id": "zenon",
  "view": "paradojas",
  "titulo": "Zeno: beweging en het oneindige",
  "intro": "Zeno van Elea, leerling van Parmenides, bedacht argumenten om aan te tonen dat beweging, als we er zorgvuldig over nadenken, onmogelijk lijkt."
 },
 {
  "id": "regreso",
  "view": "paradojas",
  "titulo": "Regressies en lussen",
  "intro": "Wanneer een verklaring een andere verklaring nodig heeft, en die weer een andere, enzovoort, zijn er maar drie uitwegen: eindeloos doorgaan (regressie naar het oneindige), stoppen bij iets dat zelf niet meer wordt verklaard (een absoluut, een eerste principe) of terugkeren naar het beginpunt (een lus of cirkel). Sommige cirkels zijn vicieus en andere niet; sommige absoluten verklaren en andere houden alleen op met vragen. Een beroemde tekening vat het samen: <em>Handen die tekenen</em> (1948), van M. C. Escher, waarin elke hand de andere tekent."
 },
 {
  "id": "vaguedad",
  "view": "paradojas",
  "titulo": "Vaagheid en identiteit",
  "intro": "Woorden zonder een precieze grens en dingen die beetje bij beetje veranderen: waar ligt de grens?, wanneer houdt iets op te zijn wat het was?"
 },
 {
  "id": "accion",
  "view": "paradojas",
  "titulo": "Paradoxen van handelen en politiek",
  "intro": "Het zijn geen logische tegenstrijdigheden, maar situaties waarin het middel tegen het doel lijkt in te gaan, of waarin de rede niet volstaat om te beslissen."
 },
 {
  "id": "colectivo",
  "view": "paradojas",
  "titulo": "Eén en allen",
  "intro": "Wat voor ieder afzonderlijk goed of waar is, kan ophouden dat te zijn wanneer iedereen het tegelijk doet. Het zijn paradoxen van de optelling: de fout zit niet in elke stap, maar in de overgang van “één” naar “allen”."
 },
 {
  "id": "razonar",
  "view": "paradojas",
  "titulo": "Valkuilen van het redeneren",
  "intro": "Redeneringen die onberispelijk lijken en tot een conclusie leiden die we niet kunnen aanvaarden: de misstap moet worden gevonden."
 },
 {
  "id": "ejercicios",
  "view": "ejercicios",
  "titulo": "Zinsanalyse (oefeningen voor de klas)",
  "intro": "Het zijn geen paradoxen: het zijn zinnen die we in de klas hebben geanalyseerd. Eerst wordt hun logische vorm bepaald; daarna wordt gekeken naar wat ze zeggen, wat ze veronderstellen en wat ze niet zeggen ook al lijkt dat zo."
 },
 {
  "id": "historia",
  "view": "clasicos",
  "titulo": "Geschiedenis van de logica: stoïcijnen en middeleeuwers",
  "intro": "Waar sommige hulpmiddelen van de Hoek vandaan komen. De stoïcijnen maakten, eeuwen vóór iemand anders, een logica van uitspraken; de middeleeuwse logici verfijnden de theorie van de gevolgtrekkingen en de analyse van de termen. Aristoteles, Leibniz, Kant, Frege en Russell hebben hun plaats in de leerstof van Geschiedenis van de filosofie en in de Leibniz-werkplaats."
 },
 {
  "id": "agustin",
  "view": "clasicos",
  "titulo": "Augustinus: <em>Over het gelukkige leven</em>",
  "intro": "Zinnen uit de dialoog <em>Over het gelukkige leven</em> (hoofdstuk 2), waarin Augustinus, zijn moeder Monica en enkele jongeren tijdens een verjaardagsbanket bespreken wie gelukkig is. Ze worden met dezelfde hulpmiddelen geanalyseerd als de zinnen uit de klas."
 }
];
const PARADOJAS = [
 {
  "id": "mentiroso",
  "grupo": "autorref",
  "nivel": 3,
  "titulo": "De leugenaar",
  "origen": "Eubulides van Milete, 4e eeuw v.Chr.",
  "enunciado": "“Deze zin is onwaar.”",
  "problema": "Als de zin waar is, dan is wat hij zegt waar: dat hij onwaar is. Als hij onwaar is, dan is wat hij zegt onwaar, dus is hij niet onwaar: hij is waar. Elk antwoord leidt naar het tegenovergestelde. Als we <em>p</em> noemen voor “deze zin is waar”, dan beweert de zin <em>p ↔ ¬p</em>, wat een tegenspraak is: onwaar ongeacht de waarde van <em>p</em>.",
  "salidas": "<ul><li><strong>Tarski</strong> (1933): een taal kan niet spreken over de waarheid van haar eigen zinnen. Er is een metataal nodig, een taal “van een hoger niveau”, om te zeggen “deze zin is waar” of “hij is onwaar”.</li><li><strong>Kripke</strong> (1975): de zin heeft geen fundament, want om te weten of hij waar is, zou je dat van tevoren moeten weten. Hij is niet waar en niet onwaar: hij blijft zonder waarde.</li><li><strong>Dialeteïsme</strong> (Graham Priest): sommige zinnen zijn tegelijk waar en onwaar, en er moet een logica worden opgebouwd die dat toelaat zonder dat alles instort.</li></ul>",
  "pensar": "En wat dacht je van de zin “deze zin is waar”? Hij leidt niet tot tegenspraak, maar welke waarheidswaarde zou je eraan geven en waarom?"
 },
 {
  "id": "epimenides",
  "grupo": "autorref",
  "nivel": 6,
  "titulo": "Epimenides: “Alle Kretenzers liegen”",
  "origen": "Epimenides van Knossos (Kreta), 6e eeuw v.Chr. Soms wordt het verteld met Atheners of een ander volk, maar de oude versie is die van de Kretenzer.",
  "enunciado": "Epimenides, die Kretenzer is, zegt: “Alle Kretenzers liegen altijd”.",
  "problema": "Het lijkt hetzelfde als de leugenaar: als het waar is, liegt Epimenides, die Kretenzer is, wanneer hij het zegt, dus is het onwaar. Maar hier zit de valkuil: als het onwaar is, hoeft het niet waar te zijn. Dat het onwaar is, betekent alleen dat <strong>een of andere</strong> Kretenzer <strong>soms</strong> de waarheid spreekt. Het enige dat volgt, is dat de zin onwaar is en dat Epimenides liegt. Er is geen paradox, tenzij we toevoegen dat Epimenides de enige Kretenzer is of dat dit de enige zin is die op Kreta is gezegd. In de logica: als <em>p</em> <em>¬p</em> impliceert, volgt daaruit simpelweg <em>¬p</em>.",
  "salidas": "<ul><li>Het is een goed voorbeeld dat de ontkenning van “iedereen liegt” niet “iedereen spreekt de waarheid” is, maar “iemand liegt niet” (in het logisch vierkant is de contradictoire van een A een O).</li><li>De versie van Epimenides wordt geciteerd in de Bijbel (Brief aan Titus 1, 12) zonder enige logische zorg: daar wordt het gebruikt als een belediging tegen de Kretenzers.</li></ul>",
  "pensar": "Wat zou er aan het verhaal moeten worden toegevoegd om er een echte paradox van te maken, zoals die van de leugenaar?"
 },
 {
  "id": "barbero",
  "grupo": "autorref",
  "nivel": 5,
  "titulo": "De barbier van Russell",
  "origen": "Bertrand Russell gebruikte haar in 1918 om op eenvoudige wijze zijn paradox van de verzamelingen (1901) uit te leggen.",
  "enunciado": "In een dorp is er een barbier die alle mannen scheert die zichzelf niet scheren, en alleen hen. Wie scheert de barbier?",
  "problema": "Als de barbier zichzelf scheert, is hij een van degenen die zichzelf scheren, en die scheert hij niet: hij scheert zichzelf niet. Als hij zichzelf niet scheert, is hij een van degenen die zichzelf niet scheren, en al diegenen scheert hij: hij scheert zichzelf. Als <em>p</em> is “de barbier scheert zichzelf”, zegt de regel <em>p ↔ ¬p</em>: weer een tegenspraak.",
  "salidas": "<ul><li>De oplossing van de barbier is eenvoudig: <strong>zo'n barbier kan niet bestaan</strong>. De beschrijving is tegenstrijdig, zoals een “vierkante cirkel”.</li><li>Het ernstige is de oorspronkelijke versie: de <strong>verzameling van alle verzamelingen die zichzelf niet bevatten</strong>. Bevat hij zichzelf? Zo ja, dan niet; zo nee, dan ja. Russell schreef het aan Frege in 1902, toen die op het punt stond zijn poging te publiceren om de wiskunde op de logica te funderen, en Frege erkende dat zijn systeem wankelde.</li><li>De uitwegen waren de <strong>typenleer</strong> van Russell (een verzameling kan geen lid zijn van zichzelf) en de verzamelingenleer met axioma's die verbieden verzamelingen te vormen met willekeurige eigenschappen.</li></ul>",
  "pensar": "Een bibliotheekcatalogus die alle catalogi bevat die zichzelf niet vermelden: moet hij zichzelf vermelden?"
 },
 {
  "id": "grelling",
  "grupo": "autorref",
  "nivel": 5,
  "titulo": "De paradox van “heterologisch”",
  "origen": "Kurt Grelling en Leonard Nelson, 1908.",
  "enunciado": "Sommige woorden zeggen iets dat ze zelf ook zijn: “esdrújula” is esdrújula, “polisílaba” heeft veel lettergrepen. We noemen ze <em>autologisch</em>. De andere, zoals “monosílaba” of “larguísima”, zijn <em>heterologisch</em>. Is het woord “heterologisch” heterologisch?",
  "problema": "Als “heterologisch” heterologisch is, voldoet het aan wat het zegt, dus is het autologisch. Als het autologisch is, voldoet het aan wat het zegt, namelijk heterologisch zijn. Het is de barbier, maar met woorden: een eigenschap die op zichzelf van toepassing is.",
  "salidas": "<ul><li>Net als bij de leugenaar wordt voorgesteld niveaus te scheiden: je kunt een woord niet gebruiken om over eigenschappen van woorden van hetzelfde niveau te spreken zonder voorzorgsmaatregelen.</li><li>Een andere uitweg: “heterologisch” is niet goed gedefinieerd voor zichzelf, net zoals de zin van de leugenaar geen waarheidswaarde heeft.</li></ul>",
  "pensar": "Is het woord “autologisch” autologisch? Kun je dat beslissen?"
 },
 {
  "id": "cocodrilo",
  "grupo": "autorref",
  "nivel": 3,
  "titulo": "De krokodil",
  "origen": "Klassiek probleem uit de Griekse logica, opgetekend door de stoïcijnen en door Lucianus.",
  "enunciado": "Een krokodil steelt een kind en zegt tegen de moeder: “Ik zal het je teruggeven als je raadt wat ik ga doen”. De moeder antwoordt: “Je gaat het mij niet teruggeven”.",
  "problema": "Als de krokodil het houdt, heeft de moeder het goed geraden, en dan moet hij het haar teruggeven. Als hij het teruggeeft, heeft de moeder zich vergist, en dan zou hij het niet moeten teruggeven. Wat hij ook doet, hij breekt zijn belofte.",
  "salidas": "<ul><li>De belofte van de krokodil hangt af van wat hij zelf gaat doen: het is een andere vorm van zelfverwijzing, en kan niet in alle gevallen worden nagekomen.</li><li>Als de moeder had gezegd “je gaat het mij teruggeven”, had de krokodil zonder tegenspraak kunnen kiezen: teruggeven (zij heeft gelijk) of houden (zij heeft ongelijk).</li></ul>",
  "pensar": "Welk antwoord is het beste voor de moeder, en waarom is het antwoord dat ze gaf het slimste?"
 },
 {
  "id": "aquiles",
  "grupo": "zenon",
  "nivel": 9,
  "titulo": "Achilles en de schildpad",
  "origen": "Zeno van Elea, 5e eeuw v.Chr.; Aristoteles vertelt het ons in de <em>Fysica</em> (boek VI).",
  "enunciado": "Achilles, de snelste van de Grieken, houdt een wedloop met een schildpad en geeft haar een voorsprong. Wanneer hij aankomt waar de schildpad was, is zij al een stukje verder. Wanneer hij bij dat nieuwe punt aankomt, is zij weer een stukje verder. En zo altijd: Achilles haalt haar nooit in.",
  "problema": "Elk stuk is echt en er zijn oneindig veel stukken. Het lijkt dat het afleggen van oneindig veel stukken oneindig veel tijd vereist, dus zou Achilles de schildpad nooit inhalen, wat in tegenspraak is met wat we zien.",
  "salidas": "<ul><li><strong>Wiskunde</strong>: een som van oneindig veel termen kan een eindig resultaat opleveren. 1 + ½ + ¼ + ⅛ + … = 2. De oneindig veel stukken worden in een eindige tijd afgelegd, en je kunt berekenen waar hij haar inhaalt.</li><li><strong>Aristoteles</strong>: ruimte en tijd zijn alleen <em>in potentie</em> tot in het oneindige deelbaar; Achilles legt niet oneindig veel stukken <em>in acte</em> af.</li><li>Sommige filosofen denken dat de som niet alles oplost: de vraag blijft hoe je een reeks stappen die geen laatste stap heeft, kunt <em>voltooien</em>.</li></ul>",
  "pensar": "Zeno verdedigde Parmenides: beweging is schijn. Waarom zou een argument tegen beweging dienen om te verdedigen dat het zijn één en onbeweeglijk is?"
 },
 {
  "id": "dicotomia",
  "grupo": "zenon",
  "nivel": 9,
  "titulo": "De dichotomie",
  "origen": "Zeno van Elea, 5e eeuw v.Chr.",
  "enunciado": "Om het klaslokaal over te steken, moet je eerst bij de helft aankomen. Maar daarvoor, bij de helft van de helft. En daarvoor, bij de helft van die helft… Er is geen eerste stap, dus kun je niet eens beginnen te bewegen.",
  "problema": "Het is Achilles omgekeerd: in plaats van nooit bij het einde aan te komen, kun je nooit van het begin vertrekken, omdat er vóór elk punt nog een ander punt is waar je eerst moet aankomen.",
  "salidas": "<ul><li>Hetzelfde wiskundige antwoord: ½ + ¼ + ⅛ + … = 1. Oneindig veel trajecten, eindige afstand, eindige tijd.</li><li>De filosofische vraag: is de ruimte werkelijk tot in het oneindige deelbaar, of is er een minimale afstand? De huidige natuurkunde discussieert nog of ruimte en tijd continu zijn.</li></ul>",
  "pensar": "Is er enig verschil tussen “het kan oneindig vaak verdeeld worden” en “het bestaat uit oneindig veel delen”?"
 },
 {
  "id": "flecha",
  "grupo": "zenon",
  "nivel": 9,
  "titulo": "De pijl",
  "origen": "Zeno van Elea, 5e eeuw v.Chr.; ook in de <em>Fysica</em> van Aristoteles.",
  "enunciado": "Op elk ogenblik neemt een vliegende pijl een ruimte in die precies gelijk is aan haarzelf: op dat ogenblik staat ze stil. De tijd bestaat uit ogenblikken. Dus staat de pijl altijd stil.",
  "problema": "Als ze op geen enkel ogenblik beweegt, en de tijd niets meer is dan een optelsom van ogenblikken, wanneer beweegt ze dan? Maar we zien dat ze het doelwit bereikt.",
  "salidas": "<ul><li><strong>Aristoteles</strong>: de tijd is niet samengesteld uit ondeelbare ogenblikken, net zoals een lijn niet uit punten bestaat. Beweging vindt plaats in intervallen, niet in ogenblikken.</li><li><strong>Moderne analyse</strong>: de snelheid op een ogenblik wordt gedefinieerd als een limiet. Dat de pijl op elk ogenblik een plaats inneemt, belet niet dat ze op dat ogenblik een snelheid heeft.</li></ul>",
  "pensar": "Een film bestaat uit stilstaande beelden na elkaar. Beweegt er iets in een film?"
 },
 {
  "id": "sorites",
  "grupo": "vaguedad",
  "nivel": 7,
  "titulo": "De hoop (sorites)",
  "origen": "Eubulides van Milete, 4e eeuw v.Chr. “Sorites” komt van het Griekse <em>sōrós</em>, “hoop”.",
  "enunciado": "Eén zandkorrel is geen hoop. Als iets geen hoop is, maakt het toevoegen van één enkele korrel het niet tot een hoop. Dus zijn twee korrels geen hoop, en drie ook niet… en een miljoen ook niet.",
  "problema": "De beide premissen lijken waar en de redenering is geldig (het is een herhaalde modus ponens). Maar de conclusie is onwaar: een miljoen korrels is wél een hoop. Hetzelfde gebeurt met “kaal”, “lang”, “rijk” of “volwassen”.",
  "salidas": "<ul><li><strong>Er is een exacte grens, maar we kennen die niet</strong> (epistemicisme, Timothy Williamson): een of andere korrel maakt de hoop, hoewel niemand weet welke.</li><li><strong>Graden van waarheid</strong> (fuzzy logic): “dit is een hoop” kan voor 0,4 of 0,9 waar zijn. Elke korrel voegt een beetje waarheid toe.</li><li><strong>Grensgevallen</strong> (supervaluationisme): in het twijfelgebied is de zin noch waar noch onwaar, hoewel het waar blijft dat men op een bepaald punt overgaat in een hoop.</li></ul>",
  "pensar": "De wet stelt de meerderjarigheid op 18 jaar. Lijkt jou dat een oplossing voor de sorites of een manier om die te omzeilen? Waarom is dat nodig?"
 },
 {
  "id": "teseo",
  "grupo": "vaguedad",
  "nivel": 7,
  "titulo": "Het schip van Theseus",
  "origen": "Plutarchus, <em>Leven van Theseus</em> (1e-2e eeuw); Thomas Hobbes voegde het tweede deel toe in de 17e eeuw.",
  "enunciado": "De Atheners bewaarden het schip van Theseus en vervingen de verrotte planken door nieuwe, totdat er geen enkele originele plank meer over was. Is het nog steeds het schip van Theseus? En als iemand de oude planken had bewaard en ze weer in elkaar had gezet, welk van de twee zou dan het schip van Theseus zijn?",
  "problema": "Als de identiteit van de materie afhangt, is het schip dat met de oude planken is herbouwd het schip van Theseus. Als ze van de continuïteit afhangt (het is nooit opgehouden te varen en verzorgd te worden), is het gerepareerde schip het. Ze kunnen niet allebei zijn, want het zijn twee schepen.",
  "salidas": "<ul><li>De identiteit hangt af van de <strong>vorm en de functie</strong>, niet van de materie (een idee dat dicht bij Aristoteles staat).</li><li>De identiteit hangt af van de <strong>continuïteit</strong> in de tijd.</li><li>“Dezelfde zijn” is deels een <strong>conventie</strong>: het hangt af van waarvoor we het vragen (een museum, een scheepsregister, een rechtszaak).</li></ul>",
  "pensar": "Bijna alle cellen van je lichaam vernieuwen zich om de paar jaar. Wat maakt dat jij nog steeds jij bent?"
 },
 {
  "id": "sivispacem",
  "grupo": "accion",
  "nivel": 7,
  "titulo": "“Si vis pacem, para bellum”",
  "origen": "“Als je vrede wilt, bereid je voor op oorlog.” Het idee komt van Vegetius, Romeins militair schrijver (4e-5e eeuw): <em>qui desiderat pacem, praeparet bellum</em>. De korte formule is later.",
  "enunciado": "Om vrede te bereiken moet men zich op oorlog voorbereiden: wie goed bewapend is, zal niet worden aangevallen.",
  "problema": "Het lijkt erop dat het middel het doel tegenspreekt: zich bewapenen om niet te vechten. Het is geen logische tegenstrijdigheid (een middel kan weinig lijken op zijn doel), maar een praktische paradox. Het probleem is wat er gebeurt als <strong>iedereen</strong> de maxime volgt: als een land zich bewapent om zich te verdedigen, ziet zijn buurland dat als een bedreiging en bewapent het zich ook. Dat is het <strong>veiligheidsdilemma</strong>, dat tot een wapenwedloop leidt.",
  "salidas": "<ul><li><strong>De afschrikking</strong> werkt: tijdens de Koude Oorlog hadden de twee grootmachten kernwapens en vielen ze elkaar niet rechtstreeks aan (de “wederzijds verzekerde vernietiging”). Maar de vrede hing af van een evenwicht van angst, en er waren momenten heel dicht bij oorlog, zoals de Cubacrisis (1962).</li><li><strong>Kant</strong> vraagt in <em>Naar de eeuwige vrede</em> (1795) dat de staande legers na verloop van tijd verdwijnen, omdat ze de anderen altijd met oorlog bedreigen en hen ertoe aanzetten elkaar in bewapening te overtreffen. Voor hem wordt vrede opgebouwd met recht en republieken, niet met angst.</li><li>Sommigen stellen voor het om te draaien: <em>si vis pacem, para pacem</em>: als je vrede wilt, bereid de vrede voor.</li></ul>",
  "pensar": "Pas de toets van Kant toe: wat zou er gebeuren als alle landen volgens deze maxime handelden? Zou er meer vrede of meer oorlog zijn?"
 },
 {
  "id": "tolerancia",
  "grupo": "accion",
  "nivel": 7,
  "titulo": "De paradox van de tolerantie",
  "origen": "Karl Popper, <em>De open samenleving en haar vijanden</em> (1945), in een noot bij hoofdstuk 7.",
  "enunciado": "Als een samenleving onbeperkt tolerant is, ook tegenover degenen die een einde aan de tolerantie willen maken, kunnen die er een einde aan maken. Onbeperkte tolerantie leidt tot het verdwijnen van de tolerantie.",
  "problema": "Om de tolerantie te beschermen lijkt het erop dat men tegenover sommigen intolerant moet zijn. Maar wie beslist dan ten opzichte van wie, en is dat niet wat de intoleranten doen?",
  "salidas": "<ul><li>Popper zegt niet dat elke intolerante mening verboden moet worden. Zolang men met argumenten kan antwoorden en de publieke opinie kan afremmen, is het verstandig die niet te verbieden. Alleen wanneer intoleranten weigeren te discussiëren en met geweld antwoorden, heeft de samenleving het recht zich te verdedigen.</li><li>Een andere manier om ernaar te kijken (John Rawls): tolerantie is als een pact. Wie het verbreekt, kan niet eisen dat de anderen het met hem nakomen, hoewel men hem moet tolereren zolang hij de instituties niet in gevaar brengt.</li></ul>",
  "pensar": "Waar zou jij de grens leggen: bij ideeën, bij woorden of bij daden?"
 },
 {
  "id": "buridan",
  "grupo": "accion",
  "nivel": 7,
  "titulo": "De ezel van Buridan",
  "origen": "Wordt toegeschreven aan Jean Buridan (14e eeuw), hoewel het niet in zijn werken voorkomt. Het idee staat al bij Aristoteles, <em>Over de hemel</em> (boek II).",
  "enunciado": "Een ezel, aan beide kanten even hongerig, staat precies tussen twee gelijke hooibergen. Hij heeft geen enkele reden om eerder naar de ene dan naar de andere te gaan, dus beweegt hij niet en sterft van de honger.",
  "problema": "Als we alleen handelen wanneer we een reden hebben om iets te verkiezen, zouden we bij twee identieke opties niet kunnen kiezen. Maar van honger sterven is erger dan elk van beide opties.",
  "salidas": "<ul><li>Men moet <strong>vrijheid hebben om zonder reden te kiezen</strong>, op goed geluk: juist dit werd in de middeleeuwen gebruikt om de vrije wil te bespreken.</li><li><strong>Spinoza</strong> (<em>Ethica</em>, deel II) aanvaardt de conclusie: een persoon in dat volmaakte evenwicht zou van honger sterven. En als men hem vraagt of hij niet meer een ezel dan een mens zou zijn, antwoordt hij dat hij het niet weet.</li><li>In het echte leven zijn er nooit twee exact gelijke opties. En als die er wel zijn, is een munt opgooien een rationele beslissing.</li></ul>",
  "pensar": "Ben je ooit geblokkeerd geweest bij twee bijna gelijke opties? Hoe heb je het opgelost?"
 },
 {
  "id": "hedonismo",
  "grupo": "accion",
  "nivel": 7,
  "titulo": "De paradox van het hedonisme",
  "origen": "Henry Sidgwick, <em>De methoden van de ethiek</em> (1874); John Stuart Mill vertelt het in zijn <em>Autobiografie</em> (1873).",
  "enunciado": "Wie rechtstreeks genot of geluk zoekt, vindt het niet. Wie zich aan iets anders wijdt, vindt het wel.",
  "problema": "Als geluk het doel is van alles wat we doen (zoals de hedonisten en utilitaristen denken), zou het logisch zijn er rechtstreeks naar te streven. Maar dat doen lijkt de beste manier om het te verliezen.",
  "salidas": "<ul><li>Mill concludeerde na een depressie in zijn jeugd dat alleen mensen gelukkig zijn die hun aandacht op iets anders richten dan hun eigen geluk: dat van anderen, de verbetering van de mensheid, een kunst of een bezigheid.</li><li>Aristoteles zou zeggen dat geluk geen toestand is die je najaagt, maar het resultaat van een leven waarin je goed handelt: het ontstaat wanneer we goed doen wat we doen.</li></ul>",
  "pensar": "Heb je weleens meegemaakt dat iets ophield leuk te zijn net toen je je best begon te doen om plezier te hebben?"
 },
 {
  "id": "examen",
  "grupo": "razonar",
  "nivel": 7,
  "titulo": "Het verrassingsexamen",
  "origen": "De paradox deed de ronde in de jaren 40 van de 20e eeuw; D. J. O'Connor publiceerde die in 1948.",
  "enunciado": "De leraar kondigt aan: “Volgende week is er een verrassingsexamen: jullie weten pas op de ochtend zelf welke dag het is.” Een leerling redeneert: “Het kan niet op vrijdag zijn, want op donderdagmiddag zouden we al weten dat het vrijdag wordt. Als vrijdag afvalt, kan het om dezelfde reden ook niet op donderdag zijn… Dus kan er geen verrassingsexamen zijn.” Op woensdag is er een examen, en niemand had het verwacht.",
  "problema": "Elke stap van de leerling lijkt correct, maar de conclusie is onwaar: het examen was wel degelijk een verrassing. Waar zit de fout?",
  "salidas": "<ul><li>De leerling gaat ervan uit dat de aankondiging van de leraar waar is (er komt een examen) en concludeert tegelijk dat die er niet komt. Als hij niet meer in de aankondiging gelooft, kan hij die niet meer gebruiken om dagen uit te sluiten, en wordt elke dag weer een verrassing.</li><li>De aankondiging gaat over wat de leerlingen zullen weten, en wat ze weten verandert doordat ze erover nadenken: het is een vorm van zelfverwijzing, zoals bij de leugenaar.</li><li>Met maar één mogelijke dag (“morgen is er een verrassingsexamen”) is de aankondiging wel tegenstrijdig. Met meerdere dagen is dat niet meer duidelijk.</li></ul>",
  "pensar": "Als de leerling tot de conclusie was gekomen “het examen moet op maandag zijn”, zou het dan een verrassing zijn geweest?"
 },
 {
  "id": "protagoras",
  "grupo": "razonar",
  "nivel": 4,
  "titulo": "Protagoras en Euatlo",
  "origen": "Aulus Gellius, <em>Noctes Atticae</em> (2e eeuw), vertelt het over de sofist Protagoras.",
  "enunciado": "Protagoras leert Euatlo rechten; Euatlo zal hem betalen zodra hij zijn eerste proces wint. Euatlo rondt de opleiding af en verdedigt niemand. Protagoras klaagt hem aan. Protagoras: “Als ik win, betaal je me omdat de rechter dat beveelt; als ik verlies, betaal je me omdat je dan je eerste proces hebt gewonnen.” Euatlo: “Als ik win, betaal ik niet omdat de rechter dat beveelt; als ik verlies, betaal ik niet omdat ik dan nog geen enkel proces heb gewonnen.”",
  "problema": "De twee redeneringen hebben dezelfde vorm en leiden tot tegengestelde conclusies. Ieder kiest, al naargelang het hem uitkomt, of het vonnis of het contract geldt.",
  "salidas": "<ul><li>De truc is dat er halverwege het argument van criterium wordt gewisseld. Als je er maar één vaststelt (het vonnis of het contract), verdwijnt het dilemma.</li><li>Een juridische uitweg: de rechter geeft Euatlo gelijk, omdat hij nog geen enkel proces heeft gewonnen. Maar dan heeft Euatlo er al één gewonnen, en kan Protagoras hem opnieuw aanklagen… en winnen.</li></ul>",
  "pensar": "De sofisten leerden elke stelling te verdedigen. Wat heeft deze zaak daarmee te maken?"
 },
 {
  "id": "omnipotencia",
  "grupo": "razonar",
  "nivel": 7,
  "titulo": "De steen die niet kan worden opgetild",
  "origen": "Paradox van de almacht, besproken in de middeleeuwse filosofie.",
  "enunciado": "Kan een almachtig wezen een steen scheppen die zo zwaar is dat hij hem zelf niet kan optillen?",
  "problema": "Als hij die kan scheppen, is er iets dat hij niet kan: optillen. Als hij die niet kan scheppen, is er iets dat hij niet kan: scheppen. In beide gevallen is hij niet almachtig.",
  "salidas": "<ul><li><strong>Thomas van Aquino</strong>: almachtig zijn betekent alles kunnen doen wat <em>mogelijk</em> is. Wat een tegenstrijdigheid bevat (“een steen die niet kan worden opgetild door iemand die alles kan”) is niet iets wat niet gedaan kan worden, maar een zin zonder betekenis, zoals “een vierkante cirkel”.</li><li>Anderen denken dat de paradox laat zien dat het idee van een macht zonder enige grens onsamenhangend is.</li></ul>",
  "pensar": "Is het een beperking om het tegenstrijdige niet te kunnen doen?"
 },
 {
  "id": "berry",
  "grupo": "autorref",
  "nivel": 7,
  "titulo": "De paradox van Berry",
  "origen": "Russell publiceerde de paradox in 1908 en schreef die toe aan G. G. Berry, bibliothecaris aan de Universiteit van Oxford.",
  "enunciado": "Denk aan “het kleinste natuurlijke getal dat niet met minder dan vijftien woorden kan worden genoemd”. Zulke getallen bestaan, want met minder dan vijftien woorden kun je maar een beperkt aantal zinnen vormen, en de getallen houden niet op; en daaronder zal er één de kleinste zijn. Maar de zin tussen aanhalingstekens heeft veertien woorden.",
  "problema": "De zin noemt dat getal met veertien woorden, dus het getal kan wél met minder dan vijftien woorden worden genoemd: het is niet het getal dat we zochten. En als hij het niet is, welk getal is het dan? De zin gaat niet over zichzelf zoals bij de leugenaar, maar gebruikt het woord “noemen” om te spreken over alles wat genoemd kan worden, inclusief zichzelf.",
  "salidas": "<ul><li>Net als bij de leugenaar worden niveaus gescheiden: “noembaar in deze taal” kan niet binnen diezelfde taal worden gedefinieerd.</li><li>Het idee bleek later nuttig in de wiskunde: Gregory Chaitin gebruikte het om aan te tonen dat er waarheden over de complexiteit van getallen zijn die geen enkel systeem van regels kan bewijzen.</li></ul>",
  "pensar": "Waarom is er geen paradox als we “vijftien” door “vijf” vervangen?"
 },
 {
  "id": "agripa",
  "grupo": "regreso",
  "nivel": 7,
  "titulo": "Het trilemma van Münchhausen",
  "origen": "Agrippa, Griekse scepticus (1e eeuw), opgetekend door Sextus Empiricus in <em>Pyrronische schetsen</em> (boek I). De naam is van Hans Albert (1968), naar de baron van Münchhausen, die vertelde dat hij zichzelf aan zijn eigen haren uit een moeras had getrokken.",
  "enunciado": "—Hoe weet je dat dat waar is? —Om deze reden. —En hoe weet je dat die reden waar is? —Om deze andere. —En die? … Als we blijven doorvragen, zijn er maar drie mogelijke uitkomsten.",
  "problema": "<ul><li><strong>Oneindige regressie</strong>: elke reden heeft weer een andere nodig, zonder einde. We zijn nooit klaar met iets rechtvaardigen.</li><li><strong>Afbreken</strong>: op een bepaald punt zeggen we “dit rechtvaardigen we niet meer, het is gewoon zo”. Maar dan berust al het andere op iets dat we zonder reden hebben aanvaard.</li><li><strong>Cirkel</strong>: de keten komt terug bij een reden die we al hadden gebruikt. Maar dan dient wat we wilden bewijzen om zichzelf te bewijzen.</li></ul><p>Geen van de drie lijkt een echte rechtvaardiging.</p>",
  "salidas": "<ul><li><strong>Fundationalisme</strong>: er zijn waarheden die geen bewijs nodig hebben omdat ze evident zijn. Voor Descartes: “ik denk, dus ik besta”; voor Aristoteles: de eerste principes, zoals het principe van non-contradictie.</li><li><strong>Coherentisme</strong>: overtuigingen vormen geen keten maar een netwerk, en steunen elkaar, zoals de stenen van een boog.</li><li><strong>Fallibilisme</strong> (Popper, Albert): er is geen laatste fundament. We aanvaarden redenen zolang ze bestand zijn tegen kritiek, wetend dat we het mis kunnen hebben.</li></ul>",
  "pensar": "Een kind dat steeds weer “waarom?” vraagt, put ieders geduld uit. Welke van de drie uitwegen gebruiken volwassenen meestal om hem te laten stoppen?"
 },
 {
  "id": "tortugas",
  "grupo": "regreso",
  "nivel": 7,
  "titulo": "Schildpadden tot onderaan",
  "origen": "John Locke, <em>Een essay over het menselijk verstand</em> (1690, boek II, hfdst. 23), vertelt de versie met de olifant en de schildpad. Die met de oneindige schildpadden is een anekdote die aan verschillende wetenschappers wordt toegeschreven; Stephen Hawking gebruikt die aan het begin van <em>Een korte geschiedenis van de tijd</em> (1988).",
  "enunciado": "Een wijze legt uit dat de aarde op een olifant rust, en de olifant op een schildpad. —En de schildpad, waar rust die op? —Op een andere schildpad. —En die? —Het heeft geen zin, jongeman: het zijn schildpadden tot onderaan.",
  "problema": "Elke steun heeft weer een andere steun nodig. Het antwoord “schildpadden tot onderaan” beantwoordt de vraag niet: het stelt haar voor altijd uit. Als niets de laatste schildpad ondersteunt, omdat die er niet is, wat ondersteunt dan het geheel?",
  "salidas": "<ul><li>Locke gebruikt het om de draak te steken met het idee van <strong>substantie</strong>: we zeggen dat de eigenschappen van dingen op “iets” rusten, maar we weten niet wat dat iets is, net als de wijze met zijn schildpad.</li><li>De moderne natuurkunde verandert de vraag: de aarde rust nergens op, omdat “beneden” geen absolute richting is; ze bevindt zich in een baan om de zon en valt voortdurend zonder te stoppen.</li><li>Het toont het verschil tussen een regressie <strong>die verklaart</strong> en een die de verklaring alleen maar <strong>uitstelt</strong>.</li></ul>",
  "pensar": "Is een oneindige keten van schildpadden hetzelfde als een oneindige keten van voorouders? Waarom lijkt de ene ons absurd en de andere niet zo erg?"
 },
 {
  "id": "primermotor",
  "grupo": "regreso",
  "nivel": 11,
  "titulo": "De eerste oorzaak: een regressie die stopt bij het absolute",
  "origen": "Aristoteles, <em>Fysica</em> (boek VIII) en <em>Metafysica</em> (boek XII); Thomas van Aquino, de “vijf wegen” uit de <em>Summa Theologica</em> (I, quaestio 2, artikel 3).",
  "enunciado": "Alles wat beweegt wordt door iets anders bewogen. Dat andere wordt op zijn beurt weer door iets anders bewogen. Maar zo kan het niet tot in het oneindige doorgaan, want dan zou er geen eerste beweger zijn en zou er niets bewegen. Er is dus een eerste beweger die door niets wordt bewogen, “en dit is wat iedereen onder God verstaat”.",
  "problema": "Om de regressie te stoppen wordt een <strong>absoluut iets</strong> gepostuleerd: iets wat al het andere verklaart maar zelf geen verklaring nodig heeft. Het bezwaar ligt voor de hand: als alles een oorzaak heeft, wie heeft dan de eerste oorzaak veroorzaakt? En als iets zonder oorzaak kan bestaan, waarom dan niet de wereld zelf?",
  "salidas": "<ul><li><strong>Thomas</strong> onderscheidt twee ketens. Een oneindige reeks van ouders en kinderen lijkt hem niet onmogelijk. Onmogelijk is een keten waarin elke schakel <em>nu</em> werkt dankzij de vorige, zoals de hand die de stok beweegt die de steen beweegt: zonder de eerste zou er geen enkele bewegen.</li><li><strong>Spinoza</strong> noemt dat absolute <em>causa sui</em>: datgene waarvan de natuur het bestaan insluit.</li><li><strong>Kant</strong> (<em>Kritiek van de zuivere rede</em>, 1781): de rede zoekt altijd een voorwaarde die zelf niet meer voorwaardelijk is, en komt zo tot een absoluut. Maar we kunnen niet weten of dat bestaat: de vraag gaat verder dan alle mogelijke ervaring.</li><li><strong>Russell</strong>, in een radiodiscussie met Copleston (1948), wijst het af: “het universum is er gewoon, en dat is alles”.</li></ul>",
  "pensar": "Een regressie stoppen bij iets dat “geen verklaring nodig heeft”, is dat verklaren of ophouden met vragen? Doet een kind dat “gewoon omdat” antwoordt hetzelfde?"
 },
 {
  "id": "carroll",
  "grupo": "regreso",
  "nivel": 7,
  "titulo": "Wat de schildpad tegen Achilles zei",
  "origen": "Lewis Carroll, auteur van <em>Alice in Wonderland</em> en hoogleraar logica, in het tijdschrift <em>Mind</em> (1895).",
  "enunciado": "Achilles laat de schildpad een redenering zien: “Als het regent, wordt de grond nat. Het regent. Dus wordt de grond nat”. De schildpad accepteert de twee premissen, maar niet de conclusie, totdat ook de regel wordt opgeschreven: “Als het waar is dat als het regent de grond nat wordt, en het waar is dat het regent, dan wordt de grond nat”. Achilles voegt die toe. De schildpad vraagt dan om nog een regel die zegt dat uit die drie de conclusie volgt. En zo verder.",
  "problema": "Als elke regel om een conclusie te trekken als een extra premisse moet worden toegevoegd, is er weer een andere regel nodig om die premisse te gebruiken, en weer een andere… We zouden nooit iets kunnen concluderen, zelfs niet met de modus ponens, de eenvoudigste redenering.",
  "salidas": "<ul><li>Een inferentieregel is geen extra premisse: het is wat je <strong>doet</strong> met de premissen. Kunnen redeneren is kunnen doen, niet een extra zin op papier hebben staan.</li><li>De formule <em>(p ∧ (p → q)) → q</em> is een tautologie, waar in alle rijen van de tabel. Maar dat ze waar is, is niet genoeg om <em>q</em> af te leiden: je moet haar gebruiken.</li><li>Wittgenstein komt op iets vergelijkbaars terug: een regel volgen kan niet altijd afhangen van weer een andere regel die hem interpreteert; op een bepaald punt handelen we gewoon.</li></ul>",
  "pensar": "Wat zou je de schildpad antwoorden zodat hij ophoudt met regels vragen?"
 },
 {
  "id": "tercerhombre",
  "grupo": "regreso",
  "nivel": 7,
  "titulo": "De derde mens",
  "origen": "Plato stelt het zichzelf aan de orde in de <em>Parmenides</em> (132a); de naam is van Aristoteles (<em>Metafysica</em>, boek I).",
  "enunciado": "Socrates, Plato en Phaedo zijn mensen omdat ze allemaal deelhebben aan de Idee Mens. Maar de Idee Mens en de concrete mensen lijken op elkaar in iets: ze zijn allemaal “mens”. Om die gelijkenis te verklaren zou er een andere Idee boven hen nodig zijn: een “derde mens”. En die derde mens zou op de vorige lijken, en een vierde Idee nodig hebben…",
  "problema": "De Ideeën worden ingevoerd om te verklaren waarom veel dingen iets gemeenschappelijks hebben. Maar als de Idee op de dingen lijkt, wordt ze zelf een van die dingen, en is er weer een andere Idee nodig. In plaats van één Idee voor elk soort ding, zouden er oneindig veel zijn.",
  "salidas": "<ul><li>De Idee is geen extra exemplaar, zoals een perfect mens naast de andere gezet. Ze <em>heeft</em> de menselijkheid niet, ze <em>is</em> de menselijkheid, en daarom wordt ze niet op hetzelfde niveau met de mensen vergeleken.</li><li><strong>Aristoteles</strong> gebruikt het argument tegen Plato: de vormen bestaan niet afzonderlijk, maar in de dingen zelf.</li><li>Het is een regressie die niet bij een absoluut stopt: het voorgestelde absolute (de Idee) heeft opnieuw verklaring nodig zodra we het op hetzelfde vlak plaatsen als wat het verklaart.</li></ul>",
  "pensar": "Lijkt een foto van jou op jou op dezelfde manier als jij op een andere persoon lijkt?"
 },
 {
  "id": "custodes",
  "grupo": "regreso",
  "nivel": 7,
  "titulo": "Wie bewaakt de bewaker?",
  "origen": "Juvenalis, <em>Satiren</em> (VI, 347-348): <em>quis custodiet ipsos custodes?</em> Plato stelt het al aan de orde in de <em>Staat</em> (III, 403e).",
  "enunciado": "Om misbruik te voorkomen stellen we een bewaker aan. Maar de bewaker kan ook misbruik maken, dus is er iemand nodig die hem bewaakt. En wie bewaakt die?",
  "problema": "Het is een politieke regressie. Er lijken maar twee manieren te zijn om haar te beëindigen: haar stoppen bij een <strong>absoluut</strong>, een ultieme macht die door niemand wordt bewaakt, of haar sluiten in een <strong>lus</strong>, waarin de bewakers elkaar bewaken.",
  "salidas": "<ul><li><strong>Het absolute</strong>: Hobbes, in de <em>Leviathan</em> (1651), stelt een soeverein die niet onderworpen is aan de wetten die hij zelf uitvaardigt. Zo eindigt de keten, maar als de soeverein misbruik maakt, kan niemand hem stoppen.</li><li><strong>De lus</strong>: Montesquieu, in <em>Over de geest van de wetten</em> (1748), stelt voor dat “de macht de macht beteugelt”. Als de wetgevende, de uitvoerende en de rechterlijke macht elkaar controleren, is er geen uiteindelijke bewaker nodig. Het is een cirkel, maar geen vicieuze: niemand rechtvaardigt zichzelf, elk beperkt de anderen.</li><li>Plato antwoordde met opvoeding: de goed gevormde hoeder heeft geen hoeder nodig. Het zou belachelijk zijn, zegt hij, dat een hoeder een andere hoeder nodig zou hebben.</li></ul>",
  "pensar": "Bij een examen, wie corrigeert degene die corrigeert? Welke mechanismen (herziening, bezwaar, inspectie) vormen een lus en welke eindigen in een laatste woord?"
 },
 {
  "id": "huevo",
  "grupo": "regreso",
  "nivel": 7,
  "titulo": "Wat was er eerst, het ei of de kip?",
  "origen": "Plutarchus bespreekt de vraag in zijn <em>Tafelgesprekken</em> (boek II, 3), in de 1e-2e eeuw.",
  "enunciado": "Elke kip komt uit een ei, en elk kippenei wordt door een kip gelegd. Dus vóór elke kip was er een ei, en vóór dat ei een kip… Welke was de eerste?",
  "problema": "Het is een lus: elke term hangt af van de andere. Als we hem achterwaarts doorlopen, draaien we ofwel eindeloos rond (regressie), ofwel moeten we een van de twee regels doorbreken: ofwel was er een kip die niet uit een ei kwam, ofwel een ei dat niet door een kip werd gelegd.",
  "salidas": "<ul><li><strong>Aristoteles</strong> antwoordt dat de kip: wat in act bestaat (de kip) is eerder dan wat slechts in potentie is (het ei, dat een kip kan worden).</li><li><strong>De evolutie</strong> doorbreekt de lus: soorten veranderen beetje bij beetje. Op een gegeven moment legde een vogel die bijna een kip was een ei waaruit iets kwam dat we al een kip noemen. Dus het ei was eerst, maar het werd gelegd door iets dat niet helemaal een kip was. De lus was in werkelijkheid een <strong>spiraal</strong>: elke winding is iets anders dan de vorige.</li><li>Het is ook een geval van vaagheid, zoals de sorites: “kip” heeft geen exacte grens.</li></ul>",
  "pensar": "Zoek andere lussen van dit type: ervaring en werk (zonder ervaring word je niet aangenomen, en zonder werk heb je geen ervaring). Hoe worden ze in het echte leven doorbroken?"
 },
 {
  "id": "diccionario",
  "grupo": "regreso",
  "nivel": 7,
  "titulo": "De lus van het woordenboek",
  "origen": "Klassiek probleem uit de taalfilosofie; Wittgenstein gebruikt het bijvoorbeeld in de <em>Filosofische onderzoekingen</em> (1953).",
  "enunciado": "Je zoekt “groot” op in een woordenboek en er staat zoiets als “van grotere omvang dan normaal”. Je zoekt “omvang” op: “grootte van een ding”. Je zoekt “grootte” op: “omvang of grootheid”. Je bent terug bij het begin.",
  "problema": "Elk woord wordt gedefinieerd met andere woorden. Omdat het woordenboek een beperkt aantal woorden heeft, vormen de definities vroeg of laat lussen. Hoe kan een van die woorden dan iets betekenen, als elk woord naar andere verwijst?",
  "salidas": "<ul><li>De lussen zijn onvermijdelijk, maar maken het woordenboek niet nutteloos: het dient alleen voor wie al <strong>sommige</strong> woorden kent.</li><li>De eerste woorden worden niet met definities geleerd, maar door <strong>aan te wijzen</strong> en te gebruiken: “dit is rood”, “dat is groot”. Dat is de ostensieve definitie, die de regressie buiten de taal afsnijdt.</li><li>Wittgenstein voegt eraan toe dat ook het aanwijzende gebaar op zichzelf niet voldoende is: je moet al weten wat er wordt aangewezen (de kleur?, de vorm?, het aantal?). De betekenis ligt in het gebruik, binnen een levensvorm.</li></ul>",
  "pensar": "Hoe zou je aan iemand die geen kleuren ziet uitleggen wat “rood” is? En wat “daarna” is?"
 },
 {
  "id": "yablo",
  "grupo": "regreso",
  "nivel": 6,
  "titulo": "De paradox van Yablo: een leugenaar zonder zelfverwijzing",
  "origen": "Stephen Yablo, in het tijdschrift <em>Analysis</em> (1993).",
  "enunciado": "Stel je een oneindige lijst van zinnen voor. Zin 1 zegt: “Alle zinnen die na mij komen zijn onwaar”. Zin 2 zegt hetzelfde, en zin 3, en zo eindeloos door. Geen enkele spreekt over zichzelf.",
  "problema": "Als een zin waar zou zijn, zouden alle volgende onwaar zijn. Maar als de volgende onwaar is, is een van de zinnen die daarna komen waar, en dat spreekt het vorige tegen. Dus zijn ze allemaal onwaar. Maar als alle zinnen die op zin 1 volgen onwaar zijn, is zin 1 waar. Contradictie, en zonder enige zin die over zichzelf spreekt.",
  "salidas": "<ul><li>Het leek erop dat de leugenaar opgelost werd door te verbieden dat een zin over zichzelf spreekt. Yablo laat zien dat dat niet genoeg is: een <strong>oneindige regressie</strong> produceert dezelfde paradox als een <strong>lus</strong>.</li><li>Sommige logici (Graham Priest) antwoorden dat er een verborgen zelfverwijzing is: om de hele lijst te begrijpen moet je naar de lijst verwijzen, die elke zin bevat.</li></ul>",
  "pensar": "Wat hebben een lus (een zin die over zichzelf spreekt) en een oneindige keten (zinnen die altijd over de volgende spreken) met elkaar gemeen?"
 },
 {
  "id": "distintos",
  "grupo": "colectivo",
  "nivel": 6,
  "titulo": "“Als we allemaal anders willen zijn, dan zijn we allemaal gelijk”",
  "origen": "Een veel herhaald idee over mode. Georg Simmel analyseerde het in <em>Filosofie van de mode</em> (1905); Monty Python verfilmde het in <em>Het leven van Brian</em> (1979), waarin een menigte in koor antwoordt dat iedereen individuen zijn.",
  "enunciado": "We willen allemaal anders zijn dan de anderen. Maar als we allemaal hetzelfde willen, zijn we daarin gelijk. En inderdaad: wie de mode ontvlucht, kleedt zich uiteindelijk allemaal hetzelfde.",
  "problema": "<ul><li><strong>Er is een woordspeling</strong>. “Gelijk” verandert van betekenis tussen de premisse en de conclusie. Dat we allemaal <em>hetzelfde verlangen</em> hebben (anders willen zijn) betekent niet dat we <em>dezelfde kenmerken</em> hebben. Het is een drogreden van de dubbelzinnigheid: er wordt een niveau (wat we willen) verward met een ander (wat we zijn).</li><li><strong>Maar er zit iets waars in</strong>. Anders zijn is een relatie: je bent altijd anders <em>dan</em> iets. Als we allemaal hetzelfde als referentie nemen (wat de meerderheid doet) en ons daar tegelijk van verwijderen, gaan we uiteindelijk samen dezelfde kant op. De wiskundige Jonathan Touboul noemde dit het <strong>hipstereffect</strong> (2014): non-conformisten gaan uiteindelijk op elkaar lijken.</li></ul>",
  "salidas": "<ul><li><strong>Simmel</strong>: mode verenigt twee tegengestelde verlangens. We willen imiteren, om bij een groep te horen, en ons onderscheiden, om er niet in op te gaan. Elke mode ontstaat om te onderscheiden en sterft wanneer iedereen haar imiteert.</li><li><strong>Logisch gezien is er geen tegenspraak</strong>: het is mogelijk dat we allemaal tegelijk van iedereen verschillen. Onmogelijk is iets anders: dat we allemaal boven het gemiddelde zitten, of dat we allemaal “origineler zijn dan de meerderheid”.</li><li>In 2019 illustreerde een tijdschrift een artikel over het hipstereffect met de foto van een man met baard en muts. Een lezer schreef verontwaardigd dat zijn foto zonder toestemming was gebruikt. Hij was het niet: het was een andere man die sterk op hem leek.</li></ul>",
  "pensar": "Kan iedereen tegelijk origineel zijn? En kan iedereen boven het gemiddelde zitten? Waarom is het antwoord verschillend?"
 },
 {
  "id": "concierto",
  "grupo": "colectivo",
  "nivel": 7,
  "titulo": "Staan in het concert",
  "origen": "Klassiek voorbeeld uit economieboeken om de <strong>drogreden van compositie</strong> uit te leggen. De naam komt van Aristoteles (<em>Sofistische weerleggingen</em>), hoewel hij het iets anders opvatte.",
  "enunciado": "Bij een concert: als één persoon gaat staan, ziet hij beter. Dus als het hele publiek gaat staan, zal iedereen beter zien.",
  "problema": "De premisse is waar en de conclusie is onwaar: als iedereen opstaat, ziet iedereen hetzelfde als eerst, maar ongemakkelijker. Wat voor ieder afzonderlijk geldt, hoeft niet voor iedereen samen te gelden, omdat het voordeel van ieder afhing van het feit dat de anderen het <em>niet</em> deden.",
  "salidas": "<ul><li>De <strong>drogreden van compositie</strong> gaat van de delen naar het geheel (“elk onderdeel is licht, dus de machine is licht”). De <strong>drogreden van deling</strong> doet het omgekeerde (“het team is het beste, dus elke speler is de beste”).</li><li>Het is niet altijd een drogreden om van de delen naar het geheel te gaan: als elke baksteen rood is, is de muur rood. Je moet nagaan of de eigenschap afhangt van de relatie met de anderen.</li></ul>",
  "pensar": "Geldt hetzelfde voor harder studeren om een beter cijfer te halen dan de rest, of voor eerder in de rij aankomen?"
 },
 {
  "id": "ahorro",
  "grupo": "colectivo",
  "nivel": 7,
  "titulo": "De paradox van het sparen",
  "origen": "John Maynard Keynes, <em>Algemene theorie van de werkgelegenheid, de interest en het geld</em> (1936), die doet denken aan Mandeville en zijn <em>Fabel van de bijen</em> (1714).",
  "enunciado": "Sparen is goed voor een gezin: als het minder uitgeeft dan het verdient, heeft het geld voor wanneer het het nodig heeft. Dus als in een crisis alle gezinnen meer sparen, zal het land er beter voor staan.",
  "problema": "Als iedereen tegelijk minder uitgeeft, verkopen winkels en bedrijven minder, ontslaan ze werknemers, en verdienen die gezinnen minder en kunnen ze minder sparen. De poging van iedereen om te sparen kan eindigen met minder spaargeld en meer werkloosheid. Wat voor één verstandig is, is schadelijk voor iedereen.",
  "salidas": "<ul><li>Het is een ander geval van de drogreden van compositie: de uitgave van de één is het inkomen van de ander, en dat zie je niet als je naar één gezin kijkt.</li><li>Keynes concludeert dat in een crisis de staat moet uitgeven wanneer gezinnen dat niet kunnen. Andere economen discussiëren over wanneer en in hoeverre dit idee geldt.</li></ul>",
  "pensar": "Kant vraagt wat er zou gebeuren als iedereen volgens dezelfde maxime zou handelen. Werkt die toets ook buiten de ethiek, zoals hier?"
 },
 {
  "id": "comunes",
  "grupo": "colectivo",
  "nivel": 7,
  "titulo": "De tragedie van de meent",
  "origen": "William Forster Lloyd (1833); Garrett Hardin maakte haar beroemd in het tijdschrift <em>Science</em> (1968).",
  "enunciado": "Een weiland is van alle herders in het dorp. Elke herder heeft er baat bij om een extra schaap toe te voegen: het voordeel is helemaal voor hem, en de schade aan het weiland wordt over iedereen verdeeld. Omdat iedereen hetzelfde redeneert, raakt het weiland uitgeput en kan niemand het meer gebruiken.",
  "problema": "Elke beslissing is rationeel voor degene die haar neemt, en het resultaat is slecht voor iedereen, ook voor ieder afzonderlijk. Er zit geen fout in de berekening van elke herder; het probleem zit in de optelsom.",
  "salidas": "<ul><li><strong>Hardin</strong> stelde twee oplossingen voor: het weiland verdelen als privé-eigendom of het door de staat laten beheren.</li><li><strong>Elinor Ostrom</strong> (Nobelprijs voor Economie in 2009) bestudeerde dorpen die al eeuwenlang weidegronden, bossen of irrigatiesystemen delen zonder ze uit te putten. Ze bereiken dat met regels die ze zelf opstellen, onderlinge controle en geleidelijke sancties. Bijvoorbeeld het Watertribunaal van Valencia.</li><li>Het klimaat, visbestanden of de stilte in een bibliotheek zijn ook “gemeenschapsgoederen”.</li></ul>",
  "pensar": "Welke “gemeenschapsgoederen” zijn er in jouw klas of op jouw school? Welke regels beschermen ze?"
 },
 {
  "id": "moore",
  "grupo": "razonar",
  "nivel": 7,
  "titulo": "De paradox van Moore: “Het regent, maar ik geloof het niet”",
  "origen": "G. E. Moore stelde haar in de jaren 40 van de 20e eeuw voor; Wittgenstein gaf haar de naam.",
  "enunciado": "“Het regent, maar ik geloof niet dat het regent.”",
  "problema": "De zin is geen tegenspraak: het kan waar zijn dat het regent en dat ik het niet geloof (ik ben in een kelder zonder ramen). Uitgesproken door een ander (“het regent, maar hij gelooft het niet”) is het volkomen normaal. En toch klinkt hij absurd als ik hem zelf uitspreek. Waarom, als hij niet tegenstrijdig is?",
  "salidas": "<ul><li>Door iets te <strong>beweren</strong>, geef ik te kennen dat ik het geloof. Dus als ik “het regent” zeg, zeg ik al impliciet “ik geloof dat het regent”, en vervolgens ontken ik dat. De tegenspraak zit niet in wat de zin zegt, maar tussen de zin en de handeling van het uitspreken.</li><li>Wittgenstein zag hierin dat “ik geloof dat…” niet altijd een toestand van mij beschrijft: vaak is het een voorzichtige manier om iets te beweren.</li></ul>",
  "pensar": "En hoe zit het met de zin “ik geloof niet dat het regent, maar ik kan me vergissen”? Is die ook absurd?"
 },
 {
  "id": "prefacio",
  "grupo": "razonar",
  "nivel": 7,
  "titulo": "De paradox van het voorwoord",
  "origen": "David Makinson, in het tijdschrift <em>Analysis</em> (1965).",
  "enunciado": "Een auteur heeft haar boek zorgvuldig nagelezen en gelooft elke zin die ze heeft geschreven. Maar in het voorwoord schrijft ze: “Er zit vast een fout in dit boek, en daarvoor bied ik mijn excuses aan.” Dat gelooft ze ook, want alle lange boeken bevatten fouten.",
  "problema": "Ze gelooft dat zin 1 waar is, dat zin 2 waar is… en dat de laatste waar is. En tegelijk gelooft ze dat er één onwaar is. Haar overtuigingen samen kunnen niet allemaal waar zijn. En toch lijkt het redelijk om ze allemaal te geloven: redelijker dan te denken dat haar boek perfect is.",
  "salidas": "<ul><li>Misschien is het niet altijd irrationeel om onverenigbare dingen te geloven, zolang ze niet samenvloeien in één overtuiging (“heel mijn boek is waar”).</li><li>Een andere oplossing: we geloven elke zin niet voor 100 %, maar met een bepaalde mate van vertrouwen. Als elke zin voor 99 % waarschijnlijk is, bevat een boek van duizend zinnen vrijwel zeker een onware zin. Zo is er geen tegenspraak.</li></ul>",
  "pensar": "Geloof je dat al jouw meningen waar zijn? En geloof je dat sommige daarvan onwaar zijn? Vind je dat een tegenstrijdigheid?"
 },
 {
  "id": "infelices",
  "grupo": "ejercicios",
  "nivel": 3,
  "titulo": "“Van alle ongelukkigen…”",
  "origen": "Zin voorgesteld als oefening in de klas.",
  "enunciado": "“Van alle ongelukkigen zijn zij die alles krijgen wat ze wensen niet degenen die er het slechtst aan toe zijn.”",
  "problema": "We hebben het over mensen, dus nemen we drie eigenschappen: <em>p</em> = «is ongelukkig», <em>q</em> = «krijgt alles wat hij wenst», <em>r</em> = «komt er het slechtst vanaf». De zin zegt: <strong>als iemand ongelukkig is en alles krijgt wat hij wenst, dan komt hij er niet het slechtst vanaf</strong>: <em>(p ∧ q) → ¬r</em>. Het is een universeel negatief (type E): «Geen enkele ongelukkige die alles krijgt, behoort tot degenen die er het slechtst vanaf komen». De contrapositie zegt hetzelfde vanaf de andere kant: als een ongelukkige er het slechtst vanaf komt, dan heeft hij niet alles gekregen wat hij wenst: <em>(p ∧ r) → ¬q</em>.",
  "salidas": "<ul><li><strong>Wat het vooronderstelt</strong>: dat er ongelukkigen zijn die alles krijgen wat ze wensen. Als die er niet waren, zou het geen zin hebben om ze «van alle ongelukkigen» aan te wijzen. Alles krijgen wat je wenst is niet genoeg om gelukkig te zijn.</li><li><strong>Wat het suggereert, maar niet zegt</strong>: dat degenen die niet krijgen wat ze wensen er het slechtst vanaf komen. Dat is een suggestie (wat wordt geïmpliceerd), geen logische consequentie: de zin sluit alleen een groep uit, hij zegt niet wie er het slechtst vanaf komt.</li><li><strong>Wat het niet zegt</strong>: dat degenen die alles krijgen gelukkig zijn (integendeel, het rekent hen tot de ongelukkigen), noch dat ze weinig lijden: alleen dat zij niet degenen zijn die het meest lijden.</li><li><strong>Gerelateerde ideeën</strong>: Schopenhauer (<em>De wereld als wil en voorstelling</em>, § 57) dacht dat het leven als een slinger heen en weer gaat tussen de pijn van het onvervulde verlangen en de verveling van het vervulde verlangen. Oscar Wilde laat in <em>Lady Windermere's waaier</em> een personage zeggen dat er twee tragedies zijn: niet krijgen wat je wenst en het wel krijgen.</li></ul>",
  "pensar": "Maak de waarheidstabel van (p ∧ q) → ¬r: in welke enige rij zou de zin onwaar zijn? Beschrijf de persoon die hem onwaar zou maken.",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 135,
     "cy": 122,
     "r": 105,
     "cls": "lg-e2",
     "etq": "Ongelukkigen (p)",
     "ex": 120,
     "ey": 60
    },
    {
     "cx": 98,
     "cy": 142,
     "r": 54,
     "cls": "lg-e4",
     "etq": "Slechtst af (r)",
     "ex": 98,
     "ey": 136
    },
    {
     "cx": 250,
     "cy": 112,
     "r": 70,
     "cls": "lg-e1",
     "etq": "Alles krijgen (q)",
     "ex": 268,
     "ey": 20
    }
   ],
   "cruces": [
    [
     210,
     116
    ],
    [
     98,
     166
    ]
   ],
   "dudas": [
    [
     290,
     120
    ]
   ],
   "lectura": "<ul><li>De grote cirkel zijn de <strong>ongelukkigen (p)</strong>. De zin spreekt «van alle ongelukkigen», dus degenen die er het <strong>slechtst vanaf komen (r)</strong> worden erbinnen getekend: het is het slechtst af onder de ongelukkigen.</li><li>De cirkel van degenen die <strong>alles krijgen (q)</strong> kruist die van de ongelukkigen, en het ✕ in de kruising markeert wat de zin vooronderstelt: er zijn ongelukkigen die alles krijgen.</li><li>De cirkels <strong>q</strong> en <strong>r</strong> raken elkaar niet: het is het universeel negatief, «geen enkele ongelukkige die alles krijgt komt er het slechtst vanaf», <em>(p ∧ q) → ¬r</em>.</li><li>Het ✕ binnen <strong>r</strong>: de zin vooronderstelt dat iemand er het slechtst vanaf komt. Omdat dat buiten <strong>q</strong> ligt, heeft die iemand niet alles gekregen: dat is de contrapositie, <em>(p ∧ r) → ¬q</em>.</li><li>De <strong>?</strong> markeert wat de zin niet zegt: of er iemand is die alles krijgt zonder ongelukkig te zijn. Die zone kan leeg zijn of niet.</li><li>Wat de zin alleen suggereert, dat iedereen die niet alles krijgt er het slechtst vanaf komt, <strong>staat niet in de tekening</strong>: binnen <strong>p</strong> blijft een zone buiten <strong>q</strong> en <strong>r</strong> over, die van de ongelukkigen die noch alles krijgen noch er het slechtst vanaf komen. En de tekening laat zien waar iedereen zich bevindt, niet waarom: dat het slechtst af komen <em>voortkomt uit</em> het niet krijgen wat je wenst, kan ook niet getekend worden.</li></ul>",
   "contingencia": "<p>De waarheidstabel van <em>(p ∧ q) → ¬r</em> heeft acht rijen en de zin is slechts in één rij onwaar: hij is <strong>contingent</strong>. In het diagram is elke rij een <strong>zone</strong>, een type persoon afhankelijk van of hij binnen of buiten elke cirkel valt. De acht rijen zijn de acht mogelijke zones.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(p ∧ q) → ¬r</th><th>Wie is het</th><th>In het diagram</th></tr></thead><tbody><tr class=\"lg-contra\"><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td>Ongelukkige die alles krijgt en er het slechtst vanaf komt</td><td><strong>Staat er niet</strong>: q en r raken elkaar niet binnen p. Het is de zone die de zin verbiedt.</td></tr><tr><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td>Ongelukkige die alles krijgt en er niet het slechtst vanaf komt</td><td>De kruising van p en q, met ✕: er is iemand.</td></tr><tr><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td>Ongelukkige die niet alles krijgt en er het slechtst vanaf komt</td><td>De cirkel r, met ✕: er is iemand.</td></tr><tr><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td>Ongelukkige die noch alles krijgt noch er het slechtst vanaf komt</td><td>De rest van p.</td></tr><tr><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td>Is niet ongelukkig, krijgt alles en komt er het slechtst vanaf</td><td>Staat er niet, maar niet vanwege de formule: r wordt binnen p getekend vanwege de lezing «van alle ongelukkigen».</td></tr><tr><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td>Is niet ongelukkig en krijgt alles</td><td>Het deel van q buiten p, met ?: het is niet bekend of er iemand is.</td></tr><tr><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td>Is niet ongelukkig, krijgt niet alles en komt er het slechtst vanaf</td><td>Staat er niet, vanwege dezelfde lezing «van alle ongelukkigen».</td></tr><tr><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td>Noch ongelukkig, noch alles krijgen, noch er het slechtst vanaf komen</td><td>Buiten alle cirkels.</td></tr></tbody></table></div><ul><li><strong>Onware rij = ontbrekende zone.</strong> Wat de zin beweert wordt getekend door de enige combinatie die hem onwaar zou maken te verwijderen: de cirkels q en r worden binnen p gescheiden. De ware rijen zijn de zones die de zin mogelijk laat.</li><li><strong>Daarom is hij contingent</strong>: hij verwijdert sommige zones en laat andere over. Een <strong>tautologie</strong> is waar in alle rijen, dus zou geen enkele zone verwijderen: elke tekening zou geldig zijn en niets zeggen over hoe de wereld is (dat is wat Wittgenstein over tautologieën zegt in de <em>Tractatus</em>). Een <strong>contradictie</strong> is onwaar in alle rijen, dus zou alle zones verwijderen, ook die buiten de cirkels: er zou niemand getekend kunnen worden. De contingente zin informeert omdat hij tussen de twee in zit: hij sluit één geval uit en laat de andere open.</li><li><strong>Valstrik</strong>: in de tekening ontbreken drie zones, maar de formule verwijdert er maar één. De andere twee (r buiten p) worden verwijderd door de lezing «van alle ongelukkigen», die niet in <em>(p ∧ q) → ¬r</em> staat. Als we die in de formule zouden willen opnemen, zouden we <em>r → p</em> moeten toevoegen.</li><li><strong>Het diagram zegt meer dan de tabel</strong>: de tabel zegt welke combinaties mogelijk zijn, niet welke er bestaan. De ✕-tekens (er is iemand in die zone) zijn wat de zin vooronderstelt, en dat kan niet meer worden uitgedrukt in de propositielogica: daarvoor moet je «er is een…» zeggen, wat iets is voor de predicatenlogica of het syllogisme.</li></ul>"
  }
 },
 {
  "id": "apenas",
  "grupo": "ejercicios",
  "nivel": 6,
  "titulo": "“Ze zijn amper minder ongelukkig…”",
  "origen": "Zin voorgesteld als oefening in de klas, aansluitend op de vorige.",
  "enunciado": "“Degenen die alles krijgen wat ze wensen zijn amper minder ongelukkig dan degenen die weinig of niets krijgen.”",
  "problema": "Deze zin classificeert niet meer (ongelukkig zijn of niet), maar <strong>vergelijkt gradaties</strong>. Laten we <em>q</em> noemen voor degenen die alles krijgen wat ze wensen en <em>s</em> voor degenen die weinig of niets krijgen. De zin beweert twee dingen tegelijk: dat <em>q</em> minder ongelukkig is dan <em>s</em> («ze zijn minder ongelukkig») en dat het verschil klein is («amper»). Het is een conjunctie: als een van beide delen niet klopt, is de zin onwaar. In de propositielogica blijft dit allemaal in één letter steken, omdat «A is minder ongelukkig dan B» niet kan worden ontleed in delen die afzonderlijk waar of onwaar zijn: er is een relatie tussen twee termen nodig, <em>M(x, y)</em>, «x is minder ongelukkig dan y», en dat is iets voor de predicatenlogica. Daarom werken hier noch de waarheidstabel met p, q en r, noch de cirkels van Euler, die alleen zeggen wie binnen en wie buiten is: er is een schaal nodig.",
  "salidas": "<ul><li><strong>Wat het zegt</strong>: alles krijgen verbetert iets, maar heel weinig. Let op: «amper minder» <strong>beweert wel</strong> dat ze minder ongelukkig zijn. Het zegt niet dat ze even ongelukkig zijn: «amper» is niet «niet».</li><li><strong>Wat het vooronderstelt</strong>: dat er mensen zijn die alles krijgen en mensen die weinig of niets krijgen; dat niemand tegelijk in beide groepen zit; en dat beide groepen enige ongelukkigheid hebben, want anders zou je niet spreken over «minder ongelukkig» zijn.</li><li><strong>Wat het niet zegt</strong>: niets over degenen die redelijk veel krijgen, maar niet alles. De zin vergelijkt de uitersten en laat het midden buiten beschouwing. Je kunt niet afleiden dat die groep halverwege zit qua ongelukkigheid: die zou van de drie de gelukkigste of de ongelukkigste kunnen zijn.</li><li><strong>Valstrik van de lezing</strong>: «degenen die alles krijgen zijn minder ongelukkig dan degenen die weinig krijgen» kan worden gelezen als «elk van de eersten, minder dan elk van de tweeden» of als «doorgaans, gemiddeld». De eerste lezing wordt weerlegd met één tegenvoorbeeld; de tweede niet. Algemene zinnen over groepen worden meestal op de tweede manier begrepen.</li><li><strong>Relatie met de vorige zin</strong>: als degenen die alles krijgen minder ongelukkig zijn dan degenen die weinig krijgen, al is het maar amper, kunnen zij niet degenen zijn die er het slechtst vanaf komen, want er is altijd iemand die het slechter heeft. Met de eerste lezing <strong>impliceert</strong> de nieuwe zin de vorige. Omgekeerd niet: de vorige liet toe dat alles krijgen de ongelukkigheid sterk zou verlichten, en deze ontkent dat.</li></ul>",
  "pensar": "Vervang «amper» door «veel»: zegt de zin meer of minder dan eerst? En als je zegt «ze zijn niet minder ongelukkig»? Welke van de drie versies zou het gemakkelijkst te weerleggen zijn?",
  "escala": {
   "vista": "0 0 360 185",
   "eje": [
    15,
    345,
    100
   ],
   "banda": [
    178,
    218
   ],
   "marca": 222,
   "textos": [
    {
     "x": 222,
     "y": 34,
     "align": "middle",
     "t": "Weinig of niets (s)"
    },
    {
     "x": 174,
     "y": 64,
     "align": "end",
     "t": "tot waar is het «amper»?"
    },
    {
     "x": 198,
     "y": 136,
     "align": "middle",
     "t": "q: waar"
    },
    {
     "x": 92,
     "y": 136,
     "align": "middle",
     "t": "q hier: onwaar"
    },
    {
     "x": 92,
     "y": 152,
     "align": "middle",
     "t": "(is niet «amper»)"
    },
    {
     "x": 290,
     "y": 136,
     "align": "middle",
     "t": "q hier: onwaar"
    },
    {
     "x": 290,
     "y": 152,
     "align": "middle",
     "t": "(ze zijn niet «minder»)"
    },
    {
     "x": 15,
     "y": 176,
     "align": "start",
     "t": "minder ongelukkig"
    },
    {
     "x": 345,
     "y": 176,
     "align": "end",
     "t": "meer ongelukkig"
    }
   ],
   "lectura": "<ul><li>De lijn is de <strong>schaal van ongelukkigheid</strong>: naar links minder; naar rechts meer. Het punt <strong>s</strong> (degenen die weinig of niets krijgen) is de referentie.</li><li>De <strong>groene strook</strong> is waar <strong>q</strong> (degenen die alles krijgen) zou moeten staan opdat de zin waar zou zijn: links van s («minder ongelukkig»), maar heel dichtbij («amper»).</li><li>Rechts van s is de zin onwaar omdat ze niet <em>minder</em> ongelukkig zouden zijn. Helemaal links is hij ook onwaar, omdat het verschil niet meer <em>amper</em> zou zijn.</li><li>De linkerrand van de strook is een <strong>stippellijn</strong>: niemand weet waar «amper» ophoudt. Het is de vaagheid van de sorites: een beetje meer afstand verandert niets en toch is het op een bepaald punt niet meer «amper».</li></ul>",
   "contTitulo": "Contingent: een smalle strook",
   "contingencia": "<p>Net als de eerste zin is deze <strong>contingent</strong>: hij kan waar of onwaar zijn afhankelijk van hoe de wereld is. Maar de schaal laat nog iets zien: <strong>hoeveel hij riskeert</strong>.</p><ul><li>In het Euler-diagram van de eerste zin werd één zone verwijderd en bleven alle andere over. Hier is het omgekeerde: de zin is alleen waar in een smalle strook en onwaar in de hele rest van de schaal. Hij sluit bijna alle mogelijke posities uit.</li><li>Hoe meer een zin uitsluit, hoe meer hij zegt en hoe gemakkelijker hij te weerleggen is. Een tautologie sluit niets uit en zegt niets; deze zin sluit veel uit en zegt veel. Dat is het idee van Popper: een bewering heeft meer inhoud naarmate meer mogelijke situaties haar onwaar zouden maken.</li><li>Daar staat tegenover dat «amper» vaag is. In grensgevallen (een verschil dat noch duidelijk klein noch duidelijk groot is) is het niet duidelijk of de zin waar of onwaar is. Een zin kan heel riskant zijn en tegelijk moeilijk te controleren.</li><li>Om hem te controleren zou je ongelukkigheid moeten meten, en dat is geen logisch probleem meer. Het is een empirisch probleem (welzijnsenquêtes, psychologische studies) en een conceptueel probleem: wat telt als ongelukkigheid?</li></ul>"
  }
 },
 {
  "id": "tanto",
  "grupo": "ejercicios",
  "nivel": 3,
  "titulo": "“Zowel degenen die alles krijgen als degenen die niets krijgen…”",
  "origen": "Zin voorgesteld als oefening in de klas, aansluitend op de vorige.",
  "enunciado": "“Zowel degenen die alles krijgen als degenen die niets krijgen zijn ongelukkig.”",
  "problema": "Het zijn twee verbonden universeel affirmatieve uitspraken (type A): «iedereen die alles krijgt is ongelukkig» en «iedereen die niets krijgt is ongelukkig». Met <em>p</em> = «is ongelukkig», <em>q</em> = «krijgt alles wat hij wenst» en <em>s</em> = «krijgt niets», wordt dit <em>(q → p) ∧ (s → p)</em>, wat gelijkwaardig is aan <em>(q ∨ s) → p</em>: als je in een van beide uitersten zit, ben je ongelukkig. De contrapositie zegt hetzelfde vanaf de andere kant: <em>¬p → (¬q ∧ ¬s)</em>, wie niet ongelukkig is heeft iets gekregen, maar niet alles.",
  "salidas": "<ul><li><strong>Wat het zegt</strong>: beide uitersten leiden tot ongelukkigheid. En, via de contrapositie, dat de enigen die niet ongelukkig kunnen zijn in het midden zitten: het lijkt een lofzang op de middenweg, hoewel de zin niet zegt dat degenen in het midden gelukkig zijn, alleen dat niemand buiten het midden dat is.</li><li><strong>Valstrik van de taal</strong>: «ze krijgen niets» bevat twee negatieve woorden, maar die heffen elkaar niet op zoals <em>¬¬</em> in de logica. In het Spaans is «no… nada» één enkele negatie: het betekent «ze krijgen geen enkel ding», niet «ze krijgen iets». Daarom is <em>s</em> één letter, zonder negaties erin.</li><li><strong>Valstrik van het concept</strong>: wie niets wenst, krijgt «alles wat hij wenst» (hem ontbreekt niets van wat hij wil) en kan tegelijk niets krijgen. Hij is de enige die tegelijk in beide groepen zou kunnen zitten, en de zin zegt dat hij ook ongelukkig is. Dat is precies het tegenovergestelde van wat stoïcijnen, epicureeërs of boeddhisten dachten: dat rust wordt bereikt door verlangens te verminderen.</li><li><strong>Wat het niet vooronderstelt</strong>: dat er in elke groep iemand zit. In de moderne logica is «alle q zijn p» waar ook al is er geen enkele q (hetzelfde als te zien is in het tabblad Syllogismen met de traditionele lezing).</li><li><strong>Relatie met de vorige</strong>: de eerste zin veronderstelde dat sommigen van degenen die alles krijgen ongelukkig zijn; deze zegt dat ze dat allemaal zijn, dus zegt hij meer. Die van «amper» vergeleek gradaties van ongelukkigheid; deze zegt alleen dat er ongelukkigheid is in beide uitersten, zonder die te meten.</li></ul>",
  "pensar": "Volgens deze zin, wie zou gelukkig kunnen zijn? Beschrijf die persoon. En wat zou Epicurus zeggen tegen iemand die de zin verdedigt?",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 172,
     "cy": 122,
     "r": 108,
     "cls": "lg-e2",
     "etq": "Ongelukkigen (p)",
     "ex": 172,
     "ey": 42
    },
    {
     "cx": 132,
     "cy": 132,
     "r": 50,
     "cls": "lg-e1",
     "etq": "Alles (q)",
     "ex": 120,
     "ey": 132
    },
    {
     "cx": 212,
     "cy": 132,
     "r": 50,
     "cls": "lg-e4",
     "etq": "Niets (s)",
     "ex": 226,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [
    [
     172,
     132
    ]
   ],
   "lectura": "<ul><li>De grote cirkel zijn de <strong>ongelukkigen (p)</strong>. De cirkels van degenen die <strong>alles (q)</strong> krijgen en van degenen die <strong>niets (s)</strong> krijgen liggen erbinnen: het zijn de twee universeel affirmatieve uitspraken, «alle q zijn p» en «alle s zijn p».</li><li>q en s raken elkaar bijna niet: je kunt niet tegelijk alles en niets krijgen, behalve in één geval. De <strong>?</strong> van de kruising is dat geval, wie niets wenst. De zin zegt niet of er zo iemand is; als die er is, rekent hij hem tot de ongelukkigen.</li><li>Er is geen enkel ✕: de zin vooronderstelt niet dat er in welke groep dan ook iemand bestaat. Hij zegt alleen waar die zou zijn als die bestond.</li><li>Buiten de grote cirkel blijven degenen die niet ongelukkig zijn, en daar is noch q noch s: het is de contrapositie. Als iemand niet ongelukkig is, bevindt hij zich buiten beide uitersten.</li></ul>",
   "contTitulo": "Contingent: drie onware rijen, drie lege zones",
   "contingencia": "<p>De waarheidstabel van <em>(q ∨ s) → p</em> heeft acht rijen en de zin is in <strong>drie</strong> rijen onwaar: die van iemand die niet ongelukkig is en zich in een van de uitersten bevindt. Hij is <strong>contingent</strong>. Net als eerder is elke rij een zone van het diagram.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>s</th><th>(q ∨ s) → p</th><th>Wie is het</th><th>In het diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td>Ongelukkige die alles krijgt wat hij wenst en niets krijgt (wenst niets)</td><td>De kruising van q en s, met ?: het is niet bekend of er iemand is.</td></tr><tr><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td>Ongelukkige die alles krijgt</td><td>De cirkel q.</td></tr><tr><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td>Ongelukkige die niets krijgt</td><td>De cirkel s.</td></tr><tr><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td>Ongelukkige die iets krijgt, maar niet alles</td><td>De rest van p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td>Is niet ongelukkig, krijgt alles wat hij wenst en krijgt niets: de wijze die niets wenst</td><td><strong>Staat er niet</strong>: q en s liggen binnen p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td>Is niet ongelukkig en krijgt alles</td><td><strong>Staat er niet</strong>: q ligt binnen p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td class=\"lg-f\">O</td><td>Is niet ongelukkig en krijgt niets</td><td><strong>Staat er niet</strong>: s ligt binnen p.</td></tr><tr><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-f\">O</td><td class=\"lg-v\">W</td><td>Is niet ongelukkig en krijgt iets, maar niet alles</td><td>Buiten alle cirkels.</td></tr></tbody></table></div><ul><li><strong>Drie onware rijen = drie ontbrekende zones</strong>: alle delen van q en s die buiten p zouden vallen. Daarom worden ze erbinnen getekend.</li><li><strong>Zegt meer dan de eerste zin</strong>: die verbood één zone; deze verbiedt er drie. Hoe meer zones een zin verwijdert, hoe meer hij zich vastlegt en hoe gemakkelijker hij onwaar kan blijken: het volstaat iemand te vinden die alles krijgt en niet ongelukkig is.</li><li>Let op de rij van de wijze zonder verlangens: de zin verklaart die onmogelijk. Wie gelooft dat zo iemand bestaat, heeft een tegenvoorbeeld, en één is genoeg om een universele uitspraak te weerleggen.</li></ul>"
  }
 },
 {
  "id": "monica",
  "grupo": "agustin",
  "nivel": 3,
  "titulo": "Monica: “Als hij goede dingen wenst en ze heeft, is hij gelukkig”",
  "origen": "Monica, moeder van Augustinus, in <em>Het gelukkige leven</em> (II, 10). Augustinus antwoordt haar dat zij «de burcht zelf van de filosofie» heeft bereikt.",
  "enunciado": "“Als hij goede dingen wenst en ze heeft, is hij gelukkig; maar als hij slechte dingen wenst, is hij ongelukkig, ook al heeft hij ze.”",
  "problema": "Augustinus heeft net gevraagd of iedereen die heeft wat hij wil gelukkig is, en dit is Monica's antwoord. Met <em>p</em> = «is gelukkig», <em>q</em> = «wenst het goede» en <em>r</em> = «heeft wat hij wenst» (en door «het slechte wensen» te vereenvoudigen tot «het goede niet wensen»), wordt dit <em>((q ∧ r) → p) ∧ ((¬q ∧ r) → ¬p)</em>. Beide delen beginnen met <em>r</em>: Monica spreekt alleen over degenen die al hebben wat ze wensen, en over hen zegt ze dat gelukkig zijn en het goede wensen samengaan. Dat wil zeggen: als <em>r</em>, dan <em>p ↔ q</em>.",
  "salidas": "<ul><li><strong>Voldoende, niet noodzakelijk</strong>: Mónica zegt «als…, is hij gelukkig»; Agustín, op de volgende kaart, «alleen wie…». Het zijn pijlen in tegengestelde richtingen. Mónica wijst een weg die naar geluk leidt; Agustín een deur zonder welke je niet binnenkomt. Ze spreken elkaar niet tegen.</li><li><strong>Wat het niet zegt</strong>: niets over wie niet heeft wat ze verlangen. Dat was eerder in de dialoog al afgesproken: wie niet heeft wat hij wil, is niet gelukkig.</li><li><strong>De echo van Cicero</strong>: Agustín herinnert eraan dat de <em>Hortensius</em> van Cicero hetzelfde zegt: het is niet zo erg om niet te krijgen wat je wilt als om te willen krijgen wat niet goed voor je is. Het is een antwoord op de eerste zin van de oefening: het ergste treft niet wie niet krijgt, maar wie verkeerd verlangt.</li><li><strong>Waarom «dat wil zeggen» goed gezegd is</strong>: elke voorwaardelijke zin kan als een «of» worden geschreven (<em>X → Y</em> is hetzelfde als <em>¬X ∨ Y</em>). Zo wordt <em>(q ∧ r) → p</em> gelijk aan <em>¬q ∨ ¬r ∨ p</em>, en <em>(¬q ∧ r) → ¬p</em> gelijk aan <em>q ∨ ¬r ∨ ¬p</em>. De twee delen delen <em>¬r</em>, dat buiten haakjes wordt gehaald: <em>[(¬q ∨ p) ∧ (q ∨ ¬p)] ∨ ¬r</em>. Wat binnen de haken staat zijn <em>q → p</em> en <em>p → q</em>, dus <em>p ↔ q</em>. Over blijft <em>(p ↔ q) ∨ ¬r</em>, wat hetzelfde is als <em>r → (p ↔ q)</em>. Je kunt het controleren in het tabblad met waarheidstabellen: typ beide formules en ze blijken gelijk, onwaar in dezelfde twee rijen.</li><li><strong>Wat verloren gaat bij vereenvoudigen</strong>: we hebben «het kwade verlangen» gelezen als «het goede niet verlangen», en dat is niet hetzelfde: je kunt beide tegelijk verlangen, of geen van beide. Letterlijk heeft de zin vijf letters: <em>p</em> = «is gelukkig», <em>q</em> = «verlangt goede dingen», <em>r</em> = «heeft goede dingen», <em>s</em> = «verlangt kwade dingen» en <em>t</em> = «heeft kwade dingen». Dat geeft <em>((q ∧ r) → p) ∧ ((s ∧ t) → ¬p)</em>. Er zijn 32 rijen, maar vier gevallen volstaan, want een voorwaardelijke zin met een onwaar antecedent eist niets:<div class=\"tablewrap\"><table class=\"lg-tabla\"><thead><tr><th>Verlangt het goede en heeft het</th><th>Verlangt het kwade en heeft het</th><th>Wat de zin eist</th><th>Rijen</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>dat hij gelukkig is</td><td>6</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>dat hij ongelukkig is, «ook al heeft hij het»</td><td>6</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>niets: de zin zwijgt</td><td>18</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>dat hij tegelijk gelukkig en ongelukkig is: onmogelijk</td><td>2</td></tr></tbody></table></div>De zin is waar in 24 rijen en onwaar in 8. Het geval van de laatste rij komt met drie letters niet voor: wie het goede <em>en</em> het kwade verlangt en alles krijgt. Als hij bovendien gelukkig is, keurt de lezing met drie letters het goed; die met vijf niet: de tweede helft van de zin zegt dat hij ongelukkig is. <strong>Formaliseren is niet zomaar vertalen, maar beslissen wat bewaard blijft en wat verloren gaat.</strong></li><li><strong>Een derde lezing</strong>: «als hij alles heeft wat hij verlangt, is hij precies gelukkig wanneer hij <em>alleen</em> het goede verlangt». Met dezelfde vijf letters, <em>((q → r) ∧ (s → t)) → (p ↔ (q ∧ ¬s))</em>. Dat is de strengste: één kwade wens volstaat voor ongeluk, en de onverzadigbare die alles krijgt laat de zin niet langer zonder uitweg, want hij is niet gelukkig. Drie lezingen, drie oordelen over dezelfde persoon. Je kunt ermee oefenen in het tabblad «Formaliseren».</li></ul>",
  "pensar": "Mónica zegt niet welke dingen goed zijn. Een paar regels verder voegt Agustín een voorwaarde toe: welke? (Kijk naar de volgende kaart.) En er is iemand over wie de zin niets samenhangends kan zeggen: wie tegelijk goede en kwade dingen verlangt, en alles krijgt. Zou hij volgens Mónica gelukkig zijn? En volgens Agustín, voor wie er geen middenweg bestaat tussen gelukkig en ongelukkig (II, 11)?",
  "euler": {
   "vista": "0 0 345 268",
   "circulos": [
    {
     "cx": 172,
     "cy": 144,
     "r": 118,
     "cls": "lg-e2"
    },
    {
     "cx": 172,
     "cy": 144,
     "r": 80,
     "cls": "lg-e3"
    },
    {
     "cx": 172,
     "cy": 16,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Ze hebben wat ze verlangen (r)",
     "ex": 172,
     "ey": 16
    },
    {
     "cx": 172,
     "cy": 122,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Ze verlangen het goede (q)",
     "ex": 172,
     "ey": 140
    },
    {
     "cx": 172,
     "cy": 140,
     "r": 0,
     "cls": "lg-e2",
     "etq": "= gelukkigen (p)",
     "ex": 172,
     "ey": 158
    },
    {
     "cx": 172,
     "cy": 206,
     "r": 0,
     "cls": "lg-e2",
     "etq": "ongelukkigen (¬p)",
     "ex": 172,
     "ey": 240
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>De grote cirkel is niet zomaar een groep: het is het <strong>kader</strong>. Mónica spreekt alleen over wie <strong>heeft wat hij verlangt (r)</strong>; over de rest zegt de zin niets.</li><li>Binnen het kader is de cirkel van wie <strong>het goede verlangt (q)</strong> ook die van de <strong>gelukkigen (p)</strong>: onder wie heeft wat hij verlangt, gaan gelukkig zijn en het goede verlangen samen.</li><li>De ring eromheen zijn degenen die hebben wat ze verlangen, maar het kwade verlangen: <strong>ongelukkigen</strong>, «ook al hebben ze het».</li></ul>",
   "contTitulo": "Contingent: twee onware rijen",
   "contingencia": "<p>De tabel heeft acht rijen en de zin van Mónica is slechts in <strong>twee</strong> onwaar: die van wie het goede heeft dat hij verlangt en niet gelukkig is, en die van wie het kwade heeft dat hij verlangt en gelukkig is. De vier rijen waarin <em>r</em> onwaar is, zijn allemaal waar: de zin zegt niets over wie niet heeft wat hij verlangt, en wat niet gezegd wordt, kan hem niet onwaar maken.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>Mónica</th><th>Wie is het</th><th>In het diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Gelukkige die het goede verlangt en heeft</td><td>De cirkel q = p.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Gelukkige die het goede verlangt en niet heeft</td><td>Buiten het kader: de zin zegt niets.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Gelukkige die het kwade verlangt en heeft</td><td><strong>Staat er niet</strong>: binnen het kader is het kwade verlangen in de ring van de ongelukkigen.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Gelukkige die het kwade verlangt en niet heeft</td><td>Buiten het kader: de zin zegt niets.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Verlangt het goede, heeft het en is niet gelukkig</td><td><strong>Staat er niet</strong>: binnen het kader is wie het goede verlangt gelukkig.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Verlangt het goede, heeft het niet en is niet gelukkig</td><td>Buiten het kader.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Verlangt het kwade, heeft het en is niet gelukkig</td><td>De ring van de ongelukkigen.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Verlangt het kwade, heeft het niet en is niet gelukkig</td><td>Buiten het kader.</td></tr></tbody></table></div>"
  }
 },
 {
  "id": "agustin",
  "grupo": "agustin",
  "nivel": 3,
  "titulo": "Agustín: «Alleen wie verlangt wat hij niet kan verliezen…»",
  "origen": "Parafrase van Augustinus van Hippo, <em>Het gelukkige leven</em> (386), hoofdstuk II: wie gelukkig wil zijn, moet zich datgene verschaffen wat altijd blijft en geen enkel lot hem kan afnemen.",
  "enunciado": "«Alleen wie verlangt wat hij niet kan verliezen, kan het geluk bereiken.»",
  "problema": "Twee letters: <em>p</em> = «bereikt het geluk» en <em>q</em> = «verlangt wat hij niet kan verliezen». «Alleen wie q, p» stelt een <strong>noodzakelijke voorwaarde</strong>: zonder q is er geen p. Dat wil zeggen, <em>p → q</em>: als iemand het geluk bereikt, verlangt hij wat hij niet kan verliezen. (Het «kan bereiken» lezen we als «bereikt», om het niet ingewikkeld te maken.) De contrapositie zegt hetzelfde: <em>¬q → ¬p</em>, wie verlangt wat hij kan verliezen bereikt het geluk niet.",
  "salidas": "<ul><li><strong>Valstrik: «alleen» is niet «iedereen»</strong>. De zin zegt niet dat wie verlangt wat hij niet kan verliezen gelukkig is (<em>q → p</em>). Van de ene naar de andere overgaan is de drogreden van het bevestigen van de consequens: je kunt het uitproberen in het tabblad met tabellen, in het voorbeeld «Consequens bevestigen».</li><li><strong>Het argument van Agustín</strong>: wie houdt van wat hij kan verliezen, leeft met angst om het te verliezen, en met angst is men niet gelukkig. Het enige dat niet verloren kan worden, is voor hem God.</li><li><strong>Verband met de vorige</strong>: niet langer telt hoeveel men verlangt of hoeveel men krijgt, maar <em>wat</em> men verlangt, en in het bijzonder of het verloren kan worden. Het is een idee dat dicht bij dat van de stoïcijnen ligt: het verlangen richten op wat niet van het lot afhangt.</li></ul>",
  "pensar": "Voor Agustín is het enige dat niet verloren kan worden God. Kun je iets anders bedenken dat niet verloren kan worden? Zou het voor de zin gelden?",
  "euler": {
   "vista": "0 0 345 215",
   "circulos": [
    {
     "cx": 172,
     "cy": 120,
     "r": 90,
     "cls": "lg-e1",
     "etq": "Ze verlangen wat ze niet kunnen verliezen (q)",
     "ex": 172,
     "ey": 20
    },
    {
     "cx": 150,
     "cy": 132,
     "r": 46,
     "cls": "lg-e3",
     "etq": "Gelukkigen (p)",
     "ex": 150,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>De cirkel van de <strong>gelukkigen (p)</strong> ligt binnen die van wie <strong>verlangt wat hij niet kan verliezen (q)</strong>: het is een universeel bevestigende uitspraak, «elke gelukkige verlangt wat hij niet kan verliezen».</li><li>Binnen q blijft ruimte buiten p: er kunnen mensen zijn die verlangen wat ze niet kunnen verliezen en niet gelukkig zijn. Die lege ruimte is het «alleen» van de zin.</li></ul>",
   "contTitulo": "Contingent: één onware rij, één lege zone",
   "contingencia": "<p>De tabel van <em>p → q</em> heeft vier rijen en de zin is slechts in één onwaar: hij is <strong>contingent</strong>. Die rij is de zone die in de tekening ontbreekt.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas lg-z2\"><thead><tr><th>p</th><th>q</th><th>p → q</th><th>Wie is het</th><th>In het diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Gelukkige die verlangt wat hij niet kan verliezen</td><td>p, binnen q.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Gelukkige die verlangt wat hij kan verliezen</td><td><strong>Staat er niet</strong>: p ligt binnen q.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Verlangt wat hij niet kan verliezen en is niet gelukkig</td><td>Het deel van q buiten p: «alleen» is niet «iedereen».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Noch gelukkig, noch verlangt hij wat hij niet kan verliezen</td><td>Buiten beide cirkels.</td></tr></tbody></table></div><p>De derde rij is die van de valstrik: hij is waar, en in de tekening is het het deel van q dat buiten p blijft. Als de zin zei «iedereen die verlangt wat hij niet kan verliezen is gelukkig», zou die zone ontbreken in plaats van de tweede.</p>"
  }
 },
 {
  "id": "agustin2",
  "grupo": "agustin",
  "nivel": 3,
  "titulo": "Agustín, variant: «…dat het doel is dat we allemaal noodzakelijkerwijs zoeken»",
  "origen": "Variant van de vorige zin. Het tweede deel is ook van Agustín: in <em>Het gelukkige leven</em> (II) neemt hij als vanzelfsprekend aan dat we allemaal gelukkig willen zijn.",
  "enunciado": "«Alleen wie verlangt en verkrijgt wat hij niet kan verliezen, kan het geluk bereiken, dat het doel is dat we allemaal noodzakelijkerwijs zoeken.»",
  "problema": "Nu zijn er <strong>twee beweringen</strong>. De eerste is die van daarnet met nog een voorwaarde: met <em>p</em> = «bereikt het geluk», <em>q</em> = «verlangt wat hij niet kan verliezen» en <em>r</em> = «verkrijgt wat hij niet kan verliezen», wordt het <em>p → (q ∧ r)</em>. Het is niet langer genoeg om het te verlangen: je moet het ook verkrijgen. De tweede wordt toegevoegd door de betrekkelijke bijzin: «het geluk is het doel dat we allemaal noodzakelijkerwijs zoeken». Omdat die tussen komma's staat, is hij <strong>uitbreidend</strong>: hij beperkt niet over welk geluk het gaat, maar zegt er iets extra's over. Zonder komma's («het geluk dat we allemaal zoeken») zou hij specificerend zijn en niets nieuws beweren.",
  "salidas": "<ul><li><strong>Wat volgt uit het samenvoegen van beide</strong>: iedereen zoekt het geluk, maar alleen wie verlangt <em>en</em> verkrijgt wat hij niet kan verliezen bereikt het. Wie het niet verkrijgt, zoekt onvermijdelijk iets wat hij niet kan bereiken. Wat eerst een voorwaarde was, wordt een drama.</li><li><strong>«Noodzakelijkerwijs» is niet «tautologisch»</strong>: «we zoeken allemaal het geluk» is niet waar door zijn vorm (de tabel maakt het niet waar in alle rijen), maar volgens Agustín door hoe we zijn. Die noodzaak komt uit de menselijke natuur, niet uit de logica, en om haar uit te drukken is een modale logica nodig.</li><li><strong>Is wie niet gelukkig is ongelukkig?</strong> In gewoon Nederlands niet noodzakelijk: «gelukkig» en «ongelukkig» zijn tegengesteld, en er kan iets tussenin liggen. Agustín daarentegen laat geen middenweg: in <em>Het gelukkige leven</em> (II, 11 en IV, 28) neemt hij als afgesproken aan dat iedereen die niet gelukkig is ongelukkig is, zoals iedereen die niet dood is leeft. Als we dat accepteren, zijn «niet gelukkig» (<em>¬p</em>) en «ongelukkig» hetzelfde, en wordt de zin strenger: wie niet verlangt en verkrijgt wat hij niet kan verliezen, blijft niet in niemandsland, maar is ongelukkig. En met «we zoeken allemaal het geluk» kan niemand erbuiten blijven: of men bereikt het, of men is ongelukkig.</li><li><strong>De gebruikelijke valstrik</strong>: «alleen» blijft niet «iedereen». Wie verlangt en verkrijgt wat hij niet kan verliezen, heeft door deze zin geen garantie op geluk.</li><li><strong>De drie zinnen samen</strong>: van Mónica naar Agustín verandert de voorwaarde van richting en sluit zich daarna.<div class=\"tablewrap\"><table class=\"lg-tabla\"><thead><tr><th>Zin</th><th>Vorm</th><th>Welke voorwaarde stelt hij</th></tr></thead><tbody><tr><td>Mónica (II, 10)</td><td>r → (p ↔ q)</td><td>voldoende, alleen voor wie heeft wat hij verlangt</td></tr><tr><td>Agustín: «alleen wie…»</td><td>p → q</td><td>noodzakelijk</td></tr><tr><td>Agustín volledig (II, 11)</td><td>p ↔ (q ∧ r)</td><td>noodzakelijk en voldoende</td></tr></tbody></table></div>De letters betekenen niet hetzelfde in de drie kaarten: kijk naar het woordenboek van elk.</li></ul>",
  "pensar": "Haal de komma's weg: «Alleen wie verlangt en verkrijgt wat hij niet kan verliezen, kan het geluk bereiken dat we allemaal zoeken». Welke bewering verdwijnt er?",
  "euler": {
   "titulo": "Letterlijke lezing: «alleen» (p → q ∧ r)",
   "vista": "0 0 345 318",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Ze verlangen het (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "Ze verkrijgen het (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 120,
     "r": 48,
     "cls": "lg-e3",
     "etq": "Gelukkigen (p)",
     "ex": 172,
     "ey": 120
    },
    {
     "cx": 172,
     "cy": 245,
     "r": 64,
     "cls": "lg-e4",
     "etq": "Ongelukkigen (¬p)",
     "ex": 172,
     "ey": 258
    }
   ],
   "cruces": [],
   "dudas": [
    [
     62,
     110
    ],
    [
     283,
     110
    ]
   ],
   "lectura": "<ul><li><strong>q</strong> zijn degenen die verlangen wat niet verloren kan worden en <strong>r</strong>, degenen die het verkrijgen. Ze kruisen elkaar: je kunt verlangen zonder te verkrijgen en misschien verkrijgen zonder het verlangd te hebben.</li><li>De cirkel van de <strong>gelukkigen (p)</strong> ligt binnen het kruispunt: om gelukkig te zijn moet je tegelijk in q en in r zitten.</li><li>«We zoeken allemaal het geluk» heeft geen cirkel nodig: het zou over iedereen gaan, dus het hele kader van de tekening zijn. Een universele uitspraak die niemand buitenlaat, scheidt geen zones.</li><li>Onderin de cirkel van de <strong>ongelukkigen (¬p)</strong>. Hij raakt die van de gelukkigen niet, want niemand is beide tegelijk. Hij kruist q en r, zelfs hun kruispunt: je kunt verlangen en verkrijgen wat niet verloren kan worden en niet gelukkig zijn («alleen» is niet «iedereen»). En hij steekt buiten beide uit, want wie het niet verlangt en niet verkrijgt is niet gelukkig.</li><li>De <strong>?</strong> markeren wat in geen van beide cirkels valt: degenen die noch gelukkig noch ongelukkig zouden zijn (en hetzelfde geldt voor wat buiten alle cirkels blijft). Als er, zoals bij Agustín, geen middenweg is, is er daar niemand. Als die er wel is, is dat hun plek.</li></ul>",
   "contTitulo": "Contingent: drie onware rijen, drie lege zones",
   "contingencia": "<p>De tabel van <em>p → (q ∧ r)</em> heeft acht rijen en de zin is in <strong>drie</strong> onwaar, één meer dan de vorige versie als we die met dezelfde letters schrijven: die van de gelukkige die het verlangt maar niet verkrijgt. Dat is wat «en verkrijgt» toevoegt.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>p → (q ∧ r)</th><th>Wie is het</th><th>In het diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Gelukkige die het verlangt en verkrijgt</td><td>p, in het kruispunt van q en r.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Gelukkige die het verlangt, maar niet verkrijgt</td><td><strong>Staat er niet</strong>: p ligt binnen r.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Gelukkige die het verkrijgt zonder het te verlangen</td><td><strong>Staat er niet</strong>: p ligt binnen q.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Gelukkige die het noch verlangt noch verkrijgt</td><td><strong>Staat er niet</strong>: p ligt binnen q en r.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Verlangt het en verkrijgt het, en is niet gelukkig</td><td>Het kruispunt van q en r buiten p: «alleen» is niet «iedereen».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Verlangt het en verkrijgt het niet</td><td>q buiten r.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Verkrijgt het zonder het te verlangen</td><td>r buiten q.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Verlangt het niet en verkrijgt het niet</td><td>Buiten de cirkels.</td></tr></tbody></table></div><p>De tweede bewering, «we zoeken allemaal het geluk», verandert de tabel niet: ze gaat niet over <em>p</em>, <em>q</em> of <em>r</em>, maar over zoeken, en geldt voor alle rijen evenzeer.</p>"
  },
  "euler2": {
   "titulo": "Agustín volledig: «wie God heeft is gelukkig» (p ↔ q ∧ r)",
   "vista": "0 0 345 258",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Ze verlangen het (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "Ze verkrijgen het (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 129,
     "r": 0,
     "cls": "lg-e3",
     "etq": "Gelukkigen (p)",
     "ex": 172,
     "ey": 129
    },
    {
     "cx": 172,
     "cy": 246,
     "r": 0,
     "cls": "lg-e4",
     "etq": "Ongelukkigen (¬p): al het overige",
     "ex": 172,
     "ey": 246
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>Een paar regels verder, in <em>Het gelukkige leven</em> (II, 11), concludeert Agustín: «Deum igitur qui habet, beatus est», dat wil zeggen, wie God heeft, die niet verloren kan worden, is gelukkig. Wie heeft wat niet verloren kan worden, vreest het niet te verliezen en mist niets wat hij wil: hij heeft geen reden om ongelukkig te zijn. Daarmee is de voorwaarde ook voldoende, en wordt de zin <em>p ↔ (q ∧ r)</em>.</li><li>Nu is het kruispunt van q en r <strong>de</strong> cirkel van de gelukkigen: die hoeft niet apart getekend te worden. De zone van de eerste tekening die wringt (verlangt het, verkrijgt het en is ongelukkig) blijft leeg.</li><li>Omdat er geen middenweg is, zijn al het overige (q zonder r, r zonder q en wat erbuiten blijft) de <strong>ongelukkigen</strong>. Euler kan ze niet als een cirkel tekenen: ze zijn de rest van de tekening. Wanneer twee klassen alles verdelen en een ervan een kruispunt is, kan de andere alleen de achtergrond zijn.</li><li>De tabel van <em>p ↔ (q ∧ r)</em> heeft vier onware rijen: de drie van de letterlijke lezing en die van wie het verlangt, verkrijgt en niet gelukkig is. Die vierde rij is de zone die leegloopt. De volledige zin sluit meer uit en zegt daardoor meer.</li></ul>"
  }
 },
 {
  "id": "contrafactico",
  "grupo": "ejercicios",
  "nivel": 3,
  "titulo": "«…zouden gelukkig zijn als ze niet konden ophouden het te verlangen»",
  "origen": "Zin voorgesteld als oefening in de klas, in dialoog met Mónica en Agustín.",
  "enunciado": "«Degenen die iets verkrijgen wat ze verlangen en wat ze niet kunnen verliezen, zouden gelukkig zijn als ze niet konden ophouden het te verlangen.»",
  "problema": "Drie letters: <em>p</em> = «is gelukkig», <em>q</em> = «verkrijgt iets wat hij verlangt en niet kan verliezen» en <em>r</em> = «kan niet ophouden het te verlangen». Gelezen met de pijl van de tabellen is de zin <em>(q ∧ r) → p</em>: als iemand het verkrijgt en niet kan ophouden het te verlangen, is hij gelukkig. Maar de zin staat niet in de aantonende wijs («zijn gelukkig als…»), maar in de <strong>aanvoegende wijs</strong> («zouden gelukkig zijn als ze niet konden…»): het is een <strong>contrafactische voorwaardelijke zin</strong>. Hij spreekt over wat zou gebeuren als de dingen anders waren dan ze zijn, en suggereert dat ze dat in feite niet zijn: dat ze wel kunnen ophouden het te verlangen (<em>¬r</em>) en dat ze dan niet gelukkig zijn (<em>¬p</em>).",
  "salidas": "<ul><li><strong>Wat het suggereert</strong>: dat zelfs wie iets heeft wat hij verlangt en niet kan verliezen, kan ophouden het te verlangen, en dan niet gelukkig is. Het zegt het niet: de aanvoegende wijs suggereert het.</li><li><strong>Een barst in het argument van Agustín</strong>: voor hem is gelukkig wie heeft wat hij wil (<em>Het gelukkige leven</em>, II, 10-11), en daarom is het genoeg om te hebben wat niet verloren kan worden. De zin wijst erop dat er twee dingen verloren kunnen gaan: het object en het verlangen. Wat niet verloren kan worden blijft er, maar als ik ophoud het te willen, heb ik niet langer «wat ik wil».</li><li><strong>Hoe de variant het dicht</strong>: «het doel dat we allemaal <em>noodzakelijkerwijs</em> zoeken». Als wat niet verloren kan worden ook is wat we niet kunnen ophouden te verlangen, is <em>r</em> altijd waar en is de contrafactische zin overbodig: de zin zegt hetzelfde als Agustín. Dat «noodzakelijkerwijs» is precies het stuk dat deze zin mist.</li><li><strong>Tegenover Mónica</strong>: zij zei dat vergankelijke dingen niet verzadigen («talibus satiari non poterit», II, 11). Deze zin gaat verder: zelfs wat niet verloren kan worden is niet genoeg, als het verlangen kan doven.</li><li><strong>Dicht bij Schopenhauer</strong>: het vervulde verlangen slijt en maakt plaats voor verveling, zoals in de slinger van de eerste zin.</li></ul>",
  "pensar": "Kun je ophouden met verlangen naar iets dat je niet kunt verliezen? Zoek een voorbeeld. En kun je ophouden met verlangen naar het geluk zelf?",
  "euler": {
   "vista": "0 0 345 250",
   "circulos": [
    {
     "cx": 172,
     "cy": 130,
     "r": 110,
     "cls": "lg-e2",
     "etq": "Ze krijgen iets dat ze verlangen en niet kunnen verliezen (q)",
     "ex": 172,
     "ey": 12
    },
    {
     "cx": 150,
     "cy": 135,
     "r": 70,
     "cls": "lg-e3",
     "etq": "Gelukkigen (p)",
     "ex": 150,
     "ey": 96
    },
    {
     "cx": 150,
     "cy": 150,
     "r": 34,
     "cls": "lg-vacia",
     "etq": "r: leeg",
     "ex": 150,
     "ey": 155
    }
   ],
   "cruces": [
    [
     250,
     140
    ]
   ],
   "dudas": [],
   "lectura": "<ul><li>De grote cirkel is het <strong>kader</strong>: de zin spreekt alleen over degenen die iets krijgen dat ze verlangen en dat ze niet kunnen verliezen (q), dat wil zeggen, over degenen die al aan de voorwaarde van Augustinus voldoen.</li><li>Binnenin gaat de cirkel van degenen die <strong>er niet mee kunnen ophouden het te verlangen (r)</strong> binnen die van de <strong>gelukkigen (p)</strong>: dat is wat de pijl zegt, <em>(q ∧ r) → p</em>.</li><li>Maar r staat in <strong>grijs</strong>: de aanvoegende wijs geeft te verstaan dat hij leeg is, omdat iedereen kan ophouden met iets te verlangen. En de ✕ markeert waar de echte mensen zich bevinden volgens de zin: in het kader, buiten de gelukkigen.</li><li>Daar zit het probleem: als r leeg is, maakt het niet uit waar we hem tekenen. Binnen p of buiten, de tekening zou aan de zin voldoen. Een voorwaardelijke uitspraak met een leeg antecedent zegt niets over de echte wereld.</li></ul>",
   "contTitulo": "Contingent met de pijl, maar leeg als contrafeitelijke uitspraak",
   "contingencia": "<p>Met de pijl uit de tabellen heeft <em>(q ∧ r) → p</em> acht rijen en slechts één onware: het is <strong>contingent</strong>. De in het groen gemarkeerde rij is degene die de aanvoegende wijs als werkelijk beschouwt.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(q ∧ r) → p</th><th>Wie is het</th><th>In het diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Gelukkig, krijgt het en kan er niet mee ophouden het te verlangen</td><td>r, binnen p.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Gelukkig, krijgt het en kan ermee ophouden het te verlangen</td><td>p buiten r.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Gelukkig die niets krijgt dat niet verloren kan gaan en er niet mee kan ophouden het te verlangen</td><td>Buiten het kader: de zin zegt niets.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Gelukkig die niets krijgt dat niet verloren kan gaan en ermee kan ophouden het te verlangen</td><td>Buiten het kader.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Krijgt het, kan er niet mee ophouden het te verlangen en is niet gelukkig</td><td><strong>Bestaat niet</strong>: r bevindt zich binnen p. Dit is de enige onware rij.</td></tr><tr class=\"lg-ok\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Krijgt het, kan ermee ophouden het te verlangen en is niet gelukkig</td><td>Het kader buiten p, met ✕: het werkelijke geval dat de aanvoegende wijs suggereert.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Krijgt het niet, kan er niet mee ophouden het te verlangen en is niet gelukkig</td><td>Buiten het kader.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Krijgt het niet, kan ermee ophouden het te verlangen en is niet gelukkig</td><td>Buiten het kader.</td></tr></tbody></table></div><ul><li><strong>De valkuil van de contrafeitelijke uitspraak.</strong> In de rij van het werkelijke geval is <em>r</em> onwaar, en met <em>r</em> onwaar is de pijl waar, wat er ook met <em>p</em> gebeurt. Zo zou met de tabel “als ze er niet mee zouden kunnen ophouden het te verlangen, zouden ze gelukkig zijn” even waar zijn als “als ze er niet mee zouden kunnen ophouden het te verlangen, zouden ze nog ongelukkiger zijn”. De tabel maakt geen onderscheid tussen beide.</li><li>Daarom hebben contrafeitelijke uitspraken een ander instrument nodig. Het bekendste is dat van de mogelijke werelden (Robert Stalnaker, David Lewis): de zin is waar als ze in de wereld die het meest op de onze lijkt en waarin ze er niet mee zouden kunnen ophouden het te verlangen, gelukkig zouden zijn. Het is niet langer voldoende om naar de waarheidswaarden te kijken: men moet zich voorstellen hoe de dingen zouden zijn.</li></ul>"
  }
 },
 {
  "id": "curry",
  "grupo": "autorref",
  "nivel": 4,
  "titulo": "De paradox van Curry: “Als deze zin waar is, is de maan van kaas”",
  "origen": "Haskell B. Curry, “The Inconsistency of Certain Formal Logics”, <em>Journal of Symbolic Logic</em> 7 (1942).",
  "enunciado": "Noem C de zin “Als C waar is, is de maan van kaas”. Veronderstel dat C waar is. Dan volgt uit wat C zegt: als C waar is, is de maan van kaas; en omdat C waar is, volgt via modus ponens dat de maan van kaas is. Dus, als we C aannemen, komen we tot de conclusie dat de maan van kaas is: via conditioneel bewijs, “als C, dan is de maan van kaas”, wat precies is wat C zegt. Dus C is waar, en opnieuw via modus ponens is de maan van kaas.",
  "problema": "Elke stap is een regel van de natuurlijke deductie van niveau 4 (aanname, modus ponens, conditioneel bewijs). Er is geen ontkenning nodig, zoals bij de leugenaar, en de conclusie kan van alles zijn. Als zin C legitiem is, kan men bewijzen wat men maar wil.",
  "salidas": "<ul><li>Verbieden dat een zin op deze manier over zichzelf spreekt, zoals in de leugenaarsparadox (Tarski: de taal en de metataal).</li><li>De contractie verwerpen: sommige logica's accepteren niet dat dezelfde aanname twee keer wordt gebruikt (in de afleiding wordt de aanname C één keer gebruikt als premisse van de modus ponens en nog eens om af te leiden wat C zegt, “als C, dan is de maan van kaas”), en zo ontstaat de paradox niet.</li><li>De modus ponens voor die voorwaardelijke uitspraak verwerpen: er zijn logica's “zonder afsplitsing” waarin uit “als C, dan A” en uit C niet A kan worden afgesplitst.</li></ul><p>Wat niet als oplossing geldt: de materiële implicatie vervangen door een strengere. De paradox ontstaat met elke voorwaardelijke uitspraak die aan drie dingen voldoet: de identiteit (uit C volgt C), de modus ponens en de contractie.</p>",
  "pensar": "Doe het in de tabel “Natuurlijke deductie”: welke regel zou je voor elke stap gebruiken, en welke daarvan zou je aanpassen zodat de paradox niet ontstaat?"
 },
 {
  "id": "cuervos",
  "grupo": "razonar",
  "nivel": 6,
  "titulo": "De raven van Hempel: bevestigt een groene appel dat raven zwart zijn?",
  "origen": "Carl G. Hempel, “Studies in the Logic of Confirmation”, <em>Mind</em> 54 (1945). Het kwantitatieve antwoord: Janina Hosiasson-Lindenbaum, “On Confirmation”, <em>Journal of Symbolic Logic</em> 5 (1940), en J. L. Mackie, “The Paradox of Confirmation”, <em>British Journal for the Philosophy of Science</em> 13 (1963).",
  "enunciado": "Elke zwarte raaf die ik zie bevestigt een beetje “Alle raven zijn zwart”. Die zin is equivalent aan “Alles wat niet zwart is, is geen raaf” (contrapositie). En elk niet-zwart ding dat geen raaf is, zoals een groene appel, bevestigt deze tweede zin. Dus, zonder het huis te verlaten, bevestigt een groene appel dat alle raven zwart zijn.",
  "problema": "Beide stappen lijken correct: gevallen bevestigen generalisaties, en wat een zin bevestigt, bevestigt ook de zinnen die equivalent zijn. Maar de conclusie lijkt absurd.",
  "salidas": "<ul><li>Hempel accepteerde de conclusie: de appel bevestigt inderdaad. Voor hem is de vreemdheid psychologisch, niet logisch: het lijkt ons vreemd omdat we van tevoren al weten dat de appel geen raaf is, en die achtergrondkennis maakt geen deel uit van de gegevens.</li><li>Het bayesiaanse of kwantitatieve antwoord (Janina Hosiasson-Lindenbaum, 1940; J. L. Mackie, 1963): de appel bevestigt, maar heel weinig, en een zwarte raaf bevestigt veel meer, omdat er veel meer niet-zwarte dingen zijn dan raven. De mate van bevestiging hangt af van hoeveel dingen van elke klasse er zijn.</li><li>Anderen zeggen dat het probleem zit in het idee van “bevestigen door gevallen”, niet in de logica van de contrapositie, die onberispelijk is (die van de uitspraken, niveau 4; die van een universele uitspraak, niveau 6).</li></ul>",
  "pensar": "Kijk naar de tabel “Inductie en abductie”: waarom is een generalisatie met gevarieerde gevallen sterker dan met veel gelijke gevallen?"
 },
 {
  "id": "newcomb",
  "grupo": "razonar",
  "nivel": 7,
  "titulo": "De paradox van Newcomb: één doos of beide?",
  "origen": "Ze werd bedacht door de natuurkundige William Newcomb; ze werd gepubliceerd door Robert Nozick, “Newcomb's Problem and Two Principles of Choice” (1969).",
  "enunciado": "Er zijn twee dozen. De doorzichtige bevat 1.000 euro. De ondoorzichtige bevat een miljoen of niets. Je kunt alleen de ondoorzichtige meenemen of beide. Gisteren stopte een voorspeller die bijna nooit fout zit het miljoen alleen in de ondoorzichtige als hij voorspelde dat je alleen die zou meenemen. Wat doe je?",
  "problema": "Twee onberispelijke redeneringen botsen. Eén: degene die één doos meeneemt, gaat bijna altijd met een miljoen naar huis, en degene die twee dozen meeneemt, met duizend euro; dus één doos. Ander: het geld is er al of niet; wat je ook neemt, je verandert het niet, en met beide dozen heb je altijd duizend euro meer; dus beide.",
  "salidas": "<ul><li>De “causale” beslissingstheorie kiest twee dozen: wat je nu doet, veroorzaakt niet wat gisteren is gebeurd.</li><li>De “evidentiële” theorie kiest één doos: jouw keuze is het beste signaal van wat de voorspeller voorspelde.</li><li>Anderen betwijfelen of zo'n voorspeller mogelijk is zonder dat de keuze ophoudt vrij te zijn. Het debat blijft open.</li></ul>",
  "pensar": "Schrijf de twee redeneringen op als argumenten met genummerde premissen: welke premisse scheidt ze?"
 },
 {
  "id": "estoicos",
  "grupo": "historia",
  "nivel": 4,
  "titulo": "De stoïcijnse logica: de vijf onbewijsbare redeneringen van Chrysippus",
  "origen": "Chrysippus van Soli (ca. 280-206 v.Chr.), volgens Sextus Empiricus, <em>Tegen de wiskundigen</em> VIII 223-227, en Diogenes Laërtius, <em>Levens</em> VII 79-81. De discussie over de voorwaardelijke uitspraak, in Sextus Empiricus, <em>Tegen de wiskundigen</em> VIII 112-117; het criterium van Chrysippus, in Diogenes Laërtius, VII 73; de raven van Callimachus, in Sextus Empiricus, <em>Tegen de wiskundigen</em> I 309-310.",
  "enunciado": "Terwijl Aristoteles redeneerde met termen (“alle mensen zijn sterfelijk”), redeneerden de stoïcijnen met hele uitspraken, verbonden door “als”, “en” en “of”. Chrysippus legde aan de basis vijf vormen die geen bewijs nodig hebben, de “onbewijsbare”, en toonde aan dat de overige daartoe herleid kunnen worden. Zijn voorbeelden gaan over de dag en het licht: “Als het dag is, is er licht; het is dag; dus is er licht”.",
  "problema": "<ul><li>1e: als het eerste, dan het tweede; het eerste; dus het tweede. Dit is de <strong>modus ponens</strong>.</li><li>2e: als het eerste, dan het tweede; niet het tweede; dus niet het eerste. Dit is de <strong>modus tollens</strong>.</li><li>3e: niet (het eerste en het tweede); het eerste; dus niet het tweede. Dit is oefening 10 van de tabel “Natuurlijke deductie”.</li><li>4e: of het eerste of het tweede; het eerste; dus niet het tweede. Let op: dit geldt omdat de stoïcijnse “of” <strong>exclusief</strong> is; met de inclusieve “of” van vandaag is het de drogreden van het bevestigen van een disjunct.</li><li>5e: of het eerste of het tweede; niet het eerste; dus het tweede. Dit is het <strong>disjunctieve syllogisme</strong>.</li></ul>",
  "salidas": "<p>De stoïcijnen discussieerden ook over wanneer een voorwaardelijke uitspraak waar is, zozeer dat de dichter Callimachus grapte dat zelfs de raven op de daken erover krasten. Philo van Megara zei dat ze alleen onwaar is wanneer het antecedent waar is en het consequent onwaar: dat is de materiële implicatie uit de waarheidstabellen van niveau 3. Diodorus Cronus eiste meer: dat het nooit mogelijk is geweest of zal zijn dat het antecedent waar is en het consequent onwaar. Chrysippus eiste een verband: dat het contradictoire van het consequent, dat wil zeggen de ontkenning ervan (ἀντικείμενον, <em>antikeímenon</em>), in strijd is met het antecedent.</p><p>Wat er niet staat: de stoïcijnen gebruikten geen letters, maar “het eerste” en “het tweede”, en ze hadden geen waarheidstabellen; hun logica is bijna volledig verloren gegaan en werd in de 20e eeuw gereconstrueerd.</p>",
  "pensar": "Welke van de drie opvattingen over de voorwaardelijke uitspraak (Philo, Diodorus, Chrysippus) lijkt het meest op de “als” die we in het dagelijks taalgebruik gebruiken? Probeer het met “als de maan van kaas is, dan is 2 + 2 = 4”."
 },
 {
  "id": "medievales",
  "grupo": "historia",
  "nivel": 6,
  "titulo": "De middeleeuwse logica: suppositie, consequenties en verplichtingen",
  "origen": "Willem van Ockham, <em>Summa logicae</em> (ca. 1323), I 63-64 (de suppositie) en II 32-33 (het contradictoire van een conjunctie en van een disjunctie); Johannes Buridanus, <em>Verhandeling over de consequenties</em> (ca. 1335); Walter Burley, <em>De obligationibus</em> (ca. 1302).",
  "enunciado": "Op de middeleeuwse universiteiten was logica het centrum van de studie. De logici van de 13e en 14e eeuw, zonder symbolen en in het Latijn, kwamen tot ideeën die tegenwoordig met formules worden geschreven: over welk ding een term binnen een zin spreekt, wanneer een zin uit een andere volgt en hoe je coherent blijft in een discussie.",
  "problema": "<ul><li><strong>Suppositie:</strong> in “de mens loopt” staat “mens” voor de concrete mensen (persoonlijke suppositie); in “de mens is een soort” voor de soort (enkelvoudige suppositie); in ““mens” heeft twee lettergrepen” voor het woord (materiële suppositie). Dat is wat tegenwoordig variabelen, kwantoren en aanhalingstekens doen.</li><li><strong>Consequenties:</strong> een consequentie is goed als het onmogelijk is dat het antecedent waar is en het consequent onwaar. Buridanus bekritiseert die definitie: volgens hem zijn alleen de token-zinnen waar of onwaar, die iemand feitelijk vormt, en daarmee zou “Geen enkele zin is ontkennend; dus geen enkele ezel rent” goed zijn, omdat het antecedent niet waar kan zijn (bij het vormen ervan is er al een ontkennende zin); en dat is het niet. Hij herformuleert het door aan die zinnen te denken: het is goed als het onmogelijk is dat de dingen zijn zoals het antecedent zegt zonder dat ze zijn zoals het consequent zegt, wanneer beide tegelijk worden gevormd. Ze onderscheidden formele consequenties, die gelden op grond van de vorm, van materiële: dat is het idee van geldigheid van niveau 1.</li><li><strong>Verplichtingen:</strong> een spel tussen een tegenstander en een respondent. In het begin wordt een zin aanvaard, meestal een onware (de <em>positio</em>), en vanaf dat moment moet de respondent toegeven wat eruit volgt en ontkennen wat ermee in strijd is, zonder zichzelf ooit tegen te spreken. Het is zoals het zoeken naar tegenmodellen in de tabel “Mogelijke werelden”.</li></ul>",
  "salidas": "<p>Ockham formuleerde in woorden de wetten die we tegenwoordig de wetten van De Morgan noemen, vijf eeuwen vóór De Morgan (<em>Summa logicae</em> II 32-33: het contradictoire van een conjunctie is de disjunctie van de contradictoires van de delen, en omgekeerd). Buridanus gaf zijn naam aan de paradox van de ezel (die overigens niet in zijn werken voorkomt).</p><p>Wat er niet staat: deze auteurs hadden geen predicatenlogica met ∀ en ∃ zoals die van Frege; hun theorie van de suppositie loste een deel van die problemen op met andere middelen, en de moderne logica heeft haar eeuwenlang vergeten.</p>",
  "pensar": "In “Elke man houdt van een of andere vrouw”, over welke vrouwen spreekt “vrouw”: over één enkele voor allemaal of over een verschillende voor elk? Vergelijk het met ∀x ∃y en ∃y ∀x (niveau 6)."
 }
];
