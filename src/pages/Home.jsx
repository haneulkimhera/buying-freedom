import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProject from "../components/FeaturedProject";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Services />
      <FeaturedProject />
      <Footer />
    </div>
  );
};

export default Home;
