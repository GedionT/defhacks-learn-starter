import React, { useContext, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Calendar from '../components/calendar/calendar';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

function ExistActivity() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  });
  return (
    <div className="general_container">
      <Row style={{ marginRight: 0, marginLeft: 0 }}>
        <Col xs={3} lg={3}>
          <Sidebar />
        </Col>

        <Col xs={9} lg={9} style={{ position: 'relative' }}>
          <div className="blue-box-1"></div>
          <div className="blue-box-2">
            <div className="exist-title">$username</div>
          </div>

          <div className="green-box-1">
            <div className="act-cont">Daily Activity</div>
            <div className="cal-act">
              <Calendar />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExistActivity;
