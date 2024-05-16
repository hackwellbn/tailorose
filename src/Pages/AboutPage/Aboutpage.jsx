import React, { useState, useEffect } from "react";
import "./Aboutpage.css";
import tailoring_video from "../../assets/videos/tailoring.mp4";
import { assets, texts } from "../../assets/assets";

const Aboutpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const routeContactUsers = () => {
    window.location.href = "contacts";
  };

  // Function to handle next text
  const handleNextText = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first text
    }
  };

  // Function to handle previous text
  const handlePreviousText = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(texts.length - 1); // Go to the last text
    }
  };

  // Effect to automatically change text every 8 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextText();
    }, 8000); // Change text every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <>
      <div className="ourstory">
        <h1>Our Story</h1>
        <h2>Crafting Elegance: The Tale of Tailorose</h2>
        <div className="ourstory-img">
          <img src={assets.craftsmanship} alt="" />
        </div>
        <div className="story-description">
          <p>
            In the heart of our beloved town, amidst the charming streets and
            whispered tales of tradition, there stands a haven of craftsmanship
            and dreams – Tailorose. Our story is one woven with threads of
            passion, dedication, and the timeless pursuit of elegance. At
            Tailorose, we are more than just tailors; we are custodians of
            heritage, guardians of style, and companions on the journey of
            self-expression. Our tale begins with our founder, Rose, whose love
            for the art of tailoring blossomed like a delicate flower in the
            rich soil of tradition. Rose's journey was not just one of stitches
            and seams; it was a symphony of creativity and vision. With each
            garment she crafted, she poured her heart and soul into every
            stitch, infusing her creations with a touch of magic that captivated
            the senses and stirred the soul. But Tailorose is not just about the
            garments we create; it's about the stories we tell. From the joyous
            laughter of brides-to-be to the quiet contemplation of a gentleman
            selecting his perfect suit, each fitting room in Tailorose becomes a
            stage where dreams unfold and memories are made. Our ethos is rooted
            in a deep reverence for the art of tailoring – an art that
            transcends trends and seasons, weaving together the past, the
            present, and the future in a seamless tapestry of style and
            sophistication. With every garment that leaves our atelier, we carry
            forward the legacy of craftsmanship that has been passed down
            through generations. But our journey doesn't end with the final
            stitch; it continues with you – our cherished patrons, whose trust
            and support fuel our passion and inspire us to reach greater
            heights. Whether it's a bespoke suit for a special occasion or a
            wardrobe refresh to reflect your evolving style, we are here to
            accompany you every step of the way. So come, dear friends, and
            embark on this journey with us – a journey where elegance knows no
            bounds, where dreams take flight on wings of silk and lace. Welcome
            to Tailorose, where every garment is a masterpiece, and every moment
            is an ode to the timeless art of tailoring.
          </p>
        </div>
      </div>
      <div className="video-story">
        <div className="story">
          <h1>What Distinguishes Us</h1>
          <p>
            Over the years, we have been transforming lives from simple to
            extraordinary with our unparalleled craftsmanship. From wedding
            attire to graduation ceremony outfits, we merge beautiful designs
            according to your desires. So don't hesitate to reach out to us.
          </p>
          <button onClick={routeContactUsers} id="btn">
            Hit us up!
          </button>

          <div className="clicking-container">
            <div className="texts-container">
              <div key={currentIndex} className="text_1">
                <h2>{texts[currentIndex].caption}</h2>
                <p>{texts[currentIndex].description}</p>
              </div>
            </div>

           <div className="chevrons">
           <span className="material-symbols-outlined chevron" onClick={handlePreviousText}>
              chevron_left
            </span>
            <span className="material-symbols-outlined chevron" onClick={handleNextText}>
              chevron_right
            </span>
           </div>
          </div>
        </div>
        <div className="story">
          <video autoPlay loop>
            <source src={tailoring_video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
