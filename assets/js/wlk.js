  let currentSlide = 0;

    function moveSlide(direction) {
      const slides = document.querySelectorAll(".wlk-thrg");
      const totalSlides = slides.length;

      currentSlide += direction;

      if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
      } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
      }

      const slider = document.querySelector(".slides-sld");
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    document.querySelectorAll("iframe").forEach(iframe => {
      iframe.parentElement.addEventListener("mouseover", () => {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      });

      iframe.parentElement.addEventListener("mouseout", () => {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      });
    });