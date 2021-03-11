import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import verbs_img from '../images/verbs_img.PNG';

function Verbs() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ verbs_img }
            alt="verbs_img"
            style={{
              width: '1600px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Verbs;
