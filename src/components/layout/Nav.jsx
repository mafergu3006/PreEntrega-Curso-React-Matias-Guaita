import { NavLink } from "react-router-dom";
import CartWidget from "../cart/CartWidget";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Productos
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/carrito"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Carrito
          </NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default Nav;