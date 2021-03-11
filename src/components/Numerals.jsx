import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import numerals_img from '../images/numerals_img.JPG';

function Numerals() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ numerals_img }
            alt="numerals_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Numerals;
