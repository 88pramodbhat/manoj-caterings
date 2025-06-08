// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dynamic menu
const menu = [
  { title: "Vegetarian Platter", desc: "Healthy and delicious options" },
  { title: "South Indian Combo", desc: "Idli, Dosa, Vada, Sambar, and more" },
  { title: "North Indian Thali", desc: "Roti, Paneer, Dal, Rice, and Dessert" }
];

const menuContainer = document.getElementById("menu-items");
menu.forEach(item => {
  menuContainer.innerHTML += `
    <div class="menu-item">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
});

// Image slider logic (manual only)
const slider = document.getElementById('slider');
let currentIndex = 0;

function moveSlide(direction) {
  const totalImages = slider.children.length;
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
