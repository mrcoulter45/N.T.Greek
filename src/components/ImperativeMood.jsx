import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imperative_mood0_img from '../images/imperative_mood0_img.JPG';
import imperative_mood1_img from '../images/imperative_mood1_img.JPG';

function ImperativeMood() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ imperative_mood0_img }
            alt="imperative_mood0_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ imperative_mood1_img }
            alt="imperative_mood1_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ImperativeMood;
