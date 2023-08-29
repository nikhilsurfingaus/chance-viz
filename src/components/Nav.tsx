import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Nav.css'; // Import your CSS file

const NavTab = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Chance Viz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center"> {/* Center the nav links */}
          <Nav className="mx-auto"> {/* Horizontally center the nav links */}
            <NavLink to="/" className="nav-link" end>
              Home
            </NavLink>
            <NavLink to="/visual" className="nav-link">
              Visualise
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTab;
