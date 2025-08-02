const API_KEY = "b6c855953e6ab59244d0d2488c301375";
const BASE_URL = "https://api.themoviedb.org/3";


// For Popular Movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// For Search
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};


// For Animation
export const getAnimationMovies = async () => {
  const response = await fetch (
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
  );
  const data = await response.json();
  return data.results;
};

// https://api.themoviedb.org/3/movie/popular?api_key=b6c855953e6ab59244d0d2488c301375
