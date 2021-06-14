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
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">About</Link>
          </div>
          <div class="footer-link-items">
            <h2>Services</h2>
            <Link to="/">Service 1</Link>
            <Link to="/">Service 2</Link>
            <Link to="/">Service 3</Link>
            <Link to="/">Service 4</Link>
          </div>
          <div class="footer-link-items">
            <h2>Case Study</h2>
            <Link to="/">Case Study 1</Link>
            <Link to="/">Case Study 2</Link>
            <Link to="/">Case Study 3</Link>
            <Link to="/">Case Study 4</Link>
          </div>
          <div class="footer-link-items">
            <h2>Connect with Us</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src={logo} />
            </Link>
          </div>
          <small class="website-rights">Saito Consulting Co.,Ltd.© 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <GrFacebook />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <GrInstagram />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <GrYoutube />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <GrTwitter />
            </Link>
            <Link
              class="social-icon-link twitter"
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
