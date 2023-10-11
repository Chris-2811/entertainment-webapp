import React from 'react';
import { useState, useContext } from 'react';
import bookmarkIconEmpty from '../assets/icon-bookmark-empty.svg';
import bookmarkIconFull from '../assets/icon-bookmark-full.svg';
import MovieContext from '../context/MovieContext';

function RecommendedItem({ movie }) {
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : '';

  const [isBookmarked, setIsBookmarked] = useState(false);

  const {
    bookmarkedMovies,
    setBookmarkedMovies,
    bookmarkedShows,
    setBookmarkedShows,
    movies,
    setMovies,
  } = useContext(MovieContext);

  function handleClick(e) {
    if (
      e.target.classList.contains('bookmark-icon') ||
      e.target.parentElement.classList.contains('bookmark-icon')
    ) {
      const id = e.target.closest('[data-id]').getAttribute('data-id');

      console.log(e.target);

      console.log(movies);
      if (!isBookmarked) {
        const object = movies.filter((movie) => {
          console.log(movie.id);
          console.log(id);
          return movie.id === parseInt(id);
        });

        console.log(object);

        setBookmarkedMovies((prevState) => [...prevState, ...object]);
        console.log(bookmarkedMovies);

        setIsBookmarked(true);
      } else {
        const id = e.target.closest('[data-id]').getAttribute('data-id');

        const updateBookmarkedMovies = bookmarkedMovies.filter((movie) => {
          return movie.id !== parseInt(id);
        });

        console.log(updateBookmarkedMovies);

        setBookmarkedMovies(updateBookmarkedMovies);

        setIsBookmarked(false);
      }
    }
  }

  return (
    <div className="card">
      <div className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        ></img>
        <div onClick={handleClick} className="bookmark-icon" data-id={movie.id}>
          <img
            src={isBookmarked ? bookmarkIconFull : bookmarkIconEmpty}
            alt="bookmark icon"
          />
        </div>
      </div>
      <div className="card-content">
        <div className="card-info">
          <small>{releaseYear}</small>
          {movie.video !== undefined ? (
            <small>movie</small>
          ) : (
            <small>show</small>
          )}
        </div>
        <div className="card-title fs-300">{movie.title}</div>
      </div>
    </div>
  );
}

export default RecommendedItem;
