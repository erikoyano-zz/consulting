import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Access from "../Access/Access";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Clients />
      <Services />
      <Testimonials />
      <Access />
    </div>
  );
}

export default Home;
