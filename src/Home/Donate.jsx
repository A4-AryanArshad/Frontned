import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import donateImg1 from "./assets/images/donate-1.jpg";
import donateImg2 from "./assets/images/donate-2.jpg";
import donateImg3 from "./assets/images/donate-3.jpg";
import donateImg4 from "./assets/images/donate-4.jpg";
import "./assets/css/style.css";

const donateItems = [
  {
    img: "https://img1.wsimg.com/isteam/stock/104776/:/cr=t:0%25,l:5.67%25,w:88.67%25,h:100%25/rs=w:600,h:451.12781954887214,cg:true",
    heading: "Carbon Emissions Awareness Training",
    paragraph: "Our corporate training courses significantly enhance understanding of carbon markets, emissions reduction, and best practices. Equip your team to mitigate your carbon footprint.",
   
  },
  {
    img: "https://scx2.b-cdn.net/gfx/news/2022/the-economic-benefits.jpg",
    heading: "DecarbXchange P2P Marketplace",
    paragraph: "Our blockchain-based P2P marketplace offers a secure and transparent way to trade verified carbon credits, empowering direct climate action for businesses and individuals.",
   
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiqfY-6SF7HXWI-qhQv_8UfLY48k-T1m4IJL-uporwqrd1hOWmmKdD9nt3U9eF7GeLZI&usqp=CAU",
    heading: "Fractional Investment Hub",
    paragraph: "Participate in high-impact sustainable projects through small, manageable investments. Earn potential returns from real-world carbon credit assets while contributing to global sustainability",
  
  },
  {
    img: "https://png.pngtree.com/thumb_back/fh260/background/20230806/pngtree-a-waterfall-of-plants-covered-in-green-moss-image_12983506.jpg",
    heading: "Net-Zero Strategy for Business",
    paragraph: "We provide the training and resources necessary for businesses to develop and implement robust net-zero carbon strategies, driving your journey towards a sustainable future.",
  
  }
];

const DonateSection = () => {
  return (
    <section className="section donate" id="donate">
      <div className="container">
        <ul className="donate-list">
          {donateItems.map((item, index) => (
            <li key={index}>
              <div className="donate-card">
                <figure className="card-banner">
                  <img
                    src={item.img}
                    width="520"
                    height="325"
                    loading="lazy"
                    alt="Elephant"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <div className="progress-wrapper">
                    <p className="progress-text">
     
                      <data value="256">{item.heading}</data>
                    </p>
                  
                  </div>
               
               
                  <div className="card-wrapper">
                    <p className="card-wrapper-text">
                   
                      <data className="green">{item.paragraph}</data>
                    </p>
                  
                  </div>
                  <button className="btn btn-secondary">
                    <span>Join Now</span>
                    <IoHeartOutline aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DonateSection;
