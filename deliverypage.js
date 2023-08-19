document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartCount = document.getElementById("cart-count");
    const cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const menuItem = button.closest('.menu-item');
            const itemName = menuItem.querySelector('p').textContent;
            cartItems.push(itemName);
            updateCartCount();
            showCartItems();
        });
    });

    function updateCartCount() {
        cartCount.textContent = cartItems.length;
    }

    function showCartItems() {
        const cartItemsList = document.querySelector('.cart-items-list');
        cartItemsList.innerHTML = '';

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItemsList.appendChild(li);
        });
    }
});
