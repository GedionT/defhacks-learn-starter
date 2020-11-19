import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Alert, Form, Button, Container } from 'react-bootstrap';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import firebase from '../firebase/base';
import Footer from '../common/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

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

  const emailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
        <h1 style={{ textAlign: 'center' }}>Sign in</h1>

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
        </Form>
        <div className="text-center mt-3">
          <p>
            Don't have an account ? {'  '}
            <Link to="/signup">Sign up here</Link>
          </p>
          <button
            className="btn"
            style={{
              padding: '5px',
            }}
            onClick={() => {
              Swal.fire({
                title: 'Enter your Email Address',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off',
                },
                showCancelButton: true,
                confirmButtonText: 'Send Reset Instructions',
                showLoaderOnConfirm: true,
                allowOutsideClick: () => !Swal.isLoading(),
              }).then((result) => {
                if (result.isConfirmed) {
                  if (emailValid(result.value)) {
                    let auth = firebase.authreturns();
                    auth
                      .sendPasswordResetEmail(result.value)
                      .then(function () {
                        Swal.fire(
                          'Sent!',
                          'We have sent an password reset link to your Email',
                          'success'
                        );
                      })
                      .catch(function (error) {
                        Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: "This email address hasn't been registered!",
                        });
                      });
                    // If email is found in account database: Invoke reset action
                    // Else: Fire error alert
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Invalid Email Address!',
                    });
                  }
                }
              });
            }}
          >
            <p style={{ color: '#38BC9C' }}>Forgot Password?</p>
          </button>
        </div>
      </Container>

      {/* Footer fo here */}
      <Footer />
    </>
  );
};
export default withRouter(SignIn);
