import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/newuser.css';

function NewUserFinal() {
  return (
    <div className="new-user">
      <img alt="" src="/assets/Polygon_6.png" className="polygon6" />
      <img alt="" src="/assets/Ellipse.png" className="ellipse" />
      <img alt="" src="/assets/Polygon_5.png" className="polygon5" />
      <div className="lower-box-final">
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
          <input type="submit" value="Continue" className="continue" />
        </Link>
      </div>
    </div>
  );
}

export default withRouter(NewUserFinal);
