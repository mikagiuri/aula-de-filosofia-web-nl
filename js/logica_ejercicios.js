// Generado por web_i18n/i18n_rebuild.js (nl) a partir de web/js/logica_ejercicios.js. No editar a mano: editar la memoria tm/nl.json y regenerar.
const LOGX = {
 "t": {
  "puentesEjTit": "Oefening: dezelfde wet in de vijf talen",
  "puentesEjIntro": "Elke wet wordt in een van de vijf talen gegeven. Schrijf hem in de andere vier en klap daarna de oplossing open. Om hem te controleren, gebruik je de waarheidstabel (Waarheidstabellen) of reken je met 0 en 1. Een van de tien is een valstrik.",
  "puentesDada": "Wordt gegeven in «{l}»:",
  "puentesVer": "Bekijk de wet in de vijf talen",
  "silEjTit": "Oefening: van het syllogisme naar het Venn-diagram, stap voor stap",
  "silEjIntro": "Voor elk syllogisme: welke zones elke premisse arceert (eerst de universele), waar de ✕ komt en of de conclusie al getekend is. Doe het op papier of in het diagram hierboven en bekijk daarna de oplossing. Een ervan is een geval waarin Euler misleidt en Venn niet.",
  "silCargar": "Bekijk in het diagram",
  "silSol": "Stapsgewijze oplossing",
  "silMayor": "Majorpremisse:",
  "silMenor": "Minorpremisse:",
  "silCruz": "De ✕:",
  "silConcl": "De conclusie:",
  "silEuler": "Euler en Venn:",
  "silValido": "Geldig",
  "silNoValido": "Niet geldig",
  "silTrad": "Alleen geldig als wat de middenterm zegt bestaat.",
  "nomTit": "Informele drogredenen: de lijst van het Rincón",
  "nomIntro": "De valstrikken die niet in de vorm van de redenering zitten, maar in de inhoud: wat er gezegd wordt, over wie en met welk doel. Elke naam leidt naar de bijbehorende woordenboekpagina, waar ze gedefinieerd worden; hier vind je andere namen, een voorbeeld en hoe je de drogreden kunt stoppen.",
  "nomOtros": "Andere namen:",
  "nomEj": "Voorbeeld:",
  "nomParar": "Hoe je haar stopt:",
  "qfTit": "Oefening: welke drogreden is het?",
  "qfIntro": "Twintig gevallen. Bij drie daarvan is er geen enkele drogreden: je moet ook een goed argument kunnen herkennen.",
  "qfNo": "Dit is geen drogreden",
  "qfBien": "Goed.",
  "qfMal": "Nee: het is «{x}».",
  "qfCuenta": "Goed: {a} van {n}"
 },
 "lenguajes": [
  "Uitspraken",
  "Verzamelingen",
  "Booleaanse algebra",
  "Gewone getallen (met 0 en 1)",
  "Poorten"
 ],
 "puentes": [
  {
   "ley": "Dubbele negatie",
   "dada": 0,
   "v": [
    "¬¬p ↔ p",
    "(Aᶜ)ᶜ = A",
    "x″ = x",
    "1 − (1 − x) = x",
    "NOT van NOT = de directe draad"
   ]
  },
  {
   "ley": "Commutativiteit van de conjunctie",
   "dada": 1,
   "v": [
    "p ∧ q ↔ q ∧ p",
    "A ∩ B = B ∩ A",
    "x · y = y · x",
    "x · y = y · x",
    "AND met verwisselde ingangen = dezelfde AND"
   ]
  },
  {
   "ley": "Idempotentie van de disjunctie",
   "dada": 2,
   "v": [
    "p ∨ p ↔ p",
    "A ∪ A = A",
    "x + x = x",
    "x + x − x · x = x",
    "OR met beide ingangen aan elkaar = de directe draad"
   ]
  },
  {
   "ley": "Absorptie",
   "dada": 3,
   "v": [
    "p ∧ (p ∨ q) ↔ p",
    "A ∩ (A ∪ B) = A",
    "x · (x + y) = x",
    "x · (x + y − x · y) = x",
    "AND van x met (x OR y) = x"
   ]
  },
  {
   "ley": "Uitgesloten derde",
   "dada": 4,
   "v": [
    "p ∨ ¬p (tautologie)",
    "A ∪ Aᶜ = U",
    "x + x′ = 1",
    "x + (1 − x) − x · (1 − x) = 1",
    "x OR (NOT x): de lamp altijd aan"
   ]
  },
  {
   "ley": "Non-contradictie",
   "dada": 0,
   "v": [
    "¬(p ∧ ¬p) (tautologie: p ∧ ¬p is altijd onwaar)",
    "A ∩ Aᶜ = ∅",
    "x · x′ = 0",
    "x · (1 − x) = 0",
    "x AND (NOT x): de lamp altijd uit"
   ]
  },
  {
   "ley": "De Morgan, voor de disjunctie",
   "dada": 1,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∧ ¬q",
    "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ",
    "(x + y)′ = x′ · y′",
    "1 − (x + y − x · y) = (1 − x) · (1 − y)",
    "NOR = AND van twee NOT"
   ]
  },
  {
   "ley": "Distributiviteit van de conjunctie over de disjunctie",
   "dada": 2,
   "v": [
    "p ∧ (q ∨ r) ↔ (p ∧ q) ∨ (p ∧ r)",
    "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
    "x · (y + z) = x · y + x · z",
    "x · (y + z − y · z) = x · y + x · z − x · y · z",
    "x AND (y OR z) = (x AND y) OR (x AND z)"
   ]
  },
  {
   "ley": "Neutraal element van de conjunctie",
   "dada": 3,
   "v": [
    "p ∧ (q ∨ ¬q) ↔ p",
    "A ∩ U = A",
    "x · 1 = x",
    "x · 1 = x",
    "AND met een ingang die altijd op 1 staat = de directe kabel"
   ]
  },
  {
   "ley": "Instinker: een “wet” die dat niet is",
   "dada": 2,
   "trampa": true,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∨ ¬q: onwaar met p waar en q onwaar",
    "(A ∪ B)ᶜ = Aᶜ ∪ Bᶜ: onwaar als er iets in A zit en niet in B",
    "(x + y)′ = x′ + y′: met x = 1, y = 0 geeft dat 0 = 1",
    "1 − (x + y − x · y) = (1 − x) + (1 − y) − (1 − x) · (1 − y): met x = 1, y = 0 geeft dat 0 = 1",
    "NOR = OR van twee NOT: nee; NOR is AND van twee NOT, en OR van twee NOT is NAND"
   ],
   "nota": "Wordt in Boole gepresenteerd alsof het een wet is, maar dat is het niet: het is de fout om de negatie te verdelen zonder de bewerking te veranderen. Eén rij van de tabel (of een berekening met 0 en 1) volstaat om die te weerleggen. De echte wet is de wet van De Morgan hierboven."
  }
 ],
 "silogismos": [
  {
   "code": "AAA-1",
   "S": "hond",
   "P": "gewervelde",
   "M": "zoogdier",
   "tipo": "si",
   "mayor": "“Elk zoogdier is een gewervelde”: arceer het deel van “zoogdier” dat buiten “gewervelde” valt (de twee zones: die binnen “hond” en die erbuiten).",
   "menor": "“Elke hond is een zoogdier”: arceer het deel van “hond” dat buiten “zoogdier” valt (twee zones).",
   "cruz": "Er is geen enkele: beide premissen zijn universeel.",
   "concl": "“Elke hond is een gewervelde” vereist dat het deel van “hond” buiten “gewervelde” leeg is. De twee zones zijn al grijs, één door elke premisse: de conclusie is al getekend. Het is Barbara."
  },
  {
   "code": "EAE-1",
   "S": "hagedis",
   "P": "dier met haar",
   "M": "reptiel",
   "tipo": "si",
   "mayor": "“Geen enkel reptiel is een dier met haar”: arceer waar “reptiel” en “dier met haar” elkaar kruisen (twee zones).",
   "menor": "“Elke hagedis is een reptiel”: arceer het deel van “hagedis” buiten “reptiel” (twee zones).",
   "cruz": "Er is geen enkele.",
   "concl": "“Geen enkele hagedis is een dier met haar” vereist dat de kruising van “hagedis” en “dier met haar” leeg is. Eén van de zones is gearceerd door de majorpremisse en de andere door de minorpremisse: het is al getekend. Het is Celarent."
  },
  {
   "code": "AII-1",
   "S": "voorwerp op tafel",
   "P": "geleider",
   "M": "metaal",
   "tipo": "si",
   "mayor": "“Elk metaal is een geleider”: arceer het deel van “metaal” buiten “geleider” (twee zones). Doe dit eerst omdat het universeel is.",
   "menor": "“Een voorwerp op tafel is metaal”: vraagt om een ✕ in de kruising van “voorwerp op tafel” en “metaal”.",
   "cruz": "Die kruising heeft twee zones, maar degene die buiten “geleider” ligt is al grijs: de ✕ komt in de andere, binnen alle drie de cirkels.",
   "concl": "“Een voorwerp op tafel is een geleider” vraagt om een ✕ in de kruising van “voorwerp op tafel” en “geleider”: die is er al. Het is Darii."
  },
  {
   "code": "EIO-1",
   "S": "getal uit de lijst",
   "P": "even getal",
   "M": "priemgetal groter dan 2",
   "tipo": "si",
   "mayor": "“Geen enkel priemgetal groter dan 2 is een even getal”: arceer de kruising van “priemgetal groter dan 2” en “even getal” (twee zones).",
   "menor": "“Een getal uit de lijst is een priemgetal groter dan 2”: vraagt om een ✕ in de kruising van “getal uit de lijst” en “priemgetal groter dan 2”.",
   "cruz": "Van de twee zones is degene die binnen “even getal” ligt al grijs: de ✕ komt in de andere, buiten “even getal”.",
   "concl": "“Een getal uit de lijst is geen even getal” vraagt om een ✕ in “getal uit de lijst” buiten “even getal”: die is er al. Het is Ferio."
  },
  {
   "code": "AAA-2",
   "S": "hond",
   "P": "kat",
   "M": "zoogdier",
   "tipo": "no",
   "mayor": "“Elke kat is een zoogdier”: arceer het deel van “kat” buiten “zoogdier”.",
   "menor": "“Elke hond is een zoogdier”: arceer het deel van “hond” buiten “zoogdier”.",
   "cruz": "Er is geen enkele.",
   "concl": "“Elke hond is een kat” zou vereisen dat het deel van “hond” buiten “kat” leeg is. Eén van de zones, degene die binnen “zoogdier” ligt, blijft wit: de conclusie is niet getekend. Het is niet geldig: de middenterm (“zoogdier”) wordt in geen enkele premisse in zijn volledige omvang genomen."
  },
  {
   "code": "AII-2",
   "S": "wetenschapper",
   "P": "dichter",
   "M": "dromer",
   "tipo": "no",
   "mayor": "“Elke dichter is een dromer”: arceer het deel van “dichter” buiten “dromer”.",
   "menor": "“Een wetenschapper is een dromer”: vraagt om een ✕ in de kruising van “wetenschapper” en “dromer”.",
   "cruz": "Die kruising heeft twee zones, één binnen “dichter” en één erbuiten, en beide blijven wit: we weten niet in welke die wetenschapper zit. De ✕ komt op de lijn die ze scheidt.",
   "concl": "“Een wetenschapper is een dichter” zou een ✕ vereisen die duidelijk binnen de kruising van “wetenschapper” en “dichter” ligt. De ✕ staat op de lijn: het is niet getekend. Het is niet geldig.",
   "euler": "Geval waarin Euler misleidt: het is gemakkelijk om “wetenschapper” zo te tekenen dat hij “dichter” snijdt binnen “dromer”, en dan lijkt het dat een wetenschapper een dichter is. Maar er is een andere tekening die even trouw is aan de premissen, waarin de wetenschappers die dromers zijn buiten de dichters vallen. Euler dwingt je een tekening te kiezen; Venn kiest niet: hij zet de ✕ op de lijn."
  },
  {
   "code": "AAI-3",
   "S": "paard",
   "P": "wit",
   "M": "eenhoorn",
   "tipo": "trad",
   "mayor": "“Elke eenhoorn is wit”: arceer het deel van “eenhoorn” buiten “wit”.",
   "menor": "“Elke eenhoorn is een paard”: arceer het deel van “eenhoorn” buiten “paard”.",
   "cruz": "Er is geen enkele: beide premissen zijn universeel.",
   "concl": "“Een of ander paard is wit” vraagt om een ✕, en die is er niet: de conclusie is niet getekend, ook al is die waar. Het is Darapti: Aristoteles achtte die geldig omdat hij ervan uitging dat de termen niet leeg zijn; bij “eenhoorn” gaat die aanname niet op. Met de premisse “er is een of andere eenhoorn” (een ✕ in de enige zone van “eenhoorn” die wit blijft) lukt het wel."
  },
  {
   "code": "OAO-3",
   "S": "denker",
   "P": "schrijver van boeken",
   "M": "filosoof",
   "tipo": "si",
   "mayor": "“Een of andere filosoof is geen schrijver van boeken”: vraagt om een ✕ in “filosoof” buiten “schrijver van boeken”. Er wordt gewacht op de minorpremisse, die universeel is.",
   "menor": "“Elke filosoof is een denker”: arceer het deel van “filosoof” buiten “denker” (twee zones).",
   "cruz": "De zone van “filosoof” buiten “schrijver van boeken” heeft twee delen; het deel dat buiten “denker” ligt, is al grijs. De ✕ komt in het andere deel: een denker-filosoof die geen boeken schreef (Socrates bijvoorbeeld).",
   "concl": "“Een of andere denker is geen schrijver van boeken” vraagt om een ✕ in “denker” buiten “schrijver van boeken”: die staat er al. Het is Bocardo."
  }
 ],
 "falacias": [
  {
   "g": "g-fil-ad-hominem",
   "nom": "Ad hominem",
   "otros": "Persoonlijke aanval; de bron vergiftigen; tu quoque is een variant",
   "ej": "“Schenk er geen aandacht aan: hij zegt het omdat hij van de bètavakken is.”",
   "parar": "De persoon van de argumentatie scheiden: “En wat is er mis met wat hij zegt?”"
  },
  {
   "g": "g-fil-tu-quoque",
   "nom": "Tu quoque",
   "otros": "Jij ook; beroep op hypocrisie",
   "ej": "“Zeg jij dat ik niet moet roken? Jij rookte zelf op mijn leeftijd.”",
   "parar": "Dat de ander inconsequent is, maakt de kritiek niet onwaar: “Misschien, maar heb ik gelijk of niet?”"
  },
  {
   "g": "g-fil-hombre-de-paja",
   "nom": "Stroman",
   "otros": "Stropop; karikatuur van het argument",
   "ej": "“Hij wil minder huiswerk: dat wil zeggen dat we nooit meer studeren.”",
   "parar": "De exacte stelling herhalen: “Ik heb dat niet gezegd; ik heb gezegd…”"
  },
  {
   "g": "g-fil-apelacion-a-la-autoridad",
   "nom": "Beroep op autoriteit",
   "otros": "Ad verecundiam; valse autoriteit",
   "ej": "“Deze shampoo is de beste: dat zegt een voetballer.”",
   "parar": "Vragen of hij daar deskundig in is en of de deskundigen het ermee eens zijn."
  },
  {
   "g": "g-fil-apelacion-a-la-mayoria",
   "nom": "Beroep op de meerderheid",
   "otros": "Ad populum; meeloopeffect",
   "ej": "“Als iedereen het deelt, zal het wel waar zijn.”",
   "parar": "Dat veel mensen het geloven is geen reden: “Waarom geloven ze het?”"
  },
  {
   "g": "g-fil-apelacion-a-la-emocion",
   "nom": "Beroep op emotie",
   "otros": "Ad misericordiam (beroep op medelijden); ad baculum (beroep op angst of dreiging)",
   "ej": "“Als je me laat zakken, straffen mijn ouders me de hele zomer.”",
   "parar": "De emotie erkennen en teruggaan naar de vraag: “En is het examen goed of niet?”"
  },
  {
   "g": "g-fil-apelacion-a-la-ignorancia",
   "nom": "Beroep op onwetendheid",
   "otros": "Ad ignorantiam",
   "ej": "“Niemand heeft bewezen dat spoken niet bestaan; dus bestaan ze.”",
   "parar": "De bewijslast ligt bij degene die iets beweert: niet weten dat iets niet zo is, is niet hetzelfde als weten dat het wel zo is."
  },
  {
   "g": "g-fil-falso-dilema",
   "nom": "Vals dilemma",
   "otros": "Vals dilemma; of wit of zwart",
   "ej": "“Je bent voor mij of je bent tegen mij.”",
   "parar": "De derde optie zoeken: “En wat als het geen van beide is?”"
  },
  {
   "g": "g-fil-pendiente-resbaladiza",
   "nom": "Hellend vlak",
   "otros": "Sneeuwbaleffect",
   "ej": "“Als ik je vandaag tot elf uur laat uitgaan, wil je morgen pas om drie uur terugkomen.”",
   "parar": "Vragen om elke stap in de keten te rechtvaardigen."
  },
  {
   "g": "g-fil-generalizacion-apresurada",
   "nom": "Overhaaste generalisatie",
   "otros": "Onvoldoende of vertekende steekproef",
   "ej": "“Mijn neef komt uit Burgos en is heel serieus: de mensen uit Burgos zijn serieus.”",
   "parar": "Vraag hoeveel gevallen en of ze representatief zijn."
  },
  {
   "g": "g-fil-causa-falsa",
   "nom": "Valse oorzaak",
   "otros": "Post hoc, ergo propter hoc; cum hoc (correlatie is geen causaliteit)",
   "ej": "“Sinds ik deze armband draag, haal ik mijn examens: de armband brengt me geluk.”",
   "parar": "Zoek naar andere oorzaken, toeval of een gemeenschappelijke oorzaak."
  },
  {
   "g": "g-fil-falsa-analogia",
   "nom": "Valse analogie",
   "otros": "Zwakke analogie",
   "ej": "“Een school is als een bedrijf: je moet leerlingen die niet presteren ontslaan.”",
   "parar": "Zoek naar het verschil dat ertoe doet tussen de twee dingen."
  },
  {
   "g": "g-fil-peticion-de-principio",
   "nom": "Cirkelredenering",
   "otros": "Petitio principii; cirkelredenering",
   "ej": "“Dit boek zegt de waarheid omdat het boek zelf dat zegt.”",
   "parar": "Erop wijzen dat de premisse de conclusie al bevat."
  },
  {
   "g": "g-fil-equivoco",
   "nom": "Equivocatie",
   "otros": "Anfibologie (als de dubbele betekenis in de zin zit); homonymie",
   "ej": "“Een bank is om op te zitten; de Bank van Spanje is een bank; dus is hij om op te zitten.”",
   "parar": "Vraag wat het woord in elke premisse betekent."
  },
  {
   "g": "g-fil-pregunta-compleja",
   "nom": "Complexe vraag",
   "otros": "Suggestieve vraag; geladen vraag",
   "ej": "“Waarom blijf je liegen?”",
   "parar": "Verwerp de veronderstelling voordat je antwoordt: “Ik accepteer niet dat ik lieg.”"
  },
  {
   "g": "g-fil-pista-falsa",
   "nom": "Vals spoor",
   "otros": "Afleidingsmanoeuvre; van onderwerp veranderen",
   "ej": "“Dat ik de vaas heb gebroken? En wie heeft het raam open laten staan?”",
   "parar": "Terug naar het onderwerp: “Dat is een andere kwestie; we hadden het over…”"
  }
 ],
 "qf": [
  {
   "txt": "“Let niet op wat de minister over economie zegt: hij is twee keer gescheiden.”",
   "tipo": "g-fil-ad-hominem",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "Het valt het privéleven van de spreker aan, dat niets te maken heeft met wat hij over economie zegt."
  },
  {
   "txt": "“Geef je mij een standje omdat ik te laat kom? Maar jij was maandag ook te laat!”",
   "tipo": "g-fil-tu-quoque",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-hombre-de-paja",
    "g-fil-causa-falsa"
   ],
   "por": "Dat de ander ook te laat was, maakt niet dat te laat komen niet verkeerd is."
  },
  {
   "txt": "—We zouden op school meer moeten recyclen. —Ja, en plastic, auto’s en elektrisch licht verbieden.",
   "tipo": "g-fil-hombre-de-paja",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-hombre-de-paja",
    "g-fil-falso-dilema"
   ],
   "por": "Het overdrijft het voorstel tot in het belachelijke en valt die karikatuur aan. Als iemand zou zeggen “als we recyclen, zullen we uiteindelijk auto’s verbieden”, zou het een hellend vlak zijn."
  },
  {
   "txt": "“De tandarts uit de serie beveelt deze yoghurt aan voor het hart.”",
   "tipo": "g-fil-apelacion-a-la-autoridad",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-falsa-analogia"
   ],
   "por": "Het is een acteur, en bovendien is het hart zelfs in de serie niet zijn vakgebied: een autoriteit buiten zijn vakgebied."
  },
  {
   "txt": "“Tien miljoen mensen kunnen zich niet vergissen: deze video vertelt de waarheid.”",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-apelacion-a-la-autoridad"
   ],
   "por": "Het aantal weergaven meet de populariteit, niet de waarheid."
  },
  {
   "txt": "“Meneer/mevrouw, laat me alstublieft slagen: ik heb een vreselijke week gehad en ik ben erg verdrietig.”",
   "tipo": "g-fil-apelacion-a-la-emocion",
   "o": [
    "g-fil-apelacion-a-la-emocion",
    "g-fil-pendiente-resbaladiza",
    "g-fil-falso-dilema"
   ],
   "por": "Het doet een beroep op medelijden in plaats van redenen te geven waarom het examen een voldoende verdient: het verdriet kan echt zijn, maar zegt niets over de kwaliteit van het examen."
  },
  {
   "txt": "“Niemand heeft aangetoond dat dit supplement niet werkt; dus werkt het.”",
   "tipo": "g-fil-apelacion-a-la-ignorancia",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "g-fil-peticion-de-principio"
   ],
   "por": "Niet weten dat iets onwaar is, bewijst niet dat het waar is: wie beweert dat het werkt, moet dat bewijzen."
  },
  {
   "txt": "“Of je haalt alles in juni, of je bent niet geschikt om te studeren.”",
   "tipo": "g-fil-falso-dilema",
   "o": [
    "g-fil-falso-dilema",
    "g-fil-generalizacion-apresurada",
    "g-fil-pregunta-compleja"
   ],
   "por": "Er zijn veel meer mogelijkheden: slagen in september, een andere aanpak kiezen, een slecht jaar hebben."
  },
  {
   "txt": "“Als we toestaan dat de mobiel in de pauze wordt gebruikt, dan wordt hij later in de klas gebruikt, daarna tijdens de examens en uiteindelijk leert niemand meer iets.”",
   "tipo": "g-fil-pendiente-resbaladiza",
   "o": [
    "g-fil-hombre-de-paja",
    "g-fil-pendiente-resbaladiza",
    "g-fil-causa-falsa"
   ],
   "por": "Het koppelt steeds ergere gevolgen aan elkaar zonder een van de stappen te rechtvaardigen."
  },
  {
   "txt": "“Ik heb twee Fransen ontmoet en beide waren onvriendelijk: Fransen zijn onvriendelijk.”",
   "tipo": "g-fil-generalizacion-apresurada",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-falsa-analogia",
    "g-fil-ad-hominem"
   ],
   "por": "Twee gevallen zijn niet genoeg om over miljoenen mensen te spreken."
  },
  {
   "txt": "“Sinds de nieuwe lantaarnpaal is geplaatst, zijn er minder inbraken. Het licht schrikt de dieven af.”",
   "tipo": "g-fil-causa-falsa",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "no-es-falacia"
   ],
   "por": "Dat kan, maar dat het ene na het andere komt, bewijst niet dat het ene het andere veroorzaakt: misschien was er meer toezicht of was het toeval. Er zou moeten worden vergeleken. Valkuil: de conclusie zou waar kunnen zijn; wat misleidend is, is haar als bewezen voor te stellen."
  },
  {
   "txt": "“Leerlingen zijn als klanten van een winkel: ze hebben altijd gelijk.”",
   "tipo": "g-fil-falsa-analogia",
   "o": [
    "g-fil-falsa-analogia",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-hombre-de-paja"
   ],
   "por": "Een leerling koopt geen product: hij gaat leren wat hij nog niet weet, en daar zit het verschil dat ertoe doet."
  },
  {
   "txt": "“God bestaat omdat de Bijbel het zegt, en de Bijbel spreekt de waarheid omdat het het woord van God is.”",
   "tipo": "g-fil-peticion-de-principio",
   "o": [
    "g-fil-peticion-de-principio",
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-ignorancia"
   ],
   "por": "Het argument gebruikt als premisse wat het wil bewijzen. Let op: de logica beoordeelt deze redenering, niet het bestaan van God, wat een open vraag is in de filosofie."
  },
  {
   "txt": "“Het einde van het leven is de dood. Het doel van iets is zijn volmaaktheid. Dus de volmaaktheid van het leven is de dood.”",
   "tipo": "g-fil-equivoco",
   "o": [
    "g-fil-equivoco",
    "g-fil-pista-falsa",
    "g-fil-falso-dilema"
   ],
   "por": "“fin” betekent “einde” in de eerste premisse en “doel” in de tweede: de redenering lijkt alleen geldig omdat ze hetzelfde woord gebruikt."
  },
  {
   "txt": "“Ben je al gestopt met spieken bij examens?”",
   "tipo": "g-fil-pregunta-compleja",
   "o": [
    "g-fil-pregunta-compleja",
    "g-fil-ad-hominem",
    "g-fil-falso-dilema"
   ],
   "por": "Of je nu “ja” of “nee” antwoordt, je geeft toe dat je spiekte. Je moet de veronderstelling verwerpen voordat je antwoordt."
  },
  {
   "txt": "—Waarom heb je je huiswerk niet gemaakt? —En waarom heeft niemand het over hoe slecht de verwarming werkt?",
   "tipo": "g-fil-pista-falsa",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "Hij verandert van onderwerp om niet te antwoorden. Het is geen tu quoque, omdat hij de ander er niet van beschuldigt hetzelfde te doen."
  },
  {
   "txt": "“De meeste klimatologen ter wereld zijn het er na decennia van gegevens over eens dat de planeet opwarmt door menselijke activiteit. Het is redelijk om dat te aanvaarden zolang er geen tegenbewijs is.”",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "no-es-falacia"
   ],
   "por": "Valkuil: dit is geen drogreden. Steunen op de overeenstemming van deskundigen uit hun eigen vakgebied, die gebaseerd is op gegevens en openstaat voor herziening, is een legitieme reden, hoewel geen bewijs."
  },
  {
   "txt": "“Vertrouw niet op wat die getuige over het ongeluk zegt: gisteren heeft hij toegegeven dat hij over datzelfde ongeluk had gelogen.”",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-tu-quoque",
    "no-es-falacia"
   ],
   "por": "Valkuil: dit is geen misleidende ad hominem. Dat een getuige heeft gelogen over hetzelfde waarover hij vertelt, is relevant om te beslissen hoeveel je hem gelooft. Wat misleidend is, is de persoon aanvallen op iets dat niets te maken heeft met wat hij zegt."
  },
  {
   "txt": "“Als je het cursusgeld niet vóór de 30e betaalt, verlies je je plaats; als je je plaats verliest, kun je dit jaar de cursus niet volgen. Dus als je niet vóór de 30e betaalt, kun je dit jaar de cursus niet volgen.”",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-apelacion-a-la-emocion",
    "no-es-falacia"
   ],
   "por": "Valkuil: dit is geen hellend vlak. Elke stap wordt gerechtvaardigd door een bekende regel, en de conclusie volgt via een hypothetisch syllogisme (p → q, q → r; dus p → r; niveau 4). Het hellend vlak verbindt stappen die slechts mogelijk of waarschijnlijk zijn."
  },
  {
   "txt": "“Je moet in de horoscoop geloven: miljoenen mensen lezen hem.”",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-generalizacion-apresurada",
    "no-es-falacia"
   ],
   "por": "Dat veel mensen hem lezen, maakt hem nog niet waar: populariteit is geen bewijs. (Als iemand zou zeggen “bij mijn tante klopte het twee keer, dus het klopt”, zou dat een overhaaste generalisatie zijn.)"
  }
 ]
};
