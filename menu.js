// منيو الدوار كافيه
// الأسعار بالجنيه المصري

const menu = [
  {
    id: "hot",
    name: "المشروبات الساخنة",
    icon: "☕",
    items: [
      { name: "شاي", price: 15 },
      { name: "شاي براد", price: 20 },
      { name: "شاي أخضر", price: 20 },
      { name: "يانسون", price: 20 },
      { name: "زنجبيل", price: 20 },
      { name: "كركديه ساخن", price: 20 },
      { name: "قرفة", price: 20 },
      { name: "حلبة", price: 20 },
      { name: "قهوة تركي", price: 25 },
      { name: "كوفي ميكس", price: 25 },
      { name: "نسكافيه بلاك", price: 25 },
      { name: "كوكتيل أعشاب ساخن", price: 25 },
      { name: "قهوة فرنساوي", price: 40 },
      { name: "قهوة بندق", price: 40 },
      { name: "قرفة حليب", price: 40 },
      { name: "حلبة حليب", price: 40 },
      { name: "هوت سيدر", price: 40 },
      { name: "حمص الشام", price: 40 },
      { name: "سحلب", price: 70 }
    ]
  },
  {
    id: "fresh",
    name: "العصائر والمشروبات الباردة",
    icon: "🍹",
    items: [
      { name: "عناب", price: 35 },
      { name: "ليمون فريش", price: 35 },
      { name: "ليمون نعناع", price: 35 },
      { name: "مانجو فريش", price: 50 },
      { name: "فراولة فريش", price: 50 },
      { name: "جوافة فريش", price: 50 },
      { name: "موز فريش", price: 50 },
      { name: "كوكتيل فواكه فريش", price: 60 }
    ]
  },
  {
    id: "cans",
    name: "الكانز والمشروبات الغازية",
    icon: "🥤",
    items: [
      { name: "بيبسي", price: 35 },
      { name: "ستينج", price: 35 },
      { name: "فيوري", price: 40 },
      { name: "تويست", price: 40 },
      { name: "شويبس", price: 40 },
      { name: "بريل", price: 40 },
      { name: "V-Cola", price: 40 },
      { name: "ريد بول", price: 75 }
    ]
  },
  {
    id: "water",
    name: "المياه المعدنية",
    icon: "💧",
    items: [
      { name: "مياه صغيرة", price: 10 },
      { name: "مياه كبيرة", price: 20 }
    ]
  },
  {
    id: "shisha",
    name: "الشيشة",
    icon: "🌿",
    items: [
      { name: "قص وسلوم (الحجر)", price: 12.5 },
      { name: "شيشة فواكه", price: 60 },
      { name: "شيشة فواكه فاخر", price: 70 }
    ]
  },
  {
    id: "internet",
    name: "كروت الإنترنت",
    icon: "📶",
    items: [
      { name: "كارت إنترنت", price: 10 }
    ]
  },
  {
    id: "playstation",
    name: "البلايستيشن",
    icon: "🎮",
    items: [
      { name: "ساعة فردي", price: 30 },
      { name: "ساعة زوجي", price: 40 }
    ]
  }
];

// ترتيب الأصناف تصاعديًا حسب السعر مع الحفاظ على ترتيب الأصناف المتساوية
menu.forEach(section => {
  section.items.sort((a, b) => a.price - b.price);
});

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
