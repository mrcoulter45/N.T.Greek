import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles.css';

function History() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <div className="textBox">
            <p>Homeric -> Classical -> Helenistic (323 BC-323AD)</p>
            <p>Latin: no definite article</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
