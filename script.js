//Add hamburger menu
var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var navlinks = document.querySelector(".nav-toggle");
function onClickMenu() {
    menu.classList.toggle("change");
    navlinks.classList.toggle("nav-toggle");
    console.log("Change class applied!");
}



menu.addEventListener("click", onClickMenu);
