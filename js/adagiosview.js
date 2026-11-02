"use strict";
/* ===== «Adagios» (09-10, Bachillerato) — vista sobre adagios.js (ADAGIOS) =====
   Repertorio de lemas clásicos al modo de los cuadernos de lugares comunes del Renacimiento. Cada ficha: la versión
   española y, solo al pulsar el botón λ de su línea (como en el diccionario), el lema latino y, si lo hay, el original
   griego con su transliteración; luego qué quiere decir, cuándo usarlo, el caso trampa si lo hay, de dónde viene y los temas.
   Los nombres de pensadores con ficha en Biografías (en esta web) abren su biografía: el primero de cada ficha.
   Filtro por ámbito y modo «Ponte a prueba» (solo el lema en español; el resto se descubre al pulsar). Arriba solo las fichas:
   la historia (Erasmo, florilegios, Montaigne) y el cuaderno de lugares comunes van al final, plegados.
   Enlace profundo: #adagios/<id>. Los temas se enlazan solo si existen en la web (THEORY filtrado).
   (12-10) Interruptor «Colección: Adagios | Frases»: las frases célebres (citas.js, CITAS), con el mismo aspecto: retrato del autor,
   la frase, qué quiere decir (sen), cuándo usarla (uso) y de dónde viene; filtro por época. Sustituye a la antigua sección
   «Frases». Enlace profundo: #adagios/frases. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const ADG_TXT = {
  coleccion: "Collectie", colAdagios: "Adagia", colFrases: "Zinnen",
  leadA: "Latijnse en Griekse motto’s die filosofen al eeuwenlang citeren: wat ze zeggen, waar ze vandaan komen en wanneer je ze moet gebruiken. Leer ze uit je hoofd als een student uit de renaissance.",
  leadF: "Beroemde uitspraken uit de filosofie: wat ze betekenen, waar ze vandaan komen en wanneer je ze kunt gebruiken in een tekstcommentaar of een betoog.",
  epoca: "Periode", todas: "Alle", antigua: "Oudheid", medieval: "Middeleeuws", moderna: "Moderne tijd", contemporanea: "Hedendaags",
  usoF: "Gebruik hem:", cuentaF: "{n} zinnen", cuentaF1: "1 uitspraak",
  ambito: "Domein", todos: "Alle",
  saber: "Kennis", realidad: "Werkelijkheid", etica: "Ethiek en leven", politica: "Politiek", humano: "Menselijk wezen",
  modo: "Wijze", leer: "Lees", prueba: "Test jezelf",
  pruebaAyuda: "Probeer uit te leggen wat het betekent, waar het vandaan komt en wanneer je het zou gebruiken; klik daarna op “Ontdekken”.",
  descubrir: "Ontdekken", ocultar: "Verbergen",
  originalBtn: "Origineel in het Latijn", originalBtnGr: "Origineel in het Latijn en Grieks, en hoe je het Grieks uitspreekt",
  latin: "In het Latijn:", griego: "In het Grieks:",
  origen: "Herkomst:", erasmo: "Erasmus, Adagia {n}",
  sentido: "Wat het betekent:", uso: "Gebruik het:", trampa: "Valkuil", temas: "In de thema’s:",
  verBio: "Bekijk de biografie van {n}",
  cuenta: "{n} adagia", cuenta1: "1 adagium",
  hTit: "Waar dit vandaan komt: de gemeenschappelijke taal van de renaissance",
  h1: "In de renaissance kende iemand die gestudeerd had honderden leuzen, adagia en spreuken van de klassieken uit het hoofd. Het was geen versiering: ze fungeerden als een gedeelde taal. Het was voldoende om “Festina lente” of “Nosce te ipsum” te zeggen om een heel idee op te roepen, met zijn geschiedenis en nuances, en de ontwikkelde lezer herkende het onmiddellijk.",
  h2t: "De Adagia van Erasmus",
  h2: "De invloedrijkste verzameling was die van Erasmus van Rotterdam. Hij begon in 1500 met een bloemlezing van 818 Griekse en Latijnse spreekwoorden en breidde die zijn hele leven lang uit: de editie van 1536 bevat er 4.151. Elk adagium gaat vergezeld van een commentaar over zijn oorsprong, betekenis en gebruik, en sommige commentaren zijn ware essays, zoals dat over “Dulce bellum inexpertis”, tegen de oorlog, of dat over “Sileni Alcibiadis”, over de schijn.",
  h3t: "Florilegia en gemeenplaatsen",
  h3: "Naast Erasmus circuleerden de florilegia (“bloemlezing”), bloemlezingen van uitgekozen passages zoals de Polyanthea van Domenico Nani Mirabelli (1503) of de Illustrium poetarum flores van Octaviano Mirandula. En op school had elke leerling zijn eigen schrift met gemeenplaatsen (loci communes): hij kopieerde de zinnen die hij bij het lezen tegenkwam en ordende ze per thema (vriendschap, fortuin, dood, rechtvaardigheid…) om argumenten bij de hand te hebben bij het schrijven of spreken. Erasmus in De copia en Juan Luis Vives legden uit hoe je dat moest doen.",
  h3b: "Let op een veelvoorkomende verwarring: de Loci communes van Melanchthon (1521) heten hetzelfde, maar zijn een handboek protestantse theologie, geordend per thema, geen verzameling citaten.",
  h4t: "De balken van Montaigne",
  h4: "Montaigne liet op de balken van het plafond van zijn bibliotheek meer dan vijftig spreuken in het Grieks en het Latijn schilderen, veel uit de Bijbel, van Sextus Empiricus en uit de bloemlezing van Stobaeus, om ze in het zicht te hebben terwijl hij zijn Essais schreef. Ze worden nog steeds bewaard in zijn toren in de Périgord, in het zuidwesten van Frankrijk.",
  h4b: "Hijzelf koos zijn eigen lijfspreuk. In 1576 liet hij een medaille slaan met een weegschaal in evenwicht en een Grieks woord van de sceptici, ἐπέχω (epékho, “ik onthoud mij”, dat wil zeggen, ik schort mijn oordeel op). In de Essais (II, 12) vertaalt hij het in de vorm van een vraag: “Que sçay-je?”, “wat weet ik?”.",
  pieDivisa: "Het devies van Montaigne: “Que sçay-je?” boven een weegschaal in evenwicht",
  pieMedalla: "Medaille van Montaigne door Gatteaux (19e eeuw; Bibliothèque nationale de France)",
  cTit: "Maak je schrift met gemeenplaatsen",
  c0: "Een schrift met gemeenplaatsen is een verzameling zinnen, geordend per thema, om ze bij de hand te hebben bij het schrijven. Zo doe je dat:",
  c1t: "Bereid het voor.",
  c1: "Een notitieboekje of een document met vijf onderdelen, één per domein: Kennis, Werkelijkheid, Ethiek en leven, Politiek en Mens. Laat per onderdeel minstens twee pagina’s vrij.",
  c2t: "Kopieer elk adagium altijd met dezelfde vijf regels:",
  c2a: "het motto in het Latijn of het Grieks;", c2b: "de vertaling;", c2c: "waar het vandaan komt: auteur en werk;",
  c2d: "wat het betekent, in je eigen zin (kopieer niet die van de website);",
  c2e: "een zin van jezelf waarin je het gebruikt over een onderwerp uit de cursus.",
  cEjT: "Voorbeeld:",
  cEj: "Homo homini lupus · “De mens is een wolf voor de mens” · Plautus, Asinaria; Hobbes neemt het over in De cive · Zonder wetten die ons beschermen, zijn de anderen een bedreiging · “Voor Hobbes geldt in de natuurtoestand homo homini lupus; daarom aanvaarden individuen een soeverein die de vrede garandeert”.",
  c3t: "Houd het bij.",
  c3: "Twee adagia per week: het adagium dat in de les aan bod is gekomen en een ander dat je zelf kiest, uit dit onderdeel of uit je eigen lectuur. Aan het einde van het trimester heb je er ongeveer vijfentwintig.",
  c4t: "Herhaal het.",
  c4: "Eén keer per week, met de modus “Test jezelf” of door de vertaling in je schrift af te dekken: zeg hardop wat het betekent en bij welk thema je het zou gebruiken. Markeer met een punt de adagia die je fout hebt en kom er de week daarna op terug.",
  c5t: "Gebruik het bij het schrijven.",
  c5: "In een tekstcommentaar of een betoog werkt een adagium aan het begin, om het probleem te introduceren, of aan het einde, om de these af te sluiten. Zet er niet meer dan één of twee per tekst in en leg het altijd uit: “Zoals Plautus schreef, en Hobbes zou herhalen, homo homini lupus: …”. Als je niet kunt uitleggen waarom het ter zake doet, zet het er dan niet in."
};
const adgT = (k, v) => String(ADG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

const ADG_AMB = ["saber", "realidad", "etica", "politica", "mens"];
/* pensadores con ficha en Biografías: nombre tal como aparece en los textos → id (solo se enlaza si la ficha existe en esta web) */
const ADG_ILU = [
  ["Augustinus van Hippo", "agustin"], ["Anselmus van Canterbury", "anselmo"], ["Thomas van Aquino", "tomas"], ["Francis Bacon", "francis_bacon"],
  ["Erasmus van Rotterdam", "erasmo"], ["Erasmus", "erasmo"], ["Socrates", "socrates"], ["Plato", "platon"], ["Aristoteles", "aristoteles"],
  ["Heraclitus", "heraclito"], ["Parmenides", "parmenides"], ["Protagoras", "protagoras"], ["Epicurus", "epicuro"], ["Seneca", "seneca"],
  ["Tertullianus", "tertuliano"], ["Ockham", "ockham"], ["Machiavelli", "maquiavelo"], ["Hobbes", "hobbes"], ["Spinoza", "spinoza"],
  ["Locke", "locke"], ["Leibniz", "leibniz"], ["Kant", "kant"], ["Heidegger", "heidegger"],
  ["Averroes", "averroes"], ["Hegel", "hegel"], ["Marx", "marx"], ["Darwin", "darwin"]
];
let adgAmb = "all", adgPrueba = false, adgCol = "adagios", adgEp = "all";
const ADG_EPOCAS = ["antigua", "medieval", "moderna", "contemporanea"];
const ADG_EP_COLOR = { antigua: "ant", medieval: "med", moderna: "mod", contemporanea: "con" };   // color de época (styles.css)
function adgHayFrases(){ return typeof CITAS !== "undefined" && CITAS && CITAS.length; }

