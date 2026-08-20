

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.gallery-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }// else {
        // entry.target.classList.remove('visible'); // ha oda-vissza animálódjon
    // }
});
}, {
    threshold: 0.5, // mennyi % legyen látható, hogy elinduljon
    // rootMargin: '0px 0px -50px 0px' // mikor induljon el (itt kicsit korábban)
});

elements.forEach(el => observer.observe(el));
});

