const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});
