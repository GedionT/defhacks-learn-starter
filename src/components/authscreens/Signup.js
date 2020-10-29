import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../firebase/base';

import './Signup.css';

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const onRegister = async (event, email, password) => {
    event.preventDefault();

    await firebase
      .register(name, email, password)
      .then(() => {
        alert('Signup Successful');
        history.replace('/newuser');
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
        setError(`Fix ${err}`);
      });

    setEmail('');
    setPassword('');
    setName('');
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setName(value);
    }
  };
  return (
    <div className="mt-8 text-center">
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-center mb-3">
            <h5>{error}</h5>
          </div>
        )}
        <span className="col-2 greeting">
          <h1 className="start">Welcome!</h1>
          <p className="description">Sign up to join the fun!</p>
        </span>
        <form className="col-12 form">
          {' '}
          <label htmlFor="firstName" className="block">
            First Name
          </label>
          <input
            type="text"
            className="mt-1 mb-3 p-1 w-full"
            name="firstName"
            value={name}
            placeholder="John"
            id="firstName"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <label htmlFor="lastName" className="block">
            Last Name
          </label>
          <input
            type="text"
            className="mt-1 mb-3 p-1 w-full"
            name="lastName"
            value={name}
            placeholder="Doe"
            id="lastName"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <label htmlFor="userEmail" className="block">
            Email
          </label>
          <input
            type="email"
            className="mt-1 mb-3 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="johndoe@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <label htmlFor="userPassword" className="block">
            Password
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="123456"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <label htmlFor="confirmPassword" className="block">
            Confirm Password
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="confirmPassword"
            value={password}
            placeholder="123456"
            id="confirmPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <label htmlFor="country" className="block">
            Country
          </label>
          <input
            type="text"
            className="mt-1 mb-3 p-1 w-full"
            name="country"
            value={password}
            placeholder="USA"
            id="country"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2"
            onClick={(event) => {
              onRegister(event, email, password);
            }}
          >
            Register
          </button>
        </form>
        <p className="text-center my-3">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 hover:text-blue-600">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
