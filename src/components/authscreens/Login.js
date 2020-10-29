import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import firebase from '../firebase/base';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // These hooks from material-ui is used for checking the current width of the window
  // In particularly, check whether the window is over sm scale
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const signInWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();

    await firebase
      .login(email, password)
      .then(() => {
        alert('Login Successful');
        history.push('/dashboard');
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
        setError(`Fix ${err}`);
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <Container>
      {error !== null && (
        <div className="py-4 bg-red-600 w-full text-center mb-3">
          <h5>{error}</h5>
        </div>
      )}
      <div>{/* Space for future decoration */}</div>

      <Form>
        <Form.Group
          controlId="formBasicEmail"
          style={matches ? { width: '50%', marginLeft: '25%' } : null}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          style={matches ? { width: '50%', marginLeft: '25%' } : null}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          style={{
            width: matches ? '50%' : null,
            marginLeft: matches ? '25%' : null,
          }}
          block
          onSubmit={signInWithEmailAndPasswordHandler}
        >
          Log in
        </Button>

        <Button
          variant="light"
          type="submit"
          style={{
            width: matches ? '50%' : null,
            marginLeft: matches ? '25%' : null,
            backgroundColor: '#fff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
          block
          onSubmit={signInWithEmailAndPasswordHandler}
        >
          <img
            src="/assets/google-logo.svg"
            alt="google-logo"
            style={{
              display: 'inline-block',
              maxWidth: '30px',
              maxHeight: '30px',
              marginLeft: '-5%',
              marginRight: '5%',
            }}
          />
          <span>Sign in with Google</span>
        </Button>

        <div className="text-center mt-3">
          <p>
            Don't have an account ? {'  '}
            <Link to="/signup">Sign up here</Link>
          </p>
          <p>
            <Link to="/reset">Forgot Password?</Link>
          </p>
        </div>
      </Form>
    </Container>

    // <div className="mt-8">
    //   <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
    //     {error !== null && (
    //       <div className="py-4 bg-red-600 w-full text-center mb-3">
    //         <h5>{error}</h5>
    //       </div>
    //     )}
    //     <form className="" onSubmit={(e) => e.preventDefault() && false}>
    //       <label htmlFor="userEmail" className="block">
    //         Email:
    //       </label>
    //       <input
    //         type="email"
    //         className="my-1 p-1 w-full"
    //         name="userEmail"
    //         value={email}
    //         placeholder="E.g: lidyaomer@gmail.com"
    //         id="userEmail"
    //         onChange={(event) => onChangeHandler(event)}
    //       />
    //       <br />
    //       <label htmlFor="userPassword" className="block">
    //         Password:
    //       </label>
    //       <input
    //         type="password"
    //         className="mt-1 mb-3 p-1 w-full"
    //         name="userPassword"
    //         value={password}
    //         placeholder="Your Password"
    //         id="userPassword"
    //         onChange={(event) => onChangeHandler(event)}
    //       />
    //       <br />
    //       <button
    //         className="bg-green-400 hover:bg-green-500 w-full py-2"
    //         onClick={(event) => {
    //           signInWithEmailAndPasswordHandler(event, email, password);
    //         }}
    //       >
    //         Sign in
    //       </button>
    //     </form>
    //     <p className="text-center my-3">or</p>
    //     <button className="bg-red-500 hover:bg-red-600 w-full py-2">
    //       Sign in with Google
    //     </button>
    //     <p className="text-center my-3">
    //       Don't have an account?{' '}
    //       <Link to="/signup" className="text-blue-500 hover:text-blue-600">
    //         Sign up here
    //       </Link>{' '}
    //       <br />{' '}
    //       <Link to="/reset" className="text-blue-500 hover:text-blue-600">
    //         Forgot Password?
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
};
export default withRouter(SignIn);
