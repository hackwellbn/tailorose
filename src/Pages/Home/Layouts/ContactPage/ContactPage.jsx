import React from "react";
import vid_1_image from "../../../../assets/videos/istockphoto-1318603419-612x612.jpg";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div>
      <section id="contacts" className="section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-text">
          Ready to elevate your wardrobe with custom-made clothing? Contact us
          today to schedule a consultation.
        </p>
        <p className="section-text">Email: info@tailorose.com</p>
        <p className="section-text">Phone: (+254) 713070246</p>
        <p className="section-text">Address: [Kariobangi market]</p>
        <img
          src={vid_1_image}
          alt="Contact Us Image"
          className="section-image"
        />
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="Email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <br />
          <textarea placeholder="message"></textarea>
          <br />
          <button type="submit" id="btn">submit</button>
        </form>
      </section>

      <section id="contact-us">
        <h2>Get in Touch</h2>
        <p>
          Reach out to us by filling out the form above to book an appointment.
          While appointments are recommended for specialized tailoring services,
          feel free to drop by for everyday wear.
        </p>
        <p>
          If you prefer to speak with one of our team members, here's how you
          can reach us:
        </p>

        <p>
          Call us at: <a href="tel:0713070246">0713070246</a>
        </p>

        <p>
          If you need to reschedule or have any questions, please email us at:{" "}
          <a href="mailto:roseoyamo01@gmail.com">contact Me!</a>
        </p>

        <p>
          Hours: Monday - Friday 9am - 6:30pm, Saturday 9am - 5pm, closed Sunday
        </p>

        <p>
          Note: We are based in Nairobi, Kenya, specifically in the vibrant
          Kariobangi Market area.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
