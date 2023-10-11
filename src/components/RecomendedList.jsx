import React, { useEffect } from 'react';
import { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import Item from './Item';

function RecomendedList() {
  const { topMovies, topShows, searchResults } = useContext(MovieContext);

  console.log(searchResults);

  return (
    <div className="recommended">
      {topMovies &&
        topMovies.map((movie) => {
          return <Item key={movie.id} movie={movie} />;
        })}
    </div>
  );
}

export default RecomendedList;
