"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener("click", openModal);
}

// closes on X or overlay click
btn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	// console.log("Key pressed");
	// console.log(e);

	// esc = "Escape"
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});
