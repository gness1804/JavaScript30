function debounce(func, wait = 20, immediate = true, ...args) {
  let timeout;
  return function() {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = () => {
  sliderImages.forEach(img => {
    // the bottom of the screen
    const screenBottom = window.scrollY + window.innerHeight;
    // halfway through the image vertically
    const slideInAtPos = screenBottom - img.height / 2;
    // the bottom of the image.
    const imageBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAtPos > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
};

document.addEventListener('scroll', debounce(checkSlide, 100));
