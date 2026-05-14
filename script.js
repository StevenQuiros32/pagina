// =============================================
// Reveal animations + Smooth scroll + Form
// =============================================

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('visible'); 
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Formulario
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-btn');
  btn.classList.add('sent');
  btn.querySelector('.btn-text').textContent = '¡Mensaje enviado!';
  
  setTimeout(() => {
    btn.classList.remove('sent');
    btn.querySelector('.btn-text').textContent = 'Enviar mensaje';
    e.target.reset();
  }, 3000);
}
