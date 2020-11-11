import React from 'react';
import '../../styles/exist.css';
import '../../styles/dashboard.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function CardComponent() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="card-component">
            <Card.Body>
              <Card.Title>Intro to HTML/CSS</Card.Title>
              <hr style={{ color: 'white' }} />
              <Card.Text>
                Next Lesson: Tables
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-component">
            <Card.Body>
              <Card.Title>Intro to Git</Card.Title>
              <hr style={{ color: 'white' }} />
              <Card.Text>
                Next Lesson: Push and Pull
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardComponent;
