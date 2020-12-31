import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import HeaderExistUser from '../components/common/HeaderExistUser';
import CardComponent from '../components/common/CardComponent';

import AppContext from '../context/AppContext';

function Dashboard() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  // If user is not signed in, forbid the user from browsing this page
  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  });

  return (
    <div className="general_container">
      <Row style={{ marginRight: 0, marginLeft: 0 }}>
        <Col xs={3} md={3} lg={3}>
          <Sidebar />
        </Col>

        <Col xs={9} md={9} lg={9} style={{ position: 'relative' }}>
          <HeaderExistUser />
          <CardComponent />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
