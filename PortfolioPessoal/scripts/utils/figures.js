// Controls for animated figures: toggle animations and persist preference
(function(){
  const btn = document.getElementById('animation-toggle');
  if(!btn) return;

  const KEY = 'site.reducedMotion';
  const apply = (reduced)=>{
    if(reduced){
      document.documentElement.classList.add('reduced-motion');
      btn.setAttribute('aria-pressed','true');
      btn.textContent = 'Ativar animações';
    } else {
      document.documentElement.classList.remove('reduced-motion');
      btn.setAttribute('aria-pressed','false');
      btn.textContent = 'Pausar animações';
    }
    try{ localStorage.setItem(KEY, reduced? '1':'0' ); }catch(e){}
  };

  // Initialize from saved preference or system preference
  let stored = null;
  try{ stored = localStorage.getItem(KEY); }catch(e){}
  if(stored === '1') apply(true);
  else if(stored === '0') apply(false);
  else if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) apply(true);
  else apply(false);

  btn.addEventListener('click', ()=>{
    const isReduced = document.documentElement.classList.toggle('reduced-motion');
    apply(isReduced);
  });
})();
