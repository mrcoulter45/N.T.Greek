import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vowels_img from '../images/vowels_img.JPG';

function Vowels() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ vowels_img }
            alt="vowels_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Vowels;
