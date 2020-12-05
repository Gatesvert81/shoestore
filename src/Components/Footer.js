import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import '../Assets/navigation.css'
import ig from '../Assets/ig.png';
import twi from '../Assets/twi.png';
import fb from '../Assets/fb.png';

const Footer = (props) => {
  return (
    <div>
      <Nav id="nav" style={{ justifyContent: "center" , marginBottom:"0px" }} sticky >
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
    </div>
  );
}

export default Footer;