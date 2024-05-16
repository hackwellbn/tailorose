// src/Components/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const routeBlogs = () => {
    navigate("/blogs");
  };

  const [isFixed, setIsFixed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set up canvas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw spider web lines
    drawSpiderWeb(ctx, canvas.width / 2, canvas.height / 2, x, y);
  };

  const drawSpiderWeb = (ctx, centerX, centerY, mouseX, mouseY) => {
    const numLines = 3; // Number of lines
    const angleIncrement = (Math.PI * 2) / numLines;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);

    for (let i = 0; i < numLines; i++) {
      const angle = i * angleIncrement;
      const endX = centerX + (mouseX - centerX) * Math.cos(angle);
      const endY = centerY + (mouseY - centerY) * Math.sin(angle);
      ctx.lineTo(endX, endY);
    }

    ctx.strokeStyle = "#000";
    ctx.stroke();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header>
      <span className="material-symbols-outlined span_1">menu</span>{" "}
      <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="navLink">
              HOME
            </Link>
          </li>
          <li>
            <a href="/#Services" className="navLink">
              SERVICES
            </a>
          </li>
          <li>
            <Link to="/aboutus" className="navLink">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navLink">
              CONTACTS
            </Link>
          </li>
        </ul>
        <canvas ref={canvasRef} width="200" height="100" className="canvas" />
        <h2 ref={textRef} className={`heading ${isHovered ? "visible" : ""}`}>
          Tailorose
        </h2>
        <ul>
          <li>
            <button id="btn" onClick={routeBlogs}>Blogs</button>
          </li>
          <li>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
