// لتعديل المنيو لاحقًا: أضف صنفًا أو غيّر السعر داخل القائمة المناسبة.
// السعر بالجنيه المصري، ولا تكتب كلمة "جنيه" داخل رقم السعر.
const menu = [
  {
    id: "hot",
    name: "المشروبات الساخنة",
    icon: "☕",
    items: [
      { name: "شاي", price: 15 },
      { name: "قهوة تركي", price: 25 },
      { name: "قهوة فرنساوي", price: 40 }
    ]
  },
  {
    id: "fresh",
    name: "العصائر والمشروبات الباردة",
    icon: "🍹",
    items: [
      { name: "عناب", price: 35 },
      { name: "مانجو فريش", price: 60 },
      { name: "فراولة فريش", price: 60 },
      { name: "جوافة فريش", price: 60 },
      { name: "موز فريش", price: 60 }
    ]
  },
  {
    id: "cans",
    name: "الكانز والمشروبات الغازية",
    icon: "🥤",
    items: [
      { name: "بيبسي", price: 35 },
      { name: "فيوري", price: 35 },
      { name: "تويست", price: 35 },
      { name: "V-Cola", price: 40 },
      { name: "ستينج", price: 40 }
    ]
  }
];

const nav = document.getElementById("category-nav");
const content = document.getElementById("menu-content");

function showCategory(id) {
  const category = menu.find(section => section.id === id) || menu[0];
  nav.querySelectorAll("button").forEach(button => {
    button.classList.toggle("active", button.dataset.id === category.id);
  });
  content.innerHTML = `
    <h3 class="category-title">${category.icon} ${category.name}</h3>
    <div class="items">
      ${category.items.map(item => `
        <article class="item">
          <span class="item-name">${item.name}</span>
          <span class="item-price">${item.price} <small>جنيه</small></span>
        </article>
      `).join("")}
    </div>`;
}

menu.forEach((section, index) => {
  const button = document.createElement("button");
  button.className = "category-btn" + (index === 0 ? " active" : "");
  button.textContent = section.name;
  button.dataset.id = section.id;
  button.addEventListener("click", () => showCategory(section.id));
  nav.appendChild(button);
});
showCategory(menu[0].id);
