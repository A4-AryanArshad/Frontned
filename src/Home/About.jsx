import React, { useState } from "react";
import {
  IoCheckmarkCircle,
  IoHeartOutline,
} from "react-icons/io5";

import subtitleImage from "./assets/images/subtitle-img-green.png";
import decoImg from "./assets/images/deco-img.png";
import about1 from "./assets/images/about-banner-1.jpg";
import about2 from "./assets/images/about-banner-2.jpg";
import about3 from "./assets/images/about-banner-3.jpg";
import about4 from "./assets/images/about-banner-4.jpg";

import "./assets/css/style.css"; // Adjust if needed

const tabContent = {
  "Our Mission": "we believe in a future where sustainable practices are at the core of every business and individual action. We are a comprehensive platform dedicated to accelerating the global transition to a low-carbon economy",
  "Our Vision": "To envision a world where decarbonization is universally adopted, fostering a resilient, net-zero economy where businesses and individuals collaboratively drive sustainable global impact.",
  "Next Plan": "We empower climate action through comprehensive carbon education, a transparent blockchain marketplace for credits, and accessible fractional investments in high-impact green projects, driving a sustainable future"
};

const About = () => {
  const [activeTab, setActiveTab] = useState("Our Mission");

  return (
    <section className="section about" id="about">
      <div className="container">
        {/* ABOUT BANNER */}
        <div className="about-banner">
          <h2 className="deco-title"></h2>
          <img
            src={decoImg}
            width="58"
            height="261"
            alt=""
            className="deco-img"
          />

          <div className="banner-row">
            <div className="banner-col">
              <img id="one"
                src="https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyYm9uJTIwZW1pc3Npb25zfGVufDB8fDB8fHww"
                width="315"
                height="380"
                loading="lazy"
                alt="Tiger"
                className="about-img w-100"
              />
              <img id="one"

                          src="https://media.istockphoto.com/id/2191769066/photo/tree-shaped-man-in-natural-life.jpg?s=612x612&w=0&k=20&c=vdm5JhFtX9liZTvrgwr496_yyotKdpRLZME3yVa5wps="
                width="386"
                height="250"
                loading="lazy"
                alt="Panda"
                className="about-img about-img-2 w-100"
              />
            </div>

            <div className="banner-col">
              <img id="one"
                src="https://media.istockphoto.com/id/1184253348/photo/footprint-in-the-forest.jpg?s=612x612&w=0&k=20&c=ao-NlQ0-l8rElYT-uTKccF4TWfEjUlgC1eBdN-C41MU="
                width="250"
                height="277"
                loading="lazy"
                alt="Elephant"
                className="about-img about-img-3 w-100"
              />
              <img id="one"
                           src="https://img.freepik.com/free-photo/factory-producing-co2-pollution_23-2150858367.jpg"
                
                width="315"
                height="380"
                loading="lazy"
                alt="Deer"
                className="about-img w-100"
              />
            </div>
          </div>
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-content">
          <p className="section-subtitle">
            <img src={subtitleImage} width="32" height="7" alt="Wavy line" />
            <span>Why Choose Us</span>
          </p>

          <h2 className="h2 section-title">
            Rise Your Hand to Save <strong>The World</strong>
          </h2>

          {/* TAB NAVIGATION */}
          <ul className="tab-nav">
            {Object.keys(tabContent).map((tab) => (
              <li key={tab}>
                <button
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          {/* TAB CONTENT */}
          <div className="tab-content">
            <p className="section-text">{tabContent[activeTab]}</p>

            <ul className="tab-list">
              <li className="tab-item">
                <div className="item-icon">
                  <IoCheckmarkCircle />
                </div>
                <p className="tab-text">Empower Climate Action</p>
              </li>
              <li className="tab-item">
                <div className="item-icon">
                  <IoCheckmarkCircle />
                </div>
                <p className="tab-text">Facilitate Carbon Management</p>
              </li>
              <li className="tab-item">
                <div className="item-icon">
                  <IoCheckmarkCircle />
                </div>
                <p className="tab-text">Resilient Net-Zero Economy</p>
              </li>
              <li className="tab-item">
                <div className="item-icon">
                  <IoCheckmarkCircle />
                </div>
                <p className="tab-text">Deliver Expert Education</p>
              </li>
            </ul>

            <button className="btn btn-secondary">
              <span>Learn More Us</span>
              <IoHeartOutline aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
