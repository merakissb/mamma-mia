import React from 'react';
import Header from '../components/Header';
import PizzaCard from '../components/PizzaCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data, loading } = useFetch('pizzas.json');

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
          {data && data.map((pizza, index) => (
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