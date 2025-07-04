const navBtn = document.querySelector(".nav_toggle");
const navList = document.querySelector(".nav");
const navBtnLine = document.querySelector(".nav_toggle_line");
const menu = document.querySelector(".menu");
// nav-bar mobile
navBtn.addEventListener("click", function () {
  navList.classList.toggle("nav_mobile");
  navBtn.classList.toggle("nav_toggle_icon--open");
  menu.classList.toggle("menu--open");
});
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
// sticky nav
window.addEventListener("scroll", function () {
  const navBar = this.document.querySelector(".navbar");
  if (this.window.scrollY > 250) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});
// user_image-file
document.getElementById("file_input").addEventListener("change", function (e) {
  const file = e.target.file[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const preview = document.getElementById("preview");
      preview.innerHTML = `
      <img src="${e.target.result}"
        alt="پیشنمایش عکس"
        style="max-width:220px;margin-top:20px"
      `;
    };
    reader.readAsDataURL(file);
  }
});
// shaba_number
const inputShaba = document.querySelector(".shaba_number");
const maxDigit = 24;

inputShaba.addEventListener("input", function (e) {
  let value = this.value.replace(/[^0-9]/g);

  if (value.length > maxDigit) {
    value = value.slice(0, maxDigit);
  }
  this.value = value;
});
