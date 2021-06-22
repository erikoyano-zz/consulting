import React from "react";
import "./HeroSection.css";
import { Carousel } from "antd";
import heroimage1 from "../../images/hero1.png";
import heroimage2 from "../../images/hero2.png";
import heroimage3 from "../../images/hero3.png";
function HeroSection() {
  return (
    <div className="caro-wrapper" id="home">
      <Carousel autoplay>
        <div>
          <img className="hero" src={heroimage1} alt="adf" />
        </div>
        <div>
          <img className="hero" src={heroimage2} alt="asdf" />
        </div>
        <div>
          <img className="hero" src={heroimage3} alt="asdf" />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
