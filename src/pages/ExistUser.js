import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

import { db } from '../firebase.js';

function ExistUser() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  });
  var coursesList = [];
  async function getDocuments() {
    const events = await db.collection('Courses');
    events.get().then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id };
      });
      tempDoc.forEach((doc) => {
        console.log(doc.id);
      });
    });
  }

  useEffect(() => {
    const coursesRef = db.collection('Courses');
    coursesRef.get().then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id };
      });
      tempDoc.forEach((docID) => {
        console.log(docID.id);
        try {
          coursesList.push(docID.id);
          console.log('Pushed');
        } catch (e) {
          console.log('Push failed, ' + e);
        }
      });
    });
    db.collection('Courses')
      .doc('Introduction to Web Development')
      .collection('HTML')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (!doc.exists) {
            console.log("Doesn't exist");
          } else {
            console.log('Exist');
          }
        });
      });
  }, []);

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
            <div className="exist-title">Welcome back, {user.displayName}!</div>
          </div>

          <div className="content-box-1"></div>
          <div className="content-box-2 pl-2">
            <div className="box-title">My Courses</div>
            <div className="box-content">
              <ul>
                {coursesList.map((course) => {
                  return <li>{course}</li>;
                })}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExistUser;
