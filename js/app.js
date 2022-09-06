//              NavBar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const header__navbar = document.querySelector("header__navbar--a");
  header.classList.toggle("header__abajo", window.scrollY > 0);
  header__navbar.classList.toggle("a", window.scrollY > 0);
});

//              Cursor
const cursor = document.querySelector(".cursor");
const cursordos = document.querySelector(".cursordos");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText =
    cursordos.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
});

//        Menu

const button = document.querySelector(".span-burger");
const burger = document.querySelector(".burger2")
const nav = document.querySelector(".header__navbar");

button.addEventListener("click", () => {
  nav.classList.toggle("activo");
  burger.classList.toggle("activo");
});
