import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/newuser.css';

function NewUser() {
  return (
    <div className="new-user">
      <img alt="" src="/assets/Polygon_6.png" className="polygon6" />
      <img alt="" src="/assets/Ellipse.png" className="ellipse" />
      <img alt="" src="/assets/Polygon_5.png" className="polygon5" />
      <div className="upper-box">
        Welcome to Def Hacks Learn! To get started,
        <br /> please answer a few questions about yourself.
      </div>
      <div className="lower-box">
        Describe your current knowledge of computer science.
        <br />
        <br />
        <div className="radio-buttons">
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
