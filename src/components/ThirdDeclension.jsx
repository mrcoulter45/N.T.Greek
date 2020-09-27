import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import third_declension_img from '../images/third_declension_img.JPG';
import third_declension_ua_img from '../images/third_declension_ua_img.JPG';

function ThirdDeclension() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ third_declension_img }
            alt="third_declension_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ third_declension_ua_img }
            alt="third_declension_ua_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ThirdDeclension;
