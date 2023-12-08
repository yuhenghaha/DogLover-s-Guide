/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
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