// const carousel = document.querySelector(".carousel");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const cardWidth = carousel.querySelector("#project__list").offsetWidth;

// let currentOffset = 0;

// function moveCarousel(direction) {
//   if (direction === "next") {
//     currentOffset -= cardWidth * 2;
//   } else {
//     currentOffset += cardWidth * 2;
//   }

//   if (currentOffset < -carousel.offsetWidth) {
//     currentOffset = 0;
//   } else if (currentOffset > 0) {
//     currentOffset = -carousel.offsetWidth + cardWidth * 2;
//   }

//   carousel.style.transform = `translateX(${currentOffset}px)`;
// }

// prevBtn.addEventListener("click", function() {
//   moveCarousel("prev");
// });

// nextBtn.addEventListener("click", function() {
//   moveCarousel("next");
// });

// let slider = document.getElementById("infinite__slider");
// let item = document.getElementById("project__list__items");

// function next() {
//   slider.append(item[0]);
// }

// function prev() {
//   slider.prepend(item[item.length - 1]);
// }


let slider = document.getElementById("infinite__slider");
let items = document.querySelectorAll("#project__list__items");

function next() {
  let firstItem = slider.children[0];
  let clone = firstItem.cloneNode(true);
  slider.appendChild(clone);
  slider.removeChild(firstItem);
  // Reset scroll position to 0
  slider.scrollLeft = 0;
  // Apply transition effect by setting transform property
  slider.style.transition = "transform 1.5s ease";
  slider.style.transform = `translateX(-${firstItem.offsetWidth}px)`;
  // Reset transform after the transition ends
  setTimeout(() => {
    slider.style.transition = "";
    slider.style.transform = "translateX(0)";
  }, 1500);
}

function prev() {
  let lastItem = slider.children[slider.children.length - 1];
  let clone = lastItem.cloneNode(true);
  slider.prepend(clone);
  slider.removeChild(lastItem);
  // Reset scroll position to 0
  slider.scrollLeft = 0;
  // Apply transition effect by setting transform property
  slider.style.transition = "transform 1.5s ease";
  slider.style.transform = `translateX(${lastItem.offsetWidth}px)`;
  // Reset transform after the transition ends
  setTimeout(() => {
    slider.style.transition = "";
    slider.style.transform = "translateX(0)";
  }, 1500);
}

