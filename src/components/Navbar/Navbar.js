import React, { useState, useEffect } from "react";
import { Link as Scrolling } from "react-scroll";
import { GoX, GoThreeBars } from "react-icons/go";
import "./Navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img className="navbar-logo" alt="logo" src={logo}></img>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <GoX /> : <GoThreeBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Scrolling
                to="home-scroll"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Scrolling>
            </li>
            <li className="nav-item">
              <Scrolling
                to="about-scroll"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Scrolling>
            </li>
            <li className="nav-item">
              <Scrolling
                activeClass="active"
                to="services-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Scrolling>
            </li>

            <li className="nav-item">
              <Scrolling
                activeClass="active"
                to="access-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Access
              </Scrolling>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
