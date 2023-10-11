import React from 'react';
import Header from '../components/Header';
import ShowList from '../components/ShowList';
import SearchBar from '../components/SearchBar';

function Shows() {
  return (
    <div className="grid-container">
      <Header />
      <div className="container">
        <SearchBar />
        <ShowList />
      </div>
    </div>
  );
}

export default Shows;
