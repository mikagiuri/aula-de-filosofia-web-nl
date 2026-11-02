"use strict";
/* ===== «Duelo de razones» (11-10: de juego aparte a sección de la web) — vista sobre duelo.js =====
   Antes eran cinco copias autónomas (media/juego_duelo_de_razones*.html, una por lengua). Ahora: datos en duelo.js
   (traducidos por tm/<lang>.json) y textos de interfaz en DUE_TXT (traducidos por ui/<lang>.json). Mismas reglas y
   equilibrio que el original (docs/17_duelo_de_razones_juego_debate.md): 6 intervenciones, medidor de público, temple,
   señalar la falacia (A) o contraargumentar (B), comodines «¿Cómo lo sabes?» y «¿Qué gana?».
   Nivel según la web (eso | fil | hf; en la web local, todos con un filtro). «Modo proyector»: pantalla completa y letra grande.
   Enlaces profundos: #duelo/<nivel> y #duelo/<nivel>/<id del tema> (p. ej. desde Polémicas: #duelo/hf/pol-erasmo-lutero). */
const DUE_TXT = {
  eyebrow: "Debatspel · één gesprek, één thema",
  h1: "Discussieer en overtuig",
  lede: "Je debatteert over een thema tegen de computer en een meter geeft aan wie het publiek aan het overtuigen is. In elke beurt, na wat er zojuist is gezegd, kies je jouw zet.",
  rA: "<b>De drogreden aanwijzen.</b> Als zijn argument vals speelt, benoem je die en dwing je hem die te verdedigen. Wanneer de truc de kern van zijn standpunt is, doet dit hem veel schade.",
  rB: "<b>Tegenargumenteren.</b> Je laat zijn zet passeren en reageert met een eigen reden. Als die sterk genoeg is, overtuigt die meer dan bezig te zijn met het corrigeren van een kleine truc… maar als die zwak is en zijn truc groot was, gaat het mis. Let op: zijn argumenten hebben ook kracht; als jouw reden zwakker is dan de zijne, gaat het publiek met hem mee.",
  rT: "<b>Zelfbeheersing.</b> Wanneer ze je respectloos behandelen of je raken (een belediging, een dreigement, een persoonlijke aanval) verlies je zelfbeheersing, ook al doorzie je de zet: de klap doet evenveel pijn. Het herstelt niet vanzelf, dus het stapelt zich op. Bij nul verlies je je zelfbeheersing (je kunt alleen nog maar beledigen, opgeven of vluchten); stop dan en adem om weer wat kalmte te krijgen.",
  rC: "<b>Jokers (één van elk per partij).</b> <b>Hoe weet je dat?</b> ontmantelt drogredenen die doen alsof ze steun hebben (een beroemdheid, iedereen, weinig gevallen, een valse oorzaak, de traditie), ook als je de naam niet kent; tegen een legitiem argument kost het je punten, want dan geeft hij je zijn redenen. <b>Wat wint hij?</b> brengt het verborgen belang van de spreker aan het licht, als die er is; zo niet, kost het je punten: zonder aanwijzingen uitgaan van kwade trouw is een aanval op de persoon.",
  elige: "Kies het thema van deze partij:",
  grupos: "Thema’s", gDia: "Van elke dag", gSocrates: "Socrates", gAgustin: "Augustinus", gModerna: "Nieuwe Tijd", gContemporanea: "Van Kant tot nu",
  nivel: "Niveau", nEso: "2e jaar ESO", nFil: "Filosofie 1e", nHf: "Geschiedenis van de filosofie",
  proyector: "Projectormodus", salirProy: "Projectormodus verlaten",
  pie: "Niet altijd wint degene die de drogreden doorheeft: soms wint degene die harder slaat met redenen.",
  intervencion: "Interventie", temple: "Kalmte", tu: "Jij", ordenador: "Computer", conviccion: "Overtuiging van het publiek",
  estribos: "🥵 Je bent je zelfbeheersing kwijt — waarmee kom je?",
  respira: "Stoppen en ademen", respiraSub: "je reageert niet in het heetst van de strijd; je herwint je kalmte",
  respiraHead: "Je bent op tijd gestopt.", respiraBody: "Je wint deze keer geen terrein, maar je herwint je kalmte. Soms is het slimst om niet in het heetst van de strijd te reageren.",
  provoca: "💢 Hij provoceert je — reageer", turno: "Jouw beurt — hoe reageer je?",
  aHot: "Aangeven dat het een drogreden is (geen argument)", aHotSub: "je zegt dat dat niet op het onderwerp ingaat",
  a: "De drogreden benoemen en hem dwingen die te verdedigen", aSub: "je noemt hem; als het de kern van zijn standpunt is, richt je veel schade aan",
  b: "Tegenargumenteren met een eigen reden", bSub: "je laat zijn zet voorbijgaan en slaat met je eigen argument",
  queFal: "🎯 Welke drogreden is het? Noem hem om hem te ontmantelen", volver: "‹ terug",
  eligeContra: "⚔️ Kies je tegenargument", fuerzaAp: "schijnkracht",
  noArg: "Dat is geen argument: het is {e}. Reageer op het onderwerp.",
  paras: "Je stopt hem.", parasBody: "Je hebt {e} aangewezen in plaats van toe te happen. Het publiek merkt het en geeft je gelijk. Toch verlies je een punt kalmte: hij heeft een gevoelige snaar geraakt.",
  notaFibra: "En omdat het bovendien een gebrek aan respect is, verlies je een punt kalmte, ook al heb je hem door.",
  esoEs: "Dat is {f}.", esoEsDuda: "Dat is {f}…", esoEsQ: "Dat is {f}: {q}",
  noTrampa: "Daar zat geen drogreden in.", noTrampaBody: "Het was een legitiem argument, en je hebt het beschuldigd van “{f}”. Drogredenen aanwijzen waar die niet zijn lijkt alsof je het onderwerp ontwijkt, en het publiek koelt tegenover jou af.",
  eje: "Het was de kern van zijn hele standpunt: het ontmantelen was vernietigend.", menor: "Het was een kleine drogreden, maar hé, het telt.",
  dos: "Deze kaart verbergt twee drogredenen tegelijk ({todas}): elk van beide is goed.", y: "en",
  cazada: "Gevangen en benoemd!", cazadaBody: "Het was <b>{f}</b> <span class='due-tec'>({tec})</span> en je dwingt hem die te verdedigen.",
  faltaNoEsa: "Je zag het gebrek aan respect, maar dat was niet die drogreden.", faltaNoEsaBody: "Het was <b>{real}</b> <span class='due-tec'>({tec})</span>, niet “{f}”.",
  noEsa: "Je zag de drogreden, maar dat was het niet.", noEsaBody: "Er was wel een drogreden, maar niet “{f}”: het was <b>{real}</b> <span class='due-tec'>({tec})</span>. Hem met een andere naam beschuldigen kost punten: het publiek ziet dat je niet goed weet wat er mis is.",
  sabes: "★ Hoe weet je dat?", sabesSub: "vraagt om bewijs; werkt ook als je de naam van de drogreden niet kent",
  gana: "★ Wat wint hij?", ganaSub: "zoekt naar een verborgen belang; zonder aanwijzingen kost het je punten", usado: "al gebruikt",
  sabesYo: "Hoe weet je dat? Welk bewijs heb je?",
  noAfirm: "Dat was geen bewering.", noAfirmBody: "Hij was je aan het provoceren; hem vragen hoe hij dat weet stopt hem niet, en de provocatie heeft een gevoelige snaar geraakt.",
  siSabia: "Ja, dat wist hij.", siSabiaBody: "Hij legt zijn redenen uit en het publiek luistert: het was een legitiem argument. Om bewijs vragen is prima, maar hier heb je je joker verspild.",
  sinPruebas: "Hij had geen bewijs.", sinPruebasBody: "Je vraagt hoe hij dat weet en hij kan niets laten zien: zijn “{f}” blijft zonder ondersteuning. Als je hem ook nog benoemt, scoor je meer.",
  noPruebas: "Zijn drogreden ging niet over bewijs.", noPruebasBody: "Het was “{f}”: dat los je niet op door om bewijs te vragen.",
  ganaYo: "En wat win jij ermee als ik dat geloof?",
  interes: "Hij had een belang!", interesBody: "Je vraagt wat degene die het zegt ermee wint en het komt aan het licht: {i} Het bewijst niet dat hij liegt, maar het publiek vertrouwt hem niet meer hetzelfde.",
  sinIndicios: "Je beschuldigt hem zonder aanwijzingen.", sinIndiciosBody: "Niets wijst erop dat hij hier iets mee wint. Aan belangen denken hoort bij kritisch denken, maar zonder aanwijzingen kwade trouw veronderstellen is een aanval op de persoon.",
  tramposo: "Je eigen zet was oneerlijk.", tramposoBody: "Je hebt teruggeslagen met <b>{f}</b> <span class='due-tec'>({tec})</span>, en de computer betrapt je. Het publiek rekent het je aan.",
  pesaba: "Zijn argument woog zwaarder.", pesabaBody: "Jouw reden (kracht {n}) was zwakker dan wat hij had gezegd.",
  pesabaEst: "Zijn provocatie negeren is prima, maar er was een steviger antwoord nodig.", pesabaArg: "Er viel geen truc aan te wijzen: er was een sterker argument nodig.",
  buen: "Goed tegenargument.", tablas: "Gelijkspel in deze beurt.", respondido: "Je hebt geantwoord met een reden van kracht {n}.",
  elegante: "En je hebt zijn provocatie genegeerd: elegant.", tocaba: "Zijn zet bevatte geen truc; hier moest je argumenteren.",
  masFuerte: "Je hebt harder teruggeslagen dan zijn truc.", masFuerteBody: "Je liet zijn <b>{f}</b> (een kleine truc) passeren en bracht een krachtig tegenargument in. Soms is het beter niet te blijven hangen in corrigeren: het publiek onthoudt jouw reden.",
  enPie: "Zijn truc bleef overeind.", enPieBody: "Zijn <b>{f}</b> was de kern van zijn standpunt en je hebt die laten passeren; je tegenargument was daarvoor niet toereikend. Hier had je die <b>moeten aanwijzen</b>.",
  papeles: "Je verloor je zelfbeheersing.", papelesBody: "Uit het veld geslagen kwam er alleen {r} uit. Het publiek kiest de kant van de computer. Daarom is het eerste: niet happen.",
  desmonta: "Om die te weerleggen:", schop: "Schopenhauer nam die op als <b>{s}</b> in “De kunst van het gelijk krijgen”.",
  veredicto: "Bekijk het oordeel", seguir: "Debat voortzetten",
  fin: "Einde van het debat", delPublico: "{n}% van het publiek",
  gano: "Je hebt het publiek overtuigd", perdio: "Het publiek is met de computer meegegaan", empate: "Gelijkopgaand debat, zonder duidelijke winnaar",
  ganoMsg: "Je wist wanneer je een truc moest aanwijzen en wanneer je hard moest terugslaan met een reden, zonder je kalmte te verliezen. Dat is goed discussiëren.",
  perdioMsg: "Ze hebben je trucs aangesmeerd, of je hebt beurten verspild aan futiliteiten terwijl het grote punt onbeantwoord bleef, of je raakte van slag. Kijk naar de meter en probeer een andere aanpak.",
  empateMsg: "Het was gelijkopgaand. Verfijn wanneer je de drogreden aanwijst en wanneer je terugslaat, en je kantelt de balans in jouw voordeel.",
  otraVez: "Opnieuw debatteren (dit onderwerp)", otroTema: "Ander onderwerp kiezen",
  descargar: "⬇ Download het gesprek", dTitulo: "Duel van redenen · gesprek", dFecha: "Datum: {d}", dTema: "Onderwerp: {t}",
  dJugada: "→ {h}", dMedidor: "Overtuiging van het publiek na de zet: {n}%", dResultado: "Resultaat: {n}% van het publiek", dSinNombre: "Zonder naam of persoonlijke gegevens."
};
const dueT = (k, v) => String(DUE_TXT[k] == null ? k : DUE_TXT[k]).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const DUE_FIBRA = new Set(["persona"]);   // además de trampa, falta de respeto: cuesta temple aunque la caces
const DUE_SIN_PRUEBAS = new Set(["famoso", "todos", "pocos", "causa", "siempre"]);   // fingen tener apoyo: se caen al pedir pruebas
const DUE_MAXT = 6, DUE_NIVELES = ["eso", "fil", "hf"];
let DS = null, dueSeed = 1, dueNivel = null;
/* (12-10) selector por grupos para no mostrar todos los temas de golpe: cada tema de duelo.js trae su «grupo» */
const DUE_GRUPOS = [["dia", "gDia"], ["socrates", "gSocrates"], ["agustin", "gAgustin"], ["moderna", "gModerna"], ["contemporanea", "gContemporanea"]];
let dueGrupo = null;
function dueGruposVis(){ const ts = dueTemas(); return DUE_GRUPOS.filter(([g]) => ts.some(({ t }) => (t.grupo || "dia") === g)); }
/* #duelo/<nivel>/<tema> sin codificar la barra (setDeepHash la codificaría) */
function dueHash(){ const h = "#duelo" + [].slice.call(arguments).filter(Boolean).map(x => "/" + encodeURIComponent(x)).join(""); if (location.hash !== h){ try { history.replaceState(null, "", h); } catch (e){} } }
function dueRnd(){ dueSeed = (dueSeed * 1103515245 + 12345) & 0x7fffffff; return dueSeed / 0x7fffffff; }
function dueShuffle(a){ for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(dueRnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function dueBox(){ return document.getElementById("duelobox"); }
function dueClamp(v){ return Math.max(0, Math.min(100, v)); }
/* nivel de esta web: la ficha de materia que existe (#eso/#fil/#hf); en la web local (varias), el elegido en el filtro */
function dueNivelWeb(){
  const hay = ["ipc", "fil", "hf"].filter(id => document.getElementById(id) && typeof SUBJECTS !== "undefined" && SUBJECTS[id]);
  if (hay.length === 1) return hay[0] === "ipc" ? "eso" : hay[0];
  return null;
}
function dueTemas(){ const L = dueNivel || dueNivelWeb(); return DUELO_TEMAS.map((t, i) => ({ t, i })).filter(({ t }) => !L || (t.nivel || []).includes(L)); }

function dueFresh(ti){
  return { ti, meter: 50, temple: 3, turno: 0, thread: [], move: null, hand: null, fase: "turn",
    cola: dueShuffle(DUELO_TEMAS[ti].opp.map((_, i) => i)), comodines: { sabes: 1, gana: 1 } };
}
function dueRender(){ if (!DS) return dueIntro(); if (DS.fase === "end") return dueFin(); dueJuego(); }

function dueIntro(){
  const box = dueBox(); if (!box) return;
  const multi = !dueNivelWeb();
  box.innerHTML = '<div class="due-intro due-fade"><div class="due-center"><div class="due-eyebrow">' + dueT("eyebrow") + '</div><h2 class="due-h1">' + dueT("h1") + '</h2><p class="due-lede">' + dueT("lede") + '</p></div>' +
    '<div class="due-rules">' + [["A", "rA"], ["B", "rB"], ["♦", "rT"], ["★", "rC"]].map(([n, k]) => '<div class="due-rule"><span class="due-n">' + n + '</span><p>' + dueT(k) + '</p></div>').join("") + '</div>' +
    (multi ? '<div class="due-niveles" role="group" aria-label="' + dueT("nivel") + '">' + [["", "todos"]].concat([["eso", "nEso"], ["fil", "nFil"], ["hf", "nHf"]]).map(([v, k]) =>
      '<button type="button" class="fbtn" data-due-nivel="' + v + '" aria-pressed="' + ((dueNivel || "") === v) + '">' + (k === "todos" ? "—" : dueT(k)) + '</button>').join("") + '</div>' : '') +
    (function(){
      const gs = dueGruposVis(); if (!gs.some(([g]) => g === dueGrupo)) dueGrupo = gs.length ? gs[0][0] : null;
      return gs.length > 1 ? '<div class="fgroup due-grupos" role="group" aria-label="' + dueT("grupos") + '">' + gs.map(([g, k]) =>
        '<button type="button" class="fbtn" data-due-grupo="' + g + '" aria-pressed="' + (dueGrupo === g) + '">' + dueT(k) + ' <span class="due-ng">' + dueTemas().filter(({ t }) => (t.grupo || "dia") === g).length + '</span></button>').join("") + '</div>' : '';
    })() +
    '<div class="due-center due-elige">' + dueT("elige") + '</div><div class="due-pick">' +
    dueTemas().filter(({ t }) => !dueGrupo || (t.grupo || "dia") === dueGrupo).map(({ t, i }) => '<button type="button" class="due-btn" data-due-ti="' + i + '">' + t.claim + '<span class="due-sides">' + t.tuLado + '</span></button>').join("") + '</div>' +
    '<p class="due-pie">' + dueT("pie") + '</p></div>';
}
function dueEmpezar(ti){ dueSeed = (Date.now() & 0x7fffffff) || 1; DS = dueFresh(ti); dueTurno(true); }
function duePush(side, text){ DS.thread.push({ side, text }); }

function dueTurno(first){
  if (DS.turno >= DUE_MAXT){ DS.fase = "end"; return dueRender(); }
  const T = DUELO_TEMAS[DS.ti];
  if (!first && dueRnd() < 0.32){
    const pool = (T.estrat && T.estrat.length) ? T.estrat : Object.keys(DUELO_ESTRAT).map(k => DUELO_ESTRAT[k]);
    const e = pool[Math.floor(dueRnd() * pool.length)];
    DS.move = { kind: "estrat", e, t: e.t };
  } else {
    if (!DS.cola.length) DS.cola = dueShuffle(T.opp.map((_, i) => i));
    const m = T.opp[DS.cola.shift()];
    DS.move = { kind: "arg", t: m.t, f: m.f, fAlt: m.fAlt, peso: m.peso || 0, fuerza: m.fuerza, interes: m.interes };
  }
  duePush("cpu", DS.move.t);
  DS.fase = "turn"; dueRender();
}
function dueHud(){
  const T = DUELO_TEMAS[DS.ti], you = DS.meter, cpu = 100 - DS.meter, low = DS.temple <= 1;
  return '<div class="due-hud"><div class="due-turnlbl">' + dueT("intervencion") + ' <b>' + Math.min(DS.turno + 1, DUE_MAXT) + '</b> / ' + DUE_MAXT + '</div>' +
    '<div class="due-temple' + (low ? " low" : "") + '"><div class="due-who">' + dueT("temple") + '</div><div class="due-dots">' + "♦".repeat(DS.temple) + "♢".repeat(3 - DS.temple) + '</div></div></div>' +
    '<div class="due-meter-wrap"><div class="due-meter-top"><span class="due-you">' + dueT("tu") + ' ' + you + '%</span><span>' + dueT("conviccion") + '</span><span class="due-cpu">' + dueT("ordenador") + ' ' + cpu + '%</span></div>' +
    '<div class="due-meter"><div class="due-fill" style="width:' + you + '%"></div><div class="due-mid"></div></div></div>' +
    '<div class="due-topic"><b>' + T.claim + '</b> · <span class="due-you-side">' + T.tuLado + '</span></div>';
}
function dueHilo(){
  return '<div class="due-thread" id="duethread">' + DS.thread.map((m, i) => '<div class="due-bubble ' + m.side + (i === DS.thread.length - 1 && m.side === "cpu" ? " latest" : "") + '"><div class="due-nm">' +
    (m.side === "cpu" ? dueT("ordenador") : dueT("tu")) + '</div>' + m.text + '</div>').join("") + '</div>';
}
function dueScroll(){ const t = document.getElementById("duethread"); if (t) t.scrollTop = t.scrollHeight; }
function dueBtn(attr, cls, txt, sub, dis){ return '<button type="button" class="due-btn due-choice ' + (cls || "") + '" ' + attr + (dis ? " disabled" : "") + '>' + txt + (sub ? '<small>' + sub + '</small>' : '') + '</button>'; }

function dueJuego(){
  const box = dueBox(); if (!box) return;
  let h = dueHud() + dueHilo();
  if (DS.fase === "turn"){
    if (DS.temple <= 0){
      h += '<div class="due-phase hot">' + dueT("estribos") + '</div><div class="due-choices due-fade">' + dueBtn('data-due="respira"', "due-primary", dueT("respira"), dueT("respiraSub")) +
        DUELO_REACCIONES.map((r, i) => dueBtn('data-due-rx="' + i + '"', "due-a", r.lbl, r.t)).join("") + '</div>';
    } else {
      const hot = DS.move.kind === "estrat", c = DS.comodines;
      h += '<div class="due-phase' + (hot ? " hot" : "") + '">' + dueT(hot ? "provoca" : "turno") + '</div><div class="due-choices due-fade">' +
        dueBtn('data-due="a"', "due-a", dueT(hot ? "aHot" : "a"), dueT(hot ? "aHotSub" : "aSub")) + dueBtn('data-due="b"', "due-b", dueT("b"), dueT("bSub")) + '</div>' +
        '<div class="due-choices due-comodines due-fade">' + dueBtn('data-due-com="sabes"', "", dueT("sabes"), c.sabes ? dueT("sabesSub") : dueT("usado"), !c.sabes) +
        (DUELO_TEMAS[DS.ti].opp.some(o => o.interes) ? dueBtn('data-due-com="gana"', "", dueT("gana"), c.gana ? dueT("ganaSub") : dueT("usado"), !c.gana) : "") + '</div>';
    }
  } else if (DS.fase === "name"){
    h += '<div class="due-phase">' + dueT("queFal") + '</div><div class="due-choices due-grid-fal due-fade">' +
      DUELO_ORDEN_FAL.map(k => dueBtn('data-due-fal="' + k + '"', "", DUELO_FALACIAS[k].nombre, DUELO_FALACIAS[k].tec)).join("") + '</div><button type="button" class="due-back" data-due="back">' + dueT("volver") + '</button>';
  } else if (DS.fase === "counter"){
    h += '<div class="due-phase">' + dueT("eligeContra") + '</div><div class="due-choices due-fade">' + DS.hand.map((c, i) => {
      const n = c.f ? 1 : c.str;
      return dueBtn('data-due-c="' + i + '"', "", '<span class="due-carta">' + c.t + '</span>', '<span class="due-pips">' + "●".repeat(n) + "○".repeat(3 - n) + '</span> ' + dueT("fuerzaAp"));
    }).join("") + '</div><button type="button" class="due-back" data-due="back">' + dueT("volver") + '</button>';
  }
  box.innerHTML = h; dueScroll();
}

function dueA(){
  if (DS.move.kind === "estrat"){
    const e = DS.move.e; DS.temple = Math.max(0, DS.temple - 1);
    duePush("you", dueT("noArg", { e: e.nombre }));
    const d = 8; DS.meter = dueClamp(DS.meter + d);
    return dueFB("win", dueT("paras"), dueT("parasBody", { e: e.nombre }), { q: e.q, schop: e.schop }, d);
  }
  DS.fase = "name"; dueRender();
}
function dueNombrar(k){
  const m = DS.move, fa = DUELO_FALACIAS[k];
  const fibra = m.f && DUE_FIBRA.has(m.f); if (fibra) DS.temple = Math.max(0, DS.temple - 1);
  const nota = fibra ? " " + dueT("notaFibra") : "";
  if (m.f === null){
    duePush("you", dueT("esoEs", { f: fa.nombre }));
    const d = -10; DS.meter = dueClamp(DS.meter + d);
    return dueFB("lose", dueT("noTrampa"), dueT("noTrampaBody", { f: fa.nombre }), {}, d);
  }
  const real = DUELO_FALACIAS[m.f], alts = m.fAlt || [];
  if (k === m.f || alts.includes(k)){
    duePush("you", dueT("esoEsQ", { f: fa.nombre, q: fa.q }));
    const d = 6 + m.peso * 3; DS.meter = dueClamp(DS.meter + d);
    let extra = m.peso >= 3 ? " " + dueT("eje") : (m.peso === 1 ? " " + dueT("menor") : "");
    if (alts.length) extra = " " + dueT("dos", { todas: [m.f].concat(alts).map(x => DUELO_FALACIAS[x].nombre).join(" " + dueT("en") + " ") }) + extra;
    return dueFB("win", dueT("cazada"), dueT("cazadaBody", { f: fa.nombre, tec: fa.tec }) + extra + nota, { q: fa.q }, d);
  }
  duePush("you", dueT("esoEsDuda", { f: fa.nombre }));
  const d = -3; DS.meter = dueClamp(DS.meter + d);
  if (fibra) return dueFB("mid", dueT("faltaNoEsa"), dueT("faltaNoEsaBody", { real: real.nombre, tec: real.tec, f: fa.nombre }) + nota, { q: real.q }, d);
  dueFB("mid", dueT("noEsa"), dueT("noEsaBody", { f: fa.nombre, real: real.nombre, tec: real.tec }), { q: real.q }, d);
}
function dueComodin(k){
  const m = DS.move; DS.comodines[k] = 0;
  if (k === "sabes"){
    duePush("you", dueT("sabesYo"));
    if (m.kind === "estrat"){ DS.temple = Math.max(0, DS.temple - 1); return dueFB("mid", dueT("noAfirm"), dueT("noAfirmBody"), {}, 0); }
    if (m.f === null){ const d = -3; DS.meter = dueClamp(DS.meter + d); return dueFB("lose", dueT("siSabia"), dueT("siSabiaBody"), {}, d); }
    const fa = DUELO_FALACIAS[m.f];
    if (DUE_FIBRA.has(m.f)) DS.temple = Math.max(0, DS.temple - 1);
    if (DUE_SIN_PRUEBAS.has(m.f)){ const d = 8; DS.meter = dueClamp(DS.meter + d); return dueFB("win", dueT("sinPruebas"), dueT("sinPruebasBody", { f: fa.nombre }), { q: fa.q }, d); }
    return dueFB("mid", dueT("noPruebas"), dueT("noPruebasBody", { f: fa.nombre }), { q: fa.q }, 0);
  }
  duePush("you", dueT("ganaYo"));
  if (m.kind === "arg" && m.interes){ const d = 12; DS.meter = dueClamp(DS.meter + d); return dueFB("win", dueT("interes"), dueT("interesBody", { i: m.interes }), {}, d); }
  if (m.kind === "estrat") DS.temple = Math.max(0, DS.temple - 1);
  const d = -6; DS.meter = dueClamp(DS.meter + d); dueFB("lose", dueT("sinIndicios"), dueT("sinIndiciosBody"), {}, d);
}
function dueB(){
  const pool = dueShuffle(DUELO_TEMAS[DS.ti].counters.slice());
  const sol = pool.filter(c => !c.f), tra = pool.filter(c => c.f);
  let hand = dueShuffle([sol[0], sol[1] || sol[0], (dueRnd() < 0.6 && tra[0]) ? tra[0] : (sol[2] || sol[0])]).slice(0, 3);
  hand = [...new Set(hand)];
  let pi = 0; while (hand.length < 3 && pi < pool.length){ if (!hand.includes(pool[pi])) hand.push(pool[pi]); pi++; }
  DS.hand = hand; DS.fase = "counter"; dueRender();
}
function dueContra(i){
  const c = DS.hand[i], m = DS.move;
  if (m.kind === "estrat" || (m.f && DUE_FIBRA.has(m.f))) DS.temple = Math.max(0, DS.temple - 1);
  duePush("you", c.t);
  if (c.f){ const fa = DUELO_FALACIAS[c.f], d = -10; DS.meter = dueClamp(DS.meter + d); return dueFB("lose", dueT("tramposo"), dueT("tramposoBody", { f: fa.nombre, tec: fa.tec }), { q: fa.q }, d); }
  const sin = (m.kind === "arg" && m.f) ? m.peso : 0;
  const rival = m.kind === "arg" ? (m.fuerza || (m.f ? 1 : 2)) : 2;   // (08-10) el ordenador también tiene fuerza
  const d = (c.str - rival) * 5 - sin * 4;
  DS.meter = dueClamp(DS.meter + d);
  if (!sin){
    if (d < 0) return dueFB("lose", dueT("pesaba"), dueT("pesabaBody", { n: c.str }) + " " + dueT(m.kind === "estrat" ? "pesabaEst" : "pesabaArg"), {}, d);
    return dueFB(d > 0 ? "win" : "mid", dueT(d > 0 ? "buen" : "tablas"), dueT("respondido", { n: c.str }) + " " + dueT(m.kind === "estrat" ? "elegante" : "tocaba"), {}, d);
  }
  const fa = DUELO_FALACIAS[m.f];
  if (d > 0) return dueFB("win", dueT("masFuerte"), dueT("masFuerteBody", { f: fa.nombre }), {}, d);
  dueFB("lose", dueT("enPie"), dueT("enPieBody", { f: fa.nombre }), { q: fa.q }, d);
}
function dueReaccion(i){
  const r = DUELO_REACCIONES[i];
  duePush("you", r.t);
  const d = -12; DS.meter = dueClamp(DS.meter + d); DS.temple = 1;
  dueFB("lose", dueT("papeles"), dueT("papelesBody", { r: r.lbl.toLocaleLowerCase() }), {}, d);
}
function dueFB(cls, head, body, extra, delta, cont){
  extra = extra || {};
  const last = DS.turno + 1 >= DUE_MAXT;
  DS.cont = cont || null;
  DS.log = DS.log || []; DS.log.push({ i: DS.thread.length, head: head, body: body, meter: DS.meter });
  dueBox().innerHTML = dueHud() + dueHilo() + '<div class="due-fb ' + cls + ' due-fade"><div class="due-head">' + (cls === "win" ? "✓" : cls === "lose" ? "✕" : "◆") + ' ' + head + '</div>' +
    '<div class="due-body">' + body + '</div>' +
    (typeof delta === "number" && delta !== 0 ? '<div class="due-body">' + dueT("conviccion") + ': <span class="due-delta ' + (delta > 0 ? "pos" : "neg") + '">' + (delta > 0 ? "+" : "") + delta + '</span> → ' + DS.meter + '%</div>' : "") +
    (extra.q ? '<div class="due-desmonta">' + dueT("desmonta") + ' <b>' + extra.q + '</b></div>' : "") +
    (extra.schop ? '<div class="due-schop">' + dueT("schop", { s: extra.schop }) + '</div>' : "") +
    '</div><div class="due-choices due-sigue"><button type="button" class="due-btn due-primary" data-due="cont">' + dueT(last ? "veredicto" : "seguir") + '</button></div>' +
    '<button type="button" class="due-back due-descarga" data-due="descargar">' + dueT("descargar") + '</button>';
  dueScroll();
}
function dueFin(){
  const you = DS.meter, win = you > 55, lose = you < 45, cls = win ? "win" : lose ? "lose" : "tie";
  dueBox().innerHTML = dueHud() + '<div class="due-intro due-center due-fade"><div class="due-eyebrow">' + dueT("fin") + '</div><div class="due-verdict ' + cls + '">' + dueT("delPublico", { n: you }) + '</div>' +
    '<h2>' + dueT(win ? "gano" : lose ? "perdio" : "empate") + '</h2><p class="due-lede">' + dueT(win ? "ganoMsg" : lose ? "perdioMsg" : "empateMsg") + '</p>' +
    '<div class="due-pick due-fin"><button type="button" class="due-btn due-primary" data-due="again">' + dueT("otraVez") + '</button><button type="button" class="due-btn" data-due="home">' + dueT("otroTema") + '</button></div>' +
    '<button type="button" class="due-back due-descarga" data-due="descargar">' + dueT("descargar") + '</button></div>';
}

/* ---- «Descargar la conversación»: .txt con la partida entera (sin nombre ni datos personales) ---- */
function dueTexto(h){ const d = document.createElement("div"); d.innerHTML = String(h).replace(/<br\s*\/?>/g, "\n"); return (d.textContent || "").replace(/[ \t]+/g, " ").trim(); }
function dueDescargar(){
  if (!DS) return;
  const T = DUELO_TEMAS[DS.ti], hoy = new Date(), f = hoy.toISOString().slice(0, 10), out = [];
  out.push(dueT("dTitulo"), dueT("dFecha", { d: hoy.toLocaleString() }), dueT("dTema", { t: dueTexto(T.claim) }), dueTexto(T.cpuLado), dueTexto(T.tuLado), dueT("dSinNombre"), "");
  const log = DS.log || [];
  DS.thread.forEach((m, i) => {
    out.push((m.side === "cpu" ? dueT("ordenador") : dueT("tu")) + ": " + dueTexto(m.text));
    log.filter(x => x.i === i + 1).forEach(x => { out.push("   " + dueT("dJugada", { h: dueTexto(x.head) }) + " " + dueTexto(x.body), "   " + dueT("dMedidor", { n: x.meter })); });
  });
  out.push("", dueT("dResultado", { n: DS.meter }));
  if (DS.fase === "end") out.push(dueTexto(dueT(DS.meter > 55 ? "gano" : DS.meter < 45 ? "perdio" : "empate")));
  const blob = new Blob(["\ufeff" + out.join("\r\n") + "\r\n"], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "duelo-" + (T.id || "partida") + "-" + f + ".txt";
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* ---- modo proyector: pantalla completa y letra grande (la clase lo ve desde el fondo) ---- */
function dueProyector(){
  const sec = document.getElementById("duelo"); if (!sec) return;
  const on = !sec.classList.contains("due-proy");
  sec.classList.toggle("due-proy", on);
  try { if (on && sec.requestFullscreen) sec.requestFullscreen(); else if (!on && document.fullscreenElement) document.exitFullscreen(); } catch (e){}
  const b = document.getElementById("dueproy"); if (b) b.textContent = dueT(on ? "salirProy" : "proyector");
}
document.addEventListener("fullscreenchange", () => {
  const sec = document.getElementById("duelo");
  if (sec && !document.fullscreenElement && sec.classList.contains("due-proy")){ sec.classList.remove("due-proy"); const b = document.getElementById("dueproy"); if (b) b.textContent = dueT("proyector"); }
});

document.addEventListener("click", e => {
  const t = e.target; if (!t.closest || !t.closest("#duelo")) return;
  if (t.closest("#dueproy")) return dueProyector();
  const nv = t.closest("[data-due-nivel]"); if (nv){ dueNivel = nv.dataset.dueNivel || null; return dueIntro(); }
  const gr = t.closest("[data-due-grupo]"); if (gr){ dueGrupo = gr.dataset.dueGrupo; return dueIntro(); }
  const ti = t.closest("[data-due-ti]"); if (ti){ dueEmpezar(+ti.dataset.dueTi); dueHash(dueNivel || dueNivelWeb(), DUELO_TEMAS[+ti.dataset.dueTi].id); return; }
  const fal = t.closest("[data-due-fal]"); if (fal) return dueNombrar(fal.dataset.dueFal);
  const c = t.closest("[data-due-c]"); if (c) return dueContra(+c.dataset.dueC);
  const com = t.closest("[data-due-com]"); if (com && !com.disabled) return dueComodin(com.dataset.dueCom);
  const rx = t.closest("[data-due-rx]"); if (rx) return dueReaccion(+rx.dataset.dueRx);
  const a = t.closest("[data-due]"); if (!a) return;
  const k = a.dataset.due;
  if (k === "a") return dueA();
  if (k === "b") return dueB();
  if (k === "back"){ DS.fase = "turn"; return dueRender(); }
  if (k === "respira"){ DS.temple = 1; return dueFB("mid", dueT("respiraHead"), dueT("respiraBody"), {}, 0, () => { DS.turno++; dueTurno(false); }); }
  if (k === "cont"){ const f = DS.cont; DS.cont = null; if (f) return f(); DS.turno++; return dueTurno(false); }
  if (k === "descargar") return dueDescargar();
  if (k === "again"){ return dueEmpezar(DS.ti); }
  if (k === "home"){ dueGrupo = DUELO_TEMAS[DS.ti].grupo || dueGrupo; DS = null; dueHash(dueNivel); return dueIntro(); }
});

/* enlace profundo: #duelo/<nivel>[/<id del tema>] (los temas «pol-…» salen de Polémicas) */
function loadDuelo(arg){
  if (typeof DUELO_TEMAS === "undefined") return;
  const [nv, id] = String(arg || "").split("/");
  if (DUE_NIVELES.includes(nv) && !dueNivelWeb()) dueNivel = nv;
  const i = id ? DUELO_TEMAS.findIndex(t => t.id === id) : -1;
  if (i >= 0){ dueGrupo = DUELO_TEMAS[i].grupo || null; return dueEmpezar(i); }
  DS = null; dueIntro();
}
window.loadDuelo = loadDuelo;
if (dueBox() && typeof DUELO_TEMAS !== "undefined") dueIntro();
