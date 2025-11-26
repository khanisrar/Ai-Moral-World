// Mobile nav toggle
function menuOnClick() {
    document.body.classList.toggle("menu-active");
}

window.addEventListener("scroll", function () {
    document.body.classList.remove("menu-active");
});