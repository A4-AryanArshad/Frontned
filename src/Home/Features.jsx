import React from "react";
import {
  IoShieldCheckmarkOutline,
  IoWaterOutline,
  IoLeafOutline,
  IoSnowOutline,
} from "react-icons/io5";
import "./assets/css/style.css"; // adjust the path as needed

const featuresData = [
  {
    icon: <IoShieldCheckmarkOutline />,
    title: "Safe Shelter",
    text: "Reduces energy use, lowers construction-related carbon emissions.",
  },
  {
    icon: <IoWaterOutline />,
    title: "Safe Water",
    text: "Conserves energy in purification, limits emissions output.",
  },
  {
    icon: <IoLeafOutline />,
    title: "Ecology Save",
    text: "Protects carbon sinks, maintains natural carbon balance.",
  },
  {
    icon: <IoSnowOutline />,
    title: "Environment",
    text: "Healthy ecosystems absorb carbon, regulate global climate.",
  },
];

const Features = () => {
  return (
    <section className="section features">
      <div className="container">
        <ul className="features-list">
          {featuresData.map((feature, index) => (
            <li className="features-item" key={index}>
              <div className="item-icon">{feature.icon}</div>
              <div>
                <h3 className="h4 item-title">{feature.title}</h3>
                <p className="item-text">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
