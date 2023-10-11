import React, { useState } from 'react';
import bookmarkIconEmpty from '../assets/icon-bookmark-empty.svg';
import bookmarkIconFull from '../assets/icon-bookmark-full.svg';

function ShowItem({ show }) {
  console.log(show);

  const releaseYear = show.first_air_date
    ? show.first_air_date.slice(0, 4)
    : '';

  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleClick() {
    if (!isBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }

  return (
    <div className="card">
      <div className="image-container">
        <img src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}></img>
        <div onClick={handleClick} className="bookmark-icon">
          <img
            src={isBookmarked ? bookmarkIconFull : bookmarkIconEmpty}
            alt="bookmark icon"
          />
        </div>
      </div>
      <div className="card-content">
        <div className="card-info">
          <small>{releaseYear}</small>
          {show.video !== undefined ? <small>show</small> : <small>show</small>}
        </div>
        <div className="card-title fs-300">{show.original_name}</div>
      </div>
    </div>
  );
}

export default ShowItem;
