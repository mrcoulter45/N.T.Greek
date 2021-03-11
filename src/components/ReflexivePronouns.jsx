import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reflexive_pronouns0_img from '../images/reflexive_pronouns0_img.JPG';
import reflexive_pronouns1_img from '../images/reflexive_pronouns1_img.JPG';
import reflexive_pronouns2_img from '../images/reflexive_pronouns2_img.JPG';

function ReflexivePronouns() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto" style={{maxWidth: "500px"}}>
          <img
            src={ reflexive_pronouns0_img }
            alt="reflexive_pronouns0_img"
            style={{
              width: '500px'
            }}
          />
          <img
            src={ reflexive_pronouns1_img }
            alt="reflexive_pronouns1_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ reflexive_pronouns2_img }
            alt="reflexive_pronouns2_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ReflexivePronouns;
