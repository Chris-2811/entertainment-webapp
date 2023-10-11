import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';

function Movies() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <div className="container">
          <SearchBar />
          <MoviesList />
        </div>
      </div>
    </>
  );
}

export default Movies;
