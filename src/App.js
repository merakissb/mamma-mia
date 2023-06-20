import React from 'react';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
