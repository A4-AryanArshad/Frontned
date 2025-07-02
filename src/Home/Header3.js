import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoChevronForwardOutline,
  IoSearchOutline,
  IoHeartOutline
} from "react-icons/io5";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import CTA from "./CTA";
import Service from "./Service";
import PartnerSection from "./PartnerSection";
import DonateSection from "./Donate";
import TestimonialsPartnerEventInsta from "./TestimonialsPartnerEventInsta";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>

    <div >
      <header id="wqeq" className="header">
        <div id="uuuy22" className="container">
          <h1>
    
          </h1>

          <select name="language" className="lang-switch">
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>

          {/* Open Button */}
          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            onClick={() => setNavOpen(true)}
          >
            <IoMenuOutline />
          </button>

          {/* Navbar */}
          <nav className={`navbar ${navOpen ? "active" : ""}`}>
            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              onClick={() => setNavOpen(false)}
            >
              <IoCloseOutline />
            </button>

            <a href="#" className="logo">C02e PORTAL</a>

            <ul className="navbar-list">
              {["Home", "Service", "Trade", "Pricing", "News", "Login"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="navbar-link"
                    onClick={() => setNavOpen(false)}
                  >
                    <span>{item}</span>
                    <IoChevronForwardOutline aria-hidden="true" />
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

          <div className="header-action">
         

          <Link to="/signup">  <button className="btn btn-primary">
              <span>Join Now</span>
              <IoHeartOutline aria-hidden="true" />
            </button></Link>
          </div>
        </div>
      </header>

      {/* Other Sections */}
      </div>

    </>
  );
};

export default Header;
