import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import ButtonPrimary from "./buttons/ButtonPrimary";
import ImageSvg from "../components/svgs/ImageSvg";
import BookSvg from "../components/svgs/BookSvg";
import FAQSvg from "../components/svgs/FAQSvg";
import StarSvg from "../components/svgs/StarSvg";
import StructureSvg from "../components/svgs/StructureSvg";
import TruckSvg from "../components/svgs/TruckSvg";
import VideoSvg from "../components/svgs/VideoSvg";
import Bed from "./svgs/Bed";
import logo from "../assets/logo.png";
import { useWindowSize } from "../contexts/WindowSizeContext";
import { Top } from "./Ribon";

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
const dropdownOptions = {
  gallery: [
    {
      to: "/project-gallery",
      label: "Project Gallery",
      description: "Be Inspired by the wonderous spaces our clients call home",
      src: ImageSvg,
    },
    {
      to: "/home-tour-360",
      label: "Home Tour 360",
      description: "Get an up-close tour of our most impressive homes",
      src: VideoSvg,
    },
  ],
  resources: [
    {
      to: "/blogs",
      label: "Blogs",
      description: "Articles for homeowners by log home experts",
      src: BookSvg,
    },
    {
      to: "/testimonials",
      label: "Testimonials",
      description: "Meet homeowners who built their dream homes",
      src: StarSvg,
    },
    {
      to: "/faqs",
      label: "FAQs",
      description: "Get answers to your questions",
      src: FAQSvg,
    },
  ],
  aboutUs: [
    {
      to: "/rentals",
      label: "Rentals",
      description: "Experience a Hochstetler log home",
      src: Bed,
    },
    {
      to: "/speciality-structures",
      label: "Speciality Structures",
      description: "See our specialty timber builds",
      src: StructureSvg,
    },
    {
      to: "/commercials",
      label: "Commercial Structures",
      description: "Explore commercial timber projects",
      src: TruckSvg,
    },
  ],
};
const DropdownItem = ({ option, closeMenu, liClassName }) => {
  const location = useLocation();
  const isActive = location.pathname === option.to;
  const Icon = option.src;

  return (
    <li className={`${liClassName} ${isActive ? "active" : ""}`}>
      <Link to={option.to} onClick={closeMenu} className="dropdown-link">
        <div className="flex" style={{ gap: "1rem", padding: ".5rem" }}>
          {Icon && (
            <div
              className="dropdown-icon text-green-light"
              style={{ width: "1.5rem", height: "1.5rem" }}
            >
              <Icon className="dropdown-icon" />
            </div>
          )}
          <div>
            <h5 className="dropdown-label">{option.label}</h5>
            <p className="dropdown-description">{option.description}</p>
          </div>
        </div>
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
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setActiveDropdown(id);
  };
  // Function to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div
      ref={dropdownRef}
      className="dropdown=container"
      onMouseEnter={handleMouseEnter}
    >
      <button
        className={`dropdown-toggle ${isDropdownOpen ? "open" : ""}`}
        aria-expanded={isDropdownOpen}
      >
        <div className="flex-center" style={{ gap: ".25rem" }}>
          {label}
          <i
            className={`fa ${
              isDropdownOpen ? "fa-angle-up" : "fa-angle-down"
            } dropdown-icon`}
          ></i>
        </div>
      </button>

      {isDropdownOpen &&
        (width >= 1080 ? (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <DropdownItem
                key={option.to}
                option={option}
                closeMenu={closeMenu}
                liClassName={"dropdown-item"}
              />
            ))}
          </ul>
        ) : (
          <>
            {options.map((option) => (
              <DropdownItem
                key={option.to}
                option={option}
                closeMenu={closeMenu}
                liClassName={"nav-item"}
              />
            ))}
          </>
        ))}
    </div>
  );
};

export const NavList = ({ closeMenu, isOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <ul className={`nav-list ${isOpen ? "open" : ""}`}>
      <NavLink to="/floor-plans" label="Floor Plans" closeMenu={closeMenu} />
      <DropdownNav
        label="Gallery"
        options={dropdownOptions.gallery}
        closeMenu={closeMenu}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        id="gallery"
      />
      <DropdownNav
        label="Resources"
        options={dropdownOptions.resources}
        closeMenu={closeMenu}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        id="resources"
      />
      <DropdownNav
        label="About Us"
        options={dropdownOptions.aboutUs}
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
      <ButtonPrimary text="See Floor Plans" to={"/floor-plans"} />
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <Top m_no="XXXXXXXXXX" />
      <nav className="navbar">
        <h1 className="navbar-brand" onClick={() => navigate("/")}>
          <img src={logo} alt="Brand Logo" />
        </h1>
        <button
          className={`hamburgur ${isOpen ? "open" : ""} btn`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className={`nav ${isOpen ? "open" : ""}`}>
          <NavList closeMenu={() => setIsOpen(false)} isOpen={isOpen} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
