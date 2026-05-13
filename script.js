const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
 
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
 
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
 
  document.querySelectorAll('a, button, .project-item, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.opacity = '0.25';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '0.4';
    });
  });
 
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  reveals.forEach(el => observer.observe(el));
 
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

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
  
