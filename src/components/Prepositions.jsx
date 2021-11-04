import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles.css';

function Prepositions() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Rules</h5>
            <ul>
              <li>Prepositions always have an object and they always precede their object</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Definitions</h5>
            <ul>
              <li>ἀπό: GEN (from)</li>
              <li>διά: GEN (through), ACC (on account of)(because of)</li>
              <li>εἰς: ACC (into)</li>
              <li>ἐκ: GEN (out of)</li>
              <li>ἐν: DAT (in)</li>
              <li>μετά: GEN (with), ACC (after)</li>
              <li>πρός: ACC (to)</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Prepositions;
