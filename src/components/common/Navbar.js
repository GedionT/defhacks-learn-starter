import React from 'react';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import '../../styles/navbar.css';

function Navigation() {
  return (
    <>
      <Navbar bg="white" className="sticky-top">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="/assets/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/explore">Explore</Nav.Link>
        </Nav>
        <Form className="center-search">
          <input
            className="search-input"
            width="100%"
            type="text"
            placeholder="Search..."
          />
          <SearchIcon className="search" style={{ fontSize: 30 }} />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="/About">About</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/signin">Login</NavDropdown.Item>
            <NavDropdown.Item href="/signup">Register</NavDropdown.Item>
            <NavDropdown.Item href="/signout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
