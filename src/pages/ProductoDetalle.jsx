import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductoDetalle = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (prod) => prod.id === Number(id)
        );

        setProducto(productoEncontrado);
      });
  }, [id]);

  if (!producto) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <section className="detail-container">
      <img src={producto.imagen} alt={producto.nombre} />

      <h2>{producto.nombre}</h2>

      <p>Precio: ${producto.precio}</p>

      <button onClick={() => addToCart(producto)}>
        Agregar al carrito
      </button>
    </section>
  );
};

export default ProductoDetalle;