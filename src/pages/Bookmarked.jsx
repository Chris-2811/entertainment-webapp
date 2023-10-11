import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BookmarkedMovies from '../components/BookmarkedMovies';

function Bookmarked() {
  return (
    <div className="grid-container">
      <Header />
      <div className="container">
        <SearchBar />
        <BookmarkedMovies />
      </div>
    </div>
  );
}

export default Bookmarked;
