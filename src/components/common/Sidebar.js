import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <div className="exist-menu mx-3 mt-3">
      {/* This part go to background as decoration */}
      <div className="exist-pattern"></div>
      {/* <div className="shape-circle"></div>
      <div className="shape-tri"></div> */}

      {/* Actually button */}
      <div className="sub-menu">
        <Link to="/account" className="color">
          Account
        </Link>
      </div>
      <br />
      <div className="sub-menu">
        <Link to="/ExistUser" className="color">
          Courses
        </Link>
      </div>
      <br />
      <div className="sub-menu">
        <Link to="/ExistActivity" className="color">
          Activity
        </Link>
      </div>
      <br />
      <div className="sub-menu">
        <Link
          className="color"
          onClick={() => alert('Coming soon!')}
          to="/dashboard"
        >
          Settings
        </Link>
      </div>
      <br />
      <div className="sub-menu">
        <Link to="/About" className="color">
          About
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
