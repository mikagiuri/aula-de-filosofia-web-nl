"use strict";
/* ===== «Rescritura» (09-10, Bachillerato) =====
   Dos pestañas sobre los datos de rescritura.js:
   · «Distinguir»: un fragmento clásico y sus cuatro versiones barajadas; el alumno etiqueta cada una (rescritura,
     copia, sinonimia, malinterpretación) y, al comprobar, ve por qué lo es.
   · «Escribe la tuya»: el alumno rescribe el fragmento y un análisis mecánico le marca los trozos copiados (cuatro
     palabras seguidas iguales) y el esqueleto calcado (las mismas palabras gramaticales en el mismo orden, señal de
     sinonimia). El sentido no lo puede juzgar la máquina: para eso, una lista de preguntas y una rescritura modelo.
   Enlace profundo: #rescritura/distinguir|escribir[/texto]. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const RES_TXT = {
  tabDist: "Onderscheiden", tabEscr: "Schrijf de jouwe", texto: "Tekst:", original: "Het origineel",
  version: "Versie {l}", comprobar: "Controleren", otraVez: "Opnieuw schudden", siguiente: "Volgende tekst →",
  faltan: "Orden de vier versies voordat je controleert.", acierto: "Correct", fallo: "Nee: het is {t}",
  puntos: "Je hebt {n} van de 4 goed.", todo: "Alle vier! Je onderscheidt de valstrikken nu goed.",
  terminos: "Technische termen die je kunt behouden:", tusPalabras: "Jouw herschrijving",
  ayudaEscr: "Lees het origineel zo vaak als nodig is, bedek het en schrijf in je eigen woorden wat er staat. Klik daarna op “Analyseren”.",
  analizar: "Analyseren", corta: "Schrijf iets meer om het te kunnen analyseren: minstens {n} woorden.", nPal: "{n} woorden",
  copiado: "Gekopieerde stukken uit het origineel", sinCopia: "Er zijn geen gekopieerde stukken: geen enkele reeks van vier woorden komt overeen met het origineel.",
  pctCopia: "{p} % van je tekst komt letterlijk overeen met het origineel.",
  esqueleto: "Structuur", esqAlto: "Je tekst volgt het skelet van het origineel: dezelfde grammaticale woorden in dezelfde volgorde ({p} % overeenkomst). Dat is het signaal van synonymie: verander de zinsbouw, niet alleen de woorden.",
  esqBajo: "De structuur van je zinnen is eigen ({p} % overeenkomst met het skelet van het origineel).",
  vCopia: "Diagnose: <strong>kopie</strong>. Te veel letterlijke tekst. Als je een zin van de auteur wilt gebruiken, zet die dan tussen aanhalingstekens; zo niet, zeg het dan op een andere manier.",
  vSinon: "Diagnose: <strong>mogelijke synoniemen</strong>. Je hebt woorden veranderd, maar niet de manier waarop je het zegt.",
  vMezcla: "Diagnose: <strong>bijna</strong>. Je tekst is over het algemeen eigen, maar er zit een stukje in dat gekopieerd is: herschrijf het of zet het tussen aanhalingstekens.",
  vBien: "Diagnose: <strong>de vorm is van jou</strong>. Geen kopie en geen overname van de structuur. Nu ontbreekt nog het belangrijkste, wat de machine niet kan controleren: dat je hetzelfde zegt als de auteur.",
  sentido: "Controleer zelf de betekenis",
  p1: "Staat de hoofdgedachte van de auteur erin, en niet een andere die erop lijkt?", p2: "Heb je de voorwaarden en nuances behouden (“alleen”, “niet… maar”, “bijna”, “bepaalt”)?",
  p3: "Heb je vermeden om ideeën toe te voegen die niet in de tekst staan (gevolgen, meningen, voorbeelden die de betekenis veranderen)?",
  p4: "Heb je de vaktermen van de auteur behouden in plaats van ze te vervangen door synoniemen?", p5: "Zou iemand die het origineel niet heeft gelezen de tekst begrijpen?",
  verModelo: "Bekijk een mogelijke herschrijving", modelo: "Een mogelijke herschrijving (niet de enige)",
  guiaTit: "Gids: hoe je hem gebruikt en waarvoor hij dient", guia: "<h3>Waarvoor dient dit?</h3><p>Bij een tekstcommentaar of op een examen moet je in je eigen woorden uitleggen wat een auteur zegt. Er zijn drie manieren om het ongemerkt fout te doen: kopiëren, woorden vervangen door synoniemen en iets anders begrijpen. Hier leer je ze herkennen in teksten van anderen en ze te vermijden in je eigen teksten.</p><h3>Hoe gebruik je dit?</h3><ol><li>Lees de vier definities hierboven.</li><li>Kies bij “Onderscheiden” een tekst, lees het origineel en classificeer elk van de vier versies met de knoppen. Klik op “Controleren” en lees waarom elk versie is wat het is. Met “Opnieuw schudden” verandert de volgorde; met “Volgende tekst” ga je naar een andere auteur.</li><li>Bij “Schrijf de jouwe” herschrijf je zelf hetzelfde fragment en klik je op “Analyseren”. Je ziet dan de gekopieerde stukken gemarkeerd en of je de structuur hebt overgenomen. Ga daarna de lijst “Controleer zelf de betekenis” na en vergelijk met de voorbeeldherschrijving.</li></ol><h3>Tips om goed te herschrijven</h3><ul><li>Lees de tekst totdat je hem begrijpt, bedek hem en schrijf hem uit je hoofd op, zoals je hem aan iemand zou uitleggen.</li><li>Begin op een andere manier: “Volgens Kant…”, “Volgens de auteur…”, “De tekst stelt dat…”.</li><li>Verander de constructie: voeg zinnen samen of splits ze, verander de volgorde van de ideeën, maak van een voorbeeld een algemene gedachte of omgekeerd.</li><li>Behoud de vaktermen (“onmondigheid”, “deugd”, “productiewijze”): ze zijn geen kopie, maar de woordenschat van de auteur. Leg ze indien nodig uit.</li><li>Als een zin zo goed is dat je hem letterlijk wilt gebruiken, zet hem dan tussen aanhalingstekens.</li></ul>",
  aviso: "De analyse is mechanisch: hij telt woorden, hij begrijpt niet wat je zegt. Een tekst kan als “zonder kopie” uit de bus komen en toch een verkeerde interpretatie zijn."
};
const resT = (k, v) => String(RES_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const resEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const RES = { tab: "distinguir", id: "", orden: [], resp: {}, hecho: false, escrito: {} };
const resBox = () => document.getElementById("rescriturabox");
/* (09-10) de la frase más corta al texto más largo (hasta la longitud de la PAU); se cuenta en el idioma de la web */
const resLargo = t => String(t.original).replace(/<[^>]+>/g, " ").split(/\s+/).filter(w => /[\wÀ-ÿ]/.test(w)).length;
let RES_ORD = null;
const resTextos = () => RES_ORD || (RES_ORD = (typeof RESCRITURA_TEXTOS !== "undefined" ? RESCRITURA_TEXTOS : []).slice().sort((a, b) => resLargo(a) - resLargo(b)));
const resTipos = () => (typeof RESCRITURA_TIPOS !== "undefined" ? RESCRITURA_TIPOS : {});
const RES_ORDEN_TIPOS = ["rescritura", "copia", "sinonimia", "malinterpretacion"];
const resActual = () => resTextos().find(t => t.id === RES.id) || resTextos()[0];
function resBarajar(){
  const a = [0, 1, 2, 3];
  for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  RES.orden = a; RES.resp = {}; RES.hecho = false;
}