function adgEsc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function adgBox(){ return document.getElementById("adagiosbox"); }
function adgHayIlu(id){ return typeof BIOGRAFIAS !== "undefined" && BIOGRAFIAS[id] && typeof loadBiografia === "function"; }

/* texto escapado con el primer nombre de cada pensador convertido en botón (hechos = los ya enlazados en la ficha) */
function adgNombres(txt, hechos){
  let s = adgEsc(txt);
  ADG_ILU.forEach(([n, id]) => {
    if (hechos.has(id) || !adgHayIlu(id)) return;
    /* seguido de un número de pasaje es el título de una obra (Platón, «Protágoras 343b»), no la persona */
    const rx = new RegExp("(^|[^\\p{L}>])(" + n + ")(?![\\p{L}<])(?!\\s*\\d)", "u");
    if (!rx.test(s)) return;
    s = s.replace(rx, (m, a, b) => a + '<button class="adg-bio" data-biografia="' + id + '" title="' + adgEsc(adgT("verBio", { n: BIOGRAFIAS[id].name })) + '">' + b + '</button>');
    hechos.add(id);
  });
  return s;
}

function adgFiltro(){
  const f = document.getElementById("adagiosfilter");
  if (!f) return;
  f.innerHTML = (adgHayFrases() ? '<div class="fgroup"><span class="flabel">' + adgT("coleccion") + '</span>' +
      [["adagios", "colAdagios"], ["frases", "colFrases"]].map(c => '<button class="fbtn" data-adg-c="' + c[0] + '" aria-pressed="' + (adgCol === c[0]) + '">' + adgT(c[1]) + '</button>').join("") + '</div>' : '') +
    (adgCol === "frases" ?
      '<div class="fgroup"><span class="flabel">' + adgT("epoca") + '</span>' +
      ["all"].concat(ADG_EPOCAS).filter(e => e === "all" || CITAS.some(q => q.e === e)).map(e => '<button class="fbtn" data-adg-e="' + e + '" aria-pressed="' + (e === adgEp) + '">' +
        adgT(e === "all" ? "todas" : e) + '</button>').join("") + '</div>' :
      '<div class="fgroup"><span class="flabel">' + adgT("ambito") + '</span>' +
      ["all"].concat(ADG_AMB).map(a => '<button class="fbtn" data-adg-a="' + a + '" aria-pressed="' + (a === adgAmb) + '">' +
        adgT(a === "all" ? "todos" : a) + '</button>').join("") + '</div>') +
    '<div class="fgroup"><span class="flabel">' + adgT("modo") + '</span>' +
    [["leer", false], ["prueba", true]].map(m => '<button class="fbtn" data-adg-m="' + m[0] + '" aria-pressed="' + (adgPrueba === m[1]) + '">' + adgT(m[0]) + '</button>').join("") + '</div>';
  f.querySelectorAll("[data-adg-a]").forEach(b => b.addEventListener("click", () => { adgAmb = b.dataset.adgA; adgFiltro(); adgRender(); }));
  f.querySelectorAll("[data-adg-e]").forEach(b => b.addEventListener("click", () => { adgEp = b.dataset.adgE; adgFiltro(); adgRender(); }));
  f.querySelectorAll("[data-adg-c]").forEach(b => b.addEventListener("click", () => { adgCol = b.dataset.adgC; adgLead(); adgFiltro(); adgRender();
    if (typeof setDeepHash === "function") setDeepHash("adagios", adgCol === "frases" ? "frases" : ""); }));
  f.querySelectorAll("[data-adg-m]").forEach(b => b.addEventListener("click", () => { adgPrueba = b.dataset.adgM === "prueba"; adgFiltro(); adgRender(); }));
}

