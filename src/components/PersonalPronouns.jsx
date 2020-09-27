import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import personal_pronoun_1st_img from '../images/personal_pronoun_1st_img.JPG';
import personal_pronoun_2nd_img from '../images/personal_pronoun_2nd_img.JPG';
import personal_pronoun_3rd_img from '../images/personal_pronoun_3rd_img.JPG';

function PersonalPronouns() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ personal_pronoun_1st_img }
            alt="personal_pronoun_1st_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ personal_pronoun_2nd_img }
            alt="personal_pronoun_2nd_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
        <Col md="auto">
          <img
            src={ personal_pronoun_3rd_img }
            alt="personal_pronoun_3rd_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalPronouns;
