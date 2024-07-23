import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Partners.css';
import {Logos} from  "../../../../assets/assets"
const Partners = () => {
  const partners = [
    { name: 'Elevated Steel', logo: Logos.Elevated },
    { name: 'Tailorose', logo: Logos.tailoRose },
    { name: 'JBand', logo: Logos.seniorsChoir },
    { name: 'Blessed Fabricators', logo: Logos.BlessedFabricators},
    { name: 'Camp Redemption', logo: Logos.Campredemption },
  ];

  return (
    <div className="partners-carousel">
      <h2>Our Partners</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {partners.map(partner => (
          <div key={partner.name} className="partner-item">
            <img src={partner.logo} alt={`${partner.name} logo`} />
            <p className="legend">{partner.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Partners;