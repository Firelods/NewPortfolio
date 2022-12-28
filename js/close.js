const cross = document.querySelector("#cross");

cross.addEventListener("click", closeMenu);
var count = 0;

function closeMenu() {
  if (count == 1) {
    location.href = "https://google.com";
  }
  console.log("closeMenu");
  count++;
  const main = document.querySelector("main");
  main.classList.add("secousse");
}
