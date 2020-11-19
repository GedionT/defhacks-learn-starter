import React from 'react';
import '../../styles/exist.css';
import { Container, Col, Row } from 'react-bootstrap';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import firebase from '../firebase/base';

function HeaderExistUser() {
  let username = firebase.getCurrentUsername()
    ? firebase.getCurrentUsername().displayName
    : 'user';
  let id = firebase.getCurrentUsername()
    ? firebase.getCurrentUsername().uid.substring(0, 12)
    : '83172389573475437524';

  return (
    <div className="exist-main">
      <div className="blue-box-1"></div>
      <Container className="blue-box-2">
        <Row>
          <Col className="exist-title">{username}</Col>
          <Col className="exist-title">
            <WhatshotIcon className="streak" style={{ fontSize: 40 }} /> Streak
            : 4 days
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="user-id">User ID: {id}</Col>
          <Col className="exist-title">
            <LocalActivityIcon className="streak" style={{ fontSize: 40 }} />{' '}
            Badges : 25
          </Col>
        </Row>
      </Container>
      <div className="green-box-1"></div>
      <div className="green-box-2"></div>
    </div>
  );
}

export default HeaderExistUser;
