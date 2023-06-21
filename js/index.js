const menuHamburger = document.querySelector(".menu");
const navBar = document.querySelector("nav");

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  breakpoints: {
    600: {
      spaceBetween: 15,
    },
  },
});
