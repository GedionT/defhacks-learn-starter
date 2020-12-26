import React from 'react';
import '../../styles/exist.css';
import { Col, Row } from 'react-bootstrap';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import firebase from '../firebase/base';

function HeaderExistUser() {
  let username = firebase.getCurrentUsername()
    ? firebase.getCurrentUsername().displayName
    : 'user';
  let id = firebase.getCurrentUsername()
    ? firebase.getCurrentUsername().uid.substring(0, 12)
    : '831723895734';

  return (
    <div>
      <div className="blue-box-2">
        <Row>
          <Col className="exist-title" xs={6} md={6} lg={6}>
            {username}
          </Col>
          <Col className="exist-title" xs={6} md={6} lg={6}>
            <WhatshotIcon className="streak" style={{ fontSize: '2.5vw' }} />
            Streak : 4 days
          </Col>
        </Row>

        <Row style={{ marginTop: '0.5%' }}>
          <Col className="exist-title" xs={6} md={6} lg={6}>
            User ID: {id}
          </Col>
          <Col className="exist-title" xs={6} md={6} lg={6}>
            <LocalActivityIcon
              className="streak"
              style={{ fontSize: '2.5vw' }}
            />
            Badges : 25
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeaderExistUser;
