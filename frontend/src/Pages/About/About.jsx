import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Movers & Shakers is dedicated to providing top-notch moving services for house exchanges. Our team is experienced, reliable, and committed to ensuring a seamless moving experience for our clients.</p>
      
      <section className="sustainability">
        <h3>Our Commitment to Sustainability</h3>
        <p>At Movers & Shakers, we are committed to promoting eco-friendly practices in all aspects of our operations. We believe in protecting our environment and contributing to a sustainable future. Here are some of our initiatives:</p>
        <ul>
          <li>Using recyclable packing materials to reduce waste.</li>
          <li>Implementing fuel-efficient routes to minimize our carbon footprint.</li>
          <li>Encouraging customers to donate or recycle unwanted items instead of discarding them.</li>
          <li>Training our team on sustainable practices and green moving solutions.</li>
        </ul>
      </section>
      
      <section className="history">
        <h3>Our History</h3>
        <p>Since our founding in [2018], Movers & Shakers has grown from a small startup to a leading moving company. We have helped countless clients with their house exchanges and moves.</p>
      </section>
      
      <section className="team">
        <h3>Meet Our Team</h3>
        <p>Our team consists of dedicated professionals with years of experience in the moving industry. We take pride in our work and strive to exceed our clients' expectations.</p>
        {/* You can add team member profiles here */}
      </section>
      
      <section className="testimonials">
        <h3>Customer Testimonials</h3>
        <p>"Movers & Shakers made our move so easy and stress-free. We couldn't be happier with their service!" - Esther achieng</p>
        <p>"The team was professional and efficient. Highly recommend!" - Evans Otieno</p>
        {/* Add more testimonials */}
      </section>
      
      <section className="services">
        <h3>Our Services</h3>
        <p>We offer a range of services to meet all your moving needs, including packing, transportation, and storage solutions.</p>
<div className="services-container">     
<ul className="services-list">
          <li>Complimentary DSTV and Zuku satellite TV installations.</li>
          <li>Essential household upkeep and maintenance.</li>
          <li>TV and wall fixture mounting services.</li>
          <li>Organizing files ahead of moving day.</li>
          <li>Clear labeling of departments before relocation.</li>
          </ul>
       <ul className="services-list">
          <li>Expert installation of wall hangings: pictures, paintings, mirrors, and TVs.</li>
          <li>Connecting electronics such as computers and printers.</li>
          <li>Providing trucks equipped with tail lifts for easy loading.</li>
          <li>Utilizing hydraulic trolleys for moving heavy items like safes.</li>
          <li>Safeguarding furniture using a variety of protective padding materials.</li>
        </ul></div>
      </section>
    </div>
  );
}

export default About;
