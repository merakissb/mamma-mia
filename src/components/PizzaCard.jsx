import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PizzasContext } from '../context/PizzasContext';

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useContext(PizzasContext);
  const { id, name, ingredients, price, img } = pizza;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pizza/${id}`);
  }

  return (
    <Card className="my-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text className="fw-bold fs-4">${price}</Card.Text>
        <Button
          variant="primary"
          className="me-2"
          onClick={handleNavigate}
        >
          Ver más 👀
        </Button>
        <Button
          variant="danger"
          onClick={() => addToCart(pizza)}
        >
          Añadir 🛒
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;