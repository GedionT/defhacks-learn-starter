import React, { useState } from 'react';
import '../styles/exist.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import firebase from '../components/firebase/base';

function ExistAccount() {
  let username = firebase.getCurrentUsername()
    ? firebase.getCurrentUsername().displayName
    : 'user';
  let id = firebase.getCurrentUsername()
    ? firebase.getCurrentUsername().uid.substring(0, 12)
    : '83172389573475437524';
  let email = firebase.getCurrentUsername()
    ? firebase.getCurrentUsername().email
    : 'defhacks@xyz.com';

  var ID = id;
  const [USERNAME, setUsername] = useState(username);
  const [PASSWORD, setPassword] = useState('helloworld');
  const [EMAIL, setEmail] = useState(email);

  const passwordDOMElement = (pw) => {
    return Array(pw.length + 1).join('*');
  };

  const emailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
                  let fbuser = firebase.getCurrentUsername();
                  fbuser
                    .updateProfile({
                      displayName: newUsername,
                    })
                    .then(function () {
                      Swal.fire('Updated!', '', 'success');
                      setUsername(newUsername);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
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
                  // Update Password in Firebase
                  let fbuser = firebase.getCurrentUsername();
                  fbuser.updatePassword(pwToUpdate[1]).then(function () {
                    Swal.fire('Updated!', '', 'success');
                    setPassword(pwToUpdate[1]);
                  });
                } else {
                  Swal.fire("Password doesn't match!", '', 'error');
                }
              } else {
                Swal.fire('Nothing is changed!', '', 'error');
              }
            }
          });
        break;
      case 'email':
        Swal.mixin({
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Update',
        })
          .queue([
            {
              title: 'Change Email Address',
            },
          ])
          .then((result) => {
            if (result.value) {
              var newEmail = result.value[0];

              // TASK FOR BACKEND: Make sure email isn't already taken in the account database
              if (newEmail !== null && newEmail !== '') {
                if (newEmail !== EMAIL) {
                  if (emailValid(newEmail)) {
                    // Update email in Firebase
                    let fbuser = firebase.getCurrentUsername();
                    fbuser.updateEmail(newEmail).then(function () {
                      Swal.fire('Updated!', '', 'success');
                      setEmail(newEmail);
                    });
                  } else {
                    Swal.fire('Invalid Email!', '', 'error');
                  }
                } else {
                  Swal.fire('Nothing is changed!', '', 'error');
                }
              }
            }
          });
        break;
      default:
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Invalid Request!',
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
          Email:{' '}
          <button className="btn" onClick={() => changeSetting('email')}>
            <p style={{ fontSize: '30px' }}>{EMAIL}</p>
          </button>{' '}
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
