import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reciprocal_pronoun_img from '../images/reciprocal_pronoun_img.JPG';

function ReciprocalPronoun() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ reciprocal_pronoun_img }
            alt="reciprocal_pronoun_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ReciprocalPronoun;
