import React from "react";
import { Carousel } from "antd";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="component-block">
      <div className="container-wrapper">
        <div className="title-container">
          <h1>Testimonials</h1>
        </div>
        <Carousel autoplay>
          <div>
            <h1 className="carousel-card">
            </h1>
          </div>
          <div>
            <h3 className="carousel-card">2</h3>
          </div>
          <div>
            <h3 className="carousel-card">3</h3>
          </div>
          <div>
            <h3 className="carousel-card" s>
              4
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
