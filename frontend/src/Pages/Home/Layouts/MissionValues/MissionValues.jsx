import React from 'react';
import './MissionValues.css'; // Ensure you have the corresponding CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { HeroBanner } from "../../../../assets/assets";
const MissionValues = () => {
    return (
        <div className="mission-values-container">
         <div className="text-content">
              <img src={HeroBanner[0].image} alt="Mission Banner" className="banner-image" /></div>
            <div className="text-content first">
                <div className="mission">
                    <FontAwesomeIcon icon={faBullseye} className="icon" />
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide seamless, stress-free moving experiences by safely and efficiently transporting and placing your belongings in your new home.</p>
                </div>
                <div className="values">
                    <FontAwesomeIcon icon={faHandsHelping} className="icon" />
                    <h2>Our Values</h2>
                    <p>We value customer satisfaction, professionalism, and care in every step of the moving process, ensuring that each move is handled with the utmost integrity and respect.</p>
                </div>
            </div>
        </div>
    );
};

export default MissionValues;
