import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'

import './Nav.css';

const NavTab = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
      <Navbar.Brand className='text-white' href="/">
          <span style={{ fontSize: '2rem', fontWeight: 'bolder' }}>Chance Viz</span>
          <img src={logo} alt="Logo" className="logo-image" />
        </Navbar.Brand>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <div className="nav-link-container">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </div>
            <div className="nav-link-container">
              <NavLink to="/visual" className="nav-link">
                Visualise
              </NavLink>
            </div>
            <div className="nav-link-container">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTab;
