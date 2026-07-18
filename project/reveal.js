/* Testlify shared scroll-reveal — rAF sweep, resize + timers + MutationObserver.
   Self-installing; works regardless of React mount timing. */
(function(){
  if (window.__tlReveal) return;
  window.__tlReveal = true;
  function sweep(){
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var nodes = document.querySelectorAll('.reveal:not(.in)');
    for (var i=0;i<nodes.length;i++){
      var n = nodes[i];
      if (n.getBoundingClientRect().top < vh + 600){
        n.classList.add('in');
        (function(n){
          var d = (parseFloat(n.style.transitionDelay||'0')||0)*1000;
          n.style.transition='none';
          var dur=700, sy=26, st=null;
          function tick(t){ if(st===null)st=t; var p=Math.min(1,(t-st)/dur); var e=1-Math.pow(1-p,3); n.style.opacity=String(e); n.style.transform='translateY('+(sy*(1-e)).toFixed(2)+'px)'; if(p<1) requestAnimationFrame(tick); else { n.style.opacity='1'; n.style.transform='none'; } }
          setTimeout(function(){ requestAnimationFrame(tick); }, d);
        })(n);
      }
    }
  }
  window.__tlSweep = sweep;
  window.addEventListener('scroll', sweep, {passive:true});
  window.addEventListener('resize', sweep);
  [0,150,400,800,1500,2500].forEach(function(t){ setTimeout(sweep, t); });
  requestAnimationFrame(sweep);
  try{ new MutationObserver(function(){ requestAnimationFrame(sweep); }).observe(document.body,{childList:true,subtree:true}); }catch(e){}
})();
