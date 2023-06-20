import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';

const Navbar = () => {
  return (
    <NavbarBootstrap expand="lg" style={{background: '#17a2b8'}}>
      <Container>
        <NavbarBootstrap.Brand as={Link} to="/" className='text-white fw-bold'>
        🍕 Pizzería Mamma Mía
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to="/cart" className='text-white fw-bold'>🛒 $ 0</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;