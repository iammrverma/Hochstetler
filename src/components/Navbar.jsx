import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import ButtonPrimary from "./buttons/ButtonPrimary";

import logo from "../assets/logo.png";
import { useWindowSize } from "../contexts/WindowSizeContext";
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

const DropdownNav = ({
  label,
  options,
  closeMenu,
  activeDropdown,
  setActiveDropdown,
  id,
}) => {
  const location = useLocation();
  const { width } = useWindowSize();
  const isDropdownOpen = activeDropdown === id;

  const toggleDropdown = () => {
    setActiveDropdown(isDropdownOpen ? null : id);
  };

  const closeDropdown = () => {
    if (isDropdownOpen) setActiveDropdown(null);
  };

  const mapOptions = (options, liClassName) =>
    options.map((option) => {
      const isActive = location.pathname === option.to;
      return (
        <li
          key={option.to}
          className={`${liClassName} ${isActive ? "active" : ""}`}
        >
          <Link
            to={option.to}
            onClick={() => {
              closeMenu();
              closeDropdown();
            }}
          >
            <p>{option.label}</p>
            <p>{option.description}</p>
          </Link>
        </li>
      );
    });

  return (
    <>
      <button
        className={`dropdown-toggle ${isDropdownOpen ? "open" : ""}`}
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        <div>
          {label}
          <i
            className={`fa ${
              isDropdownOpen ? "fa-angle-up" : "fa-angle-down"
            } dropdown-icon`}
            style={{ marginLeft: "0.5rem" }}
          ></i>
        </div>
        {isDropdownOpen ? (
          width >= 1080 ? (
            <ul className="dropdown-menu">
              {mapOptions(options, "dropdown-item")}
            </ul>
          ) : (
            <>{mapOptions(options, "nav-item")}</>
          )
        ) : null}
      </button>
    </>
  );
};

export const Navlist = ({ closeMenu, isOpen, wrap }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  return (
    <ul className={`nav-list ${isOpen ? "open" : ""} ${wrap ? "wrap" : ""}`}>
      <NavLink to="/floor-plans" label="Floor Plans" closeMenu={closeMenu} />
      <DropdownNav
        label="Gallery"
        options={[
          {
            to: "/gallery/project-gallery",
            label: "Project Gallery",
            description:
              "Be Inspired by the wonderous spaces that our client call home",
          },
          {
            to: "/gallery/home-tour-360",
            label: "Home Tour 360",
            description:
              "Get an up close rule of some of our most impressive homes",
          },
        ]}
        closeMenu={closeMenu}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        id="gallery"
      />
      <DropdownNav
        label="Resources"
        options={[
          {
            to: "/resources/blogs",
            label: "Blogs",
            description:
              "impressive articles for homeowners by experts in log home industry",
          },
          {
            to: "/resources/testimonials",
            label: "Testimonials",
            description: "Meet homeowners how have built there dream homes",
          },
          {
            to: "/resources/faqs",
            label: "FAQs",
            description: "get answers to your questions",
          },
        ]}
        closeMenu={closeMenu}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        id="resources"
      />
      <DropdownNav
        label="About US"
        options={[
          {
            to: "/about-us/difference",
            label: "Difference",
            description: "Lear what sets Hochstetler apart",
          },
          {
            to: "/about-us/rentals",
            label: "Rentals",
            description: "Experience a hochstetler log home for yourself",
          },
          {
            to: "/about-us/speciality-structures",
            label: "Speciality Structures",
            description: "See our speaciality timber builds",
          },
          {
            to: "/about-us/commercials",
            label: "See our commercial timber build projects",
          },
        ]}
        closeMenu={closeMenu}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        id="about-us"
      />
      <NavLink
        to="/log-cabin-days"
        label="Log Cabin Days"
        closeMenu={closeMenu}
      />
      <ButtonPrimary
        text={"See Floor Plans"}
        onClick={() => navigate("/floor-plans")} // Update the correct route here
      />
    </ul>
  );
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-brand" onClick={() => navigate("/")}>
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
