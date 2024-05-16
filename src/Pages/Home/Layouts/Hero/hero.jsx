import React from "react";
import "./Hero.css";
import Hero_image from "../../../../assets/360_F_398391787_tBMdf1F2Eyz6PWGW5T3x44JQo7hJH6h0.webp";
const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:"mailto:roseoyamo01@gmail.com"';
  };
   const sendButtonClick = () => {
     window.location.href = "/contacts";
   };
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="buttons">
            <button class="btn" onClick={sendButtonClick}>
              Get started
            </button>
            <button className="btn" onClick={handleButtonClick}>
              Email us
            </button>
          </div>
          <div className="heading">
            <h1>Bespoke Tailoring Crafted Just for You</h1>
          </div>

          <div className="paragraph-text">
            <p>
              Tailorose aims to spotlight your presence by seamlessly blending
              modern and traditional designs, ensuring every detail resonates
              with timeless elegance.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-content-image">
          <img className="hero-image" src={Hero_image} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
