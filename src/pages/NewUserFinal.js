import React, { useEffect, useContext } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import '../styles/newuser.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AppContext from '../context/AppContext';

function NewUserFinal() {
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

  return (
    <div className="new-user">
      <img alt="" src="/assets/Polygon_6.png" className="polygon6" />
      <img alt="" src="/assets/Ellipse.png" className="ellipse" />
      <img alt="" src="/assets/Polygon_5.png" className="polygon5" />
      <div
        className="lower-box-final"
        style={matches ? { width: '85%' } : null}
      >
        The following classes that you chose will now appear on <br /> your
        dashboard:
        <br />
        <br />
        <div className="lower-box-content">
          Intro to HTML and CSS <br />
          Intro to Javascript
        </div>
        <br />
        Continue to your dashboard to begin work on your courses!
        <br />
        <br />
        <Link to="/dashboard">
          <input
            type="submit"
            value="Continue"
            className="continue"
            style={
              matches
                ? { width: '10%', fontSize: '67%', height: '15%', top: '80%' }
                : null
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default withRouter(NewUserFinal);
