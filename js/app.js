// slider
const slides = document.querySelectorAll(".slide");
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

let curSlide = 0;
let curSlide_1 = 0;
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
// second slider
const slides_1 = document.querySelectorAll(".slide_1");
slides_1.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const btnRight_1 = document.querySelector(".slider_btn--right");
const btnLeft_1 = document.querySelector(".slider_btn--left");
const maxSlides_1 = slides_1.length;
const goToSlide_1 = function (slide) {
  slides_1.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
const nextSlide_1 = function () {
  if (curSlide_1 === maxSlides_1 - 5) {
    curSlide_1 = 0;
  } else {
    curSlide_1++;
  }
  goToSlide_1(curSlide_1);
};
const prevSlide_1 = function () {
  if (curSlide_1 === 0) {
    curSlide_1 = maxSlides_1 - 5;
  } else {
    curSlide_1--;
  }
  goToSlide_1(curSlide_1);
};
// clear codeing
const init_1 = function () {
  goToSlide_1(0);
};
setInterval(() => nextSlide(curSlide), 4000);
setInterval(() => nextSlide_1(curSlide_1), 4000);

// EventHandlers new
btnRight_1.addEventListener("click", nextSlide_1);
btnLeft_1.addEventListener("click", prevSlide_1);

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
