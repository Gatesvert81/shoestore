import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../Assets/navigation.css'

const Navigation = (props) => {
  return (
    <div>
      <Nav id="nav" style={{ justifyContent: "center" }} >
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact Us</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;