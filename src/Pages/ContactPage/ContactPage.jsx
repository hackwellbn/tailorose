import React from "react";
import "./Contact.css";

const ContactPage = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a49903d3-0d96-476f-8a22-ef25be1e2ec7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="address cont">
          <h2>Our Address</h2>
          <p>00618 Ruaraka Street</p>
          <p>Nairobi city county 00100</p>
          <p>Country, Kenya</p>
        </div>
        <div className="phone cont">
          <h2>Phone Number</h2>
          <p>(+254) 794422827</p>
        </div>
        <div className="email cont">
          <h2>Email Address</h2>
          <p>info@tailorose.com</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <h2>Send Us a Message</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" id="btn">Send</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactPage;
