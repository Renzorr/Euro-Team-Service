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

tl.from(".hero", {
  x: -100,
  opacity: 0,
  delay: 0.3,
});

gsap.from(".marquee", {
  opacity: 0,
  y: 500,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".marquee",
  },
});

gsap.from(".about", {
  opacity: 0,
  x: -500,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".about",
  },
});

gsap.from(".services-card", {
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".services-card",
  },
});

gsap.from(".swiper", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".swiper",
  },
});

gsap.from(".why-us-container", {
  opacity: 0,
  y: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".why-us-container",
  },
});

gsap.from(".contact", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
  },
});
