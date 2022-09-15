import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navBar p-3 mt-2 d-flex justify-content-between">
      <div>
        <Link to="/" className="link mx-3">
        🏠 Home
        </Link>
        <Link to="/contacto" className="link">
        📒 Contacto
        </Link>
      </div>
      <h5 className="text-white my-2 mx-5">Happy Cake  🍰</h5>
    </nav>
  );
};

export default NavBar;
