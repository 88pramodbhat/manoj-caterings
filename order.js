const products = [
  {
    name: "Idli",
    price: "10 per idli",
    image: "caterings%20image/Screenshot%202025-05-05%20162438.png"
  },
  {
    name: "Uppit Mix",
    price: "30 per plate",
    image: "caterings%20image/Screenshot%202025-05-05%20162518.png"
  },
  {
    name: "Avalakki (Poha)",
    price: "30 per plate",
    image: "caterings%20image/Screenshot%202025-05-05%20162544.png"
  },
  {
    name: "VADA",
    price: "15 per vada",
    image: "caterings%20image/Screenshot%202025-05-05%20162458.png"
  },
  {
    name: "DOSA",
    price: "40 per dosa",
    image: "caterings%20image/Screenshot%202025-05-05%20162630.png"
  },
  {
    name: "JAMUN",
    price: "10 per jamun",
    image: "caterings%20image/Screenshot%202025-05-05%20162700.png"
  },
  {
    name: "CARROT HALWA",
    price: "1 kg 500",
    image: "caterings%20image/Screenshot%202025-05-05%20162700.png"
  },
  {
    name: "BUNS",
    price: "20 per bun",
    image: "caterings%20image/Screenshot%202025-05-05%20163045.png"
  },
  {
    name: "AVALAKKI BATH",
    price: "30 per plate",
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
      <p class="price">${product.price}</p>
      <button class="button">See options</button>
    </div>
  `;
  container.appendChild(productEl);
});
