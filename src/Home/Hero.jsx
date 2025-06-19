import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import "./assets/css/style.css"; // Adjust if needed
import subtitleImage from "./assets/images/subtitle-img-white.png"; // Adjust the path

const Hero = () => {
  return (
    <article>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="container">
          <p className="section-subtitle">
            <img
              src={subtitleImage}
              width="32"
              height="7"
              alt="Wavy line"
            />
            <span>Welcome to C02e PORTAL</span>
          </p>

          <h2 className="h1 hero-title">
          Driving the Transition to a<strong>Net-Zero Economy</strong>
          </h2>

          <p className="hero-text">
          Navigate the Carbon Landscape, Invest in Green Projects, and Achieve Your Sustainability Goals
          </p>

          <button className="btn btn-primary">
            <span>Join Now</span>
            <IoHeartOutline aria-hidden="true" />
          </button>
        </div>
      </section>
    </article>
  );
};

export default Hero;
