(function() {
    const carousel = document.querySelector('.carousel');
    const figures = carousel.getElementsByTagName('figure');
    let currentIndex = 0;
    const interval = 3000; // Cambiar imagen cada 3 segundos

    setInterval(changeSlide, interval);

    function changeSlide() {
      currentIndex = (currentIndex + 1) % figures.length;
      carousel.scrollLeft = currentIndex * carousel.offsetWidth;
    }
  })();