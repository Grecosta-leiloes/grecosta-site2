// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile menu if open
      document.body.classList.remove('nav-open');
    }
  });
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
if(toggle){
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // toggle menu visibility
    const navLinks = document.querySelector('.nav-links');
    if(navLinks){
      const isHidden = getComputedStyle(navLinks).display === 'none';
      navLinks.style.display = isHidden ? 'flex' : 'none';
    }
  });
}

// Simple filter functionality for the catalog (client-side)
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filters.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');

    const f = btn.dataset.filter;
    cards.forEach(c=>{
      if(f === 'all' || c.dataset.category === f){
        c.style.display = '';
      } else {
        c.style.display = 'none';
      }
    });
  });
});

// year in footer
document.getElementById('year').innerText = new Date().getFullYear();

// contact form simple handler (demo)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Mensagem enviada! (esta é uma simulação — integre com backend quando quiser)');
    form.reset();
  });
}
