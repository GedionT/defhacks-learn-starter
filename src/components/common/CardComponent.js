import React from 'react';
import '../../styles/exist.css';
import '../../styles/dashboard.css';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

function CardComponent({ enrolledCourses, courseData }) {
  const redirectToCourse = (courseID) => {
    console.log('Redirecting to course ' + courseID);
  };

  if (enrolledCourses && Object.keys(enrolledCourses).length > 0) {
    return (
      <div className="card-container">
        <Row>
          {Object.keys(enrolledCourses).map((courseID) => {
            const currentLessonNumber =
              enrolledCourses[courseID].currentLessonNumber;
            const courseName = courseData[courseID].name;
            const nextLessonName =
              courseData[courseID].lessons[currentLessonNumber].lesson_name;
            return (
              <Col xs={12} md={6} lg={6}>
                <Card
                  className="card-component"
                  onClick={() => {
                    redirectToCourse(courseID);
                  }}
                >
                  <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <hr style={{ color: 'white' }} />
                    <Card.Text>
                      <Row>
                        <Col xs={3} md={5} lg={5}>
                          <em>Next Lesson:</em>
                        </Col>
                        <Col xs={9} md={7} lg={7}>
                          {nextLessonName}
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  } else {
    console.log('s');
    return (
      <div className="no-courses-container">
        <h3>You have not enrolled in any course</h3>
        <p className="no-courses-paragraph">
          Looks like you have not enrolled in any course currently. Please visit
          the Course tab to see all available courses.
        </p>
        <Link to="/ExistUser">
          <button className="coursepage-btn">Courses</button>
        </Link>
      </div>
    );
  }
}

export default CardComponent;
