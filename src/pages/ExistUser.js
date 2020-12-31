import React, { useContext, useEffect, useState, useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

// import { db } from '../firebase.js';
import firebase from 'firebase/app';
import { CodeRounded } from '@material-ui/icons';
import { forEach } from 'react-bootstrap/ElementChildren';

const db = firebase.firestore();

function ExistUser() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  const [lessonList, setLessonList] = useState([]);
  const [CourseNames, setCourseName] = useState([]);
  const [courseCount, setCourseCount] = useState(0);

  function getCourseName() {
    const coursesRef = db.collection('Courses');
    //Querying through the Course collection
    coursesRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        setCourseName((prevState) => [...prevState, doc.id]);
        setCourseCount((prevState) => prevState + 1);
        // setLessonList((prevState) => [...prevState, new Array(0)]);
      });
    });
  }

  function getLessonList() {
    const coursesRef = db.collection('Courses');
    coursesRef.get().then((snapshot) => {
      if (snapshot) {
        snapshot.forEach((doc) => {
          setLessonList((prevState) => [...prevState, doc.data().courseJSON]);
        });
      }
    });
  }

  // If user is not signed in, forbid the user from browsing this page
  useEffect(() => {
    if (!user) {
      history.push('/signin');
    }
  });

  // Set documents during first render
  useEffect(() => {
    getCourseName();
    getLessonList();
  }, []);

  useEffect(() => {
    console.log(CourseNames);
  }, [CourseNames]);

  useEffect(() => {
    console.log(courseCount);
  }, [courseCount]);

  // useEffect(() => {
  //   lessonList.forEach((lessonArr, index) => {
  //     console.log(lessonArr[index]);
  //   });
  // }, [lessonList]);

  // Creates the list component from our arrays
  const coursesListComponent = CourseNames.map((course, Cindex) => {
    return (
      <li>
        {course}
        <ul>Okay boomer</ul>
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
