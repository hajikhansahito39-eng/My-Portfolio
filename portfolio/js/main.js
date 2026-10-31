document.documentElement.classList.add('js');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const run=el=>{const t=+el.dataset.count,s=el.dataset.suffix||'';if(reduce){el.textContent=t+s;return}
const st=performance.now(),d=1800;(function f(n){const p=Math.min((n-st)/d,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(st)};
const co=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);co.unobserve(e.target)}}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>{el.textContent='0'+(el.dataset.suffix||'');co.observe(el)});
const m=document.querySelector('.menu'),u=document.querySelector('nav ul');
m.addEventListener('click',()=>{const o=u.classList.toggle('open');m.setAttribute('aria-expanded',o)});
