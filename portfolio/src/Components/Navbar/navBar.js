import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        tyrk
      </Link>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/home"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
