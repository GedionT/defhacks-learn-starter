import React from 'react';

import { Row, Col } from 'react-bootstrap';
import Calendar from '../components/calendar/calendar';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';

function ExistActivity() {
  return (
    <div className="general_container">
      <Row>
        <Col xs={3} lg={3}>
          <Sidebar />
        </Col>

        <Col xs={9} lg={9}>
          <div className="blue-box-1"></div>
          <div className="blue-box-2"></div>
          <div className="exist-title">$username</div>
          <br />
          <div className="green-box-1"></div>
          <div className="green-box-2"></div>
          <div className="act-cont">Daily Activity</div>
          <div className="cal-act">
            <Calendar className="cal-act-1" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExistActivity;
