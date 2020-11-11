import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/course.css';
import Sidebar from '../components/common/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const videoObj = {
  videoname: 'Introduction to Git - Lesson 1',
  instructor: 'John Doe',
  createdDate: 'Jan 1st, 2021',
};

function VideoPart(props) {
  var video = props.video;

  var vidplayerCSS = {
    height: '500px',
    width: '600px',
    backgroundColor: 'gray',
    textAlign: 'center',
  };

  return (
    <>
      <h1>{video.videoname}</h1>
      <h4>Instructor: {video.instructor}</h4>
      <h4>Published on: {video.createdDate}</h4>
      <div className="video-player" style={vidplayerCSS}>
        <h4 className="align-middle">Video Player</h4>
      </div>
    </>
  );
}
function CodePart() {
  return <h1>Code here</h1>;
}
function TestPart() {
  return <h1>Test here</h1>;
}

function Course() {
  return (
    <Container className="course_container">
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Switch>
            <Route path="/course/video">
              <VideoPart video={videoObj} />
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
    </Container>
  );
}
export default Course;
