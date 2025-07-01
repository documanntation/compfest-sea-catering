// script.js

// Data Meal Plan (Bisa di sini atau di dalam DOMContentLoaded)
const mealPlanData = {
  basic: {
    name: "Basic Fit Plan",
    image: "./assets/dish-1.jpg",
    price: "IDR 500.000 / week",
    description:
      "Perfect for a balanced diet with essential nutrients. Includes 10 meals per week, designed for general well-being and maintaining a healthy lifestyle. Focuses on whole foods and lean proteins.",
    features: [
      "10 Meals per week (5 lunch, 5 dinner)",
      "Balanced macronutrients",
      "Weekly rotating menu",
      "Delivery every Monday",
    ],
    typicalMeals:
      "Grilled Chicken Breast with Quinoa & Steamed Veggies, Lentil Soup with Whole Wheat Bread, Fish Fillet with Brown Rice & Broccoli.",
    calories: "Approx. 1500-1800 kcal/day",
    sideDishOptions: "Steamed Vegetables, Roasted Potatoes, Sauteed Greens",
    riceType: "Brown Rice, White Rice, Quinoa",
  },
  ultimatasty: {
    name: "The Ultimatasty",
    image: "./assets/dish-2.jpg",
    price: "IDR 750.000 / week",
    description:
      "High-fat, low-carb meals designed for people who want to enjoy a usual diet. Includes 12 meals per week.",
    features: [
      "12 Meals per week (6 lunch, 6 dinner)",
      "High-fat, flexible carb intake",
      "Delicious and satisfying recipes",
      "Ideal for a balanced yet enjoyable diet",
    ],
    typicalMeals:
      "Cheesy Baked Pasta, Creamy Mushroom Chicken, Beef Stew with Potatoes.",
    calories: "Approx. 2000-2500 kcal/day",
    sideDishOptions: "Garlic Bread, Mashed Potatoes, Creamy Spinach",
    riceType: "White Rice, Fried Rice, No Rice Option",
  },
  vegan: {
    name: "Vegan Delight Plan",
    image: "./assets/dish-3.jpg",
    price: "IDR 600.000 / week",
    description:
      "Wholesome plant-based meals, rich in flavor and nutrition. All meals are 100% vegan, free from animal products. Includes 10 meals per week.",
    features: [
      "10 Meals per week (5 lunch, 5 dinner)",
      "100% plant-based ingredients",
      "Rich in fiber and vitamins",
      "Environmentally friendly",
    ],
    typicalMeals:
      "Chickpea Curry with Basmati Rice, Vegan Lasagna with Cashew Cream, Tofu Scramble with Roasted Sweet Potatoes.",
    calories: "Approx. 1600-1900 kcal/day",
    sideDishOptions: "Roasted Root Vegetables, Steamed Kale, Quinoa Salad",
    riceType: "Brown Rice, Quinoa, Gluten-Free Pasta",
  },
};

// Deklarasi variabel global untuk modal dan tombol penutup (ini masih diperlukan)
let modal;
let closeButton;

// Fungsi untuk membuka modal (PERBAIKI INI!)
function openModal(planType) {
  const plan = mealPlanData[planType];
  if (plan) {
    // Ambil referensi ke elemen modal dan tombol close jika belum terdeklarasi
    if (!modal) modal = document.getElementById("planDetailsModal");
    if (!closeButton) closeButton = document.querySelector(".close-button");

    // Pastikan modal dan closeButton ditemukan sebelum melanjutkan
    if (!modal || !closeButton) {
      console.error("ERROR: Modal or Close Button not found in DOM.");
      return; // Hentikan fungsi jika elemen penting tidak ditemukan
    }

    // Ambil referensi ke elemen-elemen di dalam modal SETIAP KALI MODAL DIBUKA
    // Ini memastikan elemen selalu terbaru dan tidak ada masalah inisialisasi
    const modalPlanName = document.getElementById("modalPlanName");
    const modalPlanImage = document.getElementById("modalPlanImage");
    const modalPlanPrice = document.getElementById("modalPlanPrice");
    const modalPlanDescription = document.getElementById(
      "modalPlanDescription"
    );
    const modalPlanFeatures = document.getElementById("modalPlanFeatures");
    const modalTypicalMeals = document.getElementById("modalTypicalMeals");
    const modalCalories = document.getElementById("modalCalories");
    const modalSideDish = document.getElementById("modalSideDish");
    const modalRiceType = document.getElementById("modalRiceType");

    // Lakukan pengecekan tambahan jika elemen internal modal juga bisa null
    if (
      !modalPlanName ||
      !modalPlanImage ||
      !modalPlanPrice ||
      !modalPlanDescription ||
      !modalPlanFeatures ||
      !modalTypicalMeals ||
      !modalCalories ||
      !modalSideDish ||
      !modalRiceType
    ) {
      console.error(
        "ERROR: One or more internal modal content elements not found!"
      );
      return;
    }

    modalPlanName.textContent = plan.name;
    modalPlanImage.src = plan.image;
    modalPlanPrice.textContent = plan.price;
    modalPlanDescription.textContent = plan.description;

    modalPlanFeatures.innerHTML = ""; // Bersihkan dulu
    plan.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      modalPlanFeatures.appendChild(li);
    });

    modalTypicalMeals.textContent = plan.typicalMeals;
    modalCalories.textContent = plan.calories;
    modalSideDish.textContent = plan.sideDishOptions;
    modalRiceType.textContent = plan.riceType;

    modal.style.display = "flex"; // Tampilkan modal
    document.body.style.overflow = "hidden"; // Nonaktifkan scroll body
  }
}

