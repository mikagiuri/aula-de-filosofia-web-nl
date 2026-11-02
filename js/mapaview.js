"use strict";
/* ===== Mapa de la web (11-10-2026) =====
   Petición del profesor: un mapa de la web dentro de la propia web. Se abre desde el pie («Mapa de la web», #mapa).
   Se construye al cargar a partir del menú (#tabs) tal como lo deja cada build, así que cada web publicada
   (Filosofía 1.º, HF, ESO, y sus traducciones) muestra solo sus secciones, en el orden del menú, con una línea
   de qué hay en cada una y, cuando se puede contar, cuántos elementos tiene. Debajo, los temas de cada materia
   con sus exploraciones (de Itinerario.temasDe) y, dentro de Biografías, las fichas de época.
   Los textos van en MAPA_TXT y MAPA_DESC (se traducen con el diccionario de interfaz ui/<lang>.json). */
const MAPA_TXT = {
  secciones: "Secties", temas: "Thema’s van elk vak", tema: "Thema {n}", exploraciones: "Verkenningen",
  epocas: "Tijdperkfiches", otras: "Andere secties", elementos: "Elementen"
};
const MAPA_SUBJ = { fil: "Filosofie 1e jaar Bachillerato", hf: "Geschiedenis van de filosofie 2e jaar Bachillerato", ipc: "Kritisch denken 2e jaar ESO" };
const MAPA_DESC = {
  inicio: "Voorpagina van de workshop, met de drie vakken en het rooster.",
  fil: "De fiche van het vak: thema’s, hulpmiddelen en hoe te studeren.",
  hf: "De fiche van het vak: thema’s, hulpmiddelen en hoe te studeren.",
  ipc: "De fiche van het vak: eenheden, hulpmiddelen en hoe te studeren.",
  sesiones: "Wat er in elke les gebeurt.",
  calendario: "Data van de cursus, beoordelingen en examens.",
  tiempo: "Verdeling van de tijd per thema.",
  teoria: "De aantekeningen van elk thema, met verkenningen om verder te gaan.",
  clases: "De cursus Kritisch denken, les per les.",
  materiales: "Fiches, activiteiten en documenten om te downloaden.",
  cuentos: "Verhalen om over na te denken, met vragen.",
  tarjetas: "Herhalingskaarten: vraag voorop, antwoord achterop.",
  retos: "Vragen tegen de klok om spelenderwijs te herhalen.",
  parejas: "Memoryspel: verbind elk concept met zijn paar.",
  diccionario: "De concepten van elk thema, met hun definitie en hun oorsprong.",
  biografias: "Biografieën van de denkers en fiches van elk tijdperk.",
  citas: "Beroemde uitspraken van de filosofen, uitgelegd.",
  adagios: "Klassieke motto’s in het Latijn en Grieks, en beroemde uitspraken van filosofen: wat ze betekenen en wanneer je ze kunt gebruiken.",
  duelo: "Debat tegen de computer: betrap zijn drogredenen of reageer met sterkere redenen, zonder je kalmte te verliezen.",
  epocas: "De kaarten van elke periode, van het oude Griekenland tot vandaag, met hun beeld van de kosmos.",
  polemicas: "Denkers die in dezelfde tijd leefden en elkaar confronteerden: kies aan wiens kant je staat en waarom.",
  perseguidos: "Filosofen en wetenschappers gestraft om hun ideeën: wat er gebeurde en wat vaak verkeerd wordt verteld.",
  comunidades: "Scholen en kringen van denkers, en de plaatsen waar ze samenkwamen.",
  mundo: "Als de klas de wereld was: de gegevens van de planeet, in jouw klaslokaal.",
  camino: "Verhalen waarin je kiest wat je doet en de gevolgen ziet.",
  eudaimonia: "Spel over geluk volgens Aristoteles.",
  republica: "Spel om de ideale stad van Plato te organiseren.",
  rayuela: "Vind de tegenstrijdigheid in de teksten van de filosofen.",
  nudos: "Problemen die makkelijk lijken maar dat niet zijn.",
  dilemas: "Moeilijke gevallen om te debatteren over wat goed is.",
  logica: "Waarheidstabellen, syllogismen, oppositievierkant, diagrammen en het laboratorium: waarheidsbomen, werelden van figuren, relaties en bewijzen.",
  leibniz: "Leibniz en zijn uitvindingen: de rekenmachine, het binaire stelsel en de calculus.",
  palabra: "De kunst van het woord: poëtica, retorica en topoi, van Aristoteles tot de literatuur, het theater en de reclame van vandaag.",
  afectos: "De affecten van Spinoza: hoe ze ontstaan uit vreugde en droefheid, en waarom het begrijpen ervan ons vrij maakt.",
  universo: "Het universum van Aristoteles: de vier elementen, de val van lichamen, de ziel en de levende wezens, en de scheuren die de moderne wetenschap opende.",
  infografias: "Elk thema samengevat in één afbeelding.",
  galeria: "Kunstwerken en illustraties bij de thema’s.",
  mapas: "Conceptuele begrippenkaarten van de thema’s.",
  cronogramas: "Tijdlijnen van auteurs en tijdperken.",
  genealogias: "Wie beïnvloedde wie: meesters, leerlingen en rivalen.",
  esquemas: "Schema’s van de hoofdideeën van elk thema.",
  resumenes: "Een samenvatting per auteur, voor de PAU.",
  diapositivas: "Presentaties van de thema’s.",
  rescritura: "Leer een tekst in je eigen woorden te herschrijven.",
  pistas: "Problemen met hints die geleidelijk aan worden onthuld.",
  cuestionarios: "Meerkeuzevragen van elk thema, met correctie.",
  logica_pca: "De valkuilen van de discussie, om ze te herkennen.",
  unidad: "Alle vragen van een eenheid, bij elkaar.",
  rubricas: "Hoe werkstukken en examens worden nagekeken.",
  evidencias: "Leerbewijzen van het afgelopen schooljaar.",
  recursos: "Externe links en hulpmiddelen.",
  prepara_PAU: "Hoe het toelatingsexamen voor de universiteit eruitziet.",
  comentario: "Hoe je een tekstcommentaar maakt, met uitgewerkte voorbeelden.",
  disertaciones: "Hoe je een betoog schrijft, met modellen.",
  lecturas: "De teksten van de auteurs om te lezen en te becommentariëren.",
  tutoria: "Mentormaterialen.",
  signos: "Cursus gebarentaal."
};
/* cuántos elementos tiene cada sección (si su colección está cargada en esta web) */
const MAPA_CUENTA = { tarjetas: "DECKS", cuestionarios: "QUIZZES", diccionario: "DICCIONARIO", biografias: "BIOGRAFIAS", adagios: "ADAGIOS", polemicas: "POLEMICAS", perseguidos: "PERSEGUIDOS", comunidades: "COMUNIDADES",
  infografias: "INFOGRAFIAS", mapas: "MAPS", esquemas: "ESQUEMAS", cronogramas: "CRONOGRAMAS", genealogias: "GENEALOGIAS", lecturas: "LECTURAS",
  galeria: "GALERIA", dilemas: "DILEMAS", disertaciones: "DISERTACIONES", nudos: "NUDOS", pistas: "PISTAS", materiales: "MATERIALS" };
