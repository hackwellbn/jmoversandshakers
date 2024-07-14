import React, { useState } from 'react';
import './Contacts.css';

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
        <div className="contact-form-container">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <span>{result}</span>
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
