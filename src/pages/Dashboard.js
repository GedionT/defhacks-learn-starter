import React from 'react';
import { Row, Col } from 'react-bootstrap';

//import firebase from '../components/firebase/base';
import Sidebar from '../components/common/Sidebar';
import HeaderExistUser from '../components/common/HeaderExistUser';
import CardComponent from '../components/common/CardComponent';

function Dashboard() {
  return (
    <div className="general_container">
      <Row>
        <Col xs={3} lg={3}>
          <Sidebar />
        </Col>

        <Col xs={9} lg={9}>
          <HeaderExistUser />
          <CardComponent />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
