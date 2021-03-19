import React, { useEffect, useContext, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import '../styles/newuser.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AppContext from '../context/AppContext';
import firebase from 'firebase/app';

const db = firebase.firestore();

function NewUserFinal(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [USER_ID, setUSER_ID] = useState('');

  const { user } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else if (user) {
      setUSER_ID(user.uid);
      // Check if the user is logged on for the first time
      if (
        user.metadata &&
        user.metadata.creationTime !== user.metadata.lastSignInTime
      ) {
        // Redirect to dashboard if it is not the first time
        history.push('/dashboard');
      } else if (!props.location.state) {
        // If the page is not rendered from /newusercourses, redirect it to /newuser
        history.push('/newuser');
      }
    }
  });

  const continueToDashboard = () => {
    const interestedCourses = props.location.state.courses.map(
      (course) => course.courseID
    );
    db.collection('users')
      .doc(USER_ID)
      .set(
        {
          experience: props.location.state.experience
            ? props.location.state.experience
            : 'None',
          interestedCourses: interestedCourses,
        },
        { merge: true }
      )
      .then((result) => {
        history.push('/dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="new-user">
      <img alt="" src="/assets/Polygon_6.png" className="polygon6" />
      <img alt="" src="/assets/Ellipse.png" className="ellipse" />
      <img alt="" src="/assets/Polygon_5.png" className="polygon5" />
      <div
        className="lower-box-final"
        style={matches ? { width: '85%' } : null}
      >
        {props.location.state && props.location.state.courses.length > 0 && (
          <>
            The following classes that you chose will now appear on <br /> your
            dashboard:
            <br />
            <br />
            <div className="lower-box-content">
              {props.location.state.courses.map((course, idx) => (
                <>
                  {course.name} <br />
                </>
              ))}
            </div>
            <br />
          </>
        )}
        Continue to your dashboard to begin work on your courses!
        <br />
        <br />
        <input
          type="submit"
          value="Continue"
          className="continue"
          onClick={continueToDashboard}
          style={
            matches
              ? { width: '10%', fontSize: '67%', height: '15%', top: '80%' }
              : null
          }
        />
      </div>
    </div>
  );
}

export default withRouter(NewUserFinal);
