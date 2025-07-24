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


document.addEventListener('DOMContentLoaded', () => {
  // Tools Carousel
  const carouselTools = document.getElementById('carousel');
  const cardTools = carouselTools.querySelector('div'); // First card
  const cardWidthTools = cardTools.offsetWidth;
  let scrollPositionTools = 0;

  document.getElementById('scrollRight').addEventListener('click', () => {
    const maxScroll = carouselTools.scrollWidth - carouselTools.clientWidth;
    if (scrollPositionTools + cardWidthTools <= maxScroll) {
      scrollPositionTools += cardWidthTools;
      carouselTools.scrollTo({ left: scrollPositionTools, behavior: 'smooth' });
    }
  });

  document.getElementById('scrollLeft').addEventListener('click', () => {
    if (scrollPositionTools - cardWidthTools >= 0) {
      scrollPositionTools -= cardWidthTools;
      carouselTools.scrollTo({ left: scrollPositionTools, behavior: 'smooth' });
    }
  });

  // Languages Carousel
  const carouselLang = document.getElementById('carousel-language');
  const cardLang = carouselLang.querySelector('div'); // First card
  const cardWidthLang = cardLang.offsetWidth;
  let scrollPositionLang = 0;

  document.getElementById('scrollRightL').addEventListener('click', () => {
    const maxScroll = carouselLang.scrollWidth - carouselLang.clientWidth;
    if (scrollPositionLang + cardWidthLang <= maxScroll) {
      scrollPositionLang += cardWidthLang;
      carouselLang.scrollTo({ left: scrollPositionLang, behavior: 'smooth' });
    }
  });

  document.getElementById('scrollLeftL').addEventListener('click', () => {
    if (scrollPositionLang - cardWidthLang >= 0) {
      scrollPositionLang -= cardWidthLang;
      carouselLang.scrollTo({ left: scrollPositionLang, behavior: 'smooth' });
    }
  });
});

