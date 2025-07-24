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


// CAROUSEL
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const card = carousel.querySelector('div'); // First card
  const cardWidth = card.offsetWidth;
  let scrollPosition = 0;

  document.getElementById('scrollRight').addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollPosition + cardWidth <= maxScroll) {
      scrollPosition += cardWidth;
      carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  });

  document.getElementById('scrollLeft').addEventListener('click', () => {
    if (scrollPosition - cardWidth >= 0) {
      scrollPosition -= cardWidth;
      carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  });
});

// CAROUSEL FOR LANGUAGES
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel-language');
  const card = carousel.querySelector('div'); // First card
  const cardWidth = card.offsetWidth;
  let scrollPosition = 0;

  document.getElementById('scrollRightR').addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (scrollPosition + cardWidth <= maxScroll) {
      scrollPosition += cardWidth;
      carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  });

  document.getElementById('scrollLeftL').addEventListener('click', () => {
    if (scrollPosition - cardWidth >= 0) {
      scrollPosition -= cardWidth;
      carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  });
});

