import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

// import { db } from '../firebase.js';
import firebase from 'firebase/app';

const db = firebase.firestore();

function ExistUser() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  const [courseList, setCourseList] = useState([]);

  const [lessonList, setLessonList] = useState([]);

  function getDocument() {
    const coursesRef = db.collection('Courses');

    coursesRef.get().then((querySnapshot) => {
      querySnapshot.forEach((docName) => {
        setCourseList((oldCl) => [...oldCl, { name: docName.id }]);
        querySnapshot.forEach((field) => {
          console.log(field.data());
          field.data().courseJSON.forEach((lesson) => {
            console.log(lesson.lesson_name);
            setLessonList((previousLesson) => [
              ...previousLesson,
              lesson.lesson_name,
            ]);
          });
        });
      });
    });
  }

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  });

  useEffect(() => {
    getDocument();
    console.log(courseList);
  });

  const coursesListComponent = courseList.map((c) => {
    return (
      <li>
        {c.name}
        <ul>
          {lessonList.map((lesson) => {
            return <li>{lesson}</li>;
          })}
        </ul>
      </li>
    );
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
            <div className="exist-title">Welcome back, {user.displayName}!</div>
          </div>

          <div className="content-box-1"></div>
          <div className="content-box-2 pl-2">
            <div className="box-title">My Courses</div>
            <div className="box-content">
              <ul>{coursesListComponent}</ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExistUser;
