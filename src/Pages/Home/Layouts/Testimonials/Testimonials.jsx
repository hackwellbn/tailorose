import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Testimonials.css";
import testimonial_1 from "../../../../assets/Romans6_3.jpeg";

const Testimonials = () => {
  return (
    <div>
      <section className="Testimonials">
        <h2 className="section-title">Testimonials</h2>

        <div className="testimonials-container">
          <div className="item">
            <div className="testimonials-images">
              <img
                src={testimonial_1}
                alt="Testimonial Image 1"
                className="testimonial-image"
              />
            </div>
            <p className="testimonial-author"> -Benard otieno-</p>
            <div className="stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <p className="testimonial-text">
              "Tailorose provided me with the perfect suit for my wedding. The
              fit was impeccable, and the attention to detail was outstanding."
            </p>
            <ul className="social-icons">
              <li>
                <a href="#" className="facebook-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="whatsapp-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a href="#" className="instagram-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="testimonials-images">
              <img
                src={testimonial_1}
                alt="Testimonial Image 2"
                className="testimonial-image"
              />
            </div>
            <p className="testimonial-author">salome atieno</p>
            <div className="stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <p className="testimonial-text">
              "Ey, the gear I got from Tailorose is top-notch! Hao majamaa
              wanajua mambo, si mchezo! They always deliver, no doubt!"
            </p>
            <ul className="social-icons">
              <li>
                <a href="#" className="facebook-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="whatsapp-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a href="#" className="instagram-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="testimonials-images">
              <img
                src={testimonial_1}
                alt="Testimonial Image 3"
                className="testimonial-image"
              />
            </div>
            <p className="testimonial-author">-Allan jackson-</p>
            <div className="stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <span className="star">&#9734;</span>
            </div>
            <p className="testimonial-text">
              "Tailorose crafts elegance: vibrant hues, intricate patterns,
              empowering every woman with individuality and charm."
            </p>
            <ul className="social-icons">
              <li>
                <a href="#" className="facebook-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="whatsapp-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a href="#" className="instagram-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
