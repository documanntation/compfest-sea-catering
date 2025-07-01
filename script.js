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

let modal;
let closeButton;

function openModal(planType) {
  const plan = mealPlanData[planType];
  if (plan) {
    if (!modal) modal = document.getElementById("planDetailsModal");
    if (!closeButton) closeButton = document.querySelector(".close-button");

    if (!modal || !closeButton) {
      console.error(
        "ERROR: Modal or Close Button not found in DOM when trying to open."
      );
      return;
    }

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

    modalPlanFeatures.innerHTML = "";
    plan.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      modalPlanFeatures.appendChild(li);
    });

    modalTypicalMeals.textContent = plan.typicalMeals;
    modalCalories.textContent = plan.calories;
    modalSideDish.textContent = plan.sideDishOptions;
    modalRiceType.textContent = plan.riceType;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

let testimonials = [
  {
    name: "Sarah W.",
    message:
      "SEA Catering has transformed my diet! The meals are delicious and perfectly portioned. Highly recommended!",
    rating: 5,
  },
  {
    name: "Brian K.",
    message:
      "As a busy professional, their customizable meal plans are a lifesaver. Healthy, fresh, and always on time.",
    rating: 4,
  },
  {
    name: "Emily R.",
    message:
      "I love the variety and how easy it is to track my nutrition. The vegan options are fantastic!",
    rating: 5,
  },
  {
    name: "David L.",
    message:
      "Great service and quality food. Sometimes delivery is a bit late, but overall very satisfied.",
    rating: 4,
  },
  {
    name: "Jessica M.",
    message:
      "Finally, healthy food that tastes amazing! My family loves it too.",
    rating: 5,
  },
];

let testimonialSlider;
let prevTestimonialBtn;
let nextTestimonialBtn;
let testimonialForm;
let formMessage;
let currentTestimonialIndex = 0;

function getStarRatingHtml(rating) {
  let starsHtml = "";
  for (let i = 0; i < 5; i++) {
    starsHtml += i < rating ? "&#9733;" : "&#9734;";
  }
  return `<div class="rating-display">${starsHtml}</div>`;
}

function renderTestimonials() {
  if (!testimonialSlider) {
    console.error("Testimonial slider element not initialized!");
    return;
  }
  testimonialSlider.innerHTML = "";
  testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.classList.add("testimonial-card");
    testimonialCard.innerHTML = `
            <p class="review-message">"${testimonial.message}"</p>
            <p class="customer-name">- ${testimonial.name}</p>
            ${getStarRatingHtml(testimonial.rating)}
        `;
    testimonialSlider.appendChild(testimonialCard);
  });
  updateSliderPosition();
}

function updateSliderPosition() {
  if (
    !testimonialSlider ||
    !testimonialSlider.querySelector(".testimonial-card")
  ) {
    return;
  }

  const cardElement = testimonialSlider.querySelector(".testimonial-card");
  const cardComputedStyle = window.getComputedStyle(cardElement);
  const cardWidth = cardElement.offsetWidth;
  const marginLeft = parseFloat(cardComputedStyle.marginLeft);
  const marginRight = parseFloat(cardComputedStyle.marginRight);
  const totalCardWidth = cardWidth + marginLeft + marginRight;

  testimonialSlider.style.transform = `translateX(-${
    currentTestimonialIndex * totalCardWidth
  }px)`;
}

document.addEventListener("DOMContentLoaded", function () {
  modal = document.getElementById("planDetailsModal");
  closeButton = document.querySelector(".close-button");
  testimonialSlider = document.querySelector(".testimonial-slider");
  prevTestimonialBtn = document.querySelector(".prev-testimonial");
  nextTestimonialBtn = document.querySelector(".next-testimonial");
  testimonialForm = document.getElementById("testimonialForm");
  formMessage = document.getElementById("formMessage");

  if (!modal)
    console.error(
      "Initialization Error: Modal HTML element (id='planDetailsModal') not found!"
    );
  if (!closeButton)
    console.error(
      "Initialization Error: Modal close button (.close-button) not found!"
    );
  if (!testimonialSlider)
    console.error(
      "Initialization Error: Testimonial slider element (.testimonial-slider) not found!"
    );
  if (!testimonialForm)
    console.error(
      "Initialization Error: Testimonial form element (id='testimonialForm') not found!"
    );
  if (!formMessage)
    console.error(
      "Initialization Error: Form message element (id='formMessage') not found!"
    );

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
      alert("Manager: Brian,Phone Number: 08123456789");
    });
  }

  // Feature Items
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

  const seeMoreButtons = document.querySelectorAll(".see-more-btn");
  seeMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const planType = this.dataset.plan;
      openModal(planType);
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  if (modal) {
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        closeModal();
      }
    });
  }

  // --- Event Listener untuk tombol Testimonial Slider ---
  if (nextTestimonialBtn) {
    nextTestimonialBtn.addEventListener("click", () => {
      currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonials.length;
      updateSliderPosition();
    });
  }

  if (prevTestimonialBtn) {
    prevTestimonialBtn.addEventListener("click", () => {
      currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonials.length) %
        testimonials.length;
      updateSliderPosition();
    });
  }

  if (testimonialForm) {
    testimonialForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("customerName").value.trim();
      const message = document.getElementById("reviewMessage").value.trim();
      const ratingInput = document.querySelector(
        'input[name="rating"]:checked'
      );

      if (!name || !message || !ratingInput) {
        formMessage.textContent =
          "Please fill in all fields and provide a rating.";
        formMessage.style.color = "red";
        return;
      }

      const newTestimonial = {
        name: name,
        message: message,
        rating: parseInt(ratingInput.value),
      };

      testimonials.push(newTestimonial);
      renderTestimonials();
      testimonialForm.reset();
      formMessage.textContent =
        "Thank you for your review! It has been submitted.";
      formMessage.style.color = "green";

      currentTestimonialIndex = testimonials.length - 1;
      updateSliderPosition();
    });
  }

  renderTestimonials();

  window.addEventListener("resize", updateSliderPosition);
});
