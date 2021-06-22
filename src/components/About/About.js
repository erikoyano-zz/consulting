import React from "react";
import "./About.css";
import ProfilePic from "../../images/satoshi-profile.png";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="component-block">
      <div className="container-wrapper">
        <Fade duration={3000}>
          <div className="title-container">
            <h1 id="about2"> About </h1>
          </div>
          <div className="intro-container">
            <img className="profile" alt="profile" src={ProfilePic} />
            <div className="text">
              <h1 className="intro-title">Satoshi Saito</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                quis erat sit amet eros porta ullamcorper eu eu erat. Duis vel
                dui lacus. Donec neque quam, lacinia vel dapibus vitae, aliquet
                sed quam. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Maecenas ac porta nisi. Nulla a eros sit amet purus
                pharetra mattis quis at purus.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
