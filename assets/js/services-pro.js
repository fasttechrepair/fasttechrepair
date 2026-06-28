
// Stage4-Part3 Fix: additive service-card enhancements only.
document.querySelectorAll('.premium-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX-r.left}px`);
    card.style.setProperty('--my', `${e.clientY-r.top}px`);
  });
});
