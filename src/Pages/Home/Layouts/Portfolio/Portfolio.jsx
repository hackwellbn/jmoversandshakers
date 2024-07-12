import React from 'react';
import './Portfolio.css';
import { PortfolioFeatures, AuthorImageText} from "../../../../assets/assets";



const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="images-portfolio">
        <img src={AuthorImageText.PortfolioImage2} alt="portfolio 1"/>
      </div>
      <div className="images-portfolio">
<div className="image">        <img src={AuthorImageText.PortfolioImage} alt="portfolio 1"/></div>
     <div className="images">   <img src={AuthorImageText.PortfolioImage3} alt="portfolio 1"/></div>
      </div>
    </div>
  );
}

export default Portfolio;
