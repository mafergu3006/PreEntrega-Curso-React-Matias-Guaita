import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <img src={producto.imagen} alt={producto.nombre} />

      <h3>{producto.nombre}</h3>

      <p>${producto.precio}</p>

      <Link to={`/producto/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;