// Data for the products
const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 20.00,
    image: "images/product1.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 35.00,
    image: "images/product2.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 50.00,
    image: "images/product3.jpg"
  }
];

let cart = [];
let promoCodeUsed = false;

// Function to display products
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = '';

  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
    productList.appendChild(productElement);
  });
}

// Function to add products to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.product.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCart();
}

// Function to update cart display and total
function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = '';

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.product.price * item.quantity;
    cartItemsElement.innerHTML += `
      <p>${item.product.name} (x${item.quantity}) - $${(item.product.price * item.quantity).toFixed(2)}</p>
    `;
  });

  // Update subtotal
  document.getElementById("subtotal").textContent = subtotal.toFixed(2);

  // Update total (discount will be applied later)
  calculateTotal(subtotal);
}

// Function to calculate the total (with discount)
function calculateTotal(subtotal) {
  let discount = 0;
  const promoCodeInput = document.getElementById("promo-code").value;

  if (promoCodeUsed) {
    alert("Promo code has already been used.");
    return;
  }

  if (promoCodeInput === "ostad10") {
    discount = subtotal * 0.10;
    promoCodeUsed = true;
  } else if (promoCodeInput === "ostad5") {
    discount = subtotal * 0.05;
    promoCodeUsed = true;
  }

  const total = subtotal - discount;

  // Update discount and total in the UI
  document.getElementById("discount").textContent = discount.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
}

// Function to apply promo code
document.getElementById("apply-promo").addEventListener("click", function () {
  const subtotal = parseFloat(document.getElementById("subtotal").textContent);
  calculateTotal(subtotal);
});

// Function to clear the cart
document.getElementById("clear-cart").addEventListener("click", function () {
  cart = [];
  promoCodeUsed = false;
  updateCart();
});

// Function to checkout (for now, just a message)
document.getElementById("checkout").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Proceeding to checkout...");
  }
});

// Initialize the product display
displayProducts();

