function openMobileChoose(e) {
  document.getElementById("coins").style.display = "block";
  var n =
    1 == e
      ? document.getElementById("sendCoins")
      : document.getElementById("receiveCoins");
  n.classList.remove("mobileHide"),
    (n.style.display = "block"),
    n.scrollIntoView();
}
function searchCoin(e) {
  const n = document.querySelectorAll(".coin-" + (1 == e ? 1 : 2));
  var c = document.getElementById("searchValue" + e).value.toUpperCase();
  console.log(c),
    n.forEach((e) => {
      e.style.display = "flex";
    }),
    n.forEach((n) => {
      (n.className.includes(c) &&
        !n.className.includes(1 == e ? coinReceive : coinSend)) ||
        (n.style.display = "none");
    });
}
let menuBtn = document.querySelector(".header__burger"),
  menu = document.querySelector(".header__burger-content");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("header__burger_active"),
    menu.classList.toggle("header__burger-content_active");
});
const links = Array.from(menu.children);
function closeOnClick() {
  menuBtn.classList.remove("header__burger_active"),
    menu.classList.remove("header__burger-content_active");
}
links.forEach((e) => {
  e.addEventListener("click", closeOnClick);
});
