import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const PizzasContext = createContext();

export const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const { data, loading } = useFetch("pizzas.json");

  useEffect(() => {
    if (data) {
      setPizzas(data);
    }
  }, [data]);

  const addToCart = (pizza) => {
    const findProductIndex = cart.findIndex((p) => p.id === pizza.id);
    const product = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
      count: 1,
    };
    if (findProductIndex >= 0) {
      cart[findProductIndex].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, product ]);
    }
  };

  const increment = (index) => {
    cart[index].count++;
    setCart([...cart]);
  };

  const decrement = (index) => {
    if (cart[index].count === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].count--;
    }
    setCart([...cart]);
  };

  const total = cart.reduce((acc, pizza) => acc + (pizza.price * pizza.count), 0)

  const PizzasProviderValues = {
    pizzas,
    cart,
    loading,
    setCart,
    addToCart,
    increment,
    decrement,
    total
  };


  return (
    <PizzasContext.Provider
      value={PizzasProviderValues}
    >
      {children}
    </PizzasContext.Provider>
  );
};