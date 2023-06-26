const menuHamburger = document.querySelector(".menu");
const navBar = document.querySelector("nav");

//MENU RESPONSIVE
menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

// CARROUSEL DE FLOTA
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  breakpoints: {
    600: {
      spaceBetween: 15,
    },
  },
});

//GSAP SCROLL ANIMATIONS
let tl = gsap.timeline();

tl.from(".header", { y: -100, opacity: 0, duration: 1, ease: "ease" });

tl.from(
  ".hero",
  {
    x: -100,
    opacity: 0,
  },
  "+=.5"
);

tl.from(".marquee", {
  scrollTrigger: {
    trigger: ".marquee",
    start: "bottom bottom",
  },
  opacity: 0,
  y: 500,
  duration: 1,
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "bottom bottom",
  },
  opacity: 0,
  x: -500,
  duration: 0.7,
});

gsap.from(".services-card", {
  scrollTrigger: {
    trigger: ".services-card",
    start: "bottom bottom",
  },
  opacity: 0,
  duration: 0.7,
  stagger: 0.6,
});

gsap.from(".swiper", {
  scrollTrigger: {
    trigger: ".swiper",
    start: "bottom bottom",
  },
  opacity: 0,
  duration: 1,
});

gsap.from(".why-us-container", {
  scrollTrigger: {
    trigger: ".why-us-container",
    start: "bottom bottom",
  },
  opacity: 0,
  y: -300,
  duration: 1,
});

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "bottom bottom",
  },
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "power4.out",
});
