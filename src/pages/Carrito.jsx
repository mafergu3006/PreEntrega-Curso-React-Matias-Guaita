import { useCart } from "../context/CartContext";

const Carrito = () => {
  const { cart } = useCart();

  return (
    <section className="products-container">
      <h1>Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p>No hay productos agregados.</p>
      ) : (
        <div className="products-grid">
          {cart.map((producto, index) => (
            <div className="item-card" key={index}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

              <h3>{producto.nombre}</h3>

              <p>${producto.precio}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Carrito;