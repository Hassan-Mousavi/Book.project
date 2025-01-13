// number of input-basket
document.querySelector(".Basket-input").addEventListener("input", function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
});

// smooth scroll
document.querySelector(".sort-list").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("sort-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// sticky navigation
const nav = document.querySelector(".nav");
const header = document.querySelector(".header-top");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: `20px`,
});
headerObserver.observe(header);

// const sicon = document.querySelector(".search-icon");
// const input = document.querySelector(".nav-search");
// sicon.onclick = function (e) {
//   input.style.height = "10rem";
// };
