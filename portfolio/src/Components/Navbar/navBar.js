import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav justify-content-center">
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