/* ---------- análisis mecánico ---------- */
/* palabras gramaticales (castellano y euskera): forman el «esqueleto» de una frase y no cuentan como contenido */
const RES_GRAM = new Set(("el la los las lo un una unos unas de del al a ante en y e o u ni que no se su sus le les me te nos mi tu con por para sin sobre entre hasta desde como pero sino si es son ha han hay ser era fue está están este esta esto estos estas ese esa eso esos esas cada todo toda todos todas otro otra otros otras mismo misma él ella ellos ellas uno quien cual cuando donde más menos muy ya también solo porque pues así tan tanto ese cuyo cuya mientras entonces aunque hacia tras " +
  "eta da dira ez bat ere du dute dio zen ziren baina edo hau hori hura honek horrek hark beste bere gure zer nola bezala baino oso baita izan dago daude ditu dituzte gabe arte guztiak guztia ezin dela duela zuen dituen den diren beraz orduan baldin bada badira").split(" "));
function resPalabras(s){
  return String(s).replace(/<[^>]+>/g, " ").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").match(/[a-zñ0-9]+/g) || [];
}
function resLCS(a, b){
  const m = a.length, n = b.length, d = Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++){ let prev = 0; for (let j = 1; j <= n; j++){ const t = d[j]; d[j] = a[i - 1] === b[j - 1] ? prev + 1 : Math.max(d[j], d[j - 1]); prev = t; } }
  return d[n];
}
/* devuelve: palabras del alumno, marcas de copia (índices), % copiado y % de esqueleto común */
function resAnalizar(original, escrito, terminos){
  const o = resPalabras(original), w = resPalabras(escrito), N = 4;
  const grams = new Set(); for (let i = 0; i + N <= o.length; i++) grams.add(o.slice(i, i + N).join(" "));
  const marca = new Array(w.length).fill(false);
  for (let i = 0; i + N <= w.length; i++) if (grams.has(w.slice(i, i + N).join(" "))) for (let k = i; k < i + N; k++) marca[k] = true;
  /* un trozo coincidente hecho solo de palabras gramaticales y términos técnicos («hacia lo que es») no es copia */
  const tec = new Set(resPalabras((terminos || []).join(" ")));
  for (let i = 0; i < w.length;){
    if (!marca[i]){ i++; continue; }
    let j = i; while (j < w.length && marca[j]) j++;
    if (w.slice(i, j).every(x => RES_GRAM.has(x) || tec.has(x))) for (let k = i; k < j; k++) marca[k] = false;
    i = j;
  }
  const copia = w.length ? Math.round(100 * marca.filter(Boolean).length / w.length) : 0;
  const go = o.filter(x => RES_GRAM.has(x)), gw = w.filter(x => RES_GRAM.has(x));
  const esq = go.length && gw.length ? Math.round(100 * resLCS(go, gw) / Math.max(go.length, gw.length)) : 0;
  const ratio = o.length ? w.length / o.length : 0;
  return { n: w.length, marca, copia, esq, ratio };
}
function resVeredicto(a){
  if (a.copia >= 40) return "vCopia";
  if (a.esq >= 60 && a.ratio > 0.75 && a.ratio < 1.35) return "vSinon";
  if (a.copia > 0) return "vMezcla";
  return "vBien";
}
/* el texto del alumno con los trozos copiados resaltados (se recorre el texto original para conservar mayúsculas y signos) */
function resResaltar(escrito, marca){
  let i = 0, out = "", last = 0;
  String(escrito).replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/g, (m, pos) => { out += resEsc(escrito.slice(last, pos)) + (marca[i++] ? "<mark>" + m + "</mark>" : m); last = pos + m.length; return m; });
  return (out + resEsc(escrito.slice(last))).replace(/<\/mark>(\s+)<mark>/g, "$1");
}

