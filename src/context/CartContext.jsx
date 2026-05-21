import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  // Cantidad total
  const totalProductos = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};