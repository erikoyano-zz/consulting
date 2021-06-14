import React from "react";
import "./Clients.css";
import coke from "../../images/coke.png";
import intel from "../../images/intel.png";
import jfa from "../../images/JFA.png";
import konami from "../../images/konami.png";
import cisco from "../../images/cisco.png";

function Clients() {
  return (
    <div className="component-block">
      <div className="container-wrapper">
        <div className="title-container">
          <h1> Clients</h1>
        </div>
        <div className="intro-container">
          <img className="client-image" src={coke} alt="coke" />
          <img className="client-image" src={intel} alt="intel" />
          <img className="client-image" src={jfa} alt="jfa" />
          <img className="client-image" src={konami} alt="konami" />
          <img className="client-image" src={cisco} alt="cisco" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
