import React from "react";

const TestimonialsPartnerEventInsta = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="testi">
        <div className="testi-content">
          <p className="section-subtitle">
            <img src="./assets/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />
            <span>Our Commitment </span>
          </p>
          <h2 className="h2 section-title">
            To a <strong>Sustainable World</strong>
          </h2>
          <div className="testi-card">
            
            <div>
              <blockquote className="testi-text">
              we believe in a future where sustainable practices are at the core of every business and individual action. We are a comprehensive platform dedicated to accelerating the global transition to a low-carbon economy. By offering expert training in carbon management, pioneering a transparent blockchain-based carbon credit marketplace, and facilitating high-impact fractional investments in green projects, we empower our clients to understand, reduce, and offset their environmental footprint. Our mission is to provide the tools, knowledge, and connections necessary for everyone to contribute meaningfully to climate action and secure a healthier planet for generations to come.
              </blockquote>
       
            </div>
          </div>
        </div>
        <figure className="testi-banner">
          <img src="https://www.haguefasteners.co.uk/wp-content/uploads/2021/10/freenaturestock-1725-1024x683.jpg" width="960" height="846" loading="lazy" alt="Rhinoceros" className="img-cover" />
        </figure>
      </section>

      {/* Partner Section */}
      <section className="section partner">
        
      </section>

      {/* Event Section */}
      <section className="section event" id="event">
        <div className="container">
          <p className="section-subtitle">
            <img src="./assets/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />
            <span>Services</span>
            <img src="./assets/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />
          </p>
          <h2 className="h2 section-title">
            Our  <strong>Services</strong>
          </h2>
          <ul className="event-list">
            {[
              {  day: "01" ,title:"Training",heading:"Carbon Management Training & Education:",paragraph:"We provide corporate employee training courses to enhance understanding of carbon markets, emissions reduction, and best practices, aiming to bring awareness to climate impact and how to mitigate their carbon footprin"},
              {  day: "02",title:"Marketplace:",heading:"DecarbXchange P2P Marketplace:",paragraph:"Our blockchain-based, peer-to-peer marketplace allows for the secure and transparent trading of verified carbon credits, empowering businesses and individuals to take direct control of their climate action." },
              {  day: "03",title:"Investment",heading:"Fractional Investment Hub:",paragraph:"We facilitate participation in high-impact sustainable projects through small, manageable investments, enabling users to earn returns from real-world carbon credit assets while contributing to the planet" }
            ].map((event, i) => (
              <li key={i}>
                <div className="event-card">
                  <time className="card-time" dateTime={event.date}>
                    <span className="month">{event.month}</span>
                    <span className="date">{event.day}</span>
                  </time>
                  <div className="wrapper">
                    <div className="card-content">
                      <p className="card-subtitle">{event.title}</p>
                      <h3 className="card-title">{event.heading}</h3>
                      <p className="card-text">{event.paragraph}</p>
                    </div>
                    <button className="btn btn-white">
                      <span>Join</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn btn-secondary">
            <span>Learn More Us</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </section>

      {/* Insta Post Section */}
    
    </>
  );
};

export default TestimonialsPartnerEventInsta;
