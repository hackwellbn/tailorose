import React from "react";
import "./Difference.css";
import tailor_1 from "../../../../assets/tailor2-home-icon3.png";
import tailor_2 from "../../../../assets/tailor3-offer-icon1.png";
import tailor_3 from "../../../../assets/tailor3-offer-icon2.png";
import tailor_4 from "../../../../assets/tailor2-home-icon2.png";
import tailor_5 from "../../../../assets/tailor2-home-icon1.png";
import tailor_6 from "../../../../assets/1-1.svg";
const Difference = () => {
  return (
    <div>
      <section className="services-set section" id="Services">
        <h2 className="why-us">why us</h2>
        <div className="why-us">
          <div className="p-div">
            <img src={tailor_1} alt="People" />
            <h3>People</h3>
            <p>
              At Tailorose, our team of skilled artisans and fashion enthusiasts
              is dedicated to bringing your vision to life. With years of
              experience and a keen eye for detail, we ensure that every garment
              is crafted with precision and care.
            </p>
          </div>
          <div className="p-div">
            <img src={tailor_2} alt="Process" />
            <h3>Process</h3>
            <p>
              Our tailor-made process is designed to provide you with a seamless
              and enjoyable experience from start to finish. From the initial
              consultation to the final fitting, we work closely with you to
              understand your needs and deliver exceptional results.
            </p>
          </div>
          <div className="p-div">
            <img src={tailor_3} alt="Passion" />
            <h3>Passion</h3>
            <p>
              At Tailorose, we are driven by a deep passion for fashion and a
              commitment to excellence. We believe that every garment we create
              is a reflection of our dedication to craftsmanship and innovation,
              ensuring that you always look and feel your best.
            </p>
          </div>
        </div>
        <ul className="services-list">
          <h2>our services</h2>
          <li>Bespoke Suits</li>
          <li>Vitenge Outfits</li>
          <li>Alterations</li>
          <li>Custom Designs</li>
          <li>Consultations</li>
        </ul>
      </section>
      <section id="services">
        <div className="service-card">
          <h3>Custom Tailoring</h3>
          <div className="custom">
            <img src={tailor_4} alt="Custom Tailoring" />
          </div>
          <p>
            We create custom-made garments tailored to your measurements and
            style preferences.
          </p>
        </div>
        <div className="service-card">
          <h3>Alterations</h3>
          <div className="custom">
            <img src={tailor_5} alt="Alterations" />
          </div>
          <p>
            We alter existing garments to achieve a perfect fit and update the
            style according to your needs.
          </p>
        </div>
        <div className="service-card">
          <h3>Repairs</h3>
          <img className="card-images" src={tailor_6} alt="Repairs" />
          <p>
            We repair damaged or worn-out clothing, ensuring they look and feel
            as good as new.
          </p>
        </div>
      </section>
      <div className="service-set-2">
        <h3>Tailoring Classes</h3>
        <div>
          <p>
            Interested in learning tailoring? Join our classes and master the
            art of sewing and garment construction.
          </p>
        </div>
        <div className="buttons">
          <a className="button" href="/#contact">
            join now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Difference;
