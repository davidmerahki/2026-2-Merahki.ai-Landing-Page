// Generado por integrar_sitio.py desde el prototipo del vault. No editar a mano.
// Interactividad del home para universidades: fases, roles, comparación, demo de POK, FAQ, carrusel y video.
window.initHomeUniversidades = function (root) {
  var observers = []; function track(o) { observers.push(o); return o; }

  var body = root;
  // rol
  var ROLE_KEY = 'merahki-home-role';
  function setRole(r){
    body.setAttribute('data-role', r);
    document.querySelectorAll('.chips .chip[data-role]').forEach(function(c){ c.setAttribute('aria-pressed', String(c.getAttribute('data-role') === r)); });
    try { localStorage.setItem(ROLE_KEY, r); } catch(e) {}
  }
  var saved = null; try { saved = localStorage.getItem(ROLE_KEY); } catch(e) {}
  setRole(['rectoria','vicerrectoria','continua','empresa'].indexOf(saved) >= 0 ? saved : 'rectoria');
  document.querySelectorAll('.chips .chip[data-role]').forEach(function(c){ c.addEventListener('click', function(){ setRole(c.getAttribute('data-role')); }); });

  // recorrido
  var phases = Array.prototype.slice.call(document.querySelectorAll('.phase'));
  var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
  var ringNodes = Array.prototype.slice.call(document.querySelectorAll('.rn'));
  var cur = 0;
  function show(i){
    cur = (i + phases.length) % phases.length;
    phases.forEach(function(p, k){ p.hidden = k !== cur; });
    steps.forEach(function(s, k){ s.setAttribute('aria-current', k === cur ? 'step' : 'false'); s.classList.toggle('done', k < cur); });
    ringNodes.forEach(function(n, k){ n.classList.toggle('on', k === cur); });
    document.getElementById('prog').style.width = ((cur + 1) / phases.length * 100) + '%';
    document.getElementById('pos').textContent = 'Fase ' + (cur + 1) + ' de ' + phases.length;
    document.getElementById('next').textContent = cur === phases.length - 1 ? 'Volver a diseño →' : 'Siguiente →';
  }
  steps.forEach(function(s){ s.addEventListener('click', function(){ show(+s.getAttribute('data-go')); }); });
  document.getElementById('prev').addEventListener('click', function(){ show(cur - 1); });
  document.getElementById('next').addEventListener('click', function(){ show(cur === phases.length - 1 ? 1 : cur + 1); });
  document.getElementById('stage').addEventListener('keydown', function(e){
    if (e.target.closest('.shot-tabs')) return;
    if (e.key === 'ArrowRight') { show(cur + 1); } else if (e.key === 'ArrowLeft') { show(cur - 1); }
  });
  function goTo(i){ show(i); document.getElementById('recorrido').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); }
  ringNodes.forEach(function(n){
    n.addEventListener('click', function(){ goTo(+n.getAttribute('data-go')); });
    n.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(+n.getAttribute('data-go')); } });
  });
  document.querySelectorAll('.cap[data-go]').forEach(function(c){ c.addEventListener('click', function(e){ e.preventDefault(); goTo(+c.getAttribute('data-go')); }); });
  show(0);
  var allBtn = document.getElementById('all'), stage = document.getElementById('stage');
  allBtn.addEventListener('click', function(){
    var on = !stage.classList.contains('all'); stage.classList.toggle('all', on);
    allBtn.setAttribute('aria-pressed', String(on)); allBtn.textContent = on ? 'Ver una fase a la vez' : 'Ver las siete fases juntas';
    if (!on) show(cur);
  });
  function exitAll(){ if (stage.classList.contains('all')) { stage.classList.remove('all'); allBtn.setAttribute('aria-pressed','false'); allBtn.textContent = 'Ver las siete fases juntas'; } }
  steps.forEach(function(s){ s.addEventListener('click', exitAll); });
  document.querySelectorAll('a[data-go]').forEach(function(a){ a.addEventListener('click', function(e){ e.preventDefault(); exitAll(); goTo(+a.getAttribute('data-go')); }); });
  var faqBtn = document.getElementById('faq-all');
  faqBtn.addEventListener('click', function(){
    var on = faqBtn.getAttribute('aria-pressed') !== 'true';
    document.querySelectorAll('.faq details').forEach(function(d){ d.open = on; });
    faqBtn.setAttribute('aria-pressed', String(on)); faqBtn.textContent = on ? 'Cerrar todas las respuestas' : 'Abrir todas las respuestas';
  });

  // pestañas de pantallas
  document.querySelectorAll('[data-shots]').forEach(function(box){
    var tabs = box.querySelectorAll('.shot-tab'), imgs = box.querySelectorAll('.shot');
    tabs.forEach(function(t){ t.addEventListener('click', function(){
      var k = +t.getAttribute('data-shot');
      tabs.forEach(function(x, j){ x.setAttribute('aria-selected', String(j === k)); });
      imgs.forEach(function(im, j){ im.hidden = j !== k; });
    }); });
  });

  // visor de pantalla completa
  var zoom = document.getElementById('zoom'), zimg = document.getElementById('zoom-img');
  document.querySelectorAll('.zoom-open').forEach(function(btn){ btn.addEventListener('click', function(){
    var box = btn.closest('[data-shots]'), cur = [...box.querySelectorAll('.shot')].find(function(i){ return !i.hidden; });
    zimg.src = cur.getAttribute('data-full'); zimg.alt = cur.alt;
    if (zoom.showModal) { zoom.showModal(); } else { window.open(zimg.src); }
  }); });
  document.getElementById('zoom-close').addEventListener('click', function(){ zoom.close(); });
  zoom.addEventListener('click', function(e){ if (e.target === zoom) zoom.close(); });
  // carrusel: botón de pausa (WCAG 2.2.2)
  var mq = document.getElementById('marquee'), mqb = document.getElementById('mq-pause');
  mqb.addEventListener('click', function(){ var on = !mq.classList.contains('paused'); mq.classList.toggle('paused', on); mqb.setAttribute('aria-pressed', String(on)); mqb.textContent = on ? 'Mover logos' : 'Pausar logos'; });

  // filtro de casos
  var fchips = document.querySelectorAll('.filters .chip');
  fchips.forEach(function(c){ c.addEventListener('click', function(){
    var f = c.getAttribute('data-filter');
    fchips.forEach(function(x){ x.setAttribute('aria-pressed', String(x === c)); });
    document.querySelectorAll('#cases .case').forEach(function(k){ k.hidden = !(f === 'todos' || k.getAttribute('data-sector') === f); });
  }); });

  // botón fijo en el celular: aparece cuando el botón del inicio sale de la pantalla y se oculta en el cierre
  var mcta = document.getElementById('mcta'), heroCta = document.getElementById('hero-cta'), close = document.getElementById('contacto');
  if ('IntersectionObserver' in window && mcta && heroCta && close) {
    var heroVis = true, closeVis = false;
    var upd = function(){ mcta.hidden = heroVis || closeVis; };
    track(new IntersectionObserver(function(e){ heroVis = e[0].isIntersecting; upd(); })).observe(heroCta);
    track(new IntersectionObserver(function(e){ closeVis = e[0].isIntersecting; upd(); })).observe(close);
  }

  // prueba: Skills Intelligence con datos de la demo de POK
  var G = null;
  var JOBS = [
    { id:'fin', name:'Analista financiero', skills:['Finanzas','Contabilidad','Análisis de datos','Pensamiento crítico','Comunicación','Toma de decisiones'],
      people:[['Sofía Herrera',[0,0.5,0.5,0,1.5,1.5]],['Martín Quiroga',[1.5,0.5,0.5,0,0.5,1.5]],['Ana Lucía Torres',[1.5,0.5,0,0,1.5,1.5]]] },
    { id:'bi', name:'Analista de BI', skills:['Análisis de datos','SQL','Visualización de datos','IA aplicada','Pensamiento crítico','Comunicación'],
      people:[['Julián Rossi',[1.5,0,0.5,1.5,0.5,0]],['Paula Ibarra',[1.5,0.5,0.5,1.5,0.5,0]]] }
  ];
  var OFFER = [
    { id:'gf', kind:'Diplomado', name:'Diplomado en Gestión Financiera', meta:'5 cursos · 8 meses · híbrido', skills:['Finanzas','Toma de decisiones','Contabilidad'] },
    { id:'dd', kind:'Curso', name:'Decisiones basadas en datos', meta:'4 semanas · virtual', skills:['Toma de decisiones','Análisis de datos'] },
    { id:'ce', kind:'Curso', name:'Comunicación ejecutiva', meta:'4 semanas · presencial', skills:['Comunicación'] },
    { id:'bi', kind:'Diplomado', name:'Diplomado en Inteligencia de Negocios', meta:'4 cursos · 6 meses · virtual', skills:['Análisis de datos','SQL','Visualización de datos'] },
    { id:'ia', kind:'Curso', name:'IA aplicada al análisis de datos', meta:'6 semanas · virtual', skills:['IA aplicada'] }
  ];
  var sel = { gf: true }; var job = 0;
  function covered(skill){ return OFFER.some(function(o){ return sel[o.id] && o.skills.indexOf(skill) >= 0; }); }
  function fmt(v){ return String(v).replace('.', ','); }
  function renderTabs(){
    var box = document.getElementById('dtabs'); box.innerHTML = '';
    JOBS.forEach(function(j, k){
      var b = document.createElement('button'); b.type = 'button'; b.className = 'dtab'; b.setAttribute('role','tab');
      b.setAttribute('aria-selected', String(k === job)); b.textContent = j.name + ' · ' + j.people.length + ' personas';
      b.addEventListener('click', function(){ job = k; renderAll(); }); box.appendChild(b);
    });
  }
  function renderMatrix(){
    var j = JOBS[job], t = document.getElementById('mx');
    var h = '<thead><tr><th scope="col">Persona</th>' + j.skills.map(function(s){ return '<th scope="col">' + s + '</th>'; }).join('') + '</tr></thead><tbody>';
    j.people.forEach(function(p){
      h += '<tr><td class="name">' + p[0] + '<small>' + j.name + '</small></td>' + p[1].map(function(v, i){
        if (v === 0) return '<td class="c0">0</td>';
        var cls = v <= 1 ? 'c1' : 'c2'; if (covered(j.skills[i])) cls += ' cov';
        return '<td class="' + cls + '" title="' + j.skills[i] + ': le faltan ' + fmt(v) + ' niveles">' + fmt(v) + '</td>';
      }).join('') + '</tr>';
    });
    t.innerHTML = h + '</tbody>';
  }
  function gapsIn(o){
    var out = [];
    JOBS.forEach(function(j){ j.skills.forEach(function(s, i){
      if (o.skills.indexOf(s) < 0) return;
      var n = j.people.filter(function(p){ return p[1][i] > 0; }).length; if (n) out.push({skill:s, n:n});
    }); });
    var m = {}; out.forEach(function(x){ m[x.skill] = (m[x.skill] || 0) + x.n; });
    return Object.keys(m).map(function(k){ return {skill:k, n:m[k]}; });
  }
  function renderOffer(){
    var ul = document.getElementById('offer'); ul.innerHTML = '';
    var j = JOBS[job];
    OFFER.filter(function(o){ return o.skills.some(function(s){ var i = j.skills.indexOf(s); return i >= 0 && j.people.some(function(p){ return p[1][i] > 0; }); }); })
      .forEach(function(o){
        var li = document.createElement('li'); li.className = 'off' + (sel[o.id] ? ' on' : '');
        var gs = gapsIn(o).map(function(g){ return '<span>' + g.skill + ' · ' + g.n + (g.n === 1 ? ' persona' : ' personas') + '</span>'; }).join('');
        li.innerHTML = '<div><h4>' + o.name + '</h4><p class="meta">' + o.kind + ' · ' + o.meta + '</p><p class="meta" style="margin-top:8px">Brechas que cierra en el área:</p><div class="closes" style="margin-top:4px">' + gs + '</div></div>';
        var b = document.createElement('button'); b.type = 'button'; b.className = 'add';
        b.textContent = sel[o.id] ? 'En la propuesta ✓' : '+ Agregar a la propuesta';
        b.setAttribute('aria-pressed', String(!!sel[o.id]));
        b.addEventListener('click', function(){ sel[o.id] = !sel[o.id]; renderAll(); });
        li.appendChild(b); ul.appendChild(li);
      });
  }
  function renderSummary(){
    var total = 0, cov = 0, people = {};
    JOBS.forEach(function(j){ j.people.forEach(function(p){ p[1].forEach(function(v, i){
      if (v > 0) { total++; if (covered(j.skills[i])) { cov++; people[p[0]] = 1; } }
    }); }); });
    var np = OFFER.filter(function(o){ return sel[o.id]; }).length;
    document.getElementById('s-prog').textContent = np;
    document.getElementById('s-gap').textContent = cov + ' de ' + total;
    document.getElementById('s-ppl').textContent = Object.keys(people).length;
    var sb = document.getElementById('segbar'); sb.innerHTML = ''; for (var k = 0; k < total; k++) { var it = document.createElement('i'); if (k < cov) it.className = 'on'; sb.appendChild(it); }
    document.getElementById('s-msg').textContent = np === 0 ? 'Agrega programas para ver qué brechas cubre la propuesta.' :
      (cov === total ? 'La propuesta cubre todas las brechas del área.' : 'Quedan ' + (total - cov) + ' brechas sin un programa de la oferta. Esas brechas son la base del siguiente programa que se diseña.');
  }
  function renderAll(){ renderTabs(); renderMatrix(); renderOffer(); renderSummary(); }
  renderAll();

  // video del encabezado: pausa (WCAG 2.2.2) y respeto al movimiento reducido
  var hv = document.getElementById('hero-loop'), hb = document.getElementById('hero-loop-btn');
  if (hv && hb) {
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { try { hv.pause(); } catch (e) {} }
    else if (hv.paused) { var pr = hv.play(); if (pr && pr.catch) pr.catch(function(){}); }
    hb.addEventListener('click', function(){
      if (hv.paused) { hv.play(); hb.textContent = 'Pausar video'; hb.setAttribute('aria-pressed', 'false'); }
      else { hv.pause(); hb.textContent = 'Reproducir video'; hb.setAttribute('aria-pressed', 'true'); }
    });
  }
  // analítica de los botones de agendar (Vercel Analytics, si está cargada)
  root.querySelectorAll('a[data-track]').forEach(function(a){ a.addEventListener('click', function(){ try { window.va && window.va('event', { name: a.getAttribute('data-track') }); } catch (e) {} }); });
  return function () { observers.forEach(function (o) { o.disconnect(); }); };
};
