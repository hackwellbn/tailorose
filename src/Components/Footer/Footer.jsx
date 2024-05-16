import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <section class="footer-container">
          <div>
            <h2>reach us </h2>
            <p>
              <a href="">whatsapp</a>
            </p>
            <p>
              <a href="">Telegram</a>
            </p>
            <p>
              <a href="">linkedIn</a>
            </p>
          </div>
          <div>
            <h2>important links</h2>
            <p>
              <a href="">facebook</a>
            </p>
            <p>
              <a href="">Tiktok</a>
            </p>
            <p>
              <a href="">instagram</a>
            </p>
          </div>
          <div>
            <h2>Donate</h2>
            <p>
              <a href="">campredemption.org</a>
            </p>
            <p>
              <a href="">childsmile.org</a>
            </p>
          </div>
        </section>
        <section>
          <p>
            designed and developed by  
            <a href="mailto:softnet.innovationlab@gmail.com"> 
               |-|soft<span>Net</span>
            </a>
          </p>
          <p>&copy; 2024 Tailorose. All rights reserved.</p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
