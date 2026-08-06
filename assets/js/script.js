// Mobile nav toggle
function menuOnClick() {
  document.body.classList.toggle("menu-active");
}

window.addEventListener("scroll", function () {
  document.body.classList.remove("menu-active");
});

// let prevScrollpos = window.pageYOffset;

// window.addEventListener("scroll", function () {
//   const nav = document.querySelector(".site-header");
//   if (nav) {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       nav.classList.remove("hide-site-header");
//     } else {
//       nav.classList.add("hide-site-header");
//     }
//     prevScrollpos = currentScrollPos;
//   }
// });

const demoBtns = document.querySelectorAll(".demo-btn");
const demoWrappers = document.querySelectorAll(".demo-wrapper");

demoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    demoBtns.forEach((b) => b.classList.remove("active"));
    demoWrappers.forEach((w) => w.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

const params = new URLSearchParams(window.location.search);
const service = params.get("service");

const serviceMap = {
  branding: "Branding & Print Design",
  "website-development": "Website Development",
  "social-media": "Social Media Creatives",
  "ai-ads": "AI Ads & Video Content",
  "digital-ads": "Google & Meta Ads",
  "business-solutions": "Business Solutions",
};

const serviceDropdown = document.getElementById("service");

if (service && serviceMap[service] && serviceDropdown) {
  serviceDropdown.value = serviceMap[service];
}

/* Portfolio Filter */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    portfolioCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const cards = document.querySelectorAll(".showcase-link");

const modal = document.querySelector(".gallery-modal");
const modalImg = document.getElementById("galleryImg");

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();

    modal.style.display = "flex";

    modalImg.src = this.querySelector("img").src;
  });
});

const close = document.querySelector(".gallery-close");

close.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {});
