// Custom animation/interactivity for STS Technology
(function(){
  // Custom cursor
  const cursor = document.createElement('div');
  cursor.className = 'sts-cursor';
  document.body.appendChild(cursor);
  let cursorActive = false;
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    if (!cursorActive) {
      cursor.classList.add('sts-cursor--active');
      cursorActive = true;
    }
  });
  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('sts-cursor--active');
    cursorActive = false;
  });

  // Magnetic buttons
  function magneticize(btn) {
    btn.classList.add('sts-magnetic');
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width/2;
      const y = e.clientY - rect.top - rect.height/2;
      btn.style.transform = `translate(${x*0.12}px,${y*0.12}px) scale(1.07)`;
      btn.classList.add('sts-magnetic--active');
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.classList.remove('sts-magnetic--active');
    });
  }
  document.querySelectorAll('button, .magnetic').forEach(magneticize);

  // Card spotlight effect
  function spotlight(card) {
    card.classList.add('sts-spotlight');
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--x', '50%');
      card.style.setProperty('--y', '50%');
    });
  }
  document.querySelectorAll('.card, .spotlight').forEach(spotlight);

  // Scroll-triggered animations
  function animateOnScroll() {
    const els = document.querySelectorAll('.sts-animate');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach(el => el.classList.add('sts-animate--visible'));
      return;
    }
    const reveal = (el, i) => {
      setTimeout(() => el.classList.add('sts-animate--visible'), i*120);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          reveal(entry.target, i);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    els.forEach((el, i) => observer.observe(el));
  }
  if (document.readyState !== 'loading') animateOnScroll();
  else document.addEventListener('DOMContentLoaded', animateOnScroll);

  // Micro-interactions
  document.querySelectorAll('button, a, .card, .micro').forEach(el => {
    el.classList.add('sts-micro');
  });

  // Hero animation signature
  function heroUnderline() {
    const hero = document.querySelector('.sts-hero-underline');
    if (hero) setTimeout(() => hero.classList.add('sts-hero-underline--active'), 400);
  }
  if (document.readyState !== 'loading') heroUnderline();
  else document.addEventListener('DOMContentLoaded', heroUnderline);
})();
