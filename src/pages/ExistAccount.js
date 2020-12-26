import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

import '../styles/exist.css';
import firebase from '../components/firebase/base';
import Sidebar from '../components/common/Sidebar';
import AppContext from '../context/AppContext';

function ExistAccount() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      setUsername(user.displayName);
      setEmail(user.email);
    }
  }, [user, history]);

  const ID = user.uid.substr(0, 20);
  const [USERNAME, setUsername] = useState('user');
  const [PASSWORD, setPassword] = useState('helloworld');
  const [EMAIL, setEmail] = useState('defhacks@xyz.com');

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
                    .then(() => {
                      Swal.fire(
                        `Updated your username to ${newUsername}!`,
                        '',
                        'success'
                      );
                      setUsername(newUsername);
                    })
                    .catch(function (error) {
                      Swal.fire(
                        error.message
                          ? error.message
                          : 'Error occured while updating username',
                        '',
                        'error'
                      );
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
                  fbuser
                    .updatePassword(pwToUpdate[1])
                    .then(function () {
                      Swal.fire('Updated!', '', 'success');
                      setPassword(pwToUpdate[1]);
                    })
                    .catch((err) => {
                      Swal.fire(
                        err.message
                          ? err.message
                          : 'Error occured while updating password',
                        '',
                        'error'
                      );
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

              if (newEmail !== null && newEmail !== '') {
                if (newEmail !== EMAIL) {
                  if (emailValid(newEmail)) {
                    // Update email in Firebase
                    let fbuser = firebase.getCurrentUsername();
                    fbuser
                      .updateEmail(newEmail)
                      .then(() => {
                        Swal.fire('Updated!', '', 'success');
                        setEmail(newEmail);
                      })
                      .catch((err) => {
                        Swal.fire(
                          err.message
                            ? err.message
                            : 'Error occured while updating email',
                          '',
                          'error'
                        );
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
    <div className="general_container">
      <Row style={{ marginRight: 0, marginLeft: 0 }}>
        <Col xs={3} lg={3}>
          <Sidebar />
        </Col>

        <Col xs={9} lg={9} style={{ position: 'relative' }}>
          <div className="blue-box-1"></div>
          <div className="blue-box-2">
            <div className="exist-title">
              Welcome {USERNAME}!
              <br />
              User ID: {ID}
            </div>
          </div>

          <div className="content-box-1"></div>
          <div className="content-box-2">
            <div className="box-title-acc">Account Information</div>
            <div className="box-content-acc-text">
              <p>
                Username: {USERNAME}{' '}
                <span
                  className="box-content-acc-edit-text"
                  onClick={() => changeSetting('username')}
                >
                  <EditIcon className="edit-icon" />
                  Edit
                </span>
              </p>
              <p>
                Email: {EMAIL}{' '}
                <span
                  className="box-content-acc-edit-text"
                  onClick={() => changeSetting('email')}
                >
                  <EditIcon className="edit-icon" />
                  Edit
                </span>
              </p>
              <p>Location: USA</p>
              <div style={{ cursor: 'pointer' }}>
                <p>
                  Password: {passwordDOMElement(PASSWORD)}{' '}
                  <span
                    className="box-content-acc-edit-text"
                    onClick={() => changeSetting('password')}
                  >
                    <EditIcon className="edit-icon" />
                    Edit
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExistAccount;
