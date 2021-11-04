import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import είμί_img from '../images/είμί_img.JPG';
import είμί_present_active_participle_img from '../images/είμί_present_active_participle_img.JPG';

function Eiui() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ είμί_img }
            alt="είμί_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            className="imageBorder"
            src={ είμί_present_active_participle_img }
            alt="είμί_present_active_participle_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Rules</h5>
            <ul>
              <li>είμί takes a nominative, called a predicate nominative, as a direct object</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Eiui;

// future middle indicative
