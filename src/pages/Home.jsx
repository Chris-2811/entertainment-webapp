import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecomendedList from '../components/RecomendedList';

function Home() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <div className="container">
          <SearchBar />
          <RecomendedList />
        </div>
      </div>
    </>
  );
}

export default Home;
