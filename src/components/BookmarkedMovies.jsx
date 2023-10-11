import React, { useEffect } from 'react';
import { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import Item from './Item';
function BookmarkedMovies() {
  const { bookmarkedMovies } = useContext(MovieContext);

  useEffect(() => {
    console.log(bookmarkedMovies);
  }, []);

  return (
    <>
      <div className="section-heading">Bookmarked Movies</div>
      <div className="recommended">
        {bookmarkedMovies &&
          bookmarkedMovies.map((movie) => {
            return <Item key={bookmarkedMovies.id} movie={bookmarkedMovies} />;
          })}
      </div>
    </>
  );
}

export default BookmarkedMovies;
