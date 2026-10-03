/* =========================================================
SUCCUPIE JAVASCRIPT
========================================================= */

/* =========================================================
NAVIGATION
========================================================= */

const navButtons = document.querySelectorAll(".nav-button");
const pageSections = document.querySelectorAll(".page-section");

navButtons.forEach((button) => {


button.addEventListener("click", () => {

    const targetSection = button.dataset.section;


    /* Remove active state from every button */

    navButtons.forEach((btn) => {
        btn.classList.remove("active");
    });


    /* Activate clicked button */

    button.classList.add("active");


    /* Hide every page */

    pageSections.forEach((section) => {
        section.classList.remove("active-section");
    });


    /* Show selected page */

    const target = document.getElementById(targetSection);

    if (target) {
        target.classList.add("active-section");
    }


    /* Scroll back to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


});

/* =========================================================
FAQ ACCORDION
========================================================= */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {


question.addEventListener("click", () => {

    const currentItem =
        question.closest(".faq-item");


    /* Close other FAQ items */

    document.querySelectorAll(".faq-item").forEach((item) => {

        if (item !== currentItem) {
            item.classList.remove("open");
        }

    });


    /* Toggle current FAQ */

    currentItem.classList.toggle("open");

});


});

/* =========================================================
BANNER FALLBACK
========================================================= */

const bannerImage =
document.querySelector(".banner-image");

if (bannerImage) {


bannerImage.addEventListener("error", () => {

    console.warn(
        "Succupie: image/banner.png could not be found."
    );

    bannerImage.style.display = "none";

});


}

/* =========================================================
DEVELOPER IMAGE FALLBACK
========================================================= */

const developerImages =
document.querySelectorAll(".developer-photo");

developerImages.forEach((image) => {


image.addEventListener("error", () => {

    console.warn(
        `Succupie: ${image.getAttribute("src")} could not be found.`
    );

    image.style.opacity = "0.15";

});


});

/* =========================================================
STEAM BUTTON
========================================================= */

const steamButton =
document.querySelector(".steam-button");

if (steamButton) {


steamButton.addEventListener("click", () => {

    console.log(
        "Opening Succupie Steam page..."
    );

});


}

/* =========================================================
SMALL RETRO TITLE EFFECT
========================================================= */

const heroTitle =
document.querySelector(".hero h1");

if (heroTitle) {


heroTitle.addEventListener("mouseenter", () => {

    heroTitle.style.transform =
        "skewX(-3deg) scale(1.03)";

});


heroTitle.addEventListener("mouseleave", () => {

    heroTitle.style.transform = "";

});


}
