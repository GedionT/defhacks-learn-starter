import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/newuser.css';

function NewUser() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { user } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  });

  return (
    <div className="new-user">
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
          <input type="radio" value="Beginner" className="box" />
          &nbsp; Beginner (0-6 months)
          <br />
          <input type="radio" value="Intermediate" className="box" />
          &nbsp; Intermediate
          <br />
          <input type="radio" value="Advanced" className="box" />
          &nbsp; Advanced
          <br />
          <br />
          <Link to="/newusercourses">
            <input type="submit" value="Next" className="submit" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NewUser);
