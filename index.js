    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const cardWidth = carousel.querySelector("#project__list").offsetWidth;
    
    let currentOffset = 0;
  
    function moveCarousel(direction) {
      if (direction === "next") {
        currentOffset -= cardWidth * 2;
      } else {
        currentOffset += cardWidth * 2;
      }
  
      if (currentOffset < -carousel.offsetWidth) {
        currentOffset = 0;
      } else if (currentOffset > 0) {
        currentOffset = -carousel.offsetWidth + cardWidth * 2;
      }
  
      carousel.style.transform = `translateX(${currentOffset}px)`;
    }
  
    prevBtn.addEventListener("click", function() {
      moveCarousel("prev");
    });
  
    nextBtn.addEventListener("click", function() {
      moveCarousel("next");
    });

    

  