// =========================
// SEARCH FUNCTION
// =========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".yacht-card");

cards.forEach(card => {

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});