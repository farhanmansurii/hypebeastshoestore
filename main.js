const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);