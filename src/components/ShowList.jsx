import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import MovieContext from '../context/MovieContext';
import ShowItem from './ShowItem';

function ShowList() {
  const { shows } = useContext(MovieContext);

  useEffect(() => {
    console.log(shows);
  }, []);

  return (
    <div className="recommended">
      {shows &&
        shows.map((show) => {
          return <ShowItem key={show.id} show={show} />;
        })}
    </div>
  );
}

export default ShowList;
