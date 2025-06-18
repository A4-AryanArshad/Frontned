import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import ctaImage from "./assets/images/cta-banner.jpg";
import "./assets/css/style.css";

const PartnerSection = () => {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">Start exploring now by joining us!</h2>
          <button className="btn btn-outline">
            <span>JOIN NOW</span>
            <IoHeartOutline aria-hidden="true" />
          </button>
        </div>

        <figure className="cta-banner">
          <img
            src="https://25025637.fs1.hubspotusercontent-eu1.net/hubfs/25025637/RSE.png"
            width="520"
            height="228"
            loading="lazy"
            alt="Fox"
            className="img-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default PartnerSection;
