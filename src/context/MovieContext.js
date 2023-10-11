import { createContext } from 'react';
import { useState, useEffect } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [topMovies, setTopMovies] = useState();
  const [topShows, setTopShows] = useState();
  const [searchResults, setSearchResults] = useState();
  const [movies, setMovies] = useState();
  const [shows, setShows] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedShows, setBookmarkedShows] = useState([]);

  useEffect(() => {
    fetchTopMoviesFromAPI();
    fetchTopShowsFromAPI();
    fetchMoviesFromAPI();
    fetchShowsFromAPI();
  }, []);

  // Fetch top movies from api
  async function fetchTopMoviesFromAPI() {
    const API_KEY = '05e1c39526cfcad16d30aae45602a17f';

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    const data = await response.json();

    setTopMovies(data.results);
  }

  // Fetch top shows from api
  async function fetchTopShowsFromAPI() {
    const API_KEY = '05e1c39526cfcad16d30aae45602a17f';

    const response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
    );
    const data = await response.json();

    setTopShows(data.results);
  }

  // Search movies and shows
  async function search() {}

  // fetch search api data
  async function searchAPIData(term) {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '05e1c39526cfcad16d30aae45602a17f';
    const response = await fetch(
      `${API_URL}search/multi?api_key=${API_KEY}&query=${term}`
    );

    const data = await response.json();

    setSearchResults(data.results);
  }

  // fetch popular movies
  async function fetchMoviesFromAPI() {
    const API_KEY = '05e1c39526cfcad16d30aae45602a17f';

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );

    const data = await response.json();

    setMovies(data.results);
  }

  /* fetch popular shows */
  async function fetchShowsFromAPI() {
    const API_KEY = '05e1c39526cfcad16d30aae45602a17f';

    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
    );

    const data = await response.json();

    setShows(data.results);
  }
  return (
    <MovieContext.Provider
      value={{
        topMovies,
        topShows,
        searchResults,
        movies,
        shows,
        isLoggedIn,
        bookmarkedMovies,
        bookmarkedShows,
        setBookmarkedMovies,
        setIsLoggedIn,
        searchAPIData,
        setBookmarkedShows,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
