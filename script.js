const menuButton=document.querySelector('.mobile-menu');
const nav=document.querySelector('.main-nav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
}
const newsletter=document.querySelector('#newsletter');
if(newsletter){
  newsletter.addEventListener('submit',e=>{
    e.preventDefault();
    alert('شكرًا لاهتمامك! نموذج الاشتراك تجريبي حاليًا، ولم يتم إرسال بريد إلى قائمة بريدية.');
    e.target.reset();
  });
}