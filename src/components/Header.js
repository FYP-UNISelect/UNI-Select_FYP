import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="/">University Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/scholarships">scholarships</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/recommendations">Recommendations</Nav.Link>
          {/* Add more links as needed */}
        </Nav>
        <Nav>
          <NavDropdown
            title={<FaUserCircle size={22} />}
            id="basic-nav-dropdown"
            align="end"
          >
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