function adgTemas(a){
  if (typeof THEORY === "undefined") return "";
  const ts = (a.t || []).filter(k => THEORY[k]);
  if (!ts.length) return "";
  return '<p class="adg-temas"><span class="adg-k">' + adgT("temas") + '</span> ' +
    ts.map(k => '<button class="adg-tema" data-th="' + adgEsc(k) + '" title="' + adgEsc(THEORY[k].title) + '">' + adgEsc(THEORY[k].title) + '</button>').join("") + '</p>';
}

function adgFicha(a){
  const h = new Set(), N = t => adgNombres(t, h);
  /* (09-10) el original (latín y, si lo hay, griego transliterado) solo se ve al pulsar λ, en la línea del español */
  const lb = adgT(a.gr ? "originalBtnGr" : "originalBtn");
  return '<article class="adg-card' + (adgPrueba ? ' adg-oculta' : '') + '" id="adg-' + adgEsc(a.id) + '" data-ep="' + adgEsc(a.e) + '">' +
    (a.img ? '<figure class="adg-fig' + (a.fit === "contain" ? ' adg-fig-c' : '') + '"><img src="' + adgEsc(a.img) + '" alt="' + adgEsc(a.pie) + '" loading="lazy" decoding="async"><figcaption>' + N(a.pie) + '</figcaption></figure>' : '') +
    '<h2 class="adg-es">' + adgEsc(a.es) + '<button type="button" class="adg-lam" aria-expanded="false" aria-label="' + lb + '" title="' + lb + '">λ</button></h2>' +
    '<div class="adg-orig" hidden><p class="adg-la"><span class="adg-k">' + adgT("latin") + '</span> <i lang="la">' + adgEsc(a.la) + '</i></p>' +
    (a.gr ? '<p class="adg-gr"><span class="adg-k">' + adgT("griego") + '</span> <span lang="grc">' + adgEsc(a.gr) + '</span> (<i>' + adgEsc(a.tr) + '</i>)</p>' : '') + '</div>' +
    (adgPrueba ? '<p class="adg-ayuda">' + adgT("pruebaAyuda") + '</p><button class="adg-desc" aria-expanded="false">' + adgT("descubrir") + '</button>' : '') +
    '<div class="adg-cuerpo">' +
      '<p class="adg-sen"><span class="adg-k">' + adgT("sentido") + '</span> ' + N(a.sen) + '</p>' +
      (a.uso ? '<p class="adg-uso"><span class="adg-k">' + adgT("uso") + '</span> ' + N(a.uso) + '</p>' : '') +
      (a.trampa ? '<p class="adg-trampa"><strong>' + adgT("trampa") + '.</strong> ' + N(a.trampa) + '</p>' : '') +
      '<p class="adg-o"><span class="adg-k">' + adgT("origen") + '</span> ' + N(a.o) + (a.er ? '. ' + N(adgT("erasmo", { n: a.er })) : '') + '.</p>' +
      adgTemas(a) +
    '</div></article>';
}

