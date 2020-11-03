import React, { useState } from 'react';
import '../styles/exist.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

function ExistAccount() {
  var ID = 4824063202;
  const [USERNAME, setUsername] = useState('admin');
  const [PASSWORD, setPassword] = useState('helloworld');

  const passwordDOMElement = (pw) => {
    return Array(pw.length + 1).join('*');
  };

  const changeSetting = (setting) => {
    switch (setting) {
      case 'username':
        Swal.mixin({
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Update',
        })
          .queue([
            {
              title: 'Change Username',
            },
          ])
          .then((result) => {
            if (result.value) {
              var newUsername = result.value[0];

              // TASK FOR BACKEND: Make sure username isn't already taken in the account database
              if (newUsername !== null && newUsername !== '') {
                if (newUsername === USERNAME) {
                  Swal.fire('Nothing is changed!', '', 'error');
                } else {
                  Swal.fire('Updated!', '', 'success');
                  setUsername(newUsername);
                  // Update username in Firebase
                }
              }
            }
          });
        break;
      case 'password':
        Swal.mixin({
          input: 'password',
          confirmButtonText: 'Change &rarr;',
          showCancelButton: true,
        })
          .queue([
            {
              title: 'Change Password',
            },
            'Confirm Password',
          ])
          .then((result) => {
            if (result.value) {
              const pwToUpdate = result.value;

              // If password is not empty
              if (!pwToUpdate.includes('')) {
                if (pwToUpdate[0] === pwToUpdate[1]) {
                  Swal.fire('Updated!', '', 'success');
                  setPassword(pwToUpdate[1]);

                  // Update Password in Firebase
                } else {
                  Swal.fire("Password doesn't match!", '', 'error');
                }
              } else {
                Swal.fire('Nothing is changed!', '', 'error');
              }
            }
          });
        break;
      default:
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Nothing has changed!',
        });
    }
  };
  return (
    <div className="exist-main">
      <div className="exist-menu">
        <div className="exist-pattern"></div>
        <div className="shape-circle"></div>
        <div className="shape-tri"></div>
        <div className="sub-menu-1">
          <Link to="/account" className="color mt-2">
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
        <div className="exist-title">
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
          Username:{' '}
          <button
            className="btn pr-5"
            onClick={() => changeSetting('username')}
          >
            <p style={{ fontSize: '30px' }}>{USERNAME}</p>
          </button>
          <br />
          <br />
          Email: defhacks@xyz.com
          <br />
          <br />
          Location: USA
          <br />
          <br />
          <div>
            Password:{' '}
            <button className="btn" onClick={() => changeSetting('password')}>
              {passwordDOMElement(PASSWORD)}{' '}
            </button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExistAccount;
