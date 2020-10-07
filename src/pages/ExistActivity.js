import React from 'react';
import '../styles/exist.css';
import { Link } from 'react-router-dom';

function ExistActivity() {
  return (
    <div className="exist-main">
      <div className="exist-menu">
        <div className="exist-pattern"></div>
        <div className="shape-circle"></div>
        <div className="shape-tri"></div>
        <div className="sub-menu-1">
          <Link to="/ExistAccount">Account</Link>
        </div>
        <br />
        <div className="sub-menu-2">
          <Link to="/ExistUser">Courses</Link>
        </div>
        <br />
        <div className="sub-menu-3">
          <Link to="/ExistActivity">Activity</Link>
        </div>
        <br />
        <div className="sub-menu-4">Settings</div>
        <br />
        <div className="sub-menu-5">About</div>
      </div>
      <div className="blue-box-1"></div>
      <div className="blue-box-2"></div>
      <div className="exist-title">$username</div>
      <br />
      <div className="green-box-1"></div>
      <div className="green-box-2"></div>
      <div className="act-cont">Daily Activity</div>
      <div className="cal-act">
        <img
          alt=""
          src="/assets/16.0_1-JavaScript-date.png"
          width="400"
          height="550"
          className="bottom-lines-right"
        />{' '}
      </div>
    </div>
  );
}

export default ExistActivity;
