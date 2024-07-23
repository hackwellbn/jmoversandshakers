// Booking.jsx
import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    error: '',
    success: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitBooking = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          date: values.date,
          time: values.time
        })
      });
      const data = await response.json();
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({ name: '', email: '', date: '', time: '', error: '', success: true });
      }
    } catch (err) {
      console.log('Error booking:', err);
      setValues({ ...values, error: 'An error occurred. Please try again.', success: false });
    }
  };

  return (
    <div className="Booking-card">
      <h2>Book a Service</h2>
      <div className="booking-body">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          value={values.name}
          onChange={handleChange('name')}
          required
        />
      </div>
      <div className="booking-body">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange('email')}
          required
        />
      </div>
      <div className="booking-body">
        <input
          type="date"
          id="date"
          name="date"
          value={values.date}
          onChange={handleChange('date')}
          required
        />
      </div>
      <div className="booking-body">
        <input
          type="time"
          id="time"
          name="time"
          value={values.time}
          onChange={handleChange('time')}
          required
        />
      </div>
      <button onClick={submitBooking}>Book Now</button>
      {values.success && (
        <div className="success-message">
          <p>Booking successful! We will contact you soon.</p>
        </div>
      )}
      {values.error && (
        <div className="error-message">
          <p>{values.error}</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
