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


function setUniformH2Height() {
    const servicesItems = document.querySelectorAll('.services-list h2');
    let maxHeight = 0;

    // Reset heights to auto for recalculation
    servicesItems.forEach(item => {
        item.style.height = 'auto'; // Reset height to auto
        maxHeight = Math.max(maxHeight, item.offsetHeight); // Get max height
    });

    // Set all h2 elements to the maximum height
    servicesItems.forEach(item => {
        item.style.height = `${maxHeight}px`; // Set uniform height
    });
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    setUniformH2Height(); // Set height on initial load

    // Recalculate heights on window resize
    window.addEventListener('resize', setUniformH2Height);
    
    // Recalculate heights after all images are loaded
    window.addEventListener('load', setUniformH2Height);
});




// document.addEventListener('DOMContentLoaded', () => {
//     // Select all the service items
//     const serviceItems = document.querySelectorAll('.services-list > div');
//     const itemsToShow = 4; // Number of items to show at a time
//     const totalItems = serviceItems.length;
//     let currentIndex = 0; // Keep track of the current visible set of items

//     // Select the buttons
//     const previousBtn = document.getElementById('previousBtn');
//     const nextBtn = document.getElementById('nextBtn');

//     // Function to show the current set of items
//     const showItems = () => {
//         serviceItems.forEach((item, index) => {
//             // Show the items within the range (currentIndex to currentIndex + itemsToShow)
//             if (index >= currentIndex && index < currentIndex + itemsToShow) {
//                 item.style.display = 'block'; // Show the item
//             } else {
//                 item.style.display = 'none'; // Hide the item
//             }
//         });

//         // Show/Hide the buttons based on current index
//         if (currentIndex === 0) {
//             previousBtn.style.visibility = 'hidden'; // Hide Previous button when at start
//             nextBtn.style.visibility = 'visible'; // Show Next button
//         } else if (currentIndex === totalItems - itemsToShow) {
//             previousBtn.style.visibility = 'visible'; // Show Previous button
//             nextBtn.style.visibility = 'hidden'; // Hide Next button when at the end
//         } else {
//             previousBtn.style.visibility = 'visible'; // Show Previous button in the middle
//             nextBtn.style.visibility = 'visible'; // Show Next button in the middle
//         }
//     };

//     // Initial call to display the first 4 items (1, 2, 3, 4)
//     showItems();

//     // Handle the "Next" button click
//     nextBtn.addEventListener('click', () => {
//         // Move to the next set of items
//         currentIndex++;

//         // If we are at the last set, loop back to the beginning
//         if (currentIndex + itemsToShow > totalItems) {
//             currentIndex = 0; // Loop back to the first set
//         }

//         showItems(); // Update the display based on the new index
//     });

//     // Handle the "Previous" button click
//     previousBtn.addEventListener('click', () => {
//         // Move to the previous set of items
//         currentIndex--;

//         // If we are at the beginning, loop to the last set
//         if (currentIndex < 0) {
//             currentIndex = totalItems - itemsToShow; // Loop back to the last set
//         }

//         showItems(); // Update the display based on the new index
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.services-list > div');
    const totalItems = serviceItems.length;
    let currentIndex = 0; // Keep track of the current visible set of items
    const previousBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Function to show the current set of items
    const showItems = (itemsToShow) => {
        serviceItems.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + itemsToShow) {
                item.style.display = 'block'; // Show the item
            } else {
                item.style.display = 'none'; // Hide the item
            }
        });

        // Show/Hide the buttons based on current index
        if (currentIndex === 0) {
            previousBtn.style.visibility = 'hidden'; // Hide Previous button when at start
            nextBtn.style.visibility = 'visible'; // Show Next button
        } else if (currentIndex === totalItems - itemsToShow) {
            previousBtn.style.visibility = 'visible'; // Show Previous button
            nextBtn.style.visibility = 'hidden'; // Hide Next button when at the end
        } else {
            previousBtn.style.visibility = 'visible'; // Show Previous button in the middle
            nextBtn.style.visibility = 'visible'; // Show Next button in the middle
        }
    };

    // Function to update the number of items to show based on the screen size
    const updateItemsToShow = () => {
        let itemsToShow;

        // Check screen width
        if (window.innerWidth <= 768) {
            itemsToShow = 6; // On mobile, show all 6 items
        } else {
            itemsToShow = 4; // On desktop, show 4 items
        }

        showItems(itemsToShow); // Update display based on the screen size
    };

    // Initial call to display the correct number of items based on screen size
    updateItemsToShow();

    // Handle the "Next" button click
    nextBtn.addEventListener('click', () => {
        const itemsToShow = window.innerWidth <= 768 ? 6 : 4; // Update items to show based on screen size
        currentIndex++;

        if (currentIndex + itemsToShow > totalItems) {
            currentIndex = 0; // Loop back to the first set
        }

        showItems(itemsToShow); // Update the display based on the new index
    });

    // Handle the "Previous" button click
    previousBtn.addEventListener('click', () => {
        const itemsToShow = window.innerWidth <= 768 ? 6 : 4; // Update items to show based on screen size
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = totalItems - itemsToShow; // Loop back to the last set
        }

        showItems(itemsToShow); // Update the display based on the new index
    });

    // Handle window resize to adjust the number of items being shown
    window.addEventListener('resize', updateItemsToShow);
});


  




