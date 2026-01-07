// Mobile nav toggle
function menuOnClick() {
    document.body.classList.toggle("menu-active");
}

window.addEventListener("scroll", function () {
    document.body.classList.remove("menu-active");
});

const demoBtns = document.querySelectorAll('.demo-btn');
const demoWrappers = document.querySelectorAll('.demo-wrapper');

demoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        demoBtns.forEach(b => b.classList.remove('active'));
        demoWrappers.forEach(w => w.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});
