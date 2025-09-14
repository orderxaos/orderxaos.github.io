'use strict';

function guttersFor(vw){
  // side paddings total: 100/side (>=1020), 75/side (<=1019), 25/side (<=400)
  return vw <= 400 ? 50 : (vw <= 1019 ? 150 : 200);
}

function setupVisuals(){
  const viewport = document.querySelector('.vis-viewport');
  const track = document.querySelector('.vis-track');
  const slides = Array.from(document.querySelectorAll('.vis-slide'));
  const prev = document.querySelector('.vis-btn.prev');
  const next = document.querySelector('.vis-btn.next');
  const dotsWrap = document.querySelector('.vis-dots');
  if(!viewport || !track || slides.length === 0) return;

  let idx = 0; let timer = null; const gap = 260;

  // make dots
  slides.forEach((_,i)=>{
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('aria-label', 'Go to slide '+(i+1));
    b.addEventListener('click', ()=>{ idx = i; render(); restart(); });
    dotsWrap.appendChild(b);
  });

  function size(){
    const vw = window.innerWidth; const g = guttersFor(vw);
    const content = Math.min(vw, 1280) - g; // available width inside container
    const w = Math.max(320, Math.min(850, content));
    slides.forEach(s=>{ s.style.width = w+'px'; });
    render();
  }
  function render(){
    const w = slides[0].getBoundingClientRect().width;
    const x = -(w + gap) * idx;
    track.style.transform = `translateX(${x}px)`;
    dotsWrap.querySelectorAll('button').forEach((d,i)=>d.setAttribute('aria-selected', String(i===idx)));
    prev.disabled = idx===0; next.disabled = idx===slides.length-1;
  }
  function restart(){ if(timer){ clearInterval(timer); } timer = setInterval(()=>{ idx = (idx+1)%slides.length; render(); }, 2000); }

  prev.addEventListener('click', ()=>{ idx=Math.max(0, idx-1); render(); restart(); });
  next.addEventListener('click', ()=>{ idx=Math.min(slides.length-1, idx+1); render(); restart(); });
  viewport.addEventListener('pointerenter', ()=>{ if(timer) clearInterval(timer); });
  viewport.addEventListener('pointerleave', restart);

  size(); window.addEventListener('resize', size); restart();
}

function setupCaseStudies(){
  const viewport = document.querySelector('.cs-viewport');
  const track = document.querySelector('.cs-track');
  const cards = Array.from(document.querySelectorAll('.cs-card'));
  const prev = document.querySelector('.cs-btn.prev');
  const next = document.querySelector('.cs-btn.next');
  if(!viewport || !track || cards.length === 0) return;
  let idx = 0; const gap = 25;

  function size(){
    const vw = window.innerWidth; const side = guttersFor(vw)/2; // per side
    const content = Math.min(vw,1280) - side*2;
    const cw = Math.max(280, Math.min(562, content));
    cards.forEach(c=>{ c.style.width = cw+'px'; });
    render();
  }
  function render(){
    const w = cards[0].getBoundingClientRect().width;
    const x = -(w + gap) * idx;
    track.style.transform = `translateX(${x}px)`;
    prev.disabled = idx===0; next.disabled = idx===cards.length-1;
  }
  prev.addEventListener('click', ()=>{ idx=Math.max(0, idx-1); render(); });
  next.addEventListener('click', ()=>{ idx=Math.min(cards.length-1, idx+1); render(); });

  size(); window.addEventListener('resize', size);
}

window.addEventListener('DOMContentLoaded', ()=>{
  setupVisuals();
  setupCaseStudies();
});
