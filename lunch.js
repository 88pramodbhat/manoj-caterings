const basePrice = 50;
let totalPrice = basePrice;

const optionalItems = [
  { name: "Uppinla (Pickle)", price: 5 },
  { name: "Chatni (Chutney)", price: 10 },
  { name: "Majjige (Buttermilk)", price: 10 },
  { name: "Paisa (Dal)", price: 15 },
  { name: "Payasa (Sweet)", price: 20 },
  { name: "Papad", price: 10 }
];

const container = document.getElementById("items-container");
const priceDisplay = document.getElementById("total-price");

optionalItems.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <label>
      <input type="checkbox" id="item-${index}" onchange="toggleItem(${index})">
      ${item.name} — ₹${item.price}
    </label>
  `;
  container.appendChild(div);
});

function toggleItem(index) {
  const checkbox = document.getElementById(`item-${index}`);
  const itemPrice = optionalItems[index].price;

  if (checkbox.checked) {
    totalPrice += itemPrice;
  } else {
    totalPrice -= itemPrice;
  }

  priceDisplay.textContent = totalPrice;
}
