import React from 'react'

const Footer = () => {
  return (
<>
  {/* Insta Post Section */}
  <section className="insta-post">
        <ul className="insta-post-list">
          {["https://media.istockphoto.com/id/2159656867/photo/young-plant-springing-up-out-of-the-moss-soil.jpg?s=612x612&w=0&k=20&c=Ty01uSR2K79x-sMScG904DPqmzUjb2zKGYdCyF3V1I0=", "https://media.istockphoto.com/id/1915263063/photo/illustration-for-environmental-concept-green-business-or-investment-an-endless-circular.jpg?s=612x612&w=0&k=20&c=mIrv13yy0NYTSwKYY5iLeBfBYX0lX1e8LtNGJcyftiw=", "https://media.istockphoto.com/id/2157221045/photo/aerial-view-of-dark-green-forest-road-and-white-electric-car-natural-landscape-and-elevated.jpg?s=612x612&w=0&k=20&c=5MouHs8slXfdmVXrWybpJOLWL8lpjo7rkX05OLnUBic=", "https://media.istockphoto.com/id/1474783424/photo/reduce-co2-emissions-to-limit-climate-change-and-global-warming.jpg?s=612x612&w=0&k=20&c=IRML6v3r5Mzz08M9AtQgPKOoYsqiiRjr5Il0PzlbFH4=", "https://media.istockphoto.com/id/1496309989/photo/reduce-co2-emission-concept-co2-symbol-on-green-grass-in-the-forest-lower-co2-emissions-to.jpg?s=612x612&w=0&k=20&c=QRF8QzYdtsA2Sypya094rMBRvXU8kKqD-Ecxoe6d5A4="].map((i) => (
            <li key={i} className="insta-post-item">
              <a href="#" className="insta-post-link">
                <img src={`${i}`} width="320" height="300" loading="lazy" alt="Instagram Image" className="img-cover" />
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </section>

</>
  )
}

export default Footer