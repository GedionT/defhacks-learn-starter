import React from 'react';
import '../styles/exist.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';

const passwordDOMElement = (pw) => {
  return Array(pw.length + 1).join('*');
};

function ExistAccount() {
  var ID = 4824063202;
  var USERNAME = 'admin';
  var PASSWORD = 'helloworld';
  return (
    <div className="exist-main">
      <div className="exist-menu">
        <div className="exist-pattern"></div>
        <div className="shape-circle"></div>
        <div className="shape-tri"></div>
        <div className="sub-menu-1">
          <Link to="/ExistAccount" className="color mt-2">
            Account
          </Link>
        </div>
        <br />
        <div className="sub-menu-2">
          <Link to="/ExistUser" className="color mt-2">
            Courses
          </Link>
        </div>
        <br />
        <div className="sub-menu-3">
          <Link to="/ExistActivity" className="color mt-2">
            Activity
          </Link>
        </div>
        <br />
        <div className="sub-menu-4">
          <Link className="color mt-2" onClick={() => alert('Coming soon!')}>
            Settings
          </Link>
        </div>
        <br />
        <div className="sub-menu-5">
          <Link to="/About" className="color mt-2">
            About
          </Link>
        </div>
      </div>
      <div className="blue-box-1"></div>
      <div className="blue-box-2">
        <div className="exist-title mb-3">
          Welcome {USERNAME}!
          <br />
          User ID: {ID}
        </div>
      </div>

      <br />
      <div className="content-box-1"></div>
      <div className="content-box-2">
        {' '}
        <div className="box-title-acc">Account Information</div>
        <div className="box-content-acc-text">
          Username: {USERNAME}
          <br />
          <br />
          Email: defhacks@xyz.com
          <br />
          <br />
          Location: USA
          <br />
          <br />
          Password: {passwordDOMElement(PASSWORD)}
        </div>
      </div>
    </div>
  );
}

export default ExistAccount;
