// LOADING ANIMATION
window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        loader.classList.add('fade-out');
      }, 2000);
    });


// SLIDE IN ANIMATION
  document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in-visible');
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
});
