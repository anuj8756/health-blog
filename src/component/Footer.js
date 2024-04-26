import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        <img src="/images/healthLogo.png" alt="HealthLogo" />
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <h1>Menu</h1>
          <h3>Hero</h3>
          <h3>Section1</h3>
          <h3>Section2</h3>
          <h3>Section3</h3>
        </div>
        <div className="footer-contact">
          <h1>Get In Touch</h1>
          <h3>New Delhi</h3>
          <h3>Healthblog@gmail.com</h3>
          <h3>+912084422881 </h3>
          <h3>FAQ'S </h3>
        </div>
      </div>
      <div className="footer-icons">
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
      <div className="copyright">
        <div className="left">2024 © Health-Blog</div>
        <div className="right">Terms & Policy</div>
      </div>
    </div>
  );
};

export default Footer;