/* (12-10) ficha de una frase célebre: mismo aspecto que un adagio (retrato del autor en lugar de la obra de arte) */
function adgFichaF(q, i){
  const h = new Set(), N = t => adgNombres(t, h);
  const autor = q.id && adgHayIlu(q.id) ? '<button class="adg-bio" data-biografia="' + adgEsc(q.id) + '" title="' + adgEsc(adgT("verBio", { n: q.a })) + '">' + adgEsc(q.a) + '</button>' : adgEsc(q.a);
  if (q.id) h.add(q.id);
  return '<article class="adg-card adg-frase' + (adgPrueba ? ' adg-oculta' : '') + '" id="adgf-' + i + '" data-ep="' + (ADG_EP_COLOR[q.e] || "") + '">' +
    (q.img ? '<figure class="adg-fig adg-fig-ret"><img src="' + adgEsc(q.img) + '" alt="' + adgEsc(q.a) + '" loading="lazy" decoding="async"><figcaption>' + autor + '</figcaption></figure>' : '') +
    '<h2 class="adg-es adg-cita">«' + adgEsc(q.c) + '»</h2>' +
    (adgPrueba ? '<p class="adg-ayuda">' + adgT("pruebaAyuda") + '</p><button class="adg-desc" aria-expanded="false">' + adgT("descubrir") + '</button>' : '') +
    '<div class="adg-cuerpo">' +
      (q.sen ? '<p class="adg-sen"><span class="adg-k">' + adgT("sentido") + '</span> ' + N(q.sen) + '</p>' : '') +
      (q.uso ? '<p class="adg-uso"><span class="adg-k">' + adgT("usoF") + '</span> ' + N(q.uso) + '</p>' : '') +
      (q.trampa ? '<p class="adg-trampa"><strong>' + adgT("trampa") + '.</strong> ' + N(q.trampa) + '</p>' : '') +
      '<p class="adg-o"><span class="adg-k">' + adgT("origen") + '</span> ' + (q.img ? adgEsc(q.a) : autor) + ', ' + adgEsc(q.o) + '.</p>' +
    '</div></article>';
}
function adgLead(){ const l = document.querySelector("#adagios .lead"); if (l) l.textContent = adgT(adgCol === "frases" ? "leadF" : "leadA"); }

