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
  const toggleDropdown = () => {
    setTimeout(() => {
      setActiveDropdown(isDropdownOpen ? null : id);
    }, 100);
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

  const mapOptions = (options, liClassName) =>
    options.map((option) => {
      const isActive = location.pathname === option.to;
      const Icon = option.src;

      return (
        <li
          key={option.to}
          className={`${liClassName} ${isActive ? "active" : ""}`}
        >
          <Link
            to={option.to}
            onClick={() => {
              closeMenu();
              setActiveDropdown(null)
            }}
            className="dropdown-link "
          >
            <div
              className="flex"
              style={{
                gap: "1rem",
                padding: ".5rem",
              }}
            >
              {Icon && (
                <div
                  className="text-green-light"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <Icon className="dropdown-icon" />
                </div>
              )}
              <div style={{ color: "black" }}>
                <h5 className="dropdown-label">{option.label}</h5>
                <p className="dropdown-description">{option.description}</p>
              </div>
            </div>
          </Link>
        </li>
      );
    });

  return (
    <div ref={dropdownRef} className="dropdown=container">
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
          ></i>
        </div>
        {isDropdownOpen &&
          (width >= 1080 ? (
            <ul className="dropdown-menu">
              {mapOptions(options, "dropdown-item")}
            </ul>
          ) : (
            <>{mapOptions(options, "nav-item")}</>
          ))}
      </button>
    </div>
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
            src: ImageSvg,
          },
          {
            to: "/gallery/home-tour-360",
            label: "Home Tour 360",
            description:
              "Get an up close rule of some of our most impressive homes",
            src: VideoSvg,
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
            src: BookSvg,
          },
          {
            to: "/resources/testimonials",
            label: "Testimonials",
            description: "Meet homeowners how have built there dream homes",
            src: StarSvg,
          },
          {
            to: "/resources/faqs",
            label: "FAQs",
            description: "get answers to your questions",
            src: FAQSvg,
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
            src: StarSvg,
          },
          {
            to: "/about-us/rentals",
            label: "Rentals",
            description: "Experience a hochstetler log home for yourself",
            src: Bed,
          },
          {
            to: "/about-us/speciality-structures",
            label: "Speciality Structures",
            description: "See our speaciality timber builds",
            src: StructureSvg,
          },
          {
            to: "/about-us/commercials",
            label: "Commercial Structures",
            description: "See our commercial timber build projects",
            src: TruckSvg,
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
    <Top m_no={"XXXXXXXXXX"}/>
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
