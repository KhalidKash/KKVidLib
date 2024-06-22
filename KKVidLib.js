const API_KEY = 'YOUR_TMDB_API_KEY';
const API_URL = 'https://api.themoviedb.org/3/search/movie';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function searchMovie() {
    const query = document.getElementById('movie-search').value;
    const response = await fetch(`${API_URL}?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    displayMovieInfo(data.results);
}

function displayMovieInfo(movies) {
    const movieInfoDiv = document.getElementById('movie-info');
    movieInfoDiv.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-details');
        movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${IMAGE_URL + movie.poster_path}" alt="${movie.title}" width="200">
            <p><strong>Release Date:</strong> ${movie.release_date}</p>
            <p><strong>Overview:</strong> ${movie.overview}</p>
        `;
        movieInfoDiv.appendChild(movieDiv);
    });
}
