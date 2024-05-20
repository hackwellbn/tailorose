import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isFixed, setIsFixed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.pageYOffset > 200);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close the navbar when the route changes
    setIsNavOpen(false);
  }, [location]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <span className="material-symbols-outlined span_1" onClick={toggleNav}>
        menu
      </span>
      <nav
        className={`navbar ${isFixed ? "fixed" : ""} ${isNavOpen ? "open" : ""}`}
        ref={navRef}
      >
        <span className="material-symbols-outlined close-icon" onClick={closeNav}>
          close
        </span>
        <ul>
          <li>
            <Link to="/" className="navLink" onClick={closeNav}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="navLink" onClick={closeNav}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navLink" onClick={closeNav}>
              CONTACTS
            </Link>
          </li>
        </ul>
        <h2 className="heading">Tailorose</h2>
        <ul className="downlinks">
          <li>
            <Link to="/blogs" className="navLink" onClick={() => { navigate("/blogs"); closeNav(); }}>
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
