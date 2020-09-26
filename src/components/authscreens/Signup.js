import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../firebase/base';

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
        history.replace('/signin');
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
    <div className="mt-8">
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-center mb-3">
            <h5>{error}</h5>
          </div>
        )}
        <form className="">
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <input
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={name}
            placeholder="E.g: Odell"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: Odel32x@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2"
            onClick={(event) => {
              onRegister(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button className="bg-red-500 hover:bg-red-600 w-full py-2">
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
