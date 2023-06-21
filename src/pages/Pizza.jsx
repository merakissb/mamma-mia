// aca se mostrará la pizza seleccionada en PizzaCard /home.
// debe renderizarse imagen, titulo, descripccion, ingredientes con emoji unicode de pizza, precio
// y un boton color rojo para agregar al carrito con emoji unicode de carrito

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Pizza = () => {
  const { id } = useParams();
  return (
    <Container className="mt-3">
      id: {id}
    </Container>
  );
}

export default Pizza;