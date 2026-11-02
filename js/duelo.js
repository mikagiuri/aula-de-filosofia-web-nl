// Generado por web_i18n/i18n_rebuild.js (nl) a partir de web/js/duelo.js. No editar a mano: editar la memoria tm/nl.json y regenerar.
const DUELO_FALACIAS = {
 "persona": {
  "nombre": "De persoon aanvallen",
  "tec": "ad hominem",
  "q": "Wat heeft hoe de persoon is te maken met of zijn idee goed is?"
 },
 "famoso": {
  "nombre": "Een beroemdheid zegt het",
  "tec": "vals beroep op autoriteit",
  "q": "Is hij/zij echt een expert op DIT gebied, of alleen maar beroemd?"
 },
 "siempre": {
  "nombre": "Zo is het altijd gedaan",
  "tec": "beroep op traditie",
  "q": "Dat het altijd al zo is geweest, maakt dat het goed?"
 },
 "pena": {
  "nombre": "Medelijden opwekken in plaats van redenen geven",
  "tec": "beroep op medelijden",
  "q": "Geef je me een reden, of probeer je alleen maar dat ik medelijden krijg?"
 },
 "deformar": {
  "nombre": "Verdraaien wat je hebt gezegd",
  "tec": "stroman",
  "q": "Heb ik dat echt gezegd, of heb je het overdreven om het aan te vallen?"
 },
 "pocos": {
  "nombre": "Op basis van weinig gevallen over alle concluderen",
  "tec": "overhaaste generalisatie",
  "q": "Met hoeveel gevallen? Geldt het echt voor iedereen?"
 },
 "causa": {
  "nombre": "Het gebeurde erna, dus was het de oorzaak",
  "tec": "valse oorzaak",
  "q": "Is er bewijs dat het ene het andere veroorzaakt, of volgen ze elkaar alleen maar op?"
 },
 "dos": {
  "nombre": "Er zijn maar twee opties",
  "tec": "vals dilemma",
  "q": "Weet je zeker dat er geen enkele andere optie is?"
 },
 "miedo": {
  "nombre": "Bang maken om te overtuigen",
  "tec": "beroep op angst",
  "q": "Geeft hij me een reden, of maakt hij me alleen maar bang?"
 },
 "todos": {
  "nombre": "Dat zegt iedereen",
  "tec": "ad populum",
  "q": "Dat veel mensen het doen, maakt dat het waar?"
 },
 "notrue": {
  "nombre": "Herdefiniëren naar believen",
  "tec": "“no true scotsman”",
  "q": "Verander je de definitie alleen maar om het tegenvoorbeeld te ontwijken? (Socrates accepteerde het onderscheid… en draaide het om.)"
 },
 "equivoco": {
  "nombre": "Spelen met de dubbele betekenis",
  "tec": "equivocatie / amfibologie",
  "q": "Dat woord heeft twee betekenissen: in welke gebruik je het? Als je halverwege van betekenis verandert, heb je niets bewezen."
 }
};
const DUELO_ORDEN_FAL = [
 "persona",
 "famoso",
 "siempre",
 "pena",
 "deformar",
 "pocos",
 "causa",
 "dos",
 "miedo",
 "todos",
 "notrue",
 "equivoco"
];
const DUELO_ESTRAT = {
 "insulto": {
  "t": "“Meen je dat echt? Je moet wel erg dom zijn om dat niet te zien. Kom op, laat maar.”",
  "nombre": "de belediging",
  "schop": "strategem 38, de “ultima ratio”",
  "q": "Dat is geen reden, maar een belediging. Vraag hem om over het onderwerp te praten, niet over jou."
 },
 "ira": {
  "t": "“Natuurlijk, jij bent altijd zo traag met alles; logisch dat je het niet snapt.”",
  "nombre": "woede opwekken",
  "schop": "strategem 8",
  "q": "“In woede oordeelt niemand goed.” Adem in: hap niet in het aas."
 },
 "persona": {
  "t": "“Jij hebt geen flauw idee van het leven, dus je kunt hier beter geen mening over hebben.”",
  "nombre": "de persoonlijke aanval",
  "schop": "ad hominem, strategem 21",
  "q": "Dat jij het zegt, verandert niets aan of het idee goed of slecht is."
 },
 "categoria": {
  "t": "“Wat jij zegt is typisch voor een fascist. Alleen een sukkel zou zo denken.”",
  "nombre": "je in een verfoeilijk hokje stoppen",
  "schop": "onderbrengen in een verwerpelijke categorie",
  "q": "Het etiket weerlegt niets. Waar is het argument?"
 },
 "miedo": {
  "t": "“Als je me blijft tegenspreken, raak je je vrienden kwijt.”",
  "nombre": "de bedreiging",
  "schop": "beroep op angst (ad baculum)",
  "q": "Angst is geen reden. Waarom zou wat hij zegt waar zijn?"
 },
 "desvio": {
  "t": "“En jij dan? Laatst deed jij hetzelfde. Laten we het daar liever over hebben.”",
  "nombre": "afleiden en naar jou wijzen",
  "schop": "strategemen 18 en 29",
  "q": "Dat ik faal beantwoordt de vraag niet. Laten we teruggaan naar het onderwerp."
 },
 "autoridad": {
  "t": "“Dat zei een Nobelprijswinnaar en het is meer dan bewezen. Daar valt niets meer over te zeggen.”",
  "nombre": "de autoriteit om je het zwijgen op te leggen",
  "schop": "list 30",
  "q": "Wie, waar en waarom? Een citaat zonder reden sluit het onderwerp niet af."
 }
};
const DUELO_REACCIONES = [
 {
  "lbl": "Ook uitschelden",
  "t": "“Nou, jij bent nog dommer, kom nou!”"
 },
 {
  "lbl": "Opgeven en de ander gelijk geven",
  "t": "“Oké, oké… wat jij zegt.”"
 },
 {
  "lbl": "Het onderwerp ontwijken",
  "t": "“Laat maar, laten we over iets anders praten.”"
 }
];
const DUELO_TEMAS = [
 {
  "id": "moviles",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Moeten mobieltjes buiten de klas blijven?",
  "cpuLado": "De computer verdedigt: “dat ze vrij in de klas gebruikt mogen worden”.",
  "tuLado": "Jij verdedigt: “beter buiten het klaslokaal”.",
  "opp": [
   {
    "t": "De mobiel geeft je meteen een woordenboek en rekenmachine; goed gebruikt is het een studiehulpmiddel.",
    "f": null
   },
   {
    "t": "Dat zei een technologiegoeroe in een lezing: de mobiel verbieden is iets voor digitale analfabeten.",
    "f": "famoso",
    "peso": 1,
    "interes": "Die goeroe adviseert een bedrijf dat tablets en apps aan scholen verkoopt."
   },
   {
    "t": "Op alle moderne scholen worden ze al gebruikt; achterblijven is boers.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "Of mobieltjes vrij, of we voeden jongeren op die niet in de 21e eeuw kunnen leven.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "Ik ken er twee die geslaagd zijn door dingen op hun mobiel op te zoeken; het is duidelijk dat het iedereen helpt.",
    "f": "pocos",
    "peso": 2
   },
   {
    "t": "Als we ze leren het volgens regels te gebruiken, leren ze zichzelf beter te reguleren dan bij een totaalverbod.",
    "f": null
   }
  ],
  "counters": [
   {
    "t": "In de klassen waar ze mobieltjes inleverden, steeg de aandacht en daalde het spieken: er zijn gegevens.",
    "str": 3
   },
   {
    "t": "Een nuttig hulpmiddel kan op specifieke momenten gebruikt worden, niet de hele les binnen handbereik.",
    "str": 2
   },
   {
    "t": "Voor wat nodig is zijn er de tablets van de school, zonder persoonlijke meldingen.",
    "str": 2
   },
   {
    "t": "Veel mensen waarderen het om even te disconnecten; het klaslokaal kan die plek zijn.",
    "str": 1
   },
   {
    "t": "Of de mobiel buiten, of dit wordt een internetcafé en niemand leert iets.",
    "f": "dos"
   },
   {
    "t": "Dat zegt mijn oom, die al 30 jaar leraar is, dus buiten en klaar.",
    "f": "famoso"
   }
  ]
 },
 {
  "id": "comida",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Is het verstandig om elke dag fastfood te eten?",
  "cpuLado": "De computer verdedigt: “ja, doe maar, elke dag”.",
  "tuLado": "Jij verdedigt: “af en toe wel, dagelijks niet”.",
  "opp": [
   {
    "t": "Het is goedkoop en snel; voor wie weinig tijd heeft, regelt het de maaltijd.",
    "f": null
   },
   {
    "t": "De beroemdste voetballer ter wereld maakt er reclame voor, dus zo slecht zal het niet zijn.",
    "f": "famoso",
    "peso": 1,
    "interes": "De voetballer krijgt miljoenen voor het aanprijzen van die fastfoodketen."
   },
   {
    "t": "De hele klas eet daar op vrijdag; daar zal een reden voor zijn.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "Mijn neef eet hamburgers en is ontzettend sterk: dit eten maakt je sterk.",
    "f": "causa",
    "peso": 2
   },
   {
    "t": "Of je eet dit, of je blijft hongerig; er is geen andere goedkope optie.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "Ontneem me niet het enige plezier van de dag, ik heb het al moeilijk genoeg.",
    "f": "pena",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Op het etiket staat dat een menu bijna al het zout en vet van een hele dag bevat: dagelijks eist dat zijn tol.",
    "str": 3
   },
   {
    "t": "Het af en toe eten is het probleem niet; het probleem is elke dag.",
    "str": 2
   },
   {
    "t": "Met wat een dagelijks menu kost, kook je per week gevarieerd voor minder geld.",
    "str": 2
   },
   {
    "t": "Er zijn broodjes en fruit die net zo snel zijn en goedkoper.",
    "str": 1
   },
   {
    "t": "Ik ken iemand die daarvan ziek is geworden; dus iedereen die dat eet wordt ziek.",
    "f": "pocos"
   },
   {
    "t": "Als je dat blijft eten, beland je zeker in het ziekenhuis.",
    "f": "miedo"
   }
  ]
 },
 {
  "id": "mascota",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Zullen we vandaag nog een huisdier adopteren?",
  "cpuLado": "De computer verdedigt: “ja, vandaag nog”.",
  "tuLado": "Jij verdedigt: “goed voorbereiden van tevoren, niet vandaag in het wilde weg”.",
  "opp": [
   {
    "t": "Er zijn dieren in het asiel die zo snel mogelijk een thuis nodig hebben; wachten kost hun ook wat.",
    "f": null
   },
   {
    "t": "Kijk eens wat een schattig snoetje; als we hem vandaag niet meenemen word ik doodongelukkig.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "In mijn familie hebben we altijd een hond gehad, dus we moeten er nu eentje hebben.",
    "f": "siempre",
    "peso": 1
   },
   {
    "t": "Al mijn vrienden hebben een huisdier; ik ben de enige die er geen heeft.",
    "f": "todos",
    "peso": 1
   },
   {
    "t": "Of we adopteren hem vandaag, of we zitten voor altijd zonder huisdier.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "De dierenarts zegt dat we moeten wachten, maar omdat ze geen kinderen heeft, weet ze niets van gezinnen.",
    "f": "persona",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Een hond wordt tien of vijftien jaar oud en elke dag moet je hem eten geven, uitlaten en de dierenarts betalen: dat moet je van tevoren regelen.",
    "str": 3
   },
   {
    "t": "We kunnen adopteren zodra we weten wie hem elke dag uitlaat; het is voorbereiden, niet opgeven.",
    "str": 2
   },
   {
    "t": "Als we hem zonder plan meenemen en later niet voor hem kunnen zorgen, is het dier degene die er het meest onder lijdt.",
    "str": 2
   },
   {
    "t": "Een week om het huis en het rooster voor te bereiden is niet zo veel.",
    "str": 1
   },
   {
    "t": "Dus volgens jou doen dieren er helemaal niets toe.",
    "f": "deformar"
   },
   {
    "t": "Een dierenarts-influencer zei dat hoe eerder hoe beter, dus vandaag.",
    "f": "famoso"
   }
  ]
 },
 {
  "id": "trasimaco",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Is rechtvaardigheid alleen het voordeel van de sterkste? · Socrates vs. Thrasymachus",
  "cpuLado": "De computer is Thrasymachus: onrechtvaardig zijn is winstgevender en maakt gelukkiger; rechtvaardigheid dient alleen de machtige.",
  "tuLado": "Jij bent Socrates: rechtvaardigheid is een deugd die degene die haar bezit ten goede komt, en een rechtvaardig leven is gelukkiger.",
  "estrat": [
   {
    "t": "Hij stormt binnen als een wild beest: “Wat een onzin hebben jullie de hele tijd uitgekraamd!”",
    "nombre": "de brute binnenkomst",
    "schop": "intimideren vóór het argumenteren",
    "q": "De toon is geen argument. Wat heeft hij over het onderwerp te zeggen?"
   },
   {
    "t": "Hij laat een schaterlach horen: “Daar heb je weer de typische ironie van Socrates; ik wist al dat je je eruit zou draaien.”",
    "nombre": "de spot",
    "schop": "belachelijk maken in plaats van weerleggen",
    "q": "Lachen weerlegt niets. Vraag hem naar de reden."
   },
   {
    "t": "“Socrates, heb je nog steeds een oppas? Want die laat je met snottebellen lopen en veegt ze niet af.”",
    "nombre": "de belediging van de oppas",
    "schop": "strategem 38, de “ultima ratio”",
    "q": "Het is een belediging, geen antwoord. Kom terug op het onderwerp."
   }
  ],
  "opp": [
   {
    "t": "De rechtvaardige haalt er altijd minder uit: hij bedriegt niet in zaken, betaalt zijn belastingen en, als hij regeert, komt hij anderen ten goede en niet zichzelf.",
    "f": null
   },
   {
    "t": "Wanneer een arts een fout maakt, handelt hij op dat moment niet als arts. Zo ook degene die heerst: strikt genomen vergist de heerser zich niet.",
    "f": "notrue",
    "peso": 1
   },
   {
    "t": "Jij stelt alleen vragen om te winnen, uit liefde voor eer; je zoekt de waarheid niet, dus jouw vragen tellen niet.",
    "f": "persona",
    "peso": 3
   },
   {
    "t": "Kijk wie er wint: tirannen en bedriegers. Het is overduidelijk dat onrechtvaardigheid gelukkig maakt.",
    "f": "pocos",
    "peso": 2
   },
   {
    "t": "Of je bent onrechtvaardig en je haalt je slag, of je bent rechtvaardig en je wordt levend opgegeten; er is geen tussenweg.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "De rechtvaardige is een sukkel die wordt uitgebuit; de onrechtvaardige is de slimmerik die uitbuit. Het een of het ander. Daarom is onrechtvaardigheid de deugd.",
    "f": "dos",
    "fAlt": [
     "persona"
    ],
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Zelfs een roversbende heeft onderling enige rechtvaardigheid nodig om iets te bereiken; onrechtvaardigheid zet hen tegen elkaar op en vernietigt hen.",
    "str": 3
   },
   {
    "t": "Heersers vergissen zich en vaardigen wetten uit die hen benadelen; dan is het gehoorzamen daaraan niet in het voordeel van de sterke.",
    "str": 2
   },
   {
    "t": "De arts, voor zover hij arts is, zoekt het welzijn van de zieke, niet het zijne; wie goed regeert, zoekt het welzijn van de geregeerde.",
    "str": 2
   },
   {
    "t": "Als de functie van de ziel leven is, en rechtvaardigheid haar deugd is, dan leeft de rechtvaardige goed; en goed leven is gelukkig zijn.",
    "str": 2
   },
   {
    "t": "Een sofist laat zich betalen om te leren gelijk te hebben zonder het te hebben; hoe kunnen we jou dan geloven?",
    "f": "persona"
   },
   {
    "t": "Of je geeft toe dat rechtvaardigheid een deugd is, of je erkent dat je graag bestolen zou worden; kies maar.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "atheismusstreit",
  "grupo": "contemporanea",
  "nivel": [
   "hf"
  ],
  "claim": "De Atheismusstreit (1798): is het atheïstisch om God te identificeren met de morele orde van de wereld?",
  "cpuLado": "De computer is de aanklager van Fichte: dat is atheïsme, en atheïsme moet verboden worden.",
  "tuLado": "Jij bent Fichte: de God die geloofwaardig is, is de levende morele orde van de wereld; een God-ding apart zou een afgod zijn.",
  "estrat": [
   {
    "t": "Er circuleert een anoniem pamflet, “Brief van een vader aan zijn studerende zoon”: wie jouw tijdschrift leest, zal geloof en ziel verliezen.",
    "nombre": "het anonieme pamflet",
    "schop": "aanvallen zonder je gezicht te laten zien (de put vergiftigen)",
    "q": "Wie in de schaduw beschuldigt, argumenteert niet. Wat beweert hij en met welk bewijs?"
   },
   {
    "t": "De regering van Saksen dreigt het tijdschrift in beslag te nemen en degenen die het lezen te straffen.",
    "nombre": "de dreiging met censuur",
    "schop": "geweld in plaats van argumenten (ad baculum)",
    "q": "Een idee de mond snoeren weerlegt het niet. Waar is het argument?"
   },
   {
    "t": "“Atheïst!” Met dat woord is het genoeg; er valt niet meer met jou te praten.",
    "nombre": "het schandelijke etiket",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "Het etiket weerlegt niets. Wat houdt precies in wat ik zeg?"
   }
  ],
  "opp": [
   {
    "t": "Een God die geen substantie is, geen persoon, geen schepper, maar alleen “de morele orde”, waarin onderscheidt dat zich van het niet hebben van een God?",
    "f": null
   },
   {
    "t": "Fichte zegt dat God slechts een idee is dat wij ons vormen; dat wil zeggen, dat hij God ontkent. Hij is een atheïst.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Als je de persoonlijke God wegneemt, storten de moraal, de eed en de staat ineen. Het moet onmiddellijk verboden worden.",
    "f": "miedo",
    "peso": 3
   },
   {
    "t": "Fichte is een jakobijn en een oproerkraaier; je weet al wat voor filosofie er uit zo'n man komt.",
    "f": "persona",
    "peso": 2
   },
   {
    "t": "De catechismus die de hele christenheid belijdt, zegt dat God persoon en schepper is; wie is hij om dat te wijzigen?",
    "f": "siempre",
    "peso": 1
   },
   {
    "t": "Alle weldenkende mensen zijn geschokt door dat tijdschrift; daar zal wel een reden voor zijn.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "De ware God is de levende morele orde van de wereld, datgene waarop je vertrouwt wanneer je goed handelt: dat is niet “een idee van mij”, het is het meest werkelijke.",
    "str": 3
   },
   {
    "t": "Van God een ding of een persoon maken, een zijnde onder de zijnden, verlaagt hem tot een afgod; die afgod ontkennen is niet God ontkennen.",
    "str": 3
   },
   {
    "t": "Een idee straffen met censuur weerlegt het niet: als ik me vergis, bewijs dat dan, muilkorf me niet.",
    "str": 2
   },
   {
    "t": "Beoordeel mijn argumenten, niet mijn politiek: of ik nu jakobijn ben of niet, zegt niets over of ik gelijk heb.",
    "str": 2
   },
   {
    "t": "Of jullie aanvaarden mijn hele idealisme, of jullie zijn bijgelovige fanatici.",
    "f": "dos"
   },
   {
    "t": "Wie mij beschuldigt is een onwetende pastoor die nog geen regel van Kant heeft gelezen.",
    "f": "persona"
   }
  ]
 },
 {
  "id": "descartes-dualismo",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Het dualisme van Descartes: zijn geest en lichaam twee substanties of één?",
  "cpuLado": "De computer is de monist (Spinoza, La Mettrie): er is maar één substantie; een aparte ziel is overbodig.",
  "tuLado": "Jij bent Descartes: de geest is een denkend ding, werkelijk onderscheiden van het uitgebreide lichaam.",
  "estrat": [
   {
    "t": "“Dat zijn priesterpraatjes: de onsterfelijke ziel is bijgeloof om de mensen bang te maken.”",
    "nombre": "de minachting",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "Minachting is geen argument. Wat schort er precies aan het onderscheid?"
   },
   {
    "t": "“Jij, die je verschuilt achter ‘ik denk, dus ik besta’, durft het lichaam niet recht in de ogen te kijken.”",
    "nombre": "de persoonlijke sneer",
    "schop": "ad hominem",
    "q": "Mijn karakter bepaalt niet of geest en lichaam verschillend zijn."
   },
   {
    "t": "“Stop met ronddraaien met je ‘helder en duidelijk’ en praat als een normaal persoon.”",
    "nombre": "de spot",
    "schop": "belachelijk maken in plaats van weerleggen",
    "q": "Lachen om de woordkeuze weerlegt het idee niet."
   }
  ],
  "opp": [
   {
    "t": "Als de ziel niet uitgebreid is, kan ze het lichaam niet duwen of bewegen; contact vereist uitgebreidheid. Hoe werken ze dan op elkaar in?",
    "f": null
   },
   {
    "t": "Eén substantie met twee attributen, denken en uitgebreidheid, is genoeg om alles te verklaren, zonder twee werelden waarvan niemand weet hoe ze elkaar raken.",
    "f": null
   },
   {
    "t": "Volgens jou is het lichaam een waardeloze gevangenis en telt alleen de ziel; je veracht alles wat vleselijk is.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Of de ziel is een aparte substantie, of je bent niet meer dan een machine zonder vrijheid: kies maar.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Eén slok wijn verandert je gedachten; dus denken is alleen maar chemie van het lichaam, er is geen ziel.",
    "f": "causa",
    "peso": 2
   },
   {
    "t": "De artsen en de moderne geleerden zijn allemaal materialisten; ga jij dan als enige gelijk hebben?",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Ik kan eraan twijfelen of ik een lichaam heb, maar niet dat ik denk; en wat ik helder en welonderscheiden als gescheiden opvat, kan gescheiden bestaan.",
    "str": 3
   },
   {
    "t": "Dat het lichaam de geest beïnvloedt, bewijst niet dat ze hetzelfde zijn: de musicus is zijn instrument niet, ook al bespeelt hij het.",
    "str": 3
   },
   {
    "t": "Ik veracht het lichaam niet: ik zeg dat ik er een zeer nauwe eenheid mee vorm, niet dat het een gevangenis is.",
    "str": 2
   },
   {
    "t": "Dat één substantie eenvoudiger is, maakt haar nog niet waar: er moet nog verklaard worden waarom ik in de eerste persoon denk.",
    "str": 2
   },
   {
    "t": "Of je aanvaardt een onsterfelijke ziel, of je bent een dier zonder waardigheid: er is geen middenweg.",
    "f": "dos"
   },
   {
    "t": "Spinoza is uit zijn gemeenschap verbannen; hoe kun je zo iemand geloven?",
    "f": "persona"
   }
  ]
 },
 {
  "id": "hegel-kant",
  "grupo": "contemporanea",
  "nivel": [
   "hf"
  ],
  "claim": "Hegel tegen Kant: heeft de rede onoverkomelijke grenzen of kan ze alles denken?",
  "cpuLado": "De computer verdedigt Kant: we kennen alleen verschijnselen; over het ding op zich moeten we zwijgen.",
  "tuLado": "Jij bent Hegel: die grenzen zijn een vooroordeel; het ding op zich is een leegte en de tegenspraak drijft het denken voort.",
  "estrat": [
   {
    "t": "“Jouw zinnen zijn zo duister dat niemand je begrijpt; zo is het makkelijk om je als diepzinnig voor te doen.”",
    "nombre": "de spot om de duisterheid",
    "schop": "belachelijk maken in plaats van weerleggen",
    "q": "Dat je moeite hebt om mij te lezen, weerlegt niet wat ik zeg. Wat is er precies onwaar?"
   },
   {
    "t": "“Jij schrijft om belangrijk te lijken, niet om iets te verduidelijken.”",
    "nombre": "de persoonlijke sneer",
    "schop": "ad hominem",
    "q": "Mijn stijl bepaalt niet of Kant gelijk had of niet."
   },
   {
    "t": "“Hou op met rond te draaien met die ‘dialectiek’ en geef me een ja of een nee.”",
    "nombre": "het ongeduld",
    "schop": "forceren en afleiden",
    "q": "Geforceerd vereenvoudigen beantwoordt de vraag niet."
   }
  ],
  "opp": [
   {
    "t": "We kennen alleen verschijnselen, nooit het ding op zich: ruimte, tijd en de categorieën zijn van ons, niet van de dingen.",
    "f": null
   },
   {
    "t": "Wanneer de rede buiten de ervaring treedt, vervalt ze in antinomieën: ze bewijst met evenveel kracht een these en het tegendeel ervan. Dat geeft een grens aan.",
    "f": null
   },
   {
    "t": "Dus volgens jou weet de rede alles al en kunnen we de wereld naar believen verzinnen.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Of je aanvaardt mijn grenzen, of je keert terug naar de oude waanzinnige metafysica over zielen en werelden. Er is geen andere keuze.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "De Kritiek van de zuivere rede is het hoogtepunt van de filosofie; wie ben jij om Kant te corrigeren?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Zonder die grenzen vervalt de filosofie weer in fanatisme en bijgeloof: dat is gevaarlijk.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Het kenvermogen onderzoeken vóór het kennen is willen leren zwemmen zonder het water in te gaan.",
    "str": 3
   },
   {
    "t": "Het ding op zich, wat overblijft als je van het voorwerp alles wegneemt wat ik erover denk, is geen mysterie: het is de leegste abstractie.",
    "str": 3
   },
   {
    "t": "De tegenspraak van de antinomieën is niet het einde van de rede, maar haar motor: het ware is het geheel dat ze overstijgt.",
    "str": 2
   },
   {
    "t": "Ik zeg niet dat we de wereld verzinnen: ik zeg dat denken en werkelijkheid geen twee werelden zijn die door een muur gescheiden zijn.",
    "str": 2
   },
   {
    "t": "Of je denkt de totaliteit zoals ik, of je bent niet meer dan een laffe scepticus: kies maar.",
    "f": "dos"
   },
   {
    "t": "Kant was een oude, starre man die nooit uit Königsberg is gekomen; wat zou hij van het worden weten?",
    "f": "persona"
   }
  ]
 },
 {
  "id": "calicles",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates tegen Callicles (Gorgias): heeft het recht van de sterkste gelijk?",
  "cpuLado": "De computer is Callicles: van nature moet de sterke heersen en meer hebben; zich inhouden is iets voor zwakkelingen.",
  "tuLado": "Jij bent Socrates: het is erger onrecht te plegen dan het te ondergaan, en een leven zonder maat is niet gelukkig.",
  "estrat": [
   {
    "t": "“Stop met die slaafse vraagjes en praat als een man.”",
    "nombre": "de mannelijke minachting",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "De stoere toon is geen argument. Wat is er onwaar aan wat ik zeg?"
   },
   {
    "t": "“Schaam je je niet om op jouw leeftijd je tijd te verdoen met woordspelletjes?”",
    "nombre": "de sneer over de leeftijd",
    "schop": "ad hominem",
    "q": "Mijn leeftijd bepaalt niet of ik gelijk heb."
   },
   {
    "t": "“Dit is belachelijk, je verveelt me; antwoord jij maar, jij die zoveel weet.”",
    "nombre": "het ongeduld",
    "schop": "afleiden en forceren",
    "q": "Je vervelen weerlegt niets. Laten we teruggaan naar de vraag."
   }
  ],
  "opp": [
   {
    "t": "De rechtvaardigheid van de gelijkheid is een uitvinding van de vele zwakken om de sterke uit angst te binden; van nature moet de beste meer hebben.",
    "f": null
   },
   {
    "t": "Kijk naar de natuur: de leeuw respecteert geen wetten en de sterke staat legt zijn wil op aan de zwakke. Zo zijn de zaken, en zo moeten ze zijn.",
    "f": "pocos",
    "peso": 1
   },
   {
    "t": "Filosofie is prima voor kinderen; een volwassen man die blijft filosoferen is belachelijk en verdient een pak slaag.",
    "f": "persona",
    "peso": 3
   },
   {
    "t": "Of je heerst en geniet, of je wordt overheerst en slikt: er is geen goed leven halverwege.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Als je geen retorica leert en doorgaat met je vragen, zal iedereen je voor de rechter slepen en je doden zonder dat je je kunt verdedigen.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Volgens jou zou je je moeten laten vertrappen en je nooit mogen verdedigen; je predikt lafheid.",
    "f": "deformar",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Als de sterkste degene is die het meeste kan, en de velen meer kunnen dan één, dan is de rechtvaardigheid van de velen die van de natuur: je eigen wet spreekt je tegen.",
    "str": 3
   },
   {
    "t": "De mateloze ziel is een lek vat: hoeveel je er ook in giet, het raakt nooit vol; dat leven is geen geluk, maar een eindeloos tekort.",
    "str": 3
   },
   {
    "t": "Genot en pijn voel je tegelijk (de dorstige drinkt met genot terwijl hij nog dorst lijdt), maar goed en kwaad niet; dus is genot niet het goede.",
    "str": 2
   },
   {
    "t": "Ik zeg niet dat je je moet laten vertrappen: ik zeg dat onrecht begaan de ziel meer schaadt dan onrecht ondergaan; daarom ontvang ik liever de klap dan dat ik hem uitdeel.",
    "str": 2
   },
   {
    "t": "Jij verdedigt dit omdat je een gewetenloze eerzuchtige bent; daarom geloof ik je niet.",
    "f": "persona"
   },
   {
    "t": "Of je geeft toe dat rechtvaardigheid ertoe doet, of je erkent dat je niets meer bent dan een tiran: kies.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "eutifron",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates tegen Euthyphron: wat is vroomheid?",
  "cpuLado": "De computer is Euthyphron: een ziener die zichzelf een expert in religie vindt en zijn eigen vader gaat aanklagen; hij beweert te weten wat ‘het vrome’ is.",
  "tuLado": "Jij bent Socrates: je zoekt geen voorbeelden, maar de definitie: het kenmerk waardoor elke vrome handeling vroom is.",
  "estrat": [
   {
    "t": "“Ik weet van deze dingen veel meer dan jij, Socrates; daar ben ik niet voor niets ziener.”",
    "nombre": "de zelfvoldaanheid van de expert",
    "schop": "beroep op eigen gezag",
    "q": "Dat jij ziener bent beantwoordt de vraag niet: zeg me wat het vrome is."
   },
   {
    "t": "“Je vermoeit me met al die vraagjes; iedereen begrijpt dit behalve jij.”",
    "nombre": "het ongeduld",
    "schop": "minachting / ad hominem",
    "q": "Dat je moe wordt weerlegt niets. Laten we teruggaan naar de vraag."
   },
   {
    "t": "“Ik heb haast, Socrates, er wordt op me gewacht; we stellen het uit tot een andere dag.”",
    "nombre": "de vlucht",
    "schop": "de vraag ontwijken",
    "q": "Weggaan is geen antwoord: vluchten laat de vraag onbeantwoord."
   }
  ],
  "opp": [
   {
    "t": "Wat is het vrome? Vroom is wat ik nu doe: iemand vervolgen die een misdaad begaat. Daar heb je het.",
    "f": null
   },
   {
    "t": "Zeus zelf heeft zijn vader Kronos geketend; als de goden zulke dingen doen, wie ben ik dan om hen niet na te volgen?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Het is overduidelijk: het vrome is wat de goden liefhebben, en het onvrome wat zij haten.",
    "f": null
   },
   {
    "t": "Dan is het vrome wat ALLE goden zonder uitzondering liefhebben; geen enkele echte god zou een misdaad liefhebben.",
    "f": "notrue",
    "peso": 2
   },
   {
    "t": "Het is vroom omdat de goden het liefhebben, punt uit; daarmee weet je genoeg om te weten wat het is.",
    "f": null
   },
   {
    "t": "Heel Athene weet heel goed wat vroomheid is; alleen jij doet alsof je het niet begrijpt.",
    "f": "todos",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Ik vroeg je WAT vroomheid is, niet een voorbeeld van iets vrooms. Geef me het kenmerk waardoor elke vrome handeling vroom is, om daarmee elke daad te beoordelen.",
    "str": 3
   },
   {
    "t": "Als de goden onderling ruziën, zoals de dichters vertellen, zal hetzelfde door de enen geliefd en door de anderen gehaat worden: tegelijk vroom en onvroom. Jouw definitie spreekt zichzelf tegen.",
    "str": 3
   },
   {
    "t": "Is het vrome geliefd bij de goden OMDAT het vroom is, of is het vroom OMDAT zij het liefhebben? Als zij het liefhebben omdat het al vroom is, is geliefd zijn niet wat het vroom maakt: je vertelt me wat ermee gebeurt, niet wat het is.",
    "str": 3
   },
   {
    "t": "Jouw “handel” met de goden brengt ons terug bij het begin: hen behagen is niets anders dan door hen geliefd worden, en dat hebben we al weerlegd. Je draait in een kringetje rond.",
    "str": 2
   },
   {
    "t": "Een man die zijn eigen vader voor de rechter durft te dagen, heeft geen hart; ik vertrouw niets van wat hij zegt.",
    "f": "persona"
   },
   {
    "t": "Of je definieert vroomheid hier en nu, of je geeft toe dat je een onvrome bent: kies.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "eutidemo",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates tegen Euthydemus en Dionysodorus: de kunst om met woorden te winnen",
  "cpuLado": "De computer is de eristische broers Euthydemus en Dionysodorus: ze pochen erop alles te kunnen weerleggen, wat de ander ook zegt, door te spelen met de dubbele betekenis van woorden.",
  "tuLado": "Jij bent Socrates: onderscheid de betekenissen van elk woord en laat zien dat zij de term weerleggen, niet de zaak.",
  "estrat": [
   {
    "t": "Ze lachen in koor: “Zien jullie het? De grote Socrates kan zelfs geen kindervraag beantwoorden.”",
    "nombre": "het lachen in koor",
    "schop": "belachelijk maken in plaats van weerleggen",
    "q": "Lachen weerlegt niets. Waar zit de fout in wat ik zeg?"
   },
   {
    "t": "Ze bestoken je om de beurt zonder je te laten nadenken: “Antwoord nu! Ja of nee! Snel!”",
    "nombre": "het om de beurt lastigvallen",
    "schop": "overrompelen zodat je geen onderscheid kunt maken",
    "q": "Overrompelen is geen argumenteren. Geef me de tijd om de betekenissen te onderscheiden."
   },
   {
    "t": "“Het maakt niet uit wat je antwoordt, je valt toch; geef je nu maar over.”",
    "nombre": "de bluf van de onverslaanbaren",
    "schop": "intimideren met valse onoverwinnelijkheid",
    "q": "Dat jullie pochen te zullen winnen, bewijst niet dat jullie gelijk hebben."
   }
  ],
  "opp": [
   {
    "t": "Zijn degenen die leren de wijzen of de onwetenden? Als het de wijzen zijn, leren ze wat ze al weten; als het de onwetenden zijn, leren ze zonder iets te begrijpen. Leren is dus onmogelijk.",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Weet je iets? Dan ben je een wijze. En wie weet, weet. Dus weet je ALLES, en dat heb je altijd al geweten.",
    "f": "equivoco",
    "peso": 2,
    "interes": "De twee broers vragen geld voor het onderwijzen van deze kunst: hoe verblindender de truc, hoe meer betalende leerlingen."
   },
   {
    "t": "Heb je een hond en is hij vader van puppy's? Dan is hij vader en is hij van jou: hij is je vader. En jij bent de broer van de puppy's.",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Je wilt dat de jongeman wijs wordt, dat wil zeggen dat hij ophoudt te zijn wat hij is; je wilt dat hij ophoudt te zijn: je wilt dat hij sterft!",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Elke vraag beantwoord je met ja of nee. Antwoord alleen met ja of nee en je zult zien dat je valt; nuanceren is iets voor bedriegers.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Eerder zei je het een en nu het andere; dus spreek je jezelf tegen en heb je verloren, wat je ook zegt.",
    "f": "deformar",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Ik onderscheid: “leren” heeft twee betekenissen: het verwerven van nieuwe kennis en het begrijpen van wat je al hebt. De onwetende leert in de eerste betekenis. Nu de dubbelzinnigheid is opgelost, is er geen paradox.",
    "str": 3
   },
   {
    "t": "“Iets weten” is niet “alles weten”: uit het feit dat je één ding weet, volgt niet dat je alle dingen weet. Je speelt met het woord “weten”.",
    "str": 3
   },
   {
    "t": "“Hij is vader” en “hij is van mij” zijn afzonderlijk waar, maar je kunt ze niet optellen: de hond is vader van zijn pups en van mij als dier, niet mijn vader. Je verwart twee betekenissen van “zijn”.",
    "str": 3
   },
   {
    "t": "Willen dat iemand wijs wordt, is niet willen dat hij “ophoudt te zijn”: het is willen dat hij zichzelf blijft en bovendien weet. Je weerlegt een woord, niet mijn wens.",
    "str": 2
   },
   {
    "t": "Alleen een stel kermisoplichters zou zoiets zeggen; ik schenk jullie geen enkele aandacht.",
    "f": "persona"
   },
   {
    "t": "Of jullie geven toe dat jullie spel pure holle woorden is, of jullie zijn bedriegers: kies maar.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "criton",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates tegen Crito: moet je ontsnappen aan een onrechtvaardig vonnis?",
  "cpuLado": "De computer is Crito: een vriend die vroeg in de morgen de gevangenis binnenkomt om Socrates over te halen te vluchten; hij heeft geld, contacten en een plan.",
  "tuLado": "Jij bent Socrates: de kwestie is niet wat anderen zullen zeggen of wat voordelig is, maar of vluchten rechtvaardig is; en je mag nooit onrecht begaan.",
  "estrat": [
   {
    "t": "“Je breekt mijn hart; als je sterft verlies ik een onvervangbare vriend en zal niemand geloven dat ik al het mogelijke heb gedaan.”",
    "nombre": "de chantage van de vriend",
    "schop": "medelijden opwekken / een schuldgevoel geven",
    "q": "Jouw pijn doet ertoe voor mij, maar bepaalt niet wat rechtvaardig is."
   },
   {
    "t": "“Haast je, de boot komt eraan, het is vanavond of nooit; er is geen tijd om te filosoferen!”",
    "nombre": "de haast",
    "schop": "opjagen zodat je niet nadenkt",
    "q": "Haast is geen argument; juist omdat het ernstig is, moeten we er goed over nadenken."
   },
   {
    "t": "“Ga je daar zo rustig blijven zitten terwijl je kinderen wees worden? Wat voor vader ben jij?”",
    "nombre": "het verwijt van de vader",
    "schop": "beschuldigen in plaats van argumenteren",
    "q": "Insinueren dat ik een slechte vader ben, beantwoordt niet de vraag of vluchten rechtvaardig is."
   }
  ],
  "opp": [
   {
    "t": "Als je niet vlucht, zullen de mensen zeggen dat wij, je vrienden, gierigaards en lafaards waren omdat we geen geld uitgaven om je te redden. Denk aan onze reputatie.",
    "f": "todos",
    "peso": 2,
    "interes": "Crito maakt zich zorgen om zijn eigen reputatie: hij is bang dat men zegt dat hij de vlucht niet wilde betalen."
   },
   {
    "t": "Denk aan je kinderen: je laat ze als wezen achter, zonder opvoeding en onderwijs. Hen zo achterlaten is egoïstisch.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Of je vlucht en blijft leven, of je blijft en geeft degenen die je onrechtvaardig hebben veroordeeld de overwinning: er is geen andere optie.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Blijven is kiezen voor de gemakkelijke weg; iedereen met lef zou al gevlucht zijn.",
    "f": "persona",
    "fAlt": [
     "todos"
    ],
    "peso": 1
   },
   {
    "t": "We hebben de middelen en vrienden die bereid zijn je eruit te halen; het risico voor ons nemen we graag op ons.",
    "f": null
   },
   {
    "t": "Jouw dood is in het voordeel van degenen die je onrechtvaardig hebben veroordeeld en doet pijn aan degenen die van je houden.",
    "f": null
   }
  ],
  "counters": [
   {
    "t": "We moeten niet luisteren naar wat de meerderheid vindt, maar naar wie verstand heeft van zaken: bij gezondheid volgen we de arts, niet de menigte; bij rechtvaardigheid is dat net zo. De massa kan doden, maar beslist niet wat rechtvaardig is.",
    "str": 3
   },
   {
    "t": "De vraag is niet wat men zal zeggen, maar of vluchten rechtvaardig is; en nooit mag men onrecht doen, zelfs niet om aangedaan onrecht te vergelden.",
    "str": 3
   },
   {
    "t": "Als elke burger vonnissen die hem niet bevallen ongedaan maakt, houdt geen enkele stad stand. Door hier te wonen heb ik aanvaard de wetten te gehoorzamen, en ik had kunnen vertrekken als ik het er niet mee eens was: dat pact nu verbreken zou onrechtvaardig zijn.",
    "str": 3
   },
   {
    "t": "Mijn kinderen worden beter opgevoed door een vader die zijn pacten niet verbreekt: vluchten zou hun het tegenovergestelde leren. Ik laat hun liever goede vrienden en een goed voorbeeld na dan een voortvluchtige vader.",
    "str": 2
   },
   {
    "t": "Alleen een lafaard zoals jij, die bang is voor wat men zal zeggen, vraagt mij te vluchten.",
    "f": "persona"
   },
   {
    "t": "Of we vluchten vanavond nog, of je laat me aan de dood over: kies.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-erasmo-lutero",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Erasmus tegen Luther (1524-1525): hebben we een vrije wil?",
  "cpuLado": "De computer is Luther: zonder de genade is de wil slaaf van de zonde en komt de redding alleen van God.",
  "tuLado": "Jij bent Erasmus: de mens heeft een eigen, kleine kracht die met de genade meewerkt; en in wat duister is, voorzichtigheid.",
  "estrat": [
   {
    "t": "“De Heilige Geest is geen scepticus: jij durft niets te beweren.”",
    "nombre": "de spot van de scepticus",
    "schop": "belachelijk maken in plaats van weerleggen",
    "q": "Voorzichtig zijn waar de Schrift duister is, is niet hetzelfde als sceptisch zijn. Reageer op wat ik heb gezegd."
   },
   {
    "t": "“Je schrijft als een elegante retoricus die nooit iets op het spel zet.”",
    "nombre": "de sneer naar de humanist",
    "schop": "ad hominem",
    "q": "Mijn stijl beslist niet of we een vrije wil hebben."
   },
   {
    "t": "“Wie hieraan twijfelt, is geen goede christen meer.”",
    "nombre": "de broekzak-excommunicatie",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "Van mening verschillen op dit punt haalt mij niet uit het geloof. Zeg me wat er niet klopt in mijn redenering."
   }
  ],
  "opp": [
   {
    "t": "Zonder de genade is de menselijke wil onderworpen aan de zonde: hij kan uit zichzelf het goede niet kiezen.",
    "f": null
   },
   {
    "t": "Als de redding voor een deel van onze inspanning afhing, zou niemand er zeker van kunnen zijn en zou iedereen uiteindelijk voor God met zijn verdiensten pronken.",
    "f": null
   },
   {
    "t": "Of de redding is helemaal Gods werk, of helemaal ons werk: er is geen tussenweg.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Volgens jou redt de mens zichzelf helemaal alleen, met zijn eigen krachten, en is Gods genade overbodig.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Als je een beetje vrije wil toegeeft, willen morgen alle mensen de hemel kopen met werken en aalmoezen, net als met de aflaten.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Augustinus heeft het al tegen Pelagius opgelost: wie ben jij om een kerkvader te corrigeren?",
    "f": "famoso",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als we niets konden kiezen, zouden de geboden, de beloningen en de straffen van de Schrift geen zin hebben, en zou God straffen voor wat we niet kunnen vermijden.",
    "str": 3
   },
   {
    "t": "Ik zeg niet dat we onszelf alleen redden: ik zeg dat de wil met de genade samenwerkt, zoals het kind dat van zijn vader hulp krijgt om de stappen te zetten naar de vrucht die hij hem aanwijst.",
    "str": 3
   },
   {
    "t": "Dat de redding niet alleen ons werk is, verplicht ons niet te zeggen dat we niets doen: tussen alles en niets is er ruimte om mee te werken.",
    "str": 2
   },
   {
    "t": "Over wat de Schrift in het duister laat, is het beter geen stellige uitspraken te doen die christenen verdelen.",
    "str": 2
   },
   {
    "t": "Of je aanvaardt de vrije wil, of je zult moeten erkennen dat God een wrede tiran is: kies maar.",
    "f": "dos"
   },
   {
    "t": "Je praat zo omdat je een opstandige monnik bent die alleen de Kerk wil breken.",
    "f": "persona"
   }
  ]
 },
 {
  "id": "pol-leibniz-newton-clarke",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Leibniz tegen Newton en Clarke (1715-1716): wat is de ruimte?",
  "cpuLado": "De computer is Clarke, woordvoerder van Newton: de ruimte is absoluut en reëel, en God bestuurt de wereld zonder ophouden.",
  "tuLado": "Jij bent Leibniz: de ruimte is alleen de ordening van de dingen die naast elkaar bestaan, en een volmaakte God hoeft zijn werk niet bij te stellen.",
  "estrat": [
   {
    "t": "“De Royal Society heeft al geoordeeld dat de calculus van Newton is; waarom zouden we je nu geloven?”",
    "nombre": "de rechtbank die partij is",
    "schop": "een beroep doen op een partijdige autoriteit",
    "q": "Dat rapport is grotendeels door Newton zelf opgesteld, en bovendien gaat het niet over de ruimte. Laten we terugkeren naar het onderwerp."
   },
   {
    "t": "“Jouw horlogemaker-God ruikt naar materialisme: zo begin je en eindig je zonder God.”",
    "nombre": "het gevaarlijke etiket",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "Het materialisme noemen weerlegt het niet. Wat is er mis met mijn argument?"
   },
   {
    "t": "“Een filosoof van de Duitse hoven gaat Engeland geen natuurkunde leren.”",
    "nombre": "de nationale minachting",
    "schop": "ad hominem",
    "q": "Waar ik vandaan kom, bepaalt niet wat de ruimte is."
   }
  ],
  "opp": [
   {
    "t": "De ruimte is reëel en onafhankelijk van de lichamen: ook al zou er niets zijn, ze zou er nog steeds zijn.",
    "f": null
   },
   {
    "t": "In de natuurkunde van Newton zijn er effecten, zoals de krachten die optreden wanneer je een emmer water laat ronddraaien, die een absolute ruimte lijken te vereisen.",
    "f": null
   },
   {
    "t": "Dus volgens jou heeft God de wereld gemaakt en zich er niet meer om bekommerd: we hebben Hem nergens voor nodig.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Als de wereld vanzelf werkt, als een klok, zal morgen niemand meer in God geloven: jouw filosofie leidt tot atheïsme.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Newton is de grootste geleerde van onze tijd en denkt zoals ik; ga jij hem tegenspreken?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "In heel Engeland wordt de natuurkunde van Newton al aanvaard.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als de ruimte absoluut was, had God het hele universum een paar meter verder kunnen plaatsen zonder dat er iets veranderde, en dan had Hij geen reden om te kiezen. Maar niets gebeurt zonder voldoende reden.",
    "str": 3
   },
   {
    "t": "De ruimte is een ordening van dingen die naast elkaar bestaan, zoals de tijd een ordening is van opeenvolgingen: zonder dingen blijft er niets te ordenen over.",
    "str": 3
   },
   {
    "t": "Als God zijn machine moest opwinden en af en toe repareren, zou Hij een onhandige horlogemaker zijn. Een volmaakte God maakt een werk dat geen reparaties nodig heeft.",
    "str": 2
   },
   {
    "t": "Ik zeg niet dat God zich terugtrekt: Hij bewaart de wereld op elk moment. Wat ik ontken is dat Hij haar moet corrigeren zoals een slechte ambachtsman.",
    "str": 2
   },
   {
    "t": "Jouw Newton is een plagiator van mijn calculus; daarmee is alles gezegd.",
    "f": "persona"
   },
   {
    "t": "Of de ruimte is alleen een relatie, of je zult moeten zeggen dat God een uitgebreid wezen is, zoals een lichaam: kies maar.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-voltaire-rousseau-lisboa",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Voltaire tegen Rousseau na de aardbeving van Lissabon (1755): is “alles goed”?",
  "cpuLado": "De computer is Voltaire: “alles is goed” zeggen tegenover duizenden onschuldige doden is een belediging voor de slachtoffers.",
  "tuLado": "Jij bent Rousseau: de Voorzienigheid is niet de schuldige; veel van onze kwalen veroorzaken we zelf.",
  "estrat": [
   {
    "t": "“Ach, de optimist! Zoals een dokter Pangloss: alles gaat geweldig in de beste van alle werelden.”",
    "nombre": "de karikatuur",
    "schop": "belachelijk maken in plaats van weerleggen",
    "q": "Een karikatuur beantwoordt niet aan wat ik heb gezegd over hoe Lissabon was gebouwd."
   },
   {
    "t": "“U, die tegen de wetenschappen en de kunsten geschreven hebt, wilt u mij de les lezen?”",
    "nombre": "de persoonlijke sneer",
    "schop": "ad hominem",
    "q": "Wat ik eerder heb geschreven, bepaalt niet wie er gelijk heeft over Lissabon."
   },
   {
    "t": "“Zelfs in de salons van Parijs lachen ze al om het optimisme.”",
    "nombre": "het lachen van het publiek",
    "schop": "een beroep doen op het publiek in plaats van op de argumenten",
    "q": "Dat mensen lachen is geen argument."
   }
  ],
  "opp": [
   {
    "t": "Een kind dat verpletterd wordt in de armen van zijn moeder heeft niets verkeerds gedaan: geen enkele theorie over de orde van het universum zal iemand die lijdt ervan overtuigen dat zijn pijn noodzakelijk was.",
    "f": null
   },
   {
    "t": "Het kwaad is reëel en de rede kan het niet verklaren: het is eerlijk om dat te erkennen in plaats van het te verhullen.",
    "f": null
   },
   {
    "t": "Volgens u hebben de inwoners van Lissabon het er zelf naar gemaakt en verdienden ze te sterven.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Stelt u zich voor onder het puin, terwijl u uw kinderen hoort schreeuwen: gelooft u dan nog in de Voorzienigheid?",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Of u accepteert dat alles goed is, of u erkent dat de wereld een chaos is zonder enige orde: kies maar.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Kijk naar Lissabon: dat is genoeg om te weten dat er in de natuur geen enkele orde is.",
    "f": "pocos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "De aardbeving is natuurlijk, maar de ramp niet helemaal: de natuur had daar geen twintigduizend huizen van zes en zeven verdiepingen bij elkaar gebracht.",
    "str": 3
   },
   {
    "t": "Als de inwoners meer verspreid en in lagere huizen hadden gewoond, zouden er veel minder zijn gestorven: het aantal slachtoffers hangt ook af van hoe we bouwen en leven.",
    "str": 3
   },
   {
    "t": "Velen stierven omdat ze teruggingen voor hun kleren, hun papieren of hun geld: ook dat is ons werk, niet dat van de natuur.",
    "str": 2
   },
   {
    "t": "Uw gedicht ontneemt degene die lijdt de enige hoop die hem rest. Ik geef de voorkeur aan een redelijke troost boven een wanhoop die niemand helpt.",
    "str": 2
   },
   {
    "t": "U leeft rijk en comfortabel in uw kasteel: wat weet u van lijden?",
    "f": "persona"
   },
   {
    "t": "Of u gelooft in de Voorzienigheid, of u bent een atheïst: er is geen andere mogelijkheid.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-sartre-camus",
  "grupo": "contemporanea",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Sartre tegen Camus (1952): kan geweld gerechtvaardigd worden in naam van de geschiedenis?",
  "cpuLado": "De computer is Sartre: niemand staat buiten de geschiedenis, en kritiek op de Sovjet-Unie zonder nuances speelt de rechtse partij in de kaart.",
  "tuLado": "Jij bent Camus: de opstand tegen onrecht heeft grenzen; geen enkel toekomstig doel rechtvaardigt de kampen.",
  "estrat": [
   {
    "t": "“U komt overal aan met een draagbaar voetstuk.”",
    "nombre": "de spot met het voetstuk",
    "schop": "de persoon belachelijk maken",
    "q": "Mijn karakter is geen antwoord op wat ik over de kampen heb gezegd."
   },
   {
    "t": "“U kent geen filosofie: u hebt Hegel en Marx niet naar behoren gelezen.”",
    "nombre": "de beschuldiging van incompetentie",
    "schop": "ad hominem",
    "q": "Als ik ze verkeerd lees, zeg me dan waarin. Zo niet, reageer dan op het argument."
   },
   {
    "t": "“Ga zo door en u zult eindigen in het kamp van de burgerij.”",
    "nombre": "het etiket van de vijand",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "Mij in een kamp plaatsen weerlegt niet wat ik zeg."
   }
  ],
  "opp": [
   {
    "t": "Niemand staat buiten de geschiedenis: zwijgen of jezelf zuiver houden heeft ook gevolgen, en het komt meestal ten goede aan degenen die al de macht hebben.",
    "f": null
   },
   {
    "t": "Men kan de geschiedenis niet van buitenaf beoordelen, met zuivere principes: men moet zich ermee engageren, ook al maakt men zijn handen vuil.",
    "f": null
   },
   {
    "t": "Volgens u, omdat de revolutie verkeerd kan aflopen, is het beste om niets te doen en de arbeiders te laten zoals ze zijn.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Of u staat achter de arbeiders en achter de Partij, of u staat achter de burgerij: er is geen tussenpositie.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Elk woord van u tegen de kampen zal rechts gebruiken om de arbeiders aan te vallen.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "U praat over moraal vanuit uw succes als schrijver; de arbeiders hebben geen tijd voor zulke luxe.",
    "f": "persona",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als een toekomstig doel het doden vandaag rechtvaardigt, kan elke misdaad gerechtvaardigd worden. Daarom moeten we de kampen benoemen, wie ze ook in stand houdt.",
    "str": 3
   },
   {
    "t": "“Ik kom in opstand, dus wij zijn”: de opstand ontstaat door iets te verdedigen dat allen gemeen hebben, en daarom kan hij zich niet tegen de anderen keren zonder zichzelf te verraden.",
    "str": 3
   },
   {
    "t": "Ik zeg niet dat men zich niet moet engageren: ik zeg dat engagement grenzen heeft, en de eerste is het niet accepteren van geplande moord.",
    "str": 2
   },
   {
    "t": "Zwijgen over onrecht omdat je eigen kamp het begaat, is niet je engageren met de geschiedenis: het is afzien van het beoordelen ervan.",
    "str": 2
   },
   {
    "t": "U verdedigt de Sovjet-Unie omdat het u goed uitkomt voor uw tijdschrift.",
    "f": "persona"
   },
   {
    "t": "Of u veroordeelt alle kampen, of u bent medeplichtig aan moordenaars: kies maar.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-maniqueos",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustinus tegen de manicheeërs (Hippo, 392): waar komt het kwaad vandaan?",
  "cpuLado": "De computer is Fortunatus, manicheïstisch priester: er zijn twee eeuwige substanties in strijd, het licht en de duisternis.",
  "tuLado": "Jij bent Augustinus: er is één goede God, alles wat hij gemaakt heeft is goed, en het kwaad komt voort uit onze vrije wil.",
  "estrat": [
   {
    "t": "“Jij bent negen jaar een van ons geweest: met welk gezicht bekritiseer je ons nu?”",
    "nombre": "het verwijt over het verleden",
    "schop": "ad hominem",
    "q": "Eerder iets anders gedacht hebben beslist niet wie er nu gelijk heeft. Ga terug naar het argument."
   },
   {
    "t": "“Hier weet iedereen dat wij manicheeërs eerlijke mensen zijn; jij herhaalt alleen maar laster.”",
    "nombre": "de afleiding naar de reputatie",
    "schop": "van onderwerp veranderen",
    "q": "Ik bediscussieer jullie gewoonten niet, maar waar het kwaad vandaan komt."
   },
   {
    "t": "“Wat jij zegt is filosofie van Grieken, geen geloof in Christus.”",
    "nombre": "het verdachte etiket",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "Het “van Grieken” noemen weerlegt het niet. Wat is er onwaar aan?"
   }
  ],
  "opp": [
   {
    "t": "We voelen allemaal vanbinnen een strijd tussen twee krachten die in tegengestelde richtingen trekken: dat laat zien dat er twee naturen zijn.",
    "f": null
   },
   {
    "t": "Als alles komt van een goede en almachtige God, waar komt dan al dat kwaad vandaan dat niemand wil?",
    "f": null
   },
   {
    "t": "Of het kwaad is een substantie die even werkelijk is als het goede, of het bestaat niet en al het lijden is een illusie: kies.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Volgens jou is God de maker van het kwaad, omdat hij alles gemaakt heeft.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Mani is gezonden als de Parakleet die door Christus beloofd is: ga jij hem corrigeren?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Als je het principe van de duisternis ontkent, zul jij alleen de schuld dragen van al je zonden: wil je dat?",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als niets God kan schaden, waarom zou hij dan een deel van zichzelf sturen om in deze wereld te lijden? En als iets hem zou kunnen schaden, zou hij geen God zijn.",
    "str": 3
   },
   {
    "t": "Als het kwaad niet onze schuld is, maar van een andere natuur, heeft het geen zin om berouw te hebben, te straffen of te belonen.",
    "str": 3
   },
   {
    "t": "God heeft alle dingen goed gemaakt; het enige dat kwaad wordt genoemd is onze vrijwillige zonde, die geen substantie is, maar een verdraaid willen.",
    "str": 2
   },
   {
    "t": "De strijd die we vanbinnen voelen bewijst geen twee naturen: hij bewijst een verdeelde wil, die wil en toch niet helemaal wil.",
    "str": 2
   },
   {
    "t": "Jullie manicheeërs zijn huichelaars die zuiverheid prediken en leven zoals iedereen.",
    "f": "persona"
   },
   {
    "t": "Of je aanvaardt één God, of je aanbidt de duivel: er is niets anders.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-jeronimo",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustinus tegen Hiëronymus (394-405): mag je liegen voor een goede zaak?",
  "cpuLado": "De computer is Hiëronymus: de terechtwijzing van Paulus aan Petrus was een verstandige aanpassing, geen leugen.",
  "tuLado": "Jij bent Augustinus: als er in de Schrift ook maar één ‘nuttige’ leugen wordt toegestaan, kun je geen enkele passage meer vertrouwen.",
  "estrat": [
   {
    "t": "“Een jongeman mag een oude man niet uitdagen op het terrein van de Schriften: een vermoeide os stampt harder.”",
    "nombre": "het gewicht van de leeftijd",
    "schop": "beroep op eigen gezag",
    "q": "Leeftijd beslist niet of een tekst liegt. Antwoord me daarop."
   },
   {
    "t": "“Jouw brief heeft half Italië doorkruist voordat hij mij bereikte: zoek je roem ten koste van mij?”",
    "nombre": "de verdenking van bedoelingen",
    "schop": "ad hominem",
    "q": "Mijn bedoelingen veranderen het argument niet. Was er een leugen of niet?"
   },
   {
    "t": "“Ken jij Hebreeuws? Leer mij dan niet hoe ik de Bijbel moet lezen.”",
    "nombre": "de minachting van de deskundige",
    "schop": "beroep op eigen gezag",
    "q": "Ik bediscussieer jouw Hebreeuws niet, maar of men een nuttige leugen kan aanvaarden."
   }
  ],
  "opp": [
   {
    "t": "Petrus en Paulus deden uit voorzichtigheid alsof ze de Wet naleefden om de Joden geen aanstoot te geven: je aanpassen is niet liegen.",
    "f": null
   },
   {
    "t": "Men moet de teksten lezen met de beste uitleggers en in de oorspronkelijke taal, niet met vertalingen van vertalingen.",
    "f": null
   },
   {
    "t": "Origenes en de grote commentatoren hebben het vóór mij zo gelezen: ga jij ze allemaal corrigeren?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Volgens jou maakten de apostelen dan ruzie als kinderen en begon de Kerk met een schandaal.",
    "f": "deformar",
    "peso": 2
   },
   {
    "t": "Of je accepteert mijn lezing, of je geeft de heidenen zoals Porphyrius gelijk, die de apostelen bespotten.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Zo is het altijd gelezen in de scholen van Alexandrië.",
    "f": "siempre",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als één keer een nuttige leugen wordt toegelaten bij zo'n hoge autoriteit, kan iedereen de zin die hem stoort “nuttig” noemen: er blijft geen passage meer veilig.",
    "str": 3
   },
   {
    "t": "De autoriteit van een tekst hangt ervan af dat hij nooit liegt; daarom moest Paulus Petrus echt terechtwijzen, omdat Petrus verkeerd had gehandeld.",
    "str": 3
   },
   {
    "t": "Het is één ding iets uit voorzichtigheid te verzwijgen, en iets anders te beweren wat onwaar is: het eerste kan wijs zijn, het tweede is liegen.",
    "str": 2
   },
   {
    "t": "Dat de heidenen spotten is geen reden om de betekenis van de tekst te veranderen: de waarheid past zich niet aan uit angst voor spot.",
    "str": 2
   },
   {
    "t": "Jij verdedigt dit omdat je een trotse oude man bent die niet verdraagt dat hij wordt gecorrigeerd.",
    "f": "persona"
   },
   {
    "t": "Of je geeft mij gelijk, of je bent een vijand van de waarheid van de Schrift: kies.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-petiliano",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustinus tegen de donatisten (ca. 400-411): is een sacrament geldig als het door een slechte priester wordt toegediend?",
  "cpuLado": "De computer is Petilianus, donatistische bisschop: een bezoedelde dienaar kan niemand reinigen; de ware Kerk is die van de zuiveren.",
  "tuLado": "Jij bent Augustinus: wie werkelijk doopt is Christus; de priester is slechts een instrument, en het sacrament is geldig ook al is hij onwaardig.",
  "estrat": [
   {
    "t": "“Jij bent priester van de manicheeërs geweest: wie ben jij om over sacramenten te spreken?”",
    "nombre": "de valse beschuldiging",
    "schop": "ad hominem",
    "q": "Ik ben nooit manicheïstisch priester geweest, en zelfs als ik dat was geweest, beantwoordt dat het argument niet."
   },
   {
    "t": "“Jij bent een dialecticus, een kunstenaar van het bedrog: met verdraaide woorden bewijs je alles.”",
    "nombre": "de minachting voor de logica",
    "schop": "de methode in diskrediet brengen",
    "q": "Zorgvuldig redeneren is niet bedriegen. Wijs aan waar de fout zit."
   },
   {
    "t": "“Jullie Kerk heeft met de verraders geheuld: jullie hebben geen autoriteit om te spreken.”",
    "nombre": "de diskwalificatie van de groep",
    "schop": "ad hominem",
    "q": "Wat anderen deden bepaalt niet of het sacrament van de dienaar afhangt."
   }
  ],
  "opp": [
   {
    "t": "Wat telt is het geweten van degene die het sacrament toedient: een bezoedeld geweten kan het geweten van degene die het ontvangt niet reinigen.",
    "f": null
   },
   {
    "t": "Een Kerk die als herders mensen opneemt die het geloof hebben verraden om zichzelf te redden, verliest haar heiligheid.",
    "f": null
   },
   {
    "t": "Volgens jou maakt het niet uit dat de priester een crimineel is: het doet er helemaal niet toe hoe de herders leven.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Of de Kerk is zuiver, of zij is de synagoge van de duivel: er is geen middenweg.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "De martelaren zijn gestorven om niet te verraden: als je de verraders aanvaardt, spuug je op hun bloed.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "In heel Numidië staat het volk aan onze kant.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als het doopsel afhing van het geweten van de priester, zou niemand zeker kunnen zijn gedoopt te zijn, omdat het geweten van een ander niet zichtbaar is.",
    "str": 3
   },
   {
    "t": "Wie werkelijk doopt is Christus: de dienaar, goed of slecht, leent alleen zijn handen. Daarom wordt de hoop op Christus gesteld, niet op een mens.",
    "str": 3
   },
   {
    "t": "Ik zeg niet dat het niet uitmaakt hoe de herders leven: ik zeg dat hun zonde hen veroordeelt, en niet tenietdoet wat Christus door hun handen geeft.",
    "str": 2
   },
   {
    "t": "Als alleen de sacramenten van de zuiveren geldig zijn, zouden jullie de jouwe telkens moeten herhalen wanneer er bij een van jullie bisschoppen een zonde wordt ontdekt.",
    "str": 2
   },
   {
    "t": "Jullie donatisten zijn gewelddadige fanatici, dus jullie hebben geen gelijk.",
    "f": "persona"
   },
   {
    "t": "Of jullie keren terug naar de katholieke Kerk, of jullie zijn veroordeelde ketters: kies.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-volusiano",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustinus tegen de heidenen (408-412): maakt het christendom slechtere burgers?",
  "cpuLado": "De computer is Volusianus, een ontwikkelde heiden: de vijand vergeven en de andere wang toekeren past niet bij een staat die zich moet verdedigen.",
  "tuLado": "Jij bent Augustinus: de christelijke leer verbiedt niet het vaderland te dienen; als iedereen volgens haar zou leven, zou de staat gezonder zijn.",
  "estrat": [
   {
    "t": "“Sinds de keizers christelijk zijn, is Rome in handen van Alarik gevallen. Moet er nog meer gezegd worden?”",
    "nombre": "de oorzaak van de catastrofe",
    "schop": "insinueren zonder te argumenteren",
    "q": "Dat het ene na het andere komt, bewijst niet dat het het veroorzaakt. Laten we verdergaan met de argumenten."
   },
   {
    "t": "“Jij, een provinciaal uit Afrika, ga jij een Romein leren wat het vaderland is?”",
    "nombre": "de minachting van afkomst",
    "schop": "ad hominem",
    "q": "Mijn afkomst bepaalt niet of het Evangelie de staat schaadt."
   },
   {
    "t": "“Cicero heeft het al gezegd: de eerste plicht is het vaderland. Durf jij Cicero tegen te spreken?”",
    "nombre": "de grote naam",
    "schop": "beroep op autoriteit",
    "q": "Ik heb respect voor Cicero, maar de vraag is of de christelijke leer die plicht vernietigt, en dat doet zij niet."
   }
  ],
  "opp": [
   {
    "t": "Een moraal die verbiedt kwaad met kwaad te vergelden, laat de stad weerloos achter tegenover wie haar plundert.",
    "f": null
   },
   {
    "t": "Een religie wordt ook beoordeeld op wat zij doet met het openbare leven, niet alleen op wat zij belooft voor na de dood.",
    "f": null
   },
   {
    "t": "Rome werd geplunderd nadat het zijn goden had verlaten; de goden hebben haar gestraft.",
    "f": "causa",
    "peso": 3
   },
   {
    "t": "Volgens jou zouden de soldaten hun wapens moeten neergooien en zich laten doden.",
    "f": "deformar",
    "peso": 2
   },
   {
    "t": "Onze voorouders hebben altijd de goden van Rome geëerd, en zo is zij groot geworden.",
    "f": "siempre",
    "peso": 2
   },
   {
    "t": "Als jij dat blijft prediken, zal er morgen niemand meer zijn om jouw Hippo tegen de barbaren te verdedigen.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Zij die zeggen dat de leer van Christus in strijd is met de staat, moeten een leger leveren zoals die leer vraagt: soldaten die geen misbruik maken, niet stelen en tevreden zijn met hun soldij.",
    "str": 3
   },
   {
    "t": "De rampen van Rome zijn niet met de christenen begonnen: haar eigen auteurs, zoals Sallustius, klaagden al over de verdorvenheid van de zeden.",
    "str": 3
   },
   {
    "t": "Het Evangelie beveelt de soldaten niet hun wapens neer te leggen, maar er geen misbruik van te maken: Johannes de Doper zei hun dat zij tevreden moesten zijn met hun soldij, niet dat zij moesten deserteren.",
    "str": 2
   },
   {
    "t": "De andere wang toekeren is een gesteldheid van het hart om geen wraak te nemen, geen wet die een staat verplicht criminelen niet te straffen.",
    "str": 2
   },
   {
    "t": "Jullie heidenen zijn bijgelovigen die standbeelden aanbidden, wat weten jullie nu helemaal?",
    "f": "persona"
   },
   {
    "t": "Of je wordt christen, of je blijft schuldig aan de ondergang van Rome.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-pelagio",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Pelagius tegen Augustinus (411-418): kunnen wij het goede doen met onze eigen krachten?",
  "cpuLado": "De computer is Augustinus: sinds Adam worden wij gewond geboren; zonder de genade van God komt de wil er niet toe het goede te willen of te doen.",
  "tuLado": "Jij bent Pelagius: God heeft ons in staat gesteld om niet te zondigen; als God iets gebiedt, kunnen wij het ook volbrengen.",
  "estrat": [
   {
    "t": "“In Diospolis heb je met woorden veroordeeld wat je in je geschriften nog steeds verdedigt.”",
    "nombre": "de beschuldiging van dubbelhartigheid",
    "schop": "ad hominem",
    "q": "Als ik mezelf tegenspreek, wijs dat dan aan in het argument. Wat er in een concilie is gezegd, beantwoordt de vraag niet."
   },
   {
    "t": "“Je bent een hoogmoedige monnik die denkt dat hij zichzelf kan redden.”",
    "nombre": "de sneer naar het karakter",
    "schop": "ad hominem",
    "q": "Mijn karakter bepaalt niet of de wil het goede kan doen."
   },
   {
    "t": "“De concilies van Afrika en de bisschop van Rome hebben je veroordeeld: wat wil je nog meer?”",
    "nombre": "het gewicht van de veroordeling",
    "schop": "beroep op autoriteit",
    "q": "Een veroordeling is geen argument. Wat is er onwaar aan wat ik zeg?"
   }
  ],
  "opp": [
   {
    "t": "We weten vaak wat het goede is en toch doen we het niet: de wil is verdeeld en moet genezen worden.",
    "f": null
   },
   {
    "t": "Als wij met alleen onze eigen krachten goed zouden kunnen zijn, zou Christus alleen zijn gekomen om een voorbeeld te geven, niet om te redden.",
    "f": null
   },
   {
    "t": "Volgens jou heeft de mens God nergens voor nodig.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Of alles is genade van God, of alles is verdienste van de mens: er is geen middenweg.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "De apostel Paulus heeft het al gezegd, en wie dat niet aanvaardt, is geen christen.",
    "f": "notrue",
    "peso": 2
   },
   {
    "t": "Als de mensen naar jou luisteren, zullen zij hoogmoedig worden en zal niemand meer bidden.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als wij de zonde niet kunnen vermijden, zijn wij er niet verantwoordelijk voor, en heeft het geen zin iets van ons te eisen.",
    "str": 3
   },
   {
    "t": "Als God iets gebiedt, is dat omdat wij het kunnen volbrengen: het onmogelijke gebieden zou onrechtvaardig zijn.",
    "str": 3
   },
   {
    "t": "De genade is het vermogen dat God ons bij de schepping heeft gegeven, samen met de wet en het voorbeeld van Christus: ik ontken de genade niet, ik zeg waaruit ze bestaat.",
    "str": 2
   },
   {
    "t": "Zeggen dat we zonder de genade het goede niet doen, geeft een perfect excuus aan wie zich niet wil inspannen.",
    "str": 2
   },
   {
    "t": "Jij blijft van binnen een manicheeër: daarom zie je overal kwaad.",
    "f": "persona"
   },
   {
    "t": "Of de mens is volledig vrij, of hij is een marionet van God: kies.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-julian",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Julianus van Eclanum tegen Augustinus (419-430): kan een pasgeborene de zonde van een ander dragen?",
  "cpuLado": "De computer is Augustinus: wij worden allemaal geboren met de erfzonde die we van Adam hebben geërfd, en daarom worden ook kinderen gedoopt.",
  "tuLado": "Jij bent Julianus van Eclanum: er is geen zonde zonder eigen wil, en een rechtvaardige God kan niemand de schuld geven van de zonde van een ander.",
  "estrat": [
   {
    "t": "“Grote beschermer van de kinderen! En jij laat ze zonder doopsel?”",
    "nombre": "de ironie",
    "schop": "belachelijk maken in plaats van weerleggen",
    "q": "Ironie is geen argument. Hoe kan iemand schuldig zijn die niets heeft gewild?"
   },
   {
    "t": "“Jij bent een afgezette en verbannen bisschop: jouw mening telt niet.”",
    "nombre": "de diskwalificatie",
    "schop": "ad hominem",
    "q": "Mijn verbanning beslist niet of er zonde zonder wil bestaat."
   },
   {
    "t": "“Jij verdedigt hetzelfde als Pelagius, en Pelagius is al veroordeeld.”",
    "nombre": "schuld door associatie",
    "schop": "onderbrengen in een verwerpelijke categorie",
    "q": "Het eens zijn met iemand die veroordeeld is, bewijst niet dat ik ongelijk heb. Ga op het argument in."
   }
  ],
  "opp": [
   {
    "t": "Wij zijn allemaal vanaf het begin tot het kwaad geneigd en lijden pijn, onwetendheid en dood zonder dat we daarvoor hebben gekozen: dat vraagt om een verklaring.",
    "f": null
   },
   {
    "t": "Als kinderen niets hadden waarvan ze gered moesten worden, zou Christus niet de redder van allen zijn.",
    "f": null
   },
   {
    "t": "Volgens jou wordt de mens volmaakt geboren en heeft hij Christus niet nodig.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "De Kerk doopt kinderen al sinds het begin tot vergeving van de zonden: dus hebben ze zonde.",
    "f": "siempre",
    "peso": 2
   },
   {
    "t": "Als we naar jou luisteren, zullen de ouders ophouden hun kinderen te dopen en zullen ze verloren gaan.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Of je aanvaardt de erfzonde, of je ontkent de hele Schrift.",
    "f": "dos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Iemand de schuld geven van wat hij niet heeft gedaan, is de definitie zelf van onrechtvaardigheid, en dat kan niet aan God worden toegeschreven.",
    "str": 3
   },
   {
    "t": "Er is geen zonde in de mens als er geen eigen wil of instemming is, en een pasgeborene heeft nog niets gewild.",
    "str": 3
   },
   {
    "t": "Het seksueel verlangen is een door God geschapen natuurlijke kracht, goed als ze met mate wordt gebruikt: het is niet het spoor van een zonde.",
    "str": 2
   },
   {
    "t": "Als de menselijke natuur vanaf de geboorte slecht is, lijkt dat te veel op het kwade beginsel van de manicheeërs.",
    "str": 2
   },
   {
    "t": "Jij bent niets meer dan de Aristoteles van de Puniërs, een Afrikaanse redenaar.",
    "f": "persona"
   },
   {
    "t": "Of je geeft mij gelijk, of je maakt God schuldig aan een misdaad: kies.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-maximino",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustinus tegen Maximinus (rond 427-428): is de Zoon gelijk aan de Vader?",
  "cpuLado": "De computer is Maximinus, ariaanse bisschop: alleen de Vader is God zonder oorsprong; de Zoon is God, maar verwekt en aan hem ondergeschikt.",
  "tuLado": "Jij bent Augustinus: de Vader, de Zoon en de Heilige Geest zijn ieder God, met dezelfde macht, en de drie samen zijn één God.",
  "estrat": [
   {
    "t": "“Jij spreekt beschermd door de macht van de keizers: zo wint iedereen een debat.”",
    "nombre": "de verdenking van voordeel",
    "schop": "ad hominem",
    "q": "Wie wie beschermt, beslist niet wat de Schrift zegt. Keer terug naar het argument."
   },
   {
    "t": "(Hij praat en praat zonder te antwoorden, tot de tijd om is.)",
    "nombre": "tijd verspillen",
    "schop": "afleiden en rekken",
    "q": "Het rekken van de toespraak beantwoordt de vraag niet. Is de Zoon gelijk aan de Vader of niet?"
   },
   {
    "t": "“Jij bent een oude man van zeventig die vasthoudt aan formules.”",
    "nombre": "de sneer over de leeftijd",
    "schop": "ad hominem",
    "q": "Mijn leeftijd verandert het argument niet."
   }
  ],
  "opp": [
   {
    "t": "Een zoon komt voort uit zijn vader, en wat zijn oorsprong in een ander heeft, is niet gelijk aan hem.",
    "f": null
   },
   {
    "t": "De Schrift toont de Zoon die door de Vader is gezonden en hem gehoorzaamt: letterlijk gelezen leert ze ondergeschiktheid.",
    "f": null
   },
   {
    "t": "Driehonderddertig bisschoppen ondertekenden in Rimini wat ik verdedig.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "Volgens jou zijn de Vader en de Zoon dezelfde persoon in vermomming.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Of de Zoon is minder dan de Vader, of er zijn twee goden: er is geen andere uitweg.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "De Goten, die Rome verdedigen, geloven hetzelfde als ik: ga jij je tegen hen verzetten?",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Als de Vader God is en de Zoon ook God is, maar een ander en minder, dan aanbidden jullie twee goden; en als er maar één God is, aanbidden jullie Christus niet.",
    "str": 3
   },
   {
    "t": "“Luister, Israël, de Heer uw God is één”: de Vader is God, de Zoon is God, de Heilige Geest is God, en dezelfde Drie-eenheid is één God.",
    "str": 3
   },
   {
    "t": "Dat de Zoon uit de Vader voortkomt maakt hem niet minder: het licht dat uit een lamp komt is net zo goed licht als de lamp.",
    "str": 2
   },
   {
    "t": "Ik zeg niet dat ze dezelfde persoon zijn: ze zijn met drie, van elkaar verschillend, maar met één macht en één natuur.",
    "str": 2
   },
   {
    "t": "Jullie arianen zijn barbaren die er niets van begrijpen.",
    "f": "persona"
   },
   {
    "t": "Of je aanvaardt Nicea, of je staat buiten de Kerk: kies.",
    "f": "dos"
   }
  ]
 }
];
