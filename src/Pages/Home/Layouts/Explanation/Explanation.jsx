import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarCheck, faTruck } from '@fortawesome/free-solid-svg-icons';
import './Explanation.css';
import {AuthorImageText } from '../../../../assets/assets'

const Explanation = () => {
  return (
    <>
    <section className="explanation-section">
      <div className="explanation-container">
        <h2 className="explanation-heading">How It Works</h2>
        <p className="explanation-text">
          Our process is simple and efficient. Here’s how it works:
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <h3 className="step-title">Step 1: Find a Match</h3>
            <p className="step-description">
              Use our platform to find a house exchange partner that fits your needs.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <h3 className="step-title">Step 2: Schedule a Move</h3>
            <p className="step-description">
              Choose a convenient date and time for the move.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3 className="step-title">Step 3: Move with Ease</h3>
            <p className="step-description">
              Our team will handle the moving process professionally and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="explanation-image">
      <img src={AuthorImageText.ExplanationImage}/>
    </div>
</>
  );
}

export default Explanation; 
