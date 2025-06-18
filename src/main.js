import { fetchTrendingMovie } from './js/hero.js';
import { loadHTML } from './js/loader.js';
import { loadMovies } from './js/catalog.js'



document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

loadHTML("header", "./partials/header.html");
document.addEventListener('DOMContentLoaded', async () => {
    
    await loadHTML("hero", "./partials/hero.html");
    await loadHTML("catalog-gallery", "./partials/catalog-gallery.html");
    await loadMovies();
    await fetchTrendingMovie();
    await fetchCategories();
});
