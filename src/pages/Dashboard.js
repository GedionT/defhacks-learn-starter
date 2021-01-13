import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import HeaderExistUser from '../components/common/HeaderExistUser';
import CardComponent from '../components/common/CardComponent';

import firebase from 'firebase/app';
import AppContext from '../context/AppContext';

const db = firebase.firestore();

function Dashboard() {
  const { user, courses } = useContext(AppContext);
  const history = useHistory();

  const [enrolledCourses, setEnrolledCourses] = useState({});

  // If user is not signed in, forbid the user from browsing this page
  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((userDocument) => {
          if (userDocument.exists && userDocument.data().enrolledCourses) {
            setEnrolledCourses(userDocument.data().enrolledCourses);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user, courses]);

  return (
    <div className="general_container">
      <Row style={{ marginRight: 0, marginLeft: 0 }}>
        <Col xs={3} md={3} lg={3}>
          <Sidebar />
        </Col>

        <Col xs={9} md={9} lg={9} style={{ position: 'relative' }}>
          <HeaderExistUser />
          <CardComponent
            enrolledCourses={enrolledCourses}
            courseData={courses}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
