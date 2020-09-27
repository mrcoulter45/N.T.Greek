import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import alphabet_img from '../images/alphabet_img.JPG';

function Alphabet() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ alphabet_img }
            alt="alphabet_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Alphabet;
