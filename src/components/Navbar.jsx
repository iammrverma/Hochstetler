import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import ButtonPrimary from "./buttons/ButtonPrimary";

import logo from "../assets/logo.png";
const NavLink = ({ to, label, closeMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to; // Check if the route is active
  return (
    <li
      style={{ listStyle: "none" }}
      className={`nav-item ${isActive ? "active" : ""}`}
    >
      <Link
        to={to}
        onClick={closeMenu}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
};
export const Navlist = ({ closeMenu, isOpen, wrap }) => {
  return (
    <ul className={`nav-list ${isOpen ? "open" : ""} ${wrap ? "wrap" : ""}`}>
      <NavLink to="/" label="Floor Plans" closeMenu={closeMenu} />
      <NavLink to="/about-us" label="Gallery" closeMenu={closeMenu} />
      <NavLink to="/services" label="Resources" closeMenu={closeMenu} />
      <NavLink to="/portfolio" label="About Us" closeMenu={closeMenu} />
      <NavLink to="/contact" label="Log Cabin Days" closeMenu={closeMenu} />
      <ButtonPrimary
        text={"See Floor Plans"}
        onClick={() => navigate("/contact")}
      />
    </ul>
  );
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-brand">
          <img src={logo} alt="" />
        </h1>
        <button
          className={`hamburgur ${isOpen ? "open" : ""} btn`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className={`nav ${isOpen ? "open" : ""}`}>
          <Navlist closeMenu={closeMenu} isOpen={isOpen} wrap={false} />
          <div className="navbar-cta"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
