
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");

let itemCount = 0;


cartIcon.addEventListener("click", () => {
    itemCount++;
    updateCartCount();
});


function updateCartCount() {
    cartCount.textContent = itemCount;
}

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

const cartItems = [];

function updateCartCount() {
    cartCount.textContent = cartItems.length;
}



