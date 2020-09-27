import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import general_rules_of_accent_img from '../images/general_rules_of_accent_img.JPG';
import rule_of_verb_accent_img from '../images/rule_of_verb_accent_img.JPG';
import rule_of_noun_accent_img from '../images/rule_of_noun_accent_img.JPG';

function Accent() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ general_rules_of_accent_img }
            alt="general_rules_of_accent_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ rule_of_verb_accent_img }
            alt="rule_of_verb_accent_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ rule_of_noun_accent_img }
            alt="rule_of_noun_accent_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Accent;
