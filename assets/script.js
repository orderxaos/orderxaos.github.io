'use strict';
// Smooth scroll for in-page anchor links if any are added later
(function(){
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href');
    if(id.length > 1){
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
      }
    }
  });
})();
