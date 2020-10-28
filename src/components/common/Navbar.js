import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import '../../styles/navbar.css';

function Navigation() {
  const [searchText, setSearchText] = useState('');

  const searchClick = () => {
    if (searchText === '') alert('Search Box was Empty');
    if (searchText !== '') alert(`You searched up "${searchText}"`);
  };

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
          <Nav.Link href="/dashboard">
            {' '}
            <span className="navl-hover">Home</span>
          </Nav.Link>
          <Nav.Link href="/explore">
            {' '}
            <span className="navl-hover">Explore</span>
          </Nav.Link>
        </Nav>
        <Form className="center-search">
          <input
            className="search-input"
            width="100%"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchIcon
            className="search"
            style={{ fontSize: 30 }}
            onClick={() => searchClick()}
          />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="/About">
            <span className="navl-hover">About</span>
          </Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/account">Profile</NavDropdown.Item>
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
