/* ================= NAVBAR (MOBILE TOGGLE) ================= */
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when link is clicked
    navList.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ================= PRODUCTS DATA ================= */

  const products = [
    { name: "Samsung Galaxy S23", price: 74999, image: "image/samsung_Galaxy_s23.jpg" },
    { name: "Samsung Galaxy A15", price: 14999, image: "image/samsung_a_15.jpg" },

    { name: "Vivo V29", price: 32999, image: "image/vivoV295G.jpg" },
    { name: "Vivo Y20", price: 12999, image: "image/vivoy20.jpg" },

    { name: "Oppo Reno 10", price: 34999, image: "image/oppo_reno10pro.jpg" },
    { name: "Oppo A38", price: 13999, image: "image/oppoA38.jpg" },

    { name: "Realme Narzo 60", price: 17999, image: "image/realme_narzo60.jpg" },
    { name: "Realme C55", price: 11999, image: "image/realmec55.jpg" },

    { name: "Poco X5 Pro", price: 22999, image: "image/poco_x5pro.jpg" },
    { name: "Poco M6", price: 10999, image: "image/poco_m6.jpg" },
    //electronic appliances

    { name: "Voltas 1.5 Ton AC", price: 32999, image: "image/ac_voltas.jpg", category: "electronics" },
    { name: "LG Frost Free Refrigerator", price: 28999, image: "image/fridge_lg.jpg", category: "electronics" },
    { name: "Whirlpool Deep Freezer 250L", price: 19999, image: "image/freezer_whirlpool.jpg", category: "electronics" },
    { name: "Samsung 43\" Smart TV", price: 24999, image: "image/tv_samsung43.jpg", category: "electronics" },
    { name: "IFB 6kg Washing Machine", price: 14999, image: "image/wash_ifb.jpg", category: "electronics" },
    { name: "Samsung Microwave 25L", price: 6999, image: "image/microwave_samsung.jpg", category: "electronics" }
  ];

  /* ================= RENDER PRODUCTS ================= */

  const productList = document.getElementById("product-list");

  function displayProducts(items) {
    if (!productList) return;

    productList.innerHTML = "";

    items.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price.toLocaleString("en-IN")}</p>
      `;

      productList.appendChild(card);
    });
  }

  // Initial load
  displayProducts(products);

});
