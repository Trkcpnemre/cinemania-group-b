
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '52238d7fab5c2c01b99e751619dd16ec';

async function fetchTrendingMovie() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
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

async function fetchCategories() {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  renderCategories(data.genres);
}

function renderCategories(genres) {
  const categorySection = document.getElementById('category');
  if (!categorySection) return;

  categorySection.innerHTML = genres
    .map(
      genre => `
        <div class="category-card">${genre.name}</div>
      `
    )
    .join('');
}

fetchTrendingMovie();
fetchCategories();

export { fetchTrendingMovie, updateHero, fetchCategories, renderCategories };
