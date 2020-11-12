import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/course.css';
import Sidebar from '../components/common/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './Course-Components/videoPlayer';

const videoObj = {
  videoname: 'Introduction to HTML - Lesson 1',
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
  return (
    <>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
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
      </Row>{' '}
    </>
  );
}
export default Course;
