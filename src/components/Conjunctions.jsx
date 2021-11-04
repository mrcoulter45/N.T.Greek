import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles.css';

function Conjunctions() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <h5>Definitions</h5>
            <ul>
              <li>καί: and</li>
              <li>δέ: but</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Conjunctions;
