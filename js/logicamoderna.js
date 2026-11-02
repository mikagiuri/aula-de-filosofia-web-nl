"use strict";
/* ===== Rincón de lógica · «Lógica moderna»: Formalizar y Reglas de inferencia (12-10-2026) =====
   Petición del profesor: el Rincón tenía lógica proposicional (tablas de verdad, puertas) pero sin pestaña de lógica
   moderna. Las pestañas de arriba pasan a ser «Lógica clásica» (silogismos, cuadrado, conjuntos) y «Lógica moderna»
   (tablas de verdad, formalizar, reglas de inferencia, cuantificadores, puertas lógicas); ver logRender en logicaview.js.
   · Cuantificadores: A, E, I, O en lógica de predicados, un «mundo pequeño» para evaluarlas (sujeto vacío incluido) y
     un ejercicio de elegir la fórmula de cada frase.
   · Formalizar: frases en castellano que el alumno pasa a fórmula con el teclado de conectivas; se corrige por
     EQUIVALENCIA (misma tabla de verdad), así que vale cualquier forma correcta, y si no lo es se enseña la fila en
     que difieren. Cada frase trae su pista y su caso trampa («solo si», «a menos que», «o… o…», «ni… ni…»).
   · Reglas de inferencia: las reglas válidas y las falacias formales que se les parecen, con su forma, un ejemplo y
     un botón para comprobarlas en la tabla de verdad; y un ejercicio «¿regla o trampa?» con argumentos en castellano.
   Usa las funciones de logicaview.js (logParse, logVars, logFilas, logEval, logStr, logEsc, logTeclado, LOG).
   Textos en LOGM_TXT y en los datos de abajo: cadenas enteras, que traduce el diccionario de interfaz (ui/<lang>.json). */
