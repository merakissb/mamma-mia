import React, { useContext } from 'react';
import { Container, Table, Button, Image, Card, Row, Col } from 'react-bootstrap';
import { PizzasContext } from '../context/PizzasContext';

const Cart = () => {
  const { cart, increment, decrement, total } = useContext(PizzasContext);

  return (
    <Container>
      <h3 className="my-3">Detalles del pedido:</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((pizza, index) => (
            <tr key={index}>
              <td>
                <Image src={pizza.img} className="img-thumbnail" width={150} />
              </td>
              <td>{pizza.name}</td>
              <td>${pizza.price}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  className="me-2"
                  onClick={() => decrement(index)}
                >
                  -
                </Button>
                {pizza.count}
                <Button
                  variant="primary"
                  size="sm"
                  className="ms-2"
                  onClick={() => increment(index)}
                >
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Body className='text-center'>
              <Card.Title>Resumen</Card.Title>
              <Card.Text>
                <strong>Total: ${total}</strong>
              </Card.Text>
              <Button variant="success" block>
                Ir a Pagar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
