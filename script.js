let slider = document.querySelector('.product-slider');

setInterval(() => {
  slider.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}, 3000);

