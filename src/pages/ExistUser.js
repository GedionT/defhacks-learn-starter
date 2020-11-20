import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';

function ExistUser() {
  const USERNAME = 'admin';

  return (
    <div className="general_container">
      <Row>
        <Col xs={3} lg={3}>
          <Sidebar />
        </Col>

        <Col xs={9} lg={9}>
          <div className="blue-box-1"></div>
          <div className="blue-box-2">
            {' '}
            <div className="exist-title">Welcome back, {USERNAME}!</div>
          </div>

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
        </Col>
      </Row>
    </div>
  );
}

export default ExistUser;
