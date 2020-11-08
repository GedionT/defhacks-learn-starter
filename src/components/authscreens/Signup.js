import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Alert, Form, Button, Container } from 'react-bootstrap';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import firebase from '../firebase/base';

import './Signup.css';

const SignUp = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // These hooks from material-ui is used for checking the current width of the window
  // In particularly, check whether the window is over sm scale
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const onRegister = async (event) => {
    event.preventDefault();
    const name = `${firstName} ${lastName}`;

    if (!passwordValidate(password)) {
      setError(
        'Password need to contain one uppercase, one lowercase, one digit, one special character'
      );
      setPassword('');
      return;
    }

    firebase
      .register(name, email, password)
      .then(() => {
        //alert('Signup Successful');
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setError('');
        history.replace('/newuser');
      })
      .catch((err) => {
        // alert(`Error: ${err.message}`);
        setError(err.message);
        setEmail('');
        setPassword('');
      });
  };

  const registerWithGoogle = () => {
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
    } else if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    }
  };
  return (
    <Container>
      {error !== null && <Alert variant="danger">{error}</Alert>}
      <span>
        <h1 className="start">Welcome!</h1>
        <p className="description">Sign up to join the fun!</p>
      </span>

      <Form onSubmit={onRegister}>
        {/* For first name */}
        <Form.Group
          style={matches ? { width: '50%', marginLeft: '25%' } : null}
        >
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={onChangeHandler}
            required
          />
        </Form.Group>

        {/* For last name */}
        <Form.Group
          style={matches ? { width: '50%', marginLeft: '25%' } : null}
        >
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={onChangeHandler}
          />
        </Form.Group>

        {/* For email address */}
        <Form.Group
          style={matches ? { width: '50%', marginLeft: '25%' } : null}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={onChangeHandler}
            required
          />
        </Form.Group>

        {/* For password */}
        <Form.Group
          style={matches ? { width: '50%', marginLeft: '25%' } : null}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeHandler}
            required
            minLength={8}
          />
        </Form.Group>

        {/* Register button */}
        <Button
          variant="success"
          type="submit"
          style={{
            width: matches ? '50%' : null,
            marginLeft: matches ? '25%' : null,
          }}
          block
        >
          Register
        </Button>

        {/* Register with Google button */}
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
          onClick={registerWithGoogle}
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
          <span>Continue with Google</span>
        </Button>

        <div className="text-center mt-3">
          <p>
            Already has an account ? {'  '}
            <Link to="/signin">Log in here</Link>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default withRouter(SignUp);

const passwordValidate = (password) => {
  // String of length 8 or more, contain at least on digit, one uppercase, one lowercase and one special character
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/gm;
  return regex.test(password);
};
