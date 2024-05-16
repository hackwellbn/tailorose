import React from "react";
import { icons } from "../../../../assets/assets";
import "./Faq.css";

class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswers: Array(4).fill(false), // Assuming there are 4 questions initially
    };
  }

  toggleAnswer = (index) => {
    this.setState((prevState) => {
      const newShowAnswers = [...prevState.showAnswers];
      newShowAnswers[index] = !newShowAnswers[index];
      return { showAnswers: newShowAnswers };
    });
  };

  render() {
    return (
      <div className="faqs">
        <div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-category">
            <h3 className="faq-category-title">Ordering Process</h3>
            <ul className="faq-list">
              <li className="faq-item">
                How long does it take to complete an order?{" "}
                <img
                  src={icons.add_icon}
                  alt=""
                  className="faq-icon"
                  onClick={() => this.toggleAnswer(0)}
                />
              </li>
              {this.state.showAnswers[0] && (
                <p className="faq-answer">
                  Our typical turnaround time for completing an order varies
                  depending on the complexity of the garment and current
                  workload. We aim to provide accurate estimates during the
                  consultation phase.
                </p>
              )}
              <li className="faq-item">
                Can I provide my own fabric?{" "}
                <img
                  src={icons.add_icon}
                  alt=""
                  className="faq-icon"
                  onClick={() => this.toggleAnswer(1)}
                />
              </li>
              {this.state.showAnswers[1] && (
                <p className="faq-answer">
                  Yes, we welcome customers to provide their own fabric.
                  However, we also offer a wide selection of high-quality
                  fabrics for you to choose from if needed.
                </p>
              )}
            </ul>
          </div>
          <div className="faq-category">
            <h3 className="faq-category-title">Alterations</h3>
            <ul className="faq-list">
              <li className="faq-item">
                Do you offer alterations for garments purchased elsewhere?{" "}
                <img
                  src={icons.add_icon}
                  alt=""
                  className="faq-icon"
                  onClick={() => this.toggleAnswer(2)}
                />
              </li>
              {this.state.showAnswers[2] && (
                <p className="faq-answer">
                  Yes, we offer alteration services for garments purchased
                  elsewhere. Our skilled tailors can adjust the fit and make
                  alterations to ensure your clothing fits perfectly.
                </p>
              )}
              <li className="faq-item">
                How much do alterations cost?{" "}
                <img
                  src={icons.add_icon}
                  alt=""
                  className="faq-icon"
                  onClick={() => this.toggleAnswer(3)}
                />
              </li>
              {this.state.showAnswers[3] && (
                <p className="faq-answer">
                  The cost of alterations varies depending on the complexity of
                  the work required. We provide personalized quotes based on the
                  specific alterations needed for each garment.
                </p>
              )}
            </ul>
          </div>
          {/* Add more FAQ categories as needed */}
        </div>
      </div>
    );
  }
}

export default FAQs;
