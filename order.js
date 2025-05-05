<!DOCTYPE html>
<html>
<head>
  <title>Menu</title>
  <style>
    .product { border: 1px solid #ccc; padding: 10px; margin: 10px; }
    .details { margin-top: 10px; }
    .button { margin: 5px; }
    #cart { margin-top: 30px; padding: 10px; border-top: 2px solid black; }
  </style>
</head>
<body>
  <h1>Product List</h1>
  <div id="product-list"></div>

  <div id="cart">
    <h2>Cart</h2>
    <ul id="cart-items"></ul>
    <h3 id="total">Total: ₹0</h3>
  </div>

  <script>
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

    let cart = [];
    let total = 0;

    products.forEach(product => {
      const productEl = document.createElement("div");
      productEl.classList.add("product");
      productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="150">
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
        // Add to cart array
        cart.push(product);
        total += product.price;

        // Update cart UI
        const li = document.createElement("li");
        li.textContent = `${product.name} - ₹${product.price}`;
        cartItems.appendChild(li);

        // Update total
        totalEl.textContent = `Total: ₹${total}`;
      });
    });
  </script>
</body>
</html>
