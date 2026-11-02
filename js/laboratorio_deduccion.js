// Generado por web_i18n/i18n_rebuild.js (nl) a partir de web/js/laboratorio_deduccion.js. No editar a mano: editar la memoria tm/nl.json y regenerar.
const DED = {
 "t": {
  "dnLede": "Bewijzen zonder de tabel te maken: je begint met de premissen en voegt elke keer een lijn toe, door een regel toe te passen op lijnen die er al staan. Als je bij de conclusie komt, is de redenering geldig. Kies de lijnen (de volgorde waarin je erop klikt maakt niet uit), kies de regel en klik op “Toepassen”: de tabel controleert of de regel geldt voor die lijnen en laat je kiezen als deze meer dan één resultaat oplevert.",
  "dnEjercicios": "Oefeningen",
  "dnEsc": "Stap {n}",
  "dnEj": "Oefening {n}:",
  "dnComo": "1. Klik op de nummers van de lijnen die je gaat gebruiken. 2. Kies een regel. 3. Klik op “Toepassen”.",
  "dnReglas": "Regels",
  "dnUsar": "Deze lijn gebruiken",
  "dnPremisa": "premisse",
  "dnSupuesto": "aanname",
  "dnAbiertos": "Open aannames: {n}. Sluit ze met PC of RA voordat je klaar bent: wat van een aanname afhangt, geldt niet daarbuiten.",
  "dnExtraSup": "Voorlopige aanname (de formule die je aanneemt):",
  "dnExtraAd": "Formule die je met “of” toevoegt:",
  "dnAplicar": "Toepassen",
  "dnDeshacer": "Ongedaan maken",
  "dnReiniciar": "Opnieuw beginnen",
  "dnNoSe": "Kan niet worden afgeleid",
  "dnSiguiente": "Volgende oefening",
  "dnPista": "Een hint",
  "dnPistaN": "Hint {n}.",
  "dnSol": "Volledige afleiding bekijken",
  "dnOcultar": "Afleiding verbergen",
  "dnElige": "Kies eerst een regel.",
  "dnVarias": "De regel levert meer dan één resultaat op: kies welke je wilt toevoegen.",
  "dnHecho": "Bewezen! Je bent bij de conclusie gekomen zonder open aannames: de redenering is geldig.",
  "dnTrampaBien": "Goed gezien: het kan niet worden afgeleid. Tegenvoorbeeld uit de tabel: {fila}. Met die waarden zijn de premissen waar en de conclusie onwaar.",
  "dnTrampaMal": "Het kan wel worden afgeleid: in de tabel is er geen enkele rij met de premissen waar en de conclusie onwaar. Blijf zoeken naar de regels.",
  "dnErrRegla": "Ik ken die regel niet.",
  "dnErrExtra": "Typ de formule die de regel vraagt.",
  "dnErrFormula": "Ik begrijp de formule niet: {m}",
  "dnErrAcceso": "Een van de gekozen lijnen bevindt zich binnen een al gesloten aanname: die kan niet meer worden gebruikt.",
  "dnErrSinSup": "Er is geen open aanname om te sluiten. Open er een met “Sup”.",
  "dnErrNum": "Deze regel is van toepassing op {n} lijn(en): kies dat aantal lijnen.",
  "dnErrContra": "Kies voor de reductio ad absurdum twee lijnen die elkaar tegenspreken: een formule en haar negatie.",
  "dnErrNoAplica": "De regel is niet van toepassing op die lijnen. Kijk naar de vorm ervan in de regelentabel.",
  "dnNivel": "Binnen {n} aanname(n).",
  "dnCerrada": "Lijn van een al gesloten aanname: kan niet worden gebruikt.",
  "dnReglasTit": "De regels en waarom ze geldig zijn",
  "dnReglasIntro": "Elke regel is een tautologie uit de waarheidstabel (niveau 3): daarom leidt hij nooit van ware premissen naar een onware conclusie. Je kunt ze allemaal controleren in “Waarheidstabellen”.",
  "dnColRegla": "Regel",
  "dnColForma": "Vorm",
  "dnColTaut": "Tautologie die hem rechtvaardigt",
  "dnSinTaut": "opent of sluit een aanname: de rechtvaardiging is dat A → B waar is telkens wanneer, door A te veronderstellen, B wordt bereikt",
  "dnLimiteTit": "Hoe ver het reikt",
  "dnLimite": "De waarheidstabel en de deductie leiden via verschillende wegen tot hetzelfde resultaat: met de vijf connectieven (¬, ∧, ∨, → en ↔) kan alles wat de tabel als geldig beschouwt, met deze regels worden afgeleid, en alles wat wordt afgeleid, is geldig volgens de tabel (de propositielogica is correct en volledig). De deductie bespaart rijen, maar beide kijken alleen naar de hele zinnen, niet naar wat erin zit. “Alle mensen zijn sterfelijk; Socrates is een mens; dus Socrates is sterfelijk” kan zo niet worden bewezen: het is nodig om binnen in de zinnen te kijken, met “alle” en “sommige”. Dat is niveau 6."
 },
 "esc": [
  "Stap 1: de basisregels, bijna altijd in één stap.",
  "Stap 2: twee of drie stappen.",
  "Stap 3: langere afleidingen.",
  "Stap 4: voorlopige aannames (conditioneel bewijs en reductio ad absurdum).",
  "Stap 5: combineren, bewijzen zonder premissen, herkennen wat niet kan worden afgeleid en de biconditional gebruiken."
 ],
 "reglas": {
  "mp": {
   "nom": "Modus ponens",
   "dice": "Uit een implicatie en haar antecedent volgt de consequent."
  },
  "mt": {
   "nom": "Modus tollens",
   "dice": "Uit een implicatie en de negatie van haar consequent volgt de negatie van het antecedent."
  },
  "sh": {
   "nom": "Hypothetisch syllogisme",
   "dice": "Twee aaneengeschakelde implicaties leveren een implicatie op."
  },
  "sd": {
   "nom": "Disjunctief syllogisme",
   "dice": "Uit een disjunctie en de negatie van het ene deel volgt het andere."
  },
  "ci": {
   "nom": "Conjunctie-introductie",
   "dice": "Twee lijnen kunnen worden samengevoegd met “en”."
  },
  "ce": {
   "nom": "Conjunctie-eliminatie (vereenvoudiging)",
   "dice": "Uit een conjunctie volgt elk van haar delen."
  },
  "ad": {
   "nom": "Additie",
   "dice": "Uit een lijn volgt die lijn “of” elke andere formule: de inclusieve “of” vereist alleen dat één deel waar is."
  },
  "dc": {
   "nom": "Constructief dilemma",
   "dice": "Als twee wegen naar hetzelfde leiden en een van beide geldt, kom je daar uit."
  },
  "dn": {
   "nom": "Dubbele negatie",
   "dice": "¬¬A en A kunnen voor elkaar worden verwisseld. Het is van toepassing op de hele lijn, niet op een deel ervan."
  },
  "dm": {
   "nom": "De Morgan",
   "dice": "Het ontkennen van een conjunctie is het bevestigen van de disjunctie van de negaties, en het ontkennen van een disjunctie is het bevestigen van de conjunctie van de negaties. Het is van toepassing op de hele lijn, niet op een deel ervan."
  },
  "cp": {
   "nom": "Contrapositie",
   "dice": "Een implicatie is equivalent aan zijn contrapositie. Het is van toepassing op de hele lijn, niet op een deel ervan."
  },
  "bie": {
   "nom": "Eliminatie van de biconditional",
   "dice": "Uit A ↔ B volgt A → B, en ook B → A: kies welke je wilt."
  },
  "bii": {
   "nom": "Introductie van de biconditioneel",
   "dice": "Als je A → B hebt en ook B → A, kun je A ↔ B schrijven."
  },
  "rep": {
   "nom": "Herhaling",
   "dice": "Kopieer een regel die nog bruikbaar is (om hem binnen een aanname te halen)."
  },
  "sup": {
   "nom": "Voorlopige aanname",
   "dice": "Neem een willekeurige formule aan om te zien wat eruit volgt. Alles wat je afleidt blijft binnen de aanname totdat je die sluit."
  },
  "pc": {
   "nom": "Conditioneel bewijs",
   "dice": "Als je door A aan te nemen tot B bent gekomen, sluit dan de aanname en schrijf A → B."
  },
  "ra": {
   "nom": "Reductio ad absurdum",
   "dice": "Als je door A aan te nemen op een tegenstrijdigheid (B en ¬B) bent uitgekomen, sluit dan de aanname en schrijf ¬A."
  }
 },
 "ej": {
  "d01": {
   "pistas": [
    "Je hebt een implicatie en het antecedent ervan.",
    "Kies de regels 1 en 2 en de regel MP."
   ]
  },
  "d02": {
   "pistas": [
    "Je hebt een implicatie en de ontkenning van het consequent ervan.",
    "Kies de regels 1 en 2 en de regel MT."
   ]
  },
  "d03": {
   "pistas": [
    "Splits eerst de conjunctie met E∧: twee keer, één keer voor elk deel.",
    "Voeg ze daarna samen met I∧: het systeem laat je kiezen tussen p ∧ q en q ∧ p."
   ]
  },
  "d04": {
   "pistas": [
    "Een disjunctie en de ontkenning van een van de delen ervan.",
    "Regels 1 en 2, regel SD."
   ]
  },
  "d05": {
   "pistas": [
    "De twee implicaties worden aan elkaar geschakeld via q.",
    "Regels 1 en 2, regel SH."
   ]
  },
  "d06": {
   "pistas": [
    "Begin met de implicatie waarvan je het antecedent al hebt.",
    "Met q in handen geeft de tweede implicatie r."
   ]
  },
  "d07": {
   "pistas": [
    "Om p → r te gebruiken heb je p los nodig.",
    "Haal p uit de conjunctie met E∧ en pas MP toe."
   ]
  },
  "d08": {
   "pistas": [
    "De implicatie vraagt om p, en je hebt ¬¬p.",
    "Verwijder de dubbele ontkenning met DN en pas MP toe."
   ]
  },
  "d09": {
   "pistas": [
    "¬(p ∨ q) zegt dat geen van beide het geval is.",
    "De Morgan zet het om in ¬p ∧ ¬q; daarna E∧."
   ]
  },
  "d10": {
   "pistas": [
    "De Morgan zet ¬(p ∧ q) om in ¬p ∨ ¬q.",
    "Voor het disjunctief syllogisme moet je ¬p ontkennen: maak ¬¬p uit p met DN.",
    "Nu SD met ¬p ∨ ¬q en ¬¬p."
   ]
  },
  "d11": {
   "pistas": [
    "Het consequent van de eerste premisse is opnieuw een implicatie.",
    "MP met 1 en 2 geeft q → r; nogmaals MP met q."
   ]
  },
  "d12": {
   "pistas": [
    "De implicatie vraagt om p ∨ q en je hebt alleen p.",
    "De additie stelt je in staat om van p naar p ∨ q te gaan (vul q in het vakje in)."
   ]
  },
  "d13": {
   "pistas": [
    "De eerste drie premissen hebben de vorm van het constructief dilemma.",
    "DC met 1, 2 en 3 geeft r; daarna MP met de vierde."
   ]
  },
  "d14": {
   "pistas": [
    "Om r → p met modus tollens te gebruiken heb je ¬p nodig.",
    "¬(p ∨ q) geeft ¬p ∧ ¬q via De Morgan; haal ¬p eruit met E∧."
   ]
  },
  "d15": {
   "pistas": [
    "Splits de conjunctie van de eerste premisse.",
    "Met q ∨ r en ¬q geeft SD r. Voeg die samen met p via I∧."
   ]
  },
  "d16": {
   "pistas": [
    "De conclusie is een conditionele: stel het antecedent, p ∧ r.",
    "Binnen de aanname leid p af, pas MP toe en sluit af met PC door de regel met q te kiezen."
   ]
  },
  "d17": {
   "pistas": [
    "Stel p.",
    "Breng q binnen de aanname met R (herhaling) en sluit af met PC."
   ]
  },
  "d18": {
   "pistas": [
    "Dit is het hypothetisch syllogisme, maar zonder het te gebruiken: bewijs het.",
    "Stel p, pas MP twee keer toe en sluit af met PC."
   ]
  },
  "d19": {
   "pistas": [
    "Stel het tegenovergestelde van wat je wilt: p.",
    "Met p krijg je q en ¬q: tegenspraak. Sluit af met RA door die twee regels te kiezen."
   ]
  },
  "d20": {
   "pistas": [
    "Stel ¬p.",
    "Met ¬p volgt q, wat in strijd is met ¬q. RA levert ¬¬p op, en DN p."
   ]
  },
  "d21": {
   "pistas": [
    "Stel p.",
    "MP levert q ∧ r op; haal r eruit met E∧ en sluit af met PC."
   ]
  },
  "d22": {
   "pistas": [
    "Leid de twee conditionele uitspraken af met E∧.",
    "Stel p, leid q en r af, voeg ze samen met I∧ en sluit af met PC."
   ]
  },
  "d23": {
   "pistas": [
    "Zonder premissen rest alleen nog aannemen. Stel precies wat je wilt ontkennen.",
    "Uit p ∧ ¬p volgen p en ¬p: RA."
   ]
  },
  "d24": {
   "pistas": [
    "Probeer met de waarheidstafel: is er een rij waarin p → q en q waar zijn en p onwaar?",
    "Als die er is, klik op “Niet afleidbaar”."
   ],
   "contra": "Het is de drogreden van het bevestigen van de consequent: met p onwaar en q waar zijn de twee premissen waar en de conclusie onwaar. Geen enkele combinatie van geldige regels kan daartoe leiden."
  },
  "d25": {
   "pistas": [
    "Onthoud dat de ‘of’ van de logica inclusief is.",
    "Kunnen p en q tegelijk waar zijn?"
   ],
   "contra": "Het is de drogreden van het bevestigen van een disjunct: met p en q waar zijn de premissen waar en is ¬q onwaar. Om ¬q te concluderen zou de exclusieve ‘of’ nodig zijn."
  },
  "d26": {
   "pistas": [
    "Vergelijk met opgave 24: hier is de premisse een biconditioneel, dat in beide richtingen werkt.",
    "E↔ met regel 1 geeft q → p; daarna MP met q."
   ]
  },
  "d27": {
   "pistas": [
    "Om tot een biconditioneel te komen, bewijs je de twee conditionele uitspraken en voeg je ze samen met I↔.",
    "Stel p ∧ q, leid de twee delen af, voeg ze in omgekeerde volgorde samen en sluit af met PC; doe hetzelfde beginnend met q ∧ p."
   ]
  }
 }
};
