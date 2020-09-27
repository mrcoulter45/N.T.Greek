import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import article_img from '../images/article_img.JPG';

function Article() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="auto">
          <img
            src={ article_img }
            alt="article_img"
            style={{
              width: '500px'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Article;
