import { useEffect, useState } from "react";
import Item from "./Item";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="products-container">
      <h2>Catálogo de Productos</h2>

      <div className="products-grid">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;