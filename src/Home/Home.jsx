// src/pages/Home.jsx
import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import CTA from "./CTA";
import PartnerSection from "./PartnerSection";
import Service from "./Services";
import DonateSection from "./Donate";
import TestimonialsPartnerEventInsta from "./TestimonialsPartnerEventInsta";
import Header from "./Header";

const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
      <Features />
      <About />
      <PartnerSection />
      <Service />
      <DonateSection />
      <TestimonialsPartnerEventInsta />
    </>
  );
};

export default Home;
