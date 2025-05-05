const products = [
  {
    name: "Idli & Dosas",
    author: "Tarla Dalal",
    date: "Jan 1, 2007",
    rating: 3.5,
    reviews: 12,
    price: "$8.21",
    image: "images/idli_dosa.png"
  },
  {
    name: "Uppit Mix",
    author: "Homemade Special",
    date: "Feb 10, 2022",
    rating: 4.2,
    reviews: 21,
    price: "$4.99",
    image: "images/uppit.png"
  },
  {
    name: "Avalakki (Poha)",
    author: "Natural Grains",
    date: "Mar 3, 2023",
    rating: 4.5,
    reviews: 30,
    price: "$3.79",
    image: "images/avalakki.png"
  }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  const stars = "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating));
  const productEl = document.createElement("div");
  productEl.classList.add("product");
  productEl.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="details">
      <h2>${product.name}</h2>
      <p>by ${product.author} | ${product.date}</p>
      <p class="rating">${stars} (${product.reviews})</p>
      <p class="price">${product.price}</p>
      <button class="button">See options</button>
    </div>
  `;
  container.appendChild(productEl);
});
