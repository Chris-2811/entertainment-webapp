import React from 'react';
import { ReactComponent as MovieIcon } from '../assets/movie.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase.config';

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const { email, password, password2 } = formData;

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();

      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = useCredential.user;

      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="body login bg-dark-blue">
      <div className="container">
        <div className="logo flex">
          <MovieIcon
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="form-container fw-300 bg-semi-dark-blue">
          <form id="form" onSubmit={handleSubmit}>
            <h1 className="text-light fw-300">Sign Up</h1>
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
            <div className="form-control">
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Repeat Password"
                onChange={handleChange}
                value={password2}
              />
            </div>
            <button className="bg-red " type="submit">
              Login to your account
            </button>
            <p>
              Don't have an account?{' '}
              <a className="text-red" onClick={() => navigate('/sign-in')}>
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
