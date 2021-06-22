import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
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
            <Link to="/sign-up">About</Link>
          </div>
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/">Service 1</Link>
            <Link to="/">Service 2</Link>
            <Link to="/">Service 3</Link>
            <Link to="/">Service 4</Link>
          </div>
          <div className="footer-link-items">
            <h2>Case Study</h2>
            <Link to="/">Case Study 1</Link>
            <Link to="/">Case Study 2</Link>
            <Link to="/">Case Study 3</Link>
            <Link to="/">Case Study 4</Link>
          </div>
          <div className="footer-link-items">
            <h2>Connect with Us</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={logo} alt="logoimage" />
            </Link>
          </div>
          <small className="website-rights">
            Saito Consulting Co.,Ltd.© 2021
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <GrFacebook />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <GrInstagram />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <GrYoutube />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <GrTwitter />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <GrLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
