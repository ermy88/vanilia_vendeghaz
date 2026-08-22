document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.icon');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('shadow');
    }// else {
        // entry.target.classList.remove('shadow'); // ha oda-vissza animálódjon
    // }
});
}, {
    threshold: 0.5, // mennyi % legyen látható, hogy elinduljon
    rootMargin: '0px 0px -100px 0px' // mikor induljon el
});

elements.forEach(el => observer.observe(el));
});