function mapaG(name){ try { return (0, eval)("typeof " + name + " !== 'undefined' ? " + name + " : undefined"); } catch (e){ return undefined; } }
function mapaEsc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function mapaStrip(s){ return String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(); }
function mapaCuenta(v){
  if (v === "teoria"){ const It = window.Itinerario; return It && It.temasDe ? ["fil", "hf", "ipc"].reduce((n, s) => n + It.temasDe(s, true).length, 0) : 0; }
  const c = MAPA_CUENTA[v] && mapaG(MAPA_CUENTA[v]);
  return c ? (Array.isArray(c) ? c.length : Object.keys(c).length) : 0;
}
function mapaItem(el){
  if (el.tagName === "A") return '<li><a class="mapa-a" href="' + mapaEsc(el.getAttribute("href")) + '" target="_blank" rel="noopener">' + mapaEsc(mapaStrip(el.innerHTML)) + '</a></li>';
  const v = el.dataset.view; if (!v || v === "mapa" || !document.getElementById(v)) return "";
  const n = mapaCuenta(v), extra = v === "biografias" ? mapaEpocas() : "";
  return '<li><button type="button" class="mapa-a" data-igo="' + mapaEsc(v) + '" data-iarg="">' + mapaEsc(mapaStrip(el.textContent)) + '</button>' +
    (n ? ' <span class="mapa-n" title="' + n + " " + MAPA_TXT.elementos + '">' + n + '</span>' : '') +
    (MAPA_DESC[v] ? '<span class="mapa-d">' + mapaEsc(MAPA_DESC[v]) + '</span>' : '') + extra + '</li>';
}
function mapaEpocas(){
  const EF = mapaG("EPOCAS_FICHAS"); if (!EF || typeof bioNombreFicha !== "function") return "";
  return '<span class="mapa-sub"><b>' + MAPA_TXT.epocas + ':</b> ' + Object.keys(EF).map(k =>
    '<button type="button" class="mapa-a" data-igo="biografias" data-iarg="epoca-' + k + '">' + mapaEsc(bioNombreFicha(k)) + '</button>').join(" · ") + '</span>';
}
function mapaTemas(){
  const It = window.Itinerario, T = mapaG("THEORY"); if (!It || !It.temasDe || !T) return "";
  const lab = k => { const o = T[k], n = It.temaOf("teoria", k, o); return (o.sigla ? o.sigla + " · " : typeof n === "number" ? MAPA_TXT.tema.replace("{n}", n) + " · " : "") + mapaStrip(o.title); };
  const lnk = k => '<button type="button" class="mapa-a" data-igo="teoria" data-iarg="' + mapaEsc(k) + '">' + mapaEsc(lab(k)) + '</button>';
  const exp = k => mapaStrip(T[k].title).replace(/^(Exploración|Esplorazioa|Exploration|Anexo|Eranskina|Annexe|Annex|Appendix|استكشاف)\s*[-–:]\s*/, "");
  return ["fil", "hf", "ipc"].map(s => {
    const ks = It.temasDe(s); if (!ks.length) return "";
    const todos = It.temasDe(s, true), anexos = todos.filter(k => It.esAnexo && It.esAnexo(T[k]));
    return '<div class="mapa-grupo"><h3>' + mapaEsc(MAPA_SUBJ[s]) + '</h3><ol class="mapa-temas">' + ks.map(k => {
      const n = It.temaOf("teoria", k, T[k]), ex = T[k].sigla ? [] : anexos.filter(a => T[a].temaN === n);
      return '<li>' + lnk(k) + (ex.length ? '<details class="mapa-exp"><summary>' + MAPA_TXT.exploraciones + ' (' + ex.length + ')</summary><ul>' +
        ex.map(a => '<li><button type="button" class="mapa-a" data-igo="teoria" data-iarg="' + mapaEsc(a) + '">' + mapaEsc(exp(a)) + '</button></li>').join("") + '</ul></details>' : '') + '</li>';
    }).join("") + '</ol></div>';
  }).join("");
}
function renderMapa(){
  const box = document.getElementById("mapabox"), tabs = document.getElementById("tabs"); if (!box || !tabs) return;
  const grupos = [], sueltos = [];
  [...tabs.children].forEach(el => {
    if (el.classList.contains("navsec")){
      const g = el.querySelector(".navgroup"), items = [...el.querySelectorAll(".navmenu > button, .navmenu > a")].map(mapaItem).join("");
      if (items) grupos.push('<div class="mapa-grupo"><h3>' + mapaEsc(mapaStrip(g ? g.textContent : "")) + '</h3><ul class="mapa-lista">' + items + '</ul></div>');
    } else if (el.matches("button[data-view], a")) sueltos.push(mapaItem(el));
  });
  const s = sueltos.join("");
  box.innerHTML = '<h2 class="sec">' + MAPA_TXT.secciones + '</h2><div class="mapa-cols">' +
    (s ? '<div class="mapa-grupo"><h3>' + MAPA_TXT.otras + '</h3><ul class="mapa-lista">' + s + '</ul></div>' : '') + grupos.join("") + '</div>' +
    (function(){ const t = mapaTemas(); return t ? '<h2 class="sec">' + MAPA_TXT.temas + '</h2><div class="mapa-cols">' + t + '</div>' : ""; })();
}
document.addEventListener("DOMContentLoaded", () => { try { renderMapa(); } catch (e){} });
