import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PizzaCard = ({ pizza }) => {
  const { title, ingredients, price, img } = pizza;

  return (
    <Card className="my-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text className="fw-bold fs-4">${price}</Card.Text>
        <Button variant="primary" className="me-2">Ver más 👀</Button>
        <Button variant="danger">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;