// Make Cards
const movieList = ["12 Angry Men", "Papillon", "God Father"];
const container = document.querySelector(".container");
for (let i = 0; i < movieList.length; i++) {
  const p = document.createElement("p");
  p.textContent = movieList[i];
  container.appendChild(p);
}

// Add Button Function

function addMovie() {
  const movieName = document.getElementById("movieInput").value.trim();
  if (!movieName) return;
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
myInput.style.border = '1px solid #ccc';
myInput.style.borderRadius = '20px';
myInput.style.padding = '10px';
myInput.style.fontSize = '16px';
myInput.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';

