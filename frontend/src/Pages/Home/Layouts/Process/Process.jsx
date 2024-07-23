import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Process.css';
import { HeroBanner } from "../../../../assets/assets";

const Process = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const BookingLink = (e) => {
    e.preventDefault(); // Prevent default behavior
    navigate('/booking'); // Navigate to the Booking route
  }

  return (
    <div className='wrapper'>
      <section className="body" id="body">
        <h5>Our Comprehensive Process for Moving and Information Management:</h5>
        <p>Over the years, our company has experienced ups and downs. However, we are now certified not only by the government but also by the community.</p>
        <div className="container">
          <div className="box" id="lined-box">
            <p>We ensure that your valuable items remain in perfect condition, just as you left them.</p> 
          </div>
          <div className="box">
            <p>Our transport units prioritize the highest level of security for your belongings.</p>
          </div>
          <div className="box">
            <p>We operate in areas such as Lucky Summer - Nairobi, Thika, Kiambu, and provide long-distance services, including routes from Nairobi to Kisumu.</p>
          </div>
          <div className="box">
            <p>We are dedicated to providing you with the utmost service.</p>
          </div>
          <div className="btns">
            <button className="btn">Explore</button>
            <button className="colored-btn" onClick={BookingLink}>Book Now!</button>
          </div>
        </div>
      </section>
      <section className="body">
        <img src={HeroBanner[0].image} alt="Process Image"/>
      </section>
    </div>
  );
}

export default Process;
