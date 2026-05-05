/* ═══════════════════════════════
   AccioPet — main.js
   Render desde JSON, UI logic
═══════════════════════════════ */

let DATA = {};
let currentPlan = 'ad';

/* ── INIT ── */
function init() {
  // Usa variable global de data.js (funciona sin servidor)
  if (typeof ACCIOPET_DATA !== 'undefined') {
    DATA = ACCIOPET_DATA;
    renderAll();
    initScrollAnimations();
  } else {
    console.error('No se encontró ACCIOPET_DATA. Asegurate de cargar data/data.js antes de main.js');
  }
}

function renderAll() {
  renderStories();
  renderNoticias();
  renderLanzamientos();
  renderTipsSenior();
  renderTipsTransporte();
  renderArticulosPerros();
  renderArticulosGatos();
  renderArticulosOtros();
  renderOtrosTipos();
  renderSponsors();
}

/* ── HELPERS ── */
function catClass(cat) {
  const map = { perro:'cat-perro', gato:'cat-gato', otro:'cat-otro', salud:'cat-salud', nutri:'cat-nutri', tip:'cat-tip', rec:'cat-rec', viaje:'cat-viaje' };
  return map[cat] || 'cat-otro';
}

function formatPrice(p) {
  return '$' + p.toLocaleString('es-AR');
}

/* ── STORIES ── */
function renderStories() {
  const el = document.getElementById('track-stories');
  if (!el) return;
  el.innerHTML = DATA.stories.map(s => `
    <div class="card card-story" onclick="goArticle('${s.slug}')">
      <div class="story-bg">${s.emoji}</div>
      <div class="story-gradient"></div>
      <div class="story-content">
        <span class="story-tag">${s.tag}</span>
        <div class="story-title">${s.titulo}</div>
      </div>
    </div>`).join('');
}

/* ── NOTICIAS (con ads intercalados) ── */
function renderNoticias() {
  const el = document.getElementById('track-noticias');
  if (!el) return;
  el.innerHTML = DATA.noticias.map(n => {
    if (n.tipo === 'ad') return `
      <div class="card card-news card-ad">
        <span class="ad-label">✦ Publicidad</span>
        <div class="thumb"><div class="thumb-bg"></div><span class="thumb-emoji">${n.emoji}</span></div>
        <div class="card-body">
          <h3>${n.titulo}</h3>
          <p>${n.desc}</p>
          <button class="btn-launch" onclick="window.open('${n.ctaUrl}')">${n.cta}</button>
        </div>
      </div>`;
    return `
      <div class="card card-news" onclick="goArticle('${n.slug}')">
        <div class="thumb">
          <div class="thumb-bg"></div>
          <span class="thumb-emoji">${n.emoji}</span>
          <span class="card-cat ${catClass(n.cat)}">${n.catLabel}</span>
        </div>
        <div class="card-body">
          <h3>${n.titulo}</h3>
          <p>${n.desc}</p>
          <div class="card-meta"><span>${n.tiempo}</span><span>·</span><span>${n.lectura} lectura</span></div>
        </div>
      </div>`;
  }).join('');
}

/* ── LANZAMIENTOS ── */
function renderLanzamientos() {
  const el = document.getElementById('track-lanzamientos');
  if (!el) return;
  el.innerHTML = DATA.lanzamientos.map(l => `
    <div class="card card-launch" onclick="goArticle('${l.slug}')">
      <div class="thumb">
        ${l.emoji}
        <span class="launch-badge">${l.badge}</span>
      </div>
      <div class="card-body">
        <h3>${l.titulo}</h3>
        <p style="font-size:11px;color:#aaa;margin-bottom:4px">${l.tienda}</p>
        <div class="price">${l.precioOld ? `<del>${formatPrice(l.precioOld)}</del>` : ''} ${formatPrice(l.precio)}</div>
        <button class="btn-launch">Ver producto →</button>
      </div>
    </div>`).join('');
}

/* ── TIPS SENIOR ── */
function renderTipsSenior() {
  const el = document.getElementById('track-senior');
  if (!el) return;
  el.innerHTML = DATA.tips_senior.map(t => `
    <div class="card card-tip tip-senior" onclick="goArticle('${t.slug}')">
      <div class="thumb">${t.emoji}</div>
      <div class="card-body">
        <span class="card-cat cat-tip" style="position:static;display:inline-block;margin-bottom:9px">💡 ${t.cat}</span>
        <h3>${t.titulo}</h3>
        <p>${t.desc}</p>
        <div class="card-meta"><span>${t.target}</span></div>
      </div>
    </div>`).join('');
}

/* ── TIPS TRANSPORTE ── */
function renderTipsTransporte() {
  const el = document.getElementById('track-transporte');
  if (!el) return;
  el.innerHTML = DATA.tips_transporte.map(t => `
    <div class="card card-tip tip-travel" onclick="goArticle('${t.slug}')">
      <div class="thumb">${t.emoji}</div>
      <div class="card-body">
        <span class="card-cat" style="position:static;display:inline-block;margin-bottom:9px;background:${t.catColor};color:white;font-size:10px;font-weight:800;padding:3px 9px;border-radius:50px;text-transform:uppercase;letter-spacing:.05em">${t.cat}</span>
        <h3>${t.titulo}</h3>
        <p>${t.desc}</p>
        <div class="card-meta"><span>${t.target}</span></div>
      </div>
    </div>`).join('');
}

/* ── ARTÍCULOS PERROS ── */
function renderArticulosPerros() {
  const el = document.getElementById('track-perros');
  if (!el) return;
  el.innerHTML = DATA.articulos_perros.map(a => articleCard(a)).join('');
}

