import React from 'react';
import '../styles/exist.css';

function ExistUser() {
  return (
    <div className="exist-main">
      <div className="exist-title">Welcome back, $username!</div>
      <br />
      <div className="exist-menu">
        <div className="sub-menu">
          Account
          <br />
          Courses
          <br />
          Activity
          <br />
          Settings
          <br />
          About
        </div>
      </div>
      <div className="exist-course">
        My Courses
        <br />
        Intro to HTML, CSS
        <br />
        65% complete
        <br />
        Intro to Git
        <br />
        50% complete
        <br />
      </div>
    </div>
  );
}

export default ExistUser;