function adgHistoria(){
  const h = new Set(), p = k => '<p>' + adgNombres(adgT(k), h) + '</p>';
  return '<details class="adg-guia"><summary>' + adgT("hTit") + '</summary>' + p("h1") +
    '<h3>' + adgT("h2t") + '</h3>' + p("h2") + '<h3>' + adgT("h3t") + '</h3>' + p("h3") + p("h3b") +
    '<h3>' + adgT("h4t") + '</h3>' + p("h4") + p("h4b") +
    '<div class="adg-mont">' + [["montaigne_divisa", "pieDivisa"], ["montaigne_medalla", "pieMedalla"]].map(([f, k]) =>
      '<figure><img src="media/galeria_museo/adagios/' + f + '.jpg" alt="' + adgEsc(adgT(k)) + '" loading="lazy"><figcaption>' + adgT(k) + '</figcaption></figure>').join("") + '</div></details>' +
    '<details class="adg-guia"><summary>' + adgT("cTit") + '</summary><p>' + adgT("c0") + '</p><ol>' +
    '<li><strong>' + adgT("c1t") + '</strong> ' + adgT("c1") + '</li>' +
    '<li><strong>' + adgT("c2t") + '</strong><ol type="a">' + ["c2a", "c2b", "c2c", "c2d", "c2e"].map(k => '<li>' + adgT(k) + '</li>').join("") + '</ol>' +
      '<p class="adg-ej"><strong>' + adgT("cEjT") + '</strong> ' + adgNombres(adgT("cEj"), new Set()) + '</p></li>' +
    ["c3", "c4", "c5"].map(k => '<li><strong>' + adgT(k + "t") + '</strong> ' + adgT(k) + '</li>').join("") + '</ol></details>';
}

