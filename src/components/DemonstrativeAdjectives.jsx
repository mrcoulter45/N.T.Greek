import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import demonstrative_adjectives_img from '../images/demonstrative_adjectives_img.JPG';

function DemonstrativeAdjectives() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ demonstrative_adjectives_img }
            alt="demonstrative_adjectives_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DemonstrativeAdjectives;
