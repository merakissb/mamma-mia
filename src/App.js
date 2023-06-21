import React from 'react';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { PizzasProvider } from './context/PizzasContext';

function App() {
  return (
    <Router>
      <PizzasProvider>
        <Navbar />
        <AppRoutes />
      </PizzasProvider>
    </Router>
  );
}

export default App;
