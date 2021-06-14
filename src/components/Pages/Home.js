import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import Access from "../Access/Access";
import Footer from "../Footer/Footer";

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
