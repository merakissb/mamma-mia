import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
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
        <hr></hr>
        <p className='fw-bold'>Ingredientes:</p>
        <Card.Text>
          <ul className='list-group'>
            {ingredients.map((ingredient, index) => (
              <li className='list-group-item border-0 p-0' key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <hr></hr>
        <Card.Text className="fw-bold fs-4 text-center">${price}</Card.Text>
        <Row>
          <Col xs={6} md={6} className='d-flex justify-content-start'>
            <Button variant="primary" onClick={handleNavigate}>Ver más 👀</Button>
          </Col>
          <Col xs={6} md={6} className='d-flex justify-content-end'>
            <Button variant="danger" onClick={() => addToCart(pizza)}>Añadir 🛒</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;