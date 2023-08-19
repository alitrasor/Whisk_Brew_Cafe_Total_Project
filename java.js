const cart = [];

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.classList.toggle('show');
  updateCart();
}

function addToCart(itemName, price, imageSrc) {
  cart.push({ name: itemName, price: price, image: imageSrc });
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  const cartItemsList = document.getElementById('cart-items-list');
  
  cartCount.textContent = cart.length;
  cartItemsList.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <p>${item.name} - £${item.price.toFixed(2)}</p>
        </div>
      </div>
    `;
    cartItemsList.appendChild(cartItem);
  });
}
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show-nav');
  }
  const video = document.querySelector('video');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
