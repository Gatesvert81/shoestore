import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../Assets/navigation.css'

const Navigation = (props) => {
  return (
    <div>
      <Nav id="nav" style={{ justifyContent: "center" }} >
        <NavItem>
          <NavLink href="#">
            <span>Home</span> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
          <span>Products</span> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
          <span>About Us</span> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
          <span>Contact Us</span> 
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;