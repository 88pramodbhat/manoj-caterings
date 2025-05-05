const products = [
  {
    name: "Idli",
    price: "10 per idli",
    image: "caterings_image/Screenshot 2025-05-05 162438.png"
  },
  {
    name: "Uppit Mix",
    price: "30 per plate",
    image: "caterings_image/Screenshot 2025-05-05 162518.png"
  },
  {
    name: "Avalakki (Poha)",
    price: "30 per plate",
    image: "images/Screenshot 2025-05-05 162544.png"
  },
  {
    name: "VADA",
    price: "15 per vada",
    image: "images/Screenshot 2025-05-05 162458.png"
  },
  {
    name: "DOSA",
    price: "40 per dosa",
    image: "images/Screenshot 2025-05-05 162630.png"
  },
  {
    name: "JAMUN",
    price: "10 per jamun",
    image: "images/Screenshot 2025-05-05 162700.png"
  },
  {
    name: "CARROT HALWA",
    price: "1 kg 500",
    image: "images/Screenshot 2025-05-05 162700.png"
  },
  {
    name: "BUNS",
    price: "20 per bun",
    image: "images/Screenshot 2025-05-05 163045.png"
  },
  {
    name: "AVALAKKI BATH",
    price: "30 per plate",
    image: "images/Screenshot 2025-05-05 162825.png"
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
      <p class="price">${product.price}</p>
      <button class="button">See options</button>
    </div>
  `;
  container.appendChild(productEl);
});