// Fungsi untuk menutup modal
function closeModal() {
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Aktifkan kembali scroll body
  }
}

/* --- HANYA ADA SATU document.addEventListener('DOMContentLoaded') --- */
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi elemen modal dan tombol close setelah DOM siap
  // Ini penting agar variabel 'modal' dan 'closeButton' punya nilai
  modal = document.getElementById("planDetailsModal");
  closeButton = document.querySelector(".close-button");

  // Lakukan pengecekan awal apakah modal dan closeButton ditemukan
  if (!modal) {
    console.error(
      "Initialization Error: Modal HTML element (id='planDetailsModal') not found! Check your HTML structure."
    );
    return; // Hentikan eksekusi jika modal tidak ditemukan
  }
  if (!closeButton) {
    console.error(
      "Initialization Error: Modal close button (.close-button) not found!"
    );
    // Jangan return, karena modal masih bisa ditutup dengan klik di luar
  }

  // --- Event Listeners untuk semua tombol/link (semuanya di sini) ---

  // Navbar & Hero Section Buttons
  const btnSignUp = document.getElementById("btnSignUp");
  if (btnSignUp) {
    btnSignUp.addEventListener("click", function () {
      alert("Anda mengklik tombol Sign up!");
    });
  }

  const btnContact = document.getElementById("btnContact");
  if (btnContact) {
    btnContact.addEventListener("click", function () {
      alert(
        "Manager: Brian, Phone Number: +628123456789 (from Hero Contact Us)"
      );
    });
  }

  const btnCafeMenu = document.getElementById("btnCafeMenu");
  if (btnCafeMenu) {
    btnCafeMenu.addEventListener("click", function () {
      alert("Tombol Our Special Menu diklik!");
    });
  }

  const navContactUs = document.getElementById("navContactUs");
  if (navContactUs) {
    navContactUs.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Anda mengklik link Contact Us di Navbar!");
    });
  }

  // Feature Items (Mouse Enter/Leave)
  const featureItems = document.querySelectorAll(".feature-item");
  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      console.log(
        `Mouse masuk ke fitur: ${this.querySelector("h3").textContent}`
      );
    });
    item.addEventListener("mouseleave", function () {
      console.log(
        `Mouse keluar dari fitur: ${this.querySelector("h3").textContent}`
      );
    });
  });

  // Logika Highlight Halaman Aktif di Navbar
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const linkPath = new URL(link.href, window.location.origin).pathname;
    const currentFileName = currentPath.split("/").pop();
    const linkFileName = linkPath.split("/").pop();

    if (
      link.textContent === "Home" &&
      (currentPath === "/" ||
        currentFileName === "index.html" ||
        currentFileName === "")
    ) {
      link.classList.add("active");
    } else if (
      link.textContent === "Meal Plans" &&
      linkFileName === "meal-plans.html"
    ) {
      link.classList.add("active");
    } else if (
      link.textContent === "Subscription" &&
      linkFileName === "subscription.html"
    ) {
      link.classList.add("active");
    } else if (
      link.textContent === "Contact Us" &&
      linkFileName === "contact-us.html"
    ) {
      link.classList.add("active");
    }
  });

  // --- Logika Modal "See More Details" ---
  const seeMoreButtons = document.querySelectorAll(".see-more-btn");
  seeMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const planType = this.dataset.plan;
      openModal(planType);
    });
  });

  // Event listener untuk tombol silang di modal
  if (closeButton) {
    // Pastikan closeButton ada sebelum menambahkan listener
    closeButton.addEventListener("click", closeModal);
  }

  // Menutup modal jika area gelap di luar modal diklik
  if (modal) {
    // Pastikan modal ada sebelum menambahkan listener
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        closeModal();
      }
    });
  }
}); // <--- PENUTUP UNTUK SATU-SATUNYA DOMContentLoaded
