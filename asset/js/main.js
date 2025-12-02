// Main interactivity: menu toggle, smooth scroll, form handling
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = nav ? Array.from(nav.querySelectorAll('a')) : [];

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  links.forEach(a=>a.addEventListener('click', ()=>{
    if(nav.classList.contains('open')){
      nav.classList.remove('open');
      toggle && toggle.setAttribute('aria-expanded','false');
    }
  }));

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#' || href === '') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form: fake submit
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      status.textContent = 'Đang gửi...';
      // simulate network request
      setTimeout(()=>{
        status.textContent = 'Cảm ơn! Tin nhắn đã được gửi.';
        form.reset();
      }, 700);
    });
  }
});
