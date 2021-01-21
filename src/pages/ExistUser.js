import React, { useContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

import Sidebar from '../components/common/Sidebar';
import '../styles/exist.css';
import AppContext from '../context/AppContext';

import firebase from 'firebase/app';
import Swal from 'sweetalert2';
import SchoolIcon from '@material-ui/icons/School';

const db = firebase.firestore();

function ExistUser() {
  const { user, courses } = useContext(AppContext);
  const history = useHistory();

  const [availableCourses, setAvailableCourses] = useState({});
  const [coursesLoaded, setCoursesLoaded] = useState(false);
  const [EnrolledCourses, setEnrolledCourses] = useState({}); // Object with key as the courseID
  const [userID, setUserID] = useState('');

  // If user is not signed in, forbid the user from browsing this page
  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      setUserID(user.uid);
    }
    // If courses is loaded in the context, set available courses
    if (courses && courses !== availableCourses) {
      setCoursesLoaded(true);
      setAvailableCourses(courses);
    }
  }, [user, courses]);

  // Update the enrolledcourses whenever userID is updated
  useEffect(() => {
    if (userID) {
      db.collection('users')
        .doc(userID)
        .get()
        .then((userDocument) => {
          if (userDocument.exists && userDocument.data().enrolledCourses) {
            setEnrolledCourses(userDocument.data().enrolledCourses);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [userID]);

  // Push course to firestore when EnrolledCourse state is updated
  useEffect(() => {
    try {
      if (userID) {
        // Set the enrolled courses for the user
        db.collection('users').doc(userID).set(
          {
            enrolledCourses: EnrolledCourses,
          },
          { merge: true } // This will merge the document if document already exists or create a new one if it does not exist
        );
      }
    } catch (e) {
      console.error(e);
    }
  }, [EnrolledCourses]);

  const coursesListComponent = Object.keys(availableCourses).map((courseID) => {
    const courseName = availableCourses[courseID].name;
    const lessons = availableCourses[courseID].lessons;
    const numberOfLessons = lessons.length;
    let enrolled = courseID in EnrolledCourses;
    function enrollPopup() {
      Swal.fire({
        icon: 'info',
        title: courseName,
        html: '<b>Number of Lessons: </b>' + numberOfLessons,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Enroll this Course',
        focusConfirm: true,
        backdrop: 'swal2-backdrop-show',
      }).then((result) => {
        if (result.isConfirmed) {
          if (!enrolled) {
            setEnrolledCourses((prevState) => {
              const currrentEnrolledCourses = { ...prevState };
              currrentEnrolledCourses[courseID] = { currentLessonNumber: 0 };
              return currrentEnrolledCourses;
            });
            Swal.fire({
              title: 'Success',
              html:
                'You are successfully enrolled in our <b>' +
                courseName +
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
                'You are already enrolled in our <b>' +
                courseName +
                '</b> course!',
            });
          }
        }
      });
    }

    function unenrollPopup() {
      Swal.fire({
        icon: 'warning',
        title: 'Confirm',
        text: 'Are you sure you want to unenroll?',
        showConfirmButton: true,
        confirmButtonText: 'Yes, I want to unenroll!',
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            setEnrolledCourses((prevState) => {
              // EnrolledCourses.filter(
              //   (enrolledCourse) => enrolledCourse !== courseName
              // )
              const currrentEnrolledCourses = { ...prevState };
              delete currrentEnrolledCourses[courseID];
              return currrentEnrolledCourses;
            });
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              html:
                'You have unenrolled in our <b>' +
                courseName +
                '</b> course! We hope to see you again!',
            });
          } catch (e) {
            Swal.fire({
              icon: 'error',
              title: 'Failed!',
              text: e,
            });
          }
        }
      });
    }

    return (
      <li id={courseID} key={courseID} className="course-name">
        {courseName}
        <div>
          {lessons.map((lesson) => {
            return (
              <div>
                <SchoolIcon /> {lesson.lesson_name}
              </div>
            );
          })}
        </div>
        <br />
        {enrolled ? (
          <Button variant="danger" onClick={unenrollPopup}>
            Unenroll
          </Button>
        ) : (
          <Button variant="primary" onClick={enrollPopup}>
            Enroll
          </Button>
        )}
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
              {!coursesLoaded && (
                <Spinner
                  className="spinner"
                  animation="border"
                  variant="primary"
                />
              )}
              <ul>{coursesListComponent}</ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExistUser;
