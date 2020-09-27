import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import punctuation_img from '../images/punctuation_img.JPG';

function Punctuation() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ punctuation_img }
            alt="punctuation_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Punctuation;
