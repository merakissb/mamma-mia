import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Pizza from '../pages/Pizza';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="*" element={<h1>Not Found 404</h1>} />
    </Routes>
  );
}

export default AppRoutes;

