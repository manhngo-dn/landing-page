const $ = (value) => {
  return document.getElementById(value);
};

let navbarItem = document.getElementsByClassName("nav-link");

const removeActive = () => {
  for (let j = 0; j < navbarItem.length; j++) {
    navbarItem[j].classList.remove("active");
  }
};

for (let i = 0; i < navbarItem.length; i++) {
  navbarItem[i].addEventListener("click", () => {
    removeActive();
    navbarItem[i].classList.add("active");
  });
}

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top >= 0 && rect.top <= window.innerHeight * 0.25) ||
    rect.bottom >= window.innerHeight * 0.75
  );
};

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const pricingWrapper = document.querySelector("#pricingWrapper");
const testimonials = document.querySelector("#testimonials");
const download = document.querySelector("#download");

document.addEventListener("scroll", function () {
  if (isInViewport(home)) {
    removeActive();
    navbarItem[0].classList.add("active");
  } else if (isInViewport(about)) {
    $("about").classList.remove("hide");
    removeActive();
    navbarItem[1].classList.add("active");
  } else if (isInViewport(pricingWrapper)) {
    $("pricingWrapper").classList.remove("hide");
    removeActive();
    navbarItem[2].classList.add("active");
  } else if (isInViewport(testimonials)) {
    $("testimonials").classList.remove("hide");
    removeActive();
    navbarItem[3].classList.add("active");
  } else if (isInViewport(download)) {
    $("download").classList.remove("hide");
    removeActive();
    navbarItem[4].classList.add("active");
  }
});
