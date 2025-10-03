import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <ul className="nav justify-content-center  mb-3">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/products"
            href="#"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MainNavigation;
