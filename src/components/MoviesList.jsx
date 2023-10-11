import React, { useEffect } from 'react';
import { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import Item from './Item';
function MoviesList() {
  const { movies } = useContext(MovieContext);

  useEffect(() => {
    console.log(movies);
  }, []);

  return (
    <div className="recommended">
      {movies &&
        movies.map((movie) => {
          return <Item key={movie.id} movie={movie} />;
        })}
    </div>
  );
}

export default MoviesList;
