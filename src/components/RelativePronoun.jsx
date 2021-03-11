import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import relative_pronoun_img from '../images/relative_pronoun_img.JPG';

function RelativePronoun() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ relative_pronoun_img }
            alt="relative_pronoun_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default RelativePronoun;
