import React from "react";
import about_us from "../../../../assets/About-us.jpg";
import { Link } from "react-router-dom";
import "./About.css";

const AboutPage = () => {
  return (
    <div>
      <section id="about" className="section-about">
        <div></div>
        <div className="about-container">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            At Tailorose, we blend traditional craftsmanship with modern
            techniques to create unique and stylish clothing for our clients.
            Whether it's a classic suit or a vibrant vitenge outfit, we pay
            attention to every detail to ensure a perfect fit and exceptional
            quality.
          </p>
          <div className="image-left">
            <img
              src={about_us}
              alt="About Us Image"
              className="section-image"
            />
          </div>
          <Link to="/AboutUs" id="btn" className="btn">Learn more</Link>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default AboutPage;