const LOGM_TXT = {
  tabClasica: "Klassieke logica", tabModerna: "Moderne logica", tabFormalizar: "Formaliseren", tabInferencia: "Inferentieregels",
  introFormalizar: "Formaliseren is een zin vertalen naar symbolen: elke enkelvoudige zin is een letter (p, q, r…) en de woorden die ze verbinden (“niet”, “en”, “of”, “als… dan”) zijn connectieven. Typ de formule met het toetsenbord en klik op “Controleren”: elke equivalente formule is geldig, omdat de waarheidstabel wordt vergeleken met die van de oplossing.",
  introInferencia: "Een regel van inferentie is een manier van redeneren die nooit faalt: als de premissen waar zijn, is de conclusie dat ook. Sommige vormen lijken er erg op, maar zijn niet geldig: dat zijn de formele drogredenen. Hier zie je beide, met een voorbeeld van elk, en een oefening om ze te onderscheiden.",
  guiaTitF: "Hoe vertaal je elk woord",
  guiaF: "<ul><li><b>¬</b> (niet): “nee”, “het is niet waar dat”, “het is onwaar dat”.</li><li><b>∧</b> (en): “en”, “maar”, “hoewel”, “echter”, “bovendien”. Ze zeggen allemaal hetzelfde in de logica: dat beide dingen waar zijn.</li><li><b>∨</b> (of): “of”. In de logica is die inclusief (een, de ander of beide); als de zin beide tegelijk uitsluit (“of… of…, maar niet beide”), moet je dat toevoegen.</li><li><b>→</b> (als…, dan): “als p, q”, “q als p”, “wanneer p, q”, “telkens als p, q”, “p is voldoende voor q” (p is een <i>voldoende</i> voorwaarde).</li><li><b>Valkuil</b>: “p alleen als q” en “voor p is q noodzakelijk” schrijf je als <b>p → q</b>: q is een <i>noodzakelijke</i> voorwaarde, niet voldoende.</li><li><b>↔</b> (dan en slechts dan als): “p dan en slechts dan als q”, “p wanneer en alleen wanneer q”.</li><li><b>Andere valkuilen</b>: “noch p noch q” is ¬p ∧ ¬q; “p tenzij q” is ¬q → p (of, wat hetzelfde is, p ∨ q).</li><li><b>“Dus” is geen connectief</b>: “ik denk, dus ik besta” zegt niet “als ik denk, besta ik”, maar <i>leidt</i> een conclusie af uit een premisse. Dat is een argument: dat wordt behandeld in “Regels van inferentie”.</li></ul>",
  diccionario: "Woordenboek:", tuFormula: "Jouw formule", comprobar: "Controleren", solucion: "Bekijk de oplossing", pista: "Hint",
  bien: "Correct! Jouw formule is equivalent aan de oplossing: {s}", mal: "Niet equivalent. Bijvoorbeeld, wanneer {fila}, geeft jouw formule {a} en de zin zegt {b}.",
  verdadero: "waar", falso: "onwaar", vacia: "Schrijf een formule.", sol: "Oplossing: {s}", ejercicio: "Zin {n} van {m}",
  validas: "Geldige regels", falacias: "Formele drogredenen (niet geldig)", forma: "Vorm", ejemplo: "Voorbeeld", porQue: "Waarom het fout gaat",
  verTabla: "Controleer het in de waarheidstabel", ejTit: "Regel of valkuil?", ejAyuda: "Lees elk argument en kies welke vorm het heeft. Er is geen cijfer: het gaat erom te begrijpen waarom.",
  acierto: "Goed! Het is {r}.", fallo: "No: es {r}.", formaArg: "De vorm ervan: {f}"
};
const logmT = (k, v) => String(LOGM_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

/* ---------- Formalizar ---------- */
const LOGM_FZ = [
  { f: "Als het regent, wordt de grond nat.", d: [["p", "het regent"], ["q", "de grond wordt nat"]], s: "p → q", pista: "“Als p, q”: wat na ‘als’ komt is het antecedent." },
  { f: "Het regent en ik heb geen paraplu bij.", d: [["p", "het regent"], ["q", "ik heb een paraplu bij"]], s: "p ∧ ¬q", pista: "De letter is de bevestigende zin; de ‘niet’ wordt met ¬ geschreven." },
  { f: "Als het regent en ik geen paraplu bij heb, word ik nat.", d: [["p", "het regent"], ["q", "ik heb een paraplu bij"], ["r", "ik word nat"]], s: "(p ∧ ¬q) → r", pista: "Eerst het volledige antecedent, tussen haakjes; daarna de pijl." },
  { f: "Ik studeer niet en ik werk niet.", d: [["p", "ik studeer"], ["q", "ik werk"]], s: "¬p ∧ ¬q", pista: "“Noch… noch…” ontkent beide dingen tegelijk." },
  { f: "Ik ga alleen op excursie als het niet regent.", d: [["p", "ik ga op excursie"], ["q", "het regent"]], s: "p → ¬q", pista: "Valkuil: ‘alleen als’ introduceert de noodzakelijke voorwaarde, die achter de pijl komt." },
  { f: "Om te stemmen is het noodzakelijk meerderjarig te zijn.", d: [["p", "je stemt"], ["q", "je bent meerderjarig"]], s: "p → q", pista: "Als je stemt, ben je meerderjarig; maar meerderjarig zijn is niet voldoende om te stemmen." },
  { f: "Het is voldoende om op de knop te drukken om het licht aan te laten gaan.", d: [["p", "je drukt op de knop"], ["q", "het licht gaat aan"]], s: "p → q", pista: "“Het is voldoende dat p” zegt dat p een voldoende voorwaarde is: die komt voor de pijl." },
  { f: "We gaan weg tenzij het regent.", d: [["p", "we gaan weg"], ["q", "het regent"]], s: "¬q → p", pista: "Valkuil: ‘p tenzij q’ betekent ‘als niet q, dan p’." },
  { f: "Ik bel je als en slechts als je te laat komt.", d: [["p", "ik bel je"], ["q", "je komt te laat"]], s: "p ↔ q", pista: "“Als en slechts als” verbindt twee conditionele zinnen: p → q en q → p." },
  { f: "Of je studeert of je werkt, maar niet allebei.", d: [["p", "je studeert"], ["q", "je werkt"]], s: "(p ∨ q) ∧ ¬(p ∧ q)", pista: "Valkuil: de logische ‘of’ is inclusief; hier moet je toevoegen dat niet beide voorkomen." },
  { f: "Het is niet waar dat, als het regent, de wedstrijd wordt afgelast.", d: [["p", "het regent"], ["q", "de wedstrijd wordt afgelast"]], s: "¬(p → q)", pista: "“Het ‘niet waar dat’ ontkent de hele conditionele zin: het komt voor de haakjes." },
  { f: "Epicurus: “Wanneer wij er zijn, is de dood er niet; en wanneer de dood er is, zijn wij er niet meer.”", d: [["p", "wij zijn er"], ["q", "de dood is er"]], s: "(p → ¬q) ∧ (q → ¬p)", pista: "Het zijn twee conditionele zinnen verbonden door ‘en’. (Brief aan Menoeceus, 125.)" },
  /* (17-10) caso «Mónica» con cinco letras (docs/34): la ficha de Argumentos clásicos lo formaliza con tres */
  { f: "Monica, letterlijk: “Wie goede dingen verlangt en ze heeft, is gelukkig; maar wie slechte dingen verlangt, is ongelukkig, ook al heeft hij ze.”", d: [["p", "is gelukkig"], ["q", "verlangt goede dingen"], ["r", "heeft goede dingen"], ["s", "verlangt slechte dingen"], ["t", "heeft slechte dingen"]], s: "((q ∧ r) → p) ∧ ((s ∧ t) → ¬p)", pista: "«Maar» en «ook al» schrijf je met ∧: «ook al heeft hij ze» ontkent niet dat hij ze heeft, het bevestigt het. Vergelijk haar met de drieletterige van de kaart van Mónica (Klassieke argumenten): wie verlangt het goede en het slechte, heeft alles en is gelukkig? De ene formule staat het toe en de andere niet." },
  /* (22-10, nube) T2a: diez frases más, con casos trampa («a menos que», «solo si» delante, «siempre que», «aunque» + subjuntivo, «salvo que») */
  { f: "Ik ga niet tenzij je meegaat.", d: [["p", "ik ga"], ["q", "je gaat met me mee"]], s: "¬q → ¬p", pista: "Valkuil: ‘niet p tenzij q’ betekent ‘als niet q, dan niet p’. Dat is gelijk aan p → q: dat je meegaat is een noodzakelijke voorwaarde om te gaan." },
  { f: "Alleen als je studeert, slaag je.", d: [["p", "je slaagt"], ["q", "je studeert"]], s: "p → q", pista: "Valkuil: ook al staat ‘alleen als’ vooraan, het markeert nog steeds de noodzakelijke voorwaarde, die achter de pijl staat. Als je slaagt, heb je gestudeerd." },
  { f: "Telkens als je studeert, slaag je.", d: [["p", "je slaagt"], ["q", "je studeert"]], s: "q → p", pista: "Met de aantonende wijs betekent “siempre que” “elke keer dat”, dat wil zeggen “als”: studeren is een voldoende voorwaarde en staat vóór de pijl. Vergelijk deze met de vorige. Valstrik: met de aanvoegende wijs (“je zult slagen mits je studeert”) kan het gelezen worden als “alleen als je studeert”, en dan zou het p → q zijn." },
  { f: "Het regent niet en de zon schijnt niet, maar het is koud.", d: [["p", "het regent"], ["q", "de zon schijnt"], ["r", "het is koud"]], s: "¬p ∧ ¬q ∧ r", pista: "“Noch… noch…” ontkent de eerste twee en “maar” is een ander voegwoord: er worden ¬p, ¬q en r bevestigd." },
  { f: "Het is niet waar dat het regent of sneeuwt.", d: [["p", "het regent"], ["q", "het sneeuwt"]], s: "¬(p ∨ q)", pista: "De hele disjunctie wordt ontkend: het regent niet en het sneeuwt niet. Volgens De Morgan geldt ook ¬p ∧ ¬q." },
  { f: "Als het geen maandag is, is er geen logica-les.", d: [["p", "het is maandag"], ["q", "er is logica-les"]], s: "¬p → ¬q", pista: "Valkuil: dit is gelijk aan q → p (als er logica-les is, is het maandag), niet aan p → q: de zin belooft niet dat er elke maandag les is." },
  { f: "Ook al regent het, we gaan naar buiten.", d: [["p", "het regent"], ["q", "we gaan weg"]], s: "(p → q) ∧ (¬p → q)", pista: "Valkuil: met de aanvoegende wijs beweert ‘ook al’ niet dat het regent; het zegt dat we naar buiten gaan, of het nu regent of niet. De formule is gelijk aan alleen q. (Met de aantonende wijs zou ‘ook al regent het, we gaan naar buiten’ p ∧ q zijn.)" },
  { f: "Als het regent, blijf ik thuis; en zo niet, ga ik naar het park.", d: [["p", "het regent"], ["q", "ik blijf thuis"], ["r", "ik ga naar het park"]], s: "(p → q) ∧ (¬p → r)", pista: "Het zijn twee voorwaardelijke zinnen verbonden door ‘en’; de ‘zo niet’ is ‘als het niet regent’." },
  { f: "Het examen halen is noodzakelijk en voldoende om over te gaan.", d: [["p", "je slaagt voor het examen"], ["q", "je gaat over"]], s: "p ↔ q", pista: "Voldoende: p → q. Noodzakelijk: q → p. De twee samen zijn de biconditional." },
  { f: "Als het regent, ga ik niet naar buiten, tenzij ik een paraplu heb.", d: [["p", "het regent"], ["q", "ik ga naar buiten"], ["r", "ik heb een paraplu"]], s: "(p ∧ ¬r) → ¬q", pista: "Valstrik: “tenzij” werkt als “behalve als”: als het regent en ik geen paraplu heb, ga ik niet naar buiten. Ook geldt p → (¬r → ¬q), wat equivalent is." }
];
function logmEquiv(a, b){
  const vars = logVars([a, b]);
  return logFilas(vars).find(v => logEval(a, v) !== logEval(b, v)) || null;
}
function logmFzRes(i){
  const z = LOGM_FZ[i], st = LOG.fz[i] || {};
  if (st.sol) return '<p class="lg-nota">' + logmT("sol", { s: logEsc(z.s) }) + "</p>";
  if (!st.hecho) return "";
  if (!String(st.f || "").trim()) return '<p class="lg-error">' + logmT("vacia") + "</p>";
  try {
    const a = logParse(st.f), b = logParse(z.s), dif = logmEquiv(a, b);
    if (!dif) return '<p class="lg-veredicto lg-tautologia">' + logmT("bien", { s: logEsc(z.s) }) + "</p>";
    const fila = Object.keys(dif).map(x => x + " = " + (dif[x] ? "V" : "F")).join(", ");
    return '<p class="lg-veredicto lg-contradiccion">' + logmT("mal", { fila, a: logmT(logEval(a, dif) ? "waar" : "onwaar"), b: logmT(logEval(b, dif) ? "waar" : "onwaar") }) +
      '</p><p class="lg-nota"><b>' + logmT("pista") + ":</b> " + logEsc(z.pista) + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
function logRenderFormalizar(){
  const N = LOGM_FZ.length;
  return '<details class="lg-guia"><summary>' + logmT("guiaTitF") + "</summary>" + logmT("guiaF") + "</details>" +
    LOGM_FZ.map((z, i) => {
      const st = LOG.fz[i] || {};
      return '<div class="lg-panel lg-fz" id="lg-fz-' + i + '"><p class="lg-nota">' + logmT("ejercicio", { n: i + 1, m: N }) + '</p><p class="lg-fz-frase">' + logEsc(z.f) + "</p>" +
        '<p class="lg-nota">' + logmT("diccionario") + " " + z.d.map(([l, t]) => "<b>" + l + "</b> = " + logEsc(t)).join(" · ") + "</p>" +
        '<label class="lg-label" for="lg-fzi-' + i + '">' + logmT("tuFormula") + '</label><div class="lg-fila"><input id="lg-fzi-' + i + '" class="lg-input" data-fz="' + i + '" value="' + logEsc(st.f || "") + '" autocomplete="off" spellcheck="false">' +
        '<button type="button" class="btn" data-fzok="' + i + '">' + logmT("comprobar") + '</button></div>' + logTeclado("lg-fzi-" + i) +
        '<p><button type="button" class="btn ghost" data-fzsol="' + i + '">' + logmT("solucion") + '</button></p><div id="lg-fzr-' + i + '">' + logmFzRes(i) + "</div></div>";
    }).join("");
}

/* ---------- Reglas de inferencia ---------- */
const LOGM_REGLAS = [
  { k: "mp", n: "Modus ponens", p: "p → q; p", c: "q", ej: "Als het regent, wordt de grond nat. Het regent. Dus wordt de grond nat." },
  { k: "mt", n: "Modus tollens", p: "p → q; ¬q", c: "¬p", ej: "Als het regent, wordt de grond nat. De grond is niet nat. Dus regent het niet." },
  { k: "sh", n: "Hypothetisch syllogisme", p: "p → q; q → r", c: "p → r", ej: "Als ik studeer, slaag ik; als ik slaag, ga ik op reis. Dus als ik studeer, ga ik op reis." },
  { k: "sd", n: "Disjunctief syllogisme", p: "p ∨ q; ¬p", c: "q", ej: "Of hij is thuis of hij is in de klas. Hij is niet thuis. Dus is hij in de klas." },
  { k: "dc", n: "Constructief dilemma", p: "p → r; q → r; p ∨ q", c: "r", ej: "Als je met de trein gaat, kom je te laat; als je met de bus gaat, ook. Je gaat met de trein of met de bus. Dus kom je te laat." }
];
const LOGM_FALACIAS = [
  { k: "ac", n: "Bevestiging van de consequens", p: "p → q; q", c: "p", ej: "Als het regent, wordt de grond nat. De grond is nat. Dus heeft het geregend.", por: "De grond kan nat zijn door een andere oorzaak: iemand heeft hem besproeid. De voldoende voorwaarde is niet de enige mogelijke." },
  { k: "na", n: "Ontkenning van het antecedent", p: "p → q; ¬p", c: "¬q", ej: "Als je studeert, slaag je. Je hebt niet gestudeerd. Dus zul je niet slagen.", por: "De regel zegt niet wat er gebeurt als je niet studeert: misschien slaag je om een andere reden." },
  { k: "ad", n: "Bevestiging van een disjunct", p: "p ∨ q; p", c: "¬q", ej: "Of we gaan naar de film of we gaan uit eten. We gaan naar de film. Dus gaan we niet uit eten.", por: "De logische ‘of’ is inclusief: beide dingen kunnen gedaan worden. Het zou alleen geldig zijn als de zin beide tegelijk uitsluit." },
  { k: "nc", n: "Een conjunct ontkennen", p: "¬(p ∧ q)", c: "¬p", ej: "Het is niet waar dat iemand tegelijk thuis en in de klas is. Dus diegene is niet thuis.", por: "Het is voldoende dat een van beide niet het geval is: iemand kan thuis zijn en niet in de klas. Uit ¬(p ∧ q) volgt alleen ¬p ∨ ¬q (De Morgan)." },
  { k: "cc", n: "De conditionele omkeren", p: "p → q", c: "q → p", ej: "Als het een hond is, is het een zoogdier. Dus als het een zoogdier is, is het een hond.", por: "Dat p voldoende is voor q betekent niet dat q voldoende is voor p: een kat is ook een zoogdier. Het is dezelfde fout als het verwarren van “als” met “alleen als”." }
];
const LOGM_EJ = [
  { t: "Als Socrates een mens is, is hij sterfelijk. Socrates is een mens. Dus Socrates is sterfelijk.", r: "mp" },
  { t: "Als er vuur is, is er zuurstof. Op de maan is er geen zuurstof. Dus op de maan is er geen vuur.", r: "mt" },
  { t: "Als een regering de rechten van de burgers schendt, heeft het volk het recht om weerstand te bieden. Het volk biedt weerstand. Dus heeft de regering de rechten geschonden.", r: "ac" },
  { t: "Of de schuldige is de butler, of het is de kokkin. De butler heeft een alibi en is niet de schuldige. Dus is het de kokkin.", r: "sd" },
  { t: "Als je je best doet, word je beter; als je beter wordt, slaag je. Dus, als je je best doet, slaag je.", r: "sh" },
  { t: "Als het regent, wordt de wedstrijd afgelast. Het regent niet. Dus wordt de wedstrijd niet afgelast.", r: "na" },
  { t: "Als ik twijfel, denk ik. Ik twijfel. Dus denk ik.", r: "mp" },
  { t: "Ana studeert Filosofie of Geschiedenis. Ze studeert Filosofie. Dus studeert ze geen Geschiedenis.", r: "ad" },
  { t: "Als de ziel materieel was, zou ze vergaan zoals het lichaam. De ziel vergaat niet. Dus is de ziel niet materieel.", r: "mt" },
  { t: "Als de theorie goed is, komen haar voorspellingen uit. Haar voorspellingen komen uit. Dus is de theorie goed.", r: "ac" },
  { t: "Als het regent, zijn er wolken. Dus als er wolken zijn, regent het.", r: "cc" },
  { t: "Het is niet waar dat de verdachte schuldig is en alleen heeft gehandeld. Dus de verdachte is niet schuldig.", r: "nc" },
  /* (22-10, nube) T2b: ocho más; cinco son trampas (ac, na, ad, cc, nc) */
  { t: "Als het museum open is, is er licht bij de ingang. Er is geen licht bij de ingang. Dus het museum is niet open.", r: "mt" },
  { t: "Als Plato gelijk heeft, is de ziel onsterfelijk. De ziel is onsterfelijk. Dus Plato heeft gelijk.", r: "ac" },
  { t: "Als het erg koud is, bevriest het meer. Het is niet erg koud. Dus het meer bevriest niet.", r: "na" },
  { t: "Bea kan zwemmen of fietsen. Ze kan zwemmen. Dus ze kan niet fietsen.", r: "ad" },
  { t: "Als je uit Bilbao komt, kom je uit Biskaje. Dus, als je uit Biskaje komt, kom je uit Bilbao.", r: "cc" },
  { t: "Als het thuisteam wint, is er feest; als het uitteam wint, is er ook feest, omdat beide uit het dorp komen. Een van beide zal winnen. Dus er is feest.", r: "dc" },
  { t: "Als de prijs van diesel stijgt, stijgt het transport; als het transport stijgt, stijgen de voedingsmiddelen. Dus, als de dieselprijs stijgt, stijgen de voedingsmiddelen.", r: "sh" },
  { t: "Het is niet waar dat Jan tegelijk klassenvertegenwoordiger en penningmeester is. Dus Jan is geen penningmeester.", r: "nc" }
];
function logmTodas(){ return LOGM_REGLAS.concat(LOGM_FALACIAS); }
function logmForma(x){ return x.p.split(";").map(s => s.trim()).join(" · ") + " ⊢ " + x.c; }
function logmCarta(x, fal){
  return '<div class="lg-regla' + (fal ? " lg-falaz" : "") + '"><h3>' + logEsc(x.n) + '</h3><p class="lg-forma"><b>' + logmT("forma") + ":</b> " + logEsc(logmForma(x)) + "</p>" +
    '<p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p>" + (fal ? '<p><b>' + logmT("porQue") + ":</b> " + logEsc(x.por) + "</p>" : "") +
    '<p><button type="button" class="btn ghost" data-infp="' + logEsc(x.p) + '" data-infc="' + logEsc(x.c) + '">' + logmT("verTabla") + " →</button></p></div>";
}
function logRenderInferencia(){
  const T = logmTodas();
  return '<div class="lg-panel"><h2>' + logmT("validas") + '</h2><div class="lg-reglas">' + LOGM_REGLAS.map(x => logmCarta(x, false)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<p><button type="button" class="btn ghost" data-lgtab="falacias">' + logmT("falVer") + "</button></p>" +
    '<p><button type="button" class="btn ghost" data-lgtab="leyes">' + logmT("leyesIr") + "</button></p>" +
    '<div class="lg-panel"><h2>' + logmT("ejTit") + '</h2><p class="lg-nota">' + logmT("ejAyuda") + "</p>" +
    LOGM_EJ.map((e, i) => {
      const r = LOG.inf[i], bien = T.find(x => x.k === e.r);
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.t) + '</p><div class="lg-teclas">' + T.map(x => '<button type="button" class="chip' + (r === x.k ? (x.k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + '" data-infej="' + i + '" data-infr="' + x.k + '"' + (r ? " disabled" : "") + ">" + logEsc(x.n) + "</button>").join("") + "</div>" +
        (r ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "acierto" : "fallo", { r: logEsc(bien.n) }) + " " + logmT("formaArg", { f: logEsc(logmForma(bien)) }) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
}

/* ---------- Cuantificadores (lógica de predicados) ---------- */
/* Las cuatro proposiciones de Aristóteles en lógica de predicados, un «mundo pequeño» donde se evalúan (con el caso
   del sujeto vacío: el compromiso existencial del tema 4) y un ejercicio de elegir la fórmula de cada frase. */
const LOGM_CQ_TXT = {
  tabCuantificadores: "Kwantoren",
  introCuantificadores: "De logica van de waarheidstabellen kan “Alle mensen zijn sterfelijk; Socrates is een mens; dus Socrates is sterfelijk” niet analyseren, omdat ze niet ziet wat er binnen elke zin zit. Frege (1879) voegde de predicaten toe (Hx = ‘x is mens’) en de kwantoren: ∀x, ‘voor alle x’, en ∃x, ‘er bestaat minstens één x’. Daarmee schrijf je de vier proposities van Aristoteles en nog veel meer.",
  cqCuatro: "De vier proposities van Aristoteles", cqProp: "Propositie", cqFormula: "Formule", cqLee: "Lees je als",
  cqTrampa: "Valkuil: “Alle S zijn P” is niet ∀x (Sx ∧ Px), wat zou zeggen dat alles tegelijk S en P is; en “Sommige S zijn P” is niet ∃x (Sx → Px), wat waar is zodra er iets is dat geen S is.",
  cqNeg: "Een kwantor ontkennen: ¬∀x Px is equivalent aan ∃x ¬Px (“niet allemaal” = “sommige niet”), en ¬∃x Px is equivalent aan ∀x ¬Px (“geen enkele” = “allemaal niet”). Daarom zijn A en O contradictoir, en ook E en I.",
  cqMundo: "Een kleine wereld", cqMundoAyuda: "Vijf individuen (a, b, c, d, e). Markeer welke S zijn en welke P en kijk welke proposities waar blijken te zijn.",
  cqInd: "Individu", cqVacio: "Probeer S leeg te laten: dan zijn “Alle S zijn P” en “Geen S is P” tegelijk waar, en is “Sommige S zijn P” onwaar. In de moderne logica neemt de universele propositie niet aan dat er S zijn: dat is de existentiële aanname van thema 4.",
  cqOrdenTit: "Een drogreden met kwantoren: de volgorde veranderen",
  cqOrden: "“Iedereen heeft een moeder” is ∀x ∃y Myx: voor elke persoon x is er iemand y die zijn of haar moeder is. “Er is een moeder van iedereen” is ∃y ∀x Myx: er bestaat een y die moeder is van alle x. Het veranderen van de volgorde van ∀ en ∃ verandert wat er gezegd wordt: uit de eerste volgt de tweede niet.",
  cqOrdenMadre: "zijn/haar moeder", cqOrdenContra: "Tegenvoorbeeld: in deze wereld heeft iedereen zijn/haar moeder, dus ∀x ∃y Myx is waar; maar geen van hen is moeder van de drie, dus ∃y ∀x Myx is onwaar. Ware premisse en onware conclusie: de gevolgtrekking is niet geldig. (Omgekeerd geldt het wel: als er een moeder van iedereen is, heeft iedereen een moeder).",
  cqOrdenFilo: "In de filosofie: er wordt gediscussieerd of Aristoteles deze sprong maakt aan het begin van de “Ethica Nicomachea” (I 2), want uit het feit dat elke handeling een of ander doel nastreeft volgt niet dat er één enkel doel is dat alle handelingen nastreven. En sommige critici van de kosmologische argumenten zien het in de stap van “alles heeft een oorzaak” naar “er is een oorzaak van alles”.",
  cqTesti: "Laat zien: {x}", cqContra: "Gaat fout bij: {x}", cqNadie: "er is geen", cqSinS: "waar omdat er geen S is",
  cqPresets: "Voorbeeldwerelden:", cqP1: "Alle S zijn P", cqP2: "Geen S is P", cqP3: "Sommige wel en andere niet", cqP4: "Er is geen S",
  cqEjTit: "Welke formule is het?", cqEjAyuda: "Kies de formule die hetzelfde zegt als de zin. De hoofdletter is het predicaat en de kleine letter een concreet individu.",
  cqBien: "Correct!", cqMal: "No.", cqEjemplo: "Uitgewerkt voorbeeld: het syllogisme van Socrates",
  cqEjemploTxt: "Alle mensen zijn sterfelijk: ∀x (Hx → Mx). Socrates is een mens: Hs. Dus Socrates is sterfelijk: Ms. Uit de eerste premisse volgt Hs → Ms (wat voor alle x geldt, geldt voor Socrates: “universele instantiatie”), en uit Hs → Ms en Hs volgt Ms via modus ponens."
};
const LOGM_CQ4 = [
  ["A", "Alle S zijn P", "∀x (Sx → Px)", "voor alle x, als x S is, dan is x P"],
  ["E", "Geen S is P", "∀x (Sx → ¬Px)", "voor alle x, als x S is, dan is x niet P (of: ¬∃x (Sx ∧ Px))"],
  ["I", "Sommige S zijn P", "∃x (Sx ∧ Px)", "er bestaat minstens één x die S is en P is"],
  ["O", "Sommige S zijn niet P", "∃x (Sx ∧ ¬Px)", "er bestaat minstens één x die S is en niet P is"]
];
const LOGM_CQ_IND = ["a", "b", "c", "d", "e"];
const LOGM_CQ_PRE = {
  p1: [[1, 1], [1, 1], [0, 1], [0, 0], [1, 1]], p2: [[1, 0], [1, 0], [0, 1], [0, 1], [0, 0]],
  p3: [[1, 1], [1, 0], [0, 1], [1, 1], [0, 0]], p4: [[0, 1], [0, 0], [0, 1], [0, 0], [0, 1]]
};
const LOGM_CQ_EJ = [
  { f: "Alle filosofen zijn nieuwsgierig.", d: "F = filosoof, C = nieuwsgierig", o: ["∀x (Fx → Cx)", "∀x (Fx ∧ Cx)", "∃x (Fx ∧ Cx)", "∀x (Cx → Fx)"], r: 0, por: "Universeel bevestigend (A). Met ∧ zou het zeggen dat iedereen filosoof en nieuwsgierig is; met de pijl omgekeerd, dat iedere nieuwsgierige een filosoof is." },
  { f: "Sommige sofisten lieten zich betalen voor hun onderwijs.", d: "S = sofist, C = liet zich betalen voor onderwijs", o: ["∃x (Sx → Cx)", "∃x (Sx ∧ Cx)", "∀x (Sx → Cx)"], r: 1, por: "Particulier bevestigend (I): er bestaat iemand die sofist is en betaald werd. Met de pijl zou het voldoende zijn dat er iets bestaat dat geen sofist is." },
  { f: "Geen god is sterfelijk.", d: "D = god, M = sterfelijk", o: ["¬∀x (Dx → Mx)", "∀x (¬Dx → Mx)", "∀x (Dx → ¬Mx)"], r: 2, por: "Universeel ontkennend (E). Ook geldt ¬∃x (Dx ∧ Mx): “er bestaat niets dat god en sterfelijk is”." },
  { f: "Niet alle Grieken waren filosofen.", d: "G = Griek, F = filosoof", o: ["∀x (Gx → ¬Fx)", "¬∀x (Gx → Fx)", "¬∀x (Gx ∧ Fx)"], r: 1, por: "Valstrik: “niet alle” is niet “geen”. Komt overeen met ∃x (Gx ∧ ¬Fx): een of andere Griek was geen filosoof (O). ¬∀x (Gx ∧ Fx) zou al waar zijn als er iets was dat geen Griek was." },
  { f: "Alleen burgers stemden in de volksvergadering.", d: "V = stemde in de volksvergadering, C = burger", o: ["∀x (Cx → Vx)", "∀x (Vx → Cx)", "∃x (Vx ∧ Cx)"], r: 1, por: "Valkuil: “alleen C” plaatst de noodzakelijke voorwaarde achter de pijl: iedereen die stemde was burger (niet elke burger stemde)." },
  { f: "Er is iets dat niet door iets anders veroorzaakt is.", d: "C = veroorzaakt door iets anders", o: ["¬∃x ¬Cx", "∀x ¬Cx", "∃x ¬Cx"], r: 2, por: "Er bestaat minstens één x die niet veroorzaakt is: dat is het idee van de eerste beweger van Aristoteles of van de eerste oorzaak van Thomas van Aquino." },
  { f: "Socrates is sterfelijk.", d: "M = sterfelijk, s = Socrates", o: ["∃x Mx", "Ms", "∀x Mx"], r: 1, por: "Een concreet individu wordt met een kleine letter (een constante) geschreven: een kwantor is niet nodig." },
  { f: "Iedereen die denkt bestaat.", d: "P = denkt, E = bestaat", o: ["∀x (Px → Ex)", "∀x (Ex → Px)", "∃x (Px ∧ Ex)"], r: 0, por: "Universeel bevestigend (A). Om “ik besta” af te leiden zou je bovendien de premisse “ik denk” (Pi) nodig hebben en universele instantiatie, net als bij Socrates." },
  { f: "Iedereen heeft een moeder.", d: "M = “y is moeder van x”", o: ["∃y ∀x Myx", "∀x ∃y Myx", "∀x ∀y Myx"], r: 1, por: "Voor elke persoon is er een moeder (die kan per geval verschillen). ∃y ∀x Myx zou zeggen dat er één enkele moeder van iedereen is: dat is het omkeren van de volgorde van de kwantoren." },
  { f: "Er is iemand die iedereen bewondert.", d: "A = “x bewondert y”", o: ["∀x ∃y Axy", "∃y ∀x Axy", "∃x ∃y Axy"], r: 1, por: "Er bestaat een y die door iedereen bewonderd wordt. ∀x ∃y Axy zou alleen zeggen dat iedereen iemand bewondert, misschien verschillende personen." },
  /* (22-10, nube) T2c: «solo los», «no todos», «nadie» y relaciones */
  { f: "Alleen meerderjarigen mogen stemmen.", d: "V = mag stemmen, M = meerderjarig", o: ["∀x (Mx → Vx)", "∀x (Mx ∧ Vx)", "∀x (Vx → Mx)"], r: 2, por: "Instinker: “alleen de M’s” zet M achter de pijl: iedereen die kan stemmen is meerderjarig. Het zegt niet dat alle meerderjarigen kunnen stemmen (∀x (Mx → Vx)), noch dat iedereen meerderjarig is en stemt (∀x (Mx ∧ Vx))." },
  { f: "Niet alle sofisten waren buitenlanders.", d: "S = sofist, E = buitenlander", o: ["∃x (Sx ∧ ¬Ex)", "∀x (Sx → ¬Ex)", "∃x (Sx → ¬Ex)"], r: 0, por: "“Niet alle” is de O: ten minste één sofist was geen buitenlander. Komt overeen met ¬∀x (Sx → Ex). ∀x (Sx → ¬Ex) zegt dat geen enkele sofist buitenlander was, wat veel sterker is; ∃x (Sx → ¬Ex), met de pijl, zou waar zijn zodra er iets bestaat dat geen sofist is." },
  { f: "Niemand is perfect.", d: "P = perfect (we hebben het over personen)", o: ["∃x ¬Px", "¬∀x ¬Px", "¬∃x Px"], r: 2, por: "Instinker: “niemand” is “er bestaat geen enkele”: ¬∃x Px, wat overeenkomt met ∀x ¬Px. ∃x ¬Px zegt veel minder: dat iemand niet perfect is. ¬∀x ¬Px komt overeen met ∃x Px: het zegt dat iemand wél perfect is." },
  { f: "Iedereen bewondert Socrates.", d: "A = “x bewondert y”, s = Socrates", o: ["∀x Asx", "∀x Axs", "∃x Axs"], r: 1, por: "De volgorde van de letters is belangrijk: Axs betekent “x bewondert Socrates”. ∀x Asx zou zeggen dat Socrates iedereen bewondert." },
  { f: "Socrates bewondert iemand die hem niet bewondert.", d: "A = “x bewondert y”, s = Socrates", o: ["∃y (Asy → ¬Ays)", "∀y (Asy ∧ ¬Ays)", "∃y (Asy ∧ ¬Ays)"], r: 2, por: "Met ∃ hoort ∧: er is iemand die Socrates bewondert en die hem niet bewondert. Met de pijl zou het al genoeg zijn dat er iemand bestaat die Socrates niet bewondert; met ∀ wordt de formule tegenstrijdig: als je y = Socrates neemt, zou die zeggen dat Socrates zichzelf bewondert en niet bewondert." },
  { f: "Geen enkele Griekse filosoof schreef in het Latijn.", d: "F = filosoof, G = Grieks, L = schreef in het Latijn", o: ["∀x ((Fx ∧ Gx) → ¬Lx)", "∀x (Fx → (Gx ∧ ¬Lx))", "¬∃x (Fx ∧ Lx)"], r: 0, por: "Het onderwerp is “Griekse filosoof” als geheel: het staat vóór de pijl. ∀x (Fx → (Gx ∧ ¬Lx)) zegt dat alle filosofen Grieks zijn; ¬∃x (Fx ∧ Lx), dat geen enkele filosoof in het Latijn schreef, en Augustinus of Thomas deden dat wel." },
  { f: "Sommige leerlingen hebben geen enkel boek gelezen.", d: "A = leerling, B = boek, L = “x heeft y gelezen”", o: ["∃x (Ax ∧ ∃y (By ∧ ¬Lxy))", "¬∃x (Ax ∧ ∃y (By ∧ Lxy))", "∃x (Ax ∧ ¬∃y (By ∧ Lxy))"], r: 2, por: "Er is een leerling voor wie er geen enkel gelezen boek bestaat. ∃x (Ax ∧ ∃y (By ∧ ¬Lxy)) zegt alleen dat er een boek is dat hij niet heeft gelezen (dat overkomt iedereen); ¬∃x (Ax ∧ ∃y (By ∧ Lxy)), dat geen enkele leerling iets heeft gelezen." },
  { f: "Elk gevolg heeft een oorzaak.", d: "E = gevolg, C = “y is oorzaak van x”", o: ["∀x (Ex → ∃y Cyx)", "∃y ∀x (Ex → Cyx)", "∀x ∃y (Ex ∧ Cyx)"], r: 0, por: "Elk gevolg heeft een of andere oorzaak, misschien een verschillende. ∃y ∀x zou zeggen dat er één enkele oorzaak is voor alle gevolgen: van de ene naar de andere overgaan is de verwisseling van de volgorde van de kwantoren, en sommigen hebben die sprong gezien in sommige godsbewijzen. ∀x ∃y (Ex ∧ Cyx) zegt bovendien dat alles een gevolg is." }
];
function logmCqEval(m){
  const ix = i => LOGM_CQ_IND[i], S = m.map(r => !!r[0]), P = m.map(r => !!r[1]), all = [0, 1, 2, 3, 4];
  const res = {
    A: { v: all.every(i => !S[i] || P[i]), malos: all.filter(i => S[i] && !P[i]) },
    E: { v: all.every(i => !S[i] || !P[i]), malos: all.filter(i => S[i] && P[i]) },
    I: { v: all.some(i => S[i] && P[i]), buenos: all.filter(i => S[i] && P[i]) },
    O: { v: all.some(i => S[i] && !P[i]), buenos: all.filter(i => S[i] && !P[i]) }
  };
  Object.values(res).forEach(r => { r.txt = r.malos ? (r.malos.length ? logmT("cqContra", { x: r.malos.map(ix).join(", ") }) : (S.some(Boolean) ? "" : logmT("cqSinS"))) : (r.buenos.length ? logmT("cqTesti", { x: r.buenos.map(ix).join(", ") }) : logmT("cqNadie")); });
  return res;
}
function logmCqMundo(){
  const m = LOG.cq.m, res = logmCqEval(m);
  return '<div class="tablewrap"><table class="lg-tabla lg-cq-mundo"><thead><tr><th>' + logmT("cqInd") + "</th>" + LOGM_CQ_IND.map(x => "<th>" + x + "</th>").join("") + "</tr></thead><tbody>" +
    ["S", "P"].map((k, j) => "<tr><th>" + k + "</th>" + m.map((r, i) => '<td><button type="button" class="chip lg-cq-cel' + (r[j] ? " on" : "") + '" data-cqi="' + i + '" data-cqj="' + j + '" aria-pressed="' + !!r[j] + '">' + (r[j] ? "✓" : "·") + "</button></td>").join("") + "</tr>").join("") +
    '</tbody></table></div><div class="tablewrap"><table class="lg-tabla"><tbody>' +
    LOGM_CQ4.map(([t, , f]) => '<tr><th>' + t + "</th><td>" + logEsc(f) + "</td>" + logVF(res[t].v) + '<td class="lg-cq-x">' + logEsc(res[t].txt) + "</td></tr>").join("") + "</tbody></table></div>";
}
function logRenderCuantificadores(){
  const ej = LOG.cq.ej;
  return '<div class="lg-panel"><h2>' + logmT("cqCuatro") + '</h2><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("cqProp") + "</th><th>" + logmT("cqFormula") + "</th><th>" + logmT("cqLee") + "</th></tr></thead><tbody>" +
    LOGM_CQ4.map(([t, p, f, l]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + '</td><td class="lg-forma">' + logEsc(f) + "</td><td>" + logEsc(l) + "</td></tr>").join("") + "</tbody></table></div>" +
    '<p class="lg-nota">' + logmT("cqTrampa") + '</p><p class="lg-nota">' + logmT("cqNeg") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqMundo") + '</h2><p class="lg-nota">' + logmT("cqMundoAyuda") + '</p><p class="lg-nota">' + logmT("cqPresets") + " " +
    [["p1", "cqP1"], ["p2", "cqP2"], ["p3", "cqP3"], ["p4", "cqP4"]].map(([k, l]) => '<button type="button" class="chip" data-cqpre="' + k + '">' + logmT(l) + "</button>").join(" ") + "</p>" +
    '<div id="lg-cq">' + logmCqMundo() + '</div><p class="lg-nota">' + logmT("cqVacio") + "</p></div>" +
    logmGeneralizacion() +
    /* (12-10) la falacia del cambio de orden de los cuantificadores, con su contraejemplo */
    logmCqOrden() +
    '<div class="lg-panel"><h2>' + logmT("cqEjTit") + '</h2><p class="lg-nota">' + logmT("cqEjAyuda") + "</p>" +
    LOGM_CQ_EJ.map((e, i) => {
      const r = ej[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.f) + ' <span class="lg-nota">(' + logEsc(e.d) + ')</span></p><div class="lg-teclas">' +
        e.o.map((o, k) => '<button type="button" class="chip lg-forma' + (r != null && r === k ? (k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + (r != null && k === e.r && r !== k ? " lg-chip-ok" : "") + '" data-cqej="' + i + '" data-cqo="' + k + '"' + (r != null ? " disabled" : "") + ">" + logEsc(o) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "cqBien" : "cqMal") + " " + logEsc(e.por) + "</p>" : "") + "</div>";
    }).join("") + '<details class="lg-guia"><summary>' + logmT("cqEjemplo") + "</summary><p>" + logmT("cqEjemploTxt") + "</p></details></div>";
}

Object.assign(LOGM_TXT, LOGM_CQ_TXT);

/* ---------- (12-10) lo que faltaba: conversión ilícita, generalización apresurada y «lo que la lógica puede y no puede refutar» ---------- */
const LOGM_EXTRA_TXT = {
  convTit: "Conversie: kun je een propositie omkeren?",
  convIntro: "Omkeren is het verwisselen van subject en predicaat. Soms blijft de waarheid behouden en soms niet: omkeren wanneer dat niet kan is de drogreden van de ongeoorloofde conversie.",
  convProp: "Propositie", convConv: "Omgekeerd", convVale: "Geldig?", convEj: "Voorbeeld",
  convSi: "Sí", convNo: "Nee: ongeoorloofde conversie", convAcc: "Alleen “Sommige P zijn S” (als er S bestaan)",
  genTit: "Van sommige naar alle: de overhaaste generalisatie",
  gen: "Uit ∃x (Sx ∧ Px), “sommige S zijn P”, volgt niet ∀x (Sx → Px), “alle S zijn P”. De logica toont dit met een tegenvoorbeeld: in de wereld “Sommige wel en andere niet” is de I waar en de A onwaar. Hoeveel gevallen er nodig zijn om voorzichtig te generaliseren, is niet langer een kwestie van deductieve logica, maar van inductie: geen enkel aantal gevallen garandeert het.",
  genVer: "Zie het in de kleine wereld",
  lpTit: "Wat de logica wel en niet kan weerleggen",
  lpIntro: "De formele drogredenen hierboven worden weerlegd met de vorm: één tegenvoorbeeld volstaat. Andere drogredenen hebben geen vormfout, maar ze formaliseren helpt om ze te zien; en andere kunnen niet met logica worden weerlegd, omdat het probleem in de inhoud zit.",
  lpAyuda: "De logica helpt, maar is niet genoeg", lpNo: "De logica weerlegt ze niet", lpQueVe: "Wat de logica laat zien",
  lpNoIntro: "Hun vorm kan geldig zijn of niet eens een argument zijn: de fout zit in de vraag of de premissen waar zijn of ter zake doen. Om ze te ontdekken moet je naar de inhoud vragen.",
  lpNoNomina: "Dit is slechts een voorbeeld. De volledige lijst van informele drogredenen, met voor elke een naam en de definitie uit het woordenboek, is die van “Informele drogredenen: de lijst van Rincón”, verderop op dit tabblad.", lpNoNominaIr: "Ga naar de volledige lijst ↓",   /* (22-10) remite a la nómina única */
  lpDuelo: "Oefen ze in het Duelo de razones →"
};
const LOGM_CONV = [
  ["A", "Alle S zijn P", "Alle P zijn S", "nee", "Alle honden zijn zoogdieren; maar niet alle zoogdieren zijn honden."],
  ["E", "Geen S is P", "Geen P is S", "si", "Geen enkele vis is een zoogdier; dus geen enkel zoogdier is een vis."],
  ["I", "Sommige S zijn P", "Sommige P zijn S", "si", "Sommige filosofen zijn Grieks; dus sommige Grieken zijn filosofen."],
  ["O", "Sommige S zijn niet P", "Sommige P zijn geen S", "nee", "Sommige dieren zijn geen honden; maar daaruit volgt niet dat sommige honden geen dieren zijn."]
];
const LOGM_AYUDA = [
  { n: "Dubbelzinnigheid", ej: "Het doel van een ding is zijn volmaaktheid. De dood is het einde van het leven. Dus de dood is de volmaaktheid van het leven.", ve: "Bij het formaliseren krijgen “doel” als “doelstelling” en “einde” als “slot” verschillende letters: er verschijnt een vierde term en het syllogisme is niet meer geldig." },
  { n: "Cirkelredenering", ej: "Dit boek zegt de waarheid, omdat het boek zelf het zegt.", ve: "Het argument is geldig (p ⊢ p), maar de conclusie zat al in de premisse: het bewijst niets dat niet al als vanzelfsprekend werd aangenomen." },
  { n: "Vals dilemma", ej: "Of je bent voor mij, of je bent tegen mij. Je bent niet voor mij. Dus je bent tegen mij.", ve: "De vorm is een disjunctief syllogisme, dat geldig is. Wat niet klopt, is de premisse p ∨ q: er zijn meer opties." },
  { n: "Gladde helling", ej: "Als we toestaan dat de mobiele telefoon tijdens de pauze wordt gebruikt, zullen ze hem in de klas gebruiken; als ze hem in de klas gebruiken, zal niemand opletten; als niemand oplet, zal iedereen zakken.", ve: "De keten p → q, q → r, r → s is geldig (hypothetisch syllogisme), maar elke voorwaardelijke uitspraak is hoogstens waarschijnlijk: de waarschijnlijkheid gaat bij elke stap verloren." },
  { n: "Enthymeem", ej: "Het is duur, dus het zal wel goed zijn.", ve: "Om geldig te zijn ontbreekt een premisse: “alles wat duur is, is goed”. Formaliseren brengt die aan het licht, en dan zie je dat ze onwaar is." }
];
const LOGM_NOFORMAL = [
  ["Persoonlijke aanval (ad hominem)", "Valt de spreker aan, niet wat hij zegt.", "g-fil-ad-hominem"],
  ["Valse autoriteit", "Baseert de conclusie op iemand die daar geen expert in is.", "g-fil-apelacion-a-la-autoridad"],
  ["Beroep op de meerderheid (ad populum)", "Dat veel mensen het geloven, maakt het niet waar.", "g-fil-apelacion-a-la-mayoria"],
  ["Beroep op medelijden of angst", "Zoekt een emotie in plaats van een reden te geven.", "g-fil-apelacion-a-la-emocion"],
  ["Stroman", "Weerlegt een verdraaide versie van wat de ander zei.", "g-fil-hombre-de-paja"],
  ["Valse oorzaak", "Dat iets daarna gebeurt, bewijst niet dat het dat veroorzaakt.", "g-fil-causa-falsa"]
];   /* (22-10) tercer campo: entrada del diccionario de 1.º; la lista completa es la nómina única (logmNomina, #lg-nomina), en esta misma pestaña */
function logmConversion(){
  return '<div class="lg-panel"><h2>' + logmT("convTit") + '</h2><p class="lg-nota">' + logmT("convIntro") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("convProp") + "</th><th>" + logmT("convConv") + "</th><th>" + logmT("convVale") + "</th><th>" + logmT("convEj") + "</th></tr></thead><tbody>" +
    LOGM_CONV.map(([t, p, c, v, e]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + "</td><td>" + logEsc(c) + '</td><td class="lg-' + (v === "si" ? "v" : "f") + '">' + logmT(v === "si" ? "convSi" : "convNo") + (t === "A" ? "<br><small>" + logmT("convAcc") + "</small>" : "") + "</td><td>" + logEsc(e) + "</td></tr>").join("") + "</tbody></table></div></div>";
}
function logmGeneralizacion(){
  return '<div class="lg-panel"><h2>' + logmT("genTit") + "</h2><p>" + logmT("gen") + '</p><p><button type="button" class="btn ghost" data-cqpre="p3">' + logmT("genVer") + "</button></p></div>";
}
function logmPuedeNoPuede(){
  const duelo = document.getElementById("duelo") ? '<p><button type="button" class="btn ghost" data-igo="duelo" data-iarg="">' + logmT("lpDuelo") + "</button></p>" : "";
  return '<div class="lg-panel"><h2>' + logmT("lpTit") + '</h2><p class="lg-nota">' + logmT("lpIntro") + "</p><h3>" + logmT("lpAyuda") + '</h3><div class="lg-reglas">' +
    LOGM_AYUDA.map(x => '<div class="lg-regla lg-medio"><h3>' + logEsc(x.n) + '</h3><p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p><p><b>" + logmT("lpQueVe") + ":</b> " + logEsc(x.ve) + "</p></div>").join("") + "</div>" +
    "<h3>" + logmT("lpNo") + '</h3><p class="lg-nota">' + logmT("lpNoIntro") + '</p><ul class="lg-nof">' + LOGM_NOFORMAL.map(([n, d, g]) => "<li><b>" + (logmGlos(g) ? '<a href="#diccionario/' + g + '">' + logEsc(n) + "</a>" : logmFalFuera(g, n)) + ":</b> " + logEsc(d) + "</li>").join("") + "</ul>" +
    (typeof LOGX !== "undefined" && LOGX.falacias ? '<p class="lg-nota">' + logmT("lpNoNomina") + ' <button type="button" class="btn ghost" data-lgnomina="1">' + logmT("lpNoNominaIr") + "</button></p>" : "") + duelo + "</div>";
}
Object.assign(LOGM_TXT, LOGM_EXTRA_TXT);

/* ---------- (12-10) pestaña «Falacias»: todas las falacias del Rincón, reunidas (estaban repartidas por Cuadrado, Reglas de inferencia y Cuantificadores) ---------- */
Object.assign(LOGM_TXT, {
  tabFalacias: "Drogredenen",
  introFalacias: "Een drogreden is een redenering die correct lijkt, maar dat niet is. Hier zijn alle drogredenen uit de Logica-hoek verzameld: eerst de formele, die met een tegenvoorbeeld worden weerlegd; daarna de drogredenen die de logica helpt te zien, en ten slotte de drogredenen die je alleen ontdekt door naar de inhoud te kijken.",
  falSilTit: "Drogredenen van het syllogisme",
  falSilIntro: "Een syllogisme dat een van de regels van Aristoteles overtreedt, is niet geldig. Bij elk van deze drogredenen hoort een voorbeeld dat je kunt openen in het tabblad Syllogismen om het venndiagram te zien.",
  falR1: "Niet-gedistribueerde middenterm", falR2P: "Illegitieme major", falR2S: "Illegitieme minor", falR3: "Twee negatieve premissen", falR4a: "Negatieve premisse en bevestigende conclusie", falR5: "Twee particuliere premissen",
  falProbar: "Bekijk het in Syllogismen →",
  falVer: "Alle drogredenen, verzameld in het tabblad “Drogredenen” →",
  enLaDe1o: "op de website van het 1e jaar"   /* (22-10, docs/39) nota del enlace a la entrada del diccionario en la web de 1.º */
});
const LOGM_FAL_SIL = [["r1", "AAA-2"], ["r2P", "AEE-1"], ["r2S", "AAA-3"], ["r3", "EEE-1"], ["r4a", "AEA-1"], ["r5", "III-1"]];
function logmCqOrden(){
  return '<div class="lg-panel"><h2>' + logmT("cqOrdenTit") + "</h2><p>" + logmT("cqOrden") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th>x</th><th>' + logmT("cqOrdenMadre") + "</th></tr></thead><tbody>" +
    [["a", "m1"], ["b", "m2"], ["c", "m3"]].map(([x, y]) => "<tr><td>" + x + "</td><td>" + y + "</td></tr>").join("") + '</tbody></table></div><p class="lg-nota">' + logmT("cqOrdenContra") + '</p><p class="lg-nota">' + logmT("cqOrdenFilo") + "</p></div>";
}
function logRenderFalacias(){
  return '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falSilTit") + '</h2><p class="lg-nota">' + logmT("falSilIntro") + '</p><div class="lg-reglas">' +
    LOGM_FAL_SIL.map(([r, m]) => '<div class="lg-regla lg-falaz"><h3>' + logmT("falR" + r.slice(1)) + "</h3><p>" + logT(r) + '</p><p class="lg-forma">' + m + '</p><p><button type="button" class="btn ghost" data-falsil="' + m + '">' + logmT("falProbar") + "</button></p></div>").join("") + "</div></div>" +
    logmConversion() + logmGeneralizacion() + logmCqOrden() + logmPuedeNoPuede() + logmNomina() + logmQueFalacia();
}
/* (22-10, nube) T5: falacias no formales. La definición vive en el diccionario de 1.º (fuente única); aquí, la lista con sus
   otros nombres, un ejemplo y cómo pararla, y el ejercicio «¿Qué falacia es?». Datos y textos en logica_ejercicios.js (LOGX).
   En la web de HF no están esas entradas del diccionario: el nombre se queda sin enlace y sin definición. */
function logmGlos(id){ return typeof DICCIONARIO !== "undefined" ? DICCIONARIO.find(g => g.id === id) : null; }
/* (22-10, docs/39) Cuando la entrada g-fil-… del diccionario de 1.º no está en esta web (hf), en vez de dejar el nombre de
   la falacia sin enlace se enlaza a su entrada en el diccionario de la web de 1.º (misma lengua, pestaña nueva), con la nota
   «(en la web de 1.º)». En la web de 1.º logmGlos ya la encuentra, así que esto solo actúa fuera de ella. */
function logmFalFuera(id, txt){
  const e = logEsc, h = "#diccionario/" + id;
  return (typeof logItinEs1o === "function" && logItinEs1o(h))
    ? '<a href="' + logItin1oUrl(h) + '" target="_blank" rel="noopener">' + e(txt) + ' <span class="lg-nota">(' + e(logmT("enLaDe1o")) + ")</span></a>"
    : e(txt);
}
function logmNomina(){
  if (typeof LOGX === "undefined" || !LOGX.falacias) return "";
  const e = logEsc, T = LOGX.t;
  return '<div class="lg-panel" id="lg-nomina"><h2>' + e(T.nomTit) + '</h2><p class="lg-nota">' + e(T.nomIntro) + '</p><div class="lg-reglas">' +
    LOGX.falacias.map(f => { const g = logmGlos(f.g);
      return '<div class="lg-regla lg-falaz"><h3>' + (g ? '<a href="#diccionario/' + f.g + '">' + e(g.t) + "</a>" : logmFalFuera(f.g, f.nom)) + "</h3>" + (g ? "<p>" + e(g.def) + "</p>" : "") +
        '<p class="lg-nota"><b>' + e(T.nomOtros) + "</b> " + e(f.otros) + "</p><p><b>" + e(T.nomEj) + "</b> " + e(f.ej) + "</p><p><b>" + e(T.nomParar) + "</b> " + e(f.parar) + "</p></div>"; }).join("") + "</div></div>";
}
function logmQueFalacia(){
  if (typeof LOGX === "undefined" || !LOGX.qf) return "";
  const e = logEsc, T = LOGX.t, R = (LOG.qf = LOG.qf || {}), nom = id => (id === "no-es-falacia" ? T.qfNo : ((LOGX.falacias.find(f => f.g === id) || {}).nom || id));
  const hechas = Object.keys(R), bien = hechas.filter(i => R[i] === LOGX.qf[i].tipo).length;
  return '<div class="lg-panel" id="lg-qf"><h2>' + e(T.qfTit) + '</h2><p class="lg-nota">' + e(T.qfIntro) + '</p><p class="lg-nota" aria-live="polite">' + e(T.qfCuenta.replace("{a}", bien).replace("{n}", hechas.length)) + "</p>" +
    LOGX.qf.map((x, i) => { const r = R[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + e(x.txt) + '</p><div class="lg-teclas">' +
        x.o.map(o => '<button type="button" class="chip' + (r != null && o === x.tipo ? " lg-chip-ok" : r === o ? " lg-chip-no" : "") + '" data-qf="' + i + '" data-qfo="' + o + '"' + (r != null ? " disabled" : "") + ">" + e(nom(o)) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === x.tipo ? "lg-tautologia" : "lg-contradiccion") + '">' + e(r === x.tipo ? T.qfBien : T.qfMal.replace("{x}", nom(x.tipo))) + " " + e(x.por) + "</p>" : "") + "</div>"; }).join("") + "</div>";
}


/* ---------- (18-10) pestaña «Leyes lógicas»: las 70 leyes elementales y las 21 reglas derivadas de deducción ----------
   Transcritas de dos fotocopias que trajo el profesor el 18-10 («Leyes elementales de la lógica de enunciados», 2 hojas
   a máquina, y «Reglas derivadas de deducción», 2 hojas). Las 70 leyes se han comprobado como tautologías y las 21 reglas
   como argumentos válidos con este mismo motor (logParse/logEval). Erratas de la hoja corregidas: en la 40 falta la
   flecha de «(p r)». La 68 lleva (p → r), la forma habitual de la ley de ese nombre; la hoja pone (q → r), que también
   es tautología (orden del profesor del 18-10). Las abreviaturas de los nombres se escriben enteras («Lcp» = ley de carga de premisa, regla Cpr). */
Object.assign(LOGM_TXT, {
  tabLeyes: "Logische wetten",
  introLeyes: "Een logische wet is een formule die altijd waar is, ongeacht de waarden van de letters: een tautologie. Hier vind je 70 wetten van de propositielogica, gegroepeerd per familie, en de 21 afgeleide deductieregels die erop steunen. Klik op “Tabel” bij een willekeurige wet om die zelf te controleren.",
  leyesTit: "Elementaire wetten van de propositielogica",
  leyesNota: "De vierkante haken [ ] zijn haakjes: ze helpen te zien wat binnen wat staat. Wetten met ↔ als hoofdconnectief zeggen dat twee formules equivalent zijn en dat de ene door de andere kan worden vervangen; wetten met → laten toe om alleen in één richting van de ene naar de andere over te gaan.",
  leyTabla: "Tabel",
  derTit: "Afgeleide deductieregels",
  derNota: "In een deductie laat elke regel toe om van de formules boven de streep (de premissen) over te gaan naar de formule eronder (de conclusie). De dubbele streep betekent dat de regel in beide richtingen geldt. Het zijn snelkoppelingen: elke regel wordt bewezen met de basisregels en komt overeen met een van de wetten hierboven.",
  derInter: "Als A en B equivalent zijn, kan in elke formule C die A bevat, B in de plaats van A worden gezet: C<sub>A</sub> is de formule met A, en C<sub>B</sub> dezelfde formule met B. Daarom kan elke wet met ↔ worden gebruikt om een deel van een formule te herschrijven.",
  leyesIr: "De 70 logische wetten en de 21 afgeleide regels, in “Logische wetten” →"
});
const LOGM_LEYES = [
  ["Principes", [
    [1, "p ↔ p", "Principe van identiteit"],
    [2, "¬(p ∧ ¬p)", "Principe van non-contradictie"],
    [3, "p ∨ ¬p", "Principe van de uitgesloten derde"],
    [4, "¬¬p ↔ p", "Principe van dubbele negatie"],
    [5, "¬¬¬p ↔ ¬p", "Principe van drievoudige negatie"]]],
  ["Idempotentie, commutativiteit en associativiteit", [
    [6, "(p ∧ p) ↔ p", "Wet van idempotentie van de conjunctie"],
    [7, "(p ∧ q) ↔ (q ∧ p)", "Wet van commutativiteit van de conjunctie"],
    [8, "[(p ∧ q) ∧ r] ↔ [p ∧ (q ∧ r)]", "Wet van associativiteit van de conjunctie"],
    [9, "(p ∨ p) ↔ p", "Wet van idempotentie van de disjunctie"],
    [10, "(p ∨ q) ↔ (q ∨ p)", "Wet van commutativiteit van de disjunctie"],
    [11, "[(p ∨ q) ∨ r] ↔ [p ∨ (q ∨ r)]", "Wet van associativiteit van de disjunctie"]]],
  ["Distributiviteit", [
    [12, "[p ∧ (q ∨ r)] ↔ [(p ∧ q) ∨ (p ∧ r)]", "Wet van distributie van de conjunctie ten opzichte van de disjunctie"],
    [13, "[(p ∨ q) ∧ (r ∨ s)] ↔ [(p ∧ r) ∨ (p ∧ s) ∨ (q ∧ r) ∨ (q ∧ s)]", "Wet van distributie van de conjunctie ten opzichte van de disjunctie (uitgebreide vorm)"],
    [14, "[p ∨ (q ∧ r)] ↔ [(p ∨ q) ∧ (p ∨ r)]", "Wet van distributie van de disjunctie ten opzichte van de conjunctie"],
    [15, "[(p ∧ q) ∨ (r ∧ s)] ↔ [(p ∨ r) ∧ (p ∨ s) ∧ (q ∨ r) ∧ (q ∨ s)]", "Wet van distributie van de disjunctie ten opzichte van de conjunctie (uitgebreide vorm)"]]],
  ["Vereenvoudiging en toevoeging", [
    [16, "[p ∧ (p ∧ q)] ↔ (p ∧ q)", "1e wet van vereenvoudiging van de conjunctie"],
    [17, "[p ∧ (p ∨ q)] ↔ p", "2e wet van vereenvoudiging van de conjunctie"],
    [18, "[p ∧ (q ∨ ¬q)] ↔ p", "3e wet van vereenvoudiging van de conjunctie"],
    [19, "(p ∧ q) → p", "4e wet van vereenvoudiging van de conjunctie (a fortiori)"],
    [20, "(p ∧ q) → q", "5e wet van vereenvoudiging van de conjunctie (a fortiori)"],
    [21, "[p ∨ (p ∨ q)] ↔ (p ∨ q)", "1e wet van vereenvoudiging van de disjunctie"],
    [22, "[p ∨ (p ∧ q)] ↔ p", "2e wet van vereenvoudiging van de disjunctie"],
    [23, "[p ∨ (q ∧ ¬q)] ↔ p", "3e wet van vereenvoudiging van de disjunctie"],
    [24, "p → (p ∨ q)", "Wet van toevoeging"],
    [25, "q → (p ∨ q)", "Wet van toevoeging"]]],
  ["Wetten van De Morgan", [
    [26, "¬(p ∨ q) ↔ (¬p ∧ ¬q)", "1e wet van De Morgan"],
    [27, "¬(p ∧ q) ↔ (¬p ∨ ¬q)", "2e wet van De Morgan"],
    [28, "(p ∨ q) ↔ ¬(¬p ∧ ¬q)", "3e wet van De Morgan"],
    [29, "(p ∧ q) ↔ ¬(¬p ∨ ¬q)", "4e wet van De Morgan"]]],
  ["Interdefinieerbaarheid van de connectieven", [
    [30, "(p ∧ q) ↔ ¬(p → ¬q)", "Wet van interdefinieerbaarheid"],
    [31, "(p ∨ q) ↔ (¬p → q)", "Wet van interdefinieerbaarheid"],
    [32, "(p → q) ↔ ¬(p ∧ ¬q)", "Wet van interdefinieerbaarheid"],
    [33, "(p → q) ↔ (¬p ∨ q)", "Wet van interdefinieerbaarheid"],
    [34, "(p ↔ q) ↔ [(p → q) ∧ (q → p)]", "Wet van interdefinieerbaarheid"]]],
  ["Exportatie, premisseverwisseling en syllogisme", [
    [35, "[(p ∧ q) → r] ↔ [p → (q → r)]", "Wet van exportatie en importatie"],
    [36, "[p → (q → r)] ↔ [q → (p → r)]", "Wet van premisseverwisseling"],
    [37, "p → [q → (p ∧ q)]", "Volgt uit wetten 35 en 1"],
    [38, "[(p → q) ∧ (q → r)] → (p → r)", "Wet van het syllogisme"],
    [39, "(p → q) → [(q → r) → (p → r)]", "Wet van het syllogisme (uit wetten 38 en 35)"],
    [40, "(q → r) → [(p → q) → (p → r)]", "Wet van het syllogisme (uit wetten 39 en 36)"],
    [41, "(p → q) → [(r ∨ p) → (r ∨ q)]", "Wet van het syllogisme"]]],
  ["Modus ponens, modus tollens, disjunctief syllogisme en dilemma’s", [
    [42, "[(p → q) ∧ p] → q", "Modus ponendo ponens (1)"],
    [43, "p → [(p → q) → q]", "Modus ponendo ponens (2)"],
    [44, "[(p → q) ∧ ¬q] → ¬p", "Modus tollendo tollens (1)"],
    [45, "¬q → [(p → q) → ¬p]", "Modus tollendo tollens (2)"],
    [46, "[(p ∨ q) ∧ ¬p] → q", "Disjunctief syllogisme"],
    [47, "[(p ∨ q) ∧ ¬q] → p", "Disjunctief syllogisme"],
    [48, "[(p ∨ q) ∧ (p → r) ∧ (q → r)] → r", "Wet van het eenvoudige constructieve dilemma"],
    [49, "[(p ∨ q) ∧ (p → r) ∧ (q → s)] → (r ∨ s)", "Wet van het complexe constructieve dilemma"],
    [50, "[(¬p ∨ ¬q) ∧ (r → p) ∧ (r → q)] → ¬r", "Wet van het eenvoudige destructieve dilemma"],
    [51, "[(¬p ∨ ¬q) ∧ (r → p) ∧ (s → q)] → (¬r ∨ ¬s)", "Wet van het complexe destructieve dilemma"]]],
  ["Reductie tot het absurde", [
    [52, "(p → ¬p) → ¬p", "1e wet van reductie tot het absurde"],
    [53, "(¬p → p) → p", "2e wet van reductie tot het absurde (wet van Clavius of consequentia mirabilis)"],
    [54, "[(p → q) ∧ (p → ¬q)] → ¬p", "3e wet van reductie tot het absurde"],
    [55, "[p → (q ∧ ¬q)] → ¬p", "4e wet van reductie tot het absurde"]]],
  ["Uit het onware volgt alles (en het ware volgt uit alles)", [
    [56, "(p ∧ ¬p) → p", "Ex falso sequitur quodlibet"],
    [57, "(p ∧ ¬p) → ¬p", "Ex falso sequitur quodlibet"],
    [58, "(p ∧ ¬p) → q", "Ex falso sequitur quodlibet"],
    [59, "p → (¬p → q)", "Ex falso sequitur quodlibet (uit wetten 58 en 35)"],
    [60, "¬p → (p → q)", "Ex falso sequitur quodlibet"],
    [61, "[(p → q) ∧ (p ∧ ¬q)] → r", "Ex falso sequitur quodlibet"],
    [62, "p → (q → p)", "Verum sequitur ad quodlibet (paradoxale wet of wet van premisse-toevoeging)"]]],
  ["Contrapositie en implicatie", [
    [63, "(p → q) ↔ (¬q → ¬p)", "Wet van contrapositie van de conditionele"],
    [64, "(p → q) ↔ [p ↔ (p ∧ q)]", "Wet van de implicatie"],
    [65, "(p → q) ↔ [q ↔ (p ∨ q)]", "Wet van de implicatie"],
    [66, "[p → (p → q)] ↔ (p → q)", "Wet van de implicatie"],
    [67, "(p ∧ q) → (p → q)", "Wet van de implicatie"],
    [68, "[(p → q) ∧ (p → r)] → [p → (q ∧ r)]", "Wet van conjunctie van de consequent"],
    [69, "[(p → q) ∧ (r → s)] → [(p ∨ r) → (q ∨ s)]", "Wet van disjunctie van beide extremen"],
    [70, "[(p → q) ∧ (r → s)] → [(p ∧ r) → (q ∧ s)]", "Wet van conjunctie van beide extremen (praeclarum theorema, Leibniz)"]]]
];
/* reglas: [nº, nombre, abreviatura, formas]; cada forma = [premisas separadas por «;», conclusión, raya doble] */
const LOGM_DERIVADAS = [
  [1, "Hypothetisch syllogisme", "Sil", [["p → q; q → r", "p → r"]]],
  [2, "Premisseverwisseling", "Mut", [["p → (q → r)", "q → (p → r)"]]],
  [3, "Identiteit", "Id", [["p", "p"]]],
  [4, "Premisse-toevoeging", "Cpr", [["p", "q → p"]]],
  [5, "Distributiviteit van de conjunctie", "DC", [["p ∧ (q ∨ r)", "(p ∧ q) ∨ (p ∧ r)", 1]]],
  [6, "Distributiviteit van de disjunctie", "DD", [["p ∨ (q ∧ r)", "(p ∨ q) ∧ (p ∨ r)", 1]]],
  [7, "Contrapositie", "Cp", [["p → q", "¬q → ¬p", 1], ["p → ¬q", "q → ¬p", 1], ["¬p → q", "¬q → p", 1], ["¬p → ¬q", "q → p", 1]]],
  [8, "Modus tollens", "MT", [["p → q; ¬q", "¬p"]]],
  [9, "Invoering van de dubbele negatie", "IDN", [["p", "¬¬p"]]],
  [10, "Disjunctief syllogisme", "SD", [["p ∨ q; ¬q", "p"], ["p ∨ q; ¬p", "q"]]],
  [11, "Eenvoudig constructief dilemma", "Dil 1", [["p ∨ q; p → r; q → r", "r"]]],
  [12, "Complex constructief dilemma", "Dil 2", [["p ∨ q; p → r; q → s", "r ∨ s"]]],
  [13, "Eenvoudig destructief dilemma", "Dil 3", [["¬p ∨ ¬q; r → p; r → q", "¬r"]]],
  [14, "Complex destructief dilemma", "Dil 4", [["¬p ∨ ¬q; r → p; s → q", "¬r ∨ ¬s"]]],
  [15, "Uitwisseling of vervanging", "I", null],
  [16, "Definitie van de implicatie", "DI 1", [["p → q", "¬(p ∧ ¬q)"]]],
  [17, "Definitie van de implicatie", "DI 2", [["p → q", "¬p ∨ q"]]],
  [18, "Definitie van de conjunctie", "DfC 1", [["p ∧ q", "¬(p → ¬q)"]]],
  [19, "Definitie van de conjunctie", "DfC 2", [["p ∧ q", "¬(¬p ∨ ¬q)"]]],
  [20, "Definitie van de disjunctie", "DfD 1", [["p ∨ q", "¬p → q"]]],
  [21, "Definitie van de disjunctie", "DfD 2", [["p ∨ q", "¬(¬p ∧ ¬q)"]]]
];
function logmDeduccion(p, c, doble){
  return '<div class="lg-ded" dir="ltr">' + p.split(";").map(x => "<span>" + logEsc(x.trim()) + "</span>").join("") + '<span class="lg-ded-c' + (doble ? " lg-ded-2" : "") + '">' + logEsc(c) + "</span></div>";
}
function logRenderLeyes(){
  const tit = logmT("verTabla");
  return '<div class="lg-panel"><h2>' + logmT("leyesTit") + '</h2><p class="lg-nota">' + logmT("leyesNota") + "</p>" +
    LOGM_LEYES.map(([g, ls], k) => '<details class="lg-leyes"' + (k ? "" : " open") + "><summary>" + logEsc(g) + " (" + ls[0][0] + "–" + ls[ls.length - 1][0] + ')</summary><ol class="lg-leyes-l">' +
      ls.map(([n, f, nom]) => '<li value="' + n + '"><span class="lg-ley-n">' + n + '.</span><span class="lg-ley-f" dir="ltr">' + logEsc(f) + '</span><span class="lg-ley-nom">' + logEsc(nom) + '</span><button type="button" class="chip" data-ley="' + logEsc(f) + '" title="' + tit + '">' + logmT("leyTabla") + "</button></li>").join("") + "</ol></details>").join("") + "</div>" +
    '<div class="lg-panel"><h2>' + logmT("derTit") + '</h2><p class="lg-nota">' + logmT("derNota") + '</p><div class="lg-reglas">' +
    LOGM_DERIVADAS.map(([n, nom, ab, fs]) => '<div class="lg-regla"><h3>' + n + ". " + logEsc(nom) + " <small>(" + ab + ")</small></h3>" +
      (fs ? '<div class="lg-ded-fila">' + fs.map(([p, c, d]) => '<div class="lg-ded-caja">' + logmDeduccion(p, c, d) + '<button type="button" class="chip" data-infp="' + logEsc(p) + '" data-infc="' + logEsc(c) + '" title="' + tit + '">' + logmT("leyTabla") + "</button></div>").join("") + "</div>"
        : '<div class="lg-ded-fila"><div class="lg-ded-caja"><div class="lg-ded" dir="ltr"><span>A ↔ B</span><span>C<sub>A</sub></span><span class="lg-ded-c">C<sub>B</sub></span></div></div></div><p>' + logmT("derInter") + "</p>") + "</div>").join("") + "</div></div>";
}


/* ---------- eventos (delegados en la caja del Rincón; logicaview.js maneja los demás) ---------- */
(function(){
  const box = document.getElementById("logicabox"); if (!box) return;
  LOG.fz = LOG.fz || {}; LOG.inf = LOG.inf || {}; LOG.cq = LOG.cq || { m: LOGM_CQ_PRE.p3.map(r => r.slice()), ej: {} };
  Object.assign(LOG_TXT, LOGM_TXT);   // las pestañas nuevas usan logT() de logicaview.js
  logRender();
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.fzok != null){ const i = +b.dataset.fzok; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { hecho: true, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.fzsol != null){ const i = +b.dataset.fzsol; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { sol: true }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.ley != null){ LOG.formula = b.dataset.ley; LOG.tab = "tablas"; logRender(); const t = document.getElementById("lg-tabla"); if (t) t.scrollIntoView({ block: "center" }); }
    else if (b.dataset.infp != null){ LOG.prem = b.dataset.infp; LOG.concl = b.dataset.infc; LOG.tab = "tablas"; logRender(); const a = document.getElementById("lg-arg"); if (a) a.scrollIntoView({ block: "center" }); }
    else if (b.dataset.cqi != null){ const r = LOG.cq.m[+b.dataset.cqi]; r[+b.dataset.cqj] = r[+b.dataset.cqj] ? 0 : 1; const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.falsil){ const [m, f] = b.dataset.falsil.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f }); LOG.tab = "silogismos"; logRender(); const c = document.getElementById("lg-sil"); if (c) c.scrollIntoView({ block: "start" }); }
    else if (b.dataset.cqpre){ if (!document.getElementById("lg-cq")){ LOG.tab = "cuantificadores"; logRender(); } LOG.cq.m = LOGM_CQ_PRE[b.dataset.cqpre].map(r => r.slice()); const c = document.getElementById("lg-cq"); if (c){ c.innerHTML = logmCqMundo(); if (b.closest(".lg-panel") !== c.closest(".lg-panel")) c.scrollIntoView({ block: "center" }); } }
    else if (b.dataset.cqej != null){ LOG.cq.ej[+b.dataset.cqej] = +b.dataset.cqo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
    else if (b.dataset.lgnomina){ const n = document.getElementById("lg-nomina"); if (n) n.scrollIntoView({ block: "start" }); }   /* (22-10) de la lista breve a la nómina única */
    else if (b.dataset.qf != null){ LOG.qf = LOG.qf || {}; LOG.qf[+b.dataset.qf] = b.dataset.qfo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }   /* (22-10, nube) T5 */
    else if (b.dataset.infej != null){ LOG.inf[+b.dataset.infej] = b.dataset.infr; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
  });
  box.addEventListener("input", ev => { const t = ev.target; if (t.dataset && t.dataset.fz != null){ const i = +t.dataset.fz; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { f: t.value, hecho: false, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = ""; } });
  box.addEventListener("keydown", ev => { const t = ev.target; if (ev.key === "Enter" && t.dataset && t.dataset.fz != null){ ev.preventDefault(); const ok = box.querySelector('[data-fzok="' + t.dataset.fz + '"]'); if (ok) ok.click(); } });
})();
