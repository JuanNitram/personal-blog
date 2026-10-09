// theme toggle (remembered per viewer when storage works)
(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved; } catch (e) {}
  document.getElementById('theme').addEventListener('click', function () {
    var current = root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var next = current === 'light' ? 'dark' : 'light';
    var apply = function () { root.dataset.theme = next; };
    if (document.startViewTransition) document.startViewTransition(apply); else apply();
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// years since first role + footer bits
var now = new Date();
var yearsEl = document.getElementById('years');
if (yearsEl) yearsEl.textContent = (now.getFullYear() - 2017) + '+';
var yrEl = document.getElementById('yr');
if (yrEl) yrEl.textContent = now.getFullYear();
function tick() {
  var clock = document.getElementById('clock');
  if (!clock) return;
  try {
    clock.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Montevideo' }).format(new Date());
  } catch (e) {}
}
tick(); setInterval(tick, 30000);

// scroll reveal
var items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
} else {
  items.forEach(function (el) { el.classList.add('in'); });
}

// cursor spotlight on tiles
document.querySelectorAll('.tile').forEach(function (el) {
  el.addEventListener('pointermove', function (ev) {
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
    el.style.setProperty('--my', (ev.clientY - r.top) + 'px');
  });
});
