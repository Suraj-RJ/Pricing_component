"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleArea = document.querySelector(".toggle-area");
const basicPrice = document.querySelector(".price-1");
const profPrice = document.querySelector(".price-2");
const masterPrice = document.querySelector(".price-3");

toggleArea.addEventListener("click", function (e) {
  e.preventDefault();
  if (toggleArea.classList.contains("monthly")) {
    toggleArea.classList.remove("monthly");
    toggleArea.classList.add("annually");
    basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">₹</span>14,999</p>`;
    profPrice.innerHTML = `<p class="price-2"> <span class="dollar-sign">₹</span>19,999</p>`;
    masterPrice.innerHTML = `<p class="price-3"> <span class="dollar-sign">₹</span>29,999</p>`;
  } else {
    toggleArea.classList.add("monthly");
    toggleArea.classList.remove("annually"); // Corrected typo
    basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">₹</span>1,499</p>`;
    profPrice.innerHTML = `<p class="price-2"> <span class="dollar-sign">₹</span>2,499</p>`;
    masterPrice.innerHTML = `<p class="price-3"> <span class="dollar-sign">₹</span>3,499</p>`;
  }
});
