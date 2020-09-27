import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import demonstrative_pronouns_img from '../images/demonstrative_pronouns_img.JPG';

function DemonstrativePronouns() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ demonstrative_pronouns_img }
            alt="demonstrative_pronouns_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DemonstrativePronouns;
