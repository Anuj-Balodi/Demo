import React from "react";
import { Link, NavLink } from "react-router-dom";
import Allstudent from "../allStudent";

const NavBar1 = (props) => {
  return (
    <div>
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
          {props.result.role === "admin" && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/registration">
                  Register
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Assign
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink1"
                >
                  <NavLink className="dropdown-item" to="/asigncourses">
                    Student to Courses
                  </NavLink>
                  <NavLink className="dropdown-item" to="/assignclasses">
                    Faculty to Courses
                  </NavLink>
                </div>
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
                  View
                </NavLink>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to="/allstudent">
                    All Students
                  </NavLink>
                  <NavLink className="dropdown-item" to="/allfaculty">
                    All Faculties
                  </NavLink>
                </div>
              </li>
            </ul>
          )}
          {props.result.role === "student" && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/studentdetails">
                  Student Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/allclasses">
                  All Classes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/allcourses">
                  All Courses
                </NavLink>
              </li>
            </ul>
          )}
          {props.result.role === "faculty" && (
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
          )}
        </div>
        <div>
          {" "}
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">
                Welcome{" "}
                {props.result.role === "admin"
                  ? "Admin"
                  : props.result.name
                  ? props.result.name
                  : ""}
              </span>
            </li>
            <li className="nav-item">
              {props.result.role ? (
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar1;
