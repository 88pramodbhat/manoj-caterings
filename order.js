const products = [
  { name: "Idli", price: 10, image: "caterings%20image/Screenshot%202025-05-05%20162438.png" },
  { name: "Uppit Mix", price: 30, image: "caterings%20image/Screenshot%202025-05-05%20162518.png" },
  { name: "Avalakki (Poha)", price: 30, image: "caterings%20image/Screenshot%202025-05-05%20162544.png" },
  { name: "VADA", price: 15, image: "caterings%20image/Screenshot%202025-05-05%20162458.png" },
  { name: "DOSA", price: 40, image: "caterings%20image/Screenshot%202025-05-05%20162630.png" },
  { name: "JAMUN", price: 10, image: "caterings%20image/Screenshot%202025-05-05%20162700.png" },
  { name: "CARROT HALWA", price: 500, image: "caterings%20image/Screenshot%202025-05-05%20162742.png" },
  { name: "BUNS", price: 20, image: "caterings%20image/Screenshot%202025-05-05%20163045.png" },
  { name: "AVALAKKI BATH", price: 30, image: "caterings%20image/Screenshot%202025-05-05%20162825.png" }
];

const container = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const payButton = document.getElementById("pay-upi");

let cart = [];

function updateCartDisplay() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    const itemTotal = item.price * item.quantity;
    li.textContent = `${item.name} - ₹${item.price} x ${item.quantity} = ₹${itemTotal}`;
    cartItems.appendChild(li);
    total += itemTotal;
  });

  totalEl.textContent = `Total: ₹${total}`;
}

products.forEach(product => {
  const productEl = document.createElement("div");
  productEl.classList.add("product");
  productEl.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="details">
      <h2>${product.name}</h2>
      <p class="price">₹${product.price}</p>
      <button class="button add-to-cart">Add to Cart</button>
    </div>
  `;
  container.appendChild(productEl);

  const addToCartButton = productEl.querySelector(".add-to-cart");
  addToCartButton.addEventListener("click", () => {
    let quantity = prompt(`How many plates of ${product.name} do you want?`);
    quantity = parseInt(quantity);
    if (!quantity || quantity <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ name: product.name, price: product.price, quantity });
    }

    updateCartDisplay();
  });
});

// Pay via UPI
payButton.addEventListener("click", () => {
  let totalAmount = 0;
  cart.forEach(item => {
    totalAmount += item.price * item.quantity;
  });

  if (totalAmount === 0) {
    alert("Your cart is empty!");
    return;
  }

  const upiID = "yourupi@upi"; // CHANGE this to your actual UPI ID
  const name = "Your Catering";
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${totalAmount}&cu=INR`;

  // Redirect to UPI app (GPay, PhonePe, etc.)
  window.location.href = upiLink;
});
