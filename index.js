var swiper = new Swiper(".card_slider", {
  spaceBetween: 30,
  loop : true,
  speed :1000,
  autoplay:{
    delay : 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

let toggler = document.getElementById("bars__toggle");
let navbar = document.getElementById("navbar__container");
let menus = document.getElementById("menu__list");
let closeNavbar = document.getElementById("close__navbar");

closeNavbar.addEventListener('click',()=>{
  navbar.style.display = 'none';
})

function toggleNavbarVisibility() {
  if (window.innerWidth <= 768) { // Adjust the value as per your requirement
    navbar.style.display = 'none';
    menus.addEventListener('click',()=>{
      navbar.style.display = 'none';
    })
  } else {
    navbar.style.display = 'flex';
    menus.addEventListener('click',()=>{
      navbar.style.display = 'flex';
    })
  }
}

// Initial check on page load
toggleNavbarVisibility();
toggler.addEventListener('click',()=>{
  if (navbar.style.display === 'none' || navbar.style.display === '') {
    navbar.style.display = 'block'; 
  } else {
    navbar.style.display = 'none'; 
  }
})


// Event listener to adjust navbar visibility on window resize
window.addEventListener('resize', toggleNavbarVisibility);