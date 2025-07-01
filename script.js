// script.js

const btnSignUp = document.getElementById("btnSignUp");
if (btnSignUp) {
  btnSignUp.addEventListener("click", function () {
    alert("Anda mengklik tombol Sign up!");
  });
}

const btnContact = document.getElementById("btnContact");
if (btnContact) {
  btnContact.addEventListener("click", function () {
    alert("Manager: Brian, Phone Number: 08123456789");
  });
}

const btnCafeMenu = document.getElementById("btnCafeMenu");
if (btnCafeMenu) {
  btnCafeMenu.addEventListener("click", function () {
    alert("Tombol Cafe Menu diklik!");
  });
}

const navContactUs = document.getElementById("navContactUs");
if (navContactUs) {
  navContactUs.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Anda mengklik link Contact Us di Navbar!");
  });
}

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

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.textContent === "Home" && currentPath === "/") {
      link.classList.add("active");
    } else if (
      link.textContent === "Home" &&
      (currentPath.includes("index.html") || currentPath.includes("home.html"))
    ) {
      link.classList.add("active");
    } else if (
      link.textContent === "Meal Plans" &&
      currentPath.includes("meal-plans.html")
    ) {
      link.classList.add("active");
    } else if (
      link.textContent === "Subscription" &&
      currentPath.includes("subscription.html")
    ) {
      link.classList.add("active");
    } else if (
      link.textContent === "Contact Us" &&
      currentPath.includes("contact-us.html")
    ) {
      link.classList.add("active");
    }
  });
});
