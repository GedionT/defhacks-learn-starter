import React, { useState, useEffect, useContext } from 'react';
import { Link as RouteLink, withRouter, useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import '../styles/newuser.css';
import { Link } from 'react-scroll';
import AppContext from '../context/AppContext';
import { Spinner } from 'react-bootstrap';
import SchoolIcon from '@material-ui/icons/School';
import Swal from 'sweetalert2';
import firebase from 'firebase/app';

const db = firebase.firestore();

const NewUserCourses = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [courseList, setCourseList] = useState([]);
  const [coursesLoaded, setCourseLoaded] = useState(false);

  const { user } = useContext(AppContext);
  const history = useHistory();

  const toggleCourseActive = (courseIndex) => {
    const updatedCourses = [...courseList];
    updatedCourses[courseIndex]['isActive'] = !courseList[courseIndex][
      'isActive'
    ];
    setCourseList(updatedCourses);
  };

  const toggleCoursePanel = (courseIndex) => {
    const updatedCourses = [...courseList];
    updatedCourses[courseIndex]['showPanel'] = !courseList[courseIndex][
      'showPanel'
    ];
    setCourseList(updatedCourses);
  };

  const toggleCourseInterested = (courseIndex) => {
    const updatedCourses = [...courseList];
    updatedCourses[courseIndex]['interested'] = !courseList[courseIndex][
      'interested'
    ];
    setCourseList(updatedCourses);
    if (courseList[courseIndex].interested) {
      Swal.fire({
        title: 'Success',
        html:
          'Your interest for <b>' +
          courseList[courseIndex].name +
          '</b> course is <i>registered</i>, ' +
          user.displayName +
          '!',
        icon: 'success',
        confirmButtonText: 'Done',
      });
    } else {
      Swal.fire({
        title: 'Success',
        html:
          'Your interest for <b>' +
          courseList[courseIndex].name +
          '</b> course is <i>deregistered</i>, ' +
          user.displayName +
          '!',
        icon: 'success',
        confirmButtonText: 'Done',
      });
    }
  };

  const submitCourses = () => {
    history.push({
      pathname: '/newuserfinal',
      state: {
        experience: props.location.state.experience,
        courses: courseList.filter((course) => course.interested),
      },
    });
  };

  useEffect(() => {
    if (!user) {
      history.push('/signin');
    } else if (user.metadata) {
      // Check if the user is logged on for the first time
      if (user.metadata.creationTime !== user.metadata.lastSignInTime) {
        // Redirect to dashboard if it is not the first time
        history.push('/dashboard');
      } else if (!props.location.state) {
        // If the page is not rendered from /newuser, redirect it to /newuser
        history.push('/newuser');
      }
    }
  });

  useEffect(() => {
    db.collection('Courses')
      .get()
      .then((courseDocuments) => {
        let courses = [];
        courseDocuments.forEach((courseDoc) => {
          let lessons = [];
          courseDoc.data().courseJSON.forEach((lesson) => {
            lessons.push(lesson.lesson_name);
          });
          courses.push({
            name: courseDoc.id,
            isActive: false,
            showPanel: false,
            interested: false,
            lessons: lessons,
          });
        });
        setCourseList(courses);
        setCourseLoaded(true);
      })
      .catch((courseError) => {
        console.error(courseError);
        setCourseLoaded(true);
      });
  }, []);

  return (
    <div className="new-user">
      <img alt="" src="/assets/Polygon_6.png" className="polygon6" />
      <img alt="" src="/assets/Ellipse.png" className="ellipse" />
      <img alt="" src="/assets/Polygon_5.png" className="polygon5" />
      <div className="upper-box" style={matches ? { width: '85%' } : null}>
        Please select which course(s) you would like to <br /> take.
      </div>
      <div className="lower-box" style={matches ? { width: '85%' } : null}>
        {!coursesLoaded && (
          <Spinner className="spinner" animation="border" variant="primary" />
        )}
        {courseList.map((course, courseIndex) => {
          return (
            <>
              <div className="options">
                <Link
                  activeClass="active"
                  to="options"
                  spy={true}
                  smooth={true}
                  offset={200}
                  duration={500}
                ></Link>
                {course.name}
                <div
                  className={course.isActive ? 'arrow-up' : 'arrow-down'}
                  onClick={() => {
                    toggleCourseActive(courseIndex);
                    toggleCoursePanel(courseIndex);
                  }}
                ></div>
                <button
                  className={
                    course.interested ? 'interested-selected' : 'interested'
                  }
                  onClick={() => {
                    toggleCourseInterested(courseIndex);
                  }}
                  style={matches ? { width: '10%', fontSize: '50%' } : null}
                >
                  Interested
                </button>
              </div>
              {course.showPanel && (
                <div className="info-panel">
                  Lessons Offered -
                  {course.lessons.map((lesson, lessonIndex) => (
                    <div>
                      <SchoolIcon /> {lesson}
                    </div>
                  ))}
                </div>
              )}
            </>
          );
        })}
        <br />
        <input
          type="submit"
          value="Next"
          className="submit"
          onClick={submitCourses}
          style={
            matches ? { width: '10%', fontSize: '70%', height: '15%' } : null
          }
        />
      </div>
    </div>
  );
};

export default withRouter(NewUserCourses);
