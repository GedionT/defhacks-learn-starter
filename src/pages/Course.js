import React, { useContext, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import '../styles/course.css';
import { Row, Col, Spinner } from 'react-bootstrap';
import Sidebar from '../components/common/CourseSidebar';
import AppContext from '../context/AppContext';
import firebase from 'firebase/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './Course-Components/videoPlayer';
import CodePlayground from './Course-Components/codePlayground';
import QuizPanel from './Course-Components/quizPanel';

// import { db } from '../firebase';

// Dummy object
const videoObj = {
  videoName: 'Introduction to HTML - Lesson 1',
  instructor: 'John Doe',
  createdDate: 'Jan 1st, 2021',
};

const db = firebase.firestore();

function Course({ match }) {
  const [userID, setUserID] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState('75px');
  const [courseID, setCourseID] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [coursesLoaded, setCoursesLoaded] = useState(false);
  const [enrolledCourseData, setEnrolledCourseData] = useState(null);
  const [isUserEnrolled, setIsUserEnrolled] = useState(true);
  const [currentLesson, setCurrentLesson] = useState({});
  const [currentLessonNumber, setCurrentLessonNumber] = useState(-1);
  const [currentDisplay, setCurrentDisplay] = useState('Home');

  const { user, courses } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    setNavbarHeight(document.getElementById('app_navbar').style.height);
    setCourseID(match.params.id);
  }, []);

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else {
      setUserID(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (userID) {
      db.collection('users')
        .doc(user.uid)
        .get()
        .then((userDocument) => {
          if (userDocument.exists && userDocument.data().enrolledCourses) {
            setEnrolledCourseData(userDocument.data().enrolledCourses);
            // Set flag for user enrollment based on whether the courseID is a key in the enrolledCourses for the user
            setIsUserEnrolled(courseID in userDocument.data().enrolledCourses);
          } else {
            // Set flag for user enrollment to false if either the user document does not exist or user does not have any enrolledCourses
            setIsUserEnrolled(false);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [userID]);

  useEffect(() => {
    // If courses is loaded in the context, set course data
    if (courses && courses[courseID] !== courseData) {
      setCoursesLoaded(true);
      setCourseData(courses[courseID]);
    }
  }, [courses]);

  useEffect(() => {
    if (enrolledCourseData) {
      setCurrentLessonNumber(enrolledCourseData[courseID].currentLessonNumber);
    }
  }, [enrolledCourseData]);

  useEffect(() => {
    if (courseData) {
      if (currentLessonNumber < courseData.lessons.length) {
        setCurrentLesson(courseData.lessons[currentLessonNumber]);
        // Update the currentLessonNumber in firstore for the user's enrolledCourses
        let updatedEnrolledCourses = enrolledCourseData;
        updatedEnrolledCourses[
          courseID
        ].currentLessonNumber = currentLessonNumber;
        db.collection('users').doc(userID).update(
          {
            enrolledCourses: updatedEnrolledCourses,
          },
          { merge: true }
        );
      } else {
        // If the current lesson number is greater than the total number of lessons, reset it to 0
        let updatedEnrolledCourses = enrolledCourseData;
        updatedEnrolledCourses[courseID].currentLessonNumber = 0;
        db.collection('users').doc(userID).update(
          {
            enrolledCourses: updatedEnrolledCourses,
          },
          { merge: true }
        );
        setCurrentLesson(courseData.lessons[0]);
      }
    }
  }, [currentLessonNumber]);

  const changeDisplay = (display) => {
    console.log(display);
    setCurrentDisplay(display);
  };

  return (
    <div
      className="course_container"
      style={{ height: `calc(100vh - ${navbarHeight})` }}
    >
      {/* Show spinner till the courses are loaded and till the enrolledCourseData is set */}
      {!coursesLoaded ||
        (!enrolledCourseData && (
          <Spinner className="spinner" animation="border" variant="primary" />
        ))}
      {!courseData && <div>Course Not Found</div>}
      {!isUserEnrolled && <div>You are not enrolled in this course</div>}
      {courseData && isUserEnrolled && (
        <Row>
          <Col xs={3} lg={3}>
            <Sidebar
              lessonName={currentLesson.lesson_name}
              changeDisplay={changeDisplay}
            />
          </Col>
          <Col
            xs={9}
            lg={9}
            style={{
              height: `calc(100vh - ${navbarHeight})`,
              overflowY: 'auto',
            }}
          >
            <button
              className="navigation-button"
              disabled={currentLessonNumber <= 0}
              onClick={() => {
                setCurrentLessonNumber(currentLessonNumber - 1);
              }}
            >
              Prev Lesson
            </button>
            <button
              className="navigation-button float-right"
              disabled={currentLessonNumber >= courseData.lessons.length - 1}
              onClick={() => {
                setCurrentLessonNumber(currentLessonNumber + 1);
              }}
            >
              Next Lesson
            </button>
            {(function () {
              switch (currentDisplay) {
                case 'Home':
                  return <div>Home</div>;
                  break;
                case 'Videos':
                  return <VideoPlayer video={videoObj} />;
                  break;
                case 'Code':
                  return <CodePlayground />;
                  break;
                case 'Tests':
                  return <QuizPanel />;
                  break;
                default:
                  return null;
              }
            })()}
          </Col>
        </Row>
      )}
    </div>
  );
}
export default Course;