/* ---------- pintado ---------- */
function resSelector(){
  return '<label class="res-sel">' + resT("texto") + ' <select id="res-texto" class="lg-sel">' +
    resTextos().map(t => '<option value="' + t.id + '"' + (t.id === resActual().id ? " selected" : "") + ">" + t.autor + " · " + resT("nPal", { n: resLargo(t) }) + "</option>").join("") + "</select></label>";
}
function resOriginal(t){
  return '<div class="res-original"><p class="res-eti">' + resT("original") + '</p><blockquote>' + t.original + '</blockquote><p class="res-ref">' + t.autor + ", " + t.obra + "</p></div>";
}
function resDistinguir(){
  const t = resActual(), tipos = resTipos(); if (!RES.orden.length) resBarajar();
  const ok = RES.hecho ? RES.orden.filter((v, i) => RES.resp[i] === t.versiones[v].tipo).length : 0;
  return resOriginal(t) + RES.orden.map((v, i) => {
    const ver = t.versiones[v], r = RES.resp[i], bien = r === ver.tipo;
    return '<article class="res-version' + (RES.hecho ? (bien ? " res-ok" : " res-mal") : "") + '"><p class="res-eti">' + resT("version", { l: "ABCD"[i] }) + "</p><p>" + ver.texto + '</p><div class="fgroup res-opc">' +
      RES_ORDEN_TIPOS.map(k => '<button type="button" class="fbtn" data-resv="' + i + '" data-rest="' + k + '" aria-pressed="' + (r === k) + '"' + (RES.hecho ? " disabled" : "") + ">" + tipos[k].nombre + "</button>").join("") + "</div>" +
      (RES.hecho ? '<p class="res-fb"><strong>' + (bien ? resT("acierto") : resT("fallo", { t: tipos[ver.tipo].nombre.toLowerCase() })) + ".</strong> " + ver.porque + "</p>" : "") + "</article>";
  }).join("") +
    '<p class="res-acciones">' + (RES.hecho ? '<strong class="res-punt">' + (ok === 4 ? resT("todo") : resT("puntos", { n: ok })) + "</strong> " +
      '<button type="button" class="btn ghost" data-res="barajar">' + resT("otraVez") + '</button> <button type="button" class="btn" data-res="sig">' + resT("siguiente") + "</button>"
      : '<button type="button" class="btn" data-res="comprobar">' + resT("comprobar") + '</button> <span id="res-aviso" class="res-aviso"></span>') + "</p>";
}
function resEscribir(){
  const t = resActual(), val = RES.escrito[t.id] || "";
  return resOriginal(t) + '<p class="res-terminos">' + resT("terminos") + " " + t.terminos.map(x => "<em>" + x + "</em>").join(", ") + "</p>" +
    '<label class="res-eti" for="res-area">' + resT("tusPalabras") + '</label><p class="res-ayuda">' + resT("ayudaEscr") + "</p>" +
    '<textarea id="res-area" class="res-area" rows="6">' + resEsc(val) + '</textarea><p><button type="button" class="btn" data-res="analizar">' + resT("analizar") + '</button></p><div id="res-resultado"></div>';
}
function resResultado(){
  const t = resActual(), escrito = (document.getElementById("res-area") || {}).value || "", out = document.getElementById("res-resultado");
  if (!out) return; RES.escrito[t.id] = escrito;
  const a = resAnalizar(t.original, escrito, t.terminos);
  const minimo = Math.min(12, Math.ceil(0.6 * resLargo(t)));   // un original de una frase corta admite una rescritura corta
  if (a.n < minimo){ out.innerHTML = '<p class="res-aviso">' + resT("corta", { n: minimo }) + "</p>"; return; }
  const modelo = t.versiones.find(v => v.tipo === "rescritura");
  out.innerHTML = '<div class="res-diag res-' + resVeredicto(a) + '"><p>' + resT(resVeredicto(a)) + "</p></div>" +
    "<h3>" + resT("copiado") + "</h3>" + (a.copia ? "<p>" + resT("pctCopia", { p: a.copia }) + '</p><p class="res-tuyo">' + resResaltar(escrito, a.marca) + "</p>" : "<p>" + resT("sinCopia") + "</p>") +
    "<h3>" + resT("esqueleto") + "</h3><p>" + resT(a.esq >= 60 && a.ratio > 0.75 && a.ratio < 1.35 ? "esqAlto" : "esqBajo", { p: a.esq }) + "</p>" +
    "<h3>" + resT("sentido") + '</h3><ul class="res-lista">' + ["p1", "p2", "p3", "p4", "p5"].map(k => '<li><label><input type="checkbox"> ' + resT(k) + "</label></li>").join("") + "</ul>" +
    '<details class="res-modelo"><summary>' + resT("verModelo") + "</summary><p>" + modelo.texto + '</p><p class="res-ayuda">' + modelo.porque + "</p></details>" +
    '<p class="res-ayuda">' + resT("aviso") + "</p>";
}
function resRender(){
  const box = resBox(); if (!box || !resTextos().length) return;
  if (!RES.id) RES.id = resTextos()[0].id;
  const tipos = resTipos();
  box.innerHTML = '<details class="res-guia"><summary>' + resT("guiaTit") + "</summary>" + resT("guia") + "</details>" + '<div class="res-tipos">' + RES_ORDEN_TIPOS.map(k => '<div class="res-tipo res-t-' + k + '"><strong>' + tipos[k].nombre + "</strong><span>" + tipos[k].def + "</span></div>").join("") + "</div>" +
    '<div class="fgroup res-tabs" role="tablist">' + [["distinguir", "tabDist"], ["escribir", "tabEscr"]].map(([k, l]) => '<button type="button" class="fbtn" data-restab="' + k + '" aria-pressed="' + (RES.tab === k) + '">' + resT(l) + "</button>").join("") + "</div>" +
    '<div class="res-panel">' + resSelector() + (RES.tab === "escribir" ? resEscribir() : resDistinguir()) + "</div>";
}

