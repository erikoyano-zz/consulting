import React from "react";
import "./Access.css";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import map from "../../images/map.png";

function Access() {
  return (
    <div className="content-block">
      <div className="container-wrapper">
        <Fade duration={4000}>
          <div className="title-container" id="access-scroll">
            <h1>Access</h1>
          </div>
          <div className="access-container">
            <div className="text-container">
              <h1>Saito Consulting</h1>
              <h2>
                <AiFillPhone className="icons" />
                Tel: 080-1234-1234
              </h2>
              <h2>
                <MdLocationOn className="icons" />
                Address: 1-2-3 Shibuya-ku, Shibuya 150-0022
              </h2>
              <h2>
                <BiTime className="icons" />
                Hours: Mon-Fri　10:00 ~ 19:00
              </h2>
            </div>
            <img src={map} className="access-map" alt="map" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Access;
