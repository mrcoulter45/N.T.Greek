import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eiui_img from '../images/eiui_img.JPG';

function Eiui() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ eiui_img }
            alt="eiui_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Eiui;
