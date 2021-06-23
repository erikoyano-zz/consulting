import React from "react";
import "./Footer.css";
import {
  GrInstagram,
  GrYoutube,
  GrFacebook,
  GrTwitter,
  GrLinkedin,
} from "react-icons/gr";
import logo from "../../images/logo-white.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <a href="/">About</a>
          </div>
          <div className="footer-link-items">
            <h2>Services</h2>
            <a href="/">Service 1</a>
            <a href="/">Service 2</a>
            <a href="/">Service 3</a>
            <a href="/">Service 4</a>
          </div>
          <div className="footer-link-items">
            <h2>Case Study</h2>
            <a href="/">Case Study 1</a>
            <a href="/">Case Study 2</a>
            <a href="/">Case Study 3</a>
            <a href="/">Case Study 4</a>
          </div>
          <div className="footer-link-items">
            <h2>Connect with Us</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">
              <img src={logo} alt="logoimage" />
            </a>
          </div>
          <small className="website-rights">
            Saito Consulting Co.,Ltd.© 2021
          </small>
          <div className="social-icons">
            <a href="/" className="social-icon-link facebook">
              <GrFacebook />
            </a>
            <a href="/" className="social-icon-link instagram">
              <GrInstagram />
            </a>
            <a href="/" className="social-icon-link youtube">
              <GrYoutube />
            </a>
            <a href="/" className="social-icon-link twitter">
              <GrTwitter />
            </a>
            <a href="/" className="social-icon-link twitter">
              <GrLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
