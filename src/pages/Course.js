import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/course.css';
import Sidebar from '../components/common/CourseSidebar';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './Course-Components/videoPlayer';

const videoObj = {
  videoName: 'Introduction to HTML - Lesson 1',
  instructor: 'John Doe',
  createdDate: 'Jan 1st, 2021',
};

function CodePart() {
  return <h1>Code here</h1>;
}
function TestPart() {
  return <h1>Test here</h1>;
}

function Course() {
  const [navbarHeight, setNavbarHeight] = useState('75px');

  useEffect(() => {
    setNavbarHeight(document.getElementById('app_navbar').style.height);
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
              <CodePart />
            </Route>
            <Route path="/course/test">
              <TestPart />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
}
export default Course;
