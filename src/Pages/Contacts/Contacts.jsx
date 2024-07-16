import React, { useState } from 'react';
import './Contacts.css';
import { contactImages } from '../../assets/assets';

const Contacts = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42a30f2e-c60a-4746-9dd3-873d568125ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contacts">
      <h2>Contact Us</h2>
      <p>If you have any questions or need a quote, feel free to reach out!</p>
      <section className="contact-us">
        <div className="contact-wrapper">
          <img src={contactImages.ContactImage1} alt="contact" />
        </div>
        <div className="contact-wrapper">
          <div className="contact-form-container">
            <form>
            <section onSubmit={onSubmit} className="formData">
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Enter your username" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
                <input type="text" id="text" placeholder="From to" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Add a little bit more info" required></textarea>
              </div>
            </section>
                        <div className="bttn">  <button type="submit">Submit</button></div>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </section>
      <ul className="contact-details">
        <li>Phone: +254 702 105917</li>
        <li>Email: jmoversandshakers@gmail.com</li>
        <li>Address: LuckySummer, Nairobi, 00618</li>
      </ul>
    </div>
  );
}

export default Contacts;
