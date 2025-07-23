const API_KEY = "a20f8496"; // Your OMDb API Key

async function searchMovies() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return alert("Please enter a movie name!");

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
  const res = await fetch(url);
  const data = await res.json();

  const movieResults = document.getElementById('movieResults');
  movieResults.innerHTML = "";

  if (data.Response === "True") {
    const movies = data.Search.slice(0, 6); // Limit results
    for (const movie of movies) {
      const detailsRes = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}&plot=short`);
      const details = await detailsRes.json();

      const card = `
        <div class="movie-card">
          <img src="${details.Poster !== "N/A" ? details.Poster : 'https://via.placeholder.com/200x300'}" alt="${details.Title}">
          <div class="movie-info">
            <h3>${details.Title}</h3>
            <p><strong>Year:</strong> ${details.Year}</p>
            <p><strong>Rating:</strong> ${details.imdbRating}</p>
            <p>${details.Plot}</p>
          </div>
        </div>
      `;
      movieResults.innerHTML += card;
    }
  } else {
    movieResults.innerHTML = `<p>No results found!</p>`;
  }
}
