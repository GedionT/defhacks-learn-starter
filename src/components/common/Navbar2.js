import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';

function Navbar2() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/assets/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          DEF HACKS LEARN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signin">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="/signout">Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbar2;
