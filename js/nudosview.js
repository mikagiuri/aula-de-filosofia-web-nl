"use strict";
/* ===== «Nudos: ¿encajan tus razones?» (09-10, Bachillerato) — vista sobre nudos.js (NUDOS) =====
   El alumno contesta afirmaciones (de acuerdo / en desacuerdo / depende, diciendo de qué). Cuando dos respuestas
   chocan aparece un nudo, y se deshace ESCRIBIENDO: cambiar una respuesta (y decir qué te hizo cambiar),
   distinguir (nombrar la diferencia relevante) o morder la bala (aceptar la consecuencia). Hay nudos aparentes,
   que parecen contradicción y no lo son. Sin nota, sin perfil, sin comparar con nadie y sin guardar nada:
   al final, un «cuaderno de razones» para imprimir o copiar. Enlace profundo: #nudos/<módulo>. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const NUD_TXT = {
  intro: "Je gaat een aantal stellingen lezen en aangeven of je het ermee eens bent, oneens, of dat het ervan afhangt, en waarvan. Wanneer twee van je antwoorden met elkaar botsen, verschijnt er een knoop. Om die te ontwarren moet je een reden opschrijven.",
  intro2: "Er zijn geen juiste antwoorden, er is geen cijfer en niemand vergelijkt jouw antwoorden met die van anderen. Niets wordt opgeslagen of verlaat deze browser. Aan het einde heb je je redenschrift om af te drukken of te kopiëren.",
  nAfs: "{n} stellingen · {m} mogelijke knopen", empezar: "Beginnen",
  afirmacion: "Stelling {i} van {n}", piensas: "Wat denk je?",
  vA: "Mee eens", vD: "Oneens", vP: "Hangt ervan af",
  deQue: "Waar hangt het van af? Geef minstens één geval waarin het wel zo is en één waarin het niet zo is.",
  nPal: "{n} woorden (minimaal {m})", siguiente: "Volgende", volver: "Terug", salir: "Afsluiten",
  tuResp: "Jouw antwoord: {v}",
  nudo: "Knoop", nudoAp: "Schijnbare knoop",
  nudoTit: "Deze twee antwoorden trekken in tegengestelde richtingen", nudoApTit: "Dit lijkt een tegenstrijdigheid…",
  apExplica: "Leg het in je eigen woorden uit: waarom is het geen tegenstrijdigheid?", seguir: "Doorgaan",
  elige: "Kies hoe je het ontwart. Er is geen juiste optie: wat telt is de reden die je geeft.",
  oCa: "✏️ Ik verander mijn antwoord op de eerste stelling", oCb: "✏️ Ik verander mijn antwoord op de tweede stelling",
  oDi: "🔍 Ik houd ze allebei: er is een relevant verschil dat het verklaart",
  oBa: "🦷 Ik houd ze allebei en accepteer de consequentie (“ik bijt de kogel”)",
  pCambio: "Wat heeft je van mening doen veranderen?",
  pDist: "Wat is het relevante verschil tussen de twee gevallen? Noem het en leg uit waarom het ertoe doet.",
  pBala: "Welke consequentie accepteer je precies, en waarom vind je die aanvaardbaar?",
  reContestar: "Die stelling opnieuw beantwoorden", guardar: "Mijn reden opslaan",
  saberMas: "Meer weten:",
  cuaderno: "Je redenenschrift", cuadSub: "Zonder cijfer en zonder profiel: wat telt is wat je hebt geschreven.",
  misResp: "Mijn antwoorden", dependeDe: "Hangt af van: {t}",
  misNudos: "Mijn knopen en hoe ik ze ontwarde",
  lCambio: "Ik veranderde van mening over “{a}”: van “{de}” naar “{x}”.", porQue: "Waarom: {t}",
  lDist: "Ik maakte onderscheid tussen “{a}” en “{b}”.", lBala: "Ik beet de kogel tussen “{a}” en “{b}”.", lAp: "Schijnbare knoop tussen “{a}” en “{b}”.",
  miRazon: "Mijn reden: {t}",
  sinNudos: "Er verscheen geen enkele knoop bij je antwoorden. Is dat omdat je coherent bent of omdat je vaak “Hangt ervan af” hebt geantwoord? Beide kunnen waar zijn.",
  sinNudosPocoP: "Er is geen van onze knopen verschenen, maar dat bewijst niet dat ze er niet zijn: zoek zelf een knoop tussen je antwoorden en schrijf die op bij de laatste uitdaging.",
  reto: "Laatste uitdaging", retoTxt: "Kies het antwoord waarover je het zekerst bent en schrijf de beste tegenwerping die iemand daartegen zou kunnen maken. Beantwoord die daarna.",
  imprimir: "Afdrukken of opslaan als pdf", copiar: "Kopiëren als tekst", inicio: "Terug naar het begin",
  copiado: "Gekopieerd.", noCopia: "Kopiëren is niet gelukt; gebruik “Afdrukken”.",
  guiaTit: "Gids: hoe je hem gebruikt en waarvoor hij dient",
  guia: "<h3>Waarvoor het dient</h3><p>Goed denken is niet veel meningen hebben, maar dat ze bij elkaar passen en dat je er redenen voor kunt geven. Hier ontdek je waar je eigen antwoorden botsen en oefen je de drie eerlijke manieren om een botsing op te lossen: van mening veranderen, een relevant verschil tussen de gevallen aanwijzen of een ongemakkelijke consequentie accepteren. In alle drie de gevallen moet je opschrijven waarom.</p><h3>Hoe je het gebruikt</h3><ol><li>Kies een module en beantwoord de stellingen een voor een. Als je “Hangt ervan af” kiest, leg dan uit waarvan.</li><li>Als er een knoop verschijnt, lees dan waarom je antwoorden botsen en kies hoe je die ontwart. Als je een antwoord verandert, ga je terug naar die stelling en daarna verder waar je was.</li><li>Sommige knopen zijn schijnbaar: ze lijken een tegenstrijdigheid maar zijn het niet. Leg in je eigen woorden uit waarom.</li><li>Bekijk aan het einde je redenenschrift, beantwoord de laatste uitdaging en druk het af als dat wordt gevraagd.</li></ol><h3>Let op</h3><ul><li>Er zijn geen juiste antwoorden en geen score: een knoop is geen fout, maar een uitnodiging om na te denken.</li><li>Niet elke botsing is een tegenstrijdigheid. Twee gevallen goed onderscheiden is net zo waardevol als van mening veranderen.</li><li>Je antwoorden worden nergens naartoe gestuurd en niet met die van iemand anders vergeleken.</li></ul>"
};
const nudT = (k, v) => String(NUD_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const nudEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nudPal = s => (String(s).trim().match(/\S+/g) || []).length;
const nudBox = () => document.getElementById("nudosbox");
let NUD = null;   // estado del recorrido: { m, orden, pos, resp, hechos, log, volverA }

function nudVal(v){ return nudT({ A: "vA", D: "vD", P: "vP" }[v]); }
function nudPar(n){ const [a, b] = n.k.split("|").map(x => x.split("=")); return { a: a[0], av: a[1], b: b[0], bv: b[1] }; }

function nudInicio(){
  NUD = null;
  const box = nudBox(); if (!box) return;
  box.innerHTML = '<details class="nud-guia"><summary>' + nudT("guiaTit") + "</summary>" + nudT("guia") + "</details>" +
    '<div class="nud-card"><p>' + nudT("intro") + '</p><p class="nud-muted">' + nudT("intro2") + "</p></div>" +
    '<div class="nud-mods">' + NUDOS.map(m => '<button type="button" class="nud-mod" data-nudmod="' + m.id + '"><strong>' + m.titulo + '</strong><span class="nud-muted">' + m.sub + '</span><span class="nud-small">' +
      nudT("nAfs", { n: Object.keys(m.afs).length, m: m.nudos.length }) + "</span></button>").join("") + "</div>";
  box.querySelectorAll("[data-nudmod]").forEach(b => b.onclick = () => nudEmpezar(b.dataset.nudmod));
}

function nudEmpezar(id){
  const m = NUDOS.find(x => x.id === id) || NUDOS[0];
  NUD = { m, orden: Object.keys(m.afs), pos: 0, resp: {}, hechos: new Set(), log: [], volverA: null };
  nudPregunta();
}

function nudPregunta(motivo){
  const box = nudBox(), id = NUD.orden[NUD.pos], r = motivo != null ? {} : (NUD.resp[id] || {});
  box.innerHTML = '<div class="nud-card"><p class="nud-small nud-muted">' + NUD.m.titulo + " · " + nudT("afirmacion", { i: NUD.pos + 1, n: NUD.orden.length }) + "</p>" +
    '<p class="nud-stmt" id="nud-enun">' + NUD.m.afs[id] + "</p>" +
    '<fieldset class="nud-fs" aria-labelledby="nud-enun"><legend class="nud-small nud-muted">' + nudT("piensas") + '</legend><div class="nud-opts">' +
    ["A", "D", "P"].map(v => '<label class="nud-opt"><input type="radio" name="nud-v" value="' + v + '"' + (r.v === v ? " checked" : "") + "><span>" + nudVal(v) + "</span></label>").join("") +
    '</div></fieldset><div id="nud-dep"' + (r.v === "P" ? "" : " hidden") + '><label class="nud-lab" for="nud-deptx">' + nudT("deQue") + '</label><textarea id="nud-deptx">' + nudEsc(r.dep || "") + '</textarea><div class="nud-count" id="nud-depc"></div></div>' +
    '<p class="nud-row"><button type="button" class="btn" id="nud-sig" disabled>' + nudT("siguiente") + "</button>" +
    (NUD.pos > 0 && motivo == null ? ' <button type="button" class="btn ghost" id="nud-atr">' + nudT("volver") + "</button>" : "") +
    ' <button type="button" class="btn ghost" id="nud-sal">' + nudT("salir") + "</button></p></div>";
  const val = () => (box.querySelector("input[name=nud-v]:checked") || {}).value;
  const ok = () => {
    const v = val(), n = nudPal(document.getElementById("nud-deptx").value);
    document.getElementById("nud-dep").hidden = v !== "P";
    document.getElementById("nud-depc").textContent = v === "P" ? nudT("nPal", { n, m: 8 }) : "";
    document.getElementById("nud-sig").disabled = !v || (v === "P" && n < 8);
  };
  box.querySelectorAll("input[name=nud-v]").forEach(x => x.onchange = ok);
  document.getElementById("nud-deptx").oninput = ok; ok();
  document.getElementById("nud-sal").onclick = nudInicio;
  const atr = document.getElementById("nud-atr"); if (atr) atr.onclick = () => { NUD.pos--; nudPregunta(); };
  document.getElementById("nud-sig").onclick = () => {
    const v = val(), antes = NUD.resp[id];
    NUD.resp[id] = { v, dep: v === "P" ? document.getElementById("nud-deptx").value.trim() : "" };
    if (antes && antes.v !== v){
      NUD.log.push({ tipo: "cambio", id, de: antes.v, a: v, razon: motivo || "" });
      for (const k of [...NUD.hechos]) if (k.split("|").some(x => x.split("=")[0] === id)) NUD.hechos.delete(k);   // sus nudos se vuelven a evaluar
    }
    nudSiguiente();
  };
  window.scrollTo({ top: box.offsetTop - 80 });
}

function nudPendiente(){
  return NUD.m.nudos.find(n => {
    if (NUD.hechos.has(n.k)) return false;
    const p = nudPar(n), ra = NUD.resp[p.a], rb = NUD.resp[p.b];
    return ra && rb && ra.v === p.av && rb.v === p.bv;
  });
}

function nudSiguiente(){
  const n = nudPendiente();
  if (n) return nudNudo(n);
  if (NUD.volverA != null){ NUD.pos = NUD.volverA; NUD.volverA = null; }
  if (NUD.pos < NUD.orden.length - 1){ NUD.pos++; return nudPregunta(); }
  nudCuaderno();
}

function nudNudo(n){
  const box = nudBox(), p = nudPar(n), ap = n.tipo === "aparente";
  const fila = id => "<div><strong>" + NUD.m.afs[id] + '</strong><br><span class="nud-small nud-muted">' + nudT("tuResp", { v: nudVal(NUD.resp[id].v) }) + "</span></div>";
  box.innerHTML = '<div class="nud-card nud-knot' + (ap ? " nud-ap" : "") + '" role="region" aria-live="polite"><span class="nud-tag">' + nudT(ap ? "nudoAp" : "nudo") + "</span>" +
    "<h3>" + nudT(ap ? "nudoApTit" : "nudoTit") + '</h3><div class="nud-pair">' + fila(p.a) + fila(p.b) + "</div><p>" + n.por + "</p>" +
    (ap ? '<label class="nud-lab" for="nud-tx">' + nudT("apExplica") + '</label><textarea id="nud-tx"></textarea><div class="nud-count" id="nud-cnt"></div><p class="nud-row"><button type="button" class="btn" id="nud-ok" disabled>' + nudT("seguir") + "</button></p>"
      : '<p class="nud-small nud-muted">' + nudT("elige") + '</p><div class="nud-choices">' +
        [["ca", "oCa"], ["cb", "oCb"], ["di", "oDi"], ["ba", "oBa"]].map(([c, l]) => '<button type="button" class="nud-choice" data-nudc="' + c + '" aria-pressed="false">' + nudT(l) + "</button>").join("") +
        '</div><div id="nud-extra"></div>') +
    '<p class="nud-src">' + nudT("saberMas") + " " + n.fuente + "</p>" +
    (typeof cruTesisHtml === "function" ? cruTesisHtml(cruNudoTesis(NUD.m.id, n.k)) : "") + "</div>";   // (11-10) cruces_tesis.js
  if (ap){
    nudTexto(10, () => { NUD.hechos.add(n.k); NUD.log.push({ tipo: "aparente", n, razon: document.getElementById("nud-tx").value.trim() }); nudSiguiente(); });
    return;
  }
  box.querySelectorAll("[data-nudc]").forEach(b => b.onclick = () => {
    box.querySelectorAll("[data-nudc]").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    nudOpcion(n, b.dataset.nudc);
  });
}

function nudTexto(min, alPulsar){
  const tx = document.getElementById("nud-tx"), b = document.getElementById("nud-ok");
  tx.oninput = () => { const w = nudPal(tx.value); document.getElementById("nud-cnt").textContent = nudT("nPal", { n: w, m: min }); b.disabled = w < min; };
  tx.oninput(); b.onclick = alPulsar;
}

function nudOpcion(n, c){
  const p = nudPar(n), cambio = c === "ca" || c === "cb", min = cambio ? 8 : 15;
  document.getElementById("nud-extra").innerHTML = (c === "di" && n.distinguir ? '<p class="nud-hint">' + n.distinguir + "</p>" : "") +
    '<label class="nud-lab" for="nud-tx">' + nudT(cambio ? "pCambio" : (c === "di" ? "pDist" : "pBala")) + '</label><textarea id="nud-tx"></textarea><div class="nud-count" id="nud-cnt"></div>' +
    '<p class="nud-row"><button type="button" class="btn" id="nud-ok" disabled>' + nudT(cambio ? "reContestar" : "guardar") + "</button></p>";
  document.getElementById("nud-tx").focus();
  nudTexto(min, () => {
    const razon = document.getElementById("nud-tx").value.trim();
    if (cambio){
      if (NUD.volverA == null) NUD.volverA = NUD.pos;
      NUD.pos = NUD.orden.indexOf(c === "ca" ? p.a : p.b);
      nudPregunta(razon);   // si la respuesta no cambia, el nudo vuelve a aparecer
      return;
    }
    NUD.hechos.add(n.k); NUD.log.push({ tipo: c === "di" ? "distingo" : "bala", n, razon }); nudSiguiente();
  });
}

function nudCuaderno(){
  const box = nudBox(), af = id => NUD.m.afs[id], afc = id => af(id).replace(/\.\s*$/, "");   // (09-10) afc: al citarla entre comillas, sin su punto final (evita «….».)
  const lineas = NUD.log.map(e => {
    if (e.tipo === "cambio") return "<li>" + nudT("lCambio", { a: afc(e.id), de: nudVal(e.de), x: nudVal(e.a) }) + (e.razon ? "<br>" + nudT("porQue", { t: nudEsc(e.razon) }) : "") + "</li>";
    const p = nudPar(e.n), k = { distingo: "lDist", bala: "lBala", aparente: "lAp" }[e.tipo];
    return "<li>" + nudT(k, { a: afc(p.a), b: afc(p.b) }) + "<br>" + nudT("miRazon", { t: nudEsc(e.razon) }) + "</li>";
  }).join("") || '<li class="nud-muted">' + nudT(NUD.orden.filter(id => NUD.resp[id].v === "P").length >= 3 ? "sinNudos" : "sinNudosPocoP") + "</li>";   // (09-10) el mensaje de «mucho Depende» solo si de verdad lo hay
  box.innerHTML = '<div class="nud-card nud-cuaderno"><h3>' + nudT("cuaderno") + '</h3><p class="nud-small nud-muted">' + NUD.m.titulo + " · " + new Date().toLocaleDateString(document.documentElement.lang || "es") + ". " + nudT("cuadSub") + "</p>" +
    "<h4>" + nudT("misResp") + "</h4><ul>" + NUD.orden.map(id => "<li>" + af(id) + " — <strong>" + nudVal(NUD.resp[id].v) + "</strong>" + (NUD.resp[id].dep ? '<br><span class="nud-small">' + nudT("dependeDe", { t: nudEsc(NUD.resp[id].dep) }) + "</span>" : "") + "</li>").join("") + "</ul>" +
    "<h4>" + nudT("misNudos") + '</h4><ul class="nud-log">' + lineas + "</ul>" +
    (typeof cruNudoRayuela === "function" ? cruNudoRayuela(NUD.m.id) : "") +   // (11-10) «Vívelo en la Rayuela»
    "<h4>" + nudT("reto") + '</h4><label class="nud-lab" for="nud-reto">' + nudT("retoTxt") + '</label><textarea id="nud-reto" class="nud-reto"></textarea>' +
    '<p class="nud-row nud-noprint"><button type="button" class="btn" id="nud-imp">' + nudT("imprimir") + '</button> <button type="button" class="btn ghost" id="nud-cop">' + nudT("copiar") +
    '</button> <button type="button" class="btn ghost" id="nud-ini">' + nudT("inicio") + '</button> <span class="nud-small nud-muted" id="nud-msg" aria-live="polite"></span></p></div>';
  document.getElementById("nud-imp").onclick = () => void 0 /* sin imprimir en la web de alumnado */;
  document.getElementById("nud-ini").onclick = nudInicio;
  document.getElementById("nud-cop").onclick = async () => {
    const t = box.querySelector(".nud-cuaderno").innerText.replace(/\n{3,}/g, "\n\n") + "\n\n" + nudT("reto") + ": " + document.getElementById("nud-reto").value;
    try { await navigator.clipboard.writeText(t); document.getElementById("nud-msg").textContent = nudT("copiado"); }
    catch (e){ document.getElementById("nud-msg").textContent = nudT("noCopia"); }
  };
  window.scrollTo({ top: box.offsetTop - 80 });
}

function loadNudos(arg){
  const id = String(arg || "").split("/")[0];
  if (id && NUDOS.some(m => m.id === id)) nudEmpezar(id); else nudInicio();
}
if (nudBox() && typeof NUDOS !== "undefined") nudInicio();
