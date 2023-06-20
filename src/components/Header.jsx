import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid className='py-4'>
      <div className='header-text'>
        <h1 className='text-center text-dark fw-bold'>¡Pizzería Mamma Mía!</h1>
        <h3 className='text-center text-dark fw-bold'>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
      </div>
    </Container>
  );
}

export default Header;
