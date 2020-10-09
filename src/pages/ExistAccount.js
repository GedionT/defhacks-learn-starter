import React from 'react';
import '../styles/exist.css';
import { Link } from 'react-router-dom';

function ExistAccount() {
  return (
    <div className="exist-main">
      <div className="exist-menu">
        <div className="exist-pattern"></div>
        <div className="shape-circle"></div>
        <div className="shape-tri"></div>
        <div className="sub-menu-1">
          <Link to="/ExistAccount" className="color">
            Account
          </Link>
        </div>
        <br />
        <div className="sub-menu-2">
          <Link to="/ExistUser" className="color">
            Courses
          </Link>
        </div>
        <br />
        <div className="sub-menu-3">
          <Link to="/ExistActivity" className="color">
            Activity
          </Link>
        </div>
        <br />
        <div className="sub-menu-4">Settings</div>
        <br />
        <div className="sub-menu-5">
          <Link to="/About" className="color">
            About
          </Link>
        </div>
      </div>
      <div className="blue-box-1"></div>
      <div className="blue-box-2"></div>
      <div className="exist-title">
        $username!
        <br />
        User ID: 4824063202
      </div>
      <br />
      <div className="content-box-1"></div>
      <div className="content-box-2"></div>
      <div className="box-title-acc">Account Information</div>
      <div className="box-content-acc-text">
        Username: $Username
        <br />
        <br />
        Email: defhacks@xyz.com
        <br />
        <br />
        Location: USA
        <br />
        <br />
        Password:****
      </div>
    </div>
  );
}

export default ExistAccount;
