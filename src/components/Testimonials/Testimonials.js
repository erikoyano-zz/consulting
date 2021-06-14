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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur."
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
