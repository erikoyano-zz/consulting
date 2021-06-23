import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                offset={-110}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="access"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Access
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
