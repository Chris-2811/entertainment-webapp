import React, { useContext } from 'react';
import { ReactComponent as MovieIcon } from '../assets/movie.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import MovieContext from '../context/MovieContext';

function SignIn() {
  const { isLoggedIn, setIsLoggedIn } = useContext(MovieContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const { email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate('/profile');
      }

      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <body className="login bg-dark-blue">
      <div className="container">
        <div className="logo flex">
          <MovieIcon
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="form-container fw-300 bg-semi-dark-blue">
          <form id="form" onSubmit={handleSubmit}>
            <h1 className="text-light fw-300">Login</h1>
            <div className="form-control">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
              />
            </div>
            <button className="bg-red " type="submit">
              Login to your account
            </button>
            <p>
              Don't have an account?{' '}
              <a className="text-red" onClick={() => navigate('/sign-up')}>
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </body>
  );
}

export default SignIn;
