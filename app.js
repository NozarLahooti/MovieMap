// Make Cards
const movieList = ["12 Angry Men", "Papillon", "God Father"];
const container = document.querySelector(".container");
for (let i = 0; i < movieList.length; i++) {
  const p = document.createElement("p");
  p.textContent = movieList[i];
  container.appendChild(p);
}

// Add Button Function with Alert

function addMovie() {
  const movieName = document.getElementById("movieInput").value.trim();
  if (!movieName) {
    alert("Please enter a movie name!");
    return;
  }
  if (movieName.length < 4) {
    alert("Movie Name Must Be At Least 4 Letter!");
    return
  }
  const list = document.getElementById("movieList");
  const li = document.createElement("li");
  li.textContent = movieName;
  list.appendChild(li);
  document.getElementById("movieInput").value = "";
}

// Add Button Dynamically Using Function

const button = document.querySelector("#addButton");
const input = document.getElementById("movieInput");

button.addEventListener("click", addMovie);

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addMovie();
  }
});

// Botton Style

button.style.borderRadius = "20px";
button.style.padding = "10px 30px";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";

// Input Style

const h2 = container.firstElementChild;
const myInput = h2.nextElementSibling;
myInput.style.border = "1px solid #ccc";
myInput.style.borderRadius = "20px";
myInput.style.padding = "10px";
myInput.style.fontSize = "16px";
myInput.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";

// New Box

const movieList2 = ["Inception", "Interstellar", "Dunkirk"];
const cardBox2 = document.createElement("div");
cardBox2.style.border = "1px solid #ccc";
cardBox2.style.padding = "10px";
cardBox2.style.borderRadius = "8px";

for (let i = 0; i < movieList2.length; i++) {
  const p = document.createElement("p");
  p.textContent = movieList2[i];
  cardBox2.appendChild(p);
}
container.appendChild(cardBox2);

// Fragment Form

const f = document.createDocumentFragment();
const user = ["name", "email", "phone"];
user.forEach((item) => {
  const input = document.createElement("input");
  input.type = "text";
  input.name = item;
  input.placeholder = item;
  f.appendChild(input);
});
document.getElementById("form").appendChild(f);

// Making Responsive 

if (window.innerWidth < 768) {
  container.style.maxWidth = "280px"; // makes screen smaller on mobile
} else {
  container.style.maxWidth = "400px"; // makes screen larger on desktop
}

// Add input event

form.addEventListener("input", e => {
  if (e.target.name === "email")
    e.target.style.borderColor = e.target.value.split("@").length > 1 ? "" : "red";
});
