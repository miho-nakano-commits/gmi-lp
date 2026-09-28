document.querySelectorAll('.accordion-trigger,.service-trigger').forEach((button)=>{
  button.addEventListener('click',()=>{
    const card=button.closest('article');
    const open=button.getAttribute('aria-expanded')==='true';
    button.setAttribute('aria-expanded',String(!open));
    card.classList.toggle('is-open',!open);
    const icon=button.querySelector('b');
    if(icon) icon.textContent=open?'＋':'−';
    if(button.classList.contains('accordion-trigger')) button.childNodes[0].nodeValue=open?'詳しく見る ':'閉じる ';
  });
});
