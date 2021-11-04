import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles.css';

function Nouns() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Rules</h5>
            <ul>
              <li>The case of the noun determines its grammatical function</li>
            </ul>
          </div>
          <div className="textBox">
            <h5>Parsing Procedure</h5>
            <ul>
              <li>Gender</li>
              <li>Case</li>
              <li>Number</li>
              <li>Source - Eg. "Nominative Singular" - Vocabulary Form</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Nouns;
