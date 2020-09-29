import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </li>
      </ul>

      <span className="">Login</span>
    </nav>
  );
};

export default NavBar;
