import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contraction0_img from '../images/contraction0_img.JPG';
import contraction1_img from '../images/contraction1_img.JPG';

function ContractVerbs() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ contraction0_img }
            alt="contraction0_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ contraction1_img }
            alt="contraction1_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContractVerbs;