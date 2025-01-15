// Nav scroll transition
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Contact Modal
var modal = document.getElementById("contactModal");
var btn = document.querySelector(".cta");
var closeButton = document.querySelector(".close-button");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("show");
});

closeButton.addEventListener("click", function () {
    modal.classList.remove("show");
});

// window.addEventListener("click", function (event) {
//     if (event.target == modal) {
//         modal.classList.remove("show");
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav__links');

    // Toggle burger menu and navigation links
    burger.addEventListener('click', () => {
        burger.classList.toggle('active'); // Add/remove active state for burger
        navLinks.classList.toggle('mobile-visible'); // Toggle visibility for mobile nav
    });

    // Close menu when a link is clicked (including the button inside the Contact link)
    navLinks.addEventListener('click', (event) => {
        // Check if a link (or button inside a link) was clicked
        if (event.target.tagName === 'A' || event.target.closest('a')) {
            burger.classList.remove('active'); // Remove active state from burger
            navLinks.classList.remove('mobile-visible'); // Hide mobile nav
        }
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!burger.contains(event.target) && !navLinks.contains(event.target)) {
            burger.classList.remove('active'); // Remove active state from burger
            navLinks.classList.remove('mobile-visible'); // Hide mobile nav
        }
    });
});

