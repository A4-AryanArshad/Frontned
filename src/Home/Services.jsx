import React from "react";
import {
  IoLeafOutline,
  IoEarthOutline,
  IoFlowerOutline,
  IoBoatOutline,
  IoArrowForward,
} from "react-icons/io5";

import subtitleImage from "./assets/images/subtitle-img-green.png";
import serviceBg from "./assets/images/service-map.png";
import "./assets/css/style.css";

const services = [
  {
    icon: <IoLeafOutline />,
    title: "Training & Awareness",
    text: "Strategic Sustainability Solution Enhance understanding of carbon markets, emissions reduction, and best practices through our comprehensive corporate training programs",
  },
  {
    icon: <IoEarthOutline />,
    title: "Net-Zero & ESG Strategies",
    text: "Develop robust net-zero strategies and integrate winning ESG (Environmental, Social, Governance) practices for sustainable business impact.",
  },
  {
    icon: <IoFlowerOutline />,
    title: "Blockchain Carbon Marketplace",
    text: " Blockchain Carbon Marketplace Trade verified carbon credits securely and transparently on our innovative DecarbXchange P2P blockchain marketplace.",
  },
  {
    icon: <IoBoatOutline />,
    title: "Impactful Green Investments",
    text: "Access high-impact sustainable projects through fractional investments, contributing to a greener planet while earning returns",
  },
];

const Service = () => {
  return (
    <section
      className="section service"
      id="service"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <div className="container">
        <p className="section-subtitle">
          <img src={subtitleImage} width="32" height="7" alt="Wavy line" />
          <span>What We Do</span>
        </p>

        <h2 className="h2 section-title">
          We Work Differently to <strong>keep The World Safe</strong>
        </h2>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <div className="card-icon">{service.icon}</div>
                <h3 className="h3 card-title">{service.title}</h3>
                <p className="card-text">{service.text}</p>
                <a href="#" className="btn-link">
                  <span>Read More</span>
                  <IoArrowForward aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
