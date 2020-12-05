import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import '../Assets/jumbo.css'

const Jumbo = (props) => {
  return (
      <Container id="jumbo" >
      <Row>
        <Col xs="6">
            <h1>SHOELAN</h1>
            <p>
                Welcome to the best online store for purchasing shoes from your favourate brands at an affordable prices you cant resist.
            </p>
            <Button outline id="button" color="light">
                START PURCHASING
            </Button>
        </Col>
        <Col xs="6">
            
        </Col>
      </Row>
      </Container>
  );
};

export default Jumbo;