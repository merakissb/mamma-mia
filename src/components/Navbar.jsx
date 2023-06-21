import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { PizzasContext } from '../context/PizzasContext';

const Navbar = () => {
  const { total } = useContext(PizzasContext);
  return (
    <NavbarBootstrap expand="lg" style={{background: '#17a2b8'}}>
      <Container>
        <NavbarBootstrap.Brand as={Link} to="/" className='text-white fw-bold fs-3'>
        🍕 Pizzería Mamma Mía
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to="/cart" className='text-white fw-bold fs-3'>🛒 $ {total}</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;