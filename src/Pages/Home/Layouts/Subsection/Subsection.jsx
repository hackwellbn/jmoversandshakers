import React from 'react';
import './Subsection.css';
import { HeroBanner, PortfolioFeatures, AuthorImageText } from '../../../../assets/assets';

const Subsection = () => {
  return (
    <section className="subsection">
      <section className="contentbody-wrapper">
        <div className="body-wrapper leftlists">
          <h1>Why JMoversAndShakers Stands Out</h1>
          <ul>
            <li>Customer-Centric Approach</li>
            <li>Innovative Moving Solutions</li>
            <li>Community Involvement</li>
            <li>Eco-Friendly Practices</li>
          </ul>
        </div>
        <div className="body-wrapper">
<div className="author-textImage">
  <div className="Textauthor">
   <span className='heading3'> <h3>what made our foundation to work </h3></span>
          <div className="auther-image">
            <img src={AuthorImageText.AuthorImage} alt="Why We Stand Out" />
          </div>
            </div>
        <div className="author-head-p">
        <h5>-martin Odhiambo-</h5>  
        <h6>-Aeronautical Engineer-</h6>
        <p className="smallfont" >"I recognized a growing challenge: people struggled with transporting belongings and organizing work during house exchanges. Our platform provides a seamless, stress-free solution."</p>
        </div>
          </div>
</div>
      </section>
      <section className="contentbody-wrapper">
        <div className="cardbody-content">
          <div className="cardbody-text">
            <div className="cardbody-image">
              <img src={HeroBanner[0].image} alt="Customer-Centric Approach" />
            </div>
            <p>Our top priority is you. We tailor our services to meet your specific needs, ensuring a smooth and personalized moving experience.</p>
          </div>
          <div className="cardbody-text">
            <div className="cardbody-image">
              <img src={AuthorImageText.House3} alt="Innovative Solutions" />
            </div>
            <p>We utilize the latest technology and innovative methods to make your move more efficient and stress-free.</p>
          </div>
          <div className="cardbody-text">
            <div className="cardbody-image">
              <img src={AuthorImageText.CharityImage} alt="Community Involvement" />
            </div>
            <p>We believe in giving back. Our company is actively involved in community programs and local charities.</p>
          </div>
          <div className="cardbody-text">
            <div className="cardbody-image">
              <img src={AuthorImageText.House1} alt="Eco-Friendly Practices" />
            </div>
            <p>We are committed to sustainability. Our eco-friendly practices ensure minimal environmental impact during your move.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Subsection;
