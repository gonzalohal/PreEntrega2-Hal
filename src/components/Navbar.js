import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Brand</Link>
      <ul>
        <li>
          <Link to="/category/1">Categoría 1</Link>
        </li>
        <li>
          <Link to="/category/2">Categoría 2</Link>
        </li>
        <li>
          <Link to="/cart">🛒</Link>
        </li>{" "}
        {/* Icono de carrito */}
      </ul>
    </nav>
  );
}

export default Navbar;
