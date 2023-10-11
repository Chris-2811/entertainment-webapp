import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bookmarked from './pages/Bookmarked';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import { MovieProvider } from './context/MovieContext';
import { BookmarkedProvider } from './context/BookmarkedContext';

function App() {
  return (
    <MovieProvider>
      <BookmarkedProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookmarked" element={<Bookmarked />} />
          </Routes>
        </Router>
      </BookmarkedProvider>
    </MovieProvider>
  );
}

export default App;
