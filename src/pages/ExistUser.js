import React from 'react';
import '../styles/exist.css';

function ExistUser() {
  return (
    <div className="exist-main">
      <div className="exist-menu">
        <div className="exist-pattern"></div>
        <div className="shape-circle"></div>
        <div className="shape-tri"></div>
        <div className="sub-menu-1">Account</div>
        <br />
        <div className="sub-menu-2">Courses</div>
        <br />
        <div className="sub-menu-3">Activity</div>
        <br />
        <div className="sub-menu-4">Settings</div>
        <br />
        <div className="sub-menu-5">About</div>
      </div>
      <div className="blue-box-1"></div>
      <div className="blue-box-2"></div>
      <div className="exist-title">Welcome back, $username!</div>
      <br />
      <div className="content-box-1"></div>
      <div className="content-box-2"></div>
      <div className="box-title">My Courses</div>
      <div className="box-content">
        Intro to HTML, CSS
        <br />
        <div className="mini-progress-1">Percent</div>
        <br />
        Intro to Git
        <br />
        <br />
      </div>
    </div>
  );
}

export default ExistUser;
