import React from 'react';
import '../../styles/exist.css';
import '../../styles/dashboard.css';
import { Card, Row, Col } from 'react-bootstrap';

function CardComponent() {
  return (
    <div className="card-container">
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Card className="card-component">
            <Card.Body>
              <Card.Title>Intro to HTML/CSS</Card.Title>
              <hr style={{ color: 'white' }} />
              <Card.Text>
                <em>Next Lesson</em> Tables
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <Card className="card-component">
            <Card.Body>
              <Card.Title>Intro to Git</Card.Title>
              <hr style={{ color: 'white' }} />
              <Card.Text>
                <em>Next Lesson</em> Push and Pull
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <Card className="card-component">
            <Card.Body>
              <Card.Title>Intro to JavaScript</Card.Title>
              <hr style={{ color: 'white' }} />
              <Card.Text>
                <em>Next Lesson</em> Logging text to console
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardComponent;
