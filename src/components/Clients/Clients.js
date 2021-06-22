import React from "react";
import "./Clients.css";
import bridgestone from "../../images/bridgestone.png";
import intel from "../../images/intel.png";
import jfa from "../../images/JFA.png";
import konami from "../../images/konami.png";
import cisco from "../../images/cisco.png";
import Fade from "react-reveal/Fade";

function Clients() {
  return (
    <div className="component-block" id="clients">
      <div className="title-container">
        <Fade duration={4000}>
          <div className="container-wrapper">
            <h1> Clients</h1>
          </div>
          <div className="intro-container">
            <img className="client-image" src={bridgestone} alt="coke" />
            <img className="client-image" src={intel} alt="intel" />
            <img className="client-image" src={jfa} alt="jfa" />
            <img className="client-image" src={konami} alt="konami" />
            <img className="client-image" src={cisco} alt="cisco" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Clients;
