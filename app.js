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
