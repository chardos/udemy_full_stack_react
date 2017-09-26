import React from 'react';
import {Navbar, Nav, NavItem, Badge} from 'react-bootstrap';

export default class Menu extends React.Component {

  render() {
    return(
      <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/about">About</NavItem>
              <NavItem eventKey={2} href="/contact-us">Contact us</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">admin</NavItem>
              <NavItem eventKey={2} href="#">
                Your cart
                <Badge className="badge">1</Badge>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
