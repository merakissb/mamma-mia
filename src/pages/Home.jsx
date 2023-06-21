import React, { useContext } from 'react';
import Header from '../components/Header';
import PizzaCard from '../components/PizzaCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { PizzasContext } from '../context/PizzasContext';

const Home = () => {

  const { pizzas, loading } = useContext(PizzasContext);

  return (
    <>
      <Header />
      <Container>
        <Row>
          {loading && (
            <Col className="text-center">
              <Spinner animation="border" variant="primary" />
            </Col>
          )}
          {pizzas && pizzas.map((pizza, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <PizzaCard pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;