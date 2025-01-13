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

