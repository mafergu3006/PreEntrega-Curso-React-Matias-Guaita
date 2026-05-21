import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProductos } = useCart();

  return (
    <Link to="/carrito" className="cart-widget">
      🛒 {totalProductos}
    </Link>
  );
};

export default CartWidget;