import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { Badge, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CourseHome({ lessonData }) {
  console.log(lessonData);
  return (
    <div className="mx-4 my-3">
      <h2>About this course</h2>
      <h4>
        <Badge variant="success">{lessonData.difficulty}</Badge>
      </h4>
      <h5 className="text-muted">{lessonData.time}</h5>
      <Row>
        <Col xs={6} lg={8}>
          {lessonData.lesson_notes}
        </Col>
        <Col xs={6} lg={4} className="course-objective-container">
          <h4 className="text-center">
            <FontAwesomeIcon icon={faCrosshairs} /> Course Objectives
          </h4>
          <ul>
            {lessonData.objectives &&
              lessonData.objectives.map((objective, LOindex) => (
                <li key={LOindex}>{objective}</li>
              ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default CourseHome;
