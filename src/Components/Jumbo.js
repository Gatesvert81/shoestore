import React from 'react';
import { Container, Button, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import '../Assets/jumbo.css';
import ig from '../Assets/ig.png';
import twi from '../Assets/twi.png';
import fb from '../Assets/fb.png';

const Jumbo = (props) => {
  return (
      <Container id="jumbo" >
      <Row>
        <Col xs="12" sm="12" md="6" lg="6" >
            <h1>SHOELAN</h1>
            <p>
                Welcome to the best online store for purchasing shoes from your favourate brands at an affordable prices you cant resist.
            </p>
            <Button outline id="button" color="light">
                START PURCHASING
            </Button>
            <Nav id="foot" style={{ justifyContent: "center" , marginBottom:"0px" }} sticky >
              <NavItem>
                <NavLink href="#">
                  <img src={ig} alt="instagram" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                <img src={fb} alt="facebook" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                    <img src={twi} alt="twitter" />
                </NavLink>
              </NavItem>
            </Nav>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6" >
            
        </Col>
      </Row>
      </Container>
  );
};

export default Jumbo;