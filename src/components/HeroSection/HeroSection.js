import React from "react";
import HeroImage from "../../images/HeroImg.jpg";
import "./HeroSection.css";
import { Carousel } from "antd";
import heroimage1 from "../../images/hero1.png";
import heroimage2 from "../../images/hero2.png";
import heroimage3 from "../../images/hero3.png";
function HeroSection() {
  return (
    <div className="caro-wrapper">
      <Carousel autoplay>
        <div>
          <img className="hero" src={heroimage1} alt="image" />
        </div>
        <div>
          <img className="hero" src={heroimage2} alt="image" />
        </div>
        <div>
          <img className="hero" src={heroimage3} alt="image" />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
