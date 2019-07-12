import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function NavBar() {
  return (
    <nav className="navBar">
      <p>
        <Link to="/" component={Home}>
          Home
        </Link>
      </p>
    </nav>
  );
}

export default NavBar;
