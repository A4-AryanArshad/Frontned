import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import "./Trading.css";
import Footer2 from '../Home/Footer2';

const Trading = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch('https://cbackend-lilac.vercel.app/card/cards');
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error("Error fetching cards:", err);
      }
    };
    fetchCards();
  }, []);

  return (
    <>
      <div id="trade">
        <Header />
      </div>
      <div id='logo2b'>
        <div id="logp2a">
          <img src="./Logo2.webp" alt="Logo" />
          <button>Coming Soon</button>
        </div>

        <div id="upperlog">
          <div id="logp2a2">
            <h1>Blockchain-Based P2P Carbon Credits Marketplace</h1>
            <img src="https://carboncredits.com/wp-content/uploads/2023/02/carbon-credit-futures-e1677257727994.jpg" alt="Marketplace" />
          </div>
        </div>

        <div id="middleer">
          <div id="logo2a3">
            <h1>Revolutionizing Carbon Emissions for a Sustainable Future</h1>
            <div id="innerl1">
              <div id="ary">
                <h1>CARBON TRADING </h1>
                <p>Unitok value from CRAw · FESZ · EU ETS, UK ETS, CH ETS</p>
                <p>COPS. A credits and EBC</p>
              </div>
              <img id="eweq" src="https://images.unsplash.com/photo-1580064461598-505b080a8242?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyYm9uJTIwZW1pc3Npb25zfGVufDB8fDB8fHww" alt="Carbon Emissions" />
            </div>
          </div>

          <div id="thirdl">
            <div id="f1">
              <h1>The Leading Carbon Credits P2P Trading Platform</h1>
              <h1>P2P Trading Platform</h1>
            </div>
            <div id="f2">
              <h1>Environmental Market Data</h1>
              <h1>at your Finger tips</h1>
            </div>
          </div>

          <div id="marketC">
            <div id="forthl">
              {cards.map((card, idx) => (
                <div id="ddu" key={idx}>
                  <div id="dd" onClick={() => window.open(card.link, "_blank")}> 
                    <button>*</button>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div id="market">
              <h1>Market Data</h1>
              <p>Imporoa monine you unil towiid pantom system with othen as dairy moosolvin ehiy ene to gnoth ethase centre finalichen of penilom opionainar and I randi motcibouss curcaloua </p>
            </div>
          </div>
        </div>

        <div id="lasterr">
          <div id="covv">
            <div id="logp2a2">
              <h2>Fractioanl Investment Hub</h2>
              <img src="https://pbservices.ge/wp-content/uploads/2023/04/life-hacks-1024x576.jpg.webp" alt="Investment Hub" />
            </div>
          </div>

          <div id="texterareaq">
            <h1>Democratizing Green Investment A New Paradigm</h1>
            <p>The urgency of climate action has spurred a global reevcalclation of investment strategies, pushing sustainable finance from a niche consideration to a central pider diffronente inisource. Winlin this transformative staff, Fractionalmat. Ownership in Green Infrastructure stands silt as a particularly compelling innovation. In represure a departure from traditional investment models, which often limit participation to institutional giant’s and high-net worth individuals.</p>
          </div>
        </div>
      <Footer2/>
      </div>
    </>
  );
};

export default Trading;
