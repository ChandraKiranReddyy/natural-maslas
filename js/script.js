// ===== NAV: scroll shrink =====
const navEl = document.querySelector('.nav');
if (navEl) {
  const setScrolled = () => navEl.classList.toggle('scrolled', window.scrollY > 12);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });
}

// ===== NAV: mobile burger =====
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.textContent = navLinks.classList.contains('open') ? '\u2715' : '\u2630';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.textContent = '\u2630';
  }));
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// ===== HERO STAT COUNTERS =====
document.querySelectorAll('.hero-stats .num[data-count]').forEach(el => {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  let started = false;
  const run = () => {
    if (started) return;
    started = true;
    let cur = 0;
    const step = Math.max(1, Math.round(target / 40));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = cur + suffix;
    }, 30);
  };
  if ('IntersectionObserver' in window) {
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { run(); io2.disconnect(); } });
    }, { threshold: 0.4 });
    io2.observe(el);
  } else { run(); }
});

// ===== PRODUCTS: FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const skuCards = document.querySelectorAll('.prod-card[data-cat]');
const skuCounter = document.getElementById('skuCounter');

function applyFilter(cat) {
  let visible = 0;
  skuCards.forEach(card => {
    const match = cat === 'all' || card.dataset.cat === cat;
    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  if (skuCounter) skuCounter.innerHTML = `Showing <b>${visible}</b> of <b>${skuCards.length}</b> SKUs`;
}

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });
  applyFilter('all');
}

// ===== RECIPES: STEP ACCORDION =====
document.querySelectorAll('.steps-toggle').forEach(btn => {
  const list = btn.nextElementSibling;
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    list.style.maxHeight = open ? list.scrollHeight + 'px' : '0px';
  });
});

// ===== CART: badge counter (front-end only, no real checkout) =====
let cartCount = 0;
const cartBadge = document.getElementById('cartBadge');
function bumpCart(btn) {
  cartCount++;
  if (cartBadge) cartBadge.textContent = cartCount;
  if (btn) {
    const original = btn.textContent;
    btn.textContent = 'Added \u2713';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = original; btn.classList.remove('added'); }, 1200);
  }
}
document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => bumpCart(btn));
});
