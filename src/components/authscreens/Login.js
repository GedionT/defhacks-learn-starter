import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Alert, Form, Button, Container } from 'react-bootstrap';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import firebase from '../firebase/base';
import Footer from '../common/Footer';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // These hooks from material-ui is used for checking the current width of the window
  // In particularly, check whether the window is over sm scale
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const signInWithEmailAndPasswordHandler = (event) => {
    event.preventDefault();
    firebase
      .login(email, password)
      .then(() => {
        // alert('Login Successful');
        setEmail('');
        setPassword('');
        history.push('/dashboard');
      })
      .catch((err) => {
        // alert(`Error: ${err.message}`);
        setError(err.message);
        setPassword('');
      });
  };

  const signInWithGoogle = () => {
    firebase
      .signInWithGoogle()
      .then(() => {
        setEmail('');
        setPassword('');
        history.push('/dashboard');
      })
      .catch((err) => {
        setError(err.message);
        setPassword('');
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
      <Container>
        {error !== null && <Alert variant="danger">{error}</Alert>}

        <div>{/* Space for future decoration */}</div>

        <Form onSubmit={signInWithEmailAndPasswordHandler}>
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
              required
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
              required
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
          >
            Log in
          </Button>

          <Button
            variant="light"
            type="button"
            style={{
              width: matches ? '50%' : null,
              marginLeft: matches ? '25%' : null,
              backgroundColor: '#fff',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
            block
            onClick={signInWithGoogle}
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

      {/* Footer fo here */}
      <Footer />
    </>
  );
};
export default withRouter(SignIn);
