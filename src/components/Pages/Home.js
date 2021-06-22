import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import Access from "../Access/Access";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Clients />
      <Services />
      <Access />
    </div>
  );
}

export default Home;
