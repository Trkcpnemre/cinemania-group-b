const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '52238d7fab5c2c01b99e751619dd16ec';

async function fetchTrendingMovie() {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await response.json();
  const movie = data.results[0];
  updateHero(movie);
}

function updateHero(movie) {
  const heroTitle = document.querySelector('.hero-title');
  const heroDescription = document.querySelector('.hero-description');
  const heroContainer = document.querySelector('.hero-container');

  heroTitle.textContent = movie.title;
  heroDescription.textContent = movie.overview;
  heroContainer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
}

fetchTrendingMovie();