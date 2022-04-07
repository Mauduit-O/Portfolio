var menu = document.getElementById("menu");
var opener = document.getElementById("open-menu");
console.log(opener);

opener.addEventListener("click", function() {
  menu.classList.toggle("is-open");
});