function adgRender(){
  const box = adgBox();
  if (!box) return;
  if (adgCol === "frases" && adgHayFrases()){
    /* primero las destacadas en clase y las que ya tienen explicación */
    const lf = CITAS.map((q, i) => [q, i]).filter(([q]) => adgEp === "all" || q.e === adgEp)
      .sort((x, y) => (y[0].dest ? 2 : 0) + (y[0].sen ? 1 : 0) - ((x[0].dest ? 2 : 0) + (x[0].sen ? 1 : 0)) || x[1] - y[1]);
    box.innerHTML = '<div class="adg-grid">' + lf.map(([q, i]) => adgFichaF(q, i)).join("") + '</div>' +
      '<p class="adg-cuenta">' + (lf.length === 1 ? adgT("cuentaF1") : adgT("cuentaF", { n: lf.length })) + '</p>';
    if (window.langFragGrc) window.langFragGrc(box);   // DUA D0.6: griego suelto de las frases con lang="grc" (la cita griega ya lo lleva)
    return;
  }
  const l = ADAGIOS.filter(a => adgAmb === "all" || a.amb === adgAmb);
  box.innerHTML = '<div class="adg-grid">' + l.map(adgFicha).join("") + '</div>' +
    '<p class="adg-cuenta">' + (l.length === 1 ? adgT("cuenta1") : adgT("cuenta", { n: l.length })) + '</p>' + adgHistoria();
  if (window.langFragGrc) window.langFragGrc(box);   // DUA D0.6: griego de sentido/uso/origen con lang="grc" (a.gr ya va marcado)
}

/* clics delegados (la caja se repinta con cada filtro) */
(() => {
  const box = adgBox();
  if (!box) return;
  box.addEventListener("click", e => {
    const d = e.target.closest(".adg-desc");
    if (d){ const c = d.closest(".adg-card"), oc = c.classList.toggle("adg-oculta");
      d.textContent = adgT(oc ? "descubrir" : "ocultar"); d.setAttribute("aria-expanded", String(!oc)); return; }
    const l = e.target.closest(".adg-lam");
    if (l){ const g = l.closest(".adg-card").querySelector(".adg-orig"); g.hidden = !g.hidden; l.setAttribute("aria-expanded", String(!g.hidden)); return; }
    const i = e.target.closest("[data-biografia]");
    if (i){ (window.show || show)("biografias"); loadBiografia(i.dataset.biografia); return; }
    const t = e.target.closest("[data-th]");
    if (t){ (window.show || show)("teoria"); if (typeof window.loadTheory === "function") window.loadTheory(t.dataset.th); }
  });
})();

function loadAdagios(arg){
  const id = String(arg || "").split("/")[0];
  if (id === "frases" && adgHayFrases()){ adgCol = "frases"; adgLead(); adgFiltro(); adgRender(); return; }
  if (adgCol !== "adagios"){ adgCol = "adagios"; adgLead(); adgFiltro(); }
  const a = ADAGIOS.find(x => x.id === id);
  if (a && adgAmb !== "all" && a.amb !== adgAmb){ adgAmb = "all"; adgFiltro(); }
  adgRender();
  const el = a && document.getElementById("adg-" + a.id);
  /* tras pintar: show() sube al principio de la vista y el enrutado inicial llega después */
  if (el){ el.classList.add("adg-marca"); setTimeout(() => el.scrollIntoView({ block: "center" }), 80); setTimeout(() => el.classList.remove("adg-marca"), 2600); }
}
window.loadAdagios = loadAdagios;
if (adgBox() && typeof ADAGIOS !== "undefined"){ adgFiltro(); adgRender(); }
