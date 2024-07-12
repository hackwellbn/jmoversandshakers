import React from 'react';
import './Portfolio.css';
import { PortfolioFeatures } from "../../../../assets/assets";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="images-portfolio">
        <img src={PortfolioFeatures[0].image} alt="portfolio 1"/>
      </div>
      <div className="images-portfolio">
<div className="image">        <img src={PortfolioFeatures[0].image2} alt="portfolio 1"/></div>
     <div className="images">   <img src={PortfolioFeatures[0].image2} alt="portfolio 1"/></div>
      </div>
    </div>
  );
}

export default Portfolio;
