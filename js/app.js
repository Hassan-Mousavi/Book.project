// slider
const slides = document.querySelectorAll(".slide");
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

let curSlide = 0;
const maxSlides = slides.length;
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
// next slide
const nextSlide = function () {
  if (curSlide === maxSlides - 6) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 6;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
// clear codeing
const init = function () {
  goToSlide(0);
};
// EventHandlers
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

// smooth scroll
// document.querySelector(".sort-list").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e.target);
//   if (e.target.classList.contains("sort-link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// sticky navigation
// const nav = document.querySelector(".nav");
// const header = document.querySelector(".header-top");
// const navHeight = nav.getBoundingClientRect().height;
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   // rootMargin: `20px`,
// });
// headerObserver.observe(header);
