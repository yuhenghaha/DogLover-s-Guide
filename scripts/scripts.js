const menuIcon = document.querySelector(".menuIcon");
const header = document.querySelector(".header");
const body = document.querySelector(".body");
menuIcon.addEventListener("click", () => {
  if (header.style.height === "200px") {
    header.style.height = "40px";
  } else {
    header.style.height = "200px";
  }
});