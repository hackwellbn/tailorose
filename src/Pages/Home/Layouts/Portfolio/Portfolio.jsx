import React from "react";
import "./Portfolio.css";
import Portfolio_10 from "../../../../assets/download.webp";
import Portfolio_11 from "../../../../assets/colorful-tanzanian-kitenge-type-wrap-dress-material-wax-print-fabric-traditonal-clothes-fashion_1020495-286987.jpg";
import Portfolio_12 from "../../../../assets/colorful-tanzanian-kitenge-type-wrap-dress-material-wax-print-fabric-traditonal-clothes-fashion_1020495-287074.jpg";
import Portfolio_13 from "../../../../assets/3-1-700x875.jpg";
import Portfolio_14 from "../../../../assets/colorful-tanzanian-kitenge-type-wrap-dress-material-wax-print-fabric-traditonal-clothes-fashion_1020495-287141.jpg";
import Portfolio_15 from "../../../../assets/colorful-tanzanian-kitenge-type-wrap-dress-material-wax-print-fabric-traditonal-clothes-fashion_1020495-287810.jpg";
import Portfolio_16 from "../../../../assets/360_F_627664083_Y8ozftjXd3yImzu2SKZ232FGw63yaDmC.webp";
import Portfolio_17 from "../../../../assets/360_F_370952962_5BWQEHvLDQUQbxYS3EkWC7De4ftKqKam.webp";
import Portfolio_18 from "../../../../assets/360_F_681462390_c5Gem7zAlGrrlYcfOeePLiAFRk3bgWZb.webp";
import Portfolio_19 from "../../../../assets/360_F_645824993_iDyXOV0UT1qPcUX13gYOC7R9DrykEIJN.webp";
import Portfolio_20 from "../../../../assets/360_F_627664110_4MdhwJdr3DR9X3ILRCVLMvPQmL8EoC6m.webp";
import vid_2 from "../../../../assets//videos/snap.mp4";
import { avatars, avatar_2 } from "../../../../assets/assets";
const Portfolio = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-section">
        <h3>men's wedding wear</h3>
        <div className="gallery">    
          {avatars.map((avatar, index) => (
            <div key={index} className="image-portfolio">
              <img
                src={avatar.image}
                alt={`Avatar ${index + 1}`}
                className="gallery-image"
              />
              <h4>{avatar.name}</h4>
              <p>{avatar.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="portfolio-section">
        <h3>for other custom suits designs</h3>
        
        <div className="gallery">
          {avatar_2.map((avatar_2, index) => (
            <div key={index} className="image-portfolio">
              <img src={avatar_2.image}
               alt={`Avatar ${index + 1}`}
               className="gallery-image"
               />
               <h4>{avatar_2.name}</h4>
               <p>{avatar_2.description}</p>
               </div>
          ))}
          {/*
          
          <div className="image-portfolio">
            <img
              src={Portfolio_9}
              alt="Portfolio Image 4"
              className="gallery-image"
            />
            <p>
              Formal-Shirts-Pink-Bold-Twill-Fitted-Single-Cuff-Classic-Collar-Shirt-63163-FLF.jpg
            </p>
          </div> */}
        </div>
      </div>
      <div className="portfolio-section">
        <h3>women's wear</h3>
        <div className="gallery">
          <div className="image-portfolio">
            <img
              src={Portfolio_10}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_11}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_12}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>come on let's explore the Kenyan culture</p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_13}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>elegant wedding design clothes</p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_14}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_15}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_16}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_17}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_18}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_19}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
          <div className="image-portfolio">
            <img
              src={Portfolio_20}
              alt="Portfolio Image 1"
              className="gallery-image"
            />
            <div className="overlay">
              <p>
                Formal Shirts Blue-Bold TwillSlim Fit w Cuff Classic Collar
                Shirt
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="video-section">
        <div className="description">
          <p className="text">
            Our team of renegade designers and master craftsmen are here to help
            you make a statement with your wardrobe. Whether you're looking for
            edgy streetwear, show-stopping couture, or anything in between,
            we've got you covered.
          </p>
        </div>
        <div className="description">
          <div className="video-section">
            <video id="my-video" controls loop autoPlay muted>
              <source src={vid_2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="description">
          <p className="text">
            But beware, this is not for the faint of heart. At Tailorose, we
            embrace the extreme and celebrate the unconventional. We're here to
            empower you to express yourself fearlessly and boldly, without
            apology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
