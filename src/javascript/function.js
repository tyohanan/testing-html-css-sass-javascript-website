var x = document.getElementById("main");
function myfunction() {
  if (x.getElementsByClassName("main-1")) {
    x.classList.remove("main-1");
    x.classList.add("main-2");
  }
}

function myanother() {
  if (x.getElementsByClassName("main-2")) {
    x.classList.remove("main-2");
    x.classList.add("main-1");
  }
}
