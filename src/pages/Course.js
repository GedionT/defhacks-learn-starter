import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/course.css';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../components/common/CourseSidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './Course-Components/videoPlayer';
import CodePlayground from './Course-Components/codePlayground';
import QuizPanel from './Course-Components/quizPanel';

// import { db } from '../firebase';

const videoObj = {
  videoName: 'Introduction to HTML - Lesson 1',
  instructor: 'John Doe',
  createdDate: 'Jan 1st, 2021',
};

function Course() {
  const [navbarHeight, setNavbarHeight] = useState('75px');

  useEffect(() => {
    setNavbarHeight(document.getElementById('app_navbar').style.height);
    // console.log('Course');
    // db.collection('Courses')
    //   .get()
    //   .then((snapshot) => {
    //     console.log('Test');
    //   });
  }, []);

  return (
    <div
      className="course_container"
      style={{ height: `calc(100vh - ${navbarHeight})` }}
    >
      <Row>
        <Col xs={3} lg={3}>
          <Sidebar />
        </Col>
        <Col
          xs={9}
          lg={9}
          style={{ height: `calc(100vh - ${navbarHeight})`, overflowY: 'auto' }}
        >
          <Switch>
            <Route path="/course/video">
              <VideoPlayer video={videoObj} />
            </Route>
            <Route path="/course/code">
              <CodePlayground />
            </Route>
            <Route path="/course/test">
              <QuizPanel />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
}
export default Course;
