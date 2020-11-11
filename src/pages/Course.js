import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/course.css';
import Sidebar from '../components/common/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

function VideoPart() {
  return <h1>Video here</h1>;
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
              <VideoPart />
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
