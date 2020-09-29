import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <NavLink className="navbar-brand" to="#">
        Home
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/classesAssigned">
              Courses
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Class Details
            </NavLink>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink className="dropdown-item" to="/scheduleclass">
                Schedule a class
              </NavLink>
              <NavLink className="dropdown-item" to="/allScheduledClass">
                All Scheduled classes
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="nav-link">
              Welcome {props.result ? props.result.name : ""}
            </span>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
