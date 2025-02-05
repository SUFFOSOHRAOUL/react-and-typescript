import React from "react";
import { NavLink } from "react-router-dom";
import "/navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>PetDoc.</h1>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink>About Us</NavLink>
            </li>
            <li>
              {" "}
              <NavLink>Service</NavLink>
            </li>
            <li>
              {" "}
              <NavLink>Doctors</NavLink>
            </li>
            <li>
              {" "}
              <NavLink>Equipment</NavLink>
            </li>
            <li>
              {" "}
              <NavLink>Charity</NavLink>
            </li>
            <li>
              {" "}
              <NavLink>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <h1>buttons</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
