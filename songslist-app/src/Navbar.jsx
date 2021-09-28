import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <div>
          <NavLink className="navlink" to="/form">
            Add albums
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/albums">
            Albums
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;