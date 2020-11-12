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
      <Navbar bg="white" className="sticky-top" id="app_navbar">
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
          {/* <NavDropdown title="Search" id="basic-nav-dropdown">
            <div className="d-flex">
              <Form className="center-search ml-2">
                <input
                  className="form-control"
                  width="1000"
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </Form>
              <SearchIcon
                className="search ml-2 mr-2 my-2"
                onClick={() => searchClick()}
              />
            </div>
          </NavDropdown> */}
        </Nav>
        <div className="d-flex">
          <Form className="center-search">
            <input
              className="form-control"
              width="1000"
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Form>
          <SearchIcon
            className="search ml-2"
            style={{ fontSize: 30 }}
            onClick={() => searchClick()}
          />
        </div>
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
