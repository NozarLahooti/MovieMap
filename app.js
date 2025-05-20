// Make Cards
const movieList = ["12 Angry Men", "Papillon", "God Father"];
const container = document.querySelector('.container');
for (let i = 0; i < movieList.length; i ++){
    const p = document.createElement('p');
    p.textContent = movieList[i];
    container.appendChild(p)
}

// Add Button Function

function addMovie() {
    const movieName = document.getElementById('movieInput').value.trim();
    if (!movieName) return;  
    const list = document.getElementById('movieList');
    const li = document.createElement('li');
    li.textContent = movieName;
    list.appendChild(li);
    document.getElementById('movieInput').value = ''; 
  }

// Add Button Dynamically Using Function

const button = document.querySelector('#addButton');
const input = document.getElementById('movieInput');

button.addEventListener('click', addMovie);

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addMovie();
  }
});
