// Generado por web_i18n/i18n_rebuild.js (nl) a partir de web/js/logica_itinerario.js. No editar a mano: editar la memoria tm/nl.json y regenerar.
const LOG_ITIN = {
 "titulo": "Leerroute: van nul tot expert",
 "intro": "Twaalf niveaus, van het syllogisme van Aristoteles tot het bewijzen van proposities uit de Ethica van Spinoza met een bewijsassistent. Het gaat langzaam: elk niveau zegt wat je aan het eind zult weten, wat je moet doen en in welke volgorde, hoe je kunt controleren of je naar het volgende kunt gaan en tot waar het geleerde reikt. De hulpmiddelen van een niveau worden op de proef gesteld in het volgende: soms blijven ze geldig en soms tonen ze hun grens.",
 "tarjeta": "Twaalf niveaus op volgorde, van het syllogisme tot bewijzen met Isabelle. Begin hier als je niet weet waar te beginnen.",
 "abrir": "Bekijk de leerroute",
 "nivel": "Nivel {n}",
 "meta": "Aan het eind weet je:",
 "pasos": "Wat te doen, in deze volgorde",
 "control": "Controlepunt:",
 "falta": "In voorbereiding:",
 "limite": "Tot waar reikt:",
 "hecho": "Ik heb het gehaald",
 "progreso": "Je hebt {n} van de {t} niveaus gehaald.",
 "progresoNada": "Vink elk niveau aan wanneer je het controlepunt hebt gehaald: het wordt alleen in deze browser opgeslagen.",
 "noAqui": "staat niet op deze website",
 "enLaDe1o": "op de website van het 1e jaar",
 "mapaIntro": "Klik op een niveau om de pagina te openen. Het gemarkeerde vak is het volgende dat aan de beurt is.",
 "estHecho": "gehaald",
 "estSig": "volgende",
 "anterior": "Vorige niveau",
 "siguiente": "Volgende niveau",
 "volverMapa": "Kaart van de leerroute",
 "etapas": [
  {
   "titulo": "Klassieke logica",
   "de": 1,
   "a": 2
  },
  {
   "titulo": "Uitspraken, wetten en klassen",
   "de": 3,
   "a": 5
  },
  {
   "titulo": "Predicaten en toepassing",
   "de": 6,
   "a": 9
  },
  {
   "titulo": "Isabelle: bewijzen met een programma",
   "de": 10,
   "a": 12
  }
 ],
 "guiaTit": "Werkwijzer",
 "guiaObj": "Doel:",
 "guiaRec": "Route",
 "guiaPreg": "Vragen: voeg premissen toe en verwijder ze",
 "guiaRub": "Beoordelingsrubric van het controlepunt",
 "guiaNiv": [
  "Expert",
  "Gevorderd",
  "Onderweg",
  "Startniveau"
 ],
 "ramasTit": "Zijtakken",
 "ramasIntro": "Je kunt er vanaf het aangegeven niveau in stappen, zonder het hoofdpad te verlaten.",
 "desde": "Vanaf niveau {n}",
 "puentesTit": "Bruggen: dezelfde wet in vijf talen",
 "puentes": {
  "cab": [
   "Uitspraken",
   "Verzamelingen",
   "Booleaanse algebra",
   "Gewone getallen (met 0 en 1)",
   "Poorten"
  ],
  "filas": [
   [
    "¬p",
    "Aᶜ",
    "x′",
    "1 − x",
    "NOT"
   ],
   [
    "p ∧ q",
    "A ∩ B",
    "x · y",
    "x · y",
    "AND"
   ],
   [
    "p ∨ q",
    "A ∪ B",
    "x + y (met 1 + 1 = 1)",
    "x + y − x · y",
    "OR"
   ],
   [
    "¬(p ∧ q) ↔ ¬p ∨ ¬q",
    "(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
    "(x · y)′ = x′ + y′",
    "1 − x · y = (1 − x) + (1 − y) − (1 − x)(1 − y)",
    "NAND = OR van twee NOT"
   ],
   [
    "tautologie",
    "U, het universum",
    "1",
    "altijd 1",
    "de altijd brandende lamp"
   ],
   [
    "tegenspraak",
    "∅, de lege verzameling",
    "0",
    "altijd 0",
    "de altijd gedoofde lamp"
   ]
  ],
  "nota": "Elke rij zegt vijf keer hetzelfde. Controleer het maar: de wet van De Morgan is te zien in een waarheidstabel, in een venndiagram, door te rekenen met 0 en 1, en met twee poorten."
 },
 "niveles": [
  {
   "n": 1,
   "titulo": "Het syllogisme: geldigheid, waarheid en graden van algemeenheid",
   "meta": "dat een redenering geldig kan zijn met onware premissen en ongeldig met alles waar; wat deductie en inductie is; en dat “alle”, “sommige” en “geen” verschillende graden van algemeenheid zijn, die alleen een geldige redenering opleveren als ze goed worden gecombineerd.",
   "pasos": [
    {
     "t": "Logica en argumentatie (thema 4): geldigheid en waarheid, deductie en inductie",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Hints: geldig of waar?",
     "h": "#pistas/fil-validez"
    },
    {
     "t": "Syllogismen: de vier proposities (A, E, I, O), de drie termen, de figuren en de regels",
     "h": "#logica/silogismos"
    },
    {
     "t": "Drogredenen in het syllogisme: welke regel elke overtreedt",
     "h": "#logica/falacias"
    }
   ],
   "control": {
    "t": "Quiz: geldigheid en waarheid, deductie en inductie",
    "h": "#cuestionarios/fil-validez-q",
    "mas": [
     {
      "t": "Quiz van thema 4",
      "h": "#cuestionarios/fil-t4-banco"
     }
    ]
   },
   "limite": "Het syllogisme werkt met groepen dingen en met drie termen. Het weet niet wat het moet doen met zinnen die verbonden zijn door “als…, dan” of door “of”: dat komt in niveau 3."
  },
  {
   "n": 2,
   "titulo": "Van het syllogisme naar de tekening: Euler en Venn",
   "meta": "elke propositie en elk syllogisme vertalen naar een eulerdiagram en een venndiagram, en in de tekening aflezen of de conclusie al in de premissen zit.",
   "pasos": [
    {
     "t": "Logica en argumentatie (thema 4): diagrammen van Euler en Venn",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Syllogismen: de diagrammen van de premissen en van de conclusie",
     "h": "#logica/silogismos"
    },
    {
     "t": "Syllogismen, tot slot: acht syllogismen van de Venn-diagram stap voor stap, met één waarin Euler misleidt",
     "h": "#logica/silogismos"
    }
   ],
   "control": {
    "t": "Quiz: proposities, klassen en diagrammen van Euler en Venn",
    "h": "#cuestionarios/fil-venn-q"
   },
   "limite": "Euler illustreert maar bewijst niet: één enkele tekening kan misleiden. Venn bewijst wel, maar met drie verzamelingen wordt het al lastig, en hij kan geen relaties tussen dingen tekenen."
  },
  {
   "n": 3,
   "titulo": "Propositielogica",
   "meta": "de connectieven, eerst door hun gebruik en dan door hun naam; zinnen formaliseren met “alleen als”, “tenzij” of “noch… noch”; waarheidstabellen maken; een tautologie en een contradictie herkennen; en zien dat dezelfde logica een schakeling laat werken.",
   "pasos": [
    {
     "t": "Laboratorium, “Zullen we praten?”: leid af wat een connectief betekent door hoe het wordt gebruikt.",
     "h": "#logica/hablamos"
    },
    {
     "t": "Formaliseren: 23 zinnen met een valstrik",
     "h": "#logica/formalizar"
    },
    {
     "t": "Waarheidstabellen: tautologie, contradictie en contingentie",
     "h": "#logica/tablas"
    },
    {
     "t": "Logische poorten: de formule als schakeling",
     "h": "#logica/puertas"
    }
   ],
   "control": {
    "t": "Quiz: formaliseren in de propositielogica",
    "h": "#cuestionarios/fil-formalizar-q",
    "mas": [
     {
      "t": "Quiz: waarheidstabellen en logica",
      "h": "#cuestionarios/fil-logica-q"
     }
    ]
   },
   "limite": "De waarheidstabel beslist alles, maar groeit heel snel: met 5 letters zijn er al 32 rijen. Om te redeneren zonder de hele tabel te maken zijn wetten en regels nodig: niveau 4."
  },
  {
   "n": 4,
   "titulo": "Logische wetten en deductie",
   "meta": "de wetten van de propositielogica, de geldige regels (modus ponens, modus tollens, hypothetisch en disjunctief syllogisme, dilemma) en hun valse imitaties, en stap voor stap een conclusie afleiden zonder de tabel te maken.",
   "pasos": [
    {
     "t": "Logische wetten: 70 wetten, elk controleerbaar in haar tabel",
     "h": "#logica/leyes"
    },
    {
     "t": "Inferentieregels en de oefening “regel of valstrik?”",
     "h": "#logica/inferencia"
    },
    {
     "t": "Logische wetten: de 21 afgeleide regels",
     "h": "#logica/leyes"
    },
    {
     "t": "Laboratorium, “Natuurlijke deductie”: 27 bewijzen regel voor regel, met voorlopige aannames",
     "h": "#logica/deduccion"
    }
   ],
   "control": {
    "t": "De oefening “regel of valstrik?” van Inferentieregels, met 16 goede antwoorden van de 20",
    "h": "#logica/inferencia"
   },
   "limite": "Elke deductieregel is een tautologie uit de tabel: de tabel rechtvaardigt ze en de regels besparen werk. Maar dit alles gaat over hele zinnen, niet over wat erin zit."
  },
  {
   "n": 5,
   "titulo": "Klassen, verzamelingen en Boole-algebra",
   "meta": "de bewerkingen met klassen en verzamelingen, hun wetten, de Boole-algebra en vooral dat het dezelfde wetten zijn als die van de propositielogica, die van het gewone rekenen met 0 en 1 en die van de logische poorten.",
   "pasos": [
    {
     "t": "Logica en argumentatie (thema 4): klassen, bewerkingen, wetten en de paradox van Russell",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Verzamelingswetten: vergelijk twee uitdrukkingen in Venn (en de valstrikwet)",
     "h": "#logica/conjuntos"
    },
    {
     "t": "Logica en argumentatie (thema 4): Boole en de poorten",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Logische poorten: De Morgan met twee poorten",
     "h": "#logica/puertas"
    },
    {
     "t": "Werkplaats van Leibniz: het binaire stelsel en de karakteristieke getallen",
     "h": "#leibniz"
    }
   ],
   "puentes": true,
   "control": {
    "t": "Dezelfde wet (bijvoorbeeld De Morgan) in de vijf talen van de brugtabel schrijven en haar controleren in de waarheidstabel en in Venn.",
    "mas": [
     {
      "t": "Quiz: dezelfde wet in vijf talen",
      "h": "#cuestionarios/fil-boole-q"
     }
    ]
   },
   "limite": "Met klassen zeg je “alle A zijn B”, maar niet “elke A houdt van een of andere B”: je kunt nog niet over elk ding afzonderlijk praten. Dat is niveau 6."
  },
  {
   "n": 6,
   "titulo": "Predicatenlogica: “alle”, “sommige”, “geen”",
   "meta": "lezen “alle”, “sommige” en “geen” op de oude manier en op de huidige manier, met ∀ en ∃; het logisch vierkant en de conversie in zijn twee versies; het probleem van het lege subject; en omgaan met variabelen (x, y): wat gebonden is en wat vrij is.",
   "pasos": [
    {
     "t": "Logisch vierkant, met de traditionele en de huidige lezing, en de conversie",
     "h": "#logica/cuadrado"
    },
    {
     "t": "Kwantoren: A, E, I en O met ∀ en ∃, en de wereld van vijf individuen",
     "h": "#logica/cuantificadores"
    }
   ],
   "control": {
    "t": "Quiz: kwantoren, logisch vierkant en conversie",
    "h": "#cuestionarios/fil-cuantif-q",
    "mas": [
     {
      "t": "De oefening Kwantoren",
      "h": "#logica/cuantificadores"
     }
    ]
   },
   "limite": "Het oude vierkant gaat ervan uit dat er iets is waarover gesproken wordt; de logica van vandaag doet dat niet. Daarom zijn sommige klassieke gevolgtrekkingen (Darapti) alleen geldig als die premisse wordt toegevoegd."
  },
  {
   "n": 7,
   "titulo": "Het geleerde toepassen: klassieke argumenten, paradoxen en drogredenen",
   "meta": "met deze instrumenten argumenten van auteurs, paradoxen en klassieke drogredenen analyseren, en de geldigheid controleren met een waarheidsboom.",
   "pasos": [
    {
     "t": "Klassieke argumenten: Monica, Augustinus en de noodzakelijke en voldoende voorwaarde",
     "h": "#logica/clasicos/monica"
    },
    {
     "t": "Oefeningen: zinnen met logische vorm",
     "h": "#logica/ejercicios"
    },
    {
     "t": "Paradoxen: de leugenaar, de barbier, Zeno…",
     "h": "#logica/paradojas"
    },
    {
     "t": "Klassieke drogredenen",
     "h": "#logica/falacias"
    },
    {
     "t": "Informele drogredenen: de lijst van Rincón en de oefening “Welke drogreden is het?” (20 gevallen)",
     "h": "#logica/falacias"
    },
    {
     "t": "Lab, “Waarheidsboom”: het cogito, het probleem van het kwaad, het dilemma",
     "h": "#logica/arbol"
    },
    {
     "t": "Wat de schildpad tegen Achilles zei",
     "h": "#logica/paradojas/carroll"
    }
   ],
   "control": {
    "t": "Kies een paradox en een drogreden en zeg, met het benodigde hulpmiddel, waar de foute stap zit."
   },
   "limite": "De schildpad van Carroll laat de fundamentele grens zien: een regel kan niet in nog een premisse worden omgezet zonder in een oneindige regressie te vervallen. Om logica toe te passen moet je regels accepteren."
  },
  {
   "n": 8,
   "titulo": "Werelden en relaties",
   "meta": "beslissen of een zin waar is in een concrete wereld, en de eigenschappen van een relatie herkennen (reflexief, symmetrisch, transitief…) en wat er uit welke volgt.",
   "pasos": [
    {
     "t": "Lab, “Figurenwereld”: de vijf uitdagingen",
     "h": "#logica/mundo"
    },
    {
     "t": "Lab, “Relaties”: de vijf uitdagingen",
     "h": "#logica/relaciones"
    },
    {
     "t": "Lab, “Mogelijke werelden”: de eigenschappenkaart van de herhaling",
     "h": "#logica/mundos"
    }
   ],
   "control": {
    "t": "De uitdagingen van de Figurenwereld en van Relaties",
    "h": "#logica/mundo",
    "mas": [
     {
      "t": "Quiz: eigenschappen van relaties en kleine werelden",
      "h": "#cuestionarios/fil-relaciones-q"
     }
    ]
   },
   "limite": "Een kleine wereld kan een zin weerleggen, maar niet bewijzen: er zijn zinnen die alleen in grote of oneindige werelden misgaan."
  },
  {
   "n": 9,
   "titulo": "Van de logica naar de wiskunde",
   "meta": "een wiskundig bewijs volgen en de zwakke stap erin vinden, onderscheiden wat bewezen is van wat wordt voorondersteld, en zien welke oordelen Kant onderscheidde en wat daarvan overblijft in de logica van vandaag.",
   "pasos": [
    {
     "t": "Lab, “Begeleide bewijzen”: wortel van 2, Euclides, Meno, Anselmus",
     "h": "#logica/demos"
    },
    {
     "t": "Lab, “Oordelen van Kant”",
     "h": "#logica/kant"
    }
   ],
   "control": {
    "t": "Maak een begeleid bewijs van begin tot eind zonder in welke stap dan ook een fout te maken."
   },
   "guia": {
    "obj": "Volg een bewijs van begin tot eind, zeg wat elke stap rechtvaardigt en scheid wat wordt bewezen van wat wordt voorondersteld.",
    "rec": [
     "Begeleide bewijzen, “√2 is irrationaal”: voer alle stappen uit zonder naar de hints te kijken.",
     "“Er zijn oneindig veel priemgetallen”: let op de stap die uit niets wordt afgeleid (het construeren van N).",
     "“Het vierkant van Meno”: wat weet de slaaf aan het begin en wat aan het einde.",
     "“Het ontologisch argument”: volg de stappen en verbind elk bezwaar met de stap waarop het zich richt.",
     "Oordelen van Kant: classificeer “7 + 5 = 12” en leg uit waarom Kant het niet als analytisch beschouwde."
    ],
    "preg": [
     "In het bewijs van √2, verwijder de premisse “de breuk is vereenvoudigd”: is er nog steeds een tegenspraak? Welke stap botst niet meer?",
     "In hetzelfde bewijs, waar wordt gebruikt dat elk geheel getal even of oneven is? Als je dat niet zou accepteren, welke stap zou dan wegvallen?",
     "In die van Euclides, verwijder “elk getal groter dan 1 heeft een priemdeler”: kun je doorgaan? Waarom is het niet genoeg om te zeggen dat N priem is?",
     "Euclides construeert N. Is het een premisse, een regel of een stap? Zou het kunnen worden geschreven als een regel van de natuurlijke deductie van niveau 4?",
     "In het ontologisch argument, verwijder de premisse van stap 4 (in de werkelijkheid bestaan is groter): is er een tegenspraak in stap 5? Breng het in verband met het bezwaar van Kant.",
     "Zet in plaats daarvan het eiland van Gaunilo: schrijf het argument op met “het eiland waarboven niets groters kan worden gedacht”. Welke premisse zou je moeten accepteren om het te laten werken?",
     "Kant zegt dat “7 + 5 = 12” synthetisch a priori is. Welke premisse over het concept “som” zou moeten worden toegevoegd om het analytisch te maken, zoals Leibniz dacht?"
    ],
    "rub": [
     "Hij legt elke stap van een bewijs uit met zijn rechtvaardiging, zegt welke premissen hij gebruikt en welke als vanzelfsprekend worden aangenomen, en stelt een geval voor waarin het verwijderen van een premisse het bewijs breekt.",
     "Hij maakt het begeleide bewijs zonder fouten en noemt de premissen, maar zegt niet altijd wat er zou gebeuren als er een zou ontbreken.",
     "Hij volgt het bewijs met behulp van de hints; verwart soms een premisse met een afgeleide stap.",
     "Hij herhaalt de stappen zonder te kunnen zeggen waarom elke stap volgt."
    ]
   },
   "limite": "Een met de hand geschreven bewijs kan een stap overslaan zonder dat iemand het merkt. En als een programma elke stap zou controleren? Dat komt nu."
  },
  {
   "n": 10,
   "titulo": "Isabelle, niveau 1: de werelden van de tijd",
   "meta": "wat een bewijsassistent is, tegenmodellen zoeken en premissen weghalen om te zien welke nodig zijn, en je eigen proposities en premissen schrijven.",
   "pasos": [
    {
     "t": "Laboratorium, “Mogelijke werelden”: “Over Isabelle, en dank”",
     "h": "#logica/mundos"
    },
    {
     "t": "Laboratorium, “Mogelijke werelden”, praktijktheorie: tijd, duur en schepping",
     "h": "#logica/mundos"
    },
    {
     "t": "Laboratorium, “Mogelijke werelden”, theorie “De tijd, gedefinieerd”",
     "h": "#logica/mundos"
    },
    {
     "t": "“✎ Schrijf je eigen propositie”, in een van de twee werelden",
     "h": "#logica/mundos"
    }
   ],
   "control": {
    "t": "In “De tijd, gedefinieerd” uitleggen waarom propositie 9 niet dwingt om iets ongeschapens te aanvaarden: welke drie stellingen niet samen kunnen."
   },
   "guia": {
    "obj": "Begrijpen wat een bewijsassistent doet, de zoeker voor tegenmodellen gebruiken om te zien welke premissen nodig zijn en eigen proposities schrijven.",
    "rec": [
     "Tafel “Mogelijke werelden”, “Over Isabelle, en dank”: wat Isabelle controleert en wat niet.",
     "Praktijktheorie: de “startroute” van de tafel, in volgorde.",
     "Theorie “De tijd, gedefinieerd”: de proposities 9 en 10.",
     "“✎ Schrijf je eigen propositie” in een van de twee theorieën."
    ],
    "preg": [
     "In de praktijkwereld, propositie 2: klik op “Volgt het?” zoals het er staat. Welke premisse ontbreekt? Voeg die toe en probeer opnieuw.",
     "Propositie 4: staat er zonder de betwistbare premisse en er verschijnt een tegenmodel. Op welk reëel geval lijkt dat? Zou je de premisse aanvaarden?",
     "Propositie 9 van de praktijkwereld: hoeveel dingen heeft de wereld nodig opdat iets twee scheppers heeft? Vink “Niets heeft twee scheppers” aan en leg uit wat er verandert.",
     "In “De tijd, gedefinieerd”: welke premissen uit de praktijkwereld zijn theorema's geworden toen de tijd werd gedefinieerd? Waarom is dat een vooruitgang?",
     "Propositie 9 van de gedefinieerde tijd: haal elke keer een van de drie stellingen weg die botsen. Welke zou jij weghalen en waarom?",
     "Schrijf een eigen propositie waarvan je denkt dat die waar is. Zoek een tegenmodel; als er geen verschijnt, is die dan bewezen? Wat zou Isabelle zeggen?",
     "Wat is het verschil tussen “ik heb geen wereld gevonden waarin die faalt” en “Bewezen in Isabelle”?"
    ],
    "rub": [
     "Gebruikt de zoeker om te ontdekken welke premisse nodig is, interpreteert het tegenmodel met een reëel geval en maakt nauwkeurig onderscheid tussen geen tegenmodel vinden en bewezen zijn.",
     "Vindt de ontbrekende premissen en leest de tegenmodellen, maar vindt het moeilijk om ze met reële gevallen in verband te brengen.",
     "Doet de proposities van de route met hulp; verwart soms “faalt niet in kleine werelden” met “bewezen”.",
     "Klikt op de knoppen zonder te interpreteren wat er te zien is."
    ]
   },
   "limite": "De zoeker van de pagina bekijkt alleen werelden van maximaal vier dingen; wat hij niet vindt, is niet bewezen. Wat bewezen is, is wat Isabelle heeft gecontroleerd."
  },
  {
   "n": 11,
   "titulo": "Isabelle, niveau 2: de vijf wegen",
   "meta": "een beroemd argument in zijn premissen splitsen, zien welke premisse het werk doet bij elke stap en waar de bezwaren de vinger op leggen.",
   "pasos": [
    {
     "t": "Laboratorium, “Mogelijke werelden”, theorie “De vijf wegen”",
     "h": "#logica/mundos"
    },
    {
     "t": "Laboratorium, “Mogelijke werelden”, theorie “De antinomieën van Kant”: these, antithese, Kants uitweg en andere",
     "h": "#logica/mundos"
    },
    {
     "t": "Laboratorium, “Mogelijke werelden”, theorie “Van het zijn naar de kosmos”: Parmenides, zijn erfgenamen en de Demiurg",
     "h": "#logica/mundos"
    },
    {
     "t": "De vijf wegen en waar ze vandaan komen",
     "h": "#teoria/hf-cinco-vias"
    }
   ],
   "control": {
    "t": "Leg in je eigen woorden het tegenmodel van proposities 5 en 9 uit: welke premisse ontbreekt en waarom."
   },
   "guia": {
    "obj": "Een beroemd argument in zijn premissen splitsen, zien welke het werk doet bij elke stap en waar de bezwaren de vinger op leggen, zonder een oordeel te vellen over de onderliggende kwestie.",
    "rec": [
     "Lees de verkenning “De vijf wegen en waar ze vandaan komen”.",
     "Tafel “Mogelijke werelden”, theorie “De vijf wegen”: elke weg met zijn premissen.",
     "Proposities 5 en 9: zoek hun tegenmodellen.",
     "De notitie over oorzaken “op zich” en de tijd, onderaan de definities."
    ],
    "preg": [
     "Haal in de eerste weg de premisse weg die de oneindige teruggang verbiedt. Welke wereld bouwt de tafel? Is dat een mogelijke wereld?",
     "De wegen spreken niet over een begin in de tijd, en voor Thomas is God niet in de tijd: hij is eeuwig (Summa theologiae I, quaestio 10). In de keten van tweede oorzaken werkt elke oorzaak tegelijk met zijn gevolg; dat “tegelijk” geldt voor de tweede oorzaken, niet voor God. De afhankelijkheid loopt maar in één richting: het gevolg hangt af van de oorzaak, en niet omgekeerd. Welke premisse zou je moeten toevoegen om over een eerste ogenblik te spreken? Heeft een van de wegen die nodig?",
     "Propositie 5: waar zit de sprong van “elk ding ontbreekt op een bepaald ogenblik” naar “er is een ogenblik waarop er niets is”? Schrijf het met ∀ en ∃ (niveau 6).",
     "Propositie 9: waarom zouden een eerste beweger en een eerste oorzaak twee verschillende dingen kunnen zijn? Welke premisse zou nodig zijn om ze dezelfde te laten zijn?",
     "Thomas verwerpt dat iets oorzaak van zichzelf is. Waar komt dat idee voor in de tafel (in de premissen of in de notities)? Wat zou er met de tweede weg gebeuren als het werd aanvaard?",
     "Thomas acht aantoonbaar dat alles voor zijn bestaan van God afhangt (Summa Theologiae I, quaestio 44) en als geloofswaarheid, noch bewijsbaar noch weerlegbaar, dat de wereld in de tijd is begonnen (I, quaestio 46, artikelen 1 en 2). Waaraan merk je dat verschil in de premissen van de tafel?",
     "Kies de premisse die je het meest betwistbaar vindt. Is het een probleem van logica of van filosofie?"
    ],
    "rub": [
     "Identificeert de premisse die het werk doet in elke weg, legt het tegenmodel van proposities 5 en 9 uit en maakt onderscheid tussen de geldigheid van het argument en de aanvaardbaarheid van de premissen, zonder de achterliggende kwestie als afgedaan te beschouwen.",
     "Legt de twee tegenmodellen uit, maar weet niet altijd welke premisse ze uitsluit.",
     "Volgt de tafel en herkent de premissen, maar vermengt de logische kritiek met de mening over de conclusie.",
     "Geeft een oordeel over het bestaan van God in plaats van het argument te analyseren."
    ]
   },
   "limite": "Dat één premisse al het werk doet, maakt haar nog niet onwaar: beslissen of je haar aanvaardt, is geen logica meer, maar filosofie."
  },
  {
   "n": 12,
   "titulo": "Isabelle, niveau 3: de Ethica van Spinoza",
   "meta": "deel I van de Ethica als een systeem lezen, de premissen ontdekken die de auteur niet opschrijft, zien welke overbodig zijn en welke botsen, en begrijpen wat het betekent dat een programma een heel werk controleert.",
   "pasos": [
    {
     "t": "Laboratorium, “Mogelijke werelden”, theorie “Spinoza, Ethica I”: lagen, “Is er een premisse overbodig?” en “Schrijf je eigen propositie”",
     "h": "#logica/mundos"
    }
   ],
   "control": {
    "t": "Een propositie kiezen, alle premissen verwijderen die je kunt en schriftelijk verdedigen of de meest betwistbare aanvaardbaar is."
   },
   "guia": {
    "obj": "Deel I van de Ethica als een systeem lezen, de premissen ontdekken die Spinoza niet opschrijft, zien welke overbodig zijn en welke botsen, en begrijpen wat het betekent dat een programma een heel werk controleert.",
    "rec": [
     "Tafel “Mogelijke werelden”, theorie “Spinoza, Ethica I”: begin met de eerste laag.",
     "Kies een propositie en klik op “Is er een premisse overbodig?”.",
     "Zoek een premisse die begint met H_ (de premissen die Spinoza niet opschrijft) en lees haar rustig.",
     "“✎ Schrijf je eigen propositie” met de termen van de Ethica."
    ],
    "preg": [
     "Kies een propositie. Verwijder de premissen één voor één: welke zijn echt nodig? Komt dat overeen met de premissen die Spinoza in zijn bewijs aanhaalt?",
     "Welke H_-premisse vind je het meest betwistbaar? Verwijder haar en bekijk het tegenmodel: wat voor soort wereld laat het toe?",
     "Als twee premissen botsen, welke zou je dan verwijderen? Welke proposities zouden daarmee ook vervallen?",
     "Spinoza zegt dat God oorzaak van zichzelf is en Thomas verwerpt dat. Met de tafel, welke definitie of welk axioma van de Ethica maakt de oorzaak van zichzelf mogelijk?",
     "De Ethica spreekt over attributen van de substantie, die eigenschappen van eigenschappen zijn. Waarom gaat dat verder dan de eerste-ordelogica (niveau 6)?",
     "Wat heeft een lezer eraan wanneer een programma een heel werk controleert? Wat kan het programma hem niet vertellen?"
    ],
    "rub": [
     "Kiest een propositie, verwijdert alle premissen die hij kan en rechtvaardigt dat met tegenmodellen, en verdedigt schriftelijk of de meest betwistbare premisse aanvaardbaar is, waarbij hij logica en filosofie onderscheidt.",
     "Verwijdert premissen en leest de tegenmodellen, maar de schriftelijke verdediging is kort of scheidt logica en filosofie niet.",
     "Gebruikt “Is er een premisse overbodig?” en beschrijft wat eruit komt, zonder het te beoordelen.",
     "Slaagt er niet in de premissen in verband te brengen met het bewijs van Spinoza."
    ]
   },
   "limite": "Spinoza spreekt over attributen van de substantie, en spreken over eigenschappen van eigenschappen gaat verder dan de predicatenlogica van de eerste orde: het is de poort naar de hogere-ordelogica, die van Isabelle/HOL."
  }
 ],
 "ramas": [
  {
   "titulo": "Informele drogredenen en retorica",
   "desde": 1,
   "txt": "De valkuilen die niet over de vorm maar over de inhoud gaan, en de kunst van het discussiëren.",
   "pasos": [
    {
     "t": "Drogredenen: de lijst van de informele, gekoppeld aan het woordenboek, en “Welke drogreden is het?”",
     "h": "#logica/falacias"
    },
    {
     "t": "Duel van redenen",
     "h": "#duelo"
    },
    {
     "t": "De kunst van het woord",
     "h": "#palabra"
    }
   ]
  },
  {
   "titulo": "Geschiedenis van de logica",
   "desde": 1,
   "txt": "Aristoteles, de stoïcijnen, de middeleeuwers, Leibniz, Kant, Frege en Russell: waar elk instrument vandaan komt.",
   "pasos": [
    {
     "t": "De stoïcijnse logica: de vijf onbewijsbare redeneringen van Chrysippus",
     "h": "#logica/clasicos/estoicos"
    },
    {
     "t": "De middeleeuwse logica: suppositie, consequenties en verplichtingen",
     "h": "#logica/clasicos/medievales"
    },
    {
     "t": "Het hellenisme (Filosofie 1e): stoïcijnen en epicureeërs",
     "h": "#teoria/fil-helenismo"
    },
    {
     "t": "Workshop Leibniz",
     "h": "#leibniz"
    },
    {
     "t": "Kant: de oordelen en de logica van vandaag",
     "h": "#teoria/hf-kant-juicios"
    },
    {
     "t": "De analytische filosofie: Russell en Wittgenstein",
     "h": "#teoria/hf-analitica"
    }
   ]
  },
  {
   "titulo": "Inductie en abductie",
   "desde": 1,
   "txt": "Redeneren zonder zekerheid: generaliseren, vergelijken en de beste verklaring zoeken.",
   "pasos": [
    {
     "t": "Laboratorium, “Inductie en abductie”: vier manieren om zonder zekerheid te redeneren, het probleem van Hume, de abductie van Peirce en twintig gevallen",
     "h": "#logica/induccion"
    },
    {
     "t": "Logica en argumentatie (Thema 4): abductie en analogie",
     "h": "#teoria/fil-t4"
    }
   ]
  }
 ]
};
