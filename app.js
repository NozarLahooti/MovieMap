// Add Button Function
function addMovie() {
    const movieName = document.getElementById('movieInput').value.trim();
    if (!movieName) return;  
    const list = document.getElementById('movieList');
    list.innerHTML += `<li>${movieName}</li>`;
    document.getElementById('movieInput').value = ''; 
  }
  