/* ---------- eventos ---------- */
document.addEventListener("click", e => {
  const box = resBox(); if (!box || !box.contains(e.target)) return;
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.restab){ RES.tab = b.dataset.restab; resRender(); return; }
  if (b.dataset.resv != null){ RES.resp[b.dataset.resv] = b.dataset.rest; resRender(); return; }
  const a = b.dataset.res;
  if (a === "comprobar"){
    if (Object.keys(RES.resp).length < 4){ const av = document.getElementById("res-aviso"); if (av) av.textContent = resT("faltan"); return; }
    RES.hecho = true; resRender();
  } else if (a === "barajar"){ resBarajar(); resRender(); }
  else if (a === "sig"){ const ts = resTextos(), i = ts.findIndex(t => t.id === resActual().id); RES.id = ts[(i + 1) % ts.length].id; resBarajar(); resRender(); window.scrollTo({ top: box.offsetTop - 80 }); }
  else if (a === "analizar") resResultado();
});
document.addEventListener("change", e => {
  if (e.target.id !== "res-texto") return;
  RES.id = e.target.value; resBarajar(); resRender();
});
document.addEventListener("input", e => { if (e.target.id === "res-area") RES.escrito[resActual().id] = e.target.value; });

function loadRescritura(arg){
  const [modo, id] = String(arg || "").split("/");
  if (modo === "distinguir" || modo === "escribir") RES.tab = modo;
  if (id && resTextos().some(t => t.id === id)){ RES.id = id; resBarajar(); }
  resRender();
}
/* (02-11, P-040) se pinta al abrir la vista por primera vez, no al cargar la página (js/carga_diferida.js) */
if (resBox()) (window.pintarAlAbrir || ((id, f) => f()))("rescritura", resRender);
