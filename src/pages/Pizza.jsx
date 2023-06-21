import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import { PizzasContext } from '../context/PizzasContext';

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, addToCart, loading } = useContext(PizzasContext);

  const pizza = pizzas.find(pizza => pizza.id === id);

  return (
    <Container>
      <Row className='py-5 px-5 justify-content-end'>
        {loading ? (
          <Col className="text-center">
            <Spinner animation="border" variant="primary" />
          </Col>
        ) : (
        pizza && (
          <>
            <Col xs={12} md={6}>
              <Image src={pizza.img} fluid />
            </Col>
            <Col xs={12} md={6}>
              <p className='fw-bold fs-1'>{pizza.name}</p>
              <hr></hr>
              <p>{pizza.desc}</p>
              <p className='fw-bold fs-4'>Ingredientes:</p>
              <ul className='list-group'>
                {pizza.ingredients.map((ingredient, index) => (
                  <li className='list-group-item border-0 p-0' key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              <hr></hr>
              <p className='fw-bold fs-5 mt-3'>Precio: ${pizza.price}</p>
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-end'>
              <Button
                variant="danger"
                onClick={() => addToCart(pizza)}
                className='fs-4'
              >
                Añadir 🛒
              </Button>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Pizza;
