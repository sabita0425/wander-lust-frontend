import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/homeComponents/Hero";
import Features from "../components/homeComponents/Features";
import AboutUs from "../components/homeComponents/AboutUs";
import Reviews from "../components/homeComponents/Reviews";
import TripForm from "../components/common/TripForm";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <Reviews />
      </main>
    </div>
  );
};

export default HomePage;
