import React from "react";
import HeroImage from "../../images/HeroImg.jpg";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="wrapper">
      <img src={HeroImage} class="heroImage" alt="tokyo" />
    </div>
  );
}

export default HeroSection;
