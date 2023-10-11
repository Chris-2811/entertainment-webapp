import React, { useContext, useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/search-mobile.svg';
import MovieContext from '../context/MovieContext';
import { useLocation } from 'react-router-dom';

function SearchBar() {
  const { searchAPIData } = useContext(MovieContext);
  const [text, setText] = useState('');

  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    searchAPIData(text);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function getByPlaceholderText() {
    switch (location.pathname) {
      case '/movies':
        return 'Search for movies';
      case '/shows':
        return 'Search for TV series';
      case '/bookmarked':
        return 'Search for bookmarked shows';
      default:
        return 'Search for movies or TV series';
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-icon-container">
        <SearchIcon />
      </div>
      <input
        type="text"
        id="search"
        name="search"
        placeholder={getByPlaceholderText()}
        onChange={handleChange}
        value={text}
      />
    </form>
  );
}

export default SearchBar;
