const products = [
  {
    name: "Idli",
    price: "10",
    image: "caterings%20image/Screenshot%202025-05-05%20162438.png"
  },
  {
    name: "Uppit Mix",
    price: "30",
    image: "caterings%20image/Screenshot%202025-05-05%20162518.png"
  },
  {
    name: "Avalakki (Poha)",
    price: "30",
    image: "caterings%20image/Screenshot%202025-05-05%20162544.png"
  },
  {
    name: "VADA",
    price: "15",
    image: "caterings%20image/Screenshot%202025-05-05%20162458.png"
  },
  {
    name: "DOSA",
    price: "40",
    image: "caterings%20image/Screenshot%202025-05-05%20162630.png"
  },
  {
    name: "JAMUN",
    price: "10",
    image: "caterings%20image/Screenshot%202025-05-05%20162700.png"
  },
  {
    name: "CARROT HALWA",
    price: "500",
    image: "caterings%20image/Screenshot%202025-05-05%20162742.png"
  },
  {
    name: "BUNS",
    price: "20",
    image: "caterings%20image/Screenshot%202025-05-05%20163045.png"
  },
  {
    name: "AVALAKKI BATH",
    price: "30",
    image: "caterings%20image/Screenshot%202025-05-05%20162825.png"
  }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  const productEl = document.createElement("div");
  productEl.classList.add("product");
  productEl.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="details">
      <h2>${product.name}</h2>
      <p class="price">₹${product.price}</p>
      <button class="button see-options">See options</button>
      <button class="button add-to-cart">Add to Cart</button>
    </div>
  `;
  container.appendChild(productEl);

  const addToCartButton = productEl.querySelector(".add-to-cart");
  addToCartButton.addEventListener("click", () => {
    // Redirect to cart page with name and price as URL parameters
    window.location.href = `cart.html?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}`;
  });
});
