import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import '../styles/newuser.css';

function NewUser() {
  const [experience, setExperience] = useState(null);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { user } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else if (user.metadata) {
      // Check if the user is logged on for the first time
      if (user.metadata.creationTime !== user.metadata.lastSignInTime) {
        // Redirect to dashboard if it is not the first time
        history.push('/dashboard');
      }
    }
  });

  const changeExperience = (e) => {
    setExperience(e.currentTarget.value);
  };

  const submitExperience = () => {
    if (experience) {
      // Send the selected experience to the next page
      history.push({
        pathname: '/newusercourses',
        state: { experience },
      });
    } else {
      setError('Please select your experience level before proceeding');
    }
  };

  return (
    <div className="new-user">
      <Container>
        {error !== null && <Alert variant="danger">{error}</Alert>}
      </Container>
      <img alt="" src="/assets/Polygon_6.png" className="polygon6" />
      <img alt="" src="/assets/Ellipse.png" className="ellipse" />
      <img alt="" src="/assets/Polygon_5.png" className="polygon5" />
      <div className="upper-box" style={matches ? { width: '85%' } : null}>
        Welcome to Def Hacks Learn! To get started,
        <br /> please answer a few questions about yourself.
      </div>
      <div className="lower-box">
        Describe your current knowledge of computer science.
        <br />
        <br />
        <div
          className="radio-buttons"
          style={matches ? { width: '85%' } : null}
        >
          <label>
            <input
              type="radio"
              checked={experience === 'Beginner'}
              onChange={changeExperience}
              value="Beginner"
              className="box"
            />
            &nbsp; Beginner (0-6 months)
          </label>
          <br />
          <label>
            <input
              type="radio"
              checked={experience === 'Intermediate'}
              onChange={changeExperience}
              value="Intermediate"
              className="box"
            />
            &nbsp; Intermediate
          </label>
          <br />
          <label>
            <input
              type="radio"
              checked={experience === 'Advanced'}
              onChange={changeExperience}
              value="Advanced"
              className="box"
            />
            &nbsp; Advanced
          </label>
          <br />
          <br />
          <input
            type="submit"
            value="Next"
            className="submit"
            onClick={submitExperience}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(NewUser);
