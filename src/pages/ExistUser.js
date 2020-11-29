import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

function ExistUser() {
  const USERNAME = 'admin';

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
            {' '}
            <div className="exist-title">Welcome back, {USERNAME}!</div>
          </div>

          <div className="content-box-1"></div>
          <div className="content-box-2 pl-2">
            <div className="box-title">My Courses</div>
            <div className="box-content">
              Intro to HTML, CSS
              <div className="mini-progress-1">Percent</div>
              Intro to Git
              <br />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExistUser;
