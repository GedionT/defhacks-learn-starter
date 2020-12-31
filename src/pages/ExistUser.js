import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

import firebase from 'firebase/app';
import Swal from 'sweetalert2';

const db = firebase.firestore();

function ExistUser() {
  const { user } = useContext(AppContext);
  const history = useHistory();

  const [lessonList, setLessonList] = useState([]);
  const [CourseNames, setCourseName] = useState([]);
  const [EnrolledCourses, setEnrolledCourses] = useState([]);
  const [USER_ID, setUSER_ID] = useState('');

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
    } else {
      setUSER_ID(user.uid);
    }
  });

  useEffect(() => {
    if (USER_ID !== '') {
      async function getEnrolledCourses() {
        setUSER_ID(user.uid);
        const userCollection = await db
          .collection(USER_ID + '-profile')
          .doc('Enrolled Courses');

        const doc = await userCollection
          .get()
          .then((doc) => {
            setEnrolledCourses(doc.data().enrolledCourses);
          })
          .catch((err) => console.log(err));
      }
      getEnrolledCourses();
    }
  }, [USER_ID]);

  // Set documents during first render
  useEffect(() => {
    setUSER_ID(user.uid);
    async function getCourseName() {
      const coursesRef = await db.collection('Courses');
      //Querying through the Course collection
      coursesRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          setCourseName((prevState) => [...prevState, doc.id]);
          // setLessonList((prevState) => [...prevState, new Array(0)]);
        });
      });
    }

    // getEnrolledCourses();
    getCourseName();
    getLessonList();
  }, []);

  async function saveEnrolledCourse(course) {
    // var admin = require('firebase-admin');
    const userCollection = await db
      .collection(USER_ID + '-profile')
      .doc('Enrolled Courses');

    userCollection.get().then((snapshot) => {
      if (snapshot.exists) {
        const res = userCollection.update({
          enrolledCourses: course,
        });
      } else {
        const res = userCollection.set({
          enrolledCourses: course,
        });
      }
    });
    // const res = await userCollection.set({
    //   enrolledCourses: course,
    // });
  }

  useEffect(() => {
    if (EnrolledCourses.length !== 0) {
      saveEnrolledCourse(EnrolledCourses);
    }
  }, [EnrolledCourses]);

  // Creates the list component from our arrays
  const coursesListComponent = CourseNames.map((course, Cindex) => {
    async function enrollPopup() {
      Swal.fire({
        icon: 'info',
        title: course,
        html: '<b>Number of Lessons: </b>' + numLesson,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Enroll this Course',
        focusConfirm: true,
        backdrop: 'swal2-backdrop-show',
      }).then((result) => {
        if (result.isConfirmed) {
          if (!EnrolledCourses.includes(course)) {
            setEnrolledCourses((prevState) => [...prevState, course]);
            Swal.fire({
              title: 'Success',
              html:
                'You are successfully enrolled in our <b>' +
                course +
                '</b> course, ' +
                user.displayName +
                '!',
              icon: 'success',
              confirmButtonText: 'Done',
            });
          } else {
            Swal.fire({
              title: 'Failed',
              icon: 'error',
              html:
                'You are already enrolled in our <b>' + course + '</b> course!',
            });
          }
        }
      });
    }

    var numLesson = lessonList[Cindex].length;
    return (
      <li id={Cindex} className="course-name" onClick={enrollPopup}>
        {course}
        <ul>
          {lessonList[Cindex].map((lesson, Lindex) => {
            return <li id={Lindex}>{lesson.lesson_name}</li>;
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
            <div className="box-title">Available Courses</div>
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
