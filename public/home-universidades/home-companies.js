// Generado por integrar_sitio.py desde el prototipo del vault. No editar a mano.
// Interactividad del home para universidades: fases, roles, comparación, demo de POK, FAQ, carrusel y video.
window.initHomeCompanies = function (root) {
  var observers = []; function track(o) { observers.push(o); return o; }

  var body = root;
  // eventos de Vercel Analytics (en el sitio existe window.va; en el prototipo no hace nada)
  function ev(n){ try { window.va && window.va('event', { name: n }); } catch (e) {} }
  // rol
  var ROLE_KEY = 'merahki-home-role';
  function setRole(r){
    body.setAttribute('data-role', r);
    document.querySelectorAll('.chips .chip[data-role]').forEach(function(c){ c.setAttribute('aria-pressed', String(c.getAttribute('data-role') === r)); });
    try { localStorage.setItem(ROLE_KEY, r); } catch(e) {}
  }
  var saved = null; try { saved = localStorage.getItem(ROLE_KEY); } catch(e) {}
  setRole(['rectoria','vicerrectoria','continua','empresa'].indexOf(saved) >= 0 ? saved : 'continua');
  document.querySelectorAll('.chips .chip[data-role]').forEach(function(c){ c.addEventListener('click', function(){ setRole(c.getAttribute('data-role')); ev('rol_' + c.getAttribute('data-role')); }); });

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
    document.getElementById('pos').textContent = 'Phase ' + (cur + 1) + ' of ' + phases.length;
    document.getElementById('next').textContent = cur === phases.length - 1 ? 'Back to Design →' : 'Next →';
  }
  steps.forEach(function(s){ s.addEventListener('click', function(){ show(+s.getAttribute('data-go')); ev('fase_vista_' + (cur + 1)); }); });
  document.getElementById('prev').addEventListener('click', function(){ show(cur - 1); ev('fase_vista_' + (cur + 1)); });
  document.getElementById('next').addEventListener('click', function(){ show(cur === phases.length - 1 ? 1 : cur + 1); ev('fase_vista_' + (cur + 1)); });
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
    allBtn.setAttribute('aria-pressed', String(on)); allBtn.textContent = on ? 'See one phase at a time' : 'See all seven phases';
    if (!on) show(cur);
  });
  function exitAll(){ if (stage.classList.contains('all')) { stage.classList.remove('all'); allBtn.setAttribute('aria-pressed','false'); allBtn.textContent = 'See all seven phases'; } }
  steps.forEach(function(s){ s.addEventListener('click', exitAll); });
  document.querySelectorAll('a[data-go]').forEach(function(a){ a.addEventListener('click', function(e){ e.preventDefault(); exitAll(); goTo(+a.getAttribute('data-go')); }); });
  var faqBtn = document.getElementById('faq-all');
  faqBtn.addEventListener('click', function(){
    var on = faqBtn.getAttribute('aria-pressed') !== 'true';
    document.querySelectorAll('.faq details').forEach(function(d){ d.open = on; });
    faqBtn.setAttribute('aria-pressed', String(on)); faqBtn.textContent = on ? 'Close all answers' : 'Open all answers';
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
  mqb.addEventListener('click', function(){ var on = !mq.classList.contains('paused'); mq.classList.toggle('paused', on); mqb.setAttribute('aria-pressed', String(on)); mqb.textContent = on ? 'Resume logos' : 'Pause logos'; });

  // noticias: tarjetas que se voltean (25-nov). El foco pasa al lado que queda visible.
  document.querySelectorAll('.nw').forEach(function(card){
    var go = card.querySelector('.nw-go'), bk = card.querySelector('.nw-back');
    go.addEventListener('click', function(){ card.classList.add('on'); go.setAttribute('aria-expanded', 'true'); bk.focus({preventScroll: true}); });
    bk.addEventListener('click', function(){ card.classList.remove('on'); go.setAttribute('aria-expanded', 'false'); go.focus({preventScroll: true}); });
  });

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


  // loops del entregable de cada fase: corren solo en pantalla; con movimiento reducido queda el póster (el entregable completo)
  var vloops = [].slice.call(document.querySelectorAll('video.fase-loop'));
  if (vloops.length && 'IntersectionObserver' in window && !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    var vcb = function(es){ es.forEach(function(e){ var v = e.target; if (e.isIntersecting) { if (v.getAttribute('data-user-paused') === '1') return; if (v.preload === 'none') v.preload = 'auto'; var pv = v.play(); if (pv && pv.catch) pv.catch(function(){}); } else { v.pause(); } }); };
    var vio = track(new IntersectionObserver(vcb, {threshold: .35}));
    vloops.forEach(function(v){ vio.observe(v); });
  }

  // pausa de cada loop (WCAG 2.2.2): la pausa del visitante se respeta al volver a la pantalla
  document.querySelectorAll('.vpause').forEach(function(b){ b.addEventListener('click', function(){
    var v = b.closest('figure').querySelector('video'); if (!v) return;
    if (v.paused) { v.removeAttribute('data-user-paused'); var pp = v.play(); if (pp && pp.catch) pp.catch(function(){}); b.textContent = 'Pause'; b.setAttribute('aria-pressed', 'false'); }
    else { v.pause(); v.setAttribute('data-user-paused', '1'); b.textContent = 'Play'; b.setAttribute('aria-pressed', 'true'); }
  }); });

  // ver un loop en grande
  var vd = document.getElementById('vdlg'), vdv = document.getElementById('vdlg-v');
  if (vd && vdv) {
    document.querySelectorAll('.vbig').forEach(function(b){ b.addEventListener('click', function(){ var fig = b.closest('figure'), fv = fig.querySelector('video'); var src = fig.querySelector('source:not([media])').getAttribute('src'); ev('ver_en_grande_' + b.getAttribute('data-n')); var narrow = window.matchMedia && matchMedia('(max-width: 700px)').matches; vd.classList.toggle('pan', !!narrow); if (narrow) { var im = document.getElementById('vdlg-img'); im.src = fv.getAttribute('poster').replace('-poster.webp', '-grande.webp'); im.alt = fv.getAttribute('aria-label') || ''; } else if (vdv.getAttribute('src') !== src) { vdv.setAttribute('src', src); } if (vd.showModal) vd.showModal(); else vd.setAttribute('open', ''); if (!narrow) { var pv = vdv.play(); if (pv && pv.catch) pv.catch(function(){}); } }); });
    document.getElementById('vdlg-close').addEventListener('click', function(){ if (vd.close) vd.close(); else vd.removeAttribute('open'); });
    vd.addEventListener('click', function(e){ if (e.target === vd) vd.close(); });
    vd.addEventListener('close', function(){ try { vdv.pause(); } catch (e) {} });
  }

  // prisma del título: cada 2,33 s entra la siguiente frase; con movimiento reducido queda fija la primera.
  // window.__mhuPrism permite pausarlo (botón de animaciones del sitio) y detenerlo al salir de la página.
  var prism = document.querySelector('.prism');
  if (prism) {
    var faces = prism.querySelectorAll('.face'), pi = 0, ptimer = null;
    var pstill = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var pstep = function(){ var cur = faces[pi]; pi = (pi + 1) % faces.length; for (var k = 0; k < faces.length; k++) faces[k].classList.remove('out'); cur.classList.remove('on'); cur.classList.add('out'); faces[pi].classList.add('on'); };
    var pplay = function(){ if (!ptimer && !pstill) ptimer = setInterval(pstep, 2333); };
    var ppause = function(){ if (ptimer) { clearInterval(ptimer); ptimer = null; } };
    var pmeasure = function(){ prism.style.setProperty('--ph', (prism.offsetHeight / 2) + 'px'); };
    pmeasure(); window.addEventListener('resize', pmeasure);
    pplay();
    window.__mhuPrism = { play: pplay, pause: ppause, stop: function(){ ppause(); window.removeEventListener('resize', pmeasure); } };
  }

  // cotización a la medida: el formulario de HubSpot del idioma de la página se carga al abrir la ventana
  var qd = document.getElementById('qdlg');
  if (qd) {
    var qok = false;
    var qload = function(){ if (qok) return; qok = true;
      var go = function(){ try { window.hbspt.forms.create({ portalId: '51381899', formId: qd.getAttribute('data-form'), region: 'na1', target: '#qform', css: '',
        onFormReady: function(){ var l = qd.querySelector('.qform-load'); if (l && l.parentNode) l.parentNode.removeChild(l); },
        onFormSubmitted: function(){ ev('cotizacion_enviada'); } }); } catch (e) {} };
      if (window.hbspt && window.hbspt.forms) go();
      else { var s = document.createElement('script'); s.src = 'https://js.hsforms.net/forms/embed/v2.js'; s.charset = 'utf-8'; s.async = true; s.onload = go; document.head.appendChild(s); } };
    var qclose = function(){ if (qd.close) qd.close(); else qd.removeAttribute('open'); };
    document.querySelectorAll('.qopen').forEach(function(b){ b.addEventListener('click', function(){ qload(); if (qd.showModal) qd.showModal(); else qd.setAttribute('open', ''); ev('cotizacion_abrir_' + (b.getAttribute('data-src') || 'boton')); }); });
    document.getElementById('qdlg-close').addEventListener('click', qclose);
    qd.addEventListener('click', function(e){ if (e.target === qd) qclose(); });
    // enlaces de artículos y páginas de servicio: /es#cotizacion o /#cotizacion abren el formulario directamente
    var qhash = function(){ if (location.hash === '#cotizacion' || location.hash === '#quote') { qload(); if (!qd.open) { if (qd.showModal) qd.showModal(); else qd.setAttribute('open', ''); } ev('cotizacion_abrir_enlace'); } };
    qhash(); window.addEventListener('hashchange', qhash);
  }

  // video y prisma del encabezado: un botón los pausa juntos (WCAG 2.2.2); con movimiento reducido no se mueven
  var hv = document.getElementById('hero-loop'), hb = document.getElementById('hero-loop-btn');
  if (hv && hb) {
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { try { hv.pause(); } catch (e) {} }
    else if (hv.paused) { var pr = hv.play(); if (pr && pr.catch) pr.catch(function(){}); }
    hb.addEventListener('click', function(){
      var P = window.__mhuPrism;
      if (hb.getAttribute('aria-pressed') === 'true') { hv.play(); P && P.play(); hb.textContent = 'Pause animations'; hb.setAttribute('aria-pressed', 'false'); }
      else { hv.pause(); P && P.pause(); hb.textContent = 'Resume animations'; hb.setAttribute('aria-pressed', 'true'); }
    });
  }
  // video completo en un diálogo: se carga al abrir y se pausa al cerrar
  var fo = document.getElementById('hero-full-btn'), dl = document.getElementById('vid-dlg'), vf = document.getElementById('vid-full'), dc = document.getElementById('vid-dlg-close');
  if (fo && dl && vf) {
    var hvIba = false;
    fo.addEventListener('click', function(){ hvIba = !!(hv && !hv.paused); if (hv) { try { hv.pause(); } catch (e) {} } if (dl.showModal) dl.showModal(); else dl.setAttribute('open', ''); var pr2 = vf.play(); if (pr2 && pr2.catch) pr2.catch(function(){}); try { window.va && window.va('event', { name: 'video_completo_home_universidades' }); } catch (e) {} });
    // al cerrar (botón, clic afuera o tecla Esc): pausa el video completo y reanuda el loop solo si estaba corriendo
    var alCerrar = function(){ try { vf.pause(); } catch (e) {} if (hv && hvIba) { var p3 = hv.play(); if (p3 && p3.catch) p3.catch(function(){}); } hvIba = false; };
    var cerrar = function(){ if (dl.close) dl.close(); else { dl.removeAttribute('open'); alCerrar(); } };
    dc && dc.addEventListener('click', cerrar); dl.addEventListener('click', function(e){ if (e.target === dl) cerrar(); }); dl.addEventListener('close', alCerrar);
  }
  // analítica de los botones de agendar (Vercel Analytics, si está cargada)
  root.querySelectorAll('a[data-track]').forEach(function(a){ a.addEventListener('click', function(){ try { window.va && window.va('event', { name: a.getAttribute('data-track') }); } catch (e) {} }); });
  return function () { observers.forEach(function (o) { o.disconnect(); }); if (window.__mhuPrism) { window.__mhuPrism.stop(); window.__mhuPrism = null; } };
};
