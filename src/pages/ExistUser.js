import React, { useContext, useEffect, useState, useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

// import { db } from '../firebase.js';
import firebase from 'firebase/app';
import { CodeRounded } from '@material-ui/icons';

const db = firebase.firestore();

function ExistUser() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  const [courseList, setCourseList] = useState([]);
  const [lessonList, setLessonList] = useState([]);
  const [CourseName, setCourseName] = useState([]);
  const [courseIndex, setCourseIndex] = useState(0);

  function getDocument() {
    const coursesRef = db.collection('Courses');
    //Querying through the Course collection
    coursesRef.get().then((querySnapshot) => {
      // Querying through each document
      querySnapshot.forEach((docName) => {
        // Append the course to courseName array.
        setCourseName((prevState) => [...prevState, docName.id]);
        querySnapshot.forEach((field) => {
          // console.log(field.data()); // Debugging purpose
          // Each course is an array of object, loop through each lesson
          field.data().courseJSON.forEach((lesson) => {
            var L_NAME = lesson.lesson_name;
            // Append each lesson to lesson
            setLessonList((prevState) => [...prevState, L_NAME]);
            if (lessonList.length !== 0) {
              setCourseList((prevState) => [
                ...prevState,
                (prevState[courseIndex].lessonList = lessonList),
              ]);
            }
          });
          setLessonList([]);
        });
        setLessonList([]);
      });
      setCourseIndex((prevState) => prevState + 1);
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
    getDocument();
  }, []);

  useEffect(() => {
    console.log(courseList);

    // Remove all array entries
    courseList.forEach((course, index) => {
      if (Array.isArray(course)) {
        setCourseList(courseList.filter((c) => c !== course));
      }
    });
  }, [courseList]);

  useEffect(() => {
    CourseName.forEach((course) => {
      setCourseList((prevState) => [
        ...prevState,
        { name: course, lessonList: [] },
      ]);
    });
  }, [CourseName]);

  useEffect(() => {
    if (lessonList.length !== 0) {
      setCourseList((prevState) => [
        ...prevState,
        (prevState[courseIndex].lessonList = lessonList),
      ]);
    }
  }, [lessonList]);

  // Creates the list component from our arrays
  const coursesListComponent = courseList.map((c) => {
    return (
      <li>
        {c.name}
        <ul>
          {/*/!*Map through lesson array and append as nested list*!/*/}
          {/*{c.lessonList.map((lesson) => {*/}
          {/*  return <li>{lesson}</li>;*/}
          {/*})}*/}
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
