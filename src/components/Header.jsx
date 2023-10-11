import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as WindowIcon } from '../assets/icon-nav-home.svg';
import { ReactComponent as MovieIcon } from '../assets/icon-nav-movies.svg';
import { ReactComponent as ShowIcon } from '../assets/icon-nav-tv-series.svg';
import { ReactComponent as BookmarkIcon } from '../assets/icon-nav-bookmark.svg';
import logo from '../assets/logo.svg';
import avatar from '../assets/image-avatar.png';
import MovieContext from '../context/MovieContext';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(MovieContext);

  console.log(location.pathname);

  return (
    <div className="header-container">
      <header className="bg-semi-dark-blue">
        <div className="flex-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul className="nav-list flex">
              <li>
                <Link
                  to="/"
                  className={`nav-item ${
                    location.pathname === '/' ? 'active' : ''
                  }`}
                >
                  <WindowIcon fill={'red'} />
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className={`nav-item ${
                    location.pathname === '/movies' ? 'active' : ''
                  }`}
                >
                  <MovieIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="/shows"
                  className={`nav-item ${
                    location.pathname === '/shows' ? 'active' : ''
                  }`}
                >
                  <ShowIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="/bookmarked"
                  className={`nav-item ${
                    location.pathname === '/bookmarked' ? 'active' : ''
                  }`}
                >
                  <BookmarkIcon />
                </Link>
              </li>
            </ul>
          </nav>

          {isLoggedIn ? (
            <div className="profile-avatar">
              <img src={avatar} alt="avatar-img of the user" />
            </div>
          ) : (
            <button onClick={() => navigate('/sign-in')} className="login-btn">
              Login
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