/* ── ARTÍCULOS GATOS ── */
function renderArticulosGatos() {
  const el = document.getElementById('track-gatos');
  if (!el) return;
  el.innerHTML = DATA.articulos_gatos.map(a => articleCard(a)).join('');
}

/* ── ARTÍCULOS OTROS ── */
function renderArticulosOtros() {
  const el = document.getElementById('track-otros');
  if (!el) return;
  el.innerHTML = DATA.articulos_otros.map(a => articleCard(a)).join('');
}

function articleCard(a) {
  return `
    <div class="card card-news" onclick="goArticle('${a.slug}')">
      <div class="thumb">
        <div class="thumb-bg"></div>
        <span class="thumb-emoji">${a.emoji}</span>
        <span class="card-cat ${catClass(a.cat)}">${a.catLabel}</span>
      </div>
      <div class="card-body">
        <h3>${a.titulo}</h3>
        <p>${a.desc}</p>
        <div class="card-meta"><span>${a.lectura} lectura</span></div>
      </div>
    </div>`;
}

/* ── GRID OTROS TIPOS ── */
function renderOtrosTipos() {
  const el = document.getElementById('grid-otros');
  if (!el) return;
  el.innerHTML = DATA.otros_tipos.map(o => `
    <a href="pages/categoria.html?tipo=${o.slug}" class="otro-item">
      <span class="icon">${o.emoji}</span>
      <span>${o.label}</span>
    </a>`).join('') + `
    <a href="pages/categoria.html" class="otro-item">
      <span class="icon">＋</span>
      <span>Ver más</span>
    </a>`;
}

/* ── SPONSORS ── */
function renderSponsors() {
  const el = document.getElementById('sponsors-row');
  if (!el) return;
  el.innerHTML = DATA.sponsors.map(s => `
    <div class="sponsor-chip" onclick="window.open('${s.url}')">
      ${s.emoji} ${s.nombre}
    </div>`).join('');
}

/* ── CARRUSEL SCROLL ── */
function scrollCarousel(trackId, dir) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const cardW = track.querySelector('.card')?.offsetWidth || 260;
  track.scrollBy({ left: dir * (cardW + 14) * 2, behavior: 'smooth' });
}

/* ── NAV ── */
function toggleNav() {
  document.getElementById('nav-menu').classList.toggle('open');
}

/* ── PLAN SELECTION ── */
function selectPlan(plan) {
  currentPlan = plan;
  document.getElementById('plan-ad').classList.toggle('sel', plan === 'ad');
  document.getElementById('plan-cafe').classList.toggle('sel', plan === 'cafe');
  syncModalPlan(plan);
}

function syncModalPlan(plan) {
  document.getElementById('mplan-ad').classList.toggle('act', plan === 'ad');
  document.getElementById('mplan-cafe').classList.toggle('act', plan === 'cafe');
  const chk = document.getElementById('chk-ads');
  if (chk) chk.checked = plan === 'ad';
}

/* ── MODAL ── */
function openModal() {
  const emailInput = document.getElementById('hero-email');
  const modalEmail = document.getElementById('modal-email');
  if (emailInput && modalEmail && emailInput.value) {
    modalEmail.value = emailInput.value;
  }
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  syncModalPlan(currentPlan);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

function submitModal() {
  const email = document.getElementById('modal-email')?.value;
  if (!email || !email.includes('@')) {
    document.getElementById('modal-email').style.borderColor = 'red';
    return;
  }
  document.querySelector('.modal').innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:52px;margin-bottom:14px">🎉</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:21px;color:var(--choco);margin-bottom:10px">¡Ya sos parte de AccioPet!</h2>
      <p style="color:#777;font-size:13px;margin-bottom:22px;line-height:1.6">Te enviamos la confirmación a <strong>${email}</strong>. Revisá spam si no llega en unos minutos.</p>
      <button onclick="closeModal()" class="btn-primary">✨ ¡Explorar AccioPet!</button>
    </div>`;
}

/* ── CALCULADORA VACUNAS ── */
function calcVacunas() {
  const type  = document.getElementById('calc-tipo')?.value;
  const birth = document.getElementById('calc-fecha')?.value;
  if (!type || !birth) {
    alert('Completá todos los campos para ver el calendario 🐾');
    return;
  }

  const bd = new Date(birth);
  const now = new Date();
  const vacunas = DATA.vacunas?.[type] || [];

  const items = vacunas.map(v => {
    const date = new Date(bd);
    date.setMonth(date.getMonth() + v.edadMeses);
    const isPast = date < now;
    return { ...v, date, isPast };
  });

  // Primer futuro = "próximo"
  let nextSet = false;
  const html = items.map(v => {
    let status = 'v-future';
    let icon = '○';
    if (v.isPast) { status = 'v-done'; icon = '✓'; }
    else if (!nextSet) { status = 'v-next'; icon = '!'; nextSet = true; }

    const dateStr = v.date.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
    return `
      <div class="vacuna-item">
        <div class="v-dot ${status}">${icon}</div>
        <div class="v-info">
          <strong>${v.nombre}</strong>
          <span>${v.desc}</span>
        </div>
        <div class="v-date">${dateStr}</div>
      </div>`;
  }).join('');

  const title = document.getElementById('vacuna-title');
  const timeline = document.getElementById('vacuna-timeline');
  const result = document.getElementById('vacuna-result');
  if (title) title.textContent = `📅 Calendario para tu ${type}`;
  if (timeline) timeline.innerHTML = html;
  if (result) result.classList.add('show');
}

/* ── NAVEGACIÓN A ARTÍCULO ── */
function goArticle(slug) {
  window.location.href = `pages/articulo.html?slug=${slug}`;
}

/* ── SCROLL ANIMATIONS ── */
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ── CLOSE NAV ON LINK CLICK ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav-menu')?.classList.remove('open');
    });
  });
  init();
});
