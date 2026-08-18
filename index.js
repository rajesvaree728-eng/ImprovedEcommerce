/* ==========================================================================
   INDEX.JS - Larya Fashion Main Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroSlider();
  initWishlist();
});

/* ==========================================================================
   1. MOBILE INTERACTIVE NAVIGATION ENGINE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.header__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    // Toggle visibility states cleanly
    const isOpen = mobileMenu.style.display === 'flex';
    
    mobileMenu.style.display = isOpen ? 'none' : 'flex';
    
    // Update structural accessibility tokens instantly
    toggleBtn.setAttribute('aria-expanded', !isOpen);
  });

  // Automatically clean up menu states if window scales back up to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileMenu.style.display = 'none';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   2. FLUID HERO IMAGE SLIDER ENGINE
   ========================================================================== */
function initHeroSlider() {
  const sliderTrack = document.querySelector('.hero__slider');
  const slides = document.querySelectorAll('.hero__slide');
  const prevBtn = document.querySelector('.hero__nav-btn--prev');
  const nextBtn = document.querySelector('.hero__nav-btn--next');
  const dots = document.querySelectorAll('.hero__dot');

  if (!sliderTrack || slides.length === 0) return;

  let currentSlideIndex = 0;
  const totalSlides = slides.length;

  function updateSliderPosition() {
    // Shift track container left based on active slide index percentage
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 25}%)`;
    
    // Refresh dot class list arrays cleanly
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add('hero__dot--active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('hero__dot--active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  function handleNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSliderPosition();
  }

  function handlePrevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  }

  // Bind click listeners safely
  if (nextBtn) nextBtn.addEventListener('click', handleNextSlide);
  if (prevBtn) prevBtn.addEventListener('click', handlePrevSlide);

  // Connect dot indicators to targeted slides
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlideIndex = index;
      updateSliderPosition();
    });
  });

  // Establish high-utility auto-rotation loops (5-second intervals)
  let autoSlideTimer = setInterval(handleNextSlide, 5000);

  // Clear timers if active user manual interactions interrupt focus arrays
  const stopAutoSlide = () => clearInterval(autoSlideTimer);
  
  if (nextBtn) nextBtn.addEventListener('click', stopAutoSlide);
  if (prevBtn) prevBtn.addEventListener('click', stopAutoSlide);
  dots.forEach(dot => dot.addEventListener('click', stopAutoSlide));
}

/* ==========================================================================
   3. WISHLIST INTERACTIVE TOGGLE CONTROLLER
   ========================================================================== */
function initWishlist() {
  const wishlistButtons = document.querySelectorAll('.product-card__wishlist-btn');

  wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
      // Prevent bubbling clicks from accidentally redirecting users to detail pages
      event.preventDefault();

      const isPressed = btn.getAttribute('aria-pressed') === 'true';
      
      // Update interactive screen traits smoothly
      btn.setAttribute('aria-pressed', !isPressed);

      // Micro-interaction styling switch
      if (!isPressed) {
        btn.style.transform = 'scale(1.2)';
        btn.textContent = '❤️'; // Visual indicator fill change
        setTimeout(() => btn.style.transform = 'none', 150);
      } else {
        btn.textContent = '💜';
      }
    });
  });
}
/* Corrected JavaScript (Fluid Slider Engine with 1-Second Auto-Slide) */
function initHeroSlider() {
  const sliderTrack = document.querySelector('.hero__slider');
  const slides = document.querySelectorAll('.hero__slide');
  const prevBtn = document.querySelector('.hero__nav-btn--prev');
  const nextBtn = document.querySelector('.hero__nav-btn--next');
  const dots = document.querySelectorAll('.hero__dot');

  if (!sliderTrack || slides.length === 0) return;

  let currentSlideIndex = 0;
  const totalSlides = slides.length;

  function updateSliderPosition() {
    // Shift track container left based on active slide index percentage
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 25}%)`;
    
    // Refresh dot class list arrays cleanly
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add('hero__dot--active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('hero__dot--active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  function handleNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSliderPosition();
  }

  function handlePrevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  }

  // Bind click listeners safely
  if (nextBtn) nextBtn.addEventListener('click', handleNextSlide);
  if (prevBtn) prevBtn.addEventListener('click', handlePrevSlide);

  // Connect dot indicators to targeted slides
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlideIndex = index;
      updateSliderPosition();
    });
  });

  // CHANGE MADE HERE: Decreased the interval delay to 1000ms (1 second)
  let autoSlideTimer = setInterval(handleNextSlide, 1000);

  // Clear timers if active user manual interactions interrupt focus arrays
  const stopAutoSlide = () => clearInterval(autoSlideTimer);
  
  if (nextBtn) nextBtn.addEventListener('click', stopAutoSlide);
  if (prevBtn) prevBtn.addEventListener('click', stopAutoSlide);
  dots.forEach(dot => dot.addEventListener('click', stopAutoSlide));
}
