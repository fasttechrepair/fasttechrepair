
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) setTimeout(() => loader.classList.add('hide'), 450);
});

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

const counters = document.querySelectorAll('[data-count]');
let countersStarted = false;
function runCounters(){
  if(countersStarted) return;
  countersStarted = true;
  counters.forEach(counter => {
    const target = Number(counter.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 70));
    const timer = setInterval(() => {
      current += step;
      if(current >= target){
        counter.textContent = target + (target === 24 ? '/7' : '+');
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 22);
  });
}
const metricArea = document.querySelector('.metrics');
if(metricArea){
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) runCounters(); });
  }, { threshold: 0.25 });
  counterObserver.observe(metricArea);
}

const glow = document.getElementById('cursorGlow');
if(glow && window.matchMedia('(min-width: 900px)').matches){
  glow.style.display = 'block';
  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}
