
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if(loader) setTimeout(() => loader.classList.add('hide'), 450);
});
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if(menuBtn && nav){ menuBtn.addEventListener('click', () => nav.classList.toggle('open')); }
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
}, {threshold:.12});
reveals.forEach(el => io.observe(el));
const counters = document.querySelectorAll('[data-count]');
let started = false;
function startCounters(){
  if(started) return;
  started = true;
  counters.forEach(el => {
    const target = Number(el.dataset.count);
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 65));
    const timer = setInterval(() => {
      cur += step;
      if(cur >= target){
        el.textContent = target + (target === 24 ? '/7' : '+');
        clearInterval(timer);
      } else {
        el.textContent = cur;
      }
    }, 22);
  });
}
const metric = document.querySelector('.metric-row');
if(metric){
  const co = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) startCounters(); });
  }, {threshold:.25});
  co.observe(metric);
}
const light = document.getElementById('cursorLight');
if(light && window.matchMedia('(min-width:900px)').matches){
  light.style.display='block';
  window.addEventListener('mousemove', e => {
    light.style.left=e.clientX+'px';
    light.style.top=e.clientY+'px';
  });
}
