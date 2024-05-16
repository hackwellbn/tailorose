import React from "react";
import { assets } from "../../../../assets/assets";
import "./Process.css";
const Process = () => {
  return (
    <div>
      <div className="process-section">
        <h2>Our Tailoring Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-description">
              <h3>Consultation & Measurements</h3>
              <div className="consult">
                <img
                  src={assets.meet_user}
                  alt="meet with us"
                  className="consult-content"
                />
                <p className="consult-content">
                  Our experienced tailors will meet with you to discuss your
                  preferences and take precise measurements.
                </p>
              </div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-description">
              <h3>Fabric Selection</h3>
              <div className="consult">
                <p className="consult-content">
                  Choose from our extensive collection of high-quality fabrics
                  to create your custom garment.
                </p>
                <img
                  src={assets.fabrication}
                  alt="fabrication"
                  className="consult-content"
                />
              </div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-description">
              <h3>Garment Construction</h3>
              <div className="consult">
                <img
                  src={assets.craftsmanship}
                  alt=""
                  className="consult-content"
                />
                <p className="consult-content">
                  Our skilled craftsmen will begin constructing your garment
                  with precision and attention to detail.
                </p>
              </div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-description">
              <h3>Fittings & Adjustments</h3>
              <div className="consult">
                <p className="consult-content">
                  We'll schedule fittings to ensure the perfect fit, making any
                  necessary adjustments along the way.
                </p>
                <img
                  src={assets.cap}
                  alt="fittings & adjustmaents image"
                  className="consult-content"
                />
              </div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-description">
              <h3>Final Touches</h3>
              <div className="consult">
                <img
                  src={assets.final}
                  alt="final touch image"
                  className="consult-content"
                />
                <p className="consult-content">
                  Finishing touches and embellishments will be added to enhance
                  the overall look and feel of your garment.
                </p>
              </div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">6</div>
            <div className="step-description">
              <h3>Delivery</h3>
              <div className="consult">
                <p className="consult-content">
                  Your custom-tailored garment will be delivered to you, ready
                  to wear and impress.
                </p>
                <img
                  src={assets.fin}
                  alt="deliverance"
                  className="consult-content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
