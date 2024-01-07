import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hostels from "../components/Hostels";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hostels />
    </div>
  );
};

export default Home